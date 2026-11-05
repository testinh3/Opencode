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
    page.wait_for_timeout(6000)
    print("widget html:", page.evaluate("document.getElementById('turnstileWidget').innerHTML")[:500])
    for f in page.frames:
        print("FRAME:", f.url[:140])
        if "challenges.cloudflare" in f.url:
            try:
                print("  BODY:", (f.evaluate("document.body.innerHTML") or "")[:800])
            except Exception as e:
                print("  err", e)
    print("turnstile obj:", page.evaluate("typeof window.turnstile"))
    print("err msg:", page.evaluate("(document.getElementById('authMessage')||{}).textContent"))
    b.close()
