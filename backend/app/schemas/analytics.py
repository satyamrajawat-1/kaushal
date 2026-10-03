from pydantic import BaseModel
from typing import List, Dict, Any, Optional

class AdminOverviewResponse(BaseModel):
    families_counselled: int
    sessions_resolved: int
    sessions_escalated: int
    sessions_unresolved: int

class DistrictInsightResponse(BaseModel):
    district: str
    top_concern: str
    concern_count: int
    resolution_rate: float
    escalation_rate: float
    evidence_gap_count: int

class TradeInsightResponse(BaseModel):
    trade: str
    primary_concern: str
    evidence_availability: str
    escalation_rate: float
    resolution_rate: float
