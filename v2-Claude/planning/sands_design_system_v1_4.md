# Sands Auckland Central — Design System v1

**Status:** foundation doc, precedes any mockups. Written to brief a ChatGPT mood-board round, then Claude Design, then hand to Claude Code as CSS custom properties.

**How to read this:** §1–4 are decided tokens (colour, type, spacing, layout). §5 is the signature element. §6 is the emotional thesis; §7–8 are tone (copy + visual). §9 scopes what's deliberately excluded. §10 is a copy-pasteable `:root` block. Anything under an "exploratory" heading is a hypothesis to test in real layout, not a commitment.

*(Note on versioning: "v1" in this filename = the first full design system. Earlier throwaway prototype work is referred to below as "the prototype," never "v1," to avoid collision.)*

---

## Where this comes from — a correction

The earlier prototype used an invented palette loosely themed on Baby Loss Awareness Week (blue/pink/purple). **That was not the org's actual brand** — it was a substitution, never checked against source.

This corrects that. The hex codes below are pulled directly from `V0-current/assets/support-online_files/style.css` — the real, coded CSS of the live WordPress theme. These are the actual brand colours Sands Auckland Central has used in production.

| Hex | Role in old site | Character |
|---|---|---|
| `#472f92` | Headings, active nav state, primary button, top border accent | Deep violet-blue — the true primary |
| `#b19aca` | Secondary heading colour, lighter purple variant | Softer violet |
| `#6652a4` / `#806fb4` | Button gradient stops | Mid-tone violet steps |
| `#e5976a` | Link colour, active menu item | Warm terracotta-orange |
| `#f37021` | Link hover | Saturated orange |

