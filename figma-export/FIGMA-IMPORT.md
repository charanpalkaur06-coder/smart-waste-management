# Import screenshots into Figma

Use this when you already have PNG captures (in this folder or from the dev server). For a **brand-new** file from scratch, start with [FIGMA-NEW-PROJECT.md](./FIGMA-NEW-PROJECT.md).

**Branding:** File name = **Smart Waste Management** (not “Smart Wasre”).

---

## Capture fresh PNGs from the app

```bash
cd ~/Projects/smart-waste-management
npm run dev
```

| PNG name (suggested) | Screen | Capture URL | Frame size |
|----------------------|--------|-------------|------------|
| `01-login.png` | Login | `http://localhost:5173/?export=login` | 1440×900 or 390×844 |
| `02-manager-dashboard.png` | Manager Dashboard | `?export=dashboard` | 1440×900 |
| `03-bin-map.png` | Bin Map | `?export=map` | 1440×900 |
| `04-route-optimisation.png` | Route Planning | `?export=routes` | 1440×900 |
| `05-driver-collection.png` | Driver | `?export=driver` | 390×844 |
| `06-maintenance.png` | Maintenance | `?export=maintenance` | 1440×900 |
| `07-public-report.png` | Public Report | `?export=public` | 390×844 |
| `07b-public-success.png` | Report Submitted | `?export=public-success` | 390×844 |
| `08-reports-kpis.png` | Reports & KPIs | `?export=reports` | 1440×900 |
| `09-public-reports-admin.png` | Public Reports Admin | `?export=public-reports` | 1440×900 |

Preview build: `npm run preview` → **http://localhost:4173** (same query params).

---

## Steps in Figma

1. **File → New design file** (or open your new **Smart Waste Management** file).
2. Press **F** → create frame **390 × 844** (mobile) or **1440 × 900** (desktop).
3. **File → Place image…** (or drag PNG onto the frame).
4. Name frames to match the table above.
5. Optional: place image at **50% opacity** and rebuild with components from [`../figma-design-kit/COMPONENT-SPECS.md`](../figma-design-kit/COMPONENT-SPECS.md).

---

## Legacy Figma file (optional reference only)

An older file may exist as “Smart Wasre Management” on Figma — treat it as **Archive** only; the React app and [`design-tokens.json`](./design-tokens.json) are the source of truth.

---

## Related docs

- [FIGMA-NEW-PROJECT.md](./FIGMA-NEW-PROJECT.md) — full new-project workflow
- [`../figma-design-kit/`](../figma-design-kit/) — tokens, screens, components
