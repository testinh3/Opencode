import time, sys
from patchright.sync_api import sync_playwright
from pypasser.captcha import turnstile

VARIANT = sys.argv[1]

with sync_playwright() as pw:
    browser = pw.chromium.launch(executable_path="/usr/bin/chromium", headless=False,
                                 args=["--no-sandbox", "--disable-dev-shm-usage",
                                       "--disable-blink-features=AutomationControlled",
                                       "--window-size=1366,900", "--lang=id-ID"])
    ctx = browser.new_context(locale="id-ID", viewport={"width": 1366, "height": 900},
                              timezone_id="Asia/Jakarta")
    page = ctx.new_page()
    url = "https://1forcrkuota.com/login.html" + ("?daftar=1" if VARIANT in ("q", "q_click") else "")
    page.goto(url, wait_until="domcontentloaded", timeout=60000)
    page.wait_for_timeout(2000)
    if VARIANT in ("c", "q_click"):
        try:
            page.click('button[data-auth-view="registerView"]', timeout=3000)
            print("clicked tab")
        except Exception as e:
            print("click err", str(e)[:80])
    page.wait_for_timeout(2000)
    print("iframe count:", page.locator("iframe").count())
    for i in range(page.locator("iframe").count()):
        print("  frame", i, page.locator("iframe").nth(i).get_attribute("src"))
    t0 = time.time()
    try:
        res = turnstile.solve(page, timeout=45)
        print("variant", VARIANT, "solved", res.is_solved, "in", round(time.time()-t0, 1), "s")
    except Exception as e:
        print("variant", VARIANT, "EXC", repr(e)[:200])
    try:
        print("input token:", bool(page.locator("#turnstileToken").input_value()))
    except Exception as e:
        print("read err", str(e)[:80])
    browser.close()
