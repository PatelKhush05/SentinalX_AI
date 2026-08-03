from sqlalchemy.orm import Session

from app.models.incident import Incident
from app.services.health_checker import HealthChecker
from app.providers.provider_factory import ProviderFactory


class RecoveryEngine:

    def __init__(self, db: Session):
        self.db = db

    # -----------------------------
    # Recovery Policy Engine
    # -----------------------------
    def determine_recovery_action(self, incident: Incident):

        policies = {
            "Backend API": "Restart Backend Container",
            "PostgreSQL": "Restart PostgreSQL",
            "Docker Engine": "Restart Docker Service",
        }

        return policies.get(
            incident.service_name,
            "Manual Investigation Required"
        )

    # -----------------------------
    # Execute Recovery
    # -----------------------------
    def execute_recovery(self, incident_id: int):

        incident = (
            self.db.query(Incident)
            .filter(Incident.id == incident_id)
            .first()
        )

        if not incident:
            return None

        # Determine recovery action
        action = self.determine_recovery_action(incident)

        incident.status = "RECOVERING"
        incident.recovery_action = action

        self.db.commit()
        self.db.refresh(incident)

        # -----------------------------
        # Get Recovery Provider
        # -----------------------------
        provider = ProviderFactory.get_provider("docker")

        if action == "Restart Backend Container":

            result = provider.restart_container(
                "taskflow-backend"
            )

        elif action == "Restart PostgreSQL":

            result = provider.restart_container(
                "taskflow-postgres"
            )

        else:

            result = {
                "success": False,
                "message": "Manual recovery required."
            }

        # -----------------------------
        # Health Check
        # -----------------------------
        checker = HealthChecker()

        healthy = checker.check_backend()

        if healthy:

            incident.status = "RESOLVED"

            result_status = "SUCCESS"

        else:

            incident.status = "FAILED"

            result_status = "FAILED"

        self.db.commit()
        self.db.refresh(incident)

        return {
            "incident_id": incident.id,
            "action": action,
            "status": result_status,
            "message": result["message"],
        }