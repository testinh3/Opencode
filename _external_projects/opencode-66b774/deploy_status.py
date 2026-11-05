import sys
sys.path.insert(0, "/tmp/opencode")
from railway import gql, PROJECT, ENV_ID

SERVICE = "cee72892-fb93-4c8f-976d-dcb5749fb8db"

data = gql("""
query($input: DeploymentListInput!) {
  deployments(first: 3, input: $input) {
    edges { node { id status createdAt statusUpdatedAt } }
  }
}
""", {"input": {"projectId": PROJECT, "environmentId": ENV_ID,
                "serviceId": SERVICE}})
deps = [e["node"] for e in data["deployments"]["edges"]]
for d in deps:
    print(d["id"], d["status"], d["createdAt"], "->", d["statusUpdatedAt"])

if len(sys.argv) > 1 and sys.argv[1] == "logs" and deps:
    dep = deps[0]["id"]
    logs = gql("""
    query($id: String!) {
      deploymentLogs(deploymentId: $id, limit: 120) { timestamp message severity }
    }
    """, {"id": dep})["deploymentLogs"]
    for row in logs:
        print(f"{row['timestamp']} {row['severity'] or ''} {row['message']}")
