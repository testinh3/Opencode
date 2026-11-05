"""Helper Railway GraphQL minimal untuk deploy bot (token dari env)."""
import json
import os
import sys
import urllib.request

API = "https://backboard.railway.com/graphql/v2"
TOKEN = os.environ["RAILWAY_API_TOKEN"]
PROJECT = "d7d64c3e-0552-47d1-8272-0992501babcd"
ENV_ID = "1d64eed3-baac-4250-b3cc-e8d658a4a515"


def gql(query, variables=None):
    body = json.dumps({"query": query, "variables": variables or {}}).encode()
    req = urllib.request.Request(
        API, data=body,
        headers={"Content-Type": "application/json",
                 "User-Agent": "railway-deploy-helper/1.0",
                 "Authorization": f"Bearer {TOKEN}"},
    )
    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            data = json.load(resp)
    except urllib.error.HTTPError as exc:
        detail = exc.read().decode("utf-8", "replace")
        raise SystemExit(f"HTTP {exc.code}: {detail[:1500]}")
    if data.get("errors"):
        raise SystemExit("API error: " + json.dumps(data["errors"])[:800])
    return data["data"]


def read_dotenv(path="/home/runner/onefcr-trial-bot/.env"):
    values = {}
    for raw in open(path):
        line = raw.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        values[key.strip()] = value.strip().strip("'\"")
    return values
