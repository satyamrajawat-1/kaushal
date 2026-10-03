from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime
from uuid import UUID
from app.schemas.evidence import EvidenceRecordResponse

class MessageCreate(BaseModel):
    session_id: UUID
    sender_type: str
    message: str
    language: str = "en"
    trade_id: Optional[str] = None
    concern_ids: Optional[List[str]] = None

class MessageResponse(BaseModel):
    id: UUID
    session_id: UUID
    sender_type: str
    message_text: str
    language: str
    intent: Optional[str] = None
    concern_type: Optional[str] = None
    created_at: datetime
    evidence_shown: Optional[List[str]] = None
    needs_human_counsellor: bool = False

    class Config:
        from_attributes = True

class CounsellingResponse(BaseModel):
    message: str
    intent: Optional[str]
    concern: Optional[str]
    evidence: List[EvidenceRecordResponse]
    confidence: str
    source_scope: str
    fallback_used: bool
    fallback_reason: Optional[str] = None
    follow_up_questions: List[str]
    needs_human_counsellor: bool
