from pydantic import BaseModel
from typing import List, Optional, Any
from uuid import UUID

class CareerPathNodeResponse(BaseModel):
    id: UUID
    path_id: UUID
    node_id: str
    title: str
    title_hi: Optional[str]
    description: str
    description_hi: Optional[str]
    duration: Optional[str]
    income_range: Optional[str]
    type: str

    class Config:
        from_attributes = True

class CareerPathEdgeResponse(BaseModel):
    id: UUID
    path_id: UUID
    source: str
    target: str

    class Config:
        from_attributes = True

class CareerPathResponse(BaseModel):
    id: UUID
    trade_id: str
    title: str
    description: str
    nodes: List[CareerPathNodeResponse] = []
    edges: List[CareerPathEdgeResponse] = []

    class Config:
        from_attributes = True

class CareerScenarioResponse(BaseModel):
    id: str
    trade_id: str
    title: str
    title_hi: str
    description: str
    description_hi: str
    trigger: str
    steps: List[Any]
    alternative_paths: List[Any]

    class Config:
        from_attributes = True
