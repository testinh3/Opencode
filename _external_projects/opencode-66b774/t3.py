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
    page.wait_for_timeout(3000)

    def token():
        t = page.evaluate("(document.getElementById('turnstileToken')||{}).value || ''")
        if not t:
            t = page.evaluate("(document.querySelector('[name=cf-turnstile-response]')||{}).value || ''")
        return t

    for attempt in range(6):
        if token():
            break
        el = page.query_selector("iframe[src*='challenges.cloudflare.com']")
        if el:
            box = el.bounding_box()
            print("iframe box", box)
            if box:
                page.mouse.move(box["x"]+18, box["y"]+box["height"]/2, steps=8)
                page.wait_for_timeout(200)
                page.mouse.click(box["x"]+18, box["y"]+box["height"]/2)
                print("clicked", attempt)
        page.wait_for_timeout(4000)
        print("token now:", repr(token())[:80])
    print("FINAL:", repr(token())[:120])
    page.screenshot(path="/tmp/opencode/shot2.png")
    b.close()
