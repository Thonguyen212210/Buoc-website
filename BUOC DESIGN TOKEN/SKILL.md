---
name: buoc-design
description: Use this skill to generate well-branded interfaces and assets for Bước — a Vietnamese non-profit crowdfunding platform for a social summer-camp project (life-skills training + summer camp for students in the Central Highlands). Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping or production. Brand is dreamy starry-night purple + butter cream, warm and hopeful, Vietnamese-first.
user-invocable: true
---

# Bước Design System

Read **README.md** first — it covers project context, content fundamentals (Vietnamese voice & tone), visual foundations, iconography, and the file index. Then explore the other files as needed.

## Where things are
- **Tokens:** `styles.css` (entry) → `tokens/colors.css`, `typography.css`, `spacing.css`, `fonts.css`. Use the CSS custom properties (`--purple-700`, `--cream-300`, `--font-display`, `--radius-pill`, `--shadow-sm`, …) — don't hardcode hex.
- **Assets:** `assets/` — logo (light/cream/tagline variants) and the starry-night key art. Copy these out; never redraw them.
- **Components:** `components/**` — React primitives (Button, IconButton, Badge, Tag, Avatar, Input, Card, ProgressBar, Stat), exposed at `window.BCDesignSystem_b342dd` via the compiled `_ds_bundle.js`. Each has a `.prompt.md` with usage.
- **Icons:** `ui_kits/website/Icons.jsx` — `<BcIcon name="…" />`, a Lucide-style 2px line set.
- **UI kit:** `ui_kits/website/` — the full crowdfunding website (landing, donor wall, donate flow) to copy patterns from.

## How to use
- **Visual artifacts** (slides, mocks, throwaway prototypes): copy the assets and tokens you need into a new folder and build static/self-contained HTML for the user to view. Link `styles.css` for tokens; load `_ds_bundle.js` + `const { … } = window.BCDesignSystem_b342dd` to use components, or just follow the visual rules by hand.
- **Production code:** read the rules here to design on-brand, and reuse the component contracts (`.d.ts`).

## Non-negotiables
- Vietnamese copy with full diacritics; warm, hopeful, collective voice ("Cùng Bước…", "các em"). **No emoji.**
- Primary purple `#603078`; gold `#FFF0A8` reserved for the single hero CTA & progress fills. Warm-paper backgrounds, never stark white.
- Soft pill/rounded shapes, purple-tinted soft shadows, gentle motion (hover lifts, press shrinks).
- Currency as `5.000.000₫` (VN formatting), tied to concrete impact.

If invoked without specifics, ask the user what they want to build, ask a few focused questions, then act as an expert Bước designer outputting HTML artifacts or production code as appropriate.
