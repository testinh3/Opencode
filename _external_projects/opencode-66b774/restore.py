"""Rebuild /home/runner/onefcr-trial-bot from OpenCode session history."""
import json
import os
import sqlite3
import sys

DB = "/home/runner/.local/share/opencode/opencode.db"
ROOT = "/home/runner/onefcr-trial-bot"

con = sqlite3.connect(DB)
rows = list(con.execute(
    "select id, data from session_message where type='assistant' order by time_created, seq"))

files = {}
applied = skipped = 0
problems = []

for mid, data in rows:
    d = json.loads(data)
    for c in d.get("content", []):
        if c.get("type") != "tool" or c.get("name") not in ("write", "edit"):
            continue
        st = c.get("state") or {}
        inp = st.get("input") or {}
        path = inp.get("path") or inp.get("filePath") or ""
        if not path.startswith(ROOT + "/"):
            continue
        if st.get("status") != "completed":
            skipped += 1
            continue
        if c["name"] == "write":
            files[path] = inp.get("content", "")
            applied += 1
        else:
            cur = files.get(path)
            if cur is None:
                problems.append(("no-base", path, c.get("id")))
                continue
            old = inp.get("oldString", "")
            new = inp.get("newString", "")
            if inp.get("replaceAll"):
                if old not in cur:
                    problems.append(("miss-all", path, c.get("id")))
                    continue
                files[path] = cur.replace(old, new)
            else:
                if cur.count(old) != 1:
                    problems.append((f"count={cur.count(old)}", path, c.get("id")))
                    continue
                files[path] = cur.replace(old, new, 1)
            applied += 1

for path, content in files.items():
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w") as fh:
        fh.write(content)

print(f"applied={applied} skipped={skipped} files={len(files)}")
for p in problems:
    print("PROBLEM", p)
for path in sorted(files):
    print(f"{len(files[path]):7d}  {path[len(ROOT)+1:]}")
