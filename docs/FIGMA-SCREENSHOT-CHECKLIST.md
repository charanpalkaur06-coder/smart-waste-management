# Figma + Screenshot Checklist — tick before submitting

**Figma:** https://www.figma.com/design/NudMsbIEggM4iDsLsrb3dl/Smart-Wasre-Management  
**Run app:** `npm run dev` → http://localhost:5173

---

## Screenshots for Word report (tick when done)

- [ ] Login — `http://localhost:5173/?export=login`
- [ ] Manager dashboard — `/?export=dashboard`
- [ ] Bin map — `/?export=map`
- [ ] Routes — `/?export=routes`
- [ ] Maintenance — `/?export=maintenance`
- [ ] Driver — `/?export=driver`
- [ ] Public report — `/?export=public`
- [ ] Public reports admin — `/?export=public-reports`
- [ ] Reports/KPIs — `/?export=reports`
- [ ] GitHub commit history (browser screenshot)
- [ ] Jira sprint board (browser screenshot)

Save PNGs to `docs/screenshots/` or Desktop. Insert into Word with captions (Figure 1, Figure 2…).

---

## Figma alignment (for report text)

| Figma screen | Implemented in repo | Status colours |
|--------------|---------------------|----------------|
| Login | `src/views/LoginView.tsx` | ACT green + navy |
| Dashboard | `src/views/DashboardView.tsx` | KPI cards, charts |
| Bin map | `MapPanel.tsx` | Green / amber / red / grey |
| Routes | `src/views/RoutesView.tsx` | Ordered stops |
| Driver | `src/views/DriverView.tsx` | Large touch buttons |
| Maintenance | `src/views/MaintenanceView.tsx` | Filter chips |
| Public report | `src/views/PublicReportView.tsx` | Minimal form |
| Reports | `src/views/ReportsView.tsx` | Analytics cards |

Design tokens: `figma-export/design-tokens.json`

---

## PowerPoint

Use same screenshots on slides 5–9 per `ICT308-Presentation-Outline.md`.
