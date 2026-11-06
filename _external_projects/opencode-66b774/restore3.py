"""Replay write/edit dari session DB OpenCode untuk membangun ulang repo."""
import json
import os
import sqlite3
import sys

DB = os.path.expanduser("~/.local/share/opencode/opencode.db")
ROOT = "/home/runner/onefcr-trial-bot"

c = sqlite3.connect(DB)
rows = c.execute(
    "select data from session_message where type='assistant' order by time_created, seq"
).fetchall()

applied = {"write": 0, "edit": 0}
skipped = []
warn = []


def norm(s: str) -> str:
    return (s.replace("\u2019", "'").replace("\u2018", "'")
             .replace("\u201c", '"').replace("\u201d", '"')
             .replace("\u2013", "-").replace("\u2014", "-").replace("\u00a0", " "))


for (data,) in rows:
    try:
        d = json.loads(data)
    except Exception:
        continue
    for part in d.get("content", []):
        if part.get("type") != "tool":
            continue
        name = part.get("name")
        if name not in ("write", "edit"):
            continue
        inp = (part.get("state") or {}).get("input") or {}
        path = inp.get("path") or inp.get("filePath") or ""
        if not path.startswith(ROOT):
            continue
        os.makedirs(os.path.dirname(path), exist_ok=True)
        if name == "write":
            content = inp.get("content")
            if content is None:
                continue
            with open(path, "w", encoding="utf-8") as fh:
                fh.write(content)
            applied["write"] += 1
        else:
            old = inp.get("oldString", "")
            new = inp.get("newString", "")
            try:
                with open(path, encoding="utf-8") as fh:
                    cur = fh.read()
            except FileNotFoundError:
                skipped.append((path, "file missing"))
                continue
            if old == new:
                continue
            if inp.get("replaceAll"):
                if old not in cur:
                    skipped.append((path, "old not found (all)"))
                    continue
                cur = cur.replace(old, new)
            else:
                n = cur.count(old)
                if n == 1:
                    cur = cur.replace(old, new)
                elif n == 0 and norm(old) in norm(cur):
                    cur = norm(cur).replace(norm(old), new, 1)
                    warn.append((path, "normalized match"))
                elif n == 0:
                    skipped.append((path, "old not found"))
                    continue
                else:
                    skipped.append((path, f"{n} matches"))
                    continue
            with open(path, "w", encoding="utf-8") as fh:
                fh.write(cur)
            applied["edit"] += 1

print("applied", applied)
print("skipped", len(skipped))
for s in skipped[-15:]:
    print("  -", s)
print("normalized", len(warn))
