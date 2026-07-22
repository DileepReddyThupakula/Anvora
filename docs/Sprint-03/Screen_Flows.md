# Screen Flow Specifications: Real Local Telemetry Integration

This document details the layout, UI components, data mappings, user interactions, animations, responsive behavior, and accessibility notes for the 6 core screens of **Anvora AI OS** in Sprint 03. All displayed data is bound strictly to real local system telemetry.

---

## 1. Launch Screen

- **Screen Name**: Launch Screen (Local Host & Security Handshake)
- **Purpose**: Serves as the initial entry point, displaying real local system date/time, local machine hostname, and local security handshake status.
- **Layout**: Centered single-column layout with dark executive base (`#07090E`), central glassmorphic container, radial ambient glow, and real-time host status footer.
- **Components**:
  - `BrandMark`: Animated Anvora logo with glowing status ring.
  - `LocalHostBadge`: Real local hostname (`os.hostname()`) and OS platform tag.
  - `RealTimeTicker`: Live digital clock displaying local system date, time, and timezone offset.
  - `HandshakeProgress`: Micro-animated progress bar validating local security token.
  - `SystemVersionFooter`: Build version, local runtime environment, and system uptime indicator.
- **User Interactions**:
  - Automatic identity verification against local browser storage.
  - Click on `LocalHostBadge` opens raw machine info modal.
- **Navigation**:
  - Auto-advances to **System Initialization** upon successful token check (< 500ms).
- **Animations**:
  - 300ms scale-up (0.95 to 1.0) and fade-in. Subtle pulse on brand mark.
- **Responsive Behavior**:
  - Fullscreen viewport (`100vh`/`100dvh`), centered layout across desktop, tablet, and mobile.
- **Accessibility Notes**:
  - `role="status"` with `aria-live="polite"` announcing live system clock and host verification state.

---

## 2. System Initialization

- **Screen Name**: System Initialization (Local Hardware & Service Diagnostics)
- **Purpose**: Performs real background diagnostics against local system resources, local Ollama LLM service, and local Git repository.
- **Layout**: Two-column split layout on desktop (Left: Real subsystem telemetry checklist; Right: Live diagnostic console drawer). Single-column stack on mobile.
- **Components**:
  - `InitializationHeader`: Real-time diagnostic title, completion percentage, and overall system health score.
  - `RealSubsystemChecklist`: Live health rows for:
    1. *Ollama AI Service*: Ping `http://localhost:11434/api/tags` (`ONLINE`/`OFFLINE`).
    2. *Git Repository State*: Execute local git status scan.
    3. *Local Machine Resources*: Query CPU core count, available RAM, and host uptime.
    4. *Application Health*: Monitor memory heap and event bus readiness.
  - `LiveConsoleDrawer`: Terminal container displaying raw HTTP response status codes and system diagnostic logs.
  - `ProceedBypassButton`: Action button to advance even if non-critical local services (e.g., Ollama) are offline.
- **User Interactions**:
  - Toggle live diagnostic console drawer expansion.
  - Click **"Proceed to Lobby"** to advance manually.
- **Navigation**:
  - Auto-advances to **Reception Lobby** when checks complete.
- **Animations**:
  - Staggered line entry for diagnostic status rows. Smooth progress fill with cyan-to-gold gradient.
- **Responsive Behavior**:
  - Console drawer collapses to a bottom drawer on viewports < 768px.
- **Accessibility Notes**:
  - Screen reader announcements for service health results via `aria-valuenow`.

---

## 3. Reception Lobby

- **Screen Name**: Reception Lobby (Local Workspace & Persona Selection)
- **Purpose**: Displays active local project workspace options mapped directly to the local Git repository and allows selection of the executive persona.
- **Layout**: Header banner, 2x2 grid of detected local project workspace cards, and a persona context selection bar.
- **Components**:
  - `LobbyHeader`: Welcome banner featuring local username and active machine hostname.
  - `LocalWorkspaceGrid`: Cards displaying detected local projects with real Git branch tags, local file paths, and uncommitted change badges.
  - `PersonaSelectorBar`: Segmented pill control for active role selection (Chief Executive, Lead Engineer, System Architect).
  - `ProceedToBriefingCTA`: Primary glassmorphic action button.
- **User Interactions**:
  - Click workspace card to select active project directory.
  - Select active persona role.
  - Click **"Proceed to Briefing"**.
- **Navigation**:
  - Advances to **Executive Briefing**.
- **Animations**:
  - Hover border highlight and selection ring on active workspace card.
- **Responsive Behavior**:
  - Grid collapses to 1 column on mobile (< 640px). Persona bar switches to a select dropdown.
- **Accessibility Notes**:
  - Keyboard grid navigation with `aria-selected` attributes on active workspace cards.

---

## 4. Executive Briefing

