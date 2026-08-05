# v2 planning docs

The current design + IA effort for the Sands Auckland Central rebuild. **Planning only — no
HTML is built yet.** Product overview: [../../README.md](../../README.md). Status & to-dos:
[../../ROADMAP.md](../../ROADMAP.md). Workspace: [../../../README.md](../../../README.md).

## Reading order

Read top-to-bottom for the full picture; the two foundation docs first, then the page briefs.

### Foundations (read these first)

| Doc | What it governs |
|---|---|
| [sands_content_schedule_v2.md](sands_content_schedule_v2.md) | **IA + content plan.** Sections, sorting axes, cross-link rules, what copy migrates from V0. The "why" of the structure. |
| [sands_design_system_v1_4.md](sands_design_system_v1_4.md) | **Design tokens + tone.** Colour, type (Fraunces + Public Sans), spacing, layout grid, emotional thesis, copy/visual tone. Ends with a copy-paste `:root` block for the build. |

### Page briefs (layout specs — structure, not final copy)

Numbered in intended build order. See the [brief tracker](../../ROADMAP.md#page-briefs-phase-4)
for which pages still need briefs.

| # | Doc | Page |
|---|---|---|
| 00 | [00-global-template.md](00-global-template.md) | Header / nav / footer used by every page except Home |
| 01 | [01-home.md](01-home.md) | Home (bespoke template) |
| 02 | [02-orientation-index.md](02-orientation-index.md) | Orientation index ("Start Here") |
| 02b | [02b-support-l2-subtemplate.md](02b-support-l2-subtemplate.md) | ⚠ Reference only — L2 block vocabulary shorthand |
| 03 | [03-orientation-my-baby-died.md](03-orientation-my-baby-died.md) | "When your baby dies" — highest-stakes page |
| 04 | [04-support-index.md](04-support-index.md) | Support index (most support content lives here inline) |
| 05 | [05-support-contact.md](05-support-contact.md) | Contact us |
| 06 | [06-support-brochures.md](06-support-brochures.md) | Brochures & materials |
| 07 | [07-support-reading.md](07-support-reading.md) | Library & books |

### Supporting material

| Doc | What it is |
|---|---|
| [design planning1.md](design%20planning1.md) | Early emotional-vocabulary exploration ("Evidence of Love", presence-through-absence). Concept notes, not spec. |
| [design-image-prompt](design-image-prompt) | Prompt(s) used for moodboard image generation. |
| [sands_design_system_v1.md](sands_design_system_v1.md) | ⚠ Earlier design-system draft — **superseded by `v1_4`.** Kept for history. |
| `*.png`, `*.jpg` | Moodboard / generated concept images. |

## Conventions used in the briefs

- **`⚠ DRAFT`** — newly written copy that must not ship without bereaved-parent review.
- **`→ [target]`** — a cross-link (content lives once; surfaced by link elsewhere).
- **`⬇`** — a downloadable asset (PDF pamphlet, etc.).
- **L1–L8** — block vocabulary from `02b` (L1 intro / L2 jump-to / L3 content / L4 downloads /
  L5 callout / L6 What's On link / L7 back-link / L8 footer).

> **Precedence:** where a page brief disagrees with `sands_content_schedule_v2.md`, the **brief
> wins** — the IA evolved after the schedule. Resolved differences are in the
> [decision log](../../ROADMAP.md#decision-log).
