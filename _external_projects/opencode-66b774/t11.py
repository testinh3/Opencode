import time, json
from playwright.sync_api import sync_playwright

UA = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36")

msgs=[]
with sync_playwright() as p:
    b = p.chromium.launch(headless=False, executable_path="/usr/bin/chromium",
        args=["--no-sandbox","--disable-blink-features=AutomationControlled","--disable-dev-shm-usage","--window-size=1366,900"])
    ctx = b.new_context(user_agent=UA, locale="id-ID", viewport={"width":1366,"height":900}, timezone_id="Asia/Jakarta")
    ctx.add_init_script("Object.defineProperty(navigator,'webdriver',{get:()=>undefined});")
    page = ctx.new_page()
    page.on("console", lambda m: msgs.append(("console", m.type, m.text[:150])))
    page.on("response", lambda r: msgs.append(("resp", r.status, r.url[:120])) if "cloudflare" in r.url else None)
    page.on("requestfailed", lambda r: msgs.append(("failed", r.failure, r.url[:120])) if "cloudflare" in r.url else None)
    page.goto("https://1forcrkuota.com/login.html?daftar=1", wait_until="domcontentloaded", timeout=60000)
    page.wait_for_timeout(12000)
    for m in msgs[-40:]:
        print(m)
    # element screenshot of the iframe
    for f in page.frames:
        if "challenges.cloudflare" in f.url:
            el = f.frame_element()
            try:
                el.screenshot(path="/tmp/opencode/iframe.png")
                print("iframe shot ok, box:", el.bounding_box())
            except Exception as e:
                print("shot err", e)
    b.close()
