import time
from patchright.sync_api import sync_playwright
from pypasser.captcha import turnstile

UA = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36")

with sync_playwright() as p:
    b = p.chromium.launch(headless=False, executable_path="/usr/bin/google-chrome",
                          args=["--no-sandbox","--disable-dev-shm-usage","--window-size=1366,900"])
    ctx = b.new_context(user_agent=UA, locale="en-US", viewport={"width":1366,"height":900})
    page = ctx.new_page()
    page.goto("https://nopecha.com/demo/turnstile", wait_until="domcontentloaded", timeout=60000)
    page.wait_for_timeout(5000)
    print("frames:", [f.url[:90] for f in page.frames])
    res = turnstile.solve(page, timeout=40)
    print("solved:", res.is_solved, "token:", (res.response_token or "")[:60])
    page.screenshot(path="/tmp/opencode/demo.png")
    b.close()
