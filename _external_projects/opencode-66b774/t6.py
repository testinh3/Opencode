import time, os
from playwright.sync_api import sync_playwright

UA = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36")

headless = os.environ.get("HEADLESS", "0") == "1"

with sync_playwright() as p:
    b = p.chromium.launch(headless=headless, executable_path="/usr/bin/chromium",
        args=["--no-sandbox","--disable-blink-features=AutomationControlled","--disable-dev-shm-usage",
              "--window-size=1366,900"])
    ctx = b.new_context(user_agent=UA, locale="id-ID", viewport={"width":1366,"height":900}, timezone_id="Asia/Jakarta")
    ctx.add_init_script("Object.defineProperty(navigator,'webdriver',{get:()=>undefined});")
    page = ctx.new_page()
    page.goto("https://1forcrkuota.com/login.html?daftar=1", wait_until="domcontentloaded", timeout=60000)
    page.wait_for_timeout(5000)

    def token():
        return page.evaluate("(document.getElementById('turnstileToken')||{}).value || ''")

    for attempt in range(6):
        if token(): break
        frames = [f for f in page.frames if "challenges.cloudflare" in f.url]
        print("frames:", len(frames))
        for f in frames:
            try:
                print("  subframes:", [(x.url[:70]) for x in f.child_frames])
                print("  html len:", len(f.evaluate("document.documentElement.outerHTML") or ""))
                print("  html:", (f.evaluate("document.documentElement.outerHTML") or "")[:300].replace("\n"," "))
                el = f.frame_element(); box = el.bounding_box()
                if box:
                    page.mouse.move(box["x"]+16, box["y"]+box["height"]/2, steps=12)
                    page.wait_for_timeout(400)
                    page.mouse.click(box["x"]+16, box["y"]+box["height"]/2)
                    print("  clicked at", box["x"]+16, box["y"]+box["height"]/2)
            except Exception as e:
                print("  err", type(e).__name__, str(e)[:90])
        page.wait_for_timeout(6000)
        print("tok:", repr(token())[:80])
    print("FINAL:", repr(token())[:200])
    page.screenshot(path="/tmp/opencode/shot4.png")
    b.close()
