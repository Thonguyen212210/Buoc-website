# Bước — Design System

> **Bước** *(/bɨək̚/ — Vietnamese for "step")* is a non-profit **crowdfunding platform** for a social summer-camp project that brings extracurricular activities and life skills to middle/high-school students (ages 13–18) in Vietnam's Central Highlands (**Tây Nguyên**).
>
> *Tagline:* **"Hành trình vạn dặm bắt đầu từ một bước chân"** — *A journey of a thousand miles begins with a single step.*

This repository is the design system: brand tokens, fonts, reusable React components, foundation specimen cards, and a full crowdfunding-website UI kit. A compiler bundles the components into `_ds_bundle.js` and indexes the tokens automatically — **do not** hand-edit `_ds_bundle.js`, `_ds_manifest.json`, or `_adherence.oxlintrc.json`.

---

## Project context

- **Who it serves:** học sinh cấp 2 (13–18 tuổi) ở Tây Nguyên — students with little access to extracurricular programs or social projects.
- **What it funds:** a two-phase program.
  - **Phase 1 — Tập huấn:** skills training (critical thinking / *tư duy phản biện*, learning-how-to-learn, intro to AI).
  - **Phase 2 — Trại hè:** a 4-day / 3-night summer camp where students learn and practice together.
- **The goal:** raise **5.000.000 VNĐ** to cover activities & equipment and meals for campers, distributed as **50%–100% scholarships**.

**Source materials provided by the client:** three brand images only — the logo wordmark (`uploads/IMG_5628.PNG`), the logo with handwritten tagline (`uploads/IMG_5629.PNG`), and the starry-night key art (`uploads/IMG_5650.PNG`). There was **no codebase, Figma file, or existing website** — the website concept and component system here were designed from the brand visuals up. Copies live in `assets/`.

---

## CONTENT FUNDAMENTALS

The product is **in Vietnamese**, with full diacritics. Copy is **warm, hopeful, and gentle** — never corporate, never guilt-trippy.

- **Voice:** speaks *to* the donor as a partner — collective and inviting ("Cùng Bước…", "Đồng hành cùng các em"). The beneficiaries are always **"các em"** (the kids) — affectionate, never clinical ("đối tượng hưởng lợi" only appears in internal docs).
- **Tone:** poetic but concrete. Emotional headlines pair with transparent specifics. e.g. headline *"Mỗi bước chân hôm nay, một tương lai rộng mở"* sits beside hard facts *"5.000.000₫ được dùng minh bạch"*.
- **Tagline & motif:** the "bước / step / journey" metaphor recurs ("một bước của bạn, vạn dặm của các em"). The signature line is set in the **handwritten script** font.
- **Casing:** Sentence case for body and most headlines. **No ALL-CAPS** except tiny overline/eyebrow labels (tracked-out, e.g. `VÌ SAO CÓ BƯỚC?`). The wordmark "BƯỚC" is uppercase only as a logo.
- **Numbers / currency:** Vietnamese formatting — `5.000.000₫` (period thousands separator, `₫` suffix or "VNĐ"). Always concrete amounts tied to impact ("200.000₫ = một suất ăn & dụng cụ cho 4 ngày trại").
- **Emoji:** **not used.** Warmth comes from the script font, the doodle motifs, and the gold/purple palette — not emoji.
- **Buttons / CTAs:** action-first and human — "Quyên góp ngay", "Đồng hành cùng các em", "Tặng một suất", "Cùng góp một bước". Avoid generic "Submit/Gửi".

---

## VISUAL FOUNDATIONS

A **dreamy, magical, hopeful** identity — a starlit night sky giving way to warm dawn. Premium and editorial, but soft and youthful.

