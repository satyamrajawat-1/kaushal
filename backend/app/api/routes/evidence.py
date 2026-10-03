from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List
from app.core.database import get_db
from app.services import evidence_service
from app.schemas.evidence import EvidenceRecordResponse

router = APIRouter()

@router.get("/{trade_id}/evidence", response_model=dict)
async def get_evidence(trade_id: str, db: AsyncSession = Depends(get_db)):
    records = await evidence_service.get_evidence_by_trade(db, trade_id)
    return {"success": True, "data": [EvidenceRecordResponse.model_validate(r).model_dump() for r in records]}
