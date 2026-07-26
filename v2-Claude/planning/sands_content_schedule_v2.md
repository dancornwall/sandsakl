# Sands Auckland Central — Content Schedule v2

**Status:** IA + content plan, build-ready. Supersedes v1.
**Audience for this document:** a Claude Code build task. Written to be *implemented*, not just read.
**Source of truth for existing copy:** `V0-current/content/*.md` in the repo (the full page-by-page extract of the live WordPress site). Where this doc inlines existing copy, it can migrate close to verbatim. Where copy is marked **⚠ DRAFT**, it is newly written and must not ship without review.

---

## Build notes (read first)

**Stack intent:** static HTML/CSS/JS, no build step, no framework. One shared template (header + footer + nav) used by every page. Host on Netlify or Cloudflare Pages. Volunteers must be able to edit a page in plain HTML years from now.

**One template, applied everywhere:**
- Persistent **help bar** (phone + email) above the header on every page.
- **Header**: wordmark (left) + primary nav (right) + **"For health professionals" CTA button** (right of nav, visually distinct).
- **Primary nav = 5 items only:** Home · Orientation · Support · What's On · Support Our Work. *(labels may be refined — see each section)*
- **Footer**: grouped links (incl. the professionals CTA again, utility links, crisis line, charity number).

**The professionals-page rule (important, easy to get wrong):**
For Health Professionals is a **full L1 section using the same template** (same header, nav bar, footer). It is simply **not listed in the primary nav**. Its entry point is the **header CTA button** (repeated in footer). Consequences for the builder:
- The nav never renders a For-Professionals item, so it never shows an active/on-state for it.
- The **CTA button carries the active state** when on that page.
- Because the full main nav is still present on the professionals page, **no "back to main site" link is needed** — every route home is already visible.
- Do **not** build a second template or a chromeless variant. Same structure, different active-state target.

**Cross-link, don't duplicate (the rule that generated this IA):**
Every section sorts by a *single axis* (identity / intensity / time / motive / audience). Content lives **once**, in the section whose axis defines it, and is **surfaced by cross-link** elsewhere. Cross-links marked `→ [target]`. If a build instinct says "copy this content into two pages," stop — link instead. The one deliberate exception is **crisis phone numbers**, which may appear on both the Support index and its sub-page because burying a 2am crisis number one click deep would defeat the purpose.

**Dates live in ONE place.** All dated/time-bound content is confined to **What's On**. Evergreen pages state *rules* ("first Thursday monthly"), never *instances* ("Thursday 6 Feb"). This is what stops the site going stale — the live V0 site currently has 2025 event dates written in past tense across several pages; do not replicate that pattern.

**Depth ceiling:** 3 levels max including downloads. Current plan reaches only 2 navigable levels (section → page); downloads are leaf assets, not a level.

**Draft copy handling for the builder:** render **⚠ DRAFT** blocks visibly flagged in the page (e.g. a tinted callout or comment banner) so no one mistakes them for approved copy. Everything not marked DRAFT is migrated from V0 and is safe to render as normal content.

**Assets available in repo** (`V0-current/`): six pamphlet PDFs (`assets/`); brochure cover images (`images/brochures/`); book cover images (`images/books/`); event images (`images/events/`); brand/logo (`images/brand/`); newsletter cover (`images/newsletter/`). Use these locally — do **not** hotlink the old WordPress domain (it 403s on hotlinks and is being decommissioned).

---

## Axis map

| Section | In primary nav? | Sorting axis | User's question |
|---|---|---|---|
| Home | — | — | (received and directed) |
| Orientation | Yes | Who you are | "Is this for someone like me?" |
| Support | Yes | Cadence + intensity | "What is this, what do I expect?" |
| What's On | Yes | Time | "When is it, where, what do I bring?" |
| Support Our Work | Yes | Motive (giving) | "How can I help sustain this?" |
| For Health Professionals | **No — header CTA** | Audience (task-focused) | "How do I order / refer / train?" |

---

## Home  `index.html`

*Job: receive and direct. Not marketing. No dates, no event promotion. Reads the same in week one of grief as in year ten.*

**Layout, in priority order:**
1. Help bar: `0508 SANDSA (726 372)` + `info@sandsauckland.org.nz`. Unconditional, the floor of the site.
2. Hero line: **"A little life, not a little loss."** + one line of reassurance (from V0 home: *"…supporting families…who have experienced the death of a baby at any gestation, and under any circumstance."*)
3. **PRIMARY doorway — visually dominant, alone or first:** the newly-bereaved entry. Relationship-neutral wording (see Orientation §"Primary doorway wording" for the ⚠ DRAFT candidates). This is the single most prominent interactive element on the page.
4. **Secondary doorways — quieter row beneath, equal to each other, subordinate to the primary:**
   - My loss was a long time ago
   - I'm pregnant again
   - Someone I love has lost a baby