**Brand logic (inferred, worth naming so it's used deliberately):** a cool violet paired with a warm orange — not a single-hue palette, not the three-colour BLAW scheme. Violet carries weight and calm; orange carries warmth and action (it was the *link* colour — "go here, do this"). Worth preserving because it's a real, if unstated, piece of brand identity.

**Caution:** warm-terracotta-on-cream is close to a cluster AI design tools default to regardless of brief (near `#D97757` on cream `#F4F1EA` — Anthropic's own accent, so it reads as a tell). Because it's genuinely this org's colour, using it is fine — but "it looks distinctive" can't be the signal that we've used it deliberately. The disciplined roles below are what keep it from reading as generic.

---

## 1. Colour

**Brief: keep the two brand hues, expand each into a full tonal range so the palette can speak to more than "baby loss."** The site holds at least three emotional registers — grief/loss (Orientation, parts of Support), giving/action (Support Our Work, the help bar), and calm/neutral (everyday reading, Resources, What's On). Pinning one hue to one mood ("purple = sad, orange = happy") is both simplistic and untrue to how grief works, so the system leans instead on *dominance and restraint*: violet carries the site, terracotta is rationed to action, neutrals do most of the work.

All contrast ratios below are measured against `--paper` (`#FBFAF8`) and stated explicitly. Target: **WCAG 2.2 AA** — 4.5:1 for body text, 3:1 for large/bold text and non-text UI.

### Violet — primary. Steadiness, dignity, the org's own voice.
One continuous ramp, 100 (lightest) → 900 (darkest). No off-grid steps.
| Token | Hex | Contrast | Use |
|---|---|---|---|
| `--violet-100` | `#EDE9F5` | 1.1:1 | Tinted section backgrounds, card fills (background only) |
| `--violet-300` | `#b19aca` | 2.4:1 | Dividers on dark, tags, decorative only — never text on paper |
| `--violet-500` | `#6652a4` | 6.1:1 | Secondary buttons, hover states, secondary headings |
| `--violet-700` | `#472f92` | 9.6:1 | **Brand primary.** Headings, primary nav active state, primary buttons, focus ring |
| `--violet-800` | `#3A2678` | 11.6:1 | Darker/"somber lilac" option for heading & UI — see note below |
| `--violet-900` | `#2E1F5E` | 13.7:1 | Darkest — footer background, body text where extra weight is wanted |

*Somber-lilac note: a ChatGPT mood-board pass leaned into a darker, more sombre violet than the prototype's light lilac. That instinct is right — a baby-loss charity shouldn't default to bright, and a heavier violet reads as **held**, not heavy. Rather than invent an off-grid token for it, that direction is simply `--violet-800`, already on the ramp. To test the sombre direction, swap the dominant UI colour `--violet-700` → `--violet-800` globally and compare.*

### Terracotta — accent. Warmth, action, human contact.
*Rationed. Reserved for the help bar / phone number / primary calls-to-action — the site's "reach a person" colour, echoing its old role as the link colour. If terracotta appears on something that isn't a call to action, the system is being used wrong.*

**Contrast reality (stated honestly):** the true brand orange (`#e5976a`) and its hover (`#f37021`) both **fail AA as body text** (2.2:1 and 2.8:1). This is likely why the old site's links looked a little washed out. The fix is not to abandon the brand colour but to split the ramp: a darker step for anything text-sized, the true brand hexes reserved for fills/icons/large elements where 3:1 is the bar.
| Token | Hex | Contrast | Use |
|---|---|---|---|
| `--terracotta-100` | `#FBE9DE` | 1.1:1 | Tinted callout backgrounds (background only) |
| `--terracotta-400` | `#f37021` | 2.8:1 | **True brand hover hex** — fills / large decorative only, **never text** |
| `--terracotta-500` | `#e5976a` | 2.2:1 | **True brand hex** — button fills, icons, large accents, **never body text** |
| `--terracotta-700` | `#B85A2E` | 4.4:1 | CTA button hover; large/bold text only (AA-large) |
| `--terracotta-800` | `#A64F28` | 5.3:1 | **Text-safe.** Link colour, body-sized CTA text — passes AA |

### Neutrals — the everyday register. Where most of the site lives.
*Grief, giving and reading all need a calm, unforced backdrop. Neutrals carry the majority of page area; colour is the exception, not the wallpaper.*
| Token | Hex | Contrast | Use |
|---|---|---|---|
| `--ink` | `#22202A` | 15.4:1 | Body text |
| `--ink-soft` | `#5B5766` | 6.7:1 | Secondary text, captions, metadata |
| `--paper` | `#FBFAF8` | — | Page background |
| `--paper-alt` | `#F3F0EC` | — | Banded/alternating sections |
| `--rule` | `#DFDAD3` | — | Borders, hairlines |

### Functional (semantic, not decorative)
| Token | Hex | Contrast | Use |
|---|---|---|---|
| `--crisis` | `#B8433B` | 5.2:1 | **Only** for crisis-line content (Support Group A) — signals "urgent, different register." Never decorative. |
| `--focus` | `#472f92` | 9.6:1 | Focus ring colour (= `--violet-700`); pair with `--focus-width: 3px` and `--focus-offset: 2px` |

### Secondary palette — exploratory, not yet assigned a role
*Hypotheses to test in layout, not commitments. Promote what earns its place into the ramps above; discard the rest.*

**Muted sage/grey-green** — for sections that want to feel *quiet* rather than warm or dignified (candidates: Resources, What's On, procedural pages). Untested against any brand source.
| Token | Hex | Contrast | Note |
|---|---|---|---|
| `--sage-600` | `#5C6B5A` | 5.4:1 | Passes AA as text |
| `--sage-100` | `#EBEFE9` | — | Background tint |

**Warmer neutral (sand)** — to test whether the site wants one warm neutral beyond paper, softer than stark white, without adding a hue.
| Token | Hex | Note |
|---|---|---|
| `--sand-100` | `#F0E9DF` | Alternate section background, warmer than `--paper-alt` |
| `--sand-300` | `#DCC9AE` | Divider option warmer than `--rule` (decorative — low contrast, not for text separation that must be seen) |

**How to test this section:** in Claude Design, try (a) `--violet-700`→`--violet-800` globally for the sombre direction, and (b) one section (Resources or What's On) in the sage tone, to see whether a second hue family differentiates registers or just adds noise. Keep what works; delete the rest without ceremony.

---

## 2. Typography — open web fonts only

*Brief: full rethink; open web fonts only (no paid/proprietary licensing — a volunteer-run site has no budget for font licenses, and self-hosting an open font protects against unpredictable long-term hosting).*

**Two roles, deliberately not the "characterful serif display + neutral sans body" default** the frontend-design skill warns is over-used:

### Display / heading: **Fraunces**
Open source (SIL OFL), on Google Fonts. A warm, humanist "old-style" serif. It's a **variable font with a 100–900 weight axis** plus optical-size and softness axes, so one family covers a soft, gentle register (lighter weight, Orientation headings) *and* a firmer, confident one (heavier weight, Support Our Work / credibility) without switching typefaces. **Display face only — never body**: Fraunces is explicitly designed for display sizes and gets quirky ("wonk") at small sizes.

### Body / UI: **Public Sans**
Open source (SIL OFL, USWDS lineage), designed for clarity and accessibility at small sizes and in long-form reading — built for exactly this kind of high-stakes, must-be-legible public-service context. Reads plainly; doesn't compete with Fraunces.

| Token | Stack | Use |
|---|---|---|
| `--font-display` | `"Fraunces", Georgia, serif` | H1/H2, hero lines, pull quotes — **not** body |
| `--font-body` | `"Public Sans", -apple-system, "Segoe UI", sans-serif` | Body, nav, buttons, forms, captions |

**Weight logic:** Fraunces 300–400 for Orientation/Support (gentle), 600 for Support Our Work/credibility (confident) — one family, two postures. Public Sans 400 body, 600 for UI emphasis. All weights verified available on Google Fonts.

**Loading note for the builder:** self-host both (via `@fontsource` or downloaded woff2) rather than hotlinking Google Fonts — better privacy, no third-party dependency, and it survives if Google Fonts is ever blocked. Include a `size-adjust` fallback for Fraunces to minimise layout shift.

---

## 3. Spacing & type scale — 4-based

*Brief: a standard system, not the fluid clamp() scale the prototype used.*

Base unit **4px**; every value a multiple of 4, so no arbitrary one-offs.
| Token | Value | Use |
|---|---|---|
| `--space-1` | 4px | Icon-to-label gaps |
| `--space-2` | 8px | Inline gaps, tight padding |
| `--space-3` | 16px | Default padding, gap between related elements |
| `--space-4` | 24px | Card padding, small section gaps |
| `--space-5` | 32px | Component spacing |
| `--space-6` | 48px | Section padding (mobile) |
| `--space-7` | 64px | Section padding (desktop) |
| `--space-8` | 96px | Major section breaks |
| `--space-9` | 128px | Large hero breathing room (rare) |

**Type scale** (static steps, not fluid — matches the "standard system" brief):
| Token | Size | Line-height | Use |
|---|---|---|---|
| `--text-sm` | 14px | 1.5 | Captions, metadata, footer |
| `--text-base` | 16px | 1.65 | Body copy |
| `--text-lg` | 20px | 1.5 | Lead paragraphs, pull quotes |
| `--text-xl` | 28px | 1.3 | H3 |
| `--text-2xl` | 40px | 1.2 | H2 |
| `--text-3xl` | 56px | 1.1 | H1 / hero |

*Mobile note: `--text-3xl`/`--text-2xl` should step down one level below `--bp-md` (e.g. hero 56→40, H2 40→28) via a media query. Stated here rather than via clamp() to keep the scale explicit and editable.*

---

## 4. Layout — responsive width grid

*Brief: a responsive widths grid system.*

**Breakpoints:**
| Token | Min-width | Notes |
|---|---|---|
| `--bp-sm` | 480px | Large phones |
| `--bp-md` | 768px | Tablets — nav switches hamburger → full; type steps up |
| `--bp-lg` | 1024px | Small desktop |
| `--bp-xl` | 1280px | Standard desktop |

**Grid:**
- 12-column grid; `--gutter` 24px mobile / 32px ≥`--bp-md`.
- `--container-max: 1152px`, centred; side padding `--space-4` below `--bp-md`, `--space-5` above.
- **Prose measure** (`--measure: 42rem` ≈ 672px, ~68 chars): long-form Support/Orientation content is capped at this regardless of container width — grief content should never stretch full-width.
- Cards: `repeat(auto-fit, minmax(240px, 1fr))`, gap `--space-4`.

**Quality floor (non-negotiable, per accessibility priority):** responsive to 320px; visible keyboard focus everywhere (`--focus` ring, 3px, 2px offset); `prefers-reduced-motion` respected globally (see §5); all interactive targets ≥44×44px.

---

## 5. Signature element

The prototype used a "Wave of Light" ambient glow (slow pulse behind the homepage doorways). **Keep the concept, re-derive the colour**: it was an invented amber; under the real brand it should be **terracotta** — which also makes the metaphor honest, since the glow behind the doorways *is* an invitation to make contact, and terracotta is the "reach a person" colour.

Keep: slow, ambient, confined to the homepage doorways only, and **disabled under `prefers-reduced-motion`** (falls back to a static soft tint, no movement).

**Alternative on the table (from the mood-board):** a single-line-drawing heart-and-footprints motif (see §8). A continuous line is restrained by construction and more literally tied to baby loss than an abstract glow — possibly the stronger choice, but it needs the same dual bereaved-parent review as any baby-loss-specific imagery before replacing the glow.

**Spend boldness here and nowhere else.** Whichever wins, everything around it stays quiet and disciplined.

---

## 6. Emotional thesis — the *why* behind the tone rules

*Added after concept exploration. This is the single sentence the rest of §7–8 hangs on.*

**Continuity, not closure.** Most bereavement design implicitly helps people let go. Sands is the opposite: it helps a baby *continue to matter*. Parents are not expected to move on, heal, or forget — the grief continues because the love continues, and the relationship with the baby is permanent. Every tone and imagery decision below follows from this. It also explains decisions already made elsewhere: the "my loss was a long time ago" doorway (the door is open at year twenty because the relationship never ended), the recurring nature of remembrance, and the copy rules against minimising qualifiers and "moving on" language.

**One consequence worth stating for copy reviewers:** a baby lost to stillbirth has *two* anniversaries — the intended due date that never came, and the actual birth date (a stillborn baby is still *born*). Most of the world acknowledges neither. Copy in the remembrance and "long time ago" content can quietly recognise that both exist; doing so signals the site was built by people who actually know.

---

## 7. Copy tone of voice — derived from the real current-state content

*Sourced from `V0-current/content/*.md`, not invented. Whatever the old site's technical faults, its copy has a consistent, well-judged voice that should survive the redesign untouched — a new visual layer over a diluted voice would be a net loss.*

**Evidence, as written on the live site:**

> "Sands offers empathy and understanding. We are not counsellors but do importantly offer an opportunity to share experiences, talk and listen." — About Us

> "When a baby dies, it is so hard to think clearly, yet you are faced with many difficult decisions… these are some ideas shared by other bereaved parents who want you to know that you are not alone." — *The Next Few Days*

> "Nothing and no one could ever prepare you for the devastation that follows this experience." — *Fathers Grieve Too*

> "Remember that grieving is the NORMAL process for adjusting to the loss of someone we love." — *When a Baby Brother or Sister Dies*

> "When a grandchild dies, you have to cope with a double load — your own grief for the baby and the suffering of your own child." — *The Loss of a Grandchild*

**Rules drawn from these:**

1. **State the fact plainly before offering comfort.** "Your baby has died" precedes "you are not alone." Never lead with reassurance to avoid the reality.
2. **Name the specific difficulty, don't gesture at "a hard time."** "Difficult decisions," "the devastation that follows," "a double load" — concrete, not euphemistic. The opposite of typical charity soft-abstraction.
3. **Say what Sands is *not*, as often as what it is.** "We are not counsellors." Sets honest expectations; no overclaiming.
4. **First person plural, from lived experience.** "We are not counsellors," not "Sands volunteers are…". The org speaks *as* bereaved parents, not *about* them.
5. **Permission given as fact, not encouragement.** "Grieving is the NORMAL process" — asserted, not cheerled.
6. **No minimising qualifiers.** Never "just," "simply," "small," "a little" applied to the loss (the tagline "a little life, not a little loss" reserves "little" for the baby's life, tenderly — never for the grief).

**Rule for new copy (incl. the ⚠ DRAFT sections in the content schedule):** match this register. "When your baby dies" already fits — it names the event plainly rather than reaching for a softer euphemism.

**Candidate recurring phrase (⚠ DRAFT, needs review):** *"We remember too"* — proposed as a small reassurance that could recur in quiet places (near remembrance content, above testimonials, on About). It expresses the continuity thesis well, but it makes a claim on Sands' behalf (that the org itself remembers each baby), so the volunteers should confirm they want to make it. It is an *addition*, never a replacement for the tagline "a little life, not a little loss."

---

## 8. Visual tone — from current-state screenshots + the mood-board pass

*Two real inputs: the current WordPress site (theme CSS + screenshots in `V0-current/content/*.png`), and the mood-board reviewed together. Neither copied wholesale.*

### The governing imagery rule: two registers of remembrance

*The most important principle here, drawn from how bereaved parents actually use symbols.* There are two registers, and **the site operates only in the public one:**

- **Private artifacts** — the ink footprints taken in hospital, the "born sleeping" photo albums, the ink kits. These are sacred and hidden, shown only to the deeply trusted. **The site must never depict or simulate them.** Even a "footprints in wet sand" image must read as *symbol* (a trace, an absence), never as a re-creation of the private footprint a parent keeps at home.
- **Public coded symbols** — light, candles, butterflies, stars, the annual remembrance quilt. A shared language that lets a parent signal their loss *without having to explain it*. The site may evoke these.

The line between recognition and intrusion runs exactly here. Evoke the public symbols; never simulate the private artifacts.

### The framing test for contested symbols

Butterflies, rainbows, stars and candles are contested — they can help or harm depending entirely on framing:

> **Symbols of the baby's continuing presence — yes. Symbols of the parent's recovery or replacement — no.**

A butterfly as "the spirit visited" (synchronicity — parents commonly describe a butterfly or a rainbow-without-rain arriving at an anniversary or worst moment) expresses continuity and is welcome. The *same* butterfly as "transformation, you'll emerge renewed," or a rainbow as the "rainbow baby / it gets better" trope, is the closure narrative and must be avoided. Candles specifically carry real weight: not generic memorial decor but *an act of light — a beacon, an act of active remembrance against a world that wants the parent to forget.*

### Motifs and roles (so they don't compete)

- **Light → photography only** (window light, candlelight, silhouettes, translucency). Restrained; used in heroes, not as decorative UI.
- **Seam / stitch texture (quilt-derived) → optional structural background**, if a subtle background motif is wanted. Kept as *construction* (the quiet connective tissue between sections) rather than *content*, so it never competes with light photography. One motif among several — explicitly **not** the site's organising theme.
- **Icon-in-circle** for "what to expect" cards (phone / people / book) — a visual anchor needing no photography.

### Keep / leave behind

**Keep from current state:** the violet + terracotta brand pairing (§1); a plain, unornamented layout (the old theme is dated but not busy — it doesn't fight the content).

**Leave behind:** low-res, clearly-2014 photography (filenames like `P1040555-700x442.jpg` show how ad hoc the old library was); dense, directory-like page furniture — the old pages *feel* like a directory, not a place of care.

**Do NOT adopt from the mood-board:** its 7-item nav and 4-equal-tile homepage contradict the content schedule's IA. Aesthetic ideas only.

### Emotional tone, stated for an art director

Quiet, dignified, warm, private, respectful, calm. **Not** sad, clinical, childish, sentimental, overtly religious, or inspirational-poster. Note "hopeful" is deliberately *secondary* to **dignity** and **continuity** — the comfort on offer is "your baby still matters," not "things will get better," and a hope register edges toward the "move on" narrative the thesis rejects. Any regrowth/renewal theme, if used at all, stays at the "when you're ready" / support end of the range — never near the acute entry points, where "regrowth" can read as "get over it."

### Newly possible since 2014 — used deliberately, with a constraint

AI image generation makes consistent, purpose-made illustration possible instead of depending on whatever photos exist. This document includes **no generated sample** (no image tool was available in this session), so what follows is a *brief*, not a delivered asset:
- **Style:** single-line/minimal line-drawing in `--violet-700`/`--violet-800` on paper — not full-colour, not photorealistic, no mascot/character style.
- **Subject — presence through absence ("someone was here"):** traces left behind, an impression, light entering an empty room, a candle still burning — evidence a life mattered, never the life itself.
- **Never generate:** living babies, children, families with children, nursery items, toys, pregnancy clichés; any image implying a specific baby, gestation, or death; or anything that simulates the private artifacts above. Stay abstract and universal — the site serves any gestation and any circumstance.
- **Review:** any generated illustration goes through the same dual bereaved-parent review as copy before shipping. A wrong image hurts pre-consciously, in a way a wrong sentence usually doesn't.

---

## 9. What this doc deliberately does NOT do
- **Layouts** — that's the mood-board / Claude Design step next.
- **Page-internal structure** — `sands_content_schedule_v2.md` governs IA and content; this governs tokens and tone.
- **Dark mode** — out of scope for launch; the token structure (`:root` custom properties) makes it addable later without refactor.
- **A generated illustration sample** — §8 is a brief, not an asset.

---

## 10. Consolidated `:root` — hand to Claude Code

*Copy-pasteable starting point. Exploratory (§ secondary) tokens included but commented, since they're unproven.*

```css
:root {
  /* Violet — primary */
  --violet-100: #EDE9F5;
  --violet-300: #b19aca;
  --violet-500: #6652a4;
  --violet-700: #472f92;   /* brand primary */
  --violet-800: #3A2678;   /* sombre option */
  --violet-900: #2E1F5E;

  /* Terracotta — accent (rationed to actions) */
  --terracotta-100: #FBE9DE;
  --terracotta-400: #f37021;  /* brand hex — fills/large only, never text */
  --terracotta-500: #e5976a;  /* brand hex — fills/large only, never text */
  --terracotta-700: #B85A2E;  /* large/bold text only */
  --terracotta-800: #A64F28;  /* text-safe: links, CTA text */

  /* Neutrals */
  --ink: #22202A;
  --ink-soft: #5B5766;
  --paper: #FBFAF8;
  --paper-alt: #F3F0EC;
  --rule: #DFDAD3;

  /* Functional */
  --crisis: #B8433B;
  --focus: var(--violet-700);
  --focus-width: 3px;
  --focus-offset: 2px;

  /* Type */
  --font-display: "Fraunces", Georgia, serif;
  --font-body: "Public Sans", -apple-system, "Segoe UI", sans-serif;
  --text-sm: 0.875rem;   /* 14 */
  --text-base: 1rem;     /* 16 */
  --text-lg: 1.25rem;    /* 20 */
  --text-xl: 1.75rem;    /* 28 */
  --text-2xl: 2.5rem;    /* 40 */
  --text-3xl: 3.5rem;    /* 56 */

  /* Spacing (4-based) */
  --space-1: 4px;  --space-2: 8px;  --space-3: 16px;
  --space-4: 24px; --space-5: 32px; --space-6: 48px;
  --space-7: 64px; --space-8: 96px; --space-9: 128px;

  /* Layout */
  --gutter: 24px;
  --container-max: 1152px;
  --measure: 42rem;

  /* Exploratory — test before promoting (see §1)
  --sage-600: #5C6B5A; --sage-100: #EBEFE9;
  --sand-100: #F0E9DF; --sand-300: #DCC9AE;
  */
}

@media (min-width: 768px) { :root { --gutter: 32px; } }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    transition-duration: 0.001ms !important;
  }
}
```

---

## Next steps (as agreed)
1. **ChatGPT mood-board round** — feed this doc + the logo for divergent *concept* directions (mood only, not build-ready).
2. **Claude Design** — build real coded layouts against these tokens; run the two §1 experiments (sombre violet, sage section).
3. **Claude Code** — final build from §10's `:root` + `sands_content_schedule_v2.md` for IA/content.
