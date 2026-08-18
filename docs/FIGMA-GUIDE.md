# Figma Screenshot Guide — ICT308 Report

Use these URLs while `npm run dev` is running to capture consistent screenshots for your Word report and PowerPoint.

**Base URL:** http://localhost:5173

---

## Capture URLs

| Screen | URL | Use in report |
|--------|-----|---------------|
| Login (all roles) | `/?export=login` | Section 2 — Authentication |
| Manager dashboard | `/?export=dashboard` | Section 2 — Dashboard |
| Bin map | `/?export=map` | Section 2 — Bin management |
| Route planning | `/?export=routes` | Section 2 — Routes |
| Maintenance | `/?export=maintenance` | Section 2 — Maintenance filters |
| Public report (mobile) | `/?export=public` | Section 2 — Citizen reporting |
| Public report success | `/?export=public-success` | Optional success state |
| Reports / KPIs | `/?export=reports` | Section 2 — Analytics |
| Public reports admin | `/?export=public-reports` | Section 2 — Manager inbox |
| Driver view | `/?export=driver` | Section 2 — Driver UI |

---

## How to capture

1. Start dev server: `npm run dev`
2. Open each URL in Chrome
3. Press **Win + Shift + S** (Windows Snipping Tool)
4. Save as PNG into a folder e.g. `docs/screenshots/`
5. Insert into Word report with captions:
   - *Figure 1: Role-based login screen*
   - *Figure 2: Operations manager dashboard with KPI cards*

---

## Matching your Figma design

**Figma file:** [Smart Waste Management](https://www.figma.com/design/NudMsbIEggM4iDsLsrb3dl/Smart-Wasre-Management)

Figma files must be edited in the Figma web or desktop app. To align the prototype with Figma:

1. Open Figma side-by-side with the running app
2. Compare colours using `figma-export/design-tokens.json`
3. Note any spacing differences in report Section 3 (Technical Challenges)
4. For Iteration 2: import tokens into Figma via Tokens Studio plugin

**Design kit in repo:**

- `figma-design-kit/` — component specs and screen inventory
- `figma-export/FIGMA-NEW-PROJECT.md` — recreation steps
- `figma-export/design-tokens.json` — colours, typography, spacing

---

## Bin colour reference (must match in screenshots)

| Status | App class | Colour |
|--------|-----------|--------|
| Normal | `normal` | Green |
| Warning / Nearly full | `warning` | Amber |
| Critical / Full | `critical` | Red |
| Offline | `offline` | Grey |

---

## Report caption examples

> Figure 3: Maintenance ticket view with status filters (Open, In progress, Resolved, High priority) demonstrating usability requirements from ICT307.

> Figure 4: Public bin report form showing data minimisation — only issue type and location are required fields.
