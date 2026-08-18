# ICT308 Assessment 1 — Technical Report (Draft)

**Unit:** ICT308 – Project 2  
**Assessment:** Iteration 1 Development and Progress Demonstration  
**Project:** Smart Waste Management System — Canberra  
**Client:** ACT Government / Transport Canberra and City Services (TCCS)  
**Team:** Krishna Trivedi, Charanpal Kaur, Ayush Ale  
**GitHub:** https://github.com/charanpalkaur06-coder/smart-waste-management  
**Jira:** [INSERT YOUR JIRA PROJECT URL]  
**Word count:** ~2,000 — paste into MS Word, Calibri 12, attach CIHE cover sheet

---

## AI Use Acknowledgement

Generative AI tools (Cursor) were used for brainstorming, code assistance, documentation drafting, and debugging. All design decisions were reviewed by the team. Each member can explain the implementation during the demonstration. AI-generated content was edited for accuracy per CIHE academic integrity requirements.

---

## 1. Project Overview

### 1.1 Brief overview

Canberra deploys smart waste bins with fill-level sensors across suburbs including Civic, Belconnen, Woden, and Gungahlin. Without a centralised platform, operations staff cannot prioritise overflowing bins, collection routes remain static, maintenance is reactive, and residents lack a simple reporting channel. Our capstone project delivers a **Smart Waste Management System** for ACT Government / TCCS — a web application supporting operations staff, field drivers, maintenance technicians, government officers, and public residents.

The system integrates real-time bin monitoring concepts, route planning, maintenance ticketing, citizen reporting, and analytics dashboards. Design foundations were established in ICT307 (system design, UI prototype, database ERD, usability, ethics, and security analysis). ICT308 Iteration 1 converts that design into a working software prototype with professional engineering practices.

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

The team completed a **React 19 + TypeScript + Vite** single-page application with mock Canberra bin data, localStorage-based public report persistence, role-based navigation via `roleConfig.ts`, and maintenance ticket filtering. The MySQL schema and seed data live in `database/schema.sql` and `database/seed.sql`. GitHub hosts the repository with feature-oriented commits. Jira Sprint 1 tracks eighteen completed user stories.

**Remaining for Iteration 2:** REST API connection, JWT authentication, live IoT sensor feed, photo upload to cloud storage, deployment pipeline, and automated tests.

---

## 2. System Implementation

### 2.1 Architecture

The Iteration 1 architecture uses a **three-tier design** progressing from prototype to production:

```
┌──────────────────────┐     ┌──────────────────────┐     ┌──────────────────────┐
│  Presentation (SPA)  │────▶│  Application (API)   │────▶│  Data (MySQL)        │
│  React + TypeScript  │     │  Planned Iteration 2 │     │  schema.sql ready    │
└──────────────────────┘     └──────────────────────┘     └──────────────────────┘
           │
           └── localStorage (demo public reports)
```

**Presentation layer:** React components in `src/views/` with shared UI in `src/components/`. State managed through `AppContext.tsx`. Role permissions defined in `src/lib/roleConfig.ts`.

**Application layer (planned):** REST endpoints will serve bins, routes, tickets, and citizen reports. Schema aligns with frontend TypeScript interfaces.

**Data layer:** Eight normalised tables — users, bins, sensor_readings, routes, route_stops, maintenance_tickets, citizen_reports, bin_activity.

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

The UI follows TCCS branding: green primary palette (`--green-800`), professional dashboard layout, DM Sans typography via CSS variables. Status colours map to operational thresholds:

| Status | Colour | Fill threshold |
|--------|--------|----------------|
| Normal | Green | Below 70% |
| Warning (Nearly full) | Amber | 70–90% |
| Critical (Full/overflow) | Red | Above 90% |
| Offline | Grey | No sensor signal |

Screenshots for the report should capture: Login (all roles), Manager Dashboard, Bin Map, Routes, Driver View, Maintenance (filtered), Public Report form, Public Reports admin, Reports KPI view.

### 2.4 Algorithms and logic

**Role-based access control:** `ROLE_NAV` maps each role to permitted sidebar items. Managers see all modules; technicians see Maintenance and Bin Map; officers see Dashboard and Reports only; drivers use a dedicated full-screen shell.

**Maintenance filtering:** Client-side filter applies status or high-priority rules over the ticket array — mirrors future server-side query parameters.

**Public report workflow:** `addReport()` generates unique IDs, persists to localStorage, and triggers badge count updates in `AppContext` for manager notification.

**Route prioritisation:** Demo route orders stops by fill level (critical bins first) — foundation for Iteration 2 nearest-neighbour or OR-Tools optimisation.

### 2.5 Software components

