# ICT308 Assessment 1 — Technical Report

**Unit:** ICT308 – Project 2  
**Assessment:** Iteration 1 Development and Progress Demonstration  
**Project:** Smart Waste Management System — Canberra  
**Client:** ACT Government / Transport Canberra and City Services (TCCS)  
**Team:** Krishna Trivedi, Charanpal Kaur, Ayush Ale  
**GitHub:** https://github.com/charanpalkaur06-coder/smart-waste-management  
**Jira:** [INSERT YOUR JIRA PROJECT URL]  
**Word count:** ~2,000 — paste into MS Word, Calibri 12, attach CIHE cover sheet

---

## 1. Project Overview

### 1.1 Brief overview

Canberra deploys smart waste bins with fill-level sensors across suburbs including Civic, Belconnen, Woden, and Gungahlin. Without a centralised platform, operations staff cannot prioritise overflowing bins, collection routes remain static, maintenance is reactive, and residents lack a simple reporting channel. Our capstone project delivers a **Smart Waste Management System** for ACT Government / TCCS — a web application supporting operations staff, field drivers, maintenance technicians, government officers, and public residents.

The system integrates real-time bin monitoring concepts, route planning, maintenance ticketing, citizen reporting, and analytics dashboards. Design foundations were established in ICT307 (system design, UI prototype, database ERD, usability, ethics, and security analysis). ICT308 Iteration 1 converts that design into a working software prototype with professional engineering practices: modular React architecture, configuration-driven role-based access control, a normalised MySQL schema, GitHub version control, and Jira sprint tracking.

### 1.2 Objectives for Iteration 1

1. Deliver a working web prototype covering all core user workflows  
2. Implement five user perspectives: Operations Manager, Collection Driver, Maintenance Technician, Government Officer, and Resident/Business (public report)  
3. Apply colour-coded bin status rules (green normal, amber warning, red critical, grey offline)  
4. Build screens: login, dashboard, bin map, routes, driver collection, maintenance, public report, admin inbox, analytics  
5. Design a normalised MySQL database schema for Iteration 2 backend integration  
6. Establish GitHub version control with collaborative commit history  
7. Track sprint tasks in Jira with completed Iteration 1 backlog items  
8. Prepare technical documentation and a class demonstration  

### 1.3 Summary of completed work

The team completed a **React 19 + TypeScript + Vite** single-page application with mock Canberra bin data, localStorage-based public report persistence, role-based navigation via `roleConfig.ts`, and maintenance ticket filtering. All five roles are functional: managers access the full operations suite; drivers use a dedicated field UI; technicians filter maintenance tickets and view the bin map; officers see dashboard overview and KPI reports; residents submit public reports without login. The MySQL schema and seed data live in `database/schema.sql` and `database/seed.sql`. GitHub hosts the repository with feature-oriented commits across team members. Jira Sprint 1 tracks fourteen completed user stories totalling 39 story points.

**Remaining for Iteration 2:** REST API connection, JWT authentication, live IoT sensor feed, photo upload to cloud storage, deployment pipeline, and automated tests.

---

## 2. System Implementation

### 2.1 Architecture and technical justification

The Iteration 1 architecture uses a **three-tier design** progressing from prototype to production:

```
┌──────────────────────┐     ┌──────────────────────┐     ┌──────────────────────┐
│  Presentation (SPA)  │────▶│  Application (API)   │────▶│  Data (MySQL)        │
│  React + TypeScript  │     │  Planned Iteration 2 │     │  schema.sql ready    │
└──────────────────────┘     └──────────────────────┘     └──────────────────────┘
           │
           └── localStorage (demo public reports)
```

**Why React + TypeScript + Vite:** React provides component reuse aligned with our ICT307 Figma component library. TypeScript enforces shared interfaces between frontend views and the planned API layer, reducing integration defects in Sprint 2. Vite delivers fast hot-module replacement during development and a verified production build via `npm run build`.

**Why configuration-driven RBAC:** Five user types share one codebase. Centralising permissions in `roleConfig.ts` avoids scattered conditionals and mirrors how production systems define role policies — a deliberate software engineering choice for maintainability.

**Why schema-first database design:** Iteration 1 has no live backend, but designing `database/schema.sql` now ensures frontend mock data structures align with persistent storage. This reduces rework when the REST API is introduced.

**Presentation layer:** React components in `src/views/` with shared UI in `src/components/`. State managed through `AppContext.tsx`. Role permissions defined in `src/lib/roleConfig.ts`.

**Application layer (planned):** REST endpoints will serve bins, routes, tickets, and citizen reports. Schema aligns with frontend TypeScript interfaces in `src/types/index.ts`.

**Data layer:** Eight normalised tables — users, bins, sensor_readings, routes, route_stops, maintenance_tickets, citizen_reports, bin_activity — with foreign keys and indexes on status and suburb columns.

