import json

with open("scripts/live_blogs_feed.json", "r", encoding="utf-8") as f:
    feed_data = json.load(f)

items = feed_data.get("items", [])
block_types = set()

for item in items:
    html = item.get("html_content", "")
    # Wait, we want to parse the block types from fullContent
    # Let's fetch and parse window._BLOG_DATA for each URL?
    # No, we already saved some analysis, but we can do a quick check on the ones we have,
    # or write a script that does a quick test parsing of all 41.
    # Actually, we can run a loop to fetch the block types for all 41 live posts!
    pass
