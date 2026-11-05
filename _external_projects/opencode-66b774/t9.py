import json, time, uuid, httpx

BASE = "https://1forcrkuota.com"
H = {"user-agent": "okhttp/4.12.0", "content-type": "application/json",
     "origin": BASE, "referer": BASE + "/login.html?daftar=1"}

def attempt(label, headers, extra):
    with httpx.Client(base_url=BASE, headers=headers, timeout=30) as c:
        cap = c.get("/api/auth/captcha").json()["data"]
        body = {"username": "prb" + uuid.uuid4().hex[:6], "email": f"prb{uuid.uuid4().hex[:8]}@mailinator.com",
                "password": "ProbePass123!", "captchaId": cap["id"], "captchaAnswer": cap["code"]}
        body.update(extra)
        r = c.post("/api/auth/register", json=body)
        print(f"{label}: {r.status_code} {r.text[:200]}")

attempt("no-turnstile-key", H, {})
attempt("turnstile-empty", H, {"turnstileToken": ""})
attempt("native-header", {**H, "x-client-platform": "android", "x-ppob-native": "1"}, {"turnstileToken": ""})
