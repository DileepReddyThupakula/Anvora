# Sprint 03 Data Sources Architecture & Telemetry Contracts

This document specifies the 11 core local data sources powering the **Anvora AI OS** executive workspace in Sprint 03. All metric providers operate strictly against local host resources, local background daemons, and local filesystem structures.

---

## Excluded Data Sources (Out of Scope for Sprint 03)

To ensure privacy, security, and local independence, the following external cloud integration categories are **strictly excluded** from Sprint 03:
- **Trading APIs**: Brokerage APIs, live market feeds (Alpaca, Interactive Brokers, Binance).
- **Business APIs**: External accounting, ERP, or CRM platforms (Stripe, QuickBooks, Salesforce).
- **External Databases**: Cloud-hosted SQL or NoSQL databases (Supabase, Firebase, AWS RDS, MongoDB Atlas).
- **Authentication Providers**: External identity SaaS platforms (Auth0, Clerk, Okta).
- **Cloud Services**: Paid third-party cloud AI APIs (OpenAI API key dependency, Anthropic Claude API).

---

## Core Local Data Source Specifications

### 1. Current Date & Time

- **Purpose**: Provide executives with an instantaneous, accurate local time, date, and timezone reference for situational awareness and log synchronization.
- **Source**: Browser `Date` API / `Intl.DateTimeFormat` (`new Date().toLocaleTimeString()`, `Intl.DateTimeFormat().resolvedOptions().timeZone`).
- **Refresh Interval**: `1000ms` (1 second continuous ticker).
- **Failure Behavior**: System clock fallback to UTC timestamp if local timezone formatting fails; never crashes.
- **Future Expansion**: Multi-timezone executive clock bar displaying operational hours across international financial centers (London, New York, Tokyo).

---

### 2. System Uptime

- **Purpose**: Measure host stability and system uptime duration to assess machine performance and uptime reliability.
- **Source**: `performance.now()` for client runtime session duration, combined with Node.js/OS bridge `os.uptime()` when running under desktop host runtime.
- **Refresh Interval**: `1000ms` (1 second ticker).
- **Failure Behavior**: Displays local session duration if host OS uptime call is unavailable in pure web browser mode.
- **Future Expansion**: Integration with host daemon process managers (e.g. systemd / launchd) to track individual background service uptime metrics.

---

### 3. Local Machine Information

- **Purpose**: Provide executives with transparent visibility into host hardware architecture, available compute resources, and operating system specs.
- **Source**: Browser `navigator.hardwareConcurrency`, `navigator.deviceMemory`, `navigator.userAgentData` combined with Node.js/OS bridge (`os.arch()`, `os.platform()`, `os.totalmem()`, `os.freemem()`).
- **Refresh Interval**: `5000ms` (5 seconds for memory/CPU usage profiling).
- **Failure Behavior**: Fallbacks to standard Web API platform estimates if native desktop bridge APIs are restricted.
- **Future Expansion**: Deep hardware telemetry profiling including GPU core utilization, VRAM allocation, and thermal metrics.

---

### 4. Ollama Service Status

- **Purpose**: Monitor operational readiness of the local Ollama LLM inference service daemon to ensure AI agent capabilities are active.
- **Source**: HTTP `GET` request to local Ollama REST endpoint `http://localhost:11434/api/tags` (or health check endpoint).
- **Refresh Interval**: `10000ms` (10 seconds background ping).
- **Failure Behavior**: Flags `OLLAMA_OFFLINE` status badge in UI, renders an inline warning banner with installation/startup instructions (`ollama serve`), and disables local LLM invocation triggers without crashing the dashboard.
- **Future Expansion**: Automatic local background process spawning (`child_process.spawn('ollama', ['serve'])`) to auto-start the service when offline.

---

### 5. Installed AI Models

