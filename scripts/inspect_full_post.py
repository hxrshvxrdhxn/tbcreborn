import json

with open("scripts/live_blogs_feed.json", "r", encoding="utf-8") as f:
    feed_data = json.load(f)

items = feed_data.get("items", [])
for item in items:
    url = item.get("url", "")
    if "technical-debt" in url:
        print(f"URL: {url}")
        print("HTML content:")
        print(item.get("html_content"))
        break
