# Sands Auckland Central — Design System v1

**Status:** foundation doc, precedes any mockups. Written to brief a ChatGPT mood-board round, then Claude Design, then hand to Claude Code as CSS custom properties.

---

## Where this comes from — a correction

Earlier prototype work (v1) used an invented palette loosely themed on Baby Loss Awareness Week (blue/pink/purple). **That was not the org's actual brand** — it was my own substitution, never checked against source.

This version corrects that. The hex codes below are pulled directly from `V0-current/assets/support-online_files/style.css` — the real, coded CSS of the live WordPress theme. These are the actual brand colours Sands Auckland Central has used in production.

| Hex | Role in old site | Character |
|---|---|---|
| `#472f92` | Headings, active nav state, primary button, top border accent | Deep violet-blue — the true primary |
| `#b19aca` | Secondary heading colour, lighter purple variant | Softer violet |
| `#6652a4` / `#806fb4` | Button gradient stops | Mid-tone violet steps |
| `#e5976a` | Link colour, active menu item | Warm terracotta-orange |
| `#f37021` | Link hover | Saturated orange |

**Brand logic (inferred, worth naming so it's used deliberately rather than accidentally):** a cool violet paired with a warm orange — not a single-hue palette, not the three-colour BLAW scheme. Violet carries weight and calm; orange carries warmth and action (it's the *link* colour — the colour of "go here, do this"). That pairing is worth preserving because it's a real, if unstated, piece of brand identity.

**Caution:** `#e5976a`/warm-terracotta-on-cream is close to a cluster AI design tools default to regardless of brief (near `#D97757` on warm cream `#F4F1EA`). Because it's genuinely this org's colour, that's fine — but it means we can't rely on "it looks distinctive" as a signal that we've used it deliberately. The palette expansion below is what keeps it from reading as generic.

---

## 1. Colour — expanded tonally

