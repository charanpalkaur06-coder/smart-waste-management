# ICT308 Assessment 1 — Presentation Outline

**GitHub:** https://github.com/charanpalkaur06-coder/smart-waste-management  
**Demo:** `npm run dev` → http://localhost:5173  
**Duration:** 10 min + 5 min Q&A · **Team:** Krishna (~3 min), Charanpal (~3 min), Ayush (~3 min)

---

## Slide 1 — Title
**Smart Waste Management System — Canberra**  
ICT308 Project 2 · Iteration 1  
Krishna Trivedi · Charanpal Kaur · Ayush Ale  
Client: ACT Government / TCCS

**Speaker notes:** Introduce team names and project purpose in one sentence.

---

## Slide 2 — The Problem (Krishna)
- Smart bins across Canberra lack centralised monitoring
- Overflow incidents, inefficient routes, reactive maintenance
- No easy channel for residents to report issues
- **Our solution:** web platform for staff + public reporting

---

## Slide 3 — Iteration 1 Goals (Krishna)
- Working React prototype (all core screens)
- Five user roles implemented
- MySQL schema designed
- GitHub + Jira evidence

---

## Slide 4 — Architecture (Krishna)
React SPA → (future REST API) → MySQL  
Demo: mockData + localStorage for public reports  
Show folder structure: `src/views/`, `database/`

---

## Slide 5 — LIVE DEMO: Login (Krishna)
Sign out → show all five login options  
Click **Operations Manager**

---

## Slide 6 — LIVE DEMO: Dashboard (Krishna)
KPI stats · map panel · alerts · charts  
Point out green / amber / red / grey status coding

---

## Slide 7 — LIVE DEMO: Routes & Bins (Charanpal)
Route planning view → bin map/table  
Explain priority ordering by fill level

---

## Slide 8 — LIVE DEMO: Public Reporting (Charanpal)
Sign out → **Report a full bin** → submit form  
Sign in as Manager → **Public Reports** → Assign

**Speaker notes:** Emphasise data minimisation — only essential fields required.

---

## Slide 9 — LIVE DEMO: Technician & Driver (Ayush)
**Technician:** Maintenance filters (Open / High priority)  
**Driver:** Large Mark Collected button

---

## Slide 10 — LIVE DEMO: Government Officer (Ayush)
Sign in as **Government Officer** → Reports & KPIs only

---

## Slide 11 — GitHub (Ayush)
Screenshot: https://github.com/charanpalkaur06-coder/smart-waste-management  
Commit history · README · database folder

---

## Slide 12 — Jira (Ayush)
Sprint 1 board screenshot · completed stories · burndown

---

## Slide 13 — Challenges & Lessons (Ayush)
1. Multi-role RBAC via roleConfig  
2. localStorage demo → future API  
3. Figma handoff via design tokens  
4. Privacy-by-design on citizen forms

---

## Slide 14 — Sprint 2 & Q&A
API integration · JWT auth · deployment · testing  
**Thank you — questions?**

---

## Q&A cheat sheet

| Question | Answer |
|----------|--------|
| Why React not mobile app? | Web-first ops dashboard; responsive; faster Iteration 1 delivery |
| Is data real? | Demo mock data + localStorage; schema ready for MySQL |
| How does route optimisation work? | Demo urgency ordering; Sprint 2 adds distance algorithm |
| Security? | Role-based UI now; JWT + API guards in Sprint 2 |
| AI use? | Cursor for assistance; all code reviewed by team; acknowledged in report |

---

## Before class checklist

- [ ] `npm run dev` running in terminal
- [ ] Browser at http://localhost:5173
- [ ] Each member practised their section
- [ ] GitHub repo accessible (public or lecturer invited)
- [ ] Jira board screenshot on slide
