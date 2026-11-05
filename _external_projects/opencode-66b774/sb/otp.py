import json, re, time
import httpx

acc = json.load(open("/tmp/opencode/sb/account.json"))
m = httpx.Client(timeout=30.0, headers={"Authorization": f"Bearer {acc['mailtok']}"})
msgs = m.get("https://api.mail.tm/messages").json()
print("messages:", msgs.get("hydra:totalItems"))
for item in msgs.get("hydra:member", [])[:5]:
    print("--", item["from"]["address"], item["subject"])
    full = m.get(f"https://api.mail.tm/messages/{item['id']}").json()
    body = full.get("text") or ""
    html = " ".join(full.get("html") or [])
    links = re.findall(r'https?://[^\s"\'<>]+', html + " " + body)
    for l in links:
        print("  LINK:", l[:160])
    print("  TEXT:", body[:400].replace("\n", " | "))
