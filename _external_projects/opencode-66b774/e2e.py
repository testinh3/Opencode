"""Uji penuh: registrasi + OTP lewat inbox domain sendiri sampai akun trial jadi."""
import json
import os
import sys

os.environ.setdefault("MAIL_PROVIDER", "inbox")
os.environ.setdefault("MAIL_FALLBACK", "mailtm")
os.environ.setdefault("BROWSER_EXECUTABLE", "/usr/bin/chromium")

from onefcr.config import Settings  # noqa: E402
from onefcr.provision import Provisioner  # noqa: E402


def say(msg, pct=None):
    print(f"[{pct if pct is not None else '-'}] {msg}", flush=True)


def main():
    s = Settings()
    print("provider:", s.mail_provider, "| fallback:", s.mail_fallback,
          "| inbox:", s.inbox_api, "| domain:", s.inbox_domain, flush=True)
    acc = Provisioner(s).run(say)
    print(json.dumps({
        "username": acc.username,
        "email": getattr(acc, "email", ""),
        "expired": getattr(acc, "expired", ""),
        "host": getattr(acc, "host", ""),
        "head": acc._head_lines() if hasattr(acc, "_head_lines") else [],
    }, ensure_ascii=False, indent=2)[:1500], flush=True)
    print("\n--- config ---\n" + acc.as_text(), flush=True)


if __name__ == "__main__":
    sys.exit(main())
