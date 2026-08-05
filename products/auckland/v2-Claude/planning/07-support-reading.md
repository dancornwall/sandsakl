# Page 7 — Support: Library & Books

**Status:** draft, for review.
**Template:** standard (Page 0).
**URL:** `support/reading`.
**Why this is a page:** the densest content in the whole Support section — a curated NZ book list (with covers, purchase links) *plus* the full Auckland Libraries catalogue organised by loss-type with annotated title lists. Far too long for the on-index "top 3" teaser. Reached via "see the full reading list" on the Support index (block J).
**Job of this page:** the passive, read-alone end of support — help someone find a book that fits their specific loss, whether to buy or borrow.

**Uses L2 sub-template blocks:** L1 (intro), L2 (jump-to nav — two substantial sub-lists qualify it), L3 (thumbnail grid for books + categorised list for library), L4 (external ordering links), L7 (back to Support), L8 (footer). No What's On cross-link.

---

## A. Page intro
- Short: reading can be a quiet companion; some books to buy, and a large library selection to borrow, organised so you can find what fits.

## A2. Jump-to nav
- Two anchors: **NZ books** · **Auckland Libraries by loss type**. Equal weight. (Qualifies for jump-to under the standing rule — two dense sub-lists.)

## B. NZ books (primary content — thumbnail grid/rows)
- Each: cover (`images/books/`) + title + short description + where to get it (external link).
  - *What's Happened to Baby?* — Skylight/Sands/SIDS.
  - *A Tribute to Tabitha-Rose* — ed. Vicki Culling; order via Sands Wellington-Hutt Valley (sandswgtnhutt@gmail.com, $20 + $5 post).
  - *Baby Gone* — Jenny Douché (babygone.com).
  - *Holding On & Letting Go* — Vicki Culling (holgbook.com).
- Treatment: cover + text rows; external "where to buy" links (L4 external style — clearly leaving the site).

## C. Auckland Libraries catalogue (primary content — categorised list)
- Organised by loss type — these are the category headings; each has an annotated title list (full lists in V0 resources-library.md, migrate verbatim):
  - Baby Loss
  - Stillbirth
  - Neonatal / Newborn
  - Miscarriage
  - Stories from Parents
  - Subsequent Pregnancy
  - For Children
- Treatment: categorised list — headings scannable (someone looking for "miscarriage" or "for children" jumps straight there), titles listed under each. This is reference-style, denser than the NZ books block. The jump-to nav (A2) plus these category headings do the wayfinding.
- **Length flag:** if the full annotated catalogue is very long, consider whether the categories themselves collapse/expand — but that reintroduces JS, which the build notes resist. Default: full list, plain HTML, long page is acceptable here because it's a reference the visitor scrolls deliberately, not an acute-path page.

## D. Back to Support
- Quiet link back to the Support index (L7).

## F. Footer
- Global footer (Page 0, B).

---

## Open questions / flags for Dan
1. Which 3 titles are the on-index "top 3" (block J) — likely the four NZ books are the candidates (they're Sands-specific), pick 3.
2. **Full library catalogue length** — how long is the annotated list once migrated? If it's very long, revisit whether it needs collapsible categories (JS cost) or stays a long plain-HTML reference page. Decide once the real content's in.
3. Whether the NZ books and library should each be their own page rather than two sections of one — currently one page with jump-to nav; only split if the library list turns out enormous.
