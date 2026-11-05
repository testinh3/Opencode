import json, re
import httpx

BASE = "https://sahabatssh.com"
acc = json.load(open("/tmp/opencode/sb/account.json"))
c = httpx.Client(timeout=40.0, follow_redirects=True,
                 headers={"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
                                        "(KHTML, like Gecko) Chrome/156.0.0.0 Safari/537.36"})
c.cookies.update(acc["cookies"])
tok = json.load(open("/tmp/opencode/sb/account.json")).get("activate")
if not tok:
    import sys
    tok = sys.argv[1]
r = c.get(f"{BASE}/auth/activate_account?token={tok}")
print("ACTIVATE", r.status_code, re.sub(r"<[^>]+>", " ", r.text)[:400])
r = c.get(f"{BASE}/create/vmess")
open("/tmp/opencode/sb/create_vmess2.html", "w").write(r.text)
print("VMESS", r.status_code, len(r.text))
print("locked count:", r.text.count("Terkunci"))
buttons = re.findall(r'<button[^>]*>.*?</button>', r.text, re.S)
for b in buttons[:12]:
    print("BTN", re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", b)).strip()[:80], "|", re.findall(r'onclick="([^"]+)"', b))
