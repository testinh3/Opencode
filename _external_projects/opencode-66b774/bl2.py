import sys
from patchright.sync_api import sync_playwright

TOKEN = "2VY6TMQ901K3ajv34d1ba35103da6c97e6d3a6761c2807225"
extra = sys.argv[1] if len(sys.argv) > 1 else ""
url = f"wss://production-sfo.browserless.io?token={TOKEN}{extra}"
print("URL opts:", extra)
with sync_playwright() as p:
    try:
        browser = p.chromium.connect_over_cdp(url, timeout=60000)
    except Exception as e:
        print("CONNECT FAIL:", str(e)[:300]); raise SystemExit
    ctx = browser.new_context()
    page = ctx.new_page()
    try:
        page.goto("https://api.ipify.org?format=json", timeout=45000)
        print("ip:", page.inner_text("body")[:120])
    except Exception as e:
        print("nav err", str(e)[:150])
    try:
        page.goto("https://ipinfo.io/json", timeout=45000)
        print("ipinfo:", page.inner_text("body")[:300].replace("\n"," "))
    except Exception as e:
        print("ipinfo err", str(e)[:150])
    browser.close()
