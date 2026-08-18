# Rubric Evidence — Jira Project Management (Criterion 4)

**Target grade band:** Excellent (75–100%)  
**Criterion:** Well-planned sprints, task allocation, continuous progress tracking  
**Team:** Krishna Trivedi, Charanpal Kaur, Ayush Ale

This document specifies exactly what to set up in Jira and which screenshots to take for Excellent marks.

---

## Jira project setup (one-time, ~15 minutes)

Follow `docs/JIRA-SETUP-GUIDE.md` or use fast path `docs/JIRA-COPY-PASTE.md`.

| Setting | Value |
|---------|-------|
| Project name | Smart Waste Canberra |
| Project key | SWMS-CBR (or SWMS) |
| Template | Scrum |
| Site | `yourteam.atlassian.net` (free tier) |

---

## Sprint structure for assessors

### Sprint 1 — Iteration 1 Prototype

**Dates:** Weeks 1–6 of semester  
**Goal (paste into sprint description):**

> Deliver Iteration 1 working React prototype: login, dashboard, bins, routes, driver, maintenance, public reporting, database schema, GitHub evidence.

**Target:** 37+ story points **Done** · 5 points In Progress or moved to Sprint 2

### Sprint 2 — Backend & Integration (planned)

**Goal:**

> Connect React frontend to REST API and MySQL; implement JWT authentication; deploy staging environment.

Carry these stories as **To Do** to show realistic forward planning:

| Story | Points | Assignee |
|-------|--------|----------|
| REST API + connect React to MySQL | 8 | Ayush |
| JWT authentication | 5 | Charanpal |
| Leaflet map ACT coordinates | 5 | Krishna |
| Photo upload cloud storage | 3 | Charanpal |
| CI/CD and automated tests | 5 | Ayush |

---

## Epics (create before stories)

| Epic | Owner |
|------|-------|
| Authentication & roles | Charanpal |
| Operations dashboard | Krishna |
| Bin management | Krishna |
| Route optimisation | Krishna |
| Driver field UI | Ayush |
| Maintenance | Charanpal |
| Citizen reporting | Charanpal |
| Analytics & reports | Ayush |
| Backend & database | Charanpal |
| Documentation & submission | All |

---

## Sprint 1 stories — assignee and points

Import from `docs/jira-import.csv` or copy from `docs/JIRA-COPY-PASTE.md`.

| Story summary | Epic | Assignee | Points | Status |
|---------------|------|----------|--------|--------|
| Role-based login screen | Authentication | Charanpal | 2 | Done |
| Five role options on login | Authentication | Krishna | 3 | Done |
| Manager dashboard with KPIs | Dashboard | Krishna | 5 | Done |
| Bin map and table | Bin management | Krishna | 3 | Done |
| Route planning view | Route optimisation | Krishna | 3 | Done |
| Driver collection UI | Driver field UI | Ayush | 3 | Done |
| Maintenance ticket filters | Maintenance | Charanpal | 3 | Done |
| Public report form | Citizen reporting | Charanpal | 3 | Done |
| Manager public reports inbox | Citizen reporting | Charanpal | 2 | Done |
| Government officer reports view | Analytics | Ayush | 2 | Done |
| MySQL database schema | Backend | Charanpal | 3 | Done |
| ICT308 technical report | Documentation | Krishna | 3 | Done |
| Presentation slides and demo | Documentation | All | 2 | Done |
| GitHub meaningful commits | Version control | Ayush | 2 | Done |

**Total Sprint 1:** 39 points Done (adjust if your board differs by 1–2 points)

---

## Screenshots to capture (mandatory for Word report Section 5)

| # | Jira view | How to navigate | Caption |
|---|-----------|-----------------|---------|
| 1 | **Product backlog** | Backlog → Sprint 1 expanded | Figure: Sprint 1 backlog with epics and assigned stories |
| 2 | **Active sprint board** | Board → Sprint 1 | Figure: Kanban/Scrum board showing most items in Done |
| 3 | **Burndown chart** | Reports → Burndown chart (Sprint 1) | Figure: Sprint burndown demonstrating continuous progress |
| 4 | **Story detail** | Open one story (e.g. maintenance filters) | Figure: User story with assignee, points, acceptance criteria |
| 5 | **Sprint 2 backlog** | Backlog → Sprint 2 | Figure: Forward-planned API and auth work |

If burndown is unavailable on free tier, screenshot the **Release burndown** or **Sprint report** instead.

---

## What assessors listen for in demo

- Sprint 1 goal matches Iteration 1 objectives in the technical report
- Every story has a **named assignee** (not unassigned)
- Story points reflect relative effort (dashboard = 5, inbox = 2)
- Team explains why API/JWT moved to Sprint 2 (scope management)
- Jira URLs pasted in Word report Section 5

---

## Rubric-aligned talking points (30 seconds each)

**Krishna:** "Sprint 1 focused on dashboard, bins, and routes — my stories SWMS-21 through SWMS-41 are Done."

**Charanpal:** "I owned citizen reporting, maintenance, and the database schema — those epics are complete in Sprint 1."

**Ayush:** "Driver UI and officer reports are Done; Sprint 2 carries API integration and CI/CD under my name."

---

## What the team must still do manually

1. **Create Jira account** at https://www.atlassian.com/software/jira/free
2. **Create project** and Sprint 1 using guides in `docs/`
3. **Import CSV** or copy-paste stories from `docs/jira-import.csv`
4. **Mark stories Done** for completed Iteration 1 work
5. **Invite team** and lecturer (Viewer) if required
6. **Copy Jira URL** into `docs/ICT308-Assessment1-Report.md` Section 5 and Word report
7. **Take five screenshots** listed above and insert into Word report
8. Add Jira URL to PowerPoint Slide 12
