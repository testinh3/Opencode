import json, sys, time
import httpx

TOKEN = __import__("os").environ["BROWSERLESS_TOKEN"]
endpoint = sys.argv[1] if len(sys.argv) > 1 else "stealth/bql"
qs = sys.argv[2] if len(sys.argv) > 2 else "&proxy=residential&proxyCountry=id"

query = """
mutation GrabTurnstile {
  goto(url: "https://1forcrkuota.com/login.html?daftar=1", waitUntil: networkIdle) { status }
  solved: solve(type: turnstile, timeout: 60000) { found solved time token }
  readBack: evaluate(content: "document.getElementById('turnstileToken').value") { value }
}
"""

url = f"https://production-sfo.browserless.io/{endpoint}?token={TOKEN}{qs}"
t0 = time.time()
with httpx.Client(timeout=180) as c:
    r = c.post(url, json={"query": query})
print("http", r.status_code, f"{time.time()-t0:.1f}s")
try:
    data = r.json()
except Exception:
    print(r.text[:600]); raise SystemExit
print(json.dumps(data, indent=1)[:2000])
