# Executive User Journey: Real Local Telemetry & System Intelligence

This document details the executive user journey for **Anvora AI OS** powered by **100% real local system telemetry and local environment intelligence**. Every stage relies strictly on real local machine data, Ollama service status, and local Git repository state.

---

## 1. App Launch

### Purpose
Provide an instantaneous, high-status cold boot splash that captures real local system time, verifies local machine identity, and initiates hardware security checks.

### User Goal
Launch Anvora AI OS and verify local host session security without friction.

### User Actions
- Open the application executable or load the web application in a browser.
- Observe the real local system timestamp and local machine hostname displayed on the launch frame.

### System Actions
- Read local host platform details (`os.platform()`, `os.hostname()`, system time).
- Validate local session credentials stored in secure local browser/desktop storage.
- Render glassmorphic launch frame with real system time ticker.

### Success State
- Real local hostname and timestamp displayed accurately; security handshake validated in < 300ms.

### Failure State
- Local storage corrupted or inaccessible; falls back to local session initialization prompt without crashing.

### Next Screen
- **System Initialization**

---

## 2. System Initialization

### Purpose
Perform real hardware diagnostics, verify local Ollama LLM service status, scan local Git repository state, and profile local machine resources.

### User Goal
Confirm local AI model availability, Git repository cleanliness, and system resource capacity before entering the workspace.

### User Actions
- Monitor real-time progress as local telemetry checks run against Ollama and Git.
- (Optional) Click "View Raw Diagnostics" to inspect local HTTP ping responses and shell command outputs.

### System Actions
- Send HTTP `GET` request to `http://localhost:11434/api/tags` to check Ollama service status and query installed models.
- Execute local Git status query (`git status --porcelain`, `git branch --show-current`) to inspect codebase state.
- Query local CPU core count, system uptime, and available RAM.

### Success State
- Ollama service confirmed `ONLINE` with installed models list populated; Git branch and clean state verified in < 800ms.

### Failure State
- Ollama service offline or uninstalled; system highlights `OLLAMA_OFFLINE` badge, displays non-blocking startup recommendation, and allows user to proceed.

### Next Screen
- **Reception Lobby**

---

## 3. Reception Lobby

### Purpose
Allow the executive user to select an active workspace context mapped directly to local project directories and active Git branches.

### User Goal
Select the active local project workspace and persona role for the operational session.

### User Actions
- View available local project workspaces detected from local filesystem and Git repositories.
- Select executive persona role (e.g., "Chief Executive", "Lead Engineer", "System Architect").
- Click **"Proceed to Briefing"**.

### System Actions
- Scan local workspace root directory for project configuration and `.git` repository metadata.
- Hydrate selected workspace context with real local Git branch name and repository owner info.
- Persist selected workspace and persona context into local session storage.

### Success State
- Real local project workspace and active Git branch successfully selected and context hydrated.

### Failure State
- Local project directory inaccessible or unreadable; displays fallback default workspace option.

### Next Screen
- **Executive Briefing**

---

## 4. Executive Briefing

### Purpose
Synthesize real local codebase activity (recent Git commits, uncommitted changes), local AI model availability (Ollama models), and local system health into an executive summary digest.

### User Goal
Grasp real recent codebase changes, local AI model capacity, and host resource health in under 60 seconds.

### User Actions
- Review 3-tier prioritized briefing stream populated with real local Git commit messages, uncommitted change counts, and local Ollama model states.
- Click quick action chips to inspect recent commit diffs or start local Ollama model.
- Click **"Enter Command Center"**.

### System Actions
- Parse the 5 most recent local Git commits (`git log -n 5`) to generate the recent code activity digest.
- Evaluate local RAM and CPU utilization to issue system health recommendations.
- Render local AI model inventory (e.g., `llama3:8b`, `codellama:13b`) fetched from Ollama.

### Success State
- Real local Git commit history and Ollama model metrics rendered cleanly in the 3-tier priority digest.

### Failure State
- Git history unavailable (not a git repository); displays local workspace status with clear "Non-Git Project Directory" notification.

### Next Screen
- **Enter Headquarters**

---

## 5. Enter Headquarters

### Purpose
Deliver a high-status clearance validation and visual transition into the live local Executive Dashboard.

### User Goal
Confirm local environment clearance and enter the live local command workspace.

### User Actions
- Click **"Confirm Clearance & Launch HQ"** (or allow 3-second auto-advance).
- Experience the smooth 60 FPS visual portal transition into the main workspace.

### System Actions
- Re-verify local application health and active session state.
- Pre-render live Executive Dashboard widgets populated with real local system data.
- Trigger smooth 60 FPS zoom/cross-fade transition into the live workspace layout.

### Success State
- Clearance confirmed; transition lands smoothly on the live Executive Dashboard in < 400ms.

### Failure State
- Local state hydration failure; gracefully resets to Reception Lobby with error toast.

### Next Screen
- **Executive Dashboard**

---

## 6. Executive Dashboard

### Purpose
Serve as the primary command-and-control workspace displaying continuous, real-time local host metrics, Ollama AI model status, Git repository telemetry, and local app health.

### User Goal
Monitor real-time system performance, local AI engine readiness, codebase commit velocity, and application runtime health.

### User Actions
- View live system uptime ticker, CPU/memory gauges, and OS specs widget.
- Inspect installed Ollama AI models list and service status badge.
- View real-time Git repository status (active branch, uncommitted files, recent commit history).
- Interact with local application health metrics and active session indicators.

### System Actions
- Maintain background polling (1000ms for clock/uptime, 5000ms for CPU/RAM, 10000ms for Ollama ping).
- Listen for local window focus events to refresh Git status dynamically.
- Render all widget data derived 100% from real local system providers.

### Success State
- Executive Dashboard fully responsive, displaying live local system data with 0 hardcoded placeholders.

### Failure State
- Background telemetry query error; local widget displays inline error badge ("Service Offline") while keeping adjacent widgets operational.

### Next Screen
- **None** *(Terminal Destination / Main Executive Workspace)*
