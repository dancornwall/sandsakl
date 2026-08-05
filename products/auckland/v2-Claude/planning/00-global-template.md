# Page 0 — Global Template

**Status:** draft, pattern-setter — pending approval before other briefs follow this format.
**Used by:** every page except Home (`index.html`). Home has its own header treatment (see `01-home.md`) but shares this footer.

**What this brief is:** layout only — order, hierarchy, grouping, described in words. No colour, type, or imagery treatment. Content pointers reference `sands_content_schedule_v2.md` but that doc is a working scaffold, not locked — treat mismatches here as the current decision.

---

## A. Standard page template (all pages except Home)

### A1. Page container
Max-width limited, centred. (Exact max-width tbc in design-system pass — content schedule's old draft used 1152px as a starting reference point, not a commitment.)

### A2. Row 1 — thin utility bar
- Full width of the page container.
- Content: a single hanging tab, **right-aligned**, reading "For Health Professionals."
- Treatment note: not a button, not a full bar of content — sized to its own text + spacing only, styled subtly, similar weight to how a header action-link would normally read. Right-aligned within the row, not the full row filled.
- No other content in this row (no breadcrumb, no secondary utility links) unless a later page brief needs to add something — default is: tab only.
- This tab carries the page's active/current state when the visitor is on `for-professionals/` (per content schedule's rule that the nav never shows an active state for that section — the CTA does instead).

### A3. Row 2 — header bar
- **Logo** — left aligned.
- **Text navigation** — right aligned, ending in a **"Contact Us" button** (visually distinct from the plain text links, per content schedule's CTA-button treatment).
- Nav items, in order:
  1. Start Here *(→ `orientation/`)*
  2. Support *(→ `support/`)*
  3. What's On *(→ `whats-on/`)*
  4. Support Our Work *(→ `support-our-work/`)*
  - **No "Home" item** — logo click serves that purpose.
  - **No help-bar phone number** in this row or anywhere in the global template — deliberately dropped. Support/contact options live in-context within page content (Support section's Group A, and contextual callouts elsewhere), not as an unconditional global element. Rationale: the org's phone is a callback-when-available mobile, not a staffed hotline — presenting it as an always-on urgent element misrepresents the offering and wrongly implies urgency ("the grief will be there for life," not a crisis-response service).

### A4. Body block
- This is where each individual page's own layout goes (specced in that page's own brief).
- For any Support Level-2 page (`support/contact`, `support/group`, etc.), the body uses a shared **L2 sub-template** — see `02b-support-l2-subtemplate.md` (separate brief, to be written once we've done one concrete example) — rather than each L2 page inventing its own structure from scratch.
- **Standing pattern — in-page jump-to nav:** any page with roughly 4–5+ distinct sections/destinations gets a short in-page anchor nav near the top of the body, styled as equal-weight links with no visual ranking (same treatment as `orientation/my-baby-died`'s anchor nav and `support/index`'s section jump-to). Applies by default going forward — individual page briefs don't need to re-justify adding one, only note where the anchors point.


### A5. Footer
Shared, identical across every page including Home. See section B below.

---

## B. Global footer (all pages, including Home)

Three stacked rows, full width (contents constrained to the same page container max-width as the body above it).

### B1. Row 1
- **Left aligned:** logo + tagline ("A little life, not a little loss.")
- **Right aligned:** phone number.
- Note: this is the *only* place the phone number appears unconditionally across the whole site (footer, every page) — everywhere else it's contextual, inside Support content.

### B2. Row 2 — sitemap, one column per section
Working column set (5 — tbc, may need collapsing, see note below):
1. **Start Here** — index/orientation/my-baby-died/loss-long-ago/pregnant-again/someone-i-love/about
2. **Support** — contact/online/group/events/packs/reading/newsletter/wheturangitia/online-resources/other-organisations
3. **What's On**
4. **Support Our Work**
5. **For Health Professionals** — gets its own footer column here even though it has no primary-nav slot; footer is the "repeated CTA" location the content schedule specifies.

*Open flag (per Dan): column count may be too many once real link counts are laid out, and footer will likely need a distinct breakpoint-specific version (e.g. accordion or fewer columns on mobile) — not resolved in this brief, revisit once content is in.*

### B3. Row 3 — legal/utility row
Plain text links, no CTA styling:
- Accessibility statement
- Privacy
- Leave-this-site
- © Sands Auckland Central
- Charities Commission CC30352

---

## Open questions / flags for Dan
1. Footer column count (5, listed above) — confirm or trim before this becomes the pattern every page brief inherits.
2. Mobile/breakpoint footer treatment — placeholder only, needs its own pass.
3. Max content width — carried over from old design-system draft (1152px) as a placeholder, not a decision.
4. L2 sub-template (for Support's ~10 children) — not yet drafted; proposing we do Home next, then one concrete Orientation or Support child, to establish that pattern before batch-producing the rest.
