import json
from bs4 import BeautifulSoup
import os

with open("scripts/live_blogs_feed.json", "r", encoding="utf-8") as f:
    feed_data = json.load(f)

items = feed_data.get("items", [])

print(f"Total items: {len(items)}")

categories = set()
tags = set()

for idx, item in enumerate(items):
    # Check if there are other keys in any item
    for k in item.keys():
        if k not in ['id', 'html_content', 'url', 'title', 'summary', 'date_modified']:
            print(f"Found extra key in item {idx}: {k} -> {item[k]}")
            
    # Parse HTML content to look for headers or categories
    html = item.get("html_content", "")
    soup = BeautifulSoup(html, "html.parser")
    
    # Check if there are standard metadata wrappers in GoDaddy blogs
    # E.g. sometimes categories are written at the top or bottom
    # Let's print the first 200 chars of text content
    text = soup.get_text()
    words = text.split()
    text_preview = " ".join(words[:15])
    print(f"{idx+1}. Title: {item.get('title')}")
    print(f"   Date: {item.get('date_modified')}")
    print(f"   Text preview: {text_preview}...")