| Component | Technology | Purpose |
|-----------|------------|---------|
| Frontend | React 19, TypeScript, Vite 8 | SPA prototype |
| Charts | Recharts | Collection and composition analytics |
| Icons | Lucide React | Accessible UI icons |
| State | React Context | Role, reports, session |
| Database | MySQL (schema designed) | Persistent storage (Iteration 2) |
| Version control | Git / GitHub | Collaboration |
| Project management | Jira | Sprint tracking |
| Design | Figma + figma-design-kit | UI specification |

---

## 3. Technical Challenges

### 3.1 Multi-role navigation in one codebase

**Problem:** Five user types need different screens and permissions without maintaining separate applications.

**Solution:** Centralised `roleConfig.ts` defines `ROLE_NAV` and `ROLE_LABELS`. `Sidebar.tsx` filters navigation items dynamically. `App.tsx` routes drivers to a dedicated shell while other roles use the dashboard layout.

**Lesson learned:** Configuration-driven RBAC scales better than hard-coded conditionals scattered across views.

### 3.2 Public reporting without a backend

**Problem:** Residents must submit reports before the Iteration 2 API exists.

**Solution:** `reportStore.ts` persists structured `PublicReport` objects to localStorage. TypeScript interfaces match the planned database schema, enabling a straightforward API migration.

**Lesson learned:** Define shared data contracts early so demo and production layers stay aligned.

### 3.3 Design handoff from ICT307 Figma

**Problem:** Figma files could not be imported directly into the development environment.

**Solution:** Built from ICT307 presentation specifications plus `figma-design-kit/` tokens. Used `?export=` URL modes for consistent screenshot capture during documentation.

**Lesson learned:** Export design tokens (colours, spacing, typography) alongside Figma files to reduce interpretation gaps.

### 3.4 Privacy and data minimisation

**Problem:** Citizen forms must balance actionable data with privacy obligations.

**Solution:** Public form requires issue type and location only. Name, email, bin ID, and photo are optional. No account creation required. Database schema stores optional fields as nullable columns.

**Lesson learned:** Privacy-by-design should appear in both UI copy and schema design from Iteration 1.

---

## 4. GitHub Repository

**URL:** https://github.com/charanpalkaur06-coder/smart-waste-management

### 4.1 Branching strategy

- `main` — stable, demo-ready code for assessors  
- Feature branches recommended for Sprint 2 (e.g. `feature/api-integration`)

### 4.2 Commit history

The team maintains descriptive commits representing incremental progress:

- Initial React + Vite scaffold and core views  
- Public reporting and admin inbox  
- Role expansion (technician, officer) and maintenance filters  
- Database schema and ICT308 documentation  

### 4.3 Team contributions

| Member | Primary areas |
|--------|---------------|
| Krishna Trivedi | Dashboard, routes, bin map, technical report |
| Charanpal Kaur | Public reporting, maintenance, database schema, Jira |
| Ayush Ale | Driver UI, styling, GitHub, presentation, Figma kit |

*(Verify against GitHub Insights → Contributors before submission.)*

---

## 5. Jira Project Management

**URL:** [INSERT YOUR JIRA URL]

Sprint 1 (Weeks 1–6) goal: deliver Iteration 1 working prototype.

**Completed epics:** Authentication, Dashboard, Bin Management, Route Optimisation, Driver UI, Maintenance, Citizen Reporting, Analytics, Backend schema, Documentation.

**Sprint summary:** 37 of 42 story points completed. Remaining: API integration and presentation finalisation.

Include screenshots in the report: product backlog, active sprint board, burndown chart (if enabled).

---

## 6. Project Demonstration

### 6.1 How to run

```bash
cd smart-waste-management
npm install
npm run dev
```

Open http://localhost:5173 — sign out to access the role picker.

### 6.2 Demo script (10 minutes, 3 members)

| Time | Speaker | Content |
|------|---------|---------|
| 0–2 min | Krishna | Problem statement, architecture, manager dashboard |
| 2–5 min | Charanpal | Routes, bins, public report → manager inbox |
| 5–8 min | Ayush | Driver view, maintenance filters, officer reports |
| 8–10 min | All | GitHub, Jira, Sprint 2 plan, Q&A prep |

### 6.3 Completed milestones

- All core UI screens functional across five user perspectives  
- Database schema and seed data prepared  
- GitHub repository with commit history  
- Jira Sprint 1 backlog largely complete  

### 6.4 Remaining work

- REST API connecting React frontend to MySQL  
- JWT authentication and role-based API guards  
- Live map integration (Leaflet + ACT coordinates)  
- Photo upload to object storage  
- CI/CD deployment and automated testing  

---

## References

ACT Government. (2026). *Transport Canberra and City Services*. https://www.transport.act.gov.au

Anysphere. (2026). *Cursor IDE*. AI-assisted development with team review.

React Team. (2026). *React documentation*. https://react.dev

---

**Before submission:** insert Jira URL, add screenshots, paste into Word (Calibri 12), attach CIHE cover sheet, verify word count.
