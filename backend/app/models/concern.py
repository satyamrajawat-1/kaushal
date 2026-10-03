import uuid
from sqlalchemy import Column, String, Integer, ForeignKey, DateTime
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.sql import func
from app.core.database import Base

class Concern(Base):
    __tablename__ = "concerns"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    type = Column(String, unique=True, index=True) # income, job_security, safety, etc.
    label_en = Column(String)
    label_hi = Column(String)
    description = Column(String)

class SessionConcern(Base):
    __tablename__ = "session_concerns"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    session_id = Column(UUID(as_uuid=True), ForeignKey("family_sessions.id"))
    concern_type = Column(String, ForeignKey("concerns.type"))
    initial_severity = Column(String, default="high") # high, medium, low
    current_severity = Column(String, default="high")
    resolved = Column(String, default="false") # "false", "true" 
    resolution_source = Column(String, nullable=True) # ai, counsellor
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
