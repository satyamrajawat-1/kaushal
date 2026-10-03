from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.models.trade import Trade
from app.schemas.trade import TradeResponse

async def get_all_trades(db: AsyncSession):
    result = await db.execute(select(Trade).where(Trade.active == True))
    return result.scalars().all()

async def get_trade_by_id(db: AsyncSession, trade_id: str):
    result = await db.execute(select(Trade).where(Trade.id == trade_id))
    return result.scalars().first()
