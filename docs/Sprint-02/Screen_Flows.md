# Screen Flow Specifications: Anvora AI OS Startup Experience

This document details the layout, components, interactions, animations, responsive behavior, and accessibility specifications for the 6 core screens comprising the **Anvora AI OS** startup sequence.

---

## 1. Launch Screen

- **Screen Name**: Launch Screen (Cold Boot & Security Handshake)
- **Purpose**: Serves as the initial entry point, executing identity verification and security credential handshakes while establishing a high-status executive tone.
- **Layout**: Centered single-column layout with executive dark base (`#07090E`), central glassmorphic container, radial background glow, and bottom security badge footer.
- **Components**:
  - `BrandMark`: Signature Anvora glowing logo mark.
  - `SecurityHandshakeBadge`: Encrypted hardware/JWT connection indicator.
  - `LoadingPulse`: Subtle micro-animated glowing progress ring.
  - `VersionFooter`: Executive build identifier and environment status.
- **User Interactions**:
  - Automatic identity and token verification on mount.
  - Click on `BrandMark` triggers environment diagnostic info modal.
- **Navigation**:
  - Auto-advances to **System Initialization** upon successful token check (< 500ms).
  - Redirects to authentication modal if token is invalid or missing.
- **Animations**:
  - 300ms cubic-bezier scale-up (0.95 to 1.0) and fade-in.
  - Breathing radial glow effect on the brand mark.
- **Responsive Behavior**:
  - Fullscreen dynamic viewport (`100vh` / `100dvh`), centered on mobile, tablet, and desktop viewports.
- **Accessibility Notes**:
  - `role="status"` with `aria-live="polite"` announcing handshake status. High-contrast text ratio exceeding WCAG 7:1.

---

## 2. System Initialization

- **Screen Name**: System Initialization
- **Purpose**: Communicates real-time boot status while warming up AI agent swarms, memory layers, and live telemetry channels.
- **Layout**: Two-column split layout on desktop (Left: Subsystem progress checklist; Right: Live telemetry console drawer). Single-column stack on mobile.
- **Components**:
  - `InitializationHeader`: Stage title, stage subtitle, and percentage indicator.
  - `SubsystemStatusList`: Live checklist for AI Swarm, Telemetry, Memory Store, and Analytics.
  - `TelemetryTerminal`: Glassmorphic console displaying real-time system logs.
  - `BypassActionButton`: Secondary button permitting manual advance if non-critical services delay.
- **User Interactions**:
  - Expand/collapse live telemetry console drawer.
  - Click **"Proceed to Workspace"** if non-critical bypass is enabled.
- **Navigation**:
  - Auto-advances to **Reception Lobby** when progress reaches 100% (< 1.2s).
- **Animations**:
  - Staggered line entry for status items (50ms delay per row).
  - Smooth progress fill with cyan-to-gold status gradient.
- **Responsive Behavior**:
  - Telemetry console collapses into a slide-up drawer on screens < 768px.
- **Accessibility Notes**:
  - Screen reader progress updates via `aria-valuenow`. Keyboard focus trap on bypass modal controls.

---

## 3. Reception Lobby

- **Screen Name**: Reception Lobby
- **Purpose**: Allows executive users to select their active organization workspace and persona context for the session.
- **Layout**: Header banner with subtitle, 2x2 interactive grid of workspace tenant cards, and a bottom persona selection bar.
- **Components**:
  - `LobbyHeader`: Welcome title and workspace selection instruction.
  - `WorkspaceGrid`: Interactive cards displaying available organization tenants.
  - `PersonaSelectorBar`: Segmented control pill for role selection (Founder, Trader, Executive).
  - `ProceedButton`: Primary glassmorphic CTA button to launch briefing.
- **User Interactions**:
  - Click workspace card to select active tenant.
  - Toggle persona context via keyboard tab or pointer click.
  - Click **"Proceed to Briefing"**.
- **Navigation**:
  - Advances to **Executive Briefing** upon selection confirmation.
- **Animations**:
  - 3D card tilt effect on mouse hover.
  - Glowing border highlight on selected workspace card.
- **Responsive Behavior**:
  - 2x2 grid collapses to 1 column on mobile (< 640px). Persona bar switches to vertical selection menu.
- **Accessibility Notes**:
  - Arrow key navigation across workspace grid cards with `aria-selected` indicators.

