from patchright.sync_api import sync_playwright
import time
with sync_playwright() as pw:
    browser = pw.chromium.launch(executable_path="/usr/bin/chromium", headless=True, args=["--no-sandbox","--disable-gpu"])
    page = browser.new_page()
    page.goto("https://1forcrkuota.com/login.html", wait_until="domcontentloaded", timeout=60000)
    page.click('button[data-auth-view="registerView"]', timeout=5000)
    time.sleep(6)
    print(page.content()[:12000])
    # locate widget container html
    print("\n--- inner html turnstileWidget ---")
    try:
        print(page.locator("#turnstileWidget").inner_html())
    except Exception as e: print(e)
    browser.close()
