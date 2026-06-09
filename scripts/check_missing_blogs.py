import json
import os
import re
from urllib.parse import unquote

# Load live feed
with open("scripts/live_blogs_feed.json", "r", encoding="utf-8") as f:
    feed_data = json.load(f)

feed_items = feed_data.get("items", [])

def normalize_slug(slug):
    # Unquote and lowercase
    s = unquote(slug).lower()
    # Replace curly quotes and other specials with empty or hyphens
    s = s.replace("“", "").replace("”", "").replace("’", "").replace("‘", "").replace("'", "")
    s = s.replace("", "")
    s = s.replace("+", "")
    # Keep only alphanumeric and hyphens
    s = re.sub(r'[^a-z0-9\-]', '', s)
    # Remove consecutive hyphens
    s = re.sub(r'-+', '-', s)
    return s.strip('-')

feed_slugs_normalized = {}
for item in feed_items:
    url = item.get("url") or item.get("id") or ""
    if "/f/" in url:
        slug = url.split("/f/")[-1]
    else:
        slug = url.split("/")[-1]
    
    norm = normalize_slug(slug)
    feed_slugs_normalized[norm] = {
        'original_slug': slug,
        'item': item
    }

# Load MDX slugs
mdx_dir = "content/posts"
mdx_slugs_normalized = set()
if os.path.exists(mdx_dir):
    for filename in os.listdir(mdx_dir):
        if filename.endswith(".mdx"):
            mdx_slugs_normalized.add(normalize_slug(filename[:-4]))

# Load lib/content.ts slugs
content_ts_path = "lib/content.ts"
content_ts_slugs_normalized = set()
if os.path.exists(content_ts_path):
    with open(content_ts_path, "r", encoding="utf-8") as f:
        content = f.read()
    slug_matches = re.findall(r'slug:\s*["\']([^"\']+)["\']', content)
    for s in slug_matches:
        content_ts_slugs_normalized.add(normalize_slug(s))

all_local_slugs_normalized = mdx_slugs_normalized.union(content_ts_slugs_normalized)

missing_normalized = []
for norm, info in feed_slugs_normalized.items():
    if norm not in all_local_slugs_normalized:
        missing_normalized.append((norm, info))

print(f"Total feed items: {len(feed_items)}")
print(f"Total unique feed slugs (normalized): {len(feed_slugs_normalized)}")
print(f"Total unique local slugs (normalized): {len(all_local_slugs_normalized)}")
print(f"Total truly missing posts: {len(missing_normalized)}")

print("\nMissing posts:")
for idx, (norm, info) in enumerate(missing_normalized, 1):
    item = info['item']
    print(f"{idx}. Slug: {norm}")
    print(f"   Title: {item.get('title')}")
    print(f"   Original URL: {item.get('url')}")
