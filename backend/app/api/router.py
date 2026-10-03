from fastapi import APIRouter
from app.api.routes import health, trades, family, counselling, counsellors, admin

api_router = APIRouter()

api_router.include_router(health.router, tags=["health"])
api_router.include_router(trades.router, prefix="/trades", tags=["trades"])
api_router.include_router(family.router, prefix="/family", tags=["family"])
api_router.include_router(counselling.router, prefix="/counselling", tags=["counselling"])
api_router.include_router(counsellors.router, prefix="/counsellors", tags=["counsellors"])
api_router.include_router(admin.router, prefix="/admin", tags=["admin"])
