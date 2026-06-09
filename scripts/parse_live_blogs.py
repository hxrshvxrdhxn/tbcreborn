import json

json_filepath = r"C:\Users\user\.gemini\antigravity\brain\45fee501-8de8-479f-9732-ca8a0c3b3e74\.system_generated\steps\284\content.md"

with open(json_filepath, "r", encoding="utf-8") as f:
    lines = f.readlines()

# Skip metadata lines
json_str = ""
for line in lines:
    if line.startswith("Title:") or line.startswith("Description:") or line.startswith("Source:") or line.strip() == "---":
        continue
    json_str += line

try:
    data = json.loads(json_str.strip())
    items = data.get("items", [])
    print(f"Found {len(items)} blog posts in JSON feed:")
    for idx, item in enumerate(items, 1):
        print(f"{idx}. Title: {item.get('title')}")
        print(f"   Link: {item.get('id') or item.get('url')}")
        print(f"   Date: {item.get('date_published') or item.get('date_modified')}")
except Exception as e:
    print(f"Error parsing JSON: {e}")
    # print first 500 chars of json_str to see what it is
    print("Content preview:")
    print(json_str[:500])
