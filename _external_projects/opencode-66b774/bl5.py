import sys, json, base64, urllib.parse
from patchright.sync_api import sync_playwright

TOKEN = "2VY6TMQ901K3ajv34d1ba35103da6c97e6d3a6761c2807225"
launch = json.dumps({"args": ["--use-gl=angle", "--use-angle=swiftshader", "--window-size=1366,900"]})
variants = {
 "plain": "",
 "stealth": "&stealth=true",
 "stealth_headful": "&stealth=true&headless=false",
 "angle": "&stealth=true&headless=false&launch=" + urllib.parse.quote(launch),
}
which = sys.argv[1] if len(sys.argv) > 1 else "plain"
url = f"wss://production-sfo.browserless.io?token={TOKEN}{variants[which]}"
print("variant:", which)
with sync_playwright() as p:
    try:
        b = p.chromium.connect_over_cdp(url, timeout=60000)
    except Exception as e:
        print("CONNECT FAIL:", str(e)[:200]); raise SystemExit
    ctx = b.new_context(viewport={"width":1366,"height":900})
    page = ctx.new_page()
    page.goto("about:blank")
    info = page.evaluate("""() => {
      const out = {ua: navigator.userAgent, plugins: navigator.plugins.length,
                   screen: [screen.width, screen.height], chromeApp: !!window.chrome?.app,
                   gl: null, renderer: null};
      try { const c=document.createElement('canvas');
            const g=c.getContext('webgl')||c.getContext('experimental-webgl');
            out.gl = !!g;
            if (g) { const d=g.getExtension('WEBGL_debug_renderer_info');
                     out.renderer = d ? g.getParameter(d.UNMASKED_RENDERER_WEBGL) : 'n/a'; }
      } catch(e) { out.gl = 'err:'+e.message; }
      return out;
    }""")
    print(json.dumps(info, indent=1))
    b.close()
