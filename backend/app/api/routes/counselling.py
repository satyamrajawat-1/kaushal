from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import get_db
from app.schemas.counselling import MessageCreate, CounsellingResponse
from app.services.ai_service import ai_service
from app.services import evidence_service
from app.schemas.evidence import EvidenceRecordResponse

router = APIRouter()

@router.post("/message", response_model=dict)
async def send_message(payload: MessageCreate, db: AsyncSession = Depends(get_db)):
    evidence = []
    if payload.trade_id:
        evidence = await evidence_service.get_evidence_by_trade(db, payload.trade_id)
        
    ai_response = ai_service.process_counselling_message(payload.message, evidence)
    
    # We must match the expected frontend structure or the frontend apiClient should adapt.
    # The frontend mockApi returns ChatMessageData: {id, sender, text, timestamp, evidenceIncluded}
    # However, apiClient expects the new CounsellingResponse format or we can map it in apiClient.
    # We'll map the AI response to the structure the frontend expects inside apiClient.
    
    # Convert evidence models to schema dicts
    ai_response["evidence"] = [EvidenceRecordResponse.model_validate(e).model_dump() for e in ai_response["evidence"]]
    
    return {"success": True, "data": ai_response}
