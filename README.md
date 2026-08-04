# Sands Auckland Central — website rebuild

Work-in-progress rebuild of [www.sandsauckland.org.nz](https://www.sandsauckland.org.nz), the
site of **Sands Auckland Central** — a parent-run group supporting families across Auckland who
have experienced the death of a baby, at any gestation and under any circumstance.

**Current phase:** design + IA planning complete for the core pages; **build not yet started.**
See [ROADMAP.md](ROADMAP.md) for status, to-do items, and open decisions.

---

## Repo layout

This repo is organised as three chronological layers, not a single app. Only `v2-Claude` is live work.

| Directory | What it is | Status |
|---|---|---|
| [`V0-current/`](V0-current) | Full extract of the **existing live WordPress site** — 22 page `.md` files, screenshots (`.png`), and real assets (6 pamphlet PDFs, brochure/book/event/brand images). | **Source of truth** for existing copy + assets. Read-only reference. |
| [`v1-Claude/`](v1-Claude/sands-auckland-prototype) | An early **built** static prototype (16 HTML pages, one CSS, `nav.js`, `_redirects`). | **Superseded.** Wrong palette (invented BLAW colours, not the brand) and outdated IA. Kept for reference only — do not build on. |
| [`v2-Claude/planning/`](v2-Claude/planning) | The **current** effort: content schedule, design system, and per-page layout briefs. | **Active.** Planning only — no HTML built yet. See its [README](v2-Claude/planning/README.md). |

## The build, in one paragraph

Static HTML/CSS/JS, **no build step, no framework** — a volunteer must be able to edit a page in
plain HTML years from now. One shared template (header + footer + nav) on every page. Self-hosted
open fonts (Fraunces + Public Sans). Real brand palette (deep violet `#472f92` + warm terracotta
`#e5976a`), re-derived from the live theme CSS. Target **WCAG 2.2 AA**. Host on Netlify or
Cloudflare Pages. All old WordPress URLs must 301-redirect (see [`_redirects`](v1-Claude/sands-auckland-prototype/_redirects)).

## Foundational principles (from the planning docs)

- **Continuity, not closure.** The site helps a baby *continue to matter* — no "move on" / "heal" framing.
- **Cross-link, don't duplicate.** Each section sorts by a single axis; content lives once and is surfaced by link.
- **Dates live in ONE place** (What's On), so evergreen pages can never go stale.
- **Not marketing.** No donation ask or event promotion in the acute grief path.
- **DRAFT copy is flagged** and must not ship without bereaved-parent review.

## Where to start reading

1. This file — orientation.
2. [ROADMAP.md](ROADMAP.md) — what's done, what's next, open decisions.
3. [v2-Claude/planning/README.md](v2-Claude/planning/README.md) — the planning docs in reading order.
4. [sands_content_schedule_v2.md](v2-Claude/planning/sands_content_schedule_v2.md) — IA + content (the "why" of the structure).
5. [sands_design_system_v1_4.md](v2-Claude/planning/sands_design_system_v1_4.md) — tokens, type, tone.

> **Note on document precedence:** where the per-page briefs (`00`–`07`) disagree with
> `sands_content_schedule_v2.md`, **the briefs win** — the IA evolved after the schedule was
> written (e.g. Support collapsed from ~10 sub-pages to 3). The [decision log in ROADMAP.md](ROADMAP.md#decision-log)
> records the resolved differences.
