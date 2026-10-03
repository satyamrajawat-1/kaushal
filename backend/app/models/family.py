import uuid
from sqlalchemy import Column, String, Integer, DateTime, ForeignKey, Enum, Boolean
from sqlalchemy.dialects.postgresql import UUID, JSONB
from sqlalchemy.sql import func
from app.core.database import Base

class FamilySession(Base):
    __tablename__ = "family_sessions"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    session_code = Column(String, unique=True, index=True)
    learner_id = Column(UUID(as_uuid=True), ForeignKey("learners.id"), nullable=True)
    status = Column(String, default="active") # active, resolved, escalated, completed
    language = Column(String, default="en")
    started_at = Column(DateTime(timezone=True), server_default=func.now())
    completed_at = Column(DateTime(timezone=True), nullable=True)

class Learner(Base):
    __tablename__ = "learners"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    education_level = Column(String, nullable=True)
    interests = Column(JSONB, nullable=True)
    career_goal = Column(String, nullable=True)
    age_group = Column(String, nullable=True)

class FamilyContext(Base):
    __tablename__ = "family_contexts"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    session_id = Column(UUID(as_uuid=True), ForeignKey("family_sessions.id"))
    state = Column(String, nullable=True)
    district = Column(String, nullable=True)
    household_income_bracket = Column(String, nullable=True)
    preferred_travel_distance = Column(String, nullable=True)
    migration_preference = Column(String, nullable=True)
    additional_constraints = Column(JSONB, nullable=True)
