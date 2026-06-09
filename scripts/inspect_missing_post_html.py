import json

with open("scripts/live_blogs_feed.json", "r", encoding="utf-8") as f:
    feed_data = json.load(f)

items = feed_data.get("items", [])

# Let's find some missing items (e.g. management-consulting-for-the-messy-middle-20100-employees)
for item in items:
    url = item.get("url", "")
    if "messy-middle" in url or "crm" in url or "technical-debt" in url:
        print(f"\nURL: {url}")
        print(f"Title: {item.get('title')}")
        html = item.get("html_content", "")
        print("HTML content preview (first 1000 chars):")
        print(html[:1000])
        print("...")
