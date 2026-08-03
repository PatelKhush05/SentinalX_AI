from uuid import uuid4

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
        active_incidents = []
        healthy_services = []

        for service_name, container_name in self.services.items():

            status = self.docker.get_container_status(container_name)

            print(
                f"[Monitor] {service_name} | {container_name} | Status = {status}"
            )

            open_incident = (
                self.db.query(Incident)
                .filter(
                    Incident.service_name == service_name,
                    Incident.status == "OPEN"
                )
                .first()
            )

            # ==========================================
            # Container is DOWN
            # ==========================================

            if status != "running":

                if not open_incident:

                    print(f"[Monitor] Creating incident for {service_name}")

                    incident = Incident(

                        incident_id=f"INC-{uuid4().hex[:8].upper()}",

                        service_name=service_name,

                        alert_name=f"{service_name} Down",

                        severity="Critical",

                        status="OPEN",

                        source="Docker Monitor",

                        ai_summary=None,

                        recovery_action=None,

                    )

                    self.db.add(incident)

                    created_incidents.append(service_name)

                    active_incidents.append({

                        "service": service_name,

                        "container": container_name,

                        "status": "OPEN",

                        "severity": "Critical",

                        "container_status": status

                    })

                else:

                    active_incidents.append({

                        "service": service_name,

                        "container": container_name,

                        "status": open_incident.status,

                        "severity": open_incident.severity,

                        "container_status": status

                    })

            # ==========================================
            # Container is RUNNING
            # ==========================================

            else:

                healthy_services.append({

                    "service": service_name,

                    "container": container_name,

                    "status": "RUNNING"

                })

                if open_incident:

                    print(f"[Monitor] Resolving incident for {service_name}")

                    open_incident.status = "RESOLVED"

                    resolved_incidents.append(service_name)

        self.db.commit()

        return {

            "message": "Infrastructure scan completed.",

            "summary": {

                "total_services": len(self.services),

                "healthy_services": len(healthy_services),

                "active_incidents": len(active_incidents),

                "created_incidents": len(created_incidents),

                "resolved_incidents": len(resolved_incidents)

            },

            "healthy_services": healthy_services,

            "active_incidents": active_incidents,

            "created_incidents": created_incidents,

            "resolved_incidents": resolved_incidents

        }