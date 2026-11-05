import asyncio, sys, time, tempfile
sys.path.insert(0, "/home/runner/onefcr-trial-bot")
import logging
logging.basicConfig(level=logging.INFO, format="%(levelname)s %(name)s: %(message)s")
from onefcr import bot as botmod
from onefcr.config import Settings
from onefcr.store import Store

class FakeBot:
    async def send_message(self, chat_id, text, **kw):
        print(f"\n[CHAT {chat_id}]\n{text}")

class FakeApp:
    def __init__(self, settings, store):
        self.bot = FakeBot()
        self.bot_data = {"settings": settings, "store": store,
                         "sem": asyncio.Semaphore(1)}

tmp = tempfile.mkdtemp()
s = Settings()
s.captcha_mode = "browser"
s.browser_headless = False
s.mail_provider = "mailtm"
s.otp_timeout = 180
s.daily_per_user = 5
s.auto_renew = True
s.auto_renew_lead = 60
s.auto_renew_attempts = 2
s.auto_renew_unlimited = True
store = Store(f"{tmp}/bot.sqlite3")
store.set_auto(999, 999, True)
now = int(time.time())
rid = store.add_renewal(999, 999, "dummy", "🇮🇩ID 1 NUSA", now, now)
row = store.due_renewals(now)[0]
print("renewal id:", rid, flush=True)
asyncio.run(botmod._renew_one(FakeApp(s, store), row))
print("\nSTATUS:")
print("accounts:", store.count_accounts(999), "today:", store.count_today(999))
nxt = store.pending_renewal(999)
print("next:", dict(nxt) if nxt else None)
with store._conn() as c:
    print("renewals:", [dict(r) for r in c.execute("SELECT id,status,attempts,expires_ts,due_ts FROM renewals")])
