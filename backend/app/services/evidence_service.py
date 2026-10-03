from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy.orm import selectinload
from app.models.evidence import EvidenceRecord, EvidenceSource

async def get_evidence_by_trade(db: AsyncSession, trade_id: str):
    result = await db.execute(
        select(EvidenceRecord)
        .where(EvidenceRecord.trade_id == trade_id)
        .options(selectinload(EvidenceRecord.source))
    )
    return result.scalars().all()
