import httpx, uuid, json
with httpx.Client(base_url="https://api.mail.tm", timeout=30, headers={"accept":"application/json"}) as c:
    doms = c.get("/domains?page=1").json()
    domain = doms[0]["domain"]
    addr = f"t{uuid.uuid4().hex[:10]}@{domain}"
    pw = uuid.uuid4().hex
    r = c.post("/accounts", json={"address":addr,"password":pw})
    print("create:", r.status_code, r.text[:160])
    t = c.post("/token", json={"address":addr,"password":pw})
    print("token:", t.status_code, t.text[:80])
    tok = t.json()["token"]
    h = {"Authorization": f"Bearer {tok}"}
    m = c.get("/messages", headers=h)
    print("messages:", m.status_code, m.text[:120])
print("address:", addr)
