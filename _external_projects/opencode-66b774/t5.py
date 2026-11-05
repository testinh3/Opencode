import time
from playwright.sync_api import sync_playwright

UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36")

with sync_playwright() as p:
    b = p.chromium.launch(headless=True, executable_path="/usr/bin/chromium",
        args=["--no-sandbox","--disable-blink-features=AutomationControlled","--disable-dev-shm-usage"])
    ctx = b.new_context(user_agent=UA, locale="id-ID", viewport={"width":1366,"height":900}, timezone_id="Asia/Jakarta")
    ctx.add_init_script("Object.defineProperty(navigator,'webdriver',{get:()=>undefined});")
    page = ctx.new_page()
    page.goto("https://1forcrkuota.com/login.html?daftar=1", wait_until="domcontentloaded", timeout=60000)
    page.wait_for_timeout(4000)

    def token():
        return page.evaluate("(document.getElementById('turnstileToken')||{}).value || (document.querySelector('[name=cf-turnstile-response]')||{}).value || ''")

    for attempt in range(5):
        if token(): break
        for f in page.frames:
            if "challenges.cloudflare" not in f.url: continue
            try:
                el = f.frame_element()
                box = el.bounding_box()
                print("box", attempt, box)
                if box:
                    page.mouse.move(box["x"]+16, box["y"]+box["height"]/2, steps=10)
                    page.wait_for_timeout(300)
                    page.mouse.down(); page.wait_for_timeout(80); page.mouse.up()
                    print("clicked")
                inner = f.evaluate("document.body.innerHTML.slice(0,300)")
                print("inner:", inner[:200])
            except Exception as e:
                print("err", type(e).__name__, str(e)[:100])
        page.wait_for_timeout(5000)
        print("tok:", repr(token())[:60])
    print("FINAL:", repr(token())[:200])
    page.screenshot(path="/tmp/opencode/shot3.png")
    b.close()
