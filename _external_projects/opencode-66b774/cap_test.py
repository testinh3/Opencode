"""Cek solver Turnstile dari dalam image (dipakai untuk membandingkan IP runner vs Railway)."""
import logging
import sys

logging.basicConfig(level=logging.INFO, format="%(levelname)s %(name)s: %(message)s")

from onefcr.captcha import CaptchaError, solve_turnstile_browser
from onefcr.client import SiteClient
from onefcr.config import Settings

s = Settings()
print("base_url:", s.base_url, "| headless:", s.browser_headless, "| exe:", s.browser_executable)
with SiteClient(s.base_url, proxy=s.proxy) as client:
    cfg = client.captcha_config()
print("captcha-config:", {k: (v[:12] + "..." if isinstance(v, str) and len(v) > 16 else v) for k, v in cfg.items()})
sitekey = str(cfg.get("turnstileSiteKey") or "")
url = f"{s.base_url}/login.html?daftar=1"
try:
    token = solve_turnstile_browser(sitekey, url, headless=s.browser_headless,
                                    executable=s.browser_executable, attempts=1,
                                    proxy=s.browser_proxy)
    print("TOKEN_OK len=", len(token))
except CaptchaError as exc:
    print("CAPTCHA_FAIL:", str(exc)[:300])
    sys.exit(1)
