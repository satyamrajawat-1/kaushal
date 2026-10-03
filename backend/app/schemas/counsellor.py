from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime
from uuid import UUID

class CounsellorResponse(BaseModel):
    id: str
    name: str
    languages: List[str]
    specialization: str
    availability: str
    active: bool

    class Config:
        from_attributes = True

class CounsellorEscalateRequest(BaseModel):
    session_id: UUID
    reason: str

class CounsellorCaseResponse(BaseModel):
    id: str
    session_id: UUID
    counsellor_id: Optional[str]
    status: str
    escalation_reason: str
    created_at: datetime
    updated_at: Optional[datetime]

    class Config:
        from_attributes = True

class CounsellorResolutionRequest(BaseModel):
    resolved: bool
    notes: str
    follow_up_required: bool = False
    evidence_issue: bool = False
    recommended_next_step: Optional[str] = None
