# ADR-0003: Executive Intelligence Engine Uses Local Telemetry First

**Status:** Accepted

**Date:** 2026-07-22

---

## Context

Sprint 3 introduces the Executive Intelligence Engine, which powers the Executive Briefing and Dashboard.

The system requires reliable, fast, and privacy-preserving data sources.

External APIs such as Trading APIs, SaaS platforms, cloud databases, and authentication providers would increase complexity, require credentials, introduce network dependencies, and make development harder during the early stages.

---

## Decision

For Sprint 3, the Executive Intelligence Engine will consume only local telemetry.

Initial data sources include:

- Current Date & Time
- System Uptime
- Machine Information
- Ollama Service Status
- Installed AI Models
- Git Repository Status
- Current Git Branch
- GitHub Repository Information (Read-only)
- Recent Git Commits
- Project Progress
- Local Application Health

No external APIs will be integrated during this sprint.

---

## Rationale

Using local telemetry provides several advantages:

- Fast startup
- Offline capability
- High reliability
- Zero API costs
- Strong privacy
- Easy testing
- Stable architecture for future integrations

This creates a dependable foundation before introducing cloud services.

---

## Consequences

### Positive

- Faster development
- Simpler debugging
- Better privacy
- Offline operation
- Lower maintenance

### Negative

- Dashboard information is limited to local machine data.
- Business and trading information will be added in later sprints.

---

## Future Expansion

Future ADRs may introduce:

- Trading APIs
- Business CRM
- Email Integration
- Calendar Integration
- AI Cloud Services
- Multi-device synchronization

These integrations will build on the Executive Intelligence Engine rather than replacing it.