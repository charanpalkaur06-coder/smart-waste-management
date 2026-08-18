# Rubric Evidence — GitHub Version Control (Criterion 3)

**Target grade band:** Excellent (75–100%)  
**Criterion:** Consistent version control, collaboration, professional practices  
**Repo:** https://github.com/charanpalkaur06-coder/smart-waste-management

This document tells assessors and the team exactly what to show on GitHub to meet the Excellent standard.

---

## What assessors should verify on GitHub

### 1. Repository accessibility

- Repo is **Public**, or the teaching team is invited as **Collaborator** / **Viewer**
- Default branch is `main` with demo-ready code
- README opens with ICT308 Assessment 1 quick start

### 2. Professional README (`README.md`)

Assessors should see:

- Project title and client (ACT Government / TCCS)
- Team names: Krishna Trivedi, Charanpal Kaur, Ayush Ale
- `npm install` / `npm run dev` / `npm run build` instructions
- Five-role testing table (Manager, Driver, Technician, Officer, Resident)
- Links to submission docs in `docs/`
- Project structure and technology stack

### 3. Collaboration files

| File | Purpose |
|------|---------|
| `CONTRIBUTING.md` | Git workflow, commit conventions, build-before-push rule |
| `docs/TEAM-CONTRIBUTIONS.md` | Per-member git config and contribution areas |

### 4. Meaningful commit history

Assessors should see **incremental commits**, not a single initial dump. Current history on `main` includes:

| Commit (summary) | Type | Demonstrates |
|------------------|------|--------------|
| `first commit` | Initial | Project scaffold |
| `update readme` | docs | Documentation iteration |
| `Update index.html` | fix | HTML metadata |
| `feat: add technician and officer roles with RBAC navigation` | feat | Feature delivery |
| `feat: add MySQL schema and seed data for Iteration 2` | feat | Database engineering |
| `docs: add ICT308 report, presentation, Jira guides, and submission checklist` | docs | Assessment package |
| `docs: update README and CONTRIBUTING for ICT308 Assessment 1` | docs | Professional repo hygiene |
| `docs: update ICT308 submission materials` | docs | Iterative documentation |
| `docs: add Jira copy-paste, Figma checklist, and team contribution guide` | docs | Team collaboration evidence |
| `docs: align ICT308 rubric evidence and assessment documentation` | docs | Rubric-aligned submission |

### 5. Contributors graph

**GitHub → Insights → Contributors**

- All three team members should appear with commits under their own GitHub-verified emails
- Screenshot this page for the Word report (Section 4.3)

If only one name appears, each member should follow `docs/TEAM-CONTRIBUTIONS.md` to make 1–2 commits from their laptop.

---

## Screenshots to capture for the Word report

| # | Location on GitHub | Caption for report |
|---|-------------------|-------------------|
| 1 | **Code** tab — root showing `src/`, `database/`, `docs/` | Figure: Repository structure showing implementation and documentation folders |
| 2 | **Commits** on `main` | Figure: Incremental commit history demonstrating iterative development |
| 3 | **Insights → Contributors** | Figure: Multi-member collaboration on the repository |
| 4 | **README** rendered view | Figure: ICT308 quick start and role testing guide |

---

## Branching strategy (explain in demo)

- **`main`** — stable, assessor-ready code for Iteration 1
- **Feature branches** (recommended for Sprint 2): e.g. `feature/api-integration`, `feature/jwt-auth`
- Small team may push directly to `main` for documentation updates; feature work should use branches

---

## Professional practices checklist

- [ ] Commit messages use prefixes: `feat:`, `fix:`, `docs:`
- [ ] `npm run build` passes before pushing (see `CONTRIBUTING.md`)
- [ ] No secrets in repo (`.env`, passwords)
- [ ] `database/schema.sql` committed — shows forward planning
- [ ] Team can verbally explain 2–3 recent commits during demo

---

## What the team must still do manually

1. Ensure repo is **public** or lecturer is invited
2. Each member makes at least one commit from their own GitHub account (if Contributors graph is incomplete)
3. Capture the four screenshots above and paste into Word report Section 4
4. During class demo, Ayush (or designated member) opens GitHub and walks through commit history (~30 seconds)
