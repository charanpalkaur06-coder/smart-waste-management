# ICT308 Assessment 1 — Marking Rubric Checklist (Excellent 75–100%)

**Project:** Smart Waste Management System — Canberra  
**Team:** Krishna Trivedi, Charanpal Kaur, Ayush Ale  
**GitHub:** https://github.com/charanpalkaur06-coder/smart-waste-management  
**Target:** Excellent on **all five criteria**

Use this document as the master map from rubric language → evidence in the repo → what to submit → how to demonstrate Excellent.

---

## Criterion 1 — Implementation Progress (10 marks)

**Rubric (Excellent):** High-quality implementation demonstrating substantial progress and effective application of software engineering principles.

| Evidence file | What assessors should see |
|---------------|---------------------------|
| `src/` — React SPA | Working prototype with modular views and components |
| `src/lib/roleConfig.ts` | Configuration-driven RBAC for five roles |
| `database/schema.sql`, `database/seed.sql` | Normalised MySQL schema ready for Iteration 2 |
| `README.md` — ICT308 section | Run instructions and role testing guide |
| `npm run build` | Production build passes (TypeScript + Vite) |

### Submit

- GitHub link in Word report (Section 2)
- Screenshots of all core screens in report Section 2.3
- Live demo in class (see `docs/RUBRIC-DEMO-SCRIPT.md`)

### Excellent checkbox

- [ ] **Manager** — dashboard, map, routes, maintenance, public reports admin, reports
- [ ] **Driver** — dedicated field UI with Mark Collected workflow
- [ ] **Technician** — maintenance filters + bin map
- [ ] **Officer** — dashboard overview + Reports & KPIs only
- [ ] **Resident/Public** — report form without login; manager inbox receives reports
- [ ] Bin colour coding: green / amber / red / grey
- [ ] `database/schema.sql` exists with eight normalised tables
- [ ] `npm run build` passes locally
- [ ] Code follows separation of concerns (views, components, lib, context, data)

---

## Criterion 2 — Technical Documentation (5 marks)

**Rubric (Excellent):** Comprehensive, well-organised documentation with clear technical justification.

| Evidence file | What assessors should see |
|---------------|---------------------------|
| `docs/ICT308-Assessment1-Report.md` | ~2,000-word report with all six sections |
| Section 2 | Architecture diagram, module table, algorithms, component table |
| Section 3 | Technical challenges with solutions and lessons learned |
| Section 2.3 | Screenshot placeholders for every screen |
| `docs/FIGMA-GUIDE.md` | Capture URLs for consistent screenshots |

### Submit

- **MS Word** report (Calibri 12, ~2,000 words, APA references)
- CIHE Assessment Cover Sheet attached
- Paste from `docs/ICT308-Assessment1-Report.md`; add screenshots before submission

### Excellent checkbox

- [ ] Section 1 — Project overview, objectives, completed work summary
- [ ] Section 2 — System implementation with architecture **justification**
- [ ] Section 3 — Technical challenges (multi-role RBAC, no-backend demo, Figma handoff, privacy)
- [ ] Section 4 — GitHub repository and team contributions
- [ ] Section 5 — Jira project management (sprint structure, story points)
- [ ] Section 6 — Demonstration plan, remaining work, future development
- [ ] Component/technology table included
- [ ] Algorithms explained (RBAC, maintenance filter, public report flow, route prioritisation)
- [ ] No AI acknowledgement section
- [ ] Word count ~2,000 verified in MS Word

---

## Criterion 3 — GitHub Version Control (5 marks)

**Rubric (Excellent):** Consistent version control, collaboration, professional practices.

| Evidence file | What assessors should see |
|---------------|---------------------------|
| `README.md` | ICT308 quick start, roles table, submission doc links |
| `CONTRIBUTING.md` | Git workflow, commit conventions, build-before-push |
| `docs/TEAM-CONTRIBUTIONS.md` | Per-member setup and contribution areas |
| `docs/RUBRIC-GITHUB-EVIDENCE.md` | What to screenshot on GitHub for assessors |
| GitHub → Insights → Contributors | Multiple team members with commits |
| Commit history on `main` | Incremental, descriptive messages (`feat:`, `docs:`) |

### Submit

- GitHub URL in report Section 4
- Screenshot: commit history + contributors graph in Word report

### Excellent checkbox

