import json
import urllib.request
import ssl
import re
from urllib.parse import unquote

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

with open("scripts/live_blogs_feed.json", "r", encoding="utf-8") as f:
    feed_data = json.load(f)

items = feed_data.get("items", [])

def normalize_slug(slug):
    s = unquote(slug).lower()
    s = s.replace("“", "").replace("”", "").replace("’", "").replace("‘", "").replace("'", "")
    s = s.replace("", "")
    s = s.replace("+", "")
    s = re.sub(r'[^a-z0-9\-]', '', s)
    s = re.sub(r'-+', '-', s)
    return s.strip('-')

feed_slugs_normalized = {}
for item in items:
    url = item.get("url") or item.get("id") or ""
    slug = url.split("/f/")[-1] if "/f/" in url else url.split("/")[-1]
    norm = normalize_slug(slug)
    feed_slugs_normalized[norm] = item

# Local MDX slugs
import os
mdx_slugs_normalized = set()
mdx_dir = "content/posts"
if os.path.exists(mdx_dir):
    for filename in os.listdir(mdx_dir):
        if filename.endswith(".mdx"):
            mdx_slugs_normalized.add(normalize_slug(filename[:-4]))

# Local static slugs
content_ts_slugs_normalized = set()
if os.path.exists("lib/content.ts"):
    with open("lib/content.ts", "r", encoding="utf-8") as f:
        content = f.read()
    slug_matches = re.findall(r'slug:\s*["\']([^"\']+)["\']', content)
    for s in slug_matches:
        content_ts_slugs_normalized.add(normalize_slug(s))

all_local = mdx_slugs_normalized.union(content_ts_slugs_normalized)

missing_normalized = []
for norm, info in feed_slugs_normalized.items():
    if norm not in all_local:
        missing_normalized.append((norm, info))

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}

results = []
for idx, (norm, info) in enumerate(missing_normalized, 1):
    url = info.get("url")
    print(f"Fetching {idx}/{len(missing_normalized)}: {url}")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, context=ctx) as response:
            html = response.read().decode('utf-8')
            match = re.search(r'window\._BLOG_DATA\s*=\s*(\{.*?\});', html, re.DOTALL)
            if not match:
                match = re.search(r'window\._BLOG_DATA\s*=\s*(\{.*?\}裂?)\s*<\/script>', html, re.DOTALL)
            
            title = info.get("title")
            published_date = info.get("date_modified")
            founder_mentions = []
            
            if match:
                data = json.loads(match.group(1))
                post = data.get('post', {})
                title = post.get('title', title)
                published_date = post.get('publishedDate') or post.get('date') or published_date
                
                # Check for founder name in body text
                full_content_str = post.get('fullContent', '')
                if full_content_str:
                    try:
                        content_data = json.loads(full_content_str)
                        blocks = content_data.get('blocks', [])
                        text_content = " ".join([b.get('text', '') for b in blocks])
                        
                        # Look for "Harshvardhan" or "Harsh"
                        if re.search(r'\bHarsh(vardhan)?\b', text_content, re.IGNORECASE):
                            founder_mentions.append("Harshvardhan")
                    except Exception as pe:
                        print(f"Error parsing blocks for {norm}: {pe}")
            
            results.append({
                "slug": norm,
                "title": title,
                "date": published_date,
                "url": url,
                "founder_mentions": founder_mentions
            })
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        results.append({
            "slug": norm,
            "title": info.get("title"),
            "date": info.get("date_modified"),
            "url": url,
            "error": str(e),
            "founder_mentions": []
        })

# Write the analysis to a JSON file
with open("scripts/missing_blogs_analysis.json", "w", encoding="utf-8") as out:
    json.dump(results, out, indent=2)
print("Analysis saved to scripts/missing_blogs_analysis.json")
