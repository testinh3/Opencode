"""Repro: daftar 1FORCR dengan mail.tm asli, lalu lihat apakah email masuk."""
import sys, time, json

from onefcr.config import Settings
from onefcr.mailbox import MailTm
from onefcr.client import SiteClient
from onefcr.captcha import Captcha

s = Settings()
s.mailtm_domain = ""
mail = MailTm(s.mailtm_base, "", 30)
box = mail.create()
print("BOX", box.address, flush=True)

client = SiteClient(s.base_url, s.proxy, s.request_timeout)
client.refresh_csrf()
cfg = client.captcha_config()
print("CAPTCHA_CFG", json.dumps(cfg)[:300], flush=True)
sitekey = str(cfg.get("turnstileSiteKey") or "")
cap = Captcha(s)
token = cap.turnstile(sitekey, f"{s.base_url}/login.html?daftar=1")
print("TOKEN_LEN", len(token), flush=True)

username = "tr" + str(int(time.time()))[-8:]
password = "TrialPass9x"
try:
    out = client.register(username, box.address, password, token, "", "")
    print("REGISTER", json.dumps(out)[:400], flush=True)
except Exception as exc:
    print("REGISTER_ERR", type(exc).__name__, str(exc)[:400], flush=True)
    raise SystemExit(1)

deadline = time.time() + 200
seen = set()
while time.time() < deadline:
    r = client.http.get("/api/auth/csrf")  # keep session warm; ignore
    m = mail._client()
    with m as c:
        rr = c.get("/messages?page=1", headers={"Authorization": f"Bearer {box.extra['token']}"})
        if rr.status_code == 200:
            items = rr.json().get("hydra:member", [])
            for msg in items:
                mid = msg.get("id")
                if mid in seen:
                    continue
                seen.add(mid)
                d = c.get(f"/messages/{mid}", headers={"Authorization": f"Bearer {box.extra['token']}"}).json()
                print("MAIL", json.dumps({k: d.get(k) for k in ("from", "subject", "createdAt")})[:300], flush=True)
                print("BODY", MailTm._message_text(d)[:800], flush=True)
    if seen:
        break
    time.sleep(5)
print("DONE messages=", len(seen), flush=True)
