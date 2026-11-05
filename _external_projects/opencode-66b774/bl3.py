import sys, json
from patchright.sync_api import sync_playwright

TOKEN = "2VY6TMQ901K3ajv34d1ba35103da6c97e6d3a6761c2807225"
extra = sys.argv[1] if len(sys.argv) > 1 else "&stealth=true&headless=false&proxy=residential&proxyCountry=id"
url = f"wss://production-sfo.browserless.io?token={TOKEN}{extra}"

with sync_playwright() as p:
    b = p.chromium.connect_over_cdp(url, timeout=60000)
    ctx = b.new_context(viewport={"width": 1366, "height": 900}, locale="id-ID")
    page = ctx.new_page()
    page.goto("https://1forcrkuota.com/login.html?daftar=1", wait_until="domcontentloaded", timeout=60000)
    page.wait_for_timeout(4000)
    print(json.dumps(page.evaluate("""() => ({
      ua: navigator.userAgent,
      webdriver: navigator.webdriver,
      plugins: navigator.plugins.length,
      langs: navigator.languages,
      chrome: typeof window.chrome,
      headlessUA: /HeadlessChrome/.test(navigator.userAgent),
    })"""), indent=1))

    def tok():
        return page.evaluate("(document.getElementById('turnstileToken')||{}).value || ''")

    for i in range(6):
        if tok(): break
        for f in page.frames:
            if "challenges.cloudflare" not in f.url: continue
            try:
                el = f.frame_element(); box = el.bounding_box()
                if box:
                    page.mouse.move(box["x"]+22, box["y"]+box["height"]/2, steps=25)
                    page.wait_for_timeout(500)
                    page.mouse.click(box["x"]+22, box["y"]+box["height"]/2)
            except Exception as e:
                print("err", str(e)[:70])
        page.wait_for_timeout(6000)
        print(i, "tok:", repr(tok())[:60])
    print("FINAL:", repr(tok())[:100])
    page.screenshot(path="/tmp/opencode/bl3.png")
    b.close()
