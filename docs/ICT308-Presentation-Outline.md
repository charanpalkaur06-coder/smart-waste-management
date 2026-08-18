# ICT308 Assessment 1 — Presentation Outline

**GitHub:** https://github.com/charanpalkaur06-coder/smart-waste-management  
**Demo:** `npm run dev` → http://localhost:5173  
**Duration:** 10 min + 5 min Q&A · **Team:** Krishna (~3 min), Charanpal (~3 min), Ayush (~3 min)  
**Full demo script:** `docs/RUBRIC-DEMO-SCRIPT.md`  
**Rubric checklist:** `docs/MARKING-RUBRIC-CHECKLIST.md`

---

## Slide 1 — Title
**Smart Waste Management System — Canberra**  
ICT308 Project 2 · Iteration 1  
Krishna Trivedi · Charanpal Kaur · Ayush Ale  
Client: ACT Government / TCCS

**Speaker notes:** Introduce team, client, and one-sentence solution summary. Mention this is Iteration 1 — working prototype with professional engineering practices.

---

## Slide 2 — The Problem (Krishna)
- Smart bins across Canberra lack centralised monitoring
- Overflow incidents, inefficient routes, reactive maintenance
- No easy channel for residents to report issues
- **Our solution:** web platform for staff + public reporting

**Rubric link:** Sets context for **Implementation Progress** and **Demonstration** criteria.

---

## Slide 3 — Iteration 1 Goals (Krishna)
- Working React prototype (all core screens)
- Five user roles implemented with RBAC
- MySQL schema designed (`database/schema.sql`)
- GitHub + Jira evidence for assessors

---

## Slide 4 — Architecture & Technical Justification (Krishna)
React SPA → (planned REST API) → MySQL  
**Why React + TypeScript + Vite:** component reuse, type safety, fast build  
**Why config-driven RBAC:** one codebase, five roles, maintainable  
Demo: mockData + localStorage bridge until Sprint 2 API  
Show folder structure: `src/views/`, `database/`, `docs/`

**Rubric link:** **Technical Documentation** — clear technical justification.

---

## Slide 5 — LIVE DEMO: Login (Krishna)
Sign out → show all five login options  
Click **Operations Manager**

**Say:** "Configuration-driven RBAC in roleConfig.ts — adding roles doesn't require rewriting views."

---

## Slide 6 — LIVE DEMO: Dashboard (Krishna)
KPI stats · map panel · alerts · Recharts charts  
Point out green / amber / red / grey status coding

**Say:** "Substantial implementation progress — dashboard integrates stats, map, alerts, and analytics in one operations view."

---

## Slide 7 — LIVE DEMO: Routes & Bins (Charanpal)
Route planning view → bin map/table  
Explain priority ordering by fill level (greedy urgency sort)

**Say:** "Route stops ordered by fill urgency — foundation for Sprint 2 distance optimisation."

---

## Slide 8 — LIVE DEMO: Public Reporting (Charanpal)
Sign out → **Report a full bin** → submit form  
Sign in as Manager → **Public Reports** → Assign / Resolve

**Speaker notes:** Emphasise data minimisation — only essential fields required. TypeScript interfaces match MySQL `citizen_reports` table.

**Rubric link:** Privacy-by-design; end-to-end citizen workflow.

---

## Slide 9 — LIVE DEMO: Technician & Driver (Ayush)
**Technician:** Maintenance filters (Open / In progress / Resolved / High priority)  
**Driver:** Large Mark Collected button — dedicated field shell

**Say:** "Driver gets touch-friendly UI; technician filters mirror future server-side query parameters."

---

## Slide 10 — LIVE DEMO: Government Officer (Ayush)
Sign in as **Government Officer** → Reports & KPIs only (limited sidebar)

**Say:** "Officer role is read-only analytics — enforced by ROLE_NAV, not UI hiding alone."

---

## Slide 11 — GitHub (Ayush)
Screenshot: https://github.com/charanpalkaur06-coder/smart-waste-management  
Commit history · README ICT308 section · `CONTRIBUTING.md` · `database/` folder

**Say:** "Consistent version control — incremental commits, team contributors, build-before-push in CONTRIBUTING."

**Rubric link:** **GitHub Version Control** criterion.

---

## Slide 12 — Jira (Ayush)
Sprint 1 board screenshot · completed stories · assignees · burndown  
Sprint 2: API + JWT planned

**Say:** "Well-planned sprint with task allocation — 39 points Done in Sprint 1, API work carried to Sprint 2."

**Rubric link:** **Jira Project Management** criterion.

---

## Slide 13 — Challenges & Lessons (Ayush)
1. Multi-role RBAC via `roleConfig.ts` — config beats scattered conditionals  
2. localStorage demo → future API — shared TypeScript/DB contracts  
3. Figma handoff via design tokens — reduced interpretation gaps  
4. Privacy-by-design on citizen forms — nullable DB columns from day one

**Rubric link:** **Technical Documentation** — challenges with solutions.

---

## Slide 14 — Remaining Work, Future Plans & Q&A
**Remaining work (Iteration 2):**
- REST API + MySQL connection
- JWT authentication
- Live IoT sensor feed
- Photo upload · CI/CD · automated tests

**Future development plans:**
- Leaflet map · route optimisation (OR-Tools)
- Driver PWA · WCAG accessibility audit
- Exportable PDF reports for officers

**Thank you — questions?**

**Rubric link:** **Demonstration** criterion requires remaining work AND future plans explicitly stated.

---

## Q&A cheat sheet

| Question | Answer |
|----------|--------|
| Why React not mobile app? | Web-first ops dashboard; responsive; faster Iteration 1 delivery |
| Is data real? | Demo mock data + localStorage; schema ready for MySQL |
| How does route optimisation work? | Demo urgency ordering; Sprint 2 adds distance algorithm |
| Security? | Role-based UI now; JWT + API guards in Sprint 2 |
| Build verification? | `npm run build` passes — TypeScript + Vite production bundle |
| Team division? | Jira assignees: Krishna dashboard/routes, Charanpal reporting/DB, Ayush driver/GitHub |

Full Q&A: `docs/RUBRIC-DEMO-SCRIPT.md`

---

## Before class checklist

- [ ] `npm run dev` running in terminal
- [ ] Browser at http://localhost:5173
- [ ] Each member practised their section (timing: ~3 min each)
- [ ] GitHub repo accessible (public or lecturer invited)
- [ ] Jira board screenshot on Slide 12
- [ ] Rehearsed Slide 14 remaining work + future plans (mandatory for Excellent demo)
