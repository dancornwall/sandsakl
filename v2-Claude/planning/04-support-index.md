# Page 4 — Support Index

**Status:** draft, for review.
**Template:** standard (Page 0).
**URL:** `support/index` — nav label "Support."
**Job of this page:** the largest, most content-dense page in the set — 9+ destinations spanning wildly different content types (a phone number, five crisis numbers, a monthly meeting, six PDFs, a books catalogue, a newsletter, external orgs, a government resource). Per content schedule: ordered **active → passive**, answers "what they are / what to expect," warm/second-person/present-tense, **no dates** — time-bound items appear as *standing categories* that cross-link out to What's On for the actual when.

**Structural principle for this page (resolved in chat, not in the original content schedule):** the original schedule flattened Group B into 5 uniform items. In practice these are genuinely different content types needing different layouts — a crisis number needs almost nothing, a books catalogue needs real space. This brief **restructures Groups A and B into content-appropriate sub-sections** rather than one uniform list. Group/section *order* (active → passive) is preserved from the schedule; the *grouping* is more granular.

---

## Page structure, top to bottom

## A. Page intro block
- Single column, full width. Short framing per content schedule tone: warm, second-person, present-tense — not a marketing summary of the page below.
- No CTA — this page's job starts at section B.

---

## A2. In-page jump-to nav

*Standing pattern (see Page 0, A4) — this page easily qualifies given 7 sections below. Same treatment as `orientation/my-baby-died`'s anchor nav: short, equal-weight links, no visual ranking implied by order.*

- Anchors: **Talk now · What to expect · From Sands · Books & library · Beyond Sands · Other organisations** (six anchors covering sections B–G below; B2's crisis list isn't a separate anchor — it's part of "Talk now").
- Placement: directly below the intro block, above Group A.
- Order follows the page's active→passive structure (talk now first, other orgs last) — this is the one page in the set where anchor order legitimately tracks a real sequence (urgency/intensity), unlike `my-baby-died` where order had to avoid implying ranking between people. Worth the distinction being clear to whoever builds it.

---

## B. Group A — "Talk to someone now"

*Rationale (content schedule): "contact us" and "contact a crisis line" are the same need — a human, now — and belong together, above "explore other charities later." Sands' own channel always ranks first; crisis lines rank by urgency but never above Sands.*

**Two content shapes in this group, not one uniform list:**

### B1. Sands' own channels — two rows
- **`support/contact`** — Sands phone & email. PRIMARY, always first. Title + short summary (per V0: message returned within 24 hrs, a family member/friend can make the first call, volunteers are bereaved parents not counsellors) + link. Same weight/shape as Orientation's destination rows.
- **`support/online`** — Sands online groups (closed Facebook groups: Bereaved Whānau / Dads / Grandparents / Whānau Info). Title + short summary + link.

### B2. Crisis & 24-hr lines — dense list, distinct visual treatment
- **Not** styled as content rows or cards — this is reference information to be scanned fast, not read. Simple list: label + number, nothing more.
- Framed inline as "immediate help beyond Sands" — never visually outranking B1 above it.
- Content (per content schedule, labelled — do not render as bare numbers):
  - Healthline (24 hr): 0800 611 116
  - Lifeline (24 hr): 0800 543 354
  - Crisis Team, Auckland City (CATT): 0800 800 717
  - Plunketline: 0800 933 922
  - Relationship Services: 0800 735 283
- **Duplication note (deliberate, per content schedule):** this same list also appears on `support/contact`. This is the one place in the whole site where cross-link-don't-duplicate is intentionally broken — a 2am crisis number should never be a click deeper than necessary.
- Sensitivity note carried from schedule: this content touches distress; tone/framing needs care, not just a bare number dump.

---

## C. Group B1 — "What to expect" (standing pattern, cross-links to What's On for the date)

*New sub-grouping (chat decision) — separates dated-but-standing content from passive resources, which the original schedule's flat Group B mixed together.*

- **`support/group`** — Monthly support group. Title + summary: what it is / what to expect walking in; adults only; you needn't speak; facilitated by a volunteer. States the standing pattern as a *rule*, not an instance (first Thursday monthly, Feb–Dec, 7:15–8:45pm, Garlick Room, Mount Albert Community & Leisure Centre). → cross-link to What's On for the actual next date.
- **`support/events`** — Events & remembrance. Title + summary: what remembrance means at Sands, who it's for, the kinds of events that happen (BLAW, Global Wave of Light, Annual Remembrance Day) — describing the *category*, not this year's dates. → cross-link to What's On for this year's dates/venues/RSVP.
- Layout: two rows, same shape as B1's Sands-channel rows above (title + summary + link + What's On cross-link) — consistent row treatment across the page for anything that's fundamentally "a thing you'd click into to read more," varying only where content genuinely differs (as in B2's dense list, or D/E below).

---

## D. Group B2a — "From Sands" (light resources)

*Packs and newsletter — Sands' own material, light/brochure-weight, browsable in one sitting. Distinct from the heavier reading in section E.*

- **`support/packs`** — Support packs. Summary: what's in a pack (pamphlets, inkless kits, memory booklets), why memory-making matters, how to get one (hospitals, LMCs, direct).
  - Layout: **small thumbnail grid**, not a text row — six pamphlet covers (`images/brochures/`), each linking to its PDF: The Next Few Days · Your Baby's Funeral · Fathers Grieve Too · When a Baby Brother or Sister Dies · The Loss of a Grandchild · Transporting Your Baby.
