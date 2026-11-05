import json, sys, time
sys.path.insert(0, "/home/runner/onefcr-trial-bot")
import logging
logging.basicConfig(level=logging.WARNING)
from onefcr.captcha import Captcha
from onefcr.client import SiteClient, ApiError
from onefcr.config import Settings
from onefcr.mailbox import MailTm
from onefcr.provision import build_password, build_username

s = Settings()
s.captcha_mode = "browserless"
mail = MailTm(s.mailtm_base, s.mailtm_domain, s.request_timeout)
box = mail.create()
print("email:", box.address, flush=True)
client = SiteClient(s.base_url, s.proxy, s.request_timeout)
cap = Captcha(s)
tok = cap.turnstile(s.captcha_config_sitekey if False else client.captcha_config()["turnstileSiteKey"],
                    f"{s.base_url}/login.html?daftar=1", progress=print)
user = build_username(s.username_prefix)
pwd = build_password(s.password_pattern)
print("reg:", client.register(user, box.address, pwd, tok), flush=True)
code = mail.wait_for_code(box, 240)
print("otp:", code, flush=True)
print("verify:", client.verify_otp(box.address, code), flush=True)
try:
    print("login:", client.login(box.address, pwd), flush=True)
except ApiError as exc:
    print("login need captcha:", exc.status, exc.payload, flush=True)
    tok = cap.turnstile(client.captcha_config()["turnstileSiteKey"],
                        f"{s.base_url}/login.html?daftar=1", progress=print)
    print("login2:", client.login(box.address, pwd, tok), flush=True)

ov = client.overview()
print("OVERVIEW KEYS:", list(ov.keys()), flush=True)
print(json.dumps(ov, indent=1)[:6000], flush=True)
print("=" * 40)
try:
    srvs = client.get_json("/api/vpn/servers")
    print("SERVERS:", json.dumps(srvs, indent=1)[:4000], flush=True)
except ApiError as exc:
    print("servers err:", exc, flush=True)
print("EMAIL/PASS:", box.address, pwd, flush=True)
