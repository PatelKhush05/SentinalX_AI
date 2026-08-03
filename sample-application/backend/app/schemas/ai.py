from pydantic import BaseModel


class AIAnalysisRequest(BaseModel):
    incident_id: int


class AIAnalysisResponse(BaseModel):
    incident_id: int
    root_cause: str
    confidence: int
    severity: str
    recommended_action: str