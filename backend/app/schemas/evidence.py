from pydantic import BaseModel
from typing import Optional, List
from uuid import UUID

class EvidenceSourceResponse(BaseModel):
    id: UUID
    name: str
    source_type: str
    url: Optional[str]
    publisher: str
    publication_date: str
    data_period: str
    description: Optional[str]
    verification_status: str

    class Config:
        from_attributes = True

class EvidenceRecordResponse(BaseModel):
    id: UUID
    trade_id: str
    provider_id: Optional[UUID]
    metric: str
    value: str
    unit: str
    region: str
    district: Optional[str]
    state: Optional[str]
    data_period: Optional[str]
    sample_size: Optional[int]
    source_id: Optional[UUID]
    verification_status: str
    confidence: str
    last_verified: Optional[str]
    notes: Optional[str]
    
    source: Optional[EvidenceSourceResponse] = None

    class Config:
        from_attributes = True
