import json, uuid, httpx, time
from patchright.sync_api import sync_playwright

BASE="https://1forcrkuota.com"

def reg(token):
    with httpx.Client(base_url=BASE, timeout=30, headers={"user-agent":"Mozilla/5.0","content-type":"application/json","origin":BASE}) as c:
        cap = c.get("/api/auth/captcha").json()["data"]
        body={"username":"prb"+uuid.uuid4().hex[:6],
              "email":f"prb{uuid.uuid4().hex[:8]}@mailinator.com",
              "password":"ProbePass123!","captchaId":cap["id"],"captchaAnswer":cap["code"],
              "turnstileToken":token}
        r=c.post("/api/auth/register", json=body)
        return r.status_code, r.text[:200]

print("dummy:", reg("XXXX.DUMMY.TOKEN.XXXX"))

tok=""
with sync_playwright() as p:
    b=p.chromium.launch(headless=False, executable_path="/usr/bin/google-chrome", args=["--no-sandbox"])
    pg=b.new_page()
    pg.goto(BASE+"/login.html", wait_until="domcontentloaded", timeout=60000)
    pg.wait_for_timeout(3000)
    pg.evaluate("""() => new Promise(res => {
        const s=document.createElement('script');
        s.src='https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=cb';
        window.cb=()=>{
          const d=document.createElement('div'); d.id='tw'; document.body.appendChild(d);
          turnstile.render('#tw',{sitekey:'1x00000000000000000000AA',callback:t=>{window.__t=t;res();}});
        };
        document.head.appendChild(s);
    })""")
    pg.wait_for_timeout(6000)
    tok = pg.evaluate("window.__t || ''")
    b.close()
print("testkey token:", repr(tok)[:80])
if tok:
    print("reg with testkey token:", reg(tok))
