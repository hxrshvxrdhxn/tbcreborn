import re

html_filepath = r"C:\Users\user\.gemini\antigravity\brain\45fee501-8de8-479f-9732-ca8a0c3b3e74\.system_generated\steps\263\content.md"

with open(html_filepath, "r", encoding="utf-8") as f:
    html = f.read()

hrefs = re.findall(r'href=["\']([^"\']+)["\']', html)
print(f"All {len(hrefs)} hrefs found:")
for h in set(hrefs):
    print(f"- {h}")
