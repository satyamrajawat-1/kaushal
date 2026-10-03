from fastapi import APIRouter

router = APIRouter()

@router.get("/overview")
async def get_admin_overview():
    return {"success": True, "data": {}}
