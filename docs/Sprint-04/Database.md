# Database Architecture & Schema Specification

This document details the database engine, Object-Relational Mapping (ORM) setup, schema tables, indexing strategy, and Alembic migration workflow for the **Anvora AI OS** backend in Sprint 04.

---

## 1. Database Engine & Configuration

### Storage Engine
- **Engine**: SQLite 3
- **File Location**: `backend/anvora.db`
- **Driver**: `aiosqlite` (`sqlite+aiosqlite:///./anvora.db`) for non-blocking asynchronous I/O.

### Performance Optimization PRAGMAs
Upon database connection initialization, the following SQLite PRAGMAs are automatically executed:

```sql
PRAGMA journal_mode = WAL;          -- Write-Ahead Logging for concurrent read performance
PRAGMA synchronous = NORMAL;        -- Optimal balance of durability and speed
PRAGMA foreign_keys = ON;           -- Enforce foreign key constraints
PRAGMA busy_timeout = 5000;         -- 5 second lock timeout
```

---

## 2. SQLAlchemy ORM Models & Schema Definitions

### Table 1: `settings`

Stores persistent executive workspace configuration and session preferences.

```python
class Setting(Base):
    __tablename__ = "settings"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    theme: Mapped[str] = mapped_column(String(32), default="executive-dark", nullable=False)
    default_workspace: Mapped[str] = mapped_column(String(64), default="Anvora Capital", nullable=False)
    active_persona: Mapped[str] = mapped_column(String(64), default="Chief Executive Officer", nullable=False)
    telemetry_poll_rate_ms: Mapped[int] = mapped_column(Integer, default=5000, nullable=False)
    auto_start_ollama: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc),
        onupdate=lambda: datetime.now(timezone.utc),
        nullable=False,
    )
```

#### SQL DDL (`settings`)
```sql
CREATE TABLE settings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    theme VARCHAR(32) NOT NULL DEFAULT 'executive-dark',
    default_workspace VARCHAR(64) NOT NULL DEFAULT 'Anvora Capital',
    active_persona VARCHAR(64) NOT NULL DEFAULT 'Chief Executive Officer',
    telemetry_poll_rate_ms INTEGER NOT NULL DEFAULT 5000,
    auto_start_ollama BOOLEAN NOT NULL DEFAULT 1,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

---

### Table 2: `telemetry_logs`

Audit log table recording periodic snapshots of system resource usage, Ollama service status, and Git branch telemetry.

```python
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
```

#### SQL DDL (`telemetry_logs`)
```sql
CREATE TABLE telemetry_logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    cpu_usage_percent FLOAT NOT NULL,
    memory_used_mb INTEGER NOT NULL,
    ollama_status VARCHAR(16) NOT NULL,
    active_branch VARCHAR(64) NOT NULL,
    recorded_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX ix_telemetry_logs_recorded_at ON telemetry_logs (recorded_at);
```

---

## 3. Alembic Database Migration Workflow

### Migration Pipeline Configuration
1. **Alembic Environment (`backend/alembic/env.py`)**: Imports `Base.metadata` from `app.models` to enable auto-generating migration scripts based on ORM model changes.
2. **Migration Script Generation**:
   ```bash
   alembic revision --autogenerate -m "create settings and telemetry_logs tables"
   ```
3. **Migration Execution**:
   ```bash
   alembic upgrade head
   ```
4. **Rollback Command**:
   ```bash
   alembic downgrade -1
   ```

---

## 4. Initial Seed Data

Upon database creation, an initial seed record is inserted into `settings` if the table is empty:

```sql
INSERT INTO settings (id, theme, default_workspace, active_persona, telemetry_poll_rate_ms, auto_start_ollama, updated_at)
VALUES (1, 'executive-dark', 'Anvora Capital', 'Chief Executive Officer', 5000, 1, CURRENT_TIMESTAMP);
```
