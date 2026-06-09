import urllib.request
import ssl
import re
from bs4 import BeautifulSoup

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = "https://turbobytesconsulting.com/blogs-1/f/technical-debt-the-silent-killer-of-business-growth"
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}

try:
    print(f"Fetching {url}...")
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req, context=ctx) as response:
        html = response.read().decode('utf-8')
        print("Fetched successfully. Length:", len(html))
        
        # Parse with BeautifulSoup
        soup = BeautifulSoup(html, "html.parser")
        
        # Save html to view
        with open("scripts/sample_scraped_post.html", "w", encoding="utf-8") as f:
            f.write(html)
        print("Saved HTML to scripts/sample_scraped_post.html")
        
        # Print a few elements to identify where the blog body is
        # Typically GoDaddy uses specific classes or structured layout
        # Let's search for the text: "Technical debt refers to"
        target_text = "Technical debt refers to"
        paragraphs = soup.find_all(text=lambda t: t and target_text in t)
        print(f"Found lambda occurrences: {len(paragraphs)}")
        for p in paragraphs:
            parent = p.parent
            print(f"Parent element: {parent.name}, Class: {parent.get('class')}")
            # Print parent text
            print("Parent text preview:")
            print(parent.get_text()[:400])
            
except Exception as e:
    print(f"Error: {e}")