5. Quiet welcome paragraph (V0 home copy: *"Pregnancy and childbirth are a time of expectation…"* — 4 short paras, migrate verbatim).
6. Footer.

**Hierarchy rule for the builder:** the four doorways are **not** four equal tiles. #3 (primary) outranks #4 (the three secondaries) in size, weight, and position. A person in the most acute state should barely have to read or choose.

**Explicitly NOT on the homepage:** next event / What's On feed / donation ask / "how we help" marketing grid. Leading a grieving person with promotion is insensitive; these live in their own sections and are reached when the visitor is ready.

---

## Orientation  `orientation/` (index + 4–5 sub-pages)

*Axis: **who you are.** The emotional front door — recognition before action. Each page validates the reader, briefly explains what Sands is, and hands off by cross-link to the specific Support items tuned to them. It curates; it does not duplicate.*

### Primary doorway wording — ⚠ DRAFT, needs DUAL review

*The label for the newly-bereaved (mother, father, partner, solo parent) must be **relationship-neutral**: name the loss, not who is grieving. "My baby died" defaults to mother (she carried the baby). "Our baby" erases solo mothers and presumes a couple. Splitting mother/father at the door forces an unwanted grief comparison and the asymmetry is real and unequal. So the doorway names the **event**, addresses the reader in second person, and lets the page inside hold all experiences side by side without ranking them.*

**Reviewer-facing candidates (pick/refine — do NOT ship unreviewed):**
1. "When your baby dies"
2. "Your baby has died"
3. "We're so sorry your baby died"

**Review requirement:** must be read by **both a bereaved mother and a bereaved father** — the distortion runs opposite directions depending on reader. This is the single highest-priority copy review in the project.

### `orientation/index` — "You are not alone"
- Intro: you're not alone; whatever happened, whatever gestation, however long ago. (draws on V0 home + about-us tone)
- Brief "how we help" — reassuring, not a marketing grid.
- Signposts to the pages below.

### `orientation/my-baby-died` — the newly bereaved  ⚠ DRAFT
*Relationship-neutral up front (see above). Inside, holds mother / father-partner / solo-parent experiences side by side, unranked.*
- No hurried decisions; you may feel differently tomorrow.
- What Sands offers right now, lowest-effort first.
- "Help you can get in the hospital" — support packs via Auckland City / North Shore / Waitākere hospitals.
- Note for builder: do **not** let this collapse back into a mother-default page. Father/partner and solo-mother must be visibly present in the body.
- Cross-links: → [Support: Contact us] · → [Support: Support packs] · → [Support: Monthly group]

