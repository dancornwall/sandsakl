# Roadmap & status

Living tracker for the Sands Auckland Central rebuild. Update the checkboxes as work lands.
Project overview is in [README.md](README.md); the planning docs are indexed in
[v2-Claude/planning/README.md](v2-Claude/planning/README.md).

_Last updated: 2026-08-05._

---

## Phase overview

| Phase | What it covers | Status |
|---|---|---|
| 0. Capture current state | Extract live site copy + assets into `V0-current/` | ✅ Done |
| 1. Throwaway prototype | `v1-Claude/` — proved the shape, wrong palette/IA | ✅ Done (superseded) |
| 2. Content schedule + IA | `sands_content_schedule_v2.md` | ✅ Done |
| 3. Design system | `sands_design_system_v1_4.md` (tokens, type, tone) | ✅ Done |
| 4. Per-page layout briefs | `00`–`07` layout specs | 🟡 In progress (core pages done; see below) |
| 5. Copy drafting + DRAFT review | Write/finalise page copy; dual bereaved-parent review | ⬜ Not started |
| 6. Moodboard → Claude Design | Coded layouts against the tokens | ➖ Folded into Phase 7 (built directly against tokens) |
| 7. Build (Claude Code) | Static HTML/CSS/JS from tokens + briefs | 🟡 **Full draft site in [`v3-build/`](v3-build/README.md)** — all 16 pages, for review |
| 8. Launch prep | Redirects, hosting, accessibility audit, go-live | ⬜ Not started |

> **Where the real build lives:** [`v3-build/`](v3-build/README.md) now holds a complete draft of
> every page (Home, the 5 Orientation pages, 4 Support pages, What's On, Support Our Work, For Health
> Professionals, Accessibility, Privacy). Run it with `cd v3-build && python3 -m http.server 8123`.
> Still draft: unreviewed copy (flagged in-page), placeholder "top 3" picks, 2025 example dates on
> What's On, Google-hosted fonts, and hero/illustration art. See the build README for the full list.

---

## Page briefs (Phase 4)

Layout specs only — structure, not final copy. `✅` = brief drafted; `⬜` = not yet written.

**Global**
- [x] `00` Global template (header / nav / footer) — [00-global-template.md](v2-Claude/planning/00-global-template.md)
- [x] `02b` L2 sub-template — [02b-support-l2-subtemplate.md](v2-Claude/planning/02b-support-l2-subtemplate.md) _(⚠ demoted to reference — block-vocabulary shorthand only)_

**Home**
- [x] `01` Home — [01-home.md](v2-Claude/planning/01-home.md)

**Orientation** (nav label "Start Here")
- [x] `02` Orientation index — [02-orientation-index.md](v2-Claude/planning/02-orientation-index.md)
- [x] `03` When your baby dies (`my-baby-died`) — [03-orientation-my-baby-died.md](v2-Claude/planning/03-orientation-my-baby-died.md)
- [ ] Orientation: loss was a long time ago (`loss-long-ago`)
- [ ] Orientation: pregnant again (`pregnant-again`)
- [ ] Orientation: someone I love (`someone-i-love`)
- [ ] Orientation: about us (`about`)

**Support**
- [x] `04` Support index — [04-support-index.md](v2-Claude/planning/04-support-index.md)
- [x] `05` Contact us (`support/contact`) — [05-support-contact.md](v2-Claude/planning/05-support-contact.md)
- [x] `06` Brochures & materials (`support/brochures`) — [06-support-brochures.md](v2-Claude/planning/06-support-brochures.md)
- [x] `07` Library & books (`support/reading`) — [07-support-reading.md](v2-Claude/planning/07-support-reading.md)

**Remaining L1 sections**
- [ ] What's On (`whats-on/`) — the only place dates live
- [ ] Support Our Work (`support-our-work/`)
- [ ] For Health Professionals (`for-professionals/`) — header-CTA entry, not in primary nav

**Utility pages**
- [ ] Accessibility statement
- [ ] Privacy (note the newsletter remembrance-page privacy rule)

