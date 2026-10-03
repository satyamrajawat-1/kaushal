from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List
from app.core.database import get_db
from app.services import trade_service
from app.schemas.trade import TradeResponse

router = APIRouter()

@router.get("/", response_model=dict)
async def get_trades(db: AsyncSession = Depends(get_db)):
    trades = await trade_service.get_all_trades(db)
    # Convert to expected response
    return {"success": True, "data": [TradeResponse.model_validate(t).model_dump() for t in trades]}

@router.get("/{id}", response_model=dict)
async def get_trade(id: str, db: AsyncSession = Depends(get_db)):
    trade = await trade_service.get_trade_by_id(db, id)
    if not trade:
        raise HTTPException(status_code=404, detail="Trade not found")
    return {"success": True, "data": TradeResponse.model_validate(trade).model_dump()}

@router.get("/{trade_id}/evidence", response_model=dict)
async def get_evidence(trade_id: str, db: AsyncSession = Depends(get_db)):
    from app.services import evidence_service
    from app.schemas.evidence import EvidenceRecordResponse
    records = await evidence_service.get_evidence_by_trade(db, trade_id)
    return {"success": True, "data": [EvidenceRecordResponse.model_validate(r).model_dump() for r in records]}
