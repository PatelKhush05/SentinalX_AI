from sqlalchemy.orm import Session

from app.models.incident import Incident
from app.services.docker_service import DockerService


class ContextBuilder:

    def __init__(self, db: Session):
        self.db = db
        self.docker = DockerService()

    def build_context(self, incident_id: int):

        incident = (
            self.db.query(Incident)
            .filter(Incident.id == incident_id)
            .first()
        )

        if not incident:
            return None

        container_mapping = {
            "Backend API": "taskflow-backend",
            "PostgreSQL": "taskflow-postgres",
            "Frontend": "taskflow-frontend",
            "Prometheus": "prometheus",
        }

        recovery_policies = {
            "Backend API": "Restart Backend Container",
            "PostgreSQL": "Restart PostgreSQL Container",
            "Frontend": "Restart Frontend Container",
            "Prometheus": "Restart Prometheus Container",
        }

        container_name = container_mapping.get(
            incident.service_name,
            "Unknown"
        )

        container_status = self.docker.get_container_status(
            container_name
        )

        restart_count = self.docker.get_restart_count(
            container_name
        )

        context = {
            "incident_id": incident.incident_id,
            "service_name": incident.service_name,
            "container_name": container_name,
            "container_status": container_status,
            "restart_count": restart_count,
            "alert_name": incident.alert_name,
            "severity": incident.severity,
            "status": incident.status,
            "source": incident.source,
            "created_at": str(incident.created_at),

            "environment": "Docker",
            "monitoring_tool": "Prometheus",
            "database": "PostgreSQL",

            "health_status": (
                "HEALTHY"
                if container_status == "running"
                else "UNHEALTHY"
            ),

            "recommended_policy": recovery_policies.get(
                incident.service_name,
                "Manual Investigation Required"
            ),

            "available_actions": [
                "Restart Backend Container",
                "Restart PostgreSQL Container",
                "Restart Frontend Container",
                "Restart Prometheus Container",
                "Manual Investigation"
            ]
        }

        return context