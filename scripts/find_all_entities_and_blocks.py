import json
import urllib.request
import ssl
import re
from urllib.parse import unquote

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

with open("scripts/live_blogs_feed.json", "r", encoding="utf-8") as f:
    feed_data = json.load(f)

items = feed_data.get("items", [])
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}

block_types = set()
entity_types = set()

for idx, item in enumerate(items, 1):
    url = item.get("url")
    print(f"Fetching {idx}/{len(items)}: {url}")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, context=ctx) as response:
            html = response.read().decode('utf-8')
            match = re.search(r'window\._BLOG_DATA\s*=\s*(\{.*?\});', html, re.DOTALL)
            if not match:
                match = re.search(r'window\._BLOG_DATA\s*=\s*(\{.*?\}裂?)\s*<\/script>', html, re.DOTALL)
            
            if match:
                data = json.loads(match.group(1))
                post = data.get('post', {})
                full_content_str = post.get('fullContent', '')
                if full_content_str:
                    content_data = json.loads(full_content_str)
                    blocks = content_data.get('blocks', [])
                    for b in blocks:
                        block_types.add(b.get('type'))
                    
                    entity_map = content_data.get('entityMap', {})
                    for k, entity in entity_map.items():
                        entity_types.add(entity.get('type'))
    except Exception as e:
        print(f"Error for {url}: {e}")

print("\n--- Summary of Draft.js Structure ---")
print("Unique Block Types:", sorted(list(block_types)))
print("Unique Entity Types:", sorted(list(entity_types)))
