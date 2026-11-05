import httpx, uuid, json
BASE="https://1forcrkuota.com"
H={"user-agent":"Mozilla/5.0","content-type":"application/json","origin":BASE}
def t(label, body):
    with httpx.Client(base_url=BASE, headers=H, timeout=30) as c:
        r=c.post("/api/auth/register", json=body); print(label, r.status_code, r.text[:160])
base={"username":"probe"+uuid.uuid4().hex[:4],"password":"ProbePass123!"}
t("bad email format", {**base,"email":"abc","captchaId":"x","captchaAnswer":"y"})
t("short password", {**base,"password":"a","email":"a@b.com"})
t("mail.tm domain", {**base,"email":f"pr{uuid.uuid4().hex[:8]}@maximail.online","captchaId":"x","captchaAnswer":"y"})
t("gmail", {**base,"email":f"pr{uuid.uuid4().hex[:8]}@gmail.com","captchaId":"x","captchaAnswer":"y"})
# mail.tm api probe
mt="https://api.mail.tm"
with httpx.Client(base_url=mt, timeout=30) as c:
    d=c.get("/domains").json()
    print("mail.tm domains:", [x["domain"] for x in d.get("hydra:member",[])][:5])
