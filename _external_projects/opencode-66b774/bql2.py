import json, sys, time
import httpx

TOKEN = __import__("os").environ["BROWSERLESS_TOKEN"]
which = sys.argv[1] if len(sys.argv) > 1 else "auto"
endpoint = sys.argv[2] if len(sys.argv) > 2 else "stealth/bql"
qs = sys.argv[3] if len(sys.argv) > 3 else "&proxy=residential&proxyCountry=id"

solve = "solve(timeout: 60000)" if which == "auto" else f"solve(type: {which}, timeout: 60000)"

query = """
mutation Grab {
  goto(url: "https://1forcrkuota.com/login.html?daftar=1", waitUntil: networkIdle) { status }
  solved: %s { found solved time token }
  readBack: evaluate(content: "document.getElementById('turnstileToken').value") { value }
}
""" % solve

url = f"https://production-sfo.browserless.io/{endpoint}?token={TOKEN}{qs}"
t0 = time.time()
with httpx.Client(timeout=240) as c:
    r = c.post(url, json={"query": query})
print("http", r.status_code, f"{time.time()-t0:.1f}s")
data = r.json()
print(json.dumps(data, indent=1)[:1800])