- **Purpose**: Inventory locally available LLM models on disk so executives know which AI models (`llama3`, `mistral`, `codellama`) can be delegated tasks.
- **Source**: HTTP `GET` payload response from `http://localhost:11434/api/tags` parsing `models` array (`name`, `size`, `digest`, `modified_at`).
- **Refresh Interval**: `15000ms` (15 seconds background poll).
- **Failure Behavior**: Displays empty model list with explicit "No Installed Models Found" notification and quick-command helper (`ollama run llama3`).
- **Future Expansion**: One-click model pull manager interface allowing executives to download new open-source models directly from Ollama library.

---

### 6. Git Repository Status

- **Purpose**: Track codebase cleanliness, modified file counts, and uncommitted change velocity to give executives real-time visibility into engineering output.
- **Source**: Local Git status execution (`git status --porcelain`) via local development bridge API or filesystem watcher on `.git/index`.
- **Refresh Interval**: `5000ms` (5 seconds background scan or file watcher trigger).
- **Failure Behavior**: Displays "Clean Workspace" state if zero changes detected; displays "Non-Git Workspace" badge if `.git` directory is absent.
- **Future Expansion**: Breakdown of uncommitted changes by file extension (TypeScript, Markdown, CSS) and lines added/deleted estimates.

---

### 7. Current Git Branch

- **Purpose**: Identify the active Git working branch (e.g., `main`, `sprint-2-executive-startup`) to prevent working on incorrect code branches.
- **Source**: Reading `.git/HEAD` file or executing `git branch --show-current` via local dev bridge.
- **Refresh Interval**: `5000ms` (5 seconds background poll or file change trigger).
- **Failure Behavior**: Falls back to reading `HEAD` file directly; displays `UNKNOWN_BRANCH` if unreadable.
- **Future Expansion**: Visual branch tree inspector showing parent branch distance and tracking ahead/behind commit counts relative to `main`.

---

### 8. GitHub Repository Information (Read-only)

- **Purpose**: Display remote repository identity, organization ownership, and repository visibility status for executive workspace branding.
- **Source**: Parsing `.git/config` remote URL (`git remote get-url origin`) to extract owner (`DileepReddyThupakula`), repository name (`Anvora`), and visibility.
- **Refresh Interval**: Static on application mount / `30000ms` (30 seconds background re-check).
- **Failure Behavior**: Displays local directory name if git remote origin is unconfigured or offline.
- **Future Expansion**: Read-only fetch of open GitHub Pull Requests and open issue counts via public GitHub REST API without requiring write tokens.

---

### 9. Recent Commits

- **Purpose**: Provide an executive digest of recent codebase progress by displaying the latest 5 local Git commits.
- **Source**: Executing `git log -n 5 --pretty=format:"%h|%an|%ar|%s"` or parsing `.git/logs/HEAD`.
- **Refresh Interval**: `10000ms` (10 seconds background refresh).
- **Failure Behavior**: Displays empty commit history placeholder ("No Recent Commits Found") if commit history is uninitialized.
- **Future Expansion**: Interactive commit expander displaying commit file diff summaries and author avatar icons.

---

### 10. Project Progress

- **Purpose**: Quantify overall project completion percentage based on sprint deliverables, documentation milestones, and roadmap completion.
- **Source**: Algorithmic evaluation of completed sprint documentation files in `docs/` (`Sprint-01`, `Sprint-02`, `Sprint-03`), open task items, and Git commit benchmarks.
- **Refresh Interval**: `30000ms` (30 seconds background re-evaluation).
- **Failure Behavior**: Defaults to manual progress milestone fallback score (e.g., 60% completion for Sprint 3 milestone).
- **Future Expansion**: Dynamic progress tracking linked to automated test suite pass rates and feature acceptance criteria checks.

---

### 11. Local Application Health

- **Purpose**: Monitor local React web application runtime memory footprint, render performance, and event bus connection state.
- **Source**: `performance.memory` Web API (`usedJSHeapSize`, `totalJSHeapSize`, `jsHeapSizeLimit`) combined with active React state listener counts.
- **Refresh Interval**: `2000ms` (2 seconds continuous monitor).
- **Failure Behavior**: Hides JS heap metric if `performance.memory` is unsupported by browser; displays general `HEALTHY` application status.
- **Future Expansion**: Real-time render cycle profiler flagging slow components or memory leaks automatically.
