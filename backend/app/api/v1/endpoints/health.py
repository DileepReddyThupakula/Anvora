import time
from datetime import datetime, timezone
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import text
from sqlalchemy.ext.asyncio import AsyncSession

from app.config import settings
from app.database import get_db
from app.schemas.health import HealthResponse

router = APIRouter()
START_TIME = time.time()


@router.get(
    "/health",
    response_model=HealthResponse,
    status_code=status.HTTP_200_OK,
    summary="Application Health Check",
    description="Returns API health status, server uptime, version, and database connectivity state.",
)
async def get_health_status(
    db: AsyncSession = Depends(get_db),
) -> HealthResponse:
    db_status = "disconnected"
    try:
        # Check DB connectivity
        result = await db.execute(text("SELECT 1"))
        if result.scalar() == 1:
            db_status = "connected"
    except Exception:
        db_status = "disconnected"

    uptime = time.time() - START_TIME

    if db_status != "connected":
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail={
                "status": "degraded",
                "version": settings.VERSION,
                "database": db_status,
                "uptime_seconds": round(uptime, 2),
                "timestamp": datetime.now(timezone.utc).isoformat(),
            },
        )

    return HealthResponse(
        status="healthy",
        version=settings.VERSION,
        database=db_status,
        uptime_seconds=round(uptime, 2),
        timestamp=datetime.now(timezone.utc),
    )
