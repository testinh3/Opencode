import time, json
from playwright.sync_api import sync_playwright

UA = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36")

with sync_playwright() as p:
    b = p.chromium.launch(headless=False, executable_path="/usr/bin/chromium",
        args=["--no-sandbox","--disable-blink-features=AutomationControlled","--disable-dev-shm-usage","--window-size=1366,900"])
    ctx = b.new_context(user_agent=UA, locale="id-ID", viewport={"width":1366,"height":900}, timezone_id="Asia/Jakarta")
    ctx.add_init_script("Object.defineProperty(navigator,'webdriver',{get:()=>undefined});")
    page = ctx.new_page()
    page.goto("https://1forcrkuota.com/login.html?daftar=1", wait_until="domcontentloaded", timeout=60000)
    page.wait_for_timeout(6000)

    for f in page.frames:
        if "challenges.cloudflare" in f.url:
            print("DOM of challenge frame:")
            print(f.evaluate("""() => {
              const out=[];
              document.querySelectorAll('*').forEach(e=>{
                const r=e.getBoundingClientRect();
                out.push(`${e.tagName}#${e.id||''}.${(e.className||'').toString().slice(0,30)} ${Math.round(r.x)},${Math.round(r.y)} ${Math.round(r.width)}x${Math.round(r.height)} shadow=${!!e.shadowRoot}`);
              });
              return out.join('\\n');
            }"""))
    def token():
        return page.evaluate("(document.getElementById('turnstileToken')||{}).value || ''")
    # human-ish: click label text center
    for pt in [(880, 664), (804, 665), (900, 664)]:
        page.mouse.move(pt[0]-40, pt[1]-30, steps=15)
        page.wait_for_timeout(300)
        page.mouse.click(pt[0], pt[1])
        print("clicked", pt)
        for _ in range(8):
            page.wait_for_timeout(1500)
            if token():
                print("GOT TOKEN:", token()[:50]); break
        if token(): break
    print("final token:", repr(token())[:60])
    page.screenshot(path="/tmp/opencode/shot7.png")
    b.close()
