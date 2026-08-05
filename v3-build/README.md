# v3-build — full draft site

A complete draft of the site (16 pages) built against the design system
([sands_design_system_v1_4.md](../v2-Claude/planning/sands_design_system_v1_4.md)) and the IA in
[sands_content_schedule_v2.md](../v2-Claude/planning/sands_content_schedule_v2.md). This is a
**draft for review**, not launch-ready.

## Run it

```bash
cd v3-build
python3 -m http.server 8123
```

Then open <http://localhost:8123/>. Pages use root-relative paths, so they need a server root
(opening the files directly with `file://` won't resolve CSS/links).

## What's here (16 pages)

| File | Page | Source |
|---|---|---|
| `index.html` | Home | brief `01` |
| `orientation/index.html` | Start Here (Orientation index) | brief `02` |
| `orientation/my-baby-died.html` | When your baby dies | brief `03` — copy DRAFT |
| `orientation/loss-long-ago.html` | My loss was a long time ago | content schedule — copy DRAFT |
| `orientation/pregnant-again.html` | I'm pregnant again | content schedule — copy DRAFT |
| `orientation/someone-i-love.html` | Someone I love has lost a baby | content schedule — copy DRAFT |
| `orientation/about.html` | About us | V0 (migrated close to verbatim) |
| `support/index.html` | Support index | brief `04` |
| `support/contact.html` | Contact us | brief `05` |
| `support/brochures.html` | Brochures & materials | brief `06` + V0 |
| `support/reading.html` | Library & books | brief `07` + V0 |
| `whats-on/index.html` | What's On | content schedule + V0 events |
| `support-our-work/index.html` | Support our work | content schedule + V0 donate |
| `for-professionals/index.html` | For health professionals | content schedule + V0 |
| `accessibility.html` | Accessibility | new — DRAFT |
| `privacy.html` | Privacy | new — DRAFT |
| `css/style.css` · `js/nav.js` | Design-system tokens + mobile nav | — |

Every internal link resolves and every page returns 200 (verified). Pages built from the content
schedule rather than a dedicated brief (the four Orientation children, What's On, Support Our Work,
For Health Professionals) are reasonable first drafts, not brief-backed — worth a structure review.

## Deliberately placeholder / not done

- **Fonts** linked from Google Fonts for the draft; design system says self-host woff2 at launch.
- **Real imagery in use** now: the Sands logo (header, every page) and book/brochure/newsletter
  covers (copied from `V0-current/` into `images/`). Still placeholder: the Home hero background
  and the orientation-index "illustration slot" per row — those need bespoke/generated art and
  dual bereaved-parent review first.
- **DRAFT copy** is flagged in-page on every page that has it: all four newly-written Orientation
  children (`my-baby-died`, `loss-long-ago`, `pregnant-again`, `someone-i-love`) plus the
  `accessibility` and `privacy` pages. None should ship without review.
- **What's On dates** are carried from 2025 as a worked example — the page has a visible note that the
  org must replace them each year and needs a named monthly owner.
- **Home "What's On" teaser** (§E) is structure-only placeholder (column 3 still tbc).
- **"Top 3" brochures/books** are placeholder picks — the org chooses the real ones.

## Issues found & fixed during the first audit pass

1. Dead-space void between hero and doorways (hero was over-tall) — tightened.
2. Active-state CTA rendered violet-on-violet (invisible label) on the current page — gave the active
   CTA its own treatment.
3. Nav CTA label was ink-on-violet (~1.9:1, fails AA) via a specificity collision — restored white.
4. Mobile menu was clipped off the right edge (wrong positioning context) — anchored to the masthead.

## Known open items for the audit

- **Home now uses the shared header** (logo + demoted "For health professionals" link + nav), so it
  gets the same working mobile hamburger as every other page — the earlier "no mobile nav on Home"
  gap is resolved. The bespoke hero-with-embedded-nav from the 01-home brief was dropped because the
  real logo is dark-on-transparent and can't sit on the dark hero; header (on paper) and hero (a
  contained block) are now separate. Worth confirming that's the direction you want.
- **Support jump-to nav** now has an "IN THIS PAGE" eyebrow and more spacing. Still a row of
  terracotta links — check against the "terracotta is rationed to actions" rule; it may still be
  over-using the accent.
- Prose-measure, spacing rhythm, and the sombre-violet vs. lighter-violet call are all still open —
  that's what this slice is for.
