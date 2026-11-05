"""Uji cepat: apakah MAP DNS untuk host challenge IPv6-only memulihkan token?"""
import sys, time
from patchright.sync_api import sync_playwright

URL = "https://1forcrkuota.com/login.html?daftar=1"
MAPS = {
    "plain": [],
    "map-brunhild": [
        "--host-resolver-rules=MAP brunhild.challenges.cloudflare.com 104.18.9.208",
    ],
    "map-brunhild-2": [
        "--host-resolver-rules=MAP brunhild.challenges.cloudflare.com 104.18.8.208",
    ],
}

which = sys.argv[1] if len(sys.argv) > 1 else "plain"
args = ["--no-sandbox", "--disable-dev-shm-usage",
        "--disable-blink-features=AutomationControlled",
        "--window-size=1366,900", "--lang=id-ID"] + MAPS[which]

with sync_playwright() as pw:
    b = pw.chromium.launch(headless=False, args=args, executable_path="/usr/bin/chromium")
    page = b.new_page()
    failed = []
    page.on("requestfailed", lambda r: failed.append(f"{r.url[:120]} {r.failure}"))
    page.goto(URL, wait_until="domcontentloaded", timeout=60000)
    page.wait_for_timeout(2000)
    try:
        page.click('button[data-auth-view="registerView"]', timeout=3000)
    except Exception:
        pass
    tok = ""
    for i in range(40):
        try:
            tok = page.locator("#turnstileToken").input_value(timeout=800) or ""
        except Exception:
            tok = ""
        if tok:
            break
        page.wait_for_timeout(1000)
    print(f"[{which}] token={len(tok)} dalam {i + 1}s")
    for f in failed[:6]:
        print("  x", f)
    for fr in page.frames:
        if "challenges.cloudflare.com" in fr.url:
            try:
                print("  frame:", " ".join((fr.evaluate("document.body.innerText") or "").split())[:200])
            except Exception as e:
                print("  frame err", e)
    b.close()
