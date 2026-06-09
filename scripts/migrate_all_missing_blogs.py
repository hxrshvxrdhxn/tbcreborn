import json
import urllib.request
import ssl
import re
import os
import html
from urllib.parse import unquote
import time

# Create SSL context to ignore certificate issues if any
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

POSTS_DIR = "content/posts"
os.makedirs(POSTS_DIR, exist_ok=True)

# Load analysis
with open("scripts/missing_blogs_analysis.json", "r", encoding="utf-8") as f:
    missing_posts = json.load(f)

# Load feed to fallback for description/summary
with open("scripts/live_blogs_feed.json", "r", encoding="utf-8") as f:
    feed_data = json.load(f)
feed_by_slug = {}
for item in feed_data.get("items", []):
    url = item.get("url") or item.get("id") or ""
    slug = url.split("/f/")[-1] if "/f/" in url else url.split("/")[-1]
    feed_by_slug[unquote(slug).lower()] = item

def get_category(title, content):
    text = (title + " " + content).lower()
    if any(k in text for k in ["crm", "tech", "software", "it ", "it-", "stack", "silo", "data", "automatic", "automation", "security", "cybersecurity", "encryption"]):
        return "Technology"
    if any(k in text for k in ["founder", "ceo", "leadership", "c-suite", "decision", "manifesto", "organization"]):
        return "Leadership"
    if any(k in text for k in ["pricing", "margin", "profit", "leakage", "rounding error", "cost", "value-based"]):
        return "Consulting"
    if any(k in text for k in ["communication", "operations", "process", "sop", "teams", "employee", "scale", "scaling", "meeting"]):
        return "Operations"
    return "Strategy"

def format_draft_js_block(block, entity_map):
    text = block.get('text', '')
    inline_styles = block.get('inlineStyleRanges', [])
    entity_ranges = block.get('entityRanges', [])
    
    insertions = []
    
    # Process inline styles
    for style in inline_styles:
        s_type = style.get('style')
        offset = style.get('offset')
        length = style.get('length')
        if s_type == 'BOLD':
            insertions.append((offset, 0, '**'))
            insertions.append((offset + length, 3, '**'))
        elif s_type == 'ITALIC':
            insertions.append((offset, 1, '*'))
            insertions.append((offset + length, 2, '*'))
        elif s_type == 'CODE':
            insertions.append((offset, 0, '`'))
            insertions.append((offset + length, 3, '`'))
            
    # Process links
    for er in entity_ranges:
        offset = er.get('offset')
        length = er.get('length')
        key = str(er.get('key'))
        entity = entity_map.get(key, {})
        if entity.get('type') == 'LINK':
            url = entity.get('data', {}).get('url', '')
            insertions.append((offset, -1, '['))
            insertions.append((offset + length, 4, f']({url})'))
            
    # Sort insertions by index ascending, then by priority for nesting stability
    insertions.sort(key=lambda x: (x[0], x[1]))
    
    chars = list(text)
    for index, priority, tag in reversed(insertions):
        chars.insert(index, tag)
        
    return "".join(chars)

def clean_text(text):
    # Convert curly quotes and other unicode artifacts
    text = text.replace("“", '"').replace("”", '"')
    text = text.replace("‘", "'").replace("’", "'")
    text = text.replace("–", "-").replace("—", "-")
    # Clean up backslashes/quotes in frontmatter
    return text

def convert_to_markdown(content_data):
    blocks = content_data.get('blocks', [])
    entity_map = content_data.get('entityMap', {})
    
    markdown_parts = []
    in_list = False
    
    for b in blocks:
        b_type = b.get('type', 'unstyled')
        text = b.get('text', '').strip()
        
        # Format inline styles
        formatted_text = format_draft_js_block(b, entity_map)
        
        # Handle list transitions
        if b_type != 'unordered-list-item' and b_type != 'ordered-list-item':
            in_list = False
            
        # Parse block type
        if b_type.startswith('header-'):
            level = b_type.split('-')[1]
            if level == 'one':
                markdown_parts.append(f"\n## {formatted_text}\n") # Map H1 in blog to H2 in MDX since title is H1
            elif level == 'two':
                markdown_parts.append(f"\n## {formatted_text}\n")
            elif level == 'three':
                markdown_parts.append(f"\n### {formatted_text}\n")
            elif level == 'four':
                markdown_parts.append(f"\n#### {formatted_text}\n")
            else:
                markdown_parts.append(f"\n##### {formatted_text}\n")
        elif b_type == 'unordered-list-item':
            markdown_parts.append(f"- {formatted_text}")
            in_list = True
        elif b_type == 'ordered-list-item':
            markdown_parts.append(f"1. {formatted_text}")
            in_list = True
        elif b_type == 'blockquote':
            markdown_parts.append(f"\n> {formatted_text}\n")
        elif b_type == 'code-block':
            markdown_parts.append(f"\n```\n{formatted_text}\n```\n")
        elif b_type == 'atomic':
            # Atomic blocks are usually images in Draft.js. Let's see if we can find an image entity
            entity_ranges = b.get('entityRanges', [])
            img_md = ""
            for er in entity_ranges:
                key = str(er.get('key'))
                entity = entity_map.get(key, {})
                if entity.get('type') == 'IMAGE':
                    src = entity.get('data', {}).get('src', '')
                    alt = entity.get('data', {}).get('alt', 'Blog Image')
                    img_md = f"\n![{alt}]({src})\n"
                    break
            if img_md:
                markdown_parts.append(img_md)
        else: # unstyled or others
            # If the unstyled block contains newlines and bullet chars (e.g. \n)
            if '\n' in formatted_text and ('' in formatted_text or '-' in formatted_text or '*' in formatted_text):
                lines = formatted_text.split('\n')
                list_lines = []
                for line in lines:
                    line = line.strip()
                    if not line:
                        continue
                    # Remove bullet character
                    line_clean = re.sub(r'^[\-\*\u2022]\s*', '', line).strip()
                    list_lines.append(f"- {line_clean}")
                markdown_parts.append("\n" + "\n".join(list_lines) + "\n")
            elif formatted_text.strip():
                markdown_parts.append(f"\n{formatted_text}\n")
                
    # Join parts and normalize newlines
    md = "\n".join(markdown_parts)
    md = re.sub(r'\n{3,}', '\n\n', md)
    return md.strip()

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}

