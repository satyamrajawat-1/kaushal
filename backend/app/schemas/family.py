from pydantic import BaseModel, Field
from typing import List, Optional, Dict, Any
from datetime import datetime
from uuid import UUID

class LearnerBase(BaseModel):
    education_level: Optional[str] = None
    interests: Optional[List[str]] = None
    career_goal: Optional[str] = None
    age_group: Optional[str] = None

class LearnerCreate(LearnerBase):
    pass

class LearnerResponse(LearnerBase):
    id: UUID

    class Config:
        from_attributes = True

class FamilyContextBase(BaseModel):
    state: Optional[str] = None
    district: Optional[str] = None
    household_income_bracket: Optional[str] = None
    preferred_travel_distance: Optional[str] = None
    migration_preference: Optional[str] = None
    additional_constraints: Optional[Dict[str, Any]] = None

class FamilyContextCreate(FamilyContextBase):
    pass

class FamilyContextResponse(FamilyContextBase):
    id: UUID
    session_id: UUID

    class Config:
        from_attributes = True

class FamilySessionCreate(BaseModel):
    language: str = "en"
    learner: Optional[LearnerCreate] = None
    family_context: Optional[FamilyContextCreate] = None
    trade_id: Optional[str] = None
    concerns: Optional[List[str]] = None

class FamilySessionResponse(BaseModel):
    id: UUID
    session_code: str
    learner_id: Optional[UUID]
    status: str
    language: str
    started_at: datetime
    completed_at: Optional[datetime]

    class Config:
        from_attributes = True
