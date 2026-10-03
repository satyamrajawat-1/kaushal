import uuid
from sqlalchemy import Column, String, Integer, DateTime
from sqlalchemy.dialects.postgresql import UUID, JSONB
from sqlalchemy.sql import func
from app.core.database import Base

class AdminEvent(Base):
    __tablename__ = "admin_events"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    event_type = Column(String, index=True)
    payload = Column(JSONB)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class AnalyticsSnapshot(Base):
    __tablename__ = "analytics_snapshots"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    snapshot_date = Column(DateTime(timezone=True), server_default=func.now())
    families_counselled = Column(Integer)
    sessions_resolved = Column(Integer)
    sessions_escalated = Column(Integer)
    sessions_unresolved = Column(Integer)
    concern_distribution = Column(JSONB)
    district_insights = Column(JSONB)
    trade_insights = Column(JSONB)
