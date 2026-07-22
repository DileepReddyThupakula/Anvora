from datetime import datetime
from pydantic import BaseModel, Field


class HealthResponse(BaseModel):
    status: str = Field(..., json_schema_extra={"example": "healthy"})
    version: str = Field(..., json_schema_extra={"example": "1.0.0"})
    database: str = Field(..., json_schema_extra={"example": "connected"})
    uptime_seconds: float = Field(..., json_schema_extra={"example": 124.5})
    timestamp: datetime = Field(..., json_schema_extra={"example": "2026-07-22T19:50:00Z"})
