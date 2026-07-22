# Component specs — Smart Waste Management

Build these as **Figma components** with variants where noted. Source: `src/components/` and `src/App.css`.

---

## Sidebar (`Sidebar.tsx`)

| Property | Value |
|----------|--------|
| Width | 260px fixed, full height |
| Background | `#052e26` (green/950) |
| Border right | 1px `rgba(255,255,255,0.06)` |

**Brand block** (padding 20px 20px 24px)

- Logo: 42×42, radius 10px, gradient 135° `#14b8a6` → `#0f766e`, recycle icon 22px white
- Title: “Smart Waste” 16/Bold white
- Subtitle: “Canberra · TCCS Pilot” 11px, white @ 55%

**Nav link** (default)

- Height ~40px, padding 10px 14px, radius 8px
- Icon 18px + label 14/Medium, color white @ 72%
- Gap icon–text: 12px

**Nav link (active)**

- Background `rgba(20,184,166,0.2)`
- Left accent bar 3px `#2dd4bf` (inset)
- Text white 100%

**Nav badge** (Public Reports)

- Min 20×20, bg `#dc2626`, white 11/Bold, pill

**Public CTA** (optional instance)

- Margin 12px, dashed border teal, text `#2dd4bf`

**Footer**

- “PILOT PROGRAM” caps badge, teal tint bg
- Footer text 12px white @ 45%

**Variants:** `state=default | active`, `badge=none | count`

---

## Header (`Header.tsx`)

| Property | Value |
|----------|--------|
| Height | 64px |
| Background | white |
| Border bottom | 1px `#e2e8f0` |
| Padding horizontal | 32px |

**Search**

- Max width 420px, height ~40px
- Bg `#f8fafc`, border `#e2e8f0`, radius 8px
- Icon left 14px, placeholder “Search bins, routes…”

**Icon button**

- 40×40, radius 8px, bell + notification dot (18px min, red)

**User block**

- Divider left 1px gray/200
- Avatar 36px circle, bg `#ccfbf1`, icon green/900
- Name 14/Semibold, role 12 Regular gray/600
- Logout icon hover → red/600

---

## Stat card (`StatCard.tsx`)

| Property | Value |
|----------|--------|
| Min width | ~flex in 6-col grid |
| Padding | 20px |
| Radius | 12px |
| Border | 1px `#e2e8f0` |
| Shadow | Shadow/Card |

**Anatomy**

- Icon tile 44×44, radius 10px, bg green/50 (or red/100 for alert)
- Label 13/Medium gray/600
- Value 28/Bold gray/950
- Sub 12px gray/500

**Variants:** `variant=default | alert | success`, `interactive=true | false`

---

## Bin table row (`BinTable.tsx`)

**Table header row**

- Bg `#f1f5f9`, text 12/Semibold ALL CAPS gray/600
- Cell padding 14px 20px

**Data row**

- Padding 14px 20px, border bottom `#f1f5f9`
- Hover bg `#f8fafc`
- Bin ID: 14/Semibold `#0d5c4b`, tabular nums

**Fill cell**

- Bar 6px height, min width 80px, radius pill
- Fill colors: critical `#dc2626`, warning `#d97706`, normal `#14b8a6`, offline `#cbd5e1`
- Percent label 13/Medium gray/700

**Variants:** `fill=critical | warning | normal | offline`

---

## Alert item (`AlertsList.tsx`)

| Property | Value |
|----------|--------|
| Layout | Horizontal, gap 14px |
| Padding vertical | 14px |
| Divider | 1px bottom gray/100 |

**Icon tile** 32×32, radius 8px

- High: bg `#fee2e2`, icon `#dc2626`
- Medium: amber bg/icon
- Low: gray bg/icon

**Text**

- Bin ID 12/Semibold green/900
- Message 14 Regular gray/800
- Time 12 gray/500

**Variants:** `severity=high | medium | low`

---

## Buttons (`App.css`)

| Variant | Background | Text | Border |
|---------|------------|------|--------|
| Primary | `#0d5c4b` | white | none |
| Primary hover | `#052e26` | white | — |
| Secondary | `#f0fdfa` | `#0d5c4b` | 1px `#ccfbf1` |
| Ghost | transparent | gray/600 | none |

- Padding 10px 16px, radius 8px, 14/Medium
- Icon gap 8px

**Component set:** `Button/Primary`, `Button/Secondary`, `Button/Ghost`, states Default + Hover + Disabled.

---

## Badges (`App.css`)

Pill: padding 3px 10px, 12/Medium, radius 999px.

| Variant | Background | Text |
|---------|------------|------|
| critical | `#fee2e2` | `#dc2626` |
| warning | `#fef3c7` | `#d97706` |
| normal | `#f0fdfa` | `#0f766e` |
| offline | `#f1f5f9` | `#64748b` |

---

## Card (generic)

- White fill, radius 12px, border `#e2e8f0`, Shadow/Card
- **Header:** flex space-between, padding 16px 20px, border bottom `#f1f5f9`, title 15/Semibold
- **Body:** padding 20px

---

## Live pill

- Inline flex, padding 6px 12px, 12/Semibold green/900
- Bg green/50, border 1px green/100, radius pill
- Dot 8px `#14b8a6` + pulse shadow

---

## Public alert banner

- Full width, padding 16px 20px, radius 12px
- Gradient `#fee2e2` → white, border red @ 25%
- Strong text `#dc2626`

---

## Map panel (`MapPanel.tsx`)

- Card wrapper; map area min height ~320px
- Placeholder: light gray grid or static map image
- Legend row for bin status colors (reuse badge colors)

---

## Auto-layout tips

1. **Manager shell:** Frame 1440×900 → H stack: Sidebar (fixed 260) + V stack (Header 64 + Content fill).
2. **Stats grid:** H stack, 6 equal children, gap 16, wrap to 3×2 below 1400px in code (optional responsive frame).
3. **Dashboard grids:** 1.4 : 1 and 1 : 1 splits, gap 20px.
4. Use **8px grid** and **12px** corner radius on all cards for consistency.
