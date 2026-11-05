import time, os, json
from playwright.sync_api import sync_playwright

UA = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36")

with sync_playwright() as p:
    b = p.chromium.launch(headless=False, executable_path="/usr/bin/chromium",
        args=["--no-sandbox","--disable-blink-features=AutomationControlled","--disable-dev-shm-usage","--window-size=1366,900"])
    ctx = b.new_context(user_agent=UA, locale="id-ID", viewport={"width":1366,"height":900}, timezone_id="Asia/Jakarta")
    ctx.add_init_script("Object.defineProperty(navigator,'webdriver',{get:()=>undefined});")
    page = ctx.new_page()
    page.goto("https://1forcrkuota.com/login.html?daftar=1", wait_until="domcontentloaded", timeout=60000)
    page.wait_for_timeout(6000)

    def walk(frame, depth=0):
        try:
            url = frame.url
        except Exception:
            url = "?"
        print("  "*depth + f"[{url[:70]}]")
        try:
            n = frame.evaluate("document.querySelectorAll('*').length")
            cb = frame.evaluate("document.querySelectorAll('input').length")
            txt = (frame.evaluate("document.body?document.body.innerText:''") or "")[:80].replace("\n","|")
            print("  "*depth + f"   nodes={n} inputs={cb} text={txt!r}")
        except Exception as e:
            print("  "*depth + "   eval err", str(e)[:60])
        for c in frame.child_frames:
            walk(c, depth+1)

    for f in page.frames:
        if f == page.main_frame: continue
        walk(f)
    page.screenshot(path="/tmp/opencode/shot6.png")
    b.close()
