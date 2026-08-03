from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.sql import func

from app.database.base import Base


class Incident(Base):
    __tablename__ = "incidents"

    id = Column(Integer, primary_key=True, index=True)

    incident_id = Column(
        String(50),
        unique=True,
        nullable=False
    )

    service_name = Column(
        String(100),
        nullable=False
    )

    alert_name = Column(
        String(255),
        nullable=False
    )

    severity = Column(
        String(20),
        nullable=False
    )

    status = Column(
        String(30),
        default="OPEN"
    )

    source = Column(
        String(100),
        nullable=False
    )

    ai_summary = Column(
        String(500)
    )

    recovery_action = Column(
        String(255)
    )

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )

    updated_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now()
    )