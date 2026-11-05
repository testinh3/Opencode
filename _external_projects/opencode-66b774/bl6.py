import sys, json
from patchright.sync_api import sync_playwright

TOKEN = "2VY6TMQ901K3ajv34d1ba35103da6c97e6d3a6761c2807225"
route = sys.argv[1] if len(sys.argv) > 1 else "/chromium/playwright"
target = sys.argv[2] if len(sys.argv) > 2 else "https://nopecha.com/demo/turnstile"
qs = sys.argv[3] if len(sys.argv) > 3 else "&stealth=true"
url = f"wss://production-sfo.browserless.io{route}?token={TOKEN}{qs}"
print("connect:", route, qs)
with sync_playwright() as p:
    try:
        b = p.chromium.connect(url, timeout=90000)
    except Exception as e:
        print("FAIL:", str(e)[:300]); raise SystemExit
    print("version:", b.version)
    ctx = b.new_context(viewport={"width":1366,"height":900}, locale="id-ID")
    page = ctx.new_page()
    page.goto(target, wait_until="domcontentloaded", timeout=60000)
    page.wait_for_timeout(5000)
    print(json.dumps(page.evaluate("""() => {
      const out={ua:navigator.userAgent, gl:null, renderer:null};
      try{const c=document.createElement('canvas');const g=c.getContext('webgl');
          out.gl=!!g; if(g){const d=g.getExtension('WEBGL_debug_renderer_info');
          out.renderer=d?g.getParameter(d.UNMASKED_RENDERER_WEBGL):'n/a';}}catch(e){out.gl='err'}
      return out;}"""), indent=1))
    tok = page.evaluate("(document.querySelector('[name=cf-turnstile-response]')||{}).value || ''")
    print("auto token:", repr(tok)[:60])
    for i in range(6):
        if tok: break
        for f in page.frames:
            if "challenges.cloudflare" not in f.url: continue
            try:
                el = f.frame_element(); box = el.bounding_box()
                if box:
                    page.mouse.move(box["x"]+22, box["y"]+box["height"]/2, steps=18)
                    page.wait_for_timeout(400)
                    page.mouse.click(box["x"]+22, box["y"]+box["height"]/2)
            except Exception as e: print("click err", str(e)[:60])
        page.wait_for_timeout(5000)
        tok = page.evaluate("(document.querySelector('[name=cf-turnstile-response]')||{}).value || ''")
        print(i, "tok:", repr(tok)[:60])
    page.screenshot(path="/tmp/opencode/bl6.png")
    b.close()
