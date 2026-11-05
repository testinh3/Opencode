"""Live check: 2 trial di akun yang sama, lalu akun itu ditolak untuk trial ke-3."""
import sys, time, tempfile, pathlib

sys.path.insert(0, "/home/runner/onefcr-trial-bot")

from onefcr.config import Settings
from onefcr.store import Store
from onefcr.sahabatssh import SahabatSSH, SahabatError
from onefcr import bot as botmod

TG = 424242

def say(msg):
    print(f"[{time.strftime('%H:%M:%S')}] {msg}", flush=True)

s = Settings()
tmp = tempfile.mkdtemp(prefix="verify-reuse-")
store = Store(str(pathlib.Path(tmp) / "v.db"))

say("== trial 1: akun baru ==")
t1 = SahabatSSH(s, progress=say, server_id="").run()
store.add_account(TG, t1.email, t1.password, t1.username, "", t1.host,
                  t1.server_name, t1.expired_at, t1.account_id, t1.raw, kind="vmess")
say(f"trial1 ok: {t1.email} | host={t1.host} | cloudfront={t1.cloudfront!r}")
print(t1.as_text(), flush=True)

acct = botmod._vmess_reuse_account(store, s, TG)
say(f"reuse plan -> {acct['email'] if acct else None}")
assert acct is not None and acct["email"] == t1.email

say("== trial 2: akun yang sama ==")
t2 = SahabatSSH(s, progress=say, server_id="", email=acct["email"],
                password=acct["site_pass"]).run()
store.add_account(TG, t2.email, t2.password, t2.username, "", t2.host,
                  t2.server_name, t2.expired_at, t2.account_id, t2.raw, kind="vmess")
say(f"trial2 ok: {t2.email} | cloudfront={t2.cloudfront!r}")
print(t2.as_text(), flush=True)

say(f"count today = {store.count_vmess_today(TG, t2.email)}")

acct2 = botmod._vmess_reuse_account(store, s, TG)
say(f"reuse plan setelah 2 trial -> {acct2}")
assert acct2 is None, "kuota 2/akun tidak dihormati"

say("== trial 3: coba pakai akun yang sudah habis (harus ditolak situs) ==")
try:
    SahabatSSH(s, progress=say, server_id="", email=t1.email,
               password=t1.password).run()
    say("!! situs masih mengizinkan trial ke-3 — kuota asumsi salah")
except SahabatError as exc:
    say(f"ditolak seperti yang diharapkan: {str(exc)[:300]}")

print("DONE", flush=True)
