import os
import re

def normalize_title(title):
    t = title.lower()
    t = t.replace("“", "").replace("”", "").replace("’", "").replace("‘", "").replace("'", "")
    t = t.replace("+", "")
    t = re.sub(r'[^a-z0-9]', '', t)
    return t

mdx_titles = {}
mdx_dir = "content/posts"
if os.path.exists(mdx_dir):
    for filename in os.listdir(mdx_dir):
        if filename.endswith(".mdx"):
            filepath = os.path.join(mdx_dir, filename)
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()
            match = re.search(r'title:\s*"(.*?)"', content)
            if match:
                title = match.group(1)
                norm = normalize_title(title)
                mdx_titles[norm] = filename

print(f"Loaded {len(mdx_titles)} titles from MDX.")

content_ts_path = "lib/content.ts"
static_titles = {}
if os.path.exists(content_ts_path):
    with open(content_ts_path, "r", encoding="utf-8") as f:
        content = f.read()
    # Let's extract titles from content.ts
    titles = re.findall(r'title:\s*["\']([^"\']+)["\']', content)
    for t in titles:
        norm = normalize_title(t)
        static_titles[norm] = t

print(f"Loaded {len(static_titles)} titles from lib/content.ts.")

overlaps = set(mdx_titles.keys()).intersection(set(static_titles.keys()))
print(f"\nOverlapping titles ({len(overlaps)}):")
for o in overlaps:
    print(f"- Title: '{static_titles[o]}' in content.ts vs MDX file '{mdx_titles[o]}'")
