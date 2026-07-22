# API Contracts Specification: FastAPI v1 Endpoints

This document specifies the exact REST API contracts, Pydantic validation schemas, HTTP status codes, and JSON response payloads for all Sprint 04 backend endpoints.

Base API Prefix: `/api/v1`

---

## 1. Health API

### `GET /api/v1/health`

Checks the operational readiness of the FastAPI server, application uptime, and database connectivity.

#### Response Schema (`HealthResponse`)
- `status`: `string` (`"healthy" | "degraded" | "unhealthy"`)
- `version`: `string` (`"1.0.0"`)
- `database`: `string` (`"connected" | "disconnected"`)
- `uptime_seconds`: `float`
- `timestamp`: `string` (ISO 8601 UTC)

#### HTTP Status Codes
- `200 OK`: Server and database operational.
- `503 Service Unavailable`: Database connection failed.

#### Example Response JSON (`200 OK`)
```json
{
  "status": "healthy",
  "version": "1.0.0",
  "database": "connected",
  "uptime_seconds": 342.15,
  "timestamp": "2026-07-22T19:42:00Z"
}
```

---

## 2. Settings API

### `GET /api/v1/settings`

Fetches active executive workspace settings and user preferences from the database.

#### Response Schema (`SettingResponse`)
- `id`: `integer`
- `theme`: `string` (`"executive-dark" | "dark" | "light"`)
- `default_workspace`: `string`
- `active_persona`: `string`
- `telemetry_poll_rate_ms`: `integer` (min: `1000`, max: `60000`)
- `auto_start_ollama`: `boolean`
- `updated_at`: `string` (ISO 8601 UTC)

#### Example Response JSON (`200 OK`)
```json
{
  "id": 1,
  "theme": "executive-dark",
  "default_workspace": "Anvora Capital",
  "active_persona": "Chief Executive Officer",
  "telemetry_poll_rate_ms": 5000,
  "auto_start_ollama": true,
  "updated_at": "2026-07-22T18:00:00Z"
}
```

---

### `PUT /api/v1/settings`

Updates executive workspace settings and persists changes to the SQLite database.

#### Request Schema (`SettingUpdateRequest`)
- `theme`: `optional[string]`
- `default_workspace`: `optional[string]`
- `active_persona`: `optional[string]`
- `telemetry_poll_rate_ms`: `optional[integer]` (min: `1000`, max: `60000`)
- `auto_start_ollama`: `optional[boolean]`

#### Example Request JSON
```json
{
  "theme": "executive-dark",
  "default_workspace": "Founders HQ",
  "active_persona": "Lead Portfolio Trader",
  "telemetry_poll_rate_ms": 3000,
  "auto_start_ollama": true
}
```

#### HTTP Status Codes
- `200 OK`: Settings updated successfully.
- `422 Unprocessable Entity`: Request validation failed (e.g. invalid poll rate).

---

## 3. System Telemetry API

### `GET /api/v1/telemetry/system`

Inspects host machine hardware specifications, CPU utilization, available RAM, and operating system metrics.

#### Response Schema (`SystemTelemetryResponse`)
- `hostname`: `string`
- `platform`: `string` (`"darwin" | "linux" | "win32"`)
- `os_release`: `string`
- `arch`: `string` (`"x86_64" | "arm64"`)
- `cpu_cores`: `integer`
- `cpu_usage_percent`: `float`
- `memory_total_mb`: `integer`
- `memory_used_mb`: `integer`
- `memory_free_mb`: `integer`
- `memory_usage_percent`: `float`
- `disk_total_gb`: `float`
- `disk_used_gb`: `float`
- `system_uptime_seconds`: `integer`

#### Example Response JSON (`200 OK`)
```json
{
  "hostname": "Deepus-MacBook-Pro.local",
  "platform": "darwin",
  "os_release": "23.4.0",
  "arch": "arm64",
  "cpu_cores": 10,
  "cpu_usage_percent": 12.4,
  "memory_total_mb": 32768,
  "memory_used_mb": 14210,
  "memory_free_mb": 18558,
  "memory_usage_percent": 43.37,
  "disk_total_gb": 994.66,
  "disk_used_gb": 342.10,
  "system_uptime_seconds": 184200
}
```

---

## 4. Ollama Telemetry API

### `GET /api/v1/telemetry/ollama`

Queries the local Ollama REST service (`http://localhost:11434/api/tags`) and returns service health and installed LLM models.

#### Response Schema (`OllamaTelemetryResponse`)
- `status`: `string` (`"ONLINE" | "OFFLINE"`)
- `endpoint_url`: `string`
- `latency_ms`: `integer`
- `models`: `array[OllamaModelInfo]`
  - `name`: `string`
  - `size_bytes`: `integer`
  - `digest`: `string`
  - `modified_at`: `string`
  - `family`: `string`
  - `parameter_size`: `string`

#### Example Response JSON (`200 OK` - Online)
```json
{
  "status": "ONLINE",
  "endpoint_url": "http://localhost:11434/api/tags",
  "latency_ms": 14,
  "models": [
    {
      "name": "llama3:8b",
      "size_bytes": 4661224676,
      "digest": "a6990ed6becc",
      "modified_at": "2026-07-20T14:22:10Z",
      "family": "llama",
      "parameter_size": "8B"
    },
    {
      "name": "mistral:7b",
      "size_bytes": 4109840224,
      "digest": "61e88e884507",
      "modified_at": "2026-07-18T09:15:00Z",
      "family": "llama",
      "parameter_size": "7B"
    }
  ]
}
```

#### Example Response JSON (`200 OK` - Offline)
```json
{
  "status": "OFFLINE",
  "endpoint_url": "http://localhost:11434/api/tags",
  "latency_ms": 2000,
  "models": []
}
```

---

## 5. Project Metadata API

### `GET /api/v1/telemetry/project`

Parses local Git repository status, active branch, uncommitted files, recent commit history, and milestone progress.

#### Response Schema (`ProjectMetadataResponse`)
- `current_branch`: `string`
- `uncommitted_changes_count`: `integer`
- `repository_name`: `string`
- `repository_owner`: `string`
- `is_private`: `boolean`
- `recent_commits`: `array[GitCommitSchema]`
  - `hash`: `string`
  - `author`: `string`
  - `message`: `string`
  - `timestamp`: `string`
- `project_progress`: `ProjectProgressSchema`
  - `completion_percentage`: `integer`
  - `current_sprint`: `string`
  - `sprint_goal`: `string`
  - `completed_tasks`: `integer`
  - `total_tasks`: `integer`

#### Example Response JSON (`200 OK`)
```json
{
  "current_branch": "sprint-3-executive-briefing",
  "uncommitted_changes_count": 0,
  "repository_name": "Anvora",
  "repository_owner": "DileepReddyThupakula",
  "is_private": true,
  "recent_commits": [
    {
      "hash": "a4f91b2",
      "author": "Dileep Reddy",
      "message": "feat(telemetry): implement browser-safe telemetry providers",
      "timestamp": "2026-07-22T19:27:00Z"
    },
    {
      "hash": "7c2e9d1",
      "author": "Dileep Reddy",
      "message": "feat(startup): complete Sprint 2 6-stage executive startup flow",
      "timestamp": "2026-07-22T18:45:00Z"
    }
  ],
  "project_progress": {
    "completion_percentage": 75,
    "current_sprint": "Sprint 04 - Backend Foundation",
    "sprint_goal": "Establish FastAPI backend and SQLite database foundation",
    "completed_tasks": 15,
    "total_tasks": 20
  }
}
```
