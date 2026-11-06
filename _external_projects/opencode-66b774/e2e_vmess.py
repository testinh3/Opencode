import json, os
os.environ.setdefault("MAIL_PROVIDER", "inbox")
os.environ.setdefault("MAIL_FALLBACK", "mailtm")
from onefcr.config import Settings
from onefcr.sahabatssh import SahabatSSH

s = Settings()
print("provider:", s.mail_provider, "| domain:", s.inbox_domain, flush=True)
res = SahabatSSH(s, progress=lambda m: print("-", m, flush=True)).run()
print(json.dumps({
    "email": res.email, "server": res.server_name, "host": res.host,
    "cloudfront": res.cloudfront, "links": len(res.links),
    "expired": res.expired_at,
}, ensure_ascii=False, indent=2))
print("\n--- config ---\n" + res.as_text()[:900])
