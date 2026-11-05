"""Live check: label kuota harus naik setelah trial dibuat (trial 2 -> 2/2)."""
import sys, time, tempfile, pathlib

sys.path.insert(0, "/home/runner/onefcr-trial-bot")

from onefcr.config import Settings
from onefcr.store import Store
from onefcr.sahabatssh import SahabatSSH
from onefcr import bot as botmod

TG = 434343

def say(msg):
    print(f"[{time.strftime('%H:%M:%S')}] {msg}", flush=True)

s = Settings()
tmp = tempfile.mkdtemp(prefix="verify-quota-")
store = Store(str(pathlib.Path(tmp) / "q.db"))

say("== trial 1: akun baru ==")
t1 = SahabatSSH(s, progress=say, server_id="").run()
store.add_account(TG, t1.email, t1.password, t1.username, "", t1.host,
                  t1.server_name, t1.expired_at, t1.account_id, t1.raw, kind="vmess")
print("KUOTA-1:", t1.quota, flush=True)

acct = botmod._vmess_reuse_account(store, s, TG)
assert acct is not None, "akun trial 1 harus bisa dipakai trial 2"

say("== trial 2: akun yang sama ==")
t2 = SahabatSSH(s, progress=say, server_id="", email=acct["email"],
                password=acct["site_pass"]).run()
store.add_account(TG, t2.email, t2.password, t2.username, "", t2.host,
                  t2.server_name, t2.expired_at, t2.account_id, t2.raw, kind="vmess")
print("KUOTA-2:", t2.quota, flush=True)

assert "1/2" in t1.quota, f"trial 1 harus 1/2, dapat {t1.quota!r}"
assert "2/2" in t2.quota, f"trial 2 harus 2/2, dapat {t2.quota!r}"
print("OK: 1/2 lalu 2/2", flush=True)
print("DONE", flush=True)
