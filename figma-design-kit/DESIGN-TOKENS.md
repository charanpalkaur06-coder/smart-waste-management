# Design tokens — Smart Waste Management

Use these values when creating **Color styles** and **Text styles** in a new Figma file. Canonical JSON: [`design-tokens.json`](./design-tokens.json) (also copied to [`../figma-export/design-tokens.json`](../figma-export/design-tokens.json)).

**Branding:** File and cover title = **Smart Waste Management** (not “Wasre” or “Smart Wasre”).

---

## Colors

### Brand greens

| Token | Hex | Usage |
|-------|-----|--------|
| green/950 | `#052e26` | Sidebar background |
| green/900 | `#0d5c4b` | Primary buttons, bin IDs |
| green/800 | `#0f766e` | Links, badge text |
| green/600 | `#14b8a6` | Accent, focus ring, live dot |
| green/500 | `#2dd4bf` | Sidebar active indicator |
| green/100 | `#ccfbf1` | Avatar background |
| green/50 | `#f0fdfa` | Secondary buttons, icon tiles |

### Neutrals

| Token | Hex | Usage |
|-------|-----|--------|
| gray/950 | `#0f1419` | H1, stat numbers |
| gray/900 | `#1a2332` | Body |
| gray/600 | `#64748b` | Labels, subtitles |
| gray/500 | `#94a3b8` | Placeholders |
| gray/200 | `#e2e8f0` | Card borders |
| gray/100 | `#f1f5f9` | Table header bg |
| gray/50 | `#f8fafc` | Page background |
| surface | `#ffffff` | Cards, header |

### Semantic

| Token | Hex | Usage |
|-------|-----|--------|
| danger | `#dc2626` | Critical badges, alerts |
| danger-bg | `#fee2e2` | Alert stat card, banner |
| warning | `#d97706` | Warning badges |
| warning-bg | `#fef3c7` | Export banner (screenshot mode) |

---

## Typography

**Font:** [Inter](https://fonts.google.com/specimen/Inter) (Regular 400, Medium 500, Semibold 600, Bold 700).

| Style name (Figma) | Size | Weight | Notes |
|--------------------|------|--------|--------|
| Page/Title | 24 | Bold | Letter spacing −2% |
| Card/Title | 15 | Semibold | Card headers |
| Body/Default | 15 | Regular | Page subtitles |
| Body/Small | 14 | Regular / Medium | Table cells, buttons |
| Label/Caps | 12 | Semibold | Table headers, ALL CAPS +4% tracking |
| Stat/Value | 28 | Bold | KPI numbers, −3% tracking |
| Sidebar/Title | 16 | Bold | “Smart Waste” |
| Sidebar/Link | 14 | Medium | Nav items |
| Badge | 12 | Medium | Pills |

**Line height:** 150% for body; 110% for stat values.

---

## Spacing scale

Base unit **4px**.

| Token | px | Typical use |
|-------|-----|-------------|
| 1 | 4 | Tight gaps |
| 2 | 8 | Icon gaps, alert padding |
| 3 | 12 | Nav item padding vertical |
| 4 | 16 | Card gaps, grid |
| 5 | 20 | Card padding |
| 6 | 24 | Page padding, section gaps |
| 8 | 32 | Page horizontal padding |

**Layout constants:** Sidebar **260px**, header **64px**, page content padding **24px 32px**.

---

## Radii

| Token | px |
|-------|-----|
| radius/sm | 8 |
| radius/md | 10 |
| radius/lg | 12 |
| pill | 999 |

---

## Shadows (Figma effects)

**Shadow/Card**

- Y: 1, blur: 3, `#0F1419` @ 6%
- Y: 4, blur: 12, `#0F1419` @ 4%

**Shadow/Card-LG** (hover)

- Y: 4, blur: 6, `#0F1419` @ 5%
- Y: 12, blur: 28, `#0F1419` @ 8%

**Focus ring** (search input): stroke or shadow `0 0 0 3px` teal @ 15% opacity.

---

## Frame sizes

| Device | W × H |
|--------|--------|
| Desktop (manager) | **1440 × 900** |
| Mobile (public, driver) | **390 × 844** |

Login: use **1440 × 900** for the wide split layout; optional **390 × 844** frame for a phone-only login reference.