### 2.2 Implemented modules

| Module | Key files | Description |
|--------|-----------|-------------|
| Authentication | `LoginView.tsx` | Five entry points: Manager, Driver, Technician, Officer, Public report |
| Dashboard | `DashboardView.tsx`, `StatCard`, `Charts`, `MapPanel` | KPI cards, alerts, Recharts graphs, map panel |
| Bin management | `BinTable.tsx`, `MapView` | Filterable bin list with status colour coding |
| Route planning | `RoutesView.tsx` | Ordered collection stops for Civic/Weston corridor |
| Driver field UI | `DriverView.tsx` | Large Mark Collected button, route stop progression |
| Maintenance | `MaintenanceView.tsx` | Ticket list with filters: All, Open, In progress, Resolved, High priority |
| Public reporting | `PublicReportView.tsx`, `reportStore.ts` | Minimal form, geolocation, reference ID (PR-XXXX) |
| Admin inbox | `PublicReportsAdminView.tsx` | Manager assign/resolve workflow with badge notifications |
| Analytics | `ReportsView.tsx` | KPI previews for government officers |
| Database | `database/schema.sql`, `seed.sql` | MySQL schema matching mock data suburbs |

### 2.3 User interface and bin colour coding

The UI follows TCCS branding: green primary palette (`--green-800`), professional dashboard layout, DM Sans typography via CSS variables. Status colours map to operational thresholds defined in ICT307 requirements analysis:

| Status | Colour | Fill threshold |
|--------|--------|----------------|
| Normal | Green | Below 70% |
| Warning (Nearly full) | Amber | 70–90% |
| Critical (Full/overflow) | Red | Above 90% |
| Offline | Grey | No sensor signal |

**Screenshot placeholders — insert captured images before submission:**

| Figure | Screen | Capture URL / action |
|--------|--------|----------------------|
| Figure 1 | Login — all five role options | `http://localhost:5173/?export=login` |
| Figure 2 | Manager dashboard with KPIs and charts | `/?export=dashboard` |
| Figure 3 | Bin map with colour-coded pins | `/?export=map` |
| Figure 4 | Route planning ordered stops | `/?export=routes` |
| Figure 5 | Driver field collection UI | `/?export=driver` |
| Figure 6 | Maintenance filters (High priority) | `/?export=maintenance` |
| Figure 7 | Public report form | `/?export=public` |
| Figure 8 | Manager public reports inbox | `/?export=public-reports` |
| Figure 9 | Government officer reports view | `/?export=reports` (sign in as Officer) |

See `docs/FIGMA-GUIDE.md` for full capture instructions.

### 2.4 Algorithms and logic

**Role-based access control (RBAC):** `ROLE_NAV` in `roleConfig.ts` maps each role to permitted sidebar navigation IDs. On login, `defaultNavForRole()` routes users to their primary screen. Managers receive all seven modules; technicians receive Maintenance and Bin Map; officers receive Dashboard and Reports; drivers bypass the sidebar entirely for a touch-friendly field shell. This algorithm executes in O(1) lookup time per navigation render.

**Maintenance filtering:** Client-side filter applies status (`open`, `in-progress`, `resolved`) or high-priority rules over the ticket array. Selecting "High priority" filters where `priority === 'high'` regardless of status. This mirrors future server-side query parameters (`?status=open&priority=high`).

**Public report workflow:** `addReport()` in `reportStore.ts` generates unique reference IDs (PR-XXXX), persists structured `PublicReport` objects to localStorage, and triggers badge count updates in `AppContext` for manager notification. The assign/resolve workflow in `PublicReportsAdminView.tsx` mutates report status in the same store.

**Route prioritisation:** Demo route in `RoutesView.tsx` orders stops by fill level — critical bins first, then warning, then normal. This greedy urgency sort is the foundation for Iteration 2 nearest-neighbour or OR-Tools distance optimisation.

**Bin status derivation:** Fill percentage maps to status enum using threshold constants shared between `mockData.ts` display logic and `schema.sql` ENUM values, ensuring UI and database remain consistent.

### 2.5 Software components and technology stack

| Component | Technology | Purpose | Justification |
|-----------|------------|---------|---------------|
| Frontend framework | React 19, TypeScript, Vite 8 | SPA prototype | Industry-standard; matches ICT307 component model |
| Charts | Recharts | Collection and composition analytics | Accessible SVG charts; integrates with React state |
| Icons | Lucide React | UI iconography | Consistent stroke icons; tree-shakeable |
| State management | React Context (`AppContext`) | Role, reports, session | Sufficient for Iteration 1; Redux unnecessary at this scale |
| Public report storage | localStorage via `reportStore.ts` | Demo persistence | Bridges Iteration 1 until REST API; typed interfaces match DB |
| Database | MySQL / MariaDB | Persistent storage (Iteration 2) | Required by unit; normalised schema with FK constraints |
| Version control | Git / GitHub | Collaboration | Incremental commits; contributor tracking |
| Project management | Jira (Scrum) | Sprint tracking | Task allocation, burndown, assessor visibility |
| Design reference | Figma + figma-design-kit | UI specification | ICT307 handoff via design tokens |

