import json

with open("scripts/live_blogs_feed.json", "r", encoding="utf-8") as f:
    feed_data = json.load(f)

items = feed_data.get("items", [])
for idx, item in enumerate(items, 1):
    html = item.get("html_content", "")
    summary = item.get("summary", "")
    print(f"{idx}. {item.get('title')}")
    print(f"   Slug: {item.get('url').split('/')[-1] if item.get('url') else ''}")
    print(f"   html_content length: {len(html)}")
    print(f"   summary length: {len(summary)}")
