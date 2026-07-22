from datetime import datetime, timezone
from sqlalchemy import DateTime, Float, Integer, String
from sqlalchemy.orm import Mapped, mapped_column
from app.models.base import Base


class TelemetryLog(Base):
    __tablename__ = "telemetry_logs"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    cpu_usage_percent: Mapped[float] = mapped_column(Float, nullable=False)
    memory_used_mb: Mapped[int] = mapped_column(Integer, nullable=False)
    ollama_status: Mapped[str] = mapped_column(String(16), nullable=False)
    active_branch: Mapped[str] = mapped_column(String(64), nullable=False)
    recorded_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc),
        nullable=False,
        index=True,
    )
