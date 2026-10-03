from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def get_counsellors():
    return {"success": True, "data": []}
