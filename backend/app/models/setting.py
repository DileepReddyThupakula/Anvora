from datetime import datetime, timezone
from sqlalchemy import Boolean, DateTime, Integer, String
from sqlalchemy.orm import Mapped, mapped_column
from app.models.base import Base


class Setting(Base):
    __tablename__ = "settings"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    theme: Mapped[str] = mapped_column(
        String(32), default="executive-dark", nullable=False
    )
    default_workspace: Mapped[str] = mapped_column(
        String(64), default="Anvora Capital", nullable=False
    )
    active_persona: Mapped[str] = mapped_column(
        String(64), default="Chief Executive Officer", nullable=False
    )
    telemetry_poll_rate_ms: Mapped[int] = mapped_column(
        Integer, default=5000, nullable=False
    )
    auto_start_ollama: Mapped[bool] = mapped_column(
        Boolean, default=True, nullable=False
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc),
        onupdate=lambda: datetime.now(timezone.utc),
        nullable=False,
    )
