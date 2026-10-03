import uuid
from sqlalchemy import Column, String, Integer, Boolean, ForeignKey
from sqlalchemy.dialects.postgresql import UUID, JSONB
from app.core.database import Base

class Trade(Base):
    __tablename__ = "trades"

    id = Column(String, primary_key=True) # e.g., 'electrician'
    name = Column(String)
    name_hi = Column(String)
    slug = Column(String, unique=True, index=True)
    description = Column(String)
    description_hi = Column(String)
    nsqf_level = Column(Integer)
    course_duration = Column(String)
    min_education = Column(String, nullable=True)
    skills = Column(JSONB, nullable=True)
    job_roles = Column(JSONB, nullable=True)
    further_education = Column(String, nullable=True)
    active = Column(Boolean, default=True)

class JobRole(Base):
    __tablename__ = "job_roles"
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    trade_id = Column(String, ForeignKey("trades.id"))
    title = Column(String)
    description = Column(String)
