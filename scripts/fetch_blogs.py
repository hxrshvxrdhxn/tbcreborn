import urllib.request
import json
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = "https://turbobytesconsulting.com/blogs-1/f.json"
try:
    print(f"Fetching {url}...")
    req = urllib.request.Request(
        url, 
        headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
    )
    with urllib.request.urlopen(req, context=ctx) as response:
        content = response.read().decode('utf-8')
        data = json.loads(content)
        print("Successfully fetched feed!")
        items = data.get("items", [])
        print(f"Total items in feed: {len(items)}")
        
        # Save to a local file for subsequent processing
        with open("scripts/live_blogs_feed.json", "w", encoding="utf-8") as out:
            json.dump(data, out, indent=2)
        print("Saved feed to scripts/live_blogs_feed.json")
        
        for idx, item in enumerate(items[:5]):
            print(f"\nItem {idx + 1}:")
            print(f"Title: {item.get('title')}")
            print(f"ID/URL: {item.get('id')}")
            print(f"Published: {item.get('date_published')}")
            print(f"Summary: {item.get('summary')}")
            print(f"Content length: {len(item.get('content_html', ''))}")
except Exception as e:
    print(f"Error fetching feed: {e}")
