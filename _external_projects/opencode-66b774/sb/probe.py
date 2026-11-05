"""Recon: register + login sahabatssh, lalu lihat dashboard & endpoint trial."""
import json
import random
import re
import string
import sys
import time

import httpx

BASE = "https://sahabatssh.com"


def rand(n=8):
    return "".join(random.choice(string.ascii_lowercase + string.digits) for _ in range(n))


def mailtm():
    c = httpx.Client(timeout=30.0)
    doms = c.get("https://api.mail.tm/domains").json()["hydra:member"]
    domain = [d for d in doms if d.get("isActive")][0]["domain"]
    addr = f"t{rand(10)}@{domain}"
    pwd = "TempMailPass123!"
    c.post("https://api.mail.tm/accounts", json={"address": addr, "password": pwd}).raise_for_status()
    tok = c.post("https://api.mail.tm/token", json={"address": addr, "password": pwd}).json()["token"]
    c.close()
    return addr, tok


def turnstile_token(url):
    from patchright.sync_api import sync_playwright
    from pypasser.captcha import turnstile
    with sync_playwright() as pw:
        b = pw.chromium.launch(executable_path="/usr/bin/chromium", headless=False,
                               args=["--no-sandbox", "--disable-dev-shm-usage",
                                     "--disable-blink-features=AutomationControlled",
                                     "--window-size=1366,900", "--lang=id-ID"])
        page = b.new_page()
        page.goto(url, wait_until="domcontentloaded", timeout=60000)
        page.wait_for_timeout(3000)
        print("solving", flush=True)
        r = turnstile.solve(page, timeout=45)
        print("solved", r.is_solved, flush=True)
        tok = r.response_token
        b.close()
        return tok


def main():
    url = f"{BASE}/auth/register"
    tok = turnstile_token(url)
    name = "R" + rand(6)
    user = "u" + rand(9)
    email, mailtok = mailtm()
    pwd = "TempPass123!"
    c = httpx.Client(timeout=40.0, follow_redirects=True,
                     headers={"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
                                            "(KHTML, like Gecko) Chrome/156.0.0.0 Safari/537.36"})
    c.get(f"{BASE}/auth/register")
    r = c.post(f"{BASE}/auth/register_action.php", data={
        "name": name, "username": user, "email": email, "password": pwd,
        "confirm_password": pwd, "remember_me": 1, "cf_turnstile_response": tok,
    })
    print("REGISTER:", r.status_code, r.text[:300])

    tok2 = turnstile_token(f"{BASE}/auth/login")
    r = c.post(f"{BASE}/auth/login_action.php", data={
        "email": email, "password": pwd, "remember_me": 1, "cf_turnstile_response": tok2,
    })
    print("LOGIN:", r.status_code, r.text[:300])
    print("COOKIES:", dict(c.cookies))
    json.dump({"email": email, "mailtok": mailtok, "password": pwd, "username": user,
               "cookies": dict(c.cookies)}, open("/tmp/opencode/sb/account.json", "w"), indent=2)

    for path in ["/page/home", "/page/dashboard", "/page/akun", "/page/vmess",
                 "/page/trial", "/page/layanan", "/page/order", "/page/vps"]:
        rr = c.get(f"{BASE}{path}")
        title = re.search(r"<title>(.*?)</title>", rr.text, re.S)
        print(path, rr.status_code, len(rr.text), (title.group(1).strip()[:60] if title else ""))


main()
