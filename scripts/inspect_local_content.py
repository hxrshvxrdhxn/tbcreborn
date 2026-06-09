import json
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

# Load content.ts
with open("lib/content.ts", "r", encoding="utf-8") as f:
    content_ts = f.read()

slug_matches = re.findall(r'slug:\s*["\']([^"\']+)["\']', content_ts)
print(f"Total slugs in lib/content.ts: {len(slug_matches)}")
for s in slug_matches:
    norm = normalize_slug(s)
    in_feed = norm in feed_slugs_normalized
    print(f"- {s} (normalized: {norm}) -> in feed? {in_feed}")