- **Screen Name**: Executive Briefing (Local Codebase & AI Digest)
- **Purpose**: Synthesizes real recent Git commits, local uncommitted changes, installed Ollama LLM models, and host uptime into a 3-tier actionable summary digest.
- **Layout**: 3-column desktop layout (Left: Local Host & Ollama Summary; Center: 3-Tier Priority Stream; Right: Quick Triage Controls). Single column on mobile.
- **Components**:
  - `BriefingHeader`: Live local date stamp, real system uptime badge, and recent commit velocity indicator.
  - `LocalHostSummaryWidget`: Real system uptime, total RAM usage, and active Ollama model count.
  - `PriorityDigestStream`: 3-tier categorized cards (*Critical*, *Action Required*, *Informational*):
    - *Critical*: Uncommitted file changes threshold warnings or Ollama service disconnects.
    - *Action Required*: Recent Git commit review notifications and model availability updates.
    - *Informational*: System uptime milestones and memory heap statistics.
  - `QuickTriageBar`: Action buttons to view git diffs or start local Ollama service.
  - `EnterHQCTA`: Primary action button (**"Enter Command Center"**).
- **User Interactions**:
  - Filter intelligence stream by priority level tabs.
  - Execute triage actions on individual items.
  - Click **"Enter Command Center"**.
- **Navigation**:
  - Advances to **Enter Headquarters**.
- **Animations**:
  - Card slide-out transition upon triage completion.
- **Responsive Behavior**:
  - 3-column layout collapses to a tabbed single-column view on mobile screens.
- **Accessibility Notes**:
  - Semantic heading hierarchy (`h1` -> `h2` -> `h3`). Keyboard shortcuts `1`, `2`, `3` for tab switching.

---

## 5. Enter Headquarters

- **Screen Name**: Enter Headquarters (Clearance & Workspace Transition)
- **Purpose**: Validates local workspace clearance and delivers a smooth visual transition into the live local Executive Dashboard.
- **Layout**: Full-screen glassmorphic overlay with dynamic clearance portal effect and local environment badge.
- **Components**:
  - `ClearancePortal`: Glassmorphic ring with radial status glow.
  - `LocalClearanceBadge`: Clearance status label ("Local Environment Verified").
  - `CountdownRing`: 3-second auto-advance timer ring with manual override control.
  - `LaunchHQButton`: Primary action button (**"Launch HQ Now"**).
- **User Interactions**:
  - Auto-advance countdown (3s default).
  - Click **"Launch HQ Now"** to bypass timer immediately.
- **Navigation**:
  - Advances to **Executive Dashboard**.
- **Animations**:
  - 60 FPS scale-and-blur zoom transition into the live workspace layout.
- **Responsive Behavior**:
  - Dynamic scaling across all screen aspect ratios without scrollbars.
- **Accessibility Notes**:
  - Replaces zoom animation with simple cross-fade when `prefers-reduced-motion` is active.

---

## 6. Executive Dashboard

- **Screen Name**: Executive Dashboard (Real Local Telemetry Command Center)
- **Purpose**: Primary command workspace displaying continuous, real-time local host metrics, local Ollama service status, Git repository telemetry, and application health.
- **Layout**: 3-zone layout: Top Executive Header (Real Time, Host Name, Active Branch); Central Real Telemetry Widget Grid; Right Local AI Engine & System Health Sidebar.
- **Components**:
  - `ExecutiveHeader`: Real local clock, machine hostname, active Git branch badge, system uptime counter.
  - `SystemHealthWidget`: Live CPU usage %, memory usage (used/total MB), OS platform, and host uptime ticker.
  - `OllamaEngineWidget`: Ollama service status indicator (`ONLINE`/`OFFLINE`), endpoint URL (`localhost:11434`), installed models list (`llama3`, `mistral`), total disk space used by models.
  - `GitTelemetryWidget`: Active branch name, uncommitted changes count (modified/staged/untracked), 5 most recent commits feed (author, hash, message, time).
  - `GitHubRepoWidget`: Read-only remote repository name, owner/org, visibility status, default branch.
  - `ProjectProgressWidget`: Real-time progress metric calculated from completed documentation tasks and commit activity.
  - `AppHealthWidget`: Local React app memory heap usage, active event listeners, local storage usage.
- **User Interactions**:
  - Hover over widgets for expanded metric tooltips.
  - Click "Refresh Telemetry" button to force immediate local state re-query.
  - Click commit hash to copy Git commit ID to clipboard.
- **Navigation**:
  - Terminal destination for the startup sequence; internal tab navigation between workspace views.
- **Animations**:
  - Real-time numerical ticker updates with subtle color pulses (green/red flash on value change).
- **Responsive Behavior**:
  - 12-column desktop grid collapses to 6 columns on tablet and 1 column on mobile. Sidebar converts to a slide-over drawer on mobile.
- **Accessibility Notes**:
  - Full ARIA landmark regions (`header`, `main`, `aside`). High-contrast typography exceeding WCAG 7:1 ratio.
