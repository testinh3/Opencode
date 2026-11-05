import time, sys
from patchright.sync_api import sync_playwright
from pypasser.captcha import turnstile

with sync_playwright() as pw:
    browser = pw.chromium.launch(executable_path="/usr/bin/chromium", headless=False,
                                 args=["--no-sandbox", "--disable-dev-shm-usage", "--lang=id-ID"])
    ctx = browser.new_context(locale="id-ID", viewport={"width": 1366, "height": 900},
                              timezone_id="Asia/Jakarta")
    page = ctx.new_page()
    page.goto("https://1forcrkuota.com/login.html", wait_until="domcontentloaded", timeout=60000)
    page.click('button[data-auth-view="registerView"]', timeout=5000)
    page.wait_for_timeout(4000)
    print("solving...", flush=True)
    try:
        res = turnstile.solve(page, timeout=45)
        print("solved:", res.is_solved, flush=True)
    except Exception as e:
        print("exc", repr(e)[:200], flush=True)
    page.wait_for_timeout(2000)
    for i, f in enumerate(page.frames):
        print("FRAME", i, f.url[:80])
        try:
            print("  TEXT:", f.locator("body").inner_text(timeout=2000)[:500].replace("\n", " | "))
        except Exception as e:
            print("  text err", str(e)[:100])
        try:
            print("  HTML:", f.locator("body").inner_html(timeout=2000)[:600])
        except Exception as e:
            print("  html err", str(e)[:100])
    page.screenshot(path="/tmp/opencode/now.png", full_page=False)
    browser.close()