---

## 3. Technical Challenges

### 3.1 Multi-role navigation in one codebase

**Problem:** Five user types need different screens and permissions without maintaining separate applications.

**Solution:** Centralised `roleConfig.ts` defines `ROLE_NAV`, `ROLE_LABELS`, and `defaultNavForRole()`. `Sidebar.tsx` filters navigation items dynamically from the active role. `App.tsx` routes drivers to a dedicated shell while other roles use the dashboard layout with shared Header and Sidebar.

**Lesson learned:** Configuration-driven RBAC scales better than hard-coded conditionals scattered across views. Adding a sixth role in Sprint 2 requires only config changes plus any new views.

### 3.2 Public reporting without a backend

**Problem:** Residents must submit reports before the Iteration 2 API exists, and managers must see incoming reports in the admin inbox.

**Solution:** `reportStore.ts` persists structured `PublicReport` objects to localStorage. TypeScript interfaces in `src/types/index.ts` match the `citizen_reports` table in `database/schema.sql`, enabling a straightforward API migration — replace store calls with fetch calls without changing view components.

**Lesson learned:** Define shared data contracts early so demo and production layers stay aligned.

### 3.3 Design handoff from ICT307 Figma

**Problem:** Figma files could not be imported directly into the development environment; team members use different operating systems.

**Solution:** Built from ICT307 presentation specifications plus `figma-design-kit/` tokens (colours, spacing, typography). Used `?export=` URL modes in `src/lib/routing.ts` for consistent screenshot capture during documentation.

**Lesson learned:** Export design tokens alongside Figma files to reduce interpretation gaps between design and implementation.

### 3.4 Privacy and data minimisation

**Problem:** Citizen forms must balance actionable data with privacy obligations under ACT Government expectations.

**Solution:** Public form requires issue type and location only. Name, email, bin ID, and photo are optional. No account creation required. Database schema stores optional fields as nullable columns. Manager inbox shows only operational fields needed for routing.

**Lesson learned:** Privacy-by-design should appear in both UI copy and schema design from Iteration 1, not deferred to a compliance pass later.

---

## 4. GitHub Repository

**URL:** https://github.com/charanpalkaur06-coder/smart-waste-management

This section addresses the **GitHub Version Control** rubric criterion: consistent version control, collaboration, and professional practices.

### 4.1 Branching strategy

- `main` — stable, demo-ready code for assessors  
- Feature branches recommended for Sprint 2 (e.g. `feature/api-integration`, `feature/jwt-auth`)  
- Build must pass (`npm run build`) before merging to `main` — documented in `CONTRIBUTING.md`

### 4.2 Commit history

The team maintains descriptive commits representing incremental progress:

| Commit theme | Example message | Demonstrates |
|--------------|-----------------|--------------|
| Initial scaffold | `first commit` | Project bootstrap |
| Role expansion | `feat: add technician and officer roles with RBAC navigation` | Feature delivery |
| Database | `feat: add MySQL schema and seed data for Iteration 2` | Forward planning |
| Documentation | `docs: add ICT308 report, presentation, Jira guides` | Assessment readiness |
| Rubric alignment | `docs: align ICT308 rubric evidence and assessment documentation` | Professional submission |

See `docs/RUBRIC-GITHUB-EVIDENCE.md` for assessor screenshot guide.

### 4.3 Team contributions

| Member | Primary areas | GitHub evidence |
|--------|---------------|-----------------|
| Krishna Trivedi | Dashboard, routes, bin map, technical report | Dashboard/routes commits; report authorship |
| Charanpal Kaur | Public reporting, maintenance, database schema, Jira | Schema, maintenance, reporting modules |
| Ayush Ale | Driver UI, styling, GitHub, presentation, Figma kit | Driver view, role config, repo maintenance |

Each member configures their GitHub-verified email per `docs/TEAM-CONTRIBUTIONS.md`. Verify **Insights → Contributors** before submission and screenshot for this section.

**Screenshot placeholder — Figure 10:** GitHub commit history on `main`  
**Screenshot placeholder — Figure 11:** GitHub Contributors graph showing three team members

---

## 5. Jira Project Management

**URL:** [INSERT YOUR JIRA URL]

This section addresses the **Jira Project Management** rubric criterion: well-planned sprints, task allocation, and continuous progress tracking.

### 5.1 Sprint structure

**Sprint 1 (Weeks 1–6)** goal: deliver Iteration 1 working prototype.

