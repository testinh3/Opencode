from patchright.sync_api import sync_playwright
import time
with sync_playwright() as pw:
    browser = pw.chromium.launch(executable_path="/usr/bin/chromium", headless=True, args=["--no-sandbox","--disable-gpu"])
    page = browser.new_page()
    page.goto("https://1forcrkuota.com/login.html?daftar=1", wait_until="domcontentloaded", timeout=60000)
    # click register tab if exists
    try:
        page.click('button[data-auth-view="registerView"]', timeout=5000)
    except Exception as e:
        print("click tab err", e)
    time.sleep(5)
    print("title:", page.title())
    print("iframe count:", page.locator("iframe").count())
    for i in range(page.locator("iframe").count()):
        print(i, page.locator("iframe").nth(i).get_attribute("src"))
    print("turnstileGroup hidden:", page.locator("#turnstileGroup").get_attribute("hidden"))
    print("localCaptchaGroup hidden:", page.locator("#localCaptchaGroup").get_attribute("hidden"))
    print("#turnstileToken value:", page.locator("#turnstileToken").input_value())
    browser.close()
