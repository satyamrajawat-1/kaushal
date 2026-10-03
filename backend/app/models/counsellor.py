import uuid
from sqlalchemy import Column, String, Boolean, ForeignKey, DateTime
from sqlalchemy.dialects.postgresql import UUID, JSONB
from sqlalchemy.sql import func
from app.core.database import Base

class Counsellor(Base):
    __tablename__ = "counsellors"

    id = Column(String, primary_key=True)
    name = Column(String)
    languages = Column(JSONB)
    specialization = Column(String)
    availability = Column(String)
    active = Column(Boolean, default=True)

class CounsellorCase(Base):
    __tablename__ = "counsellor_cases"

    id = Column(String, primary_key=True) # e.g. FAM-2026-0042
    session_id = Column(UUID(as_uuid=True), ForeignKey("family_sessions.id"))
    counsellor_id = Column(String, ForeignKey("counsellors.id"), nullable=True)
    status = Column(String, default="pending") # pending, active, resolved
    escalation_reason = Column(String)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

class CounsellorResolution(Base):
    __tablename__ = "counsellor_resolutions"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    case_id = Column(String, ForeignKey("counsellor_cases.id"))
    counsellor_id = Column(String, ForeignKey("counsellors.id"))
    notes = Column(String)
    follow_up_required = Column(Boolean, default=False)
    evidence_issue = Column(Boolean, default=False)
    recommended_next_step = Column(String, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
