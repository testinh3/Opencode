import sys, time
sys.path.insert(0, "/home/runner/onefcr-trial-bot")
from onefcr.captcha import solve_turnstile_browser

for url in ["https://sahabatssh.com/auth/register", "https://sahabatssh.com/auth/login"]:
    t0 = time.time()
    tok = solve_turnstile_browser("0x4AAAAAAA_N05sij4ewlgFx", url,
                                  headless=False, executable="/usr/bin/chromium",
                                  attempts=1, timeout=60)
    print(url, "->", len(tok), "chars in", round(time.time() - t0, 1), "s")
