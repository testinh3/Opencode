import json, sys
sys.path.insert(0, "/home/runner/onefcr-trial-bot")
import logging
logging.basicConfig(level=logging.WARNING)
from onefcr.captcha import Captcha
from onefcr.client import SiteClient, ApiError
from onefcr.config import Settings

EMAIL = "2ciktfzwlylj@fldubai.com"
PWD = "TrialQDFggB6959x"

s = Settings()
s.captcha_mode = "browserless"
client = SiteClient(s.base_url, s.proxy, s.request_timeout)
cap = Captcha(s)
try:
    print("login:", client.login(EMAIL, PWD), flush=True)
except ApiError as exc:
    print("login need captcha:", exc.status, exc.payload, flush=True)
    tok = cap.turnstile(client.captcha_config()["turnstileSiteKey"],
                        f"{s.base_url}/login.html?daftar=1", progress=print)
    print("login2:", client.login(EMAIL, PWD, tok), flush=True)

ov = client.overview()
open("/tmp/opencode/overview.json", "w").write(json.dumps(ov, indent=1, ensure_ascii=False))
print("OVERVIEW top keys:", list(ov.keys()))
print("servers:", json.dumps(ov.get("servers"), indent=1, ensure_ascii=False)[:2000])

srvs = (client.get_json("/api/vpn/servers") or {}).get("data") or []
target = None
for srv in srvs:
    if "ID 1 NUSA" in srv.get("name", ""):
        target = srv
        break
print("TARGET:", json.dumps(target, ensure_ascii=False))
try:
    data = client.trial(target["id"], "ssh")
    print("TRIAL:", json.dumps(data, indent=1, ensure_ascii=False)[:2000])
    acc = (data.get("account") or {})
    cfg = client.account_config(acc.get("id", ""))
    print("CONFIG:", json.dumps(cfg, indent=1, ensure_ascii=False)[:4000])
except ApiError as exc:
    print("TRIAL ERR:", exc.status, exc.kind, exc.payload, flush=True)
