# Smart Waste Management — Canberra

Professional operations dashboard for the **Canberra Smart Waste Management** TCCS pilot — ICT307 design · **ICT308 Iteration 1 implementation**.

**GitHub:** https://github.com/charanpalkaur06-coder/smart-waste-management  
**Team:** Krishna Trivedi, Charanpal Kaur, Ayush Ale  
**Client:** ACT Government / Transport Canberra and City Services (TCCS)

---

## ICT308 Assessment 1 — Quick start

```powershell
cd "C:\Users\keini\OneDrive\Documents\GitHub\smart-waste-management"
npm install
npm run dev
```

Open **http://localhost:5173** in Chrome.

Production build:

```bash
npm run build
npm run preview
```

### Submission docs

| Document | Path |
|----------|------|
| **Marking rubric checklist (start here)** | `docs/MARKING-RUBRIC-CHECKLIST.md` |
| Technical report (~2000 words) | `docs/ICT308-Assessment1-Report.md` |
| Presentation outline | `docs/ICT308-Presentation-Outline.md` |
| Demo script (10 min + Q&A) | `docs/RUBRIC-DEMO-SCRIPT.md` |
| Submission checklist | `docs/SUBMISSION-CHECKLIST.md` |
| GitHub rubric evidence | `docs/RUBRIC-GITHUB-EVIDENCE.md` |
| Jira rubric evidence | `docs/RUBRIC-JIRA-EVIDENCE.md` |
| Team contributions | `docs/TEAM-CONTRIBUTIONS.md` |
| Contributing guide | `CONTRIBUTING.md` |
| Jira setup (15 min) | `docs/JIRA-SETUP-GUIDE.md` |
| Jira backlog | `docs/jira-backlog.md` |
| Screenshot guide | `docs/FIGMA-GUIDE.md` |
| Database schema | `database/schema.sql` |

---

## User roles — testing guide

| Role | How to access | Screens |
|------|---------------|---------|
| **Operations Manager** | Sign in — Manager (or default on first load) | Full dashboard, map, routes, maintenance, public reports admin, reports |
| **Collection Driver** | Sign in — Driver | Large-button field collection UI |
| **Maintenance Technician** | Sign in — Maintenance Technician | Maintenance tickets + bin map |
| **Government Officer** | Sign in — Government Officer | Dashboard overview + Reports & KPIs |
| **Resident / Business** | Report a full bin (no login) | Minimal public report form |

Sign out via the header logout icon to return to the role picker.

Screenshot URLs: see `docs/FIGMA-GUIDE.md` (`?export=login`, `?export=dashboard`, etc.)

---

## Features

- Five-role login (Manager, Driver, Technician, Officer, Public)
- Manager dashboard with stats, map, alerts, Recharts charts
- Bin status colour coding: green normal · amber warning · red critical · grey offline
- Route planning and driver field collection UI
- Maintenance tickets with filters (Open / In progress / Resolved / High priority)
- Public bin reporting with geolocation and localStorage persistence
- Manager public reports inbox (assign / resolve)
- MySQL database schema and seed data for Iteration 2

---

## Project structure

```
smart-waste-management/
├── src/
│   ├── views/          # Login, Dashboard, Driver, Maintenance, Reports…
│   ├── components/     # Sidebar, Header, BinTable, Charts…
│   ├── context/        # AppContext (role, reports)
│   ├── lib/            # roleConfig, reportStore, routing
│   └── data/           # mockData.ts
├── database/
│   ├── schema.sql
│   └── seed.sql
├── docs/               # ICT308 submission package
├── figma-design-kit/
└── figma-export/
```

---

## Stack

React 19 · TypeScript · Vite · Lucide React · Recharts

---

## Push to GitHub

```powershell
git add .
git commit -m "your message"
git push origin main
```

Do **not** force push to `main`.

---

## Figma design reference

- [Figma prototype](https://www.figma.com/design/NudMsbIEggM4iDsLsrb3dl/Smart-Wasre-Management)
- Recreation guide: `figma-export/FIGMA-NEW-PROJECT.md`
- Design tokens: `figma-export/design-tokens.json`
