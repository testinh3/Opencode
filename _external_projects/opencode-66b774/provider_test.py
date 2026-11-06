"""Bandingkan penyedia temp-mail: mana yang benar-benar menerima OTP 1FORCR."""
import json
import re
import sys
import time

import httpx

from onefcr.config import Settings
from onefcr.captcha import Captcha
from onefcr.client import SiteClient
from onefcr.mailbox import extract_otp

UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/141.0.0.0 Safari/537.36"


def tempmail_lol():
    c = httpx.Client(timeout=30, headers={"User-Agent": UA})
    r = c.post("https://api.tempmail.lol/v2/inbox/create", json={})
    d = r.json()
    return d["address"], ("tempmail.lol", c, d["token"])


def guerrillamail():
    c = httpx.Client(timeout=30, headers={"User-Agent": UA})
    r = c.get("https://api.guerrillamail.com/ajax.php",
              params={"f": "get_email_address", "agent": UA})
    d = r.json()
    return d["email_addr"], ("guerrilla", c, d["sid_token"])


def maildrop():
    c = httpx.Client(timeout=30, headers={"User-Agent": UA})
    name = "probe" + str(int(time.time()))[-6:]
    return f"{name}@maildrop.cc", ("maildrop", c, name)


def fetch(kind, ctx, seen):
    """Ambil pesan baru; kembalikan daftar teks."""
    _, c, token = ctx
    texts = []
    if kind == "tempmail.lol":
        d = c.get("https://api.tempmail.lol/v2/inbox", params={"token": token}).json()
        for m in d.get("emails") or []:
            key = str(m.get("date")) + str(m.get("subject"))
            if key in seen:
                continue
            seen.add(key)
            texts.append(f"{m.get('subject')}\n{m.get('body')}")
    elif kind == "guerrilla":
        lst = c.get("https://api.guerrillamail.com/ajax.php",
                    params={"f": "fetch_email_list", "sid_token": token,
                            "offset": 0}).json()
        for m in lst.get("list") or []:
            mid = m.get("mail_id")
            if mid in seen:
                continue
            seen.add(mid)
            d = c.get("https://api.guerrillamail.com/ajax.php",
                      params={"f": "fetch_email", "sid_token": token,
                              "email_id": mid}).json()
            texts.append(f"{d.get('mail_subject')}\n{d.get('mail_body')}")
    elif kind == "maildrop":
        q = ('query($m:String!){ inbox(mailbox:$m){ id subject headerfrom } }')
        d = c.post("https://api.maildrop.cc/graphql",
                   json={"query": q, "variables": {"m": token}}).json()
        for m in (d.get("data") or {}).get("inbox") or []:
            mid = m.get("id")
            if mid in seen:
                continue
            seen.add(mid)
            q2 = ('query($m:String!,$id:String!){ message(mailbox:$m,id:$id){'
                  ' headerfrom subject body } }')
            d2 = c.post("https://api.maildrop.cc/graphql",
                        json={"query": q2, "variables": {"m": token, "id": mid}}).json()
            msg = (d2.get("data") or {}).get("message") or {}
            texts.append(f"{msg.get('subject')}\n{msg.get('body')}")
    return texts


PROVIDERS = {
    "tempmail.lol": tempmail_lol,
    "guerrilla": guerrillamail,
    "maildrop": maildrop,
}


def main(names):
    s = Settings()
    cap = Captcha(s)
    for name in names:
        print(f"\n### {name}", flush=True)
        try:
            addr, ctx = PROVIDERS[name]()
        except Exception as exc:
            print("  create gagal:", exc, flush=True)
            continue
        print("  addr:", addr, flush=True)

        c = SiteClient(s.base_url, s.proxy, s.request_timeout)
        try:
            c.refresh_csrf()
            sitekey = str(c.captcha_config().get("turnstileSiteKey") or "")
            token = cap.turnstile(sitekey, f"{s.base_url}/login.html?daftar=1")
            user = "pm" + str(int(time.time()))[-8:]
            r = c.register(user, addr, "TrialPass9x", token)
            print("  register:", json.dumps(r)[:160], flush=True)
        except Exception as exc:
            print("  register gagal:", type(exc).__name__, str(exc)[:200], flush=True)
            continue
        finally:
            c.close()

        seen: set[str] = set()
        deadline = time.time() + 150
        while time.time() < deadline:
            try:
                for text in fetch(name, ctx, seen):
                    code = extract_otp(text)
                    print("  MAIL:", " ".join(text.split())[:120], "| otp:", code, flush=True)
                    if code:
                        print("  RESULT ok", flush=True)
                        break
            except Exception as exc:
                print("  fetch error:", type(exc).__name__, str(exc)[:120], flush=True)
            if any(True for _ in [0]) and seen:
                pass
            time.sleep(6)
        print("  selesai, pesan:", len(seen), flush=True)


if __name__ == "__main__":
    main(sys.argv[1:] or list(PROVIDERS))
