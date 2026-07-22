# Smart Waste Management

Professional operations dashboard for the **Canberra Smart Waste Management** TCCS pilot — redesigned from the original Figma wireframes, with a working **public bin reporting** flow.

## Quick start

```bash
cd ~/Projects/smart-waste-management
npm install
npm run dev
```

Open the URL shown in the terminal (usually **http://localhost:5173**).

Production build:

```bash
npm run build
npm run preview
```

---

## User guide — testing each role

### 1. Manager (default)

Opening **http://localhost:5173** loads the **desktop Manager dashboard** (sidebar, stats, map, charts).

1. Use the full dashboard: map, bins, routes, maintenance, reports.
2. **Public Reports** in the sidebar shows citizen submissions with a red badge for new items.
3. On the dashboard, a banner and stat card appear when new public reports exist.
4. Open a report → **Assign** or **Resolve** to update status.
5. **Sign out** via the header logout icon to reach the role picker.

For the login screen only, use **http://localhost:5173/?export=login**.

### 2. Driver

1. Sign out, then click **Sign in — Driver** on the login screen.
2. Simplified view: current route stop, **Mark Collected**, logout.
3. Link at bottom to submit a public report if needed.

### 3. Public (no login)

1. Sign out, then click **Report a full bin** (or use the sidebar link when signed in as manager).
2. Choose issue type (full bin, overflow, damaged, etc.).
3. Enter location and suburb, optionally bin ID and description.
4. Tap **Use my location** to auto-fill coordinates (browser permission required).
5. Submit — you receive a **reference ID** (e.g. `PR-XXXX`).

Reports are stored in your browser’s **localStorage** (demo). In production you would connect a real API/database.

Figma screenshot URLs use `?export=public` (mobile) or `?export=dashboard` (desktop) — remove the query string for normal use.

---

## How public reporting works (technical)

| Piece | Location |
|-------|----------|
| Form UI | `src/views/PublicReportView.tsx` |
| Storage | `src/lib/reportStore.ts` → `localStorage` key `smart-waste-public-reports` |
| State | `src/context/AppContext.tsx` |
| Manager review | `src/views/PublicReportsAdminView.tsx` |

**Demo limitation:** Data is per-browser only. Clearing site data removes reports. For a real deployment you would:

- POST reports to a REST API
- Notify managers via email/push
- Optionally attach photos to object storage
- Geocode addresses server-side

---

## Applying this design back to Figma

Cursor cannot create or edit files on figma.com. Use the **Figma recreation package**:

- **[`figma-export/FIGMA-NEW-PROJECT.md`](figma-export/FIGMA-NEW-PROJECT.md)** — step-by-step new Figma file
- **[`figma-design-kit/`](figma-design-kit/)** — tokens, screen inventory, component specs
- **[`figma-export/design-tokens.json`](figma-export/design-tokens.json)** — colors, type, spacing for plugins

Screenshot each screen with `?export=dashboard` (etc.) while `npm run dev` is running — see the guide for all URLs. Name the file **Smart Waste Management** (not “Wasre”).

---

## Features

- Branded login (Manager / Driver / Public report)
- Manager dashboard with stats, map, alerts, charts
- Public bin reporting with geolocation
- Public Reports admin (filter, assign, resolve)
- Route planning, driver view, maintenance, KPI reports

## Stack

React 19 · TypeScript · Vite · Lucide React · Recharts
