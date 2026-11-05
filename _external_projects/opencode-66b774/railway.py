import json, os, sys, urllib.request, urllib.error

API = "https://backboard.railway.com/graphql/v2"
TOKEN = os.environ["RAILWAY_API_TOKEN"]
PROJECT = "d7d64c3e-0552-47d1-8272-0992501babcd"
ENV_ID = "1d64eed3-baac-4250-b3cc-e8d658a4a515"
SERVICE = "cee72892-fb93-4c8f-976d-dcb5749fb8db"


def gql(query, variables=None):
    body = json.dumps({"query": query, "variables": variables or {}}).encode()
    req = urllib.request.Request(
        API, data=body,
        headers={"Content-Type": "application/json",
                 "User-Agent": "railway-deploy-helper/1.0",
                 "Authorization": f"Bearer {TOKEN}"})
    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            data = json.load(resp)
    except urllib.error.HTTPError as exc:
        raise SystemExit(f"HTTP {exc.code}: {exc.read().decode()[:1200]}")
    if data.get("errors"):
        raise SystemExit("API error: " + json.dumps(data["errors"])[:800])
    return data["data"]


if __name__ == "__main__":
    d = gql("""
    query($environmentId: String!, $serviceId: String!) {
      serviceInstance(environmentId: $environmentId, serviceId: $serviceId) {
        activeDeployments { id status }
        latestDeployment { id status createdAt statusUpdatedAt }
      }
    }""", {"environmentId": ENV_ID, "serviceId": SERVICE})
    print(json.dumps(d, indent=2))
    dep = d["serviceInstance"]["latestDeployment"]["id"]
    inst = gql('query($id: String!){ deployment(id:$id){ instances { id status } } }',
               {"id": dep})["deployment"]["instances"]
    print("instances:", inst)
    logs = gql("""
    query($id: String!) {
      deploymentLogs(deploymentId: $id, limit: 200) { timestamp severity message }
    }""", {"id": dep})["deploymentLogs"]
    print("log rows:", len(logs))
    for row in logs[-60:]:
        print(row["timestamp"], row["severity"], row["message"][:300])
