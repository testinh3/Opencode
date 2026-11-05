import json, re
import httpx

BASE = "https://sahabatssh.com"
acc = json.load(open("/tmp/opencode/sb/account.json"))
c = httpx.Client(timeout=40.0, follow_redirects=True,
                 headers={"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
                                        "(KHTML, like Gecko) Chrome/156.0.0.0 Safari/537.36"})
c.cookies.update(acc["cookies"])

for path in ["/create/vmess", "/service/vmess_hourly/list", "/service/vmess_monthly/list"]:
    r = c.get(f"{BASE}{path}")
    name = path.strip("/").replace("/", "_")
    open(f"/tmp/opencode/sb/{name}.html", "w").write(r.text)
    print("==", path, r.status_code, len(r.text))
    for m in re.findall(r'<script[^>]*>.*?</script>', r.text, re.S):
        body = re.sub(r"<script[^>]*>|</script>", "", m).strip()
        if body:
            print(body[:2500])
            print("---")