success_count = 0
failed_count = 0

print(f"Starting migration of {len(missing_posts)} posts...")

for idx, post_info in enumerate(missing_posts, 1):
    slug = post_info['slug']
    url = post_info['url']
    print(f"\n[{idx}/{len(missing_posts)}] Processing: {slug}")
    
    html_content = ""
    # Retry loop for robust fetching
    for attempt in range(1, 4):
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, context=ctx, timeout=10) as response:
                html_content = response.read().decode('utf-8')
                break
        except Exception as e:
            print(f"   Attempt {attempt} failed to fetch {url}: {e}")
            if attempt < 3:
                time.sleep(2)
            else:
                print(f"   Failed all attempts to fetch {url}")
                
    if not html_content:
        failed_count += 1
        continue
        
    # Extract window._BLOG_DATA
    match = re.search(r'window\._BLOG_DATA\s*=\s*(\{.*?\});', html_content, re.DOTALL)
    if not match:
        match = re.search(r'window\._BLOG_DATA\s*=\s*(\{.*?\}裂?)\s*<\/script>', html_content, re.DOTALL)
        
    if not match:
        print(f"   Error: Could not find window._BLOG_DATA in HTML for {slug}")
        failed_count += 1
        continue
        
    try:
        blog_data = json.loads(match.group(1))
        post_data = blog_data.get('post', {})
        
        title = clean_text(post_data.get('title', post_info['title']))
        published_date_raw = post_data.get('publishedDate') or post_data.get('date') or post_info['date']
        
        # Format date as e.g. "15 April 2026"
        # date format in json is: "2026-04-15T07:07:21.345Z" or similar
        date_str = ""
        try:
            # Parse YYYY-MM-DD
            match_date = re.match(r'(\d{4})-(\d{2})-(\d{2})', published_date_raw)
            if match_date:
                year, month_num, day = match_date.groups()
                months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                month_name = months[int(month_num) - 1]
                # Format: "15 April 2026"
                date_str = f"{int(day)} {month_name} {year}"
        except Exception as de:
            print(f"   Date formatting error: {de}")
            date_str = "15 April 2026" # Fallback
            
        full_content_str = post_data.get('fullContent', '')
        if not full_content_str:
            print(f"   Error: fullContent is empty for {slug}")
            failed_count += 1
            continue
            
        content_json = json.loads(full_content_str)
        markdown_body = convert_to_markdown(content_json)
        
        # Post-process markdown_body to clean founder name
        # "No founder names must appear on any public page"
        # Replace "Harshvardhan Goel" or "Harshvardhan" with "Turbo Bytes Consulting" or "TBC"
        markdown_body_cleaned = re.sub(r'\bHarsh(vardhan)?(\s+Goel)?\b', 'Turbo Bytes Consulting', markdown_body, flags=re.IGNORECASE)
        # Ensure clean text format
        markdown_body_cleaned = clean_text(markdown_body_cleaned)
        
        # Excerpt
        feed_item = feed_by_slug.get(slug.lower())
        excerpt = ""
        if feed_item and feed_item.get('summary'):
            excerpt = clean_text(feed_item.get('summary'))
        else:
            # Generate excerpt from first few words of markdown body
            text_only = re.sub(r'[\#\*\_`\[\]\(\)]', '', markdown_body_cleaned)
            words = text_only.split()
            excerpt = " ".join(words[:30]) + "..."
            
        # Clean double quotes in excerpt
        excerpt = excerpt.replace('"', "'")
        
        # Word count and read time
        word_count = len(markdown_body_cleaned.split())
        read_time_min = max(3, round(word_count / 200))
        read_time_str = f"{read_time_min} min read"
        
        category = get_category(title, markdown_body_cleaned)
        
        # MDX File Output
        # Frontmatter needs title wrapped in quotes
        title_escaped = title.replace('"', '\\"')
        mdx_content = f"""---
title: "{title_escaped}"
date: "{date_str}"
category: "{category}"
readTime: "{read_time_str}"
excerpt: "{excerpt}"
status: "published"
publishedAt: "{date_str}"
---

{markdown_body_cleaned}
"""
        
        filepath = os.path.join(POSTS_DIR, f"{slug}.mdx")
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(mdx_content)
            
        print(f"   Successfully migrated -> {filepath}")
        success_count += 1
        
    except Exception as ex:
        print(f"   Error migrating {slug}: {ex}")
        failed_count += 1

print(f"\nMigration completed: {success_count} succeeded, {failed_count} failed.")
