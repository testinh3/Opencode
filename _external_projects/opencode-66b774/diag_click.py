import time
from patchright.sync_api import sync_playwright

STATUSES = []

with sync_playwright() as pw:
    browser = pw.chromium.launch(executable_path="/usr/bin/chromium", headless=False,
                                 args=["--no-sandbox", "--disable-dev-shm-usage", "--lang=id-ID"])
    ctx = browser.new_context(locale="id-ID", viewport={"width": 1366, "height": 900},
                              timezone_id="Asia/Jakarta")
    page = ctx.new_page()
    page.on("response", lambda r: STATUSES.append((r.status, r.url[:110]))
            if ("challenges.cloudflare.com" in r.url or r.status >= 400) else None)
    page.goto("https://1forcrkuota.com/login.html", wait_until="domcontentloaded", timeout=60000)
    page.click('button[data-auth-view="registerView"]', timeout=5000)
    page.wait_for_timeout(5000)

    frames = [f for f in page.frames if "challenges.cloudflare" in f.url]
    print("cf frames:", len(frames))
    for f in frames:
        try:
            box = f.frame_element().bounding_box()
            print("box:", box)
            if box:
                x = box["x"] + 24
                y = box["y"] + box["height"] / 2
                page.mouse.move(x - 90, y - 40, steps=15)
                page.wait_for_timeout(400)
                page.mouse.click(x, y)
                print("clicked", x, y)
        except Exception as e:
            print("frame err", str(e)[:120])

    for i in range(10):
        page.wait_for_timeout(2000)
        tok = page.locator("#turnstileToken").input_value()
        try:
            msg = page.locator("#authMessage").inner_text(timeout=1000)
        except Exception:
            msg = ""
        print(i, "token:", bool(tok), "len:", len(tok), "msg:", msg[:80], flush=True)
        if tok:
            break

    print("\nnetwork:")
    for s, u in STATUSES:
        print(s, u)
    page.screenshot(path="/tmp/opencode/clicked.png")
    browser.close()
