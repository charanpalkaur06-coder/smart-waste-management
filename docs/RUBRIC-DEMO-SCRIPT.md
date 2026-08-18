# Rubric Evidence — Project Demonstration (Criterion 5)

**Target grade band:** Excellent (75–100%)  
**Criterion:** Professional demo explaining implemented solution, technical decisions, future plans  
**Duration:** 10 minutes presentation + 5 minutes Q&A  
**Team:** Krishna Trivedi, Charanpal Kaur, Ayush Ale

---

## Pre-demo setup (5 minutes before class)

```powershell
cd "C:\Users\keini\OneDrive\Documents\GitHub\smart-waste-management"
npm install
npm run dev
```

- Browser: http://localhost:5173
- Terminal visible (shows `npm run dev` running)
- GitHub repo tab open: https://github.com/charanpalkaur06-coder/smart-waste-management
- Jira board tab open (after setup)
- PowerPoint from `docs/ICT308-Presentation-Outline.md`

---

## 10-minute demo script (rubric-aligned)

### 0:00–0:30 — Opening (Krishna)

> "We are Team Smart Waste Canberra for ICT308 Iteration 1. Our client is ACT Government TCCS. We deliver a web platform for operations staff, drivers, technicians, government officers, and public residents to monitor bins, plan routes, manage maintenance, and report issues."

**Rubric link:** States problem and implemented solution clearly.

---

### 0:30–2:30 — Architecture & Manager (Krishna)

**Slides 2–4, then LIVE**

1. Show architecture: React SPA → planned REST API → MySQL (`database/schema.sql`)
2. **Justify React + TypeScript + Vite:** fast Iteration 1 delivery, type safety, component reuse from ICT307 design
3. Sign out → show login with **five entry points**
4. Sign in as **Operations Manager**
5. Dashboard: KPI cards, map panel, alerts, Recharts charts
6. Explain bin colour coding: green &lt;70%, amber 70–90%, red &gt;90%, grey offline

**Technical decision talking point:**

> "We used configuration-driven RBAC in `roleConfig.ts` so five roles share one codebase without duplicating views."

**Rubric link:** Demonstrates substantial implementation progress and software engineering principles.

---

### 2:30–5:00 — Routes, Bins, Public reporting (Charanpal)

**LIVE**

1. **Routes** — ordered stops, priority by fill level
2. **Bin map / table** — filter by status
3. Sign out → **Report a full bin** (no login)
4. Submit public report → note reference ID (PR-XXXX)
5. Sign in as Manager → **Public Reports** → Assign / Resolve

**Technical decision talking point:**

> "Public reports use localStorage as a bridge until Sprint 2 API — TypeScript interfaces match `citizen_reports` in our MySQL schema so migration is straightforward."

**Privacy talking point:**

> "Only issue type and location are required; name and email are optional — privacy-by-design from ICT307."

**Rubric link:** Citizen reporting workflow end-to-end; data minimisation explained.

---

### 5:00–7:30 — Driver, Technician, Officer (Ayush)

**LIVE**

1. Sign in as **Collection Driver** — large Mark Collected button, route progression
2. Sign out → **Maintenance Technician** — filter Open / In progress / Resolved / High priority
3. Show bin map access for technician
4. Sign out → **Government Officer** — Dashboard + Reports only (limited nav)

**Technical decision talking point:**

> "Driver gets a dedicated full-screen shell for field use; officer role is read-only analytics — enforced by `ROLE_NAV` in one config file."

**Rubric link:** All five roles demonstrated with distinct UX rationale.

---

### 7:30–9:00 — GitHub & Jira (Ayush)

**Slides 11–12, browser tabs**

1. GitHub: commit history, `database/`, `docs/`, README ICT308 section
2. Mention `CONTRIBUTING.md` and team contributors graph
3. Jira: Sprint 1 board — most stories Done, assignees named, Sprint 2 API planned

**Rubric link:** Version control and project management evidence visible to assessor.

---

### 9:00–10:00 — Remaining work & future plans (All)

**Slide 14**

**Remaining work (Iteration 1 → 2 gap):**

- REST API connecting React to MySQL
- JWT authentication replacing demo role picker
- Live IoT sensor feed (replace mock data)
- Photo upload to cloud storage
- CI/CD pipeline and automated tests

**Future development plans (Sprint 2+):**

- Leaflet map with ACT coordinates
- Route optimisation (nearest-neighbour / OR-Tools)
- Mobile-responsive driver PWA
- Staging deployment on cloud host
- Integration testing and accessibility audit

> "Thank you — we welcome questions on architecture, Jira planning, or any screen."

**Rubric link:** Explicit remaining work and future plans — required for Excellent demo criterion.

---

## Q&A preparation

| Likely question | Strong answer |
|-----------------|---------------|
| Why web app not native mobile? | Operations dashboard is desktop-first; web deploys faster; responsive driver UI works on tablets |
| Is sensor data real? | Mock Canberra data for Iteration 1; schema and seed SQL ready for live feed in Sprint 2 |
| How does route optimisation work? | Demo orders by fill urgency; Sprint 2 adds distance-based algorithm |
| Security for citizen data? | Minimal fields, no account required; JWT + API role guards in Sprint 2 |
| Why localStorage for reports? | Backend not in Iteration 1 scope; interfaces align with DB for clean swap |
| How did you divide work? | Jira assignees: Krishna dashboard/routes, Charanpal reporting/DB, Ayush driver/GitHub |
| Build verification? | `npm run build` passes — TypeScript compile + Vite production bundle |
| Testing approach? | Manual role walkthrough each sprint; automated tests planned Sprint 2 |

---

## Rubric language to use verbatim (assessor keywords)

Use these phrases during demo — they mirror the marking rubric:

| Criterion | Phrase to say |
|-----------|---------------|
| Implementation | "substantial progress", "software engineering principles", "modular architecture" |
| Documentation | "technical justification", "architecture decision", "documented in our ICT308 report" |
| GitHub | "consistent version control", "meaningful commits", "collaborative development" |
| Jira | "well-planned sprint", "task allocation", "continuous progress tracking" |
| Demo | "technical decisions", "future development plans", "remaining work for Iteration 2" |

---

## Demo failure backup plan

| Problem | Backup |
|---------|--------|
| `npm run dev` fails | Run `npm run build` then `npm run preview`; or use screenshot URLs from `docs/FIGMA-GUIDE.md` |
| No internet for Jira | Offline screenshots on Slide 12 |
| Public report lost | Submit new report live; localStorage persists in same browser |

---

## What the team must still do manually

1. Build PowerPoint from `docs/ICT308-Presentation-Outline.md`
2. Rehearse timing — each member ~3 minutes
3. Set up Jira and take board screenshot for Slide 12
4. Present live in Week 6 class
5. Answer Q&A using table above
