from sqlalchemy.orm import Session

from app.models.incident import Incident
from app.services.docker_service import DockerService


class IncidentDetector:

    def __init__(self, db: Session):
        self.db = db
        self.docker = DockerService()

        self.services = {
            "Backend API": "taskflow-backend",
            "Frontend": "taskflow-frontend",
            "PostgreSQL": "taskflow-postgres",
            "Prometheus": "prometheus",
            "Ollama": "ollama",
        }

    def scan(self):

        created_incidents = []
        resolved_incidents = []

        for service_name, container_name in self.services.items():

            status = self.docker.get_container_status(container_name)

            open_incident = (
                self.db.query(Incident)
                .filter(
                    Incident.service_name == service_name,
                    Incident.status != "RESOLVED"
                )
                .first()
            )

            # -------------------------
            # Container is DOWN
            # -------------------------

            if status != "running":

                if not open_incident:

                    incident = Incident(

                        incident_id=f"INC-{service_name.upper().replace(' ', '-')}",

                        service_name=service_name,

                        alert_name=f"{service_name} Down",

                        severity="Critical",

                        source="Docker Monitor",

                        status="OPEN",

                        ai_summary=None,

                        recovery_action=None,
                    )

                    self.db.add(incident)

                    created_incidents.append(service_name)

            # -------------------------
            # Container is RUNNING
            # -------------------------

            else:

                if open_incident:

                    open_incident.status = "RESOLVED"

                    resolved_incidents.append(service_name)

        self.db.commit()

        return {

            "created": created_incidents,

            "resolved": resolved_incidents,
        }