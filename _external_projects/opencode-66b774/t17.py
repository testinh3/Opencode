import httpx, json

BASE="https://1forcrkuota.com"
H={"user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36",
   "accept":"application/json","origin":BASE,"referer":BASE+"/login.html?daftar=1"}
with httpx.Client(base_url=BASE, headers=H, timeout=30) as c:
    r=c.get("/api/auth/csrf")
    print("csrf:", r.status_code, r.text[:200])
    tok=r.json().get("csrfToken")
    print("cookies:", dict(c.cookies))
    r2=c.post("/api/auth/register", json={"username":"x","email":"y@z.com","password":"a"}, headers={"x-csrf-token":tok})
    print("register w/o csrf-valid body:", r2.status_code, r2.text[:200])
    r3=c.post("/api/auth/register", json={"username":"x","email":"y@z.com","password":"a"})
    print("register no csrf header:", r3.status_code, r3.text[:200])
    r4=c.get("/api/vpn/overview")
    print("overview unauth:", r4.status_code, r4.text[:120])
