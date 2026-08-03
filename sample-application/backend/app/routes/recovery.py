from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.schemas.recovery import (
    RecoveryRequest,
    RecoveryResponse,
)
from app.services.recovery_engine import RecoveryEngine


router = APIRouter(
    prefix="/recovery",
    tags=["Recovery"]
)


@router.post(
    "/",
    response_model=RecoveryResponse
)
def execute_recovery(
    recovery: RecoveryRequest,
    db: Session = Depends(get_db),
):
    engine = RecoveryEngine(db)

    result = engine.execute_recovery(
        recovery.incident_id
    )

    return result