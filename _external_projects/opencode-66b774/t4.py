import time, json
from playwright.sync_api import sync_playwright

UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36")

with sync_playwright() as p:
    b = p.chromium.launch(headless=True, executable_path="/usr/bin/chromium",
        args=["--no-sandbox","--disable-blink-features=AutomationControlled","--disable-dev-shm-usage"])
    ctx = b.new_context(user_agent=UA, locale="id-ID", viewport={"width":1366,"height":900}, timezone_id="Asia/Jakarta")
    ctx.add_init_script("Object.defineProperty(navigator,'webdriver',{get:()=>undefined});")
    page = ctx.new_page()
    page.goto("https://1forcrkuota.com/login.html?daftar=1", wait_until="domcontentloaded", timeout=60000)
    page.wait_for_timeout(5000)
    print(json.dumps(page.evaluate("""() => {
      const out=[];
      document.querySelectorAll('iframe').forEach(f=>{const r=f.getBoundingClientRect();out.push({src:(f.src||'').slice(0,90),x:r.x,y:r.y,w:r.width,h:r.height});});
      return out;
    }"""), indent=1))
    print("frames:", [(f.name, f.url[:60]) for f in page.frames])
    # child frame element
    for f in page.frames:
        if "challenges.cloudflare" in f.url:
            try:
                el = f.frame_element()
                print("frame_element tag:", el.tag_name if hasattr(el,'tag_name') else el, )
                print("outer:", el.evaluate("e=>e.outerHTML.slice(0,200)") if el else None)
            except Exception as e:
                print("frame_element err", e)
    b.close()
