# Page 02b — Support Level-2 Sub-Template

**⚠ STATUS: SUPERSEDED / DEMOTED TO REFERENCE.** Written when Support had ~10 sub-pages needing a shared skeleton. The depth-ceiling review collapsed Support to **3 sub-pages** (contact, brochures, reading), each specced directly in its own brief (`05`–`07`). A shared template earns little across only 3 varied pages, so this is no longer a live pattern-setter. **Kept for reference only** — the block vocabulary (L1 intro / L2 jump-to / L3 content shapes / L4 downloads / L5 callout / L6 What's On link / L7 back-link / L8 footer) is still used as shorthand in the 3 surviving sub-page briefs, so this doc documents what those labels mean. Do not build new pages "against" it as a template; build from the individual briefs.

---

**Original status (historical):** draft, pattern-setter for all `support/*` children (excl. the index itself, already specced in `04-support-index.md`).
**Used by:** `support/contact`, `support/online`, `support/group`, `support/events`, `support/packs`, `support/reading`, `support/newsletter`, `support/other-organisations`, `support/wheturangitia`, `support/online-resources` — 10 pages.
**Sits inside:** the Page 0 standard template's body block (A4). Everything below is what fills that body on a Support L2 page.

**Why this exists:** these 10 pages don't share content — a phone number and a library catalogue have nothing in common on the page. What they share is a **skeleton**: the same handful of structural questions recur on every one of them (does it need its own framing line, where do downloads sit, does it cross-link to What's On, does it need a jump-to-nav). This template answers those once, as a set of blocks with explicit **required / optional / conditional** status, so each individual page's brief only has to say which blocks it uses and supply the content — not re-derive structure from scratch.

---

## Block set

### L1. Page intro (required, every page)
- Single line or short paragraph, same tone register as the rest of Support (warm, second-person, present-tense, no dates as instances). States what this page *is* before any content — mirrors the Support index's own opening move.
- Length: 1–3 sentences. Not a repeat of the index's summary for this item — expand slightly now that the visitor has clicked through.

### L2. Jump-to nav (conditional — only if the page has 4–5+ distinct content groups)
- Per Page 0's standing rule (A4). Most Support L2 pages are simple enough **not** to need this — e.g. `support/contact` is one idea, not five. Pages likely to trigger it: `support/reading` (NZ books + library catalogue, each with sub-categories), possibly `support/online-resources` (podcasts / web series / books / guides as distinct clusters).
- Where used: same equal-weight, no-ranking treatment as `my-baby-died` and the Support index.

### L3. Primary content block (required, every page — shape varies per page)
- This is the page's actual substance, and it's the one block that's genuinely different per page. Shape options, pick per page:
  - **Prose/reassurance shape** — short paragraphs, no grid (e.g. `support/contact`, `support/online`, `support/group`).
  - **Thumbnail grid shape** — image + title + link, repeated (e.g. `support/packs`' six pamphlets, `support/reading`'s NZ books).
  - **Categorised list shape** — grouped sub-lists under headings, denser, closer to reference material (e.g. `support/reading`'s library catalogue by loss-type, `support/online-resources`' podcasts/media list).
  - **Standing-rule statement** — a rule stated plainly, not an event instance (e.g. `support/group`'s meeting pattern, `support/events`' description of what remembrance events are).
- Each individual page brief specifies which shape(s) it uses — some pages combine two (e.g. `support/reading` = thumbnail grid for books + categorised list for the library catalogue).

### L4. Downloads / external links (conditional — only if the page has them)
- Applies to: `support/packs` (6 PDFs), `support/wheturangitia` (external govt link), `support/online-resources` (external podcast/media links), `support/reading` (external book-ordering links for some titles).
- Treatment: consistent small link/button style wherever it appears — a download and an external link should be visually distinguishable from each other (downloads stay on-site, external links leave it), but both distinguishable from the page's main prose links.

### L5. Standing-fact callout (conditional — only for pages with a rule or policy that needs to stand out from prose)
- Applies to: `support/group` (the meeting schedule — day/time/venue as a rule, not buried in a paragraph), `support/newsletter` (the privacy rule — online edition omits the remembrance page).
- Treatment: a distinct but quiet callout — not an alert/warning style (nothing here is urgent), just visually separated from surrounding prose so it can be scanned without reading the whole paragraph.

### L6. Cross-link to What's On (conditional — only for pages with a dated instance)
- Applies to: `support/group` (→ next meeting date), `support/events` (→ this year's dates/venues/RSVP), `support/newsletter` (→ latest issue).
- Does **not** apply to: `support/contact`, `support/online`, `support/packs`, `support/reading`, `support/other-organisations`, `support/wheturangitia`, `support/online-resources` — none of these have a dated instance to point to.
- Treatment: small, single link, clearly distinct from L4's downloads/external links — this one stays inside the site, always to `whats-on/`.

### L7. Cross-link back to Support index (required, every page)
- Every L2 page should offer a way back to the index without relying on the browser back button or the main nav alone — especially relevant for pages reached via a direct link (e.g. someone sent the `support/contact` URL directly).
- Treatment: quiet, low-key — a breadcrumb-style link or small "back to Support" line, not a button competing with the page's own content.

### L8. Footer (required, every page)
- Global footer, unchanged — see Page 0, section B.

---

## Page-by-page mapping (which blocks each of the 10 pages actually uses)

| Page | L2 jump-to | L3 shape | L4 downloads/links | L5 callout | L6 → What's On |
|---|---|---|---|---|---|
| `support/contact` | No | Prose/reassurance | No | No | No |
| `support/online` | No | Prose/reassurance | No (links to closed FB groups — treat as L4 external if so) | No | No |
| `support/group` | No | Standing-rule statement | No | **Yes** — meeting schedule | **Yes** — next date |
| `support/events` | No | Standing-rule statement | No | No | **Yes** — this year's dates |
| `support/packs` | No | Thumbnail grid | **Yes** — 6 PDFs | No | No |
| `support/reading` | **Likely yes** — two sub-lists | Thumbnail grid (books) + categorised list (library) | **Yes** — some book ordering links external | No | No |
| `support/newsletter` | No | Prose/reassurance | No | **Yes** — privacy rule | **Yes** — latest issue |
| `support/other-organisations` | No | Prose/reassurance or simple list | **Yes** — external org links | No | No |
| `support/wheturangitia` | No | Prose/reassurance | **Yes** — external govt link | No | No |
| `support/online-resources` | Possibly — depends on final length | Categorised list | **Yes** — external podcast/media links | No | No |

---

## Decision log
- Built as a **skeleton with conditional blocks**, not a fixed single layout — the 10 pages genuinely don't share content shape, only structural questions (intro, downloads, callouts, What's On links, back-link, footer).
- L4 (downloads) and L6 (What's On cross-link) deliberately kept visually distinct from each other in treatment — one stays on-site pointing to dated content, the other may leave the site entirely; conflating them risks a visitor not knowing whether a click keeps them on Sands' site.

## Open questions / flags for Dan
1. **`support/reading`'s jump-to nav** — marked "likely yes" above but not confirmed; depends on how long the library catalogue teaser/full-list ends up being once drafted. Worth deciding once that page's own brief is drafted, not here.
2. **L7 (back-to-index link) treatment** — is a breadcrumb style ("Support / Contact us") preferred over a plain "← Back to Support" line? Not resolved here, small decision for the design-system pass.
3. Confirm the L4/L6 distinction (external links vs. What's On cross-link) is worth the visual differentiation effort, or whether that's over-engineering for what's ultimately a small number of links per page.
