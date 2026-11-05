import json, re, sys
import httpx

BASE = "https://sahabatssh.com"
acc = json.load(open("/tmp/opencode/sb/account.json"))
c = httpx.Client(timeout=40.0, follow_redirects=True,
                 headers={"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
                                        "(KHTML, like Gecko) Chrome/156.0.0.0 Safari/537.36"})
c.cookies.update(acc["cookies"])

r = c.get(f"{BASE}/dashboard")
print("DASH", r.status_code, len(r.text))
open("/tmp/opencode/sb/dashboard.html", "w").write(r.text)
links = sorted(set(re.findall(r'(?:href|src|action)="([^"]+)"', r.text)))
for l in links:
    if "asset" in l or l.endswith(".css") or l.endswith(".js") or l.startswith("#"):
        continue
    print("LINK", l)
