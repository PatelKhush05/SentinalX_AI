from sqlalchemy.orm import Session

from app.models.incident import Incident
from app.schemas.incident import IncidentCreate


class IncidentEngine:

    def __init__(self, db: Session):
        self.db = db

    def generate_incident_id(self):

        latest = (
            self.db.query(Incident)
            .order_by(Incident.id.desc())
            .first()
        )

        if latest:
            number = int(latest.incident_id.split("-")[-1]) + 1
        else:
            number = 1

        return f"INC-2026-{number:03d}"

    def create_incident(self, incident: IncidentCreate):

        incident_id = self.generate_incident_id()

        new_incident = Incident(
            incident_id=incident_id,
            service_name=incident.service_name,
            alert_name=incident.alert_name,
            severity=incident.severity,
            source=incident.source,
            status="OPEN"
        )

        self.db.add(new_incident)
        self.db.commit()
        self.db.refresh(new_incident)

        return new_incident

    def get_all_incidents(self):

        return (
            self.db.query(Incident)
            .order_by(Incident.created_at.desc())
            .all()
        )

    def get_incident_by_id(self, incident_id: int):

        return (
            self.db.query(Incident)
            .filter(Incident.id == incident_id)
            .first()
        )

    def update_incident(
        self,
        incident_id: int,
        incident_update
    ):

        incident = (
            self.db.query(Incident)
            .filter(Incident.id == incident_id)
            .first()
        )

        if not incident:
            return None

        incident.status = incident_update.status
        incident.ai_summary = incident_update.ai_summary
        incident.recovery_action = incident_update.recovery_action

        self.db.commit()
        self.db.refresh(incident)

        return incident