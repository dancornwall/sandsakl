# Page 2 — Orientation Index (nav label: "Start Here")

**Status:** draft, for review.
**Template:** standard (Page 0) — help bar removed per decision log, professionals tab, header nav, footer all as specced there.
**URL / internal name:** `orientation/index` — nav label is "Start Here"; internal docs and folder path keep "Orientation" (see naming decision log). Content schedule calls this page "You are not alone."
**Job of this page:** help a visitor in an unclear or vulnerable state self-sort to the *right* one of four destination pages, quickly and without re-traumatising them by making them read content meant for someone else. This is a **decision-support page**, not a landing/index with cards — every row must carry enough real content (title + summary) that someone can rule a row out without clicking into it.

**Resolved structural question (see decision log):** built as **index + separate subpages** (option B of three considered — one long page, tabs/accordion, index+subpages). Chosen because the Home hero CTA already links directly to `orientation/my-baby-died`, skipping this index entirely — that only makes sense if each destination is a real standalone page. Also avoids JS-dependent tab state, which fights the "no build step, volunteer-editable plain HTML" constraint from the content schedule's build notes.

---

## A. Page intro block

- Single column, full width of container (not split into the two-column layout yet — that starts at section B).
- Content, per content schedule's `orientation/index`:
  - Short intro: you're not alone, whatever happened, whatever gestation, however long ago.
  - Brief "how we help" — reassuring in tone, explicitly **not** a marketing grid (no stats, no logos, no "why choose us").
- No CTA in this block — it's orientation before the choice, not a pitch.

---

## B. Body — two column layout, 70/30 split

*Per Dan's direction. No sub-navigation needed within this page — only two columns, no third nav rail.*

### B1. Column 1 (≈70% width) — the four destination rows, stacked

*Each row = one destination. Each row needs a title, a short summary (2–3 lines, enough to genuinely self-select or rule out), an illustration slot (image treatment tbc — deliberately not decided here, see design-system pass), and a "Read more" link. Full-width rows, not cards in a grid — chosen specifically so someone can read row 1's summary, recognise it isn't them, and move to row 2 without losing their place, which a scannable card grid makes harder.*

**Row order (sequence matters — read top to bottom, not scanned as a grid):**

1. **When your baby dies** → `orientation/my-baby-died`
   - Summary draws on content schedule: for the newly bereaved; no hurried decisions; what Sands offers right now, lowest-effort first.
   - Note: this is the same destination as the Home hero CTA — a visitor arriving here directly (not via Home) needs this row to do the self-identification job Home's hero copy already did for hero-path visitors.
2. **My loss was a long time ago** → `orientation/loss-long-ago`
   - Summary: no expiry on grief; anniversaries and due dates can reignite grief years on; the door is still open.
3. **I'm pregnant again** → `orientation/pregnant-again`
   - Summary: pregnancy after loss isn't the same as pregnancy; fear and joy together; welcome to make contact.
4. **Someone I love has lost a baby** → `orientation/someone-i-love`
   - Summary: for partners, grandparents, whānau, friends — people who love someone grieving, often grieving themselves.
   - **Builder caution carried from content schedule:** this row's summary must not read as "the dads page." A bereaved father belongs in row 1, not here.

### B2. Column 2 (≈30% width) — About, stacked vertically

*Distinct treatment from the four rows in column 1 — different column, different visual weight — but still primary content, not demoted to a footer-style link. Per Dan: "different treatment but still a main content element."*

- **Top: "About Sands" card**, long/vertical — who we are, parent-run, all volunteers bereaved parents, not counsellors (content schedule `orientation/about`, migrate from V0 `about-us.md`/`about-org.md`).
- **Below that: a supporting quote** — pulled from the real current-site copy in the content schedule §7 (e.g. "Sands offers empathy and understanding. We are not counsellors but do importantly offer an opportunity to share experiences, talk and listen.") Treatment: a quiet pull-quote, not a testimonial-card style.
- This column runs alongside column 1 for the height of the four rows — present the whole time a visitor is reading, not something they only reach by scrolling past all four rows.
- Cross-link at the foot of this column → `support-our-work/` (content schedule notes About and Support Our Work are "two halves of one trust conversation" and should lean on each other).

---

## C. Footer

- Global footer, unchanged — see Page 0, section B.

---

## Decision log (structural choices made in chat, not yet in the content schedule doc)
- **Page structure:** index + separate subpages (not one long page, not tabs/accordion). Rationale above, section header.
- **Column split:** 70/30, not a 2×2 grid or full-bleed hero-style intro. A 2×2 grid was considered and rejected — a "connector" illustration between rows risked implying a sequence (e.g. grief → pregnant-again) that contradicts the continuity thesis (no "moving on" narrative). Illustration deferred generally, not just for the grid concept.
- **About's placement:** promoted into a persistent side column rather than a bottom-of-page link or a fifth row in the main sequence — keeps the four grief-audience rows as a clean, undiluted sequence while keeping About genuinely present, not buried.

## Open questions / flags for Dan
1. Illustration per row (B1) — slot reserved, content/style undecided. Don't let this block the layout pass; resolve in the visual/design-system stage.
2. Exact quote choice for column 2 (B2) — I've suggested the "empathy and understanding" line from content schedule §7 as a placeholder; confirm or swap for another real line from that section.
3. Mobile stacking order for the 70/30 split — presumably column 1 (the four rows) stacks above column 2 (About) on narrow viewports, but not specced here; flagging for the responsive pass.
