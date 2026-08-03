from pydantic import BaseModel


class RecoveryRequest(BaseModel):
    incident_id: int


class RecoveryResponse(BaseModel):
    incident_id: int
    action: str
    status: str
    message: str