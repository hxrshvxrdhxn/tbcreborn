import os
import re
import urllib.request
import urllib.error
import time

MAIN_ROUTES = [
    "/",
    "/about",
    "/admin",
    "/admin/login",
    "/blog",
    "/book-consultation",
    "/contact",
    "/engagement",
    "/privacy-policy",
    "/services",
    "/services/ai-training",
    "/services/custom-llm",
    "/services/slate",
    "/services/smm",
    "/services/web-development",
    "/terms",
    "/work",
]

def get_mdx_slugs():
    slugs = []
    mdx_dir = "content/posts"
    if os.path.exists(mdx_dir):
        for filename in os.listdir(mdx_dir):
            if filename.endswith(".mdx") or filename.endswith(".md"):
                slug = filename.replace(".mdx", "").replace(".md", "")
                filepath = os.path.join(mdx_dir, filename)
                with open(filepath, "r", encoding="utf-8") as f:
                    content = f.read()
                # If status is draft, skip testing
                status_match = re.search(r'status:\s*"?(\w+)"?', content)
                if status_match and status_match.group(1) == "draft":
                    continue
                # If scheduled and publishedAt in future, skip testing
                published_match = re.search(r'publishedAt:\s*"?([\d\-\:\w]+)"?', content)
                if published_match:
                    pub_date = published_match.group(1)
                    # simple check if date is in the future
                    try:
                        if time.strptime(pub_date[:10], "%Y-%m-%d") > time.localtime():
                            continue
                    except Exception:
                        pass
                slugs.append(slug)
    return slugs

def get_static_slugs():
    content_ts_path = "lib/content.ts"
    slugs = []
    if os.path.exists(content_ts_path):
        with open(content_ts_path, "r", encoding="utf-8") as f:
            content = f.read()
        slugs = re.findall(r'slug:\s*["\']([^"\']+)["\']', content)
    return slugs

def test_routes():
    mdx_slugs = get_mdx_slugs()
    static_slugs = get_static_slugs()
    
    print(f"Found {len(mdx_slugs)} MDX posts.")
    print(f"Found {len(static_slugs)} static posts.")
    
    all_routes = list(MAIN_ROUTES)
    for slug in mdx_slugs + static_slugs:
        all_routes.append(f"/blog/{slug}")
        
    print(f"Total routes to test: {len(all_routes)}")
    
    base_url = "http://localhost:6969"
    failed = []
    
    # Wait a moment for dev server compilation if needed
    time.sleep(2)
    
    for route in all_routes:
        url = f"{base_url}{route}"
        try:
            req = urllib.request.Request(
                url, 
                headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
            )
            with urllib.request.urlopen(req, timeout=10) as response:
                status = response.status
                if status != 200:
                    print(f"[FAIL] {route} - Status Code: {status}")
                    failed.append((route, f"Status Code: {status}"))
                else:
                    print(f"[OK] {route}")
        except urllib.error.HTTPError as e:
            print(f"[FAIL] {route} - HTTP Error: {e.code} ({e.reason})")
            failed.append((route, f"HTTP Error {e.code}: {e.reason}"))
        except urllib.error.URLError as e:
            print(f"[FAIL] {route} - URL Error: {e.reason}")
            failed.append((route, f"URL Error: {e.reason}"))
        except Exception as e:
            print(f"[FAIL] {route} - Error: {e}")
            failed.append((route, f"General Error: {e}"))
            
    print("\n" + "="*40)
    if failed:
        print(f"TEST FAILED: {len(failed)} routes failed!")
        for route, error in failed:
            print(f" - {route} -> {error}")
        return False
    else:
        print("ALL ROUTES PASSED SUCCESSFULLY!")
        return True

if __name__ == "__main__":
    import sys
    success = test_routes()
    sys.exit(0 if success else 1)
