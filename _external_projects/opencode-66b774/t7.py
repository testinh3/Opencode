import time, os, json
from playwright.sync_api import sync_playwright
from pypasser.captcha import turnstile

UA = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36")

with sync_playwright() as p:
    b = p.chromium.launch(headless=False, executable_path="/usr/bin/chromium",
        args=["--no-sandbox","--disable-blink-features=AutomationControlled","--disable-dev-shm-usage","--window-size=1366,900"])
    ctx = b.new_context(user_agent=UA, locale="id-ID", viewport={"width":1366,"height":900}, timezone_id="Asia/Jakarta")
    ctx.add_init_script("Object.defineProperty(navigator,'webdriver',{get:()=>undefined});")
    page = ctx.new_page()
    page.goto("https://1forcrkuota.com/login.html?daftar=1", wait_until="domcontentloaded", timeout=60000)
    page.wait_for_timeout(5000)

    # inspect turnstile frame dom
    for f in page.frames:
        if "challenges.cloudflare" in f.url:
            try:
                info = f.evaluate("""() => {
                    const q = s => Array.from(document.querySelectorAll(s)).map(e=>{
                        const r=e.getBoundingClientRect(); return {tag:e.tagName, cls:(e.className||'').toString().slice(0,40), x:Math.round(r.x), y:Math.round(r.y), w:Math.round(r.width), h:Math.round(r.height), txt:(e.innerText||'').slice(0,40)};
                    });
                    return {cb:q("input[type=checkbox]"), label:q("label"), lb:q(".cb-lb"), body: (document.body?document.body.innerText:'').slice(0,200)};
                }""")
                print(json.dumps(info, indent=1)[:1500])
            except Exception as e:
                print("inspect err", e)

    res = turnstile.solve(page, timeout=45)
    print("pypasser solved:", res.is_solved, "token:", (res.response_token or "")[:40])
    tok = page.evaluate("(document.getElementById('turnstileToken')||{}).value || ''")
    print("page token:", repr(tok)[:80])
    page.screenshot(path="/tmp/opencode/shot5.png")
    b.close()
