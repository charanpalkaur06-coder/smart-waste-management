# ICT308 Assessment 1 — Submission Checklist

**Due:** Week 6, Sunday 11:59 PM  
**Weight:** 30%  
**Team:** Krishna Trivedi, Charanpal Kaur, Ayush Ale

---

## Moodle submission (one member submits for group)

- [ ] **MS Word report** (~2000 words, Calibri 12, APA referencing)
- [ ] **CIHE Assessment Cover Sheet** attached
- [ ] **PowerPoint slides** uploaded
- [ ] **GitHub link** in report: https://github.com/charanpalkaur06-coder/smart-waste-management
- [ ] **Jira link** in report (after you create it)
- [ ] Repo and Jira accessible to teaching team

---

## Report (`docs/ICT308-Assessment1-Report.md`)

- [ ] Copy into Word, apply Calibri 12
- [ ] Replace `[INSERT YOUR JIRA URL]`
- [ ] Add screenshots: Login, Dashboard, Map, Routes, Driver, Maintenance, Public Report, Admin inbox, Reports
- [ ] Add screenshots: GitHub commit history, Jira sprint board
- [ ] Verify ~2000 word count
- [ ] APA references section complete

---

## GitHub

- [ ] Push latest commits to `main`:
  ```powershell
  cd "C:\Users\keini\OneDrive\Documents\GitHub\smart-waste-management"
  git status
  git push origin main
  ```
- [ ] Repo is **Public** OR lecturer added as collaborator
- [ ] README shows ICT308 section and run instructions
- [ ] Multiple meaningful commits visible (not one giant commit)

---

## Jira (15 minutes — see JIRA-SETUP-GUIDE.md)

- [ ] Create free Jira project **SWMS-CBR**
- [ ] Import or copy stories from `docs/jira-backlog.md` or `docs/jira-import.csv`
- [ ] Mark Sprint 1 stories **Done**
- [ ] Screenshot backlog, board, burndown for report
- [ ] Paste Jira URL into Word report

---

## PowerPoint

- [ ] Build 14 slides from `docs/ICT308-Presentation-Outline.md`
- [ ] Include GitHub + Jira URLs on slides
- [ ] Add app screenshots (see FIGMA-GUIDE.md for capture URLs)

---

## Class demo (Week 6)

- [ ] Run before class:
  ```powershell
  cd "C:\Users\keini\OneDrive\Documents\GitHub\smart-waste-management"
  npm install
  npm run dev
  ```
- [ ] Open http://localhost:5173
- [ ] Each member presents ~3 minutes
- [ ] Practise Q&A from presentation outline

---

## Full marks rubric self-check

| Criterion (marks) | Excellent checklist |
|-------------------|---------------------|
| **Implementation (10)** | All roles work, maintenance filters, public report flow, database schema |
| **Documentation (5)** | 2000-word report with architecture, challenges, screenshots |
| **GitHub (5)** | Regular commits, README, team can explain history |
| **Jira (5)** | Sprint 1 planned, tasks assigned, most marked Done |
| **Demo (5)** | Each member explains their module + technical decisions |

---

## Do NOT use for submission

- `C:\xampp\smart waste\` — old HTML prototype, not the GitHub project
- BlueStacks — this is a web app, demo in Chrome via `npm run dev`
