from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.schemas.ai import (
    AIAnalysisRequest,
    AIAnalysisResponse,
)
from app.services.ai_engine import AIEngine

router = APIRouter(
    prefix="/ai",
    tags=["AI Assistant"]
)


@router.post(
    "/analyze",
    response_model=AIAnalysisResponse
)
def analyze_incident(
    request: AIAnalysisRequest,
    db: Session = Depends(get_db),
):

    ai_engine = AIEngine(db)

    result = ai_engine.analyze_incident(
        request.incident_id
    )

    return result