# Sprint 04 Acceptance Criteria & Definition of Done

This document establishes the official, measurable Definition of Done (DoD) for **Sprint 04: Backend Foundation & Local API Architecture**.

---

## 1. Functional Requirements

- **FastAPI Application Initialization**: FastAPI server initializes cleanly on `http://localhost:8000` with Uvicorn ASGI server and CORS middleware configured for `http://localhost:5173`.
- **Health API (`GET /api/v1/health`)**: Returns `200 OK` with `status: "healthy"`, API version `1.0.0`, active database status `connected`, and current server uptime in seconds.
- **Settings API (`GET` & `PUT /api/v1/settings`)**:
  - `GET` fetches executive settings record from the SQLite database.
  - `PUT` validates request payload via Pydantic schema and updates setting fields (`theme`, `default_workspace`, `active_persona`, `telemetry_poll_rate_ms`, `auto_start_ollama`) with persistent storage.
- **System Telemetry API (`GET /api/v1/telemetry/system`)**: Returns real host hardware metrics (hostname, OS platform, CPU cores, CPU utilization %, total/used/free RAM MB, disk usage GB, system uptime seconds).
- **Ollama Telemetry API (`GET /api/v1/telemetry/ollama`)**: Pings local Ollama service (`http://localhost:11434/api/tags`) and returns `ONLINE` or `OFFLINE` status along with installed LLM models list.
- **Project Metadata API (`GET /api/v1/telemetry/project`)**: Parses local Git repository status and returns active branch name, uncommitted changes count, top 5 recent commits, and project progress milestone completion percentage.
- **Strict Scope Boundaries**: Confirms that 0 Trading, Business, AI Employee, Auth, or MCP modules are present.

---

## 2. Database & Migration Requirements

- **SQLite Database Initialization**: SQLite database instance (`backend/anvora.db`) initializes automatically with WAL (Write-Ahead Logging) journal mode enabled.
- **Alembic Migration Pipeline**: Alembic environment configured; running `alembic upgrade head` applies all migration scripts without errors.
- **ORM Models**: `Setting` and `TelemetryLog` SQLAlchemy 2.0 ORM models created with strict column types and default seeds.
- **Data Persistence**: Updates made via `PUT /api/v1/settings` persist across server restarts.

---

## 3. Performance Requirements

- **Sub-50ms Local API Response**: Local telemetry and health endpoint responses complete with latency under 50ms.
- **Async Non-Blocking Execution**: Sub-process execution for Git CLI commands and system profiling wrapped asynchronously (`asyncio.create_subprocess_exec` / `asyncio.to_thread`) without blocking the main event loop.
- **Concurrent Read Performance**: SQLite WAL mode enables parallel read requests from the frontend without database locking errors.

---

## 4. Quality & Documentation Requirements

- **OpenAPI Documentation**: Interactive Swagger UI auto-generated and accessible at `http://localhost:8000/docs`.
- **Pydantic Validation**: 100% of request and response payloads validated using Pydantic v2 schemas.
- **Standardized Exception Envelopes**: All HTTP errors (e.g. `503 Service Unavailable`, `422 Unprocessable Entity`) return standardized JSON error envelopes.
- **Git Committed**: All Sprint 04 architecture and design documentation files committed to the repository branch.
