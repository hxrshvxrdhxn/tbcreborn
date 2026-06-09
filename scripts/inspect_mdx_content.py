import json
import os
import re
from urllib.parse import unquote

with open("scripts/live_blogs_feed.json", "r", encoding="utf-8") as f:
    feed_data = json.load(f)

feed_items = feed_data.get("items", [])

def normalize_slug(slug):
    s = unquote(slug).lower()
    s = s.replace("“", "").replace("”", "").replace("’", "").replace("‘", "").replace("'", "")
    s = s.replace("", "")
    s = s.replace("+", "")
    s = re.sub(r'[^a-z0-9\-]', '', s)
    s = re.sub(r'-+', '-', s)
    return s.strip('-')

feed_slugs_normalized = {}
for item in feed_items:
    url = item.get("url") or item.get("id") or ""
    slug = url.split("/f/")[-1] if "/f/" in url else url.split("/")[-1]
    norm = normalize_slug(slug)
    feed_slugs_normalized[norm] = item

mdx_dir = "content/posts"
mdx_files = [f for f in os.listdir(mdx_dir) if f.endswith(".mdx")]
print(f"Total MDX posts in {mdx_dir}: {len(mdx_files)}")
for f in mdx_files:
    slug = f[:-4]
    norm = normalize_slug(slug)
    in_feed = norm in feed_slugs_normalized
    print(f"- {f} (normalized: {norm}) -> in feed? {in_feed}")
