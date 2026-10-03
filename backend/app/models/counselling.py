import uuid
from sqlalchemy import Column, String, ForeignKey, DateTime, Boolean
from sqlalchemy.dialects.postgresql import UUID, JSONB
from sqlalchemy.sql import func
from app.core.database import Base

class ConversationMessage(Base):
    __tablename__ = "conversation_messages"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    session_id = Column(UUID(as_uuid=True), ForeignKey("family_sessions.id"))
    sender_type = Column(String) # parent, learner, system, counsellor
    message_text = Column(String)
    language = Column(String, default="en")
    intent = Column(String, nullable=True)
    concern_type = Column(String, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    evidence_shown = Column(JSONB, nullable=True)
    needs_human_counsellor = Column(Boolean, default=False)

class CounsellingOutcome(Base):
    __tablename__ = "counselling_outcomes"
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    session_id = Column(UUID(as_uuid=True), ForeignKey("family_sessions.id"))
    final_trade_id = Column(String, ForeignKey("trades.id"), nullable=True)
    resolution_status = Column(String)
    notes = Column(String, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
