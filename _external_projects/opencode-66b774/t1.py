import time, sys
from playwright.sync_api import sync_playwright

UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36")

def run(headless=True):
    with sync_playwright() as p:
        b = p.chromium.launch(
            headless=headless,
            executable_path="/usr/bin/chromium",
            args=["--no-sandbox", "--disable-blink-features=AutomationControlled",
                  "--disable-dev-shm-usage"],
        )
        ctx = b.new_context(user_agent=UA, locale="id-ID", viewport={"width":1366,"height":900},
                            timezone_id="Asia/Jakarta")
        ctx.add_init_script("Object.defineProperty(navigator,'webdriver',{get:()=>undefined});")
        page = ctx.new_page()
        page.goto("https://1forcrkuota.com/login.html?daftar=1", wait_until="domcontentloaded", timeout=60000)
        page.wait_for_timeout(4000)
        print("url:", page.url)
        print("captchaConfig provider:", page.evaluate("document.getElementById('turnstileGroup').hidden"))
        frames = [f.url[:80] for f in page.frames]
        print("frames:", frames)
        # try clicking the checkbox
        deadline = time.time() + 40
        tok = ""
        while time.time() < deadline:
            tok = page.evaluate("(document.getElementById('turnstileToken')||{}).value || ''")
            if tok:
                break
            for f in page.frames:
                if "challenges.cloudflare.com" in f.url:
                    try:
                        el = f.query_selector("input[type=checkbox], .cb-lb, label[for]")
                        if el:
                            el.click(timeout=2000)
                            print("clicked in frame", f.url[:60])
                            break
                    except Exception as e:
                        print("click err", type(e).__name__, str(e)[:80])
            page.wait_for_timeout(2500)
        print("TOKEN:", repr(tok)[:120])
        page.screenshot(path="/tmp/opencode/shot.png")
        b.close()
        return tok

print("headless:", bool(run(True)))