> **Page inventory is not final** — confirm the definitive list before build. The three
> "Remaining L1 sections" above still follow the `sands_content_schedule_v2.md` model and
> haven't had the same consolidation pass that reshaped Support.

---

## Copy & review (Phase 5)

- [ ] **HIGHEST PRIORITY:** finalise the primary-doorway wording (relationship-neutral). 3 DRAFT
      candidates exist; needs **dual review by a bereaved mother AND a bereaved father**.
- [ ] Draft + review all `⚠ DRAFT` Orientation copy (`my-baby-died`, `loss-long-ago`, `pregnant-again`, `someone-i-love`).
- [ ] Decide on recurring phrase "We remember too" (makes a claim on the org's behalf — volunteers confirm).
- [ ] Migrate verbatim-able copy from `V0-current/content/*.md` for evergreen pages.
- [ ] Review any AI-generated illustration through the same dual bereaved-parent review as copy.

## Build & launch (Phases 6–8)

- [ ] Run the two design-system experiments: sombre violet (`--violet-700`→`800`) and a sage section.
- [ ] Self-host Fraunces + Public Sans (woff2 / `@fontsource`), with `size-adjust` fallback.
- [ ] Build global template (help bar decision applied — see decision log), then Home, then a
      concrete Orientation/Support child to lock the pattern, then batch the rest.
- [ ] Port `_redirects` and verify every old WordPress URL 301s to its new home.
- [ ] Accessibility audit: 320px reflow, visible focus everywhere, ≥44px targets, `prefers-reduced-motion`.
- [ ] Localise assets — do not hotlink the old WordPress domain (403s on hotlinks; being decommissioned).
- [ ] Choose host (Netlify / Cloudflare Pages) and deploy.

---

## Open decisions

Unresolved questions that block or shape the build. Move to the decision log once settled.

- [ ] **te reo Māori breadth** across the site — used deliberately vs by accident (Whetūrangitia + conference content already use it).
- [ ] **Footer column count** (currently 5) + a mobile/breakpoint footer treatment (accordion?).
- [ ] **Signature element**: ambient terracotta "Wave of Light" glow vs single-line heart-and-footprints motif (needs bereaved-parent review).
- [ ] **Max content width** — 1152px is a placeholder carried from the old draft, not a commitment.
- [ ] **Stale-date discipline** — confirm the org has a named monthly owner for What's On (the linchpin of the no-rot design).
- [ ] Final page inventory for the three remaining L1 sections (see note above).

---

## Decision log

Resolved decisions, newest first. Where these differ from `sands_content_schedule_v2.md`,
**these win** (the schedule predates them).

- **Help bar removed from the global template.** The content schedule specced a persistent
  phone/email help bar on every page; `00-global-template.md` overrides this — the org's number
  is a callback mobile, not a staffed hotline, so an always-on urgent element misrepresents it.
  Phone now appears unconditionally **only in the footer**; elsewhere it's contextual (Support content).
- **Nav label "Orientation" → "Start Here"** (user-facing). Internal docs / folder path keep `orientation/`.
- **Support collapsed from ~10 sub-pages to 3** (`contact`, `brochures`, `reading`). Everything
  else became on-index content blocks. Rule: a content type earns its own page only if it has
  >~1 screen of content **or** is a frequent cross-link target needing a stable URL. This demoted
  `02b`'s shared L2 template to reference-only.
- **Orientation built as index + separate subpages** (not one long page or JS tabs) — the Home hero
  CTA links straight to `my-baby-died`, which only works if each destination is a real standalone page.
- **Home uses a bespoke template** (hero with embedded nav), sharing only the global footer.
- **Homepage doorways are hierarchical** — the newly-bereaved door is dominant; the other three are
  secondary. Not four equal tiles (that was the v1 prototype's approach).
- **Real brand palette restored** — violet `#472f92` + terracotta `#e5976a`, pulled from the live
  theme CSS, replacing the prototype's invented blue/pink/purple BLAW scheme.
