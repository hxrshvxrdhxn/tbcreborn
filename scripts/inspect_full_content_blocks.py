import json

with open("scripts/sample_scraped_post.html", "r", encoding="utf-8") as f:
    html = f.read()

import re
match = re.search(r'window\._BLOG_DATA\s*=\s*(\{.*?\});', html, re.DOTALL)
if match:
    data = json.loads(match.group(1))
    post = data.get('post', {})
    full_content = post.get('fullContent')
    if full_content:
        content_data = json.loads(full_content)
        print("Blocks structure keys:", list(content_data.keys()))
        blocks = content_data.get('blocks', [])
        print(f"Total blocks: {len(blocks)}")
        
        # Collect unique block types
        types = set()
        for b in blocks:
            types.add(b.get('type'))
        print("Unique block types:", list(types))
        
        # Print first 15 blocks to see their text and type
        for idx, b in enumerate(blocks[:20]):
            print(f"Block {idx+1}: type={b.get('type')}, depth={b.get('depth')}")
            print(f"  Text: {b.get('text')}")
            if b.get('inlineStyleRanges'):
                print(f"  Inline styles: {b.get('inlineStyleRanges')}")
            if b.get('entityRanges'):
                print(f"  Entities: {b.get('entityRanges')}")
