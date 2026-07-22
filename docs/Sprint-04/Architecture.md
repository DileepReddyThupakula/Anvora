# Backend Architecture Specification: FastAPI & SQLite Foundation

This document details the software architecture, directory structure, layer separation, execution model, and middleware design for the **Anvora AI OS** backend in Sprint 04.

---

## Architectural Pattern: Clean Layered Architecture

The backend follows a **Clean Layered Architecture** ensuring strict separation of concerns, maintainability, and testability across four distinct layers:

```
+-------------------------------------------------------------------+
|                        API / ROUTER LAYER                         |
|  (FastAPI Endpoints, Pydantic Request/Response Validation)        |
+-------------------------------------------------------------------+
                                  |
                                  v
+-------------------------------------------------------------------+
|                      SERVICE / DOMAIN LAYER                       |
|  (System Diagnostics, Ollama REST Client, Git Telemetry Parser)  |
+-------------------------------------------------------------------+
                                  |
                                  v
+-------------------------------------------------------------------+
|                     DATA ACCESS / ORM LAYER                       |
|  (SQLAlchemy 2.0 Async Sessions, ORM Models, Repositories)        |
+-------------------------------------------------------------------+
                                  |
                                  v
+-------------------------------------------------------------------+
|                       DATABASE STORAGE LAYER                      |
|  (SQLite 3 `anvora.db` with Write-Ahead Logging WAL)              |
+-------------------------------------------------------------------+
```

---

## Directory Structure Specification

All backend code resides in the root `backend/` directory, isolated from the React frontend application:

```
backend/
├── alembic/                      # Alembic database migration environment
│   ├── versions/                 # Individual database migration scripts
│   ├── env.py                    # Alembic environment configuration
│   └── script.py.mjs             # Migration template
├── app/
│   ├── __init__.py
│   ├── main.py                   # FastAPI app instance, CORS & exception handlers
│   ├── config.py                 # Pydantic Settings & env configuration
│   ├── database.py               # Async SQLAlchemy engine & session maker
│   ├── api/
│   │   ├── __init__.py
│   │   └── v1/
│   │       ├── __init__.py
│   │       ├── api.py            # Main API v1 router aggregator
│   │       └── endpoints/
│   │           ├── __init__.py
│   │           ├── health.py     # GET /api/v1/health
│   │           ├── settings.py   # GET, PUT /api/v1/settings
│   │           ├── telemetry.py  # GET /api/v1/telemetry/system
│   │           ├── ollama.py     # GET /api/v1/telemetry/ollama
│   │           └── project.py    # GET /api/v1/telemetry/project
│   ├── models/                   # SQLAlchemy ORM Models
│   │   ├── __init__.py
│   │   ├── setting.py            # Setting ORM model
│   │   └── telemetry.py          # TelemetryLog ORM model
│   ├── schemas/                  # Pydantic Request/Response Schemas
│   │   ├── __init__.py
│   │   ├── health.py
│   │   ├── setting.py
│   │   ├── telemetry.py
│   │   ├── ollama.py
│   │   └── project.py
│   └── services/                 # Core Business Logic & Host Inspection
│       ├── __init__.py
│       ├── system_service.py     # CPU, RAM, OS specs inspection
│       ├── ollama_service.py     # Async HTTP client for Ollama API
│       └── git_service.py        # Async subprocess wrapper for Git CLI
├── alembic.ini                   # Alembic configuration file
├── anvora.db                     # SQLite database instance (git-ignored)
└── requirements.txt              # Python dependency specification
```

---

## Execution & Concurrency Model

### 1. Asynchronous Event Loop
FastAPI operates on an asynchronous event loop powered by `asyncio`. All endpoint handlers use `async def` to ensure non-blocking I/O during database transactions and HTTP requests.

### 2. Non-Blocking Subprocess Execution
Subprocess calls for Git CLI operations (`git status`, `git log`, `git branch`) and host inspection are wrapped in `asyncio.create_subprocess_exec` or `asyncio.to_thread` to prevent thread starvation on the main event loop.

### 3. Async Database Connections
SQLAlchemy 2.0 uses `aiosqlite` as the asynchronous driver for SQLite (`sqlite+aiosqlite:///./anvora.db`), enabling non-blocking database queries.

---

## Middleware & Cross-Cutting Concerns

### CORS Middleware Configuration
Configured to accept requests from local development origins:
- `http://localhost:5173` (Vite dev server)
- `http://localhost:4173` (Vite preview server)
- `http://127.0.0.1:5173`

### Standardized Error Envelope
All HTTP exceptions and validation errors return a consistent JSON response schema:

```json
{
  "error": {
    "code": "SERVICE_UNAVAILABLE",
    "message": "Ollama service at http://localhost:11434 is unreachable.",
    "status_code": 503,
    "timestamp": "2026-07-22T19:42:00Z"
  }
}
```
