# Page 1 — Home

**Status:** draft, for review.
**Template:** bespoke — does **not** use the Page 0 standard header/nav. Shares the Page 0 global footer unchanged.
**Job of this page (per content schedule):** receive and direct. Not marketing. No dates, no event promotion, no donation ask. Reads the same in week one of grief as in year ten.

---

## A. Hero block (full-bleed, nav embedded)

### A1. Background
- Full-bleed image or video, behind everything in this block.
- **v1: single static placeholder image.** Not a rotating set yet — build the slot so a rotating set (3–4 images) or a video asset can drop in later without restructuring.
- Mood direction (not a spec, just intent for whoever sources/generates the asset): intimate, private, ordinary moments shot from a distance or from behind — privacy respected, open to interpretation. E.g. a candle's reflection in a window, a figure at a kitchen sink seen from behind, a window with soft outside movement. Nothing posed, nothing that reads as stock-photo grief.
- If video: low-res, blurred, soft ambient motion only (pan/drift, not action). Must respect `prefers-reduced-motion` — falls back to the static frame.

### A2. Logo
- Left aligned, sits transparent/light over the background image, top of the block.

### A3. Utility tab — "For Health Professionals"
- Present on Home, same as standard pages (Page 0, row 1) — but overlaid on the full-bleed imagery at the very top rather than sitting in a plain utility bar.
- Right-aligned, subtle, same treatment weight as the standard template's hanging tab.

### A4. Navigation — embedded in hero, not a standard bar
- Same 4 items as the standard template's nav (Start Here · Support · What's On · Support Our Work), styled to sit over the image rather than in a conventional bar.
- **Must still read as navigation** — not decorative type. Full keyboard reachability, visible focus state, sufficient contrast against the image (may need a scrim/gradient behind the nav row specifically, independent of the hero copy panel below).
- No "Home" item (consistent with standard nav — logo already does this job, and here there's no logo-click ambiguity since we're already home).

### A5. Hero content panel
- A contained panel, roughly 50% width, left-aligned within it, positioned over the background image with semi-transparency/scrim behind the text so it stays readable regardless of what's under it.
- Contents, top to bottom:
  1. **H1** — hero line. Content schedule copy: *"A little life, not a little loss."*
  2. **Supporting H2 / line** — one line of reassurance. Content schedule copy (from V0 home): *"…supporting families…who have experienced the death of a baby at any gestation, and under any circumstance."*
  3. **Call to action** — wording **"When your baby dies"** (confirmed final, no longer draft — see chat decision log). Links to `orientation/my-baby-died`. This is the single most prominent interactive element in the block, and the page's primary link target — the newly-bereaved parent is the majority-case first-time visitor, so this earns the hero rather than sharing it with the other three audiences.

---

## B. Background transition (imagery → page background)

- The full-bleed hero image is **not** pinned/parallaxed — it scrolls normally with the page.
- A **bottom fade gradient** takes the image down into the site's default page background colour/texture. This gradient zone is where section C (content cards) sits — cards are legible against the gradient, not the raw photo.
- By the time the page reaches section D (welcome paragraph), the background has fully resolved to the plain page background — that block sits on flat background, off the image entirely.
- Card treatment (material note, not colour spec): simple, light-bordered containers, soft and understated — not heavy drop-shadow cards. Exact tokens tbc in design-system pass.

---

## C. Content cards block (below the hero, sits in the gradient zone)

*Three content cards, equal weight — the other three audiences not already covered by the hero CTA. No primacy problem to solve here since primacy now lives in the hero (section A5).*

- Layout: 3 equal columns.
- Cards, order per content schedule:
  - My loss was a long time ago → `orientation/loss-long-ago`
  - I'm pregnant again → `orientation/pregnant-again`
  - Someone I love has lost a baby → `orientation/someone-i-love`
- No hierarchy between these three — equal size, equal weight.

---

## D. Welcome paragraph block

- Single column, centred within the page container (not full-width — this is reading content, keep it inside the prose measure once that's set in the design-system pass).
- Sits on the plain page background (see section B) — fully off the hero image by this point.
- Content: V0 home copy, *"Pregnancy and childbirth are a time of expectation…"* — 4 short paragraphs, migrate verbatim.
- Quiet, no CTA, no imagery treatment.

---

## E. What's On teaser block — **placeholder, content tbc**

*New addition, deliberate departure from the content schedule (which specified no dated/changing content on Home). Rationale: Home currently under-exposes the rest of the site; this block gives it more surface area. Not fully resolved — build the structure, treat contents as placeholder pending a follow-up pass.*

- Layout: 3 equal columns.
- Column 1: support meetings info — standing rule, not a dated instance. Placeholder copy: *"Every first Thursday of the month."*
- Column 2: newsletter pointer — placeholder, wording/evergreen-vs-dated framing tbc.
- Column 3: a third CTA — **tbc, not yet decided what belongs here.**

---

## F. Footer

- Global footer, unchanged — see Page 0, section B.

---

## Explicitly NOT on this page
(carried from content schedule, still holds)
- Next event / What's On feed
- Donation ask
- "How we help" marketing grid
- Help bar / phone number anywhere above the footer (per Dan's overruling of the content schedule's original help-bar — see decision log; phone number now appears **only** in the footer, unconditionally, and contextually within Support content)

---

## Open questions / flags for Dan
1. **Mobile nav-in-hero collapse** — not specced here. Standard pages presumably get a conventional hamburger; Home's embedded nav will need its own collapse behaviour since there's no bar to collapse into. Flagging for the responsive pass, not blocking this draft.
2. **Section E (What's On teaser)** — structure only, contents are placeholder. Needs a dedicated follow-up pass: is column 2 evergreen-framed or does it name the actual latest issue (re-opens the "no dated content on Home" tension noted in section E); what goes in column 3.
3. Exact nav-row scrim/contrast treatment for legibility over imagery, and the gradient's exact stop/height — visual-design-system territory, not layout; noted here so it isn't dropped.
