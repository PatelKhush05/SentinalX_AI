from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.schemas.incident import (
    IncidentCreate,
    IncidentResponse,
)
from app.services.incident_engine import IncidentEngine
from app.schemas.incident import (
    IncidentCreate,
    IncidentResponse,
    IncidentUpdate,
)

router = APIRouter(
    prefix="/incidents",
    tags=["Incidents"]
)


@router.post(
    "/",
    response_model=IncidentResponse
)
def create_incident(
    incident: IncidentCreate,
    db: Session = Depends(get_db),
):
    engine = IncidentEngine(db)

    return engine.create_incident(incident)

@router.get(
    "/",
    response_model=list[IncidentResponse]
)
def get_all_incidents(
    db: Session = Depends(get_db),
):
    engine = IncidentEngine(db)

    return engine.get_all_incidents()


@router.get(
    "/{incident_id}",
    response_model=IncidentResponse
)
def get_incident(
    incident_id: int,
    db: Session = Depends(get_db),
):
    engine = IncidentEngine(db)

    return engine.get_incident_by_id(incident_id)

@router.patch(
    "/{incident_id}",
    response_model=IncidentResponse
)
def update_incident(
    incident_id: int,
    incident: IncidentUpdate,
    db: Session = Depends(get_db),
):
    engine = IncidentEngine(db)

    return engine.update_incident(
        incident_id,
        incident
    )