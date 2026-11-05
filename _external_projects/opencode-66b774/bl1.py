import time, sys, json
from patchright.sync_api import sync_playwright

TOKEN = "2VY6TMQ901K3ajv34d1ba35103da6c97e6d3a6761c2807225"
UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36")

extra = sys.argv[1] if len(sys.argv) > 1 else "&stealth=true"
url = f"wss://production-sfo.browserless.io?token={TOKEN}{extra}"

with sync_playwright() as p:
    browser = p.chromium.connect_over_cdp(url, timeout=60000)
    print("connected:", browser.version)
    ctx = browser.new_context(user_agent=UA, locale="id-ID",
                              viewport={"width": 1366, "height": 900},
                              timezone_id="Asia/Jakarta")
    page = ctx.new_page()
    page.goto("https://1forcrkuota.com/login.html?daftar=1", wait_until="domcontentloaded", timeout=60000)
    page.wait_for_timeout(5000)
    print("ua:", page.evaluate("navigator.userAgent")[:80])
    print("frames:", [f.url[:70] for f in page.frames])

    def tok():
        return page.evaluate("(document.getElementById('turnstileToken')||{}).value || ''")

    for i in range(5):
        if tok():
            break
        for f in page.frames:
            if "challenges.cloudflare" not in f.url:
                continue
            try:
                el = f.frame_element(); box = el.bounding_box()
                if box:
                    print("click at", box)
                    page.mouse.move(box["x"] + 22, box["y"] + box["height"] / 2, steps=20)
                    page.wait_for_timeout(400)
                    page.mouse.click(box["x"] + 22, box["y"] + box["height"] / 2)
            except Exception as e:
                print("click err", str(e)[:80])
        page.wait_for_timeout(5000)
        print("tok:", repr(tok())[:60])
    print("FINAL TOKEN:", repr(tok())[:120])
    page.screenshot(path="/tmp/opencode/bl.png")
    browser.close()