- **Color:** deep royal-violet **purple** (`--purple-700 #603078`, the logo color) is primary; warm **butter cream / gold** (`--cream-300 #FFF0A8`) is the accent and the single hero-CTA color. Backgrounds are **warm paper** (`--paper-200`), never stark white. Text is a near-black **plum ink** (`--ink-900`), never pure `#000`. Full scales in `tokens/colors.css`.
- **Type:** high-contrast elegant serif **Playfair Display** for display/headlines (echoes the logo); **Be Vietnam Pro** (Vietnamese-native) for all UI & body; **Dancing Script** for occasional handwritten accents (taglines, pull quotes). See *Substitutions* below.
- **Backgrounds:** the hero, footer, and final CTA use the **starry-night key art** (`assets/bg-starry-night.png`) — a purple gradient sky with cream stars, hand-drawn doodles (hearts, planets, orbits, sparkles), and a warm cream glow at the bottom edge. Over photos/art, a purple scrim (`rgba(42,15,61,…)`) keeps text legible. Light sections use flat warm paper — **no busy patterns** on content areas.
- **Gradients:** used deliberately, not decoratively — `--gradient-night` (radial purple sky) for dark sections, `--gradient-gold` for the primary accent button and progress fill, `--gradient-dawn` for transitions. **No** generic blue-purple SaaS gradients.
- **Corner radii:** soft and friendly — cards `--radius-md (16px)`, large panels `24–32px`, all buttons/chips/progress are fully **pill** (`--radius-pill`). Nothing sharp-cornered.
- **Cards:** warm-paper fill, 1px hairline border (`--border-subtle`), soft shadow `--shadow-sm`; on hover (when interactive) they lift `translateY(-3px)` to `--shadow-lg`. A `dark` card variant uses the night-sky gradient with light text. An `accent` variant is cream.
- **Shadows:** warm, **purple-tinted**, soft and diffuse (never neutral-gray, never harsh). Scale `xs→lg` in `tokens/spacing.css`. Focus rings are a soft **gold glow** (`--shadow-glow`).
- **Motion:** gentle. `--ease-out` (settle) for most transitions ~240ms; a playful `--ease-bounce` reserved for small celebratory moments. Hover = lift + slightly darker fill; **press = shrink** (`scale(0.97)`). No aggressive or infinite animations.
- **Borders:** hairline `1px` on light; `1.5–2px` for inputs, tags, and selection states (which fill purple when active). On dark, borders are translucent gold (`--border-on-dark`).
- **Imagery vibe:** warm, dreamy, slightly hazy; purple-to-cream tonality, soft glow, hand-drawn doodle overlays. Real student/camp photography should be warm and candid (placeholders/avatars stand in here — see Caveats).
- **Layout:** generous whitespace, `--container-max 1200px`, sticky transparent-over-hero header that turns to frosted paper on scroll. A signature move: a **progress card that floats and overlaps** the hero/next section boundary.

---

## ICONOGRAPHY

- **System:** a curated **Lucide-style** line-icon set (2px stroke, round caps/joins, 24×24 grid) implemented in `ui_kits/website/Icons.jsx` as `<BcIcon name="…" />`. Chosen because no icon set shipped with the brand; Lucide's soft rounded geometry matches the friendly, rounded brand.
- **Usage:** outline (not filled) icons, sized 16–26px inline with text; tinted with `currentColor` so they inherit purple/cream/semantic context. Common names: `heart`, `handHeart`, `gift`, `tent`, `bookOpen`, `lightbulb`, `users`, `target`, `sparkles`, `mapPin`, `calendar`, `checkCircle`, `share`, `arrowRight`.
- **Decorative doodles** (stars, hearts, planets, orbits, sparkles) come from the **key-art image**, not icons — don't redraw them as SVG; reuse `assets/bg-starry-night.png` or crops of it.
- **Emoji / unicode icons:** not used. The Vietnamese đồng sign `₫` is used as a currency glyph in text and input adornments.
- **Substitution flag:** `BcIcon` is a hand-built Lucide-*style* set, not the official Lucide package. Swap for the real Lucide/Heroicons (or the brand's own icons) when available — keep the 2px-round line style.

---

## FONT SUBSTITUTIONS  ⚠️ please confirm

The logo wordmark and the handwritten tagline are **custom/branded lettering** — no font files were provided. The running-text families below are the closest **Google Fonts** matches (all load the `vietnamese` subset for correct diacritics):

| Role | Used here | Matches | Action needed |
|------|-----------|---------|---------------|
| Display serif | **Playfair Display** | the elegant high-contrast serif of the BƯỚC wordmark | confirm or supply the real display font |
| UI / body | **Be Vietnam Pro** | n/a — chosen for native Vietnamese support | likely keep |
| Script accent | **Dancing Script** | the handwritten tagline | supply the real handwriting font if brand-critical |

Fonts load via Google Fonts `@import` in `tokens/fonts.css` (needs internet). If you want them self-hosted/offline, send the `.woff2` files and we'll add `@font-face` rules.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (consumers link this only); `@import`s all token files.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills-compatible entry for downloading & using this system.

**`tokens/`** — `fonts.css` · `colors.css` · `typography.css` · `spacing.css`

**`assets/`** — `logo-buoc.png` (wordmark) · `logo-buoc-tagline.png` (with tagline) · `logo-buoc-cream.png` (cream knockout for dark bg) · `bg-starry-night.png` (key art)

**`components/`** (React primitives → `window.BCDesignSystem_b342dd`)
- `core/` — **Button**, **IconButton**, **Badge**, **Tag**, **Avatar**
- `forms/` — **Input**
- `campaign/` — **Card**, **ProgressBar**, **Stat**

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

**`ui_kits/website/`** — the **Bước crowdfunding website** kit: `index.html` (interactive: landing ⇄ donor wall + 3-step donate overlay), `Header.jsx`, `HomeScreen.jsx`, `DonorsScreen.jsx`, `DonateScreen.jsx`, `Footer.jsx`, `Icons.jsx`.

> **Namespace:** components are exposed at `window.BCDesignSystem_b342dd`. In card/kit HTML, load `_ds_bundle.js` then `const { Button, Card, … } = window.BCDesignSystem_b342dd`.
