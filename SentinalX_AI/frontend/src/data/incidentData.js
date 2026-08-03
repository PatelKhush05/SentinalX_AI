export const incidents = [
  {
    id: "INC-001",
    severity: "Critical",
    service: "Backend API",
    assignedTo: "DevOps Team",
    status: "Investigating",
    created: "10 mins ago",
    description:
      "Backend API response time exceeded the configured threshold.",
    resolution:
      "Restart backend container and verify database connectivity.",
  },
  {
    id: "INC-002",
    severity: "Medium",
    service: "PostgreSQL",
    assignedTo: "Database Team",
    status: "Open",
    created: "35 mins ago",
    description:
      "Database connection pool reached its maximum limit.",
    resolution:
      "Increase pool size and monitor active connections.",
  },
  {
    id: "INC-003",
    severity: "Low",
    service: "Docker Engine",
    assignedTo: "Infrastructure Team",
    status: "Resolved",
    created: "2 hours ago",
    description:
      "Docker container restarted after scheduled maintenance.",
    resolution:
      "No action required.",
  },
];