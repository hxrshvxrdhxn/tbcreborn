import json
from bs4 import BeautifulSoup

with open("scripts/live_blogs_feed.json", "r", encoding="utf-8") as f:
    feed_data = json.load(f)

items = feed_data.get("items", [])
tags = set()

for item in items:
    html = item.get("html_content", "")
    soup = BeautifulSoup(html, "html.parser")
    for t in soup.find_all():
        tags.add(t.name)

print("All unique tags found in the feed HTML:")
print(sorted(list(tags)))
