from fastapi import APIRouter

router = APIRouter()

@router.post("/sessions")
async def create_session():
    return {"success": True, "data": {}}
