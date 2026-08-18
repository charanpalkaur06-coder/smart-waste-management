# Jira Setup Guide — 15 Minutes

**Project:** Smart Waste Management System — Canberra  
**Suggested project key:** SWMS-CBR  
**Team:** Krishna Trivedi, Charanpal Kaur, Ayush Ale

---

## Step 1 — Create account (2 min)

1. Go to https://www.atlassian.com/software/jira/free
2. Sign up with your student email (free tier supports up to 10 users)
3. Create a site name e.g. `yourteam.atlassian.net`

---

## Step 2 — Create project (2 min)

1. Click **Create project**
2. Choose **Scrum** (or Kanban if preferred)
3. Name: **Smart Waste Canberra**
4. Key: **SWMS** (auto-generated is fine)
5. Click **Create**

---

## Step 3 — Create Sprint 1 (2 min)

1. Go to **Backlog**
2. Click **Create sprint**
3. Name: **Sprint 1 — Iteration 1 Prototype**
4. Dates: Weeks 1–6 of your semester
5. Goal: *Deliver working React prototype with all core screens and database schema*

---

## Step 4 — Add epics (3 min)

Create these epics (click **Create** → Issue type **Epic**):

| Epic | Summary |
|------|---------|
| SWMS-1 | Authentication & roles |
| SWMS-2 | Operations dashboard |
| SWMS-3 | Bin management |
| SWMS-4 | Route optimisation |
| SWMS-5 | Driver field UI |
| SWMS-6 | Maintenance |
| SWMS-7 | Citizen reporting |
| SWMS-8 | Analytics & reports |
| SWMS-9 | Backend & database |
| SWMS-10 | Documentation & submission |

---

## Step 5 — Add stories (5 min)

Copy stories from `docs/jira-backlog.md` OR import `docs/jira-import.csv`:

**In Jira:** Project settings → External imports → CSV (if available on your plan)

**Manual:** Create **Story** issues under each epic. Set:

- **Assignee:** Krishna / Charanpal / Ayush
- **Story Points:** as listed in backlog
- **Sprint:** Sprint 1
- **Status:** Done (for completed work)

### Minimum stories to mark Done

- Role-based login (5 roles)
- Manager dashboard
- Bin map and table
- Route planning
- Driver collection UI
- Maintenance filters
- Public report form
- Manager public reports inbox
- Officer reports view
- MySQL schema in GitHub
- GitHub commits and README

---

## Step 6 — Screenshot for report (1 min)

Capture these for your Word report:

1. **Backlog** — showing Sprint 1 stories
2. **Active sprint board** — columns To Do / In Progress / Done
3. **Burndown chart** (Reports → Burndown chart) if available

---

## Step 7 — Share with team and assessors

1. **Project settings → People** → invite Krishna, Charanpal, Ayush
2. If lecturer requires access, invite their email as **Viewer**
3. Copy project URL: `https://YOUR-SITE.atlassian.net/jira/software/projects/SWMS/boards/1`
4. Paste into `docs/ICT308-Assessment1-Report.md` and Word report

---

## Tips for full marks (Excellent rubric)

- Assign every story to a named team member (Krishna / Charanpal / Ayush)
- Mark all Sprint 1 items **Done** (39 story points — see `docs/jira-backlog.md`)
- Carry API, JWT, and deployment stories to Sprint 2 to show realistic planning
- Sprint goal field should match Iteration 1 objectives from the report
- Capture screenshots listed in `docs/RUBRIC-JIRA-EVIDENCE.md` for Word report Section 5
