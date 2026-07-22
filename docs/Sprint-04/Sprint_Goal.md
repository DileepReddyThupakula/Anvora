# Sprint 04 Goal: Backend Foundation & Local API Architecture

## Executive Summary

Sprint 04 establishes the local Python backend foundation for **Anvora AI OS**, creating an enterprise-grade, asynchronous REST API powered by **FastAPI**, **SQLite**, **SQLAlchemy**, **Alembic**, **Pydantic**, and **Uvicorn**.

The backend serves as the authoritative local intelligence engine, replacing browser-only estimates with deep, native host diagnostics, persistent executive settings, real-time Ollama daemon integration, and Git repository inspection.

---

## Strategic Objectives

1. **Architect High-Performance FastAPI Backend**: Build a modular, clean-layered Python backend running on Uvicorn (`http://localhost:8000`).
2. **Establish Local Persistence & Migration Pipeline**: Deploy an async **SQLite** database (`anvora.db`) managed by **SQLAlchemy 2.0** ORM models and **Alembic** schema migrations.
3. **Expose Core Operational REST APIs**: Deliver strict, validated **Pydantic v2** request/response contracts for Health, Executive Settings, System Telemetry, Ollama Service, and Project Metadata.
4. **Guarantee Sub-50ms Local Response Latency**: Utilize asynchronous non-blocking I/O and process execution to ensure telemetry querying never blocks the main API event loop.

---

## Scope of Sprint 04

### Included Components & API Modules

#### 1. FastAPI Application Framework
- Asynchronous application initialization with CORS middleware configured for Vite frontend (`http://localhost:5173`).
- Global exception handling returning standardized JSON error envelopes.
- Auto-generated OpenAPI / Swagger UI documentation available at `http://localhost:8000/docs`.

#### 2. Local Database & Migration System
- **SQLite 3** database instance (`backend/anvora.db`) with Write-Ahead Logging (WAL) enabled.
- **SQLAlchemy 2.0** async engine and session factory.
- **Alembic 1.13** migration configuration for schema evolution.

#### 3. Core REST API Endpoints (5 Targeted Modules)
- **Health API** (`/api/v1/health`): Server health, uptime, API version, DB connection check.
- **Settings API** (`/api/v1/settings`): Executive workspace preferences, active persona, theme, and polling configuration.
- **System Telemetry API** (`/api/v1/telemetry/system`): Host CPU cores, CPU utilization %, total/available memory, system platform, OS uptime.
- **Ollama API** (`/api/v1/telemetry/ollama`): Local Ollama daemon status (`ONLINE`/`OFFLINE`), installed model inventory (`ollama list`), model parameter sizes.
- **Project Metadata API** (`/api/v1/telemetry/project`): Local Git branch detection, uncommitted file changes count, top 5 recent commits log, project milestone calculation.

---

### Explicitly Excluded from Scope

To maintain a laser focus on backend foundation and telemetry infrastructure, the following modules are **strictly excluded** from Sprint 04:
- **Trading APIs**: Brokerage integrations, exchange webhooks (Alpaca, Interactive Brokers, Binance).
- **Business & Financial APIs**: Accounting or CRM integrations (Stripe, QuickBooks, Salesforce).
- **Knowledge Base & Vector Databases**: Document indexing, RAG pipelines, ChromaDB/Pinecone integrations.
- **AI Employees & Agent Swarms**: Autonomous agent fleet execution, multi-agent orchestration engines.
- **Authentication Providers**: OAuth 2.0, JWT user auth, third-party identity SaaS (Auth0, Clerk).
- **Model Context Protocol (MCP)**: MCP server transport endpoints.

---

## Deliverables

1. **Sprint Goal Specification** (`docs/Sprint-04/Sprint_Goal.md`): Objectives, tech stack, scope boundaries, and deliverables.
2. **Architecture Specification** (`docs/Sprint-04/Architecture.md`): Clean-layered backend directory structure, FastAPI lifecycle, and async execution pattern.
3. **API Contracts Specification** (`docs/Sprint-04/API_Contracts.md`): Pydantic request/response schemas, REST route definitions, HTTP status codes, and JSON response examples for all 5 endpoint groups.
4. **Database & Schema Contract** (`docs/Sprint-04/Database.md`): SQLite configuration, SQLAlchemy ORM models, Alembic migration workflow, and indexing strategies.
5. **Acceptance Criteria & DoD Matrix** (`docs/Sprint-04/Acceptance_Criteria.md`): Definition of Done detailing functional, database, performance, and quality benchmarks.

---

## Technical Stack

| Component | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | FastAPI | `^0.110.0` | High-performance async REST API framework |
| **ASGI Server** | Uvicorn | `^0.28.0` | High-performance ASGI web server |
| **Database Engine** | SQLite 3 | `^3.45.0` | Zero-configuration local database storage |
| **ORM** | SQLAlchemy | `^2.0.28` | Async Object-Relational Mapping & DB session management |
| **Migrations** | Alembic | `^1.13.1` | Lightweight database schema migration tool |
| **Validation** | Pydantic | `^2.6.4` | Data validation and settings management |
