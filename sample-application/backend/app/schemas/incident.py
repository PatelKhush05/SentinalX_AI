from datetime import datetime
from pydantic import BaseModel


class IncidentBase(BaseModel):
    service_name: str
    alert_name: str
    severity: str
    source: str


class IncidentCreate(IncidentBase):
    pass


class IncidentUpdate(BaseModel):
    status: str
    ai_summary: str | None = None
    recovery_action: str | None = None


class IncidentResponse(IncidentBase):
    id: int
    incident_id: str
    status: str
    ai_summary: str | None = None
    recovery_action: str | None = None
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True