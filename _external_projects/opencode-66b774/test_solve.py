from patchright.sync_api import sync_playwright
from pypasser.captcha import turnstile
import time
with sync_playwright() as pw:
    browser = pw.chromium.launch(executable_path="/usr/bin/chromium", headless=False, args=["--no-sandbox","--disable-gpu"])
    page = browser.new_page()
    page.goto("https://1forcrkuota.com/login.html", wait_until="domcontentloaded", timeout=60000)
    page.click('button[data-auth-view="registerView"]', timeout=5000)
    time.sleep(3)
    try:
        res = turnstile.solve(page, timeout=45)
        print("RESULT", res)
        print("token input", page.locator("#turnstileToken").input_value())
    except Exception as e:
        import traceback; traceback.print_exc()
    browser.close()
