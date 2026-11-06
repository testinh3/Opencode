"""Ambil foto profil Freya dari situs resmi JKT48 lewat browser (Cloudflare)."""
import re, sys
from patchright.sync_api import sync_playwright

URL = "https://jkt48.com/member/detail/id/214?lang=id"

with sync_playwright() as pw:
    b = pw.chromium.launch(headless=False, executable_path="/usr/bin/chromium",
                           args=["--no-sandbox", "--disable-dev-shm-usage",
                                 "--enable-unsafe-swiftshader",
                                 "--disable-blink-features=AutomationControlled"])
    p = b.new_page(viewport={"width": 1366, "height": 900})
    p.goto(URL, wait_until="domcontentloaded", timeout=90000)
    p.wait_for_timeout(6000)
    print("TITLE", p.title(), flush=True)
    imgs = p.eval_on_selector_all("img", """els => els.map(e => ({
        src: e.currentSrc || e.src,
        w: e.naturalWidth, h: e.naturalHeight,
        alt: e.alt || ''
    }))""")
    for im in imgs:
        if im["w"] > 200:
            print("IMG", im["w"], im["h"], im["alt"][:40], im["src"], flush=True)
    # simpan html kalau perlu
    open("/tmp/opencode/jkt48_freya.html", "w").write(p.content())
    b.close()
