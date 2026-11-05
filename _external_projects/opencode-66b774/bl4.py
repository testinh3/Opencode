import sys, json
from patchright.sync_api import sync_playwright
from pypasser.captcha import turnstile

TOKEN = "2VY6TMQ901K3ajv34d1ba35103da6c97e6d3a6761c2807225"
extra = sys.argv[1] if len(sys.argv) > 1 else "&stealth=true&headless=false&proxy=residential&proxyCountry=id"
target = sys.argv[2] if len(sys.argv) > 2 else "https://nopecha.com/demo/turnstile"
url = f"wss://production-sfo.browserless.io?token={TOKEN}{extra}"

with sync_playwright() as p:
    b = p.chromium.connect_over_cdp(url, timeout=60000)
    ctx = b.new_context(viewport={"width": 1366, "height": 900}, locale="id-ID")
    page = ctx.new_page()
    page.goto(target, wait_until="domcontentloaded", timeout=60000)
    page.wait_for_timeout(6000)
    print("gl:", page.evaluate("""() => {try{const c=document.createElement('canvas');const g=c.getContext('webgl');const d=g.getExtension('WEBGL_debug_renderer_info');return g.getParameter(d.UNMASKED_RENDERER_WEBGL);}catch(e){return String(e)}}"""))
    res = turnstile.solve(page, timeout=45)
    print("pypasser:", res.is_solved, (res.response_token or "")[:60])
    # coordinate click fallback
    if not res.is_solved:
        for i in range(5):
            for f in page.frames:
                if "challenges.cloudflare" not in f.url: continue
                try:
                    el = f.frame_element(); box = el.bounding_box()
                    if box:
                        page.mouse.move(box["x"]+22, box["y"]+box["height"]/2, steps=20)
                        page.wait_for_timeout(400)
                        page.mouse.click(box["x"]+22, box["y"]+box["height"]/2)
                except Exception: pass
            page.wait_for_timeout(5000)
            tok = page.evaluate("(document.querySelector('[name=cf-turnstile-response]')||{}).value || ''")
            print(i, "tok:", repr(tok)[:60])
            if tok: break
    page.screenshot(path="/tmp/opencode/bl4.png")
    b.close()