- **`support/newsletter`** — Expressions. Summary: quarterly, how to receive (PDF or post), invitation to contribute. Note the privacy rule (online edition omits the remembrance page by design) — doesn't need to be prominent here, but shouldn't be dropped from the page either.
  - Layout: simple row (title + summary + link), lighter than the packs grid — one newsletter cover image (`images/newsletter/`) optional accompaniment. → cross-link to What's On for the latest issue.

---

## E. Group B2b — "Books & library" (heavier reading)

*The densest single section on the page — two sub-lists, both substantial, both something a visitor might return to over weeks rather than consume once.*

- **NZ books** — title + summary per book, with cover image (`images/books/`): *What's Happened to Baby?*, *A Tribute to Tabitha-Rose*, *Baby Gone*, *Holding On & Letting Go*. Layout: small grid or row-with-thumbnail, similar visual language to the packs grid in D but clearly a distinct list (these are purchasable/orderable books, not free PDFs).
- **Auckland Libraries catalogue** — organised by loss type (Baby Loss / Stillbirth / Neonatal-Newborn / Miscarriage / Stories from Parents / Subsequent Pregnancy / For Children). Full annotated title lists exist in source — likely too long for the index page itself. **Suggest:** this sub-list lives on the `support/reading` page in full; the index shows a short teaser (the category names, not the full annotated list) + "see full list" link into the page.
- **Open structural question:** does this section need its own dedicated `support/reading` sub-page (as the original content schedule specifies) with the index only teasing it, or does enough fit directly on the index? Given the catalogue's length, recommend keeping `support/reading` as a real sub-page and treating this index section as a teaser + link — flagging for confirmation rather than assuming.

---

## F. Group B2c — "Beyond Sands" (external, practical + media)

*New category (chat decision) — Whetūrangitia and online-resources didn't fit cleanly into either "light Sands material" or "books/library." Both are external and neither is Sands' own authored content, but one is practical/legal reference and the other is media (podcasts, web series) — grouped together here as "things Sands points you toward," distinct from Group C's "other organisations" (which is explicitly the lowest-priority, ready-when-you-are tier).*

- **`support/wheturangitia`** — Whetūrangitia. Summary: government joint initiative (6 agencies), practical/legal/financial/burial/coronial info in one place. Include the reo meaning (stars returning to the sky) — dignified, not just a bureaucratic description. Link out to wheturangitia.services.govt.nz.
- **`support/online-resources`** — podcasts, web series, free books, guides (*The Colors of Love and Loss*, *Misconceptions*, *At a Loss*, *The Unthinkable*, *The Human Race*, *The Worst Girl Gang Ever*, *Dad Still Standing*, *Dealing With Grief*). Summary row + link into the fuller list on its own page.
- Layout: two rows, similar shape to C's rows above — title + summary + link. Visually positioned as a bridge toward Group C below (external content, ordered toward the passive end) without merging into it.

---

## G. Group C — "Explore when ready" (other organisations)

*Stays last per content schedule — the explicit lowest-priority tier, distinct from crisis lines (which moved to Group A) and distinct from Group F's Sands-curated external resources.*

- **`support/other-organisations`** — Sands NZ (national), Miscarriage Support, Miscarriage Matters, Skylight Trust.
- Layout: simple list or small row set — low visual weight, deliberately undersold relative to everything above it.

---

## H. Footer
- Global footer, unchanged — see Page 0, section B.

---

## Decision log
- **Group A split into two shapes:** Sands' own channels as content rows (B1), crisis numbers as a dense scannable list (B2) — not uniform treatment, because a crisis number and a "what to expect calling us" summary serve different reading modes.
- **Group B split into B1/B2, not left as one flat 5-item list:** B1 = dated-but-standing content that cross-links to What's On (Group, Events); B2 = passive resources with no date.
- **B2 further split into three, not two:** B2a (From Sands — packs, newsletter, light/brochure-weight), B2b (Books & library — heavier, return-to-over-time reading), B2c (Beyond Sands — Whetūrangitia + online resources, external practical/media content that doesn't fit either the "light Sands material" or "books" bucket). Reasoning: forcing all passive content into one register would misdescribe genuinely different content types and reading commitments.
- **Group C stays last, kept distinct from B2c** — C is "other organisations, lowest priority," B2c is "Sands-curated external resources," not ranked as low.
- **In-page jump-to nav added** (section A2) — now a standing global pattern (Page 0, A4) applied to any page with 4–5+ sections. Anchor order here legitimately tracks the page's real active→passive sequence, unlike `my-baby-died` where order had to avoid implying ranking between people — worth not confusing the two rationales.

## Open questions / flags for Dan
1. **`support/reading` as a real sub-page vs. fully inline on the index** (section E) — recommended keeping it as a sub-page given the Auckland Libraries catalogue's length, with the index showing only a teaser. Confirm.
2. **Visual distinction between B2c and C** — both are "external," need enough visual difference that C doesn't accidentally read as equally weighted to B2c. Design-system territory, flagged here so it isn't lost.
3. Whether B2a's newsletter row needs the privacy rule (online edition omits remembrance page) surfaced on the index itself, or only on the `support/newsletter` sub-page — leaning toward sub-page only, confirm.
