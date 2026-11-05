import time, sys
from patchright.sync_api import sync_playwright

UA = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36")
exe = sys.argv[1] if len(sys.argv) > 1 else None

with sync_playwright() as p:
    kw = dict(headless=False, args=["--no-sandbox","--disable-dev-shm-usage","--window-size=1366,900"])
    if exe: kw["executable_path"] = exe
    b = p.chromium.launch(**kw)
    ctx = b.new_context(user_agent=UA, locale="id-ID", viewport={"width":1366,"height":900}, timezone_id="Asia/Jakarta")
    page = ctx.new_page()
    page.goto("https://1forcrkuota.com/login.html?daftar=1", wait_until="domcontentloaded", timeout=60000)
    page.wait_for_timeout(5000)
    tok = ""
    for i in range(4):
        for f in page.frames:
            if "challenges.cloudflare" in f.url:
                try:
                    el = f.frame_element(); box = el.bounding_box()
                    if box:
                        print("box", box)
                        page.mouse.move(box["x"]+23, box["y"]+32, steps=25)
                        page.wait_for_timeout(500)
                        page.mouse.click(box["x"]+23, box["y"]+32)
                        print("clicked", i)
                except Exception as e:
                    print("err", str(e)[:80])
        for _ in range(10):
            page.wait_for_timeout(1500)
            tok = page.evaluate("(document.getElementById('turnstileToken')||{}).value || ''")
            if tok: break
        if tok: break
    print("TOKEN:", repr(tok)[:100])
    page.screenshot(path="/tmp/opencode/shot9.png")
    b.close()