---

## 4. Executive Briefing

- **Screen Name**: Executive Briefing
- **Purpose**: Synthesizes overnight intelligence, market indicators, and urgent AI agent notifications into a 3-tier actionable digest.
- **Layout**: 3-column desktop layout (Left: Macro Market Digest; Center: 3-Tier Priority Stream; Right: Quick Triage Controls). Single column on mobile.
- **Components**:
  - `BriefingHeader`: Date stamp, overnight summary indicator, and estimated read time badge.
  - `MacroMarketWidget`: Key market indicators, financial trends, and sentiment gauges.
  - `PriorityActionCards`: Categorized intelligence cards (*Critical*, *Action Required*, *Informational*).
  - `QuickTriageBar`: Action buttons for batch approval, delegation, or dismissal.
  - `EnterHQCTA`: Primary glassmorphic CTA button (**"Enter Command Center"**).
- **User Interactions**:
  - Filter briefing items by priority level tab.
  - Execute quick triage actions on individual cards.
  - Click **"Enter Command Center"**.
- **Navigation**:
  - Advances to **Enter Headquarters** screen.
- **Animations**:
  - Card slide-out animation upon quick-action triage.
  - Subtle pulse animation on *Critical* priority badges.
- **Responsive Behavior**:
  - 3-column layout collapses to tabbed single-column view on mobile screens.
- **Accessibility Notes**:
  - Strict heading hierarchy (`h1` -> `h2` -> `h3`). Hotkeys `1`, `2`, `3` to switch priority tabs.

---

## 5. Enter Headquarters

- **Screen Name**: Enter Headquarters
- **Purpose**: Delivers a high-status clearance validation and immersive visual transition into the main executive command workspace.
- **Layout**: Full-screen glassmorphic overlay with dynamic portal visual effect and security clearance state badge.
- **Components**:
  - `ClearancePortal`: Dynamic glassmorphic ring with radial glow.
  - `ClearanceBadge`: Security validation level indicator.
  - `TransitionProgress`: 3-second countdown ring and override control.
  - `LaunchHQButton`: Manual trigger button (**"Launch HQ Now"**).
- **User Interactions**:
  - Auto-advance countdown (3s default).
  - Click **"Launch HQ Now"** to bypass timer immediately.
- **Navigation**:
  - Advances to **Executive Dashboard** upon completion.
- **Animations**:
  - 60 FPS scale-and-blur zoom transition (expanding glass shield into main workspace).
  - Radial ring sweep animation during clearance validation.
- **Responsive Behavior**:
  - Visual portal scales dynamically across all screen aspect ratios without scrolling.
- **Accessibility Notes**:
  - Respects `prefers-reduced-motion` media query by replacing zoom animation with simple cross-fade transition.

---

## 6. Executive Dashboard

- **Screen Name**: Executive Dashboard
- **Purpose**: Serves as the primary workspace for real-time monitoring, AI agent fleet orchestration, and strategic execution.
- **Layout**: 3-zone layout: Top Executive Header & Command Bar (`Cmd+K`); Central Modular Widget Grid; Right Agent Fleet Sidebar.
- **Components**:
  - `ExecutiveHeader`: Active workspace label, status indicators, global command trigger, profile menu.
  - `AICommandBar`: Central omni-input bar for voice/text instructions to agent swarms.
  - `ModularWidgetGrid`: Dynamic containers for KPI metrics, trade streams, and activity logs.
  - `AgentFleetSidebar`: Real-time status cards for active AI agents and resource utilization.
- **User Interactions**:
  - Press `Cmd+K` / `Ctrl+K` to open AI Command Bar.
  - Drag and resize widgets within the layout grid.
  - Click agent card to open detailed performance drawer.
- **Navigation**:
  - Terminal destination for the startup sequence; internal sub-navigation via command bar and sidebar.
- **Animations**:
  - Smooth grid reordering animations (FLIP technique).
  - Live numerical ticker updates with status color flashes.
- **Responsive Behavior**:
  - 12-column desktop grid collapses to 6 columns on tablet and 1 column on mobile. Agent fleet sidebar converts to collapsible slide-over drawer.
- **Accessibility Notes**:
  - Comprehensive landmark regions (`header`, `main`, `aside`, `nav`). Keyboard accessible widget grid and focus management.