### `orientation/loss-long-ago` — ⚠ DRAFT
*Permission-granting. Its presence on the homepage is itself the message: the door is still open.*
- No expiry on grief; never too late; no reason needed to make contact now.
- Anniversaries, due dates, birthdays reignite grief years on — not a step backwards.
- Cross-links: → [Support: Monthly group] · → [What's On: remembrance] · → [Support: Newsletter]

### `orientation/pregnant-again` — ⚠ DRAFT
*Subsequently-pregnant parent — distinct, currently near-invisible on the live site (only a passing "subsequently pregnant" mention in V0 about-us).*
- Pregnancy after loss is not the same as pregnancy; fear and joy together.
- Welcome to contact us and to attend meetings.
- Cross-links: → [Support: Contact us] · → [Support: Monthly group]

### `orientation/someone-i-love` — ⚠ DRAFT
*One group: partners, grandparents, whānau, friends. People who love someone grieving — often grieving themselves.*
- **Builder caution:** this must NOT become the de-facto "dads" entrance. A bereaved father goes through the primary door as a parent; this page is for those supporting a bereaved parent (and for grandparents/siblings whose own grief is real but different).
- Fathers & partners as supporters; grandparents (double load — own grief + watching their child suffer); brothers & sisters (supporting surviving siblings).
- Cross-links: → [Support: Online groups — Dads / Grandparents chats] · downloads below.
- ⬇ *Fathers Grieve Too* · ⬇ *The Loss of a Grandchild* · ⬇ *When a Baby Brother or Sister Dies* (PDFs in `assets/`)

### `orientation/about` — "About us" (the credentials half of orientation)
*Lower-traffic need: funder / member / journalist checking legitimacy. Warmth lives in the index; this is the record. Migrate from V0 `about-us.md` + `about-org.md`.*
- Who we are; parent-run; all volunteers bereaved parents; not counsellors — we listen. (V0 about-us, verbatim-able)
- Part of Sands NZ Inc.; full registered name "Sands NZ Incorporated – Auckland group."
- Aims (4 bullets) + Philosophical Statement incl. **Te Tiriti o Waitangi** (V0 about-org, verbatim-able).
- **Charities Commission CC30352.**
- How we're funded: **Ministry of Health funds support packs nationally; everything else runs on grants + donations.** (from V0 donate.md — a credibility fact not previously surfaced)
- Cross-link: → [Support Our Work] (tight coupling — see that section).

---

## Support  `support/` (index + sub-pages)

*Axis: **cadence + intensity**, ordered **active → passive** (top of every list = lowest energy required). Answers "**what they are / what to expect**" — warm, second-person, present-tense, **NO dates**. Time-bound offerings appear here as *standing categories* that point out to What's On.*

**Index page ordering (active → passive), and a corrected grouping:**

### GROUP A — Talk to someone now (contact channels)
*Rationale: "contact us" and "contact a crisis line" are the SAME need (a human on the phone now) and belong together, above "explore other charities later." Sands' own channel is always top; crisis lines rank by urgency but never above Sands.*

1. **`support/contact` — Sands phone & email.** PRIMARY, always first.
   - V0 support.md + support-phone.md, verbatim-able: phone/email; if you can't make the first call, a family member or friend can; message returned within 24 hrs; volunteers are bereaved parents, not counsellors.
2. **`support/online` — Sands online groups.** Closed Facebook groups run by Sands NZ (Bereaved Whānau / Bereaved Dads / Bereaved Grandparents / Whānau Info). V0 support-online.md, verbatim-able.
3. **Immediate help beyond Sands (crisis & 24-hr lines).** ⭐ LIFTED UP from the old "other support" bucket — these must be reachable fast, framed as *immediate help beyond Sands*, never above Sands' own line. Inline on the Support index AND on the contact sub-page (the one deliberate duplication).
   - **Healthline (24 hr): 0800 611 116**
   - **Lifeline (24 hr): 0800 543 354**
   - **Crisis Team, Auckland City (CATT): 0800 800 717**
   - **Plunketline: 0800 933 922**
   - Relationship Services: 0800 735 283
   - *(Note added sensitively re: suicide/crisis — this content touches distress.)*

### GROUP B — When you're ready (standing support offerings, active→passive)
4. **`support/group` — Monthly support group** *(standing fact, not the next date)*.
   - What it is / what to expect walking in; adults only; you needn't speak; facilitated by a volunteer. (V0 support-groups.md)
   - Standing pattern: **first Thursday monthly, Feb–Dec (no January), 7:15–8:45pm, Garlick Room, Mount Albert Community & Leisure Centre, 773 New North Rd** — stated as a *rule*.
   - → [What's On: next meeting date]
5. **`support/events` — Events & remembrance** *(standing category — what they ARE, not when)*.
   - What remembrance means at Sands; who it's for (any gestation, any time since loss); the kinds of events (Baby Loss Awareness Week, Global Wave of Light, Annual Remembrance Day).
   - → [What's On: this year's dates, venues, RSVP]
6. **`support/packs` — Support packs** *(passive; also the hospital pathway)*.
   - What's in a pack (info pamphlets, inkless kits, memory booklets); why memory-making matters; how to get one (via hospitals, independent LMCs, or direct). (V0 support-packs.md)
   - ⬇ six pamphlets (PDFs in `assets/`, covers in `images/brochures/`): The Next Few Days · Your Baby's Funeral · Fathers Grieve Too · When a Baby Brother or Sister Dies · The Loss of a Grandchild · Transporting Your Baby.
7. **`support/reading` — Books & reading** *(most passive; read alone)*.
   - **NZ books** (V0 resources-books.md, verbatim-able, covers in `images/books/`): *What's Happened to Baby?* (Skylight/Sands/SIDS); *A Tribute to Tabitha-Rose* (ed. Vicki Culling — order via Sands Wellington-Hutt Valley, sandswgtnhutt@gmail.com, $20+$5 post); *Baby Gone* (Jenny Douché, babygone.com); *Holding On & Letting Go* (Vicki Culling, holgbook.com).
   - **Auckland Libraries catalogue** (V0 resources-library.md, verbatim-able) — organised by loss type: Baby Loss / Stillbirth / Neonatal-Newborn / Miscarriage / Stories from Parents / Subsequent Pregnancy / For Children. Full annotated title lists present in source.
8. **`support/newsletter` — Expressions** *(a thing you receive/read alone)*.
   - What it is; quarterly; how to receive (PDF or post); invitation to contribute. (V0 resources-newsletter.md)
   - **Privacy rule (must preserve):** the online edition omits the remembrance page by design; the email/print edition includes it.
   - → [What's On: latest issue] (cover in `images/newsletter/`)

### GROUP C — Explore when ready (other organisations)
9. **`support/other-organisations`** — stays LAST. The "explore later" tier (distinct from crisis lines, which moved up to Group A).
   - Sands NZ (national); Miscarriage Support; Miscarriage Matters; Skylight Trust. (V0 support-other.md)

### `support/wheturangitia` — Whetūrangitia
*Government resource; distinct enough to warrant its own page. Migrate V0 resources-whet.md (has real substance now).*
- Launched 2019 at Sands National Conference; joint initiative across 6 govt agencies (DIA lead, MSD, IRD, MoH, Justice, ACC); brings parents' rights, legal/financial/burial/coronial info into one resource.
- Keep the **meaning of Whetūrangitia** (stars returning to the sky to join ancestors; whakataukī) — dignified reo Māori content that supports the wider te-reo decision.
- Link: wheturangitia.services.govt.nz

### `support/online-resources` — Online resources (podcasts, media, free books)
*Rich list, migrate V0 resources-online.md close to verbatim:*
- *The Colors of Love and Loss* (free children's grief book, Dr Joanne Cacciatore); *Misconceptions* (NZ web series, 2020); podcasts — *At a Loss* (feat. Sands Auckland's Sara Lane), *The Unthinkable* (RNZ/Susie Ferguson), *The Human Race*, *The Worst Girl Gang Ever* (UK), *Dad Still Standing* (UK); *Dealing With Grief* guide.

---

## What's On  `whats-on/`

*Axis: **time.** Answers "**when they are: dates & details.**" The changing-content section — the ONLY place dates live, so evergreen pages can't rot and volunteers have exactly one place to update. Plain, factual register. Every item links back to its standing home in Support. Reached when ready — never pushed onto the homepage.*

**Index: chronological "what's coming up" + latest news + current newsletter.** Each entry carries: title, date, time, venue, what to bring, and — critically — **organiser contact for RSVP where applicable** (the V0 Wave of Light content has a named RSVP contact, so the What's On item template needs an organiser-contact slot, not just date/venue).

**Item types (structure, not this year's stale data — do NOT copy 2025 dates from V0):**
- **Monthly meeting** — next date/time/venue/room. → [Support: group]
- **Baby Loss Awareness Week (9–15 Oct)** + **Annual Remembrance Day** (a Sands Auckland service). → [Support: events]
- **Global Wave of Light (15 Oct, 7pm)** — note this is *three parallel offerings*, so the section needs room for all three:
  1. In-person candle-lighting ceremony (external partner venue; **named RSVP contact + phone** — organiser-contact slot).
  2. Sands NZ **online national service** (join by link; hosted rotating between regions).
  3. **Light Up Aotearoa** — landmarks lit blue/pink/purple nationwide (long list incl. several Auckland landmarks by name); live map link for lighting times.
- **Sands NZ National Conference** — biennial; next dates "posted when available." → cross-links to sandsnationalconference.org.nz.
- **Latest Expressions issue** + link. → [Support: newsletter]
- **News / notices** — cancellations, changes (ephemeral; consume any time).

**Ops note for the org (surface in a build comment):** this is the section with a monthly update rhythm; it is the *only* place dates should ever be entered.

---

## Support Our Work  `support-our-work/`

*Axis: **motive (giving).** Different audience — capacity to give, may or may not be bereaved. Owns its own page, BUT tightly cross-linked with Orientation/About — the two are halves of one trust conversation ("who we are / how we're funded" ↔ "how you can sustain us"). Neither absorbs the other; they lean on each other. Reached deliberately; surfaced elsewhere only as quiet, low-placement, contextual callouts — never top-of-page, never in the acute path.*

- **Framing opener:** ground in mission, then the ask. Migrate V0 donate.md context: **MoH funds support packs nationally; no other govt funding**, so donations fund meetings, resources, BLAW events, hospital visits, volunteer training + self-care.
- **Donate — two channels** (both from V0 donate.md, previously missing):
  - Internet banking: Westpac, Sands New Zealand – Auckland, **03-1555-0050567-02**.
  - **Givealittle: givealittle.co.nz/org/sandsaucklandcentral** ⭐ (a live second channel not in v1).
  - Receipts: email info@ with contact details.
- **Membership** — join to belong *and* to sustain. Low-placement contextual CTA callouts may appear at the foot of Orientation/Support pages where belonging is relevant — never solicited in the acute path.
- **Grants & sponsorship** — for funders and businesses; what partnership looks like.
- **Fundraising events** — dated instances → [What's On].
- Cross-link: → [Orientation: About] (and About links back here).

---

## For Health Professionals  `for-professionals/`  ⭐ (L1 section, NOT in primary nav — header CTA entry)

*Separate audience whose needs conflict with the grief journey — a midwife at work is not on that journey. **Same site template** (header, nav bar, footer all present); simply absent from the primary nav; entered via the **header CTA button** (repeated in footer), which carries the active state here. No "back to main site" link needed — the full nav is already visible. Register: plainer, task-focused, efficient. Can be a single long landing page or a short index + a couple of sub-pages; builder's discretion, but keep it self-contained.*

- **Ordering support packs & kits** for families in your care (via Sands; packs are the MoH-funded item). ⬇ all six pamphlets (link to `assets/` and/or Sands NZ `sands.org.nz/help-pamphlets.html`).
- **Referring a family / when to contact Sands** — at diagnosis, during pregnancy, at death, in subsequent pregnancy. (V0 resources-info-professionals.md)
- **Self-care for professionals** — you can call us too. (V0, verbatim-able)
- **Training days & the Vicki Culling Associates partnership** ⭐ (substantial, previously under-represented — V0 events-training.md):
  - Standing partnership since 2021: Sands NZ + Vicki Culling Associates train midwifery, nursing & social work **students** — free, online content + webinars with bereaved parents, ~3× per year. Topics: Early Loss, Perinatal Hospice, Ending a Wanted Pregnancy, Self-Care for Professionals.
  - Sands Auckland volunteers also give talks; occasional professional workshops (history of sold-out events 2014–2017 shows track record).
  - Registrations via vca.co.nz and Sands NZ Facebook. Dated instances → [What's On].
- **Builder note:** because this shares the template, the training *dates* still belong in What's On; this page describes the *standing* offering and links out.

---

## Utility (footer-level, not primary nav)
- Contact (also in persistent help bar).
- Accessibility statement (WCAG 2.2 AA commitment).
- Privacy (note the newsletter remembrance-page privacy rule lives in Support/newsletter).
- Leave-this-site (quiet footer link).
- © Sands Auckland Central · **Charities Commission CC30352**.

---

## Change log vs v1 (what the V0 review + feedback changed)

1. **Homepage doorways are now hierarchical** — primary (newly bereaved) dominant; other three secondary. Not four equal tiles.
2. **Primary doorway reworded to be relationship-neutral** — names the loss, not the griever; 3 ⚠ DRAFT candidates provided; flagged for dual mother+father review. "Someone I love" explicitly guarded against becoming the "dads" door.
3. **Support regrouped into A/B/C** — contact-us + crisis-lines share a need-group (talk to a human now), lifted above "explore other charities." **Crisis/24-hr lines moved up** and are now fully labelled (Healthline, Lifeline, CATT, Plunketline, Relationship Services — the four+ bare numbers flagged "unlabelled" in v1 are resolved from source). Sands' own channel stays top regardless.
4. **Support Our Work owns its page but cross-links tightly with About** ("between the two"). Adds **Givealittle** channel and **MoH-funding** context, both newly found in V0 donate.md.
5. **For Health Professionals = L1 section, not in primary nav, header-CTA entry, same template** (per your model). No chromeless variant. Expanded with the **Vicki Culling Associates** training partnership.
6. **Content enrichment from V0** (migrate close to verbatim): full NZ book list; Auckland Libraries catalogue by loss-type; online resources/podcasts list; Whetūrangitia substance + reo meaning; Wave of Light three-offering structure with organiser-RSVP slot; Light Up Aotearoa landmark list.

## Open decisions still flagged
- **Primary doorway wording** (⚠ dual review) — highest-priority copy task.
- **te reo Māori** breadth across the site — Whetūrangitia and conference content show the org already uses it; decide deliberately vs by accident.
- **All ⚠ DRAFT orientation copy** — needs bereaved-parent review before ship.
- **Stale-date discipline** — confirm the org has a monthly owner for What's On; it's the linchpin of the no-rot design.
