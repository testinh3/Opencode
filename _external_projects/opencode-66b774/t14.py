import time
from patchright.sync_api import sync_playwright

UA = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36")

with sync_playwright() as p:
    b = p.chromium.launch(headless=False, executable_path="/usr/bin/google-chrome",
        args=["--no-sandbox","--disable-dev-shm-usage","--window-size=1366,900"])
    ctx = b.new_context(user_agent=UA, locale="id-ID", viewport={"width":1366,"height":900}, timezone_id="Asia/Jakarta")
    page = ctx.new_page()
    page.goto("https://1forcrkuota.com/login.html?daftar=1", wait_until="domcontentloaded", timeout=60000)
    page.wait_for_timeout(6000)
    el = None
    for f in page.frames:
        if "challenges.cloudflare" in f.url:
            el = f.frame_element()
    box = el.bounding_box(); print("box", box)
    page.mouse.move(box["x"]+90, box["y"]+32, steps=30)
    page.wait_for_timeout(600)
    page.mouse.click(box["x"]+90, box["y"]+32)
    for i, d in [(1,700),(2,1500),(3,3000),(4,6000),(5,10000)]:
        page.wait_for_timeout(d)
        print(i, "tok:", repr(page.evaluate("(document.getElementById('turnstileToken')||{}).value||''"))[:40])
        try:
            b2 = el.bounding_box(); print("   box now", b2)
        except Exception as e:
            print("   detached")
        el2 = None
        for f in page.frames:
            if "challenges.cloudflare" in f.url:
                el2 = f.frame_element()
        if el2:
            try: el2.screenshot(path=f"/tmp/opencode/w{i}.png")
            except Exception as e: print("   shot err", str(e)[:50])
    b.close()
