from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.services.incident_detector import IncidentDetector

router = APIRouter(
    prefix="/monitor",
    tags=["Monitor"],
)


@router.post("/scan")
def scan_infrastructure(db: Session = Depends(get_db)):

    detector = IncidentDetector(db)

    result = detector.scan()

    return {
        "message": "Infrastructure scan completed.",
        "created_incidents": result["created"],
        "resolved_incidents": result["resolved"],
    }