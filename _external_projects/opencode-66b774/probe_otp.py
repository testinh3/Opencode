import json, os, re, sys, time
sys.path.insert(0, "/home/runner/onefcr-trial-bot")
from onefcr.captcha import Captcha
from onefcr.client import SiteClient
from onefcr.config import Settings
from onefcr.mailbox import MailTm, extract_otp
from onefcr.provision import build_password, build_username

s = Settings()
s.captcha_mode = "browserless"
mail = MailTm(s.mailtm_base, s.mailtm_domain, s.request_timeout)
box = mail.create()
print("email:", box.address, flush=True)

client = SiteClient(s.base_url, s.proxy, s.request_timeout)
cap = Captcha(s)
cfg = client.captcha_config()
sitekey = cfg.get("turnstileSiteKey")
tok = cap.turnstile(sitekey, f"{s.base_url}/login.html?daftar=1", progress=print)
user = build_username(s.username_prefix)
pwd = build_password(s.password_pattern)
print("user:", user, flush=True)
print(client.register(user, box.address, pwd, tok), flush=True)

seen = set()
import httpx
with mail._client() as c:
    h = {"Authorization": f"Bearer {box.extra['token']}"}
    for _ in range(30):
        r = c.get("/messages?page=1", headers=h)
        payload = r.json()
        items = payload.get("hydra:member", []) if isinstance(payload, dict) else payload
        for m in items:
            mid = m["id"]
            if mid in seen:
                continue
            seen.add(mid)
            d = c.get(f"/messages/{mid}", headers=h).json()
            text = mail._message_text(d)
            print("=" * 60)
            print("SUBJECT:", json.dumps(d.get("subject")))
            print("FROM:", json.dumps(d.get("from")))
            print("TEXT LINES:", json.dumps(d.get("textLines"), indent=1)[:3000])
            print("HTML:", json.dumps(d.get("html"))[:3000])
            print("EXTRACT:", extract_otp(text))
            print("ALL 6-DIGIT:", re.findall(r"(?<!\d)(\d{6})(?!\d)", text))
            sys.exit(0)
        time.sleep(3)
print("no mail")
