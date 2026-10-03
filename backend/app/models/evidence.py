import uuid
from sqlalchemy import Column, String, Integer, DateTime, ForeignKey, Text
from sqlalchemy.dialects.postgresql import UUID, JSONB
from sqlalchemy.sql import func
from app.core.database import Base

class EvidenceSource(Base):
    __tablename__ = "evidence_sources"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String)
    source_type = Column(String)
    url = Column(String, nullable=True)
    publisher = Column(String)
    publication_date = Column(String)
    data_period = Column(String)
    description = Column(Text, nullable=True)
    verification_status = Column(String, default="estimated")

class EvidenceRecord(Base):
    __tablename__ = "evidence_records"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    trade_id = Column(String, ForeignKey("trades.id"))
    provider_id = Column(UUID(as_uuid=True), ForeignKey("training_providers.id"), nullable=True)
    metric = Column(String, index=True) # e.g., 'income_entry', 'placement_rate'
    value = Column(String)
    unit = Column(String)
    region = Column(String, default="national") # national, state, district
    district = Column(String, nullable=True, index=True)
    state = Column(String, nullable=True, index=True)
    data_period = Column(String, nullable=True)
    sample_size = Column(Integer, nullable=True)
    source_id = Column(UUID(as_uuid=True), ForeignKey("evidence_sources.id"))
    verification_status = Column(String, default="estimated")
    confidence = Column(String, default="medium")
    last_verified = Column(String, nullable=True)
    notes = Column(Text, nullable=True)
    
    # We will use string for embedding initially if pgvector isn't ready
    # embedding = Column(Vector(1536))