**Brief: keep the two brand hues, expand each into a full tonal range so the palette can speak to more than "baby loss."** The site now has at least three emotional registers to hold — grief/loss (Orientation, parts of Support), giving/support (Support Our Work, the help bar, active engagement), and calm/neutral (everyday reading, Resources, What's On). One hue pinned to one mood each avoids the trap of "purple = sad, orange = happy," which is both simplistic and not how grief actually works.

### Violet — primary. Steadiness, dignity, the org's own voice.
| Token | Hex | Use |
|---|---|---|
| `--violet-900` | `#2E1F5E` | Darkest — body text on light backgrounds where extra weight is wanted, footer background |
| `--violet-700` | `#472f92` | **Brand primary.** Headings, primary nav active state, primary buttons |
| `--violet-500` | `#6652a4` | Mid — secondary buttons, hover states |
| `--violet-300` | `#b19aca` | Light — tags, subtle backgrounds, dividers on dark |
| `--violet-100` | `#EDE9F5` | Lightest — tinted section backgrounds, card fills |

### Terracotta — accent. Warmth, action, human contact.
*Reserved principally for the help bar / phone number / primary calls-to-action — the site's "reach a person" colour — echoing its old role as the link/action colour.*

**Contrast check, done honestly:** the true brand orange (`#e5976a`) and its hover state (`#f37021`) both **fail WCAG AA as body-sized text on the paper background** (2.25:1 and 2.82:1 — need 4.5:1). This is presumably why the old site could get away with them: shorter link text, underlines, and different surrounding contexts can mask a marginal ratio, but we shouldn't repeat it knowingly. Rather than drop the brand colour, one darker step (`--terracotta-800`) is added *specifically for text use*; the true brand hex is kept for larger/bolder/background uses where contrast rules are more forgiving.

| Token | Hex | Use |
|---|---|---|
| `--terracotta-800` | `#A64F28` | **Text-safe.** Link colour, body-sized CTA text — passes AA (5.3:1) |
| `--terracotta-700` | `#B85A2E` | Hover/active state on CTA buttons; large/bold text only (4.4:1 — AA-large) |
| `--terracotta-500` | `#e5976a` | **True brand hex.** Button fills, icon colour, large decorative accents, backgrounds — never body text |
| `--terracotta-400` | `#f37021` | **True brand hex (hover).** Same restriction as above — fills/large elements only, never text |
| `--terracotta-100` | `#FBE9DE` | Lightest — tinted callout backgrounds |

### Neutrals — the everyday register. Where most of the site actually lives.
*Grief, giving and reading all need a calm, unforced backdrop. Neutrals carry the majority of page area; colour is the exception, not the wallpaper.*
| Token | Hex | Use |
|---|---|---|
| `--ink` | `#22202A` | Body text |
| `--ink-soft` | `#5B5766` | Secondary text, captions, metadata |
| `--paper` | `#FBFAF8` | Page background |
| `--paper-alt` | `#F3F0EC` | Banded/alternating sections |
| `--rule` | `#DFDAD3` | Borders, hairlines |

### Functional (semantic, not decorative)
| Token | Hex | Use |
|---|---|---|
| `--crisis` | `#B8433B` | Reserved *only* for crisis-line content (Support Group A) — a third, rare hue signalling "urgent, different register." Never used decoratively. |
| `--focus` | `#472f92` (= violet-700) | Focus ring — reuses brand primary rather than introducing a new colour |

**Rule for whoever applies this:** violet dominates identity moments (headers, headings, primary nav). Terracotta is *reserved* for contact/action — the phone number, the help bar, "get in touch" buttons — so it keeps the meaning it had in the old site (link = go do something) rather than becoming generic decoration. Use `--terracotta-800` for any actual link/body text; reserve the true brand hexes (`--terracotta-500`/`--terracotta-400`) for fills, icons and large display type where their contrast is adequate. If terracotta starts appearing on things that aren't calls to action, that's a sign the system is being used wrong.

---

## 2. Typography — open web fonts only, redone from scratch

*Brief: fonts need a full rethink; must be open web fonts (no paid/proprietary licensing — matters for a volunteer-run site with no ongoing budget for font licenses).*

**Two roles, deliberately not the "characterful serif display + neutral sans body" default** (see frontend-design skill's warning about templated pairings) — instead:

### Display / heading face: **Fraunces**
Open source (SIL OFL), Google Fonts. A warm, slightly humanist serif with real optical weight range — capable of both a soft, gentle register (light weight, for Orientation headings) and a firmer, more confident one (heavier weight, for Support Our Work, credibility content) *from the same family*. That range matters: this site needs headings that can be tender in one section and steady in another without switching typefaces and losing cohesion.

### Body / UI face: **Public Sans**
Open source (SIL OFL / US Government open license via USWDS lineage, mirrored on Google Fonts), designed explicitly for clarity and accessibility at small sizes and in long-form reading — built for exactly this kind of high-stakes, must-be-legible civic/public-service context. Reads plainly and calmly; doesn't compete with Fraunces for attention.

*(Both fonts are genuinely open — no @font-face licensing risk, no per-seat cost, safe for a static site with unpredictable long-term hosting.)*

| Token | Face | Use |
|---|---|---|
| `--font-display` | `"Fraunces", Georgia, serif` | H1/H2, hero lines, pull quotes |
| `--font-body` | `"Public Sans", -apple-system, "Segoe UI", sans-serif` | Body copy, nav, buttons, forms, captions |

**Weight logic:** Fraunces at 300–400 for Orientation/Support (gentle), 600 for Support Our Work/credibility content (confident) — one family, two postures, rather than introducing a third face.

---

## 3. Spacing — standard 4/8/16 scale

*Brief: a standard system, not the fluid clamp() scale used in v1.*

Base unit: **4px.** Every spacing value is a multiple of 4, so nothing in the layout ever needs an arbitrary one-off value.

| Token | Value | Typical use |
|---|---|---|
| `--space-1` | 4px | Tightest — icon-to-label gaps |
| `--space-2` | 8px | Inline gaps, tight padding |
| `--space-3` | 16px | Base unit — default padding, gap between related elements |
| `--space-4` | 24px | Card padding, small section gaps |
| `--space-5` | 32px | Component spacing |
| `--space-6` | 48px | Section padding (mobile) |
| `--space-7` | 64px | Section padding (desktop) |
| `--space-8` | 96px | Major section breaks |
| `--space-9` | 128px | Rare — large hero breathing room |

**Type scale, paired to the same base-4 logic** (static steps, not fluid clamp — matches the "standard system" brief):

| Token | Size | Line-height | Use |
|---|---|---|---|
| `--text-sm` | 14px | 1.5 | Captions, metadata, footer |
| `--text-base` | 16px | 1.65 | Body copy |
| `--text-lg` | 20px | 1.5 | Lead paragraphs, pull quotes |
| `--text-xl` | 28px | 1.3 | H3 |
| `--text-2xl` | 40px | 1.2 | H2 |
| `--text-3xl` | 56px | 1.1 | H1 / hero |

---

## 4. Layout — responsive width grid

*Brief: a responsive widths grid system.*

**Breakpoints:**
| Name | Min-width | Notes |
|---|---|---|
| `--bp-sm` | 480px | Large phones |
| `--bp-md` | 768px | Tablets — nav switches from hamburger to full |
| `--bp-lg` | 1024px | Small desktop |
| `--bp-xl` | 1280px | Standard desktop — max content width |

**Grid:**
- 12-column grid, `--gutter: 24px` (mobile) / `32px` (≥768px).
- **Max content width: 1152px** (`--container-max`), centred, with `--space-4` (24px) side padding below `--bp-md` and `--space-5` (32px) above it.
- **Prose measure** (body text columns — Support, Orientation long-form content): capped at **68 characters** (`--measure: 42rem` ≈ 672px) regardless of container width — long-form grief content should never stretch full-width, for readability.
- Cards/grids: `repeat(auto-fit, minmax(240px, 1fr))` — matches the base-4/8/16 spacing scale for gaps (`--space-4` typical gap).

---

## 5. Signature element — carried over, re-examined

v1 used a "Wave of Light" ambient glow (slow amber pulse behind the homepage doorways). Worth **keeping the concept but re-deriving the colour** — it was amber/candle before; under the corrected brand, the glow should logically be **terracotta** (the org's actual warmth/action colour), not an invented amber. This also resolves cleanly with the "terracotta = reach a person" rule above: the glow behind the doorways *is* an invitation to make contact, so the colour finally matches the meaning.

Keep: slow, ambient, `prefers-reduced-motion`-respecting, confined to the homepage doorways only — not decoration elsewhere.

---

## 6. What this doc deliberately does NOT do

- Does not draw layouts — that's the mood-board/Claude Design step next.
- Does not finalise the doorway page's internal layout — content schedule v2 governs structure; this governs tokens.
- Does not touch copy — see `sands_content_schedule_v2.md` for the "When your baby dies" decision and outstanding draft content.

---

## Next steps (as agreed)

1. **ChatGPT mood-board round** — feed this doc + the logo for quick divergent *concept* directions (mood/feel only, not build-ready).
2. **Claude Design** — take the direction that lands, build real coded layouts against the tokens above.
3. **Claude Code** — final build, consuming this doc's tokens directly as CSS custom properties + `sands_content_schedule_v2.md` as the IA/content spec.
