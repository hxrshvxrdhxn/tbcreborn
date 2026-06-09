import json

with open("scripts/live_blogs_feed.json", "r", encoding="utf-8") as f:
    data = json.load(f)

items = data.get("items", [])
print(f"Total items: {len(items)}")
if items:
    first_item = items[0]
    print("\nKeys in first item:", list(first_item.keys()))
    for key, val in first_item.items():
        val_str = str(val)
        if len(val_str) > 200:
            val_str = val_str[:200] + "..."
        print(f" - {key}: {val_str}")
