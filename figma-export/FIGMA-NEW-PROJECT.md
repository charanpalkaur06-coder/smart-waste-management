# Create a new Figma project — Smart Waste Management

**Note:** Figma files are created and edited at [figma.com](https://figma.com). This guide plus [`../figma-design-kit/`](../figma-design-kit/) is your **blueprint** — you create the Figma file yourself.

**Branding:** Name the file **Smart Waste Management** (fix legacy typos like “Smart Wasre”).

---

## Quick start (5 steps)

1. In Figma: **File → New design file** → rename to **Smart Waste Management**.
2. Add **Color** and **Text** styles from [`design-tokens.json`](./design-tokens.json) or [`../figma-design-kit/DESIGN-TOKENS.md`](../figma-design-kit/DESIGN-TOKENS.md).
3. Build **Components** page (sidebar, header, stat card, buttons, badges) per [`../figma-design-kit/COMPONENT-SPECS.md`](../figma-design-kit/COMPONENT-SPECS.md).
4. Create frames **1440×900** (manager) and **390×844** (mobile) per [`../figma-design-kit/SCREEN-INVENTORY.md`](../figma-design-kit/SCREEN-INVENTORY.md).
5. Optional: capture screens from the running app (URLs below) or import via [html.to.design](https://html.to.design/).

---

## Step 1 — Create the file

1. Go to [figma.com](https://www.figma.com) → **New design file**.
2. Rename (top-left): **Smart Waste Management**.
3. Create pages:
   - **Cover** — title, subtitle “TCCS Pilot · Canberra”, token swatches
   - **Foundations** — color + text styles
   - **Components**
   - **Desktop**
   - **Mobile**
   - **Archive** (optional, for old wireframes)

---

## Step 2 — Color styles

From tokens (full list in `design-tokens.json`):

| Style name | Hex |
|------------|-----|
| Green/950 | `#052e26` |
| Green/900 | `#0d5c4b` |
| Green/600 | `#14b8a6` |
| Green/50 | `#f0fdfa` |
| Gray/950 | `#0f1419` |
| Gray/900 | `#1a2332` |
| Gray/600 | `#64748b` |
| Gray/200 | `#e2e8f0` |
| Gray/50 | `#f8fafc` |
| Surface/White | `#ffffff` |
| Danger | `#dc2626` |
| Danger BG | `#fee2e2` |
| Warning | `#d97706` |
| Warning BG | `#fef3c7` |

**How:** Select a rectangle → Fill → **Style** (+) → name as above. Group under `Brand/`, `Neutral/`, `Semantic/`.

---

## Step 3 — Text styles

1. Install font **Inter** (Google Fonts plugin or local).
2. Create text styles:

| Style | Size | Weight |
|-------|------|--------|
| Page/Title | 24 | Bold |
| Card/Title | 15 | Semibold |
| Body/Default | 15 | Regular |
| Body/Small | 14 | Regular |
| Label/Caps | 12 | Semibold (ALL CAPS) |
| Stat/Value | 28 | Bold |
| Sidebar/Title | 16 | Bold |
| Sidebar/Link | 14 | Medium |

---

## Step 4 — Build components

On the **Components** page, build in this order (detailed measurements in COMPONENT-SPECS):

1. **Button** — Primary / Secondary / Ghost (+ hover)
2. **Badge** — critical, warning, normal, offline
3. **Stat card** — default, alert, success
4. **Alert item** — high, medium, low
5. **Bin table row** + header row
6. **Sidebar** — with nav variants (active + badge)
7. **Header** — search, notifications, user
8. **Card** — header + body slots
9. **Live pill**, **Public alert banner**

Publish components when stable (right panel → **Publish**).

---

## Step 5 — Create frames (layouts)

### Desktop shell (1440 × 900)

Used for: Login (wide), Dashboard, Bin Map, Routes, Maintenance, Reports, Public Reports Admin.

```
┌──────────┬────────────────────────────────────┐
│ Sidebar  │ Header (64px)                      │
│ 260px    ├────────────────────────────────────┤
│          │ Page content (padding 24×32)     │
│          │                                    │
└──────────┴────────────────────────────────────┘
```

- Frame: **1440 × 900**, fill `#f8fafc`
- Place **Sidebar** instance (fixed height)
- Main column: **Header** + auto-layout content area

| Frame name | Sidebar active nav | Notes |
|------------|-------------------|--------|
| 01 Login | — (no sidebar) | Split brand + sign-in card |
| 02 Manager Dashboard | Dashboard | 6 stats, map, alerts, table, chart |
| 03 Bin Map | Bin Map | Large map card |
| 04 Route Planning | Route Planning | Stops list + summary |
| 06 Maintenance | Maintenance | Work orders |
| 07 Reports & KPIs | Reports & KPIs | Charts + KPIs |
| 09 Public Reports (Admin) | Public Reports | Table + filters |

### Mobile (390 × 844)

| Frame name | Notes |
|------------|--------|
| 05 Driver — Collection | Centered route card, no sidebar |
| 08 Public Report | Form, sticky submit |
| 08b Report Submitted | Success + reference ID |

---

## Step 6 — Capture from the running app (recommended)

### Start the app

```bash
cd ~/Projects/smart-waste-management
npm install   # if needed
npm run dev
```

Default URL: **http://localhost:5173**

Production preview (optional):

```bash
npm run build
npm run preview
# → http://localhost:4173
```

### Screenshot / export URLs

Append `?export=<mode>` to load the correct screen **without logging in manually**. A yellow banner appears in screenshot mode — crop it out or hide in Figma.

| Screen | URL |
|--------|-----|
| Login | `http://localhost:5173/?export=login` |
| Manager Dashboard | `http://localhost:5173/?export=dashboard` |
| Bin Map | `http://localhost:5173/?export=map` |
| Route Planning | `http://localhost:5173/?export=routes` |
| Driver | `http://localhost:5173/?export=driver` |
| Maintenance | `http://localhost:5173/?export=maintenance` |
| Reports & KPIs | `http://localhost:5173/?export=reports` |
| Public Report (form) | `http://localhost:5173/?export=public` |
| Public Report (success) | `http://localhost:5173/?export=public-success` |
| Public Reports Admin | `http://localhost:5173/?export=public-reports` |

**Tips**

- Resize browser window to **1440×900** (desktop) or **390×844** (mobile) before capture.
- macOS: **Cmd+Shift+4** → space → click window; or use a full-page screenshot extension.
- Place PNGs: **File → Place image** into matching frames (see [FIGMA-IMPORT.md](./FIGMA-IMPORT.md) if you have PNGs in this folder).

### html.to.design (optional)

1. Install [html.to.design](https://html.to.design/) Figma plugin.
2. With dev server running, paste a capture URL (e.g. `?export=dashboard`).
3. Import into a **Desktop** frame; detach and align to your components/tokens.

---

## Step 7 — Plugins using tokens

- Import [`design-tokens.json`](./design-tokens.json) with **Tokens Studio for Figma** (or similar) to sync colors/spacing.
- Or copy hex values manually from [`../figma-design-kit/DESIGN-TOKENS.md`](../figma-design-kit/DESIGN-TOKENS.md).

---

## Migrating from the old file

If you have the legacy file (“Smart Wasre Management”):

1. **Do not** rely on it as source of truth — the React app is newer.
2. Create a **new** file with correct name **Smart Waste Management**.
3. Move old frames to **Archive** page.
4. Rebuild using this kit + live app screenshots.

---

## Package index

| Path | Description |
|------|-------------|
| `figma-export/design-tokens.json` | Plugin-ready tokens |
| `figma-export/FIGMA-NEW-PROJECT.md` | This guide |
| `figma-export/FIGMA-IMPORT.md` | Place existing PNGs |
| `figma-design-kit/*` | Full specs (tokens, screens, components) |

---

## Using the Figma API (with your token)

The REST API **cannot create a new file** — you still need **File → New design file** once in the Figma app.

After you have a file, paste your credentials and we can push **color variables** automatically:

1. Create **Smart Waste Management** in Figma (blank file is fine).
2. Copy the **file key** from the URL: `figma.com/design/{FILE_KEY}/...`
3. Create a [Personal access token](https://www.figma.com/settings) with `file_content:read` and `file_variables:write` (variables need **Figma Enterprise**).
4. In the project root:

```bash
cp .env.example .env
# Edit .env with your token and file key
npm run figma:sync
```

Or one-shot:

```bash
FIGMA_ACCESS_TOKEN=figd_xxx FIGMA_FILE_KEY=your_key npm run figma:sync
```

**Security:** Do not commit `.env`. Rotate the token if it was shared in chat.

**Without Enterprise:** Use **Tokens Studio** with `figma-export/design-tokens.json` instead of `figma:sync`.

---

## What we did **not** do (without your API)

- No file was created on figma.com automatically
- Full frames/components still need Figma UI or Figma MCP + manual polish
