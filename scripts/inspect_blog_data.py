import re
import json

with open("scripts/sample_scraped_post.html", "r", encoding="utf-8") as f:
    html = f.read()

# Search for window._BLOG_DATA = {...}
match = re.search(r'window\._BLOG_DATA\s*=\s*(\{.*?\});', html, re.DOTALL)
if not match:
    # Try search without semicolon
    match = re.search(r'window\._BLOG_DATA\s*=\s*(\{.*?\}裂?)\s*<\/script>', html, re.DOTALL)

if match:
    try:
        json_str = match.group(1)
        data = json.loads(json_str)
        print("Successfully parsed _BLOG_DATA JSON!")
        print("Keys in _BLOG_DATA:", list(data.keys()))
        
        # Let's inspect 'post' or similar key
        for k in data.keys():
            val = data[k]
            if isinstance(val, dict):
                print(f"Sub-keys of {k}:", list(val.keys()))
            else:
                print(f"{k}: {str(val)[:200]}...")
                
        # If there is a post key or body key
        if 'post' in data:
            post = data['post']
            print("\nKeys in post:", list(post.keys()))
            for pk in post.keys():
                val = post[pk]
                if isinstance(val, dict) or isinstance(val, list):
                    print(f" - {pk}: type {type(val)}")
                else:
                    print(f" - {pk}: {str(val)[:200]}...")
            
            # Let's print the actual post body/content if available
            body = post.get('body') or post.get('content') or post.get('html')
            if body:
                print("\nBody / Content Found!")
                print(str(body)[:1000])
    except Exception as e:
        print("Error parsing JSON:", e)
else:
    print("Could not find window._BLOG_DATA in HTML.")
