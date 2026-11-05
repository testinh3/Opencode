import sys, json
from patchright.sync_api import sync_playwright

TOKEN = __import__("os").environ["BROWSERLESS_TOKEN"]
route = sys.argv[1] if len(sys.argv) > 1 else "/chromium/playwright"
qs = sys.argv[2] if len(sys.argv) > 2 else "&stealth=true"
url = f"wss://production-sfo.browserless.io{route}?token={TOKEN}{qs}"
print("connect:", route, qs, flush=True)
with sync_playwright() as p:
    try:
        b = p.chromium.connect(url, timeout=60000)
    except Exception as e:
        print("FAIL:", str(e)[:200]); raise SystemExit
    print("version:", b.version, flush=True)
    ctx = b.new_context(viewport={"width":1366,"height":900}, locale="id-ID")
    page = ctx.new_page()
    page.goto("about:blank")
    print(json.dumps(page.evaluate("""() => {
      const out={ua:navigator.userAgent, gl:null, renderer:null, plugins:navigator.plugins.length};
      try{const c=document.createElement('canvas');const g=c.getContext('webgl');
          out.gl=!!g; if(g){const d=g.getExtension('WEBGL_debug_renderer_info');
          out.renderer=d?g.getParameter(d.UNMASKED_RENDERER_WEBGL):'n/a';}}catch(e){out.gl='err'}
      return out;}"""), indent=1), flush=True)
    b.close()
