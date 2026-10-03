from pydantic import BaseModel
from typing import Optional
from datetime import datetime
from uuid import UUID

class ConcernUpdate(BaseModel):
    current_severity: Optional[str] = None
    resolved: Optional[str] = None
    resolution_source: Optional[str] = None

class SessionConcernResponse(BaseModel):
    id: UUID
    session_id: UUID
    concern_type: str
    initial_severity: str
    current_severity: str
    resolved: str
    resolution_source: Optional[str]
    created_at: datetime
    updated_at: Optional[datetime]

    class Config:
        from_attributes = True