- [ ] Repo public OR lecturer invited as collaborator
- [ ] README has ICT308 Assessment 1 section
- [ ] `CONTRIBUTING.md` exists with workflow
- [ ] `docs/TEAM-CONTRIBUTIONS.md` documents multi-member commits
- [ ] Multiple meaningful commits (not one bulk upload)
- [ ] Team can explain branching strategy and recent commits in demo
- [ ] Latest rubric-aligned docs pushed to `main`

---

## Criterion 4 — Jira Project Management (5 marks)

**Rubric (Excellent):** Well-planned sprints, task allocation, continuous progress tracking.

| Evidence file | What assessors should see |
|---------------|---------------------------|
| `docs/JIRA-SETUP-GUIDE.md` | Step-by-step Jira setup (15 min) |
| `docs/jira-backlog.md` | Epics, Sprint 1 stories, Sprint 2 backlog |
| `docs/jira-import.csv` | CSV import for Jira stories |
| `docs/JIRA-COPY-PASTE.md` | Fast copy-paste for epics and stories |
| `docs/RUBRIC-JIRA-EVIDENCE.md` | Exact screenshots and sprint structure for assessors |
| Live Jira board | Sprint 1 mostly Done; stories assigned to Krishna / Charanpal / Ayush |

### Submit

- Jira URL in report Section 5
- Screenshots: backlog, active sprint board, burndown (if available)

### Excellent checkbox

- [ ] Jira project created (Scrum, key e.g. SWMS-CBR)
- [ ] Sprint 1 named with clear goal matching Iteration 1 objectives
- [ ] Epics cover all modules (auth, dashboard, bins, routes, driver, maintenance, reporting, analytics, database, docs)
- [ ] Every story has assignee and story points
- [ ] Most Sprint 1 items marked **Done**
- [ ] 2–3 items in Sprint 2 (API, JWT) showing realistic forward planning
- [ ] Team can walk assessor through board in demo

---

## Criterion 5 — Project Demonstration (5 marks)

**Rubric (Excellent):** Professional demo explaining implemented solution, technical decisions, future plans.

| Evidence file | What assessors should see |
|---------------|---------------------------|
| `docs/ICT308-Presentation-Outline.md` | 14-slide outline with speaker notes |
| `docs/RUBRIC-DEMO-SCRIPT.md` | 10-min timing, Q&A prep, rubric talking points |
| Report Section 6 | Demo script, milestones, remaining work, future plans |
| Live demo | `npm run dev` → http://localhost:5173 |

### Submit

- PowerPoint built from presentation outline (upload to Moodle)
- In-class 10-minute demo + Q&A

### Excellent checkbox

- [ ] Each team member speaks ~3 minutes on their modules
- [ ] Demo covers all five roles and core screens
- [ ] Technical decisions explained (React SPA, RBAC config, localStorage bridge, schema-first DB)
- [ ] GitHub and Jira referenced during demo
- [ ] **Remaining work** section covered (API, JWT, live sensors, deployment)
- [ ] **Future development plans** section covered (Sprint 2 backlog)
- [ ] Q&A prepared (see `docs/RUBRIC-DEMO-SCRIPT.md`)

---

## Quick submission map

| Deliverable | Source | Moodle / class |
|-------------|--------|----------------|
| Technical report | `docs/ICT308-Assessment1-Report.md` → Word | Moodle upload |
| Cover sheet | CIHE template | Attach to Word |
| PowerPoint | `docs/ICT308-Presentation-Outline.md` | Moodle upload |
| GitHub | https://github.com/charanpalkaur06-coder/smart-waste-management | Link in report |
| Jira | Your Atlassian URL | Link in report + screenshots |
| Live demo | `npm run dev` | Week 6 class |

---

## Related docs index

| Document | Purpose |
|----------|---------|
| `docs/MARKING-RUBRIC-CHECKLIST.md` | This file — master rubric map |
| `docs/RUBRIC-GITHUB-EVIDENCE.md` | GitHub screenshots and commit evidence |
| `docs/RUBRIC-JIRA-EVIDENCE.md` | Jira screenshots and sprint evidence |
| `docs/RUBRIC-DEMO-SCRIPT.md` | Demo timing, Q&A, rubric language |
| `docs/SUBMISSION-CHECKLIST.md` | Moodle and pre-class checklist |
| `docs/FIGMA-GUIDE.md` | Screenshot capture URLs |
