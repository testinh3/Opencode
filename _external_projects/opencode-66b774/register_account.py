import json
import random
import re
import string
import time

import httpx
from patchright.sync_api import sync_playwright
from pypasser.captcha import turnstile

BASE = "https://1forcrkuota.com"
PASSWORD = "TempPass123!"
MAIL_TM = "https://api.mail.tm"


def random_name(n=8):
    return "u" + "".join(random.choice(string.ascii_lowercase + string.digits) for _ in range(n))


def create_temp_mail():
    local = random_name(10)
    http = httpx.Client(timeout=30.0)
    domains = http.get(f"{MAIL_TM}/domains").json()["hydra:member"]
    domain = domains[0]["domain"]
    address = f"{local}@{domain}"
    password = "TempMailPass123!"
    r = http.post(f"{MAIL_TM}/accounts", json={"address": address, "password": password})
    r.raise_for_status()
    tr = http.post(f"{MAIL_TM}/token", json={"address": address, "password": password})
    tr.raise_for_status()
    token = tr.json()["token"]
    http.close()
    return address, password, token, local


def poll_otp(token, timeout=120):
    headers = {"Authorization": f"Bearer {token}"}
    with httpx.Client(timeout=30.0) as http:
        deadline = time.time() + timeout
        while time.time() < deadline:
            try:
                msgs = http.get(f"{MAIL_TM}/messages", headers=headers).json()["hydra:member"]
            except Exception:
                msgs = []
            for m in msgs:
                try:
                    detail = http.get(f"{MAIL_TM}/messages/{m['id']}", headers=headers).json()
                except Exception:
                    continue
                html_part = detail.get("html", "")
                if isinstance(html_part, list):
                    html_part = " ".join(x.get("content", "") if isinstance(x, dict) else str(x) for x in html_part)
                blob = " ".join(str(part) for part in [
                    detail.get("subject", ""),
                    detail.get("text", ""),
                    html_part,
                ])
                match = re.search(r"\b(\d{6})\b", blob)
                if match:
                    return match.group(1), detail
            time.sleep(5)
    raise TimeoutError("OTP email not received")


def main():
    email, mail_password, mail_token, localpart = create_temp_mail()
    username = f"user{localpart[:6]}"
    print("EMAIL", email)
    print("USERNAME", username)

    with sync_playwright() as pw:
        browser = pw.chromium.launch(
            executable_path="/usr/bin/chromium",
            headless=False,
            args=["--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage"],
        )
        page = browser.new_page()
        page.goto(f"{BASE}/login.html", wait_until="domcontentloaded", timeout=60000)
        page.click('button[data-auth-view="registerView"]', timeout=10000)
        page.wait_for_selector("#registerView.active", timeout=10000)

        # fill form
        page.fill("#registerUsername", username)
        page.fill("#registerEmail", email)
        page.fill("#registerPassword", PASSWORD)
        page.fill("#confirmPassword", PASSWORD)

        # check terms
        page.check("#registerTerms")

        # wait turnstile widget
        page.wait_for_selector("#turnstileWidget iframe", timeout=30000)
        # solve
        solved = False
        for attempt in range(5):
            print("solve attempt", attempt + 1)
            try:
                res = turnstile.solve(page, timeout=45)
                print("py result", res.is_solved)
                if res.is_solved:
                    solved = True
                    break
            except Exception as e:
                print("solver exception:", repr(e))
            time.sleep(2)
        if not solved:
            tok = page.locator("#turnstileToken").input_value()
            if not tok:
                raise RuntimeError("Turnstile not solved")
            solved = True
        # wait token
        deadline = time.time() + 30
        while time.time() < deadline:
            tok = page.locator("#turnstileToken").input_value()
            if tok:
                break
            time.sleep(1)
        print("token present:", bool(page.locator("#turnstileToken").input_value()))

        # submit register
        page.click('#registerView button[type="submit"]', timeout=10000)
        # wait OTP view
        try:
            page.wait_for_selector("#otpView.active", timeout=30000)
        except Exception:
            print("message:", page.locator("#authMessage").inner_text())
            raise

        print("OTP view shown. Waiting email...")
        code, detail = poll_otp(mail_token, timeout=180)
        print("OTP", code)

        page.fill("#otpCode", code)
        page.click('#otpView button[type="submit"]', timeout=10000)
        page.wait_for_timeout(3000)
        msg = page.locator("#authMessage").inner_text()
        print("AFTER VERIFY MSG:", msg)

        # login to establish session
        page.fill("#loginEmail", email)
        page.fill("#loginPassword", PASSWORD)
        page.click('#loginView button[type="submit"]', timeout=10000)
        page.wait_for_timeout(5000)
        print("AFTER LOGIN URL:", page.url)

        # collect cookies
        cookies = page.context.cookies()
        creds = {
            "username": username,
            "email": email,
            "password": PASSWORD,
            "mail_password": mail_password,
            "otp": code,
            "final_url": page.url,
            "cookies": cookies,
        }
        with open("/tmp/opencode/account.json", "w") as f:
            json.dump(creds, f, indent=2)
        print(json.dumps({k: creds[k] for k in ("username", "email", "password", "otp", "final_url")}, indent=2))
        print("SAVED /tmp/opencode/account.json")
        browser.close()


if __name__ == "__main__":
    main()