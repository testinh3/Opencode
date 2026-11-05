import sys, time
from patchright.sync_api import sync_playwright
from pypasser.captcha import turnstile

ARGS = sys.argv[1]      # min | ours
CTX = sys.argv[2]       # default | custom
URL = sys.argv[3]       # plain | q
print("VARIANT", ARGS, CTX, URL, flush=True)

launch_args = {
    "min": ["--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage"],
    "ours": ["--no-sandbox", "--disable-dev-shm-usage",
             "--disable-blink-features=AutomationControlled",
             "--window-size=1366,900", "--lang=id-ID"],
}[ARGS]

with sync_playwright() as pw:
    browser = pw.chromium.launch(executable_path="/usr/bin/chromium", headless=False,
                                 args=launch_args)
    if CTX == "custom":
        ctx = browser.new_context(locale="id-ID", viewport={"width": 1366, "height": 900},
                                  timezone_id="Asia/Jakarta")
        page = ctx.new_page()
    else:
        page = browser.new_page()
    page.goto("https://1forcrkuota.com/login.html" + ("?daftar=1" if URL == "q" else ""),
              wait_until="domcontentloaded", timeout=60000)
    try:
        page.click('button[data-auth-view="registerView"]', timeout=4000)
    except Exception as e:
        print("click err", str(e)[:60], flush=True)
    page.wait_for_timeout(3500)
    t0 = time.time()
    try:
        res = turnstile.solve(page, timeout=45)
        print("solved", res.is_solved, "in", round(time.time()-t0, 1), flush=True)
    except Exception as e:
        print("EXC", repr(e)[:150], flush=True)
    try:
        msg = page.locator("#authMessage").inner_text(timeout=1000)
    except Exception:
        msg = ""
    print("msg:", msg[:70], flush=True)
    browser.close()