| Epic | Stories | Assignee focus |
|------|---------|----------------|
| Authentication & roles | Login, five role options | Charanpal, Krishna |
| Operations dashboard | KPIs, map, alerts | Krishna |
| Bin management | Table, map, status colours | Krishna |
| Route optimisation | Ordered stops | Krishna |
| Driver field UI | Mark Collected workflow | Ayush |
| Maintenance | Status/priority filters | Charanpal |
| Citizen reporting | Public form, manager inbox | Charanpal |
| Analytics & reports | Officer KPI view | Ayush |
| Backend & database | schema.sql, seed.sql | Charanpal |
| Documentation | Report, presentation, GitHub | All |

### 5.2 Sprint summary

- **Sprint 1 completed:** 39 story points across 14 stories marked Done  
- **In progress / Sprint 2:** REST API integration (8 pts), JWT authentication (5 pts), Leaflet map (5 pts)  
- Every story has a named assignee and story points reflecting relative effort  

Setup guides: `docs/JIRA-SETUP-GUIDE.md`, `docs/jira-backlog.md`, `docs/jira-import.csv`, `docs/RUBRIC-JIRA-EVIDENCE.md`.

**Screenshot placeholders — insert before submission:**

| Figure | Jira view |
|--------|-----------|
| Figure 12 | Product backlog — Sprint 1 stories with assignees |
| Figure 13 | Active sprint board — most items in Done |
| Figure 14 | Burndown chart or sprint report |

---

## 6. Project Demonstration

This section addresses the **Project Demonstration** rubric criterion: professional demo explaining the implemented solution, technical decisions, and future plans.

### 6.1 How to run

```bash
cd smart-waste-management
npm install
npm run dev
```

Open http://localhost:5173 — sign out via header logout to access the role picker. Production build verification: `npm run build` (TypeScript compile + Vite bundle).

### 6.2 Demo script (10 minutes, 3 members)

Full timing and Q&A prep: `docs/RUBRIC-DEMO-SCRIPT.md`. Slide outline: `docs/ICT308-Presentation-Outline.md`.

| Time | Speaker | Content | Rubric alignment |
|------|---------|---------|------------------|
| 0–2 min | Krishna | Problem statement, architecture justification, manager dashboard | Implementation + documentation |
| 2–5 min | Charanpal | Routes, bins, public report → manager inbox, privacy decisions | Implementation progress |
| 5–8 min | Ayush | Driver view, maintenance filters, officer reports, RBAC explanation | Software engineering principles |
| 8–10 min | All | GitHub commits, Jira Sprint 1, remaining work, future plans, Q&A | GitHub + Jira + demo criteria |

### 6.3 Completed milestones (Iteration 1)

- All core UI screens functional across five user perspectives  
- Configuration-driven RBAC with distinct navigation per role  
- Maintenance ticket filtering (Open / In progress / Resolved / High priority)  
- Public report → manager inbox end-to-end workflow  
- MySQL schema (eight tables) and seed data prepared  
- GitHub repository with incremental commit history and CONTRIBUTING guide  
- Jira Sprint 1 backlog with assigned stories and story points  
- Production build passes (`npm run build`)  

### 6.4 Remaining work

The following items are scoped for Iteration 2 and documented in Jira Sprint 2:

- **REST API** — replace `mockData.ts` and localStorage with Express/Fastify endpoints  
- **JWT authentication** — secure role-based API guards replacing demo role picker  
- **Live IoT integration** — ingest sensor readings into `sensor_readings` table  
- **Photo upload** — cloud object storage for citizen report attachments  
- **Automated testing** — unit tests for RBAC logic; integration tests for API  

### 6.5 Future development plans

Beyond Iteration 2, the team plans:

- **Leaflet map** with ACT suburb coordinates and live bin pins  
- **Route optimisation** using distance-based algorithms (nearest-neighbour, OR-Tools)  
- **CI/CD pipeline** — GitHub Actions build, test, deploy to staging  
- **Progressive Web App** enhancements for driver field use on tablets  
- **Accessibility audit** — WCAG 2.1 AA compliance for public reporting form  
- **Analytics dashboard expansion** — exportable PDF reports for government officers  

These items appear in Jira Sprint 2 backlog (`docs/jira-backlog.md`) and will be prioritised in the Iteration 2 sprint planning session.

---

## References

ACT Government. (2026). *Transport Canberra and City Services*. https://www.transport.act.gov.au

Meta Open Source. (2026). *React documentation*. https://react.dev

Oracle Corporation. (2026). *MySQL 8.0 reference manual*. https://dev.mysql.com/doc/

Atlassian. (2026). *Jira Software documentation*. https://support.atlassian.com/jira-software-cloud/

---

**Before submission:** insert Jira URL, add Figures 1–14 screenshots, paste into Word (Calibri 12), attach CIHE cover sheet, verify ~2,000 word count in MS Word.
