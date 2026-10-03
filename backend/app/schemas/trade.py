from pydantic import BaseModel
from typing import List, Optional
from uuid import UUID

class TradeBase(BaseModel):
    id: str
    name: str
    name_hi: str
    slug: str
    description: str
    description_hi: str
    nsqf_level: int
    course_duration: str
    min_education: Optional[str] = None
    skills: Optional[List[str]] = None
    job_roles: Optional[List[str]] = None
    further_education: Optional[str] = None
    active: bool = True

class TradeResponse(TradeBase):
    class Config:
        from_attributes = True

class JobRoleResponse(BaseModel):
    id: UUID
    trade_id: str
    title: str
    description: str

    class Config:
        from_attributes = True
