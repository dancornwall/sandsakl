# Website Dev notes — Sands Aotearoa websites

**Dated:** 16 Aug 2026  
**Audience:** future Website Dev, when email feedback lands and a site change is needed.  
**Repo path:** `docs/agent-learning/GROK-BOT.md`.

These are my own working notes after reading the planning briefing and reviewing the three live sites (Auckland, National, Sands UK). They exist so the next session does not have to rediscover the same map.

---

## 1. Status and how to use this file

This file is **agent learning**. It is not:

- an information architecture
- a design brief
- a third content schedule
- a source of truth for copy, IA, or visual decisions
- a place to “pick a winner” among open contradictions

**Precedence stays with the planning already in the repo.** If this note and a planning doc disagree, the planning doc wins. If this note and an email from Dan or a volunteer disagree, ask — do not silently prefer this file.

When you receive a change request:

1. Identify the product (Auckland vs National).
2. Check the relevant ROADMAP / per-page brief / audit for that page.
3. Check the contradiction table in §8 of this file (and Auckland README / ROADMAP) so you do not “fix” an open decision.
4. Make the smallest volunteer-editable HTML/CSS change that honours the already-decided rules.
5. Flag DRAFT copy. Do not ship unreviewed bereavement-path wording.

Cite, do not duplicate. Start from root `README.md`, `products/auckland/README.md`, `products/auckland/ROADMAP.md`, and `products/national/audits/`. Live-site findings from 16 Aug 2026 are synthesised in §5–7 of this file. They are research, not planning. Do not copy their recommendations into `v2-Claude/planning/` or treat them as signed-off IA.

---

## 2. Repo map and allowed workspace

**Only repo:** `sandsakl`.  
**GitHub:** https://github.com/dancornwall/sandsakl.git · branch `main`.  
**Local path (Dan’s machine):** `D:\__SORTING - in progress\4. Projects\Sands Website\sandsakl`

Do not invent a second repo. This file lives at `docs/agent-learning/GROK-BOT.md` so it cannot be mistaken for IA or a brief.

### Workspace shape (from root README + briefing)

```
sandsakl/
  README.md                          workspace index — two products, not one app
  shared/                            EMPTY except policy README — tokens later
  .claude/launch.json                stale cwd (says v3-build, real path is products/auckland/v3-build)
  products/national/                 PRIORITY product (sands.org.nz)
    README.md + audits/              live sitemap + gap vs Auckland v3
    v1-build/                        draft HTML: Auckland v3 clone + N1–N5 / S1–S4
  products/auckland/                 regional prototype + reference
    README.md + ROADMAP.md
    V0-current/                      live WP extract — source of truth for *existing copy*
    v1-Claude/                       superseded (wrong palette + old IA)
    v2-Claude/planning/              IA, design system, per-page briefs
    v3-build/                        16-page draft static site
```

**Stack constraint (all products, non-negotiable):** static HTML/CSS/JS. No build step, no framework, no CMS. A volunteer must be able to edit a page in plain HTML years from now. Host Netlify or Cloudflare Pages. Target WCAG 2.2 AA. Self-host open fonts at launch. No JS tabs as a substitute for real pages.

**Org facts that recur (confirm before shipping any number):**

- Parent-run. Every volunteer is a bereaved parent. **Not counsellors.** Peer support: listen and share.
- Any gestation, any circumstance.
- Tagline: **“A little life, not a little loss.”**
- Emotional thesis: **continuity, not closure.** The baby continues to matter. No “move on / heal / forget.”
- Auckland charity **CC30352**. Full name: *Sands NZ Incorporated – Auckland group.*
- MoH funds support packs nationally; everything else is grants + donations.
- Auckland phone: **0508 SANDSA (726 372)** — a **callback mobile**, not a staffed helpline. Email `info@sandsauckland.org.nz`.

---

## 3. Document precedence

Short version. Full table and tensions: `products/auckland/README.md` and `products/auckland/ROADMAP.md`.

1. **ROADMAP decision log** (`products/auckland/ROADMAP.md`) wins over `sands_content_schedule_v2.md`.
2. **Per-page briefs** (`products/auckland/v2-Claude/planning/00-global-template.md` through `07-support-reading.md`) win over the content schedule where they disagree.
3. **`products/auckland/v3-build/README.md`** records deviations that happened *during build* (shared Home header; Support jump-to terracotta). Those are facts about the draft, not silent new policy — confirm before treating them as locked.
4. `sands_design_system_v1.md` is history. **v1_4** is current.
5. `02b-support-l2-subtemplate.md` is reference-only (written for ~10 Support children; Support later collapsed to 3).
6. `v1-Claude/` is superseded — wrong palette, old IA. Keep only for `_redirects` history.
7. `v2-Claude/planning/README.md` still says “no HTML is built yet.” **Ignore.** `v3-build/` exists.
8. Root `README.md` still says National “Structure TBD.” **Stale** relative to `products/national/v1-build/` + audits.
9. `V0-current/content/*.md` is source of truth for **existing live copy**, not for IA.

This learning file sits **outside** all of the above. It does not enter the chain.

---

## 4. What the existing planning already decided

Pointers, not a rewrite. Details live in the briefs and ROADMAP.

### Auckland IA axes (one question per section)

Decided in `sands_content_schedule_v2.md` and confirmed/overridden by briefs `00`–`07` + ROADMAP.

| Section | In primary nav? | Axis | User question |
|---|---|---|---|
| Home | logo only | receive & direct | — |
| Start Here (`orientation/`) | Yes | Who you are | “Is this for someone like me?” |
| Support | Yes | Cadence + intensity (active → passive) | “What is this, what do I expect?” |
| What’s On | Yes | Time | “When, where, what do I bring?” |
| Support Our Work | Yes | Motive (giving) | “How can I help sustain this?” |
| For Health Professionals | **No** — header CTA | Audience / task | “How do I order / refer / train?” |

The rebuild is a **re-sort by axis**, not a relabel of the live WordPress tree. Donate leaves About. Training leaves Events. Resources dissolves into Support. Contact is both a header button and a Support child.

### Support collapse

From ~10 Support sub-pages down to **3 real children:** `contact`, `brochures`, `reading`. Everything else is an on-index block (active → passive): Talk to us · Meetings · Newsletter / Expressions · Baby loss events (evergreen → What’s On) · Other organisations · Whetūrangitia · Brochures teaser · Books teaser.

A type earns its own page only if it is more than about one screen **or** it is a frequent cross-link target that needs a stable URL. See brief `04-support-index.md`.

### Help bar removed

Decision log + `00-global-template.md`: **no persistent phone/email bar.** Unconditional phone lives **only in the footer**. Elsewhere the number is contextual (Support). Reason: 0508 is a callback mobile, not a staffed hotline. Putting it in a “helpline” chrome would set a false expectation. This is a decided Auckland rule, not an open preference.

### Palette and design (already decided, not to re-invent)

- Real brand: violet `#472f92` + terracotta `#e5976a` from the live Auckland theme CSS.
- v1-Claude’s invented BLAW lilac/rose/amber is **forbidden**.
- Violet carries the site; terracotta is **rationed to action** (“reach a person”). Brand terracotta fails AA as body text — links use `--terracotta-800` `#A64F28`.
- Type: Fraunces (display only) + Public Sans (body/UI). Self-host woff2 at launch. Drafts still hotlink Google Fonts — known debt.
- Quiet, dignified, warm, private. Not sad, clinical, childish, sentimental, overtly religious, or inspirational-poster.
- Imagery: public coded symbols only. Never private artifacts (ink footprints, “born sleeping” albums). Butterflies/rainbows = continuing presence **yes**; recovery/rainbow-baby **no**.
- Full tokens: `products/auckland/v2-Claude/planning/sands_design_system_v1_4.md`.

### Hard rules already in force

1. **Cross-link, don’t duplicate.** Content lives once, in the section whose axis defines it.
2. **Dates live in ONE place** (What’s On). Evergreen pages state *rules* (“first Thursday monthly”), never *instances* (“Thursday 6 Feb”).
3. **Not marketing.** No donation ask or event promotion in the acute grief path. (Home later grew a *structural* What’s On teaser — see §8; do not treat that as licence to date the homepage.)
4. **DRAFT copy is flagged** and must not ship without bereaved-parent review. Highest stakes: primary-doorway wording, dual review by a bereaved mother **and** father.
5. Depth ceiling: 3 levels max including downloads; current plan is 2 navigable levels.
6. Nav label “Orientation” → user-facing **“Start Here”**. Folder path stays `orientation/`.
7. Homepage doorways are hierarchical: newly-bereaved is dominant; the other three are secondary. Not four equal tiles (that was v1).
8. Bereaved fathers go through “When your baby dies,” not a separate dads door. The fourth doorway is “Someone I love has lost a baby.”

### National = Auckland skeleton + N1–N5 + S1–S4

Do **not** invent a new IA from the live national menu. The gap analysis (`products/national/audits/gap-analysis-vs-auckland-v3.md`) is the hypothesis: national is a network-scale version of the same product.

**National-unique (N1–N5)**

| ID | Capability | v1-build home |
|---|---|---|
| N1 | Multi-group finder / local support routing — the core differentiator. National should become source of truth, not a traffic router to regional sites. | `support/find-a-group.html` |
| N2 | NZ Board (child of About; refresh roster) | `support-our-work/board.html` |
| N3 | National conference, elevated (detail can stay on sandsnationalconference.org.nz) | `whats-on/index.html#conference` |
| N4 | Volunteer / group training (distinct from Auckland student/VCA training) | `support-our-work/training.html` |
| N5 | National BLAW / Light Up Aotearoa / Wave of Light | `whats-on/index.html#blaw` etc. |

**Shared gaps both products lack (S1–S4)** — build once, reuse:

| ID | Capability |
|---|---|
| S1 | Memory-making guide — valuable; current live page is insensitive (e.g. “go on a holiday”). Rebuild tone. |
| S2 | Free/donated memorial services (Glover, Huggable Hearts, Fidds). **Drop My Angel** cremation jewellery. |
| S3 | Expanded pamphlet set — keep Auckland six; add Early Loss, A Heartbreaking Choice, Post Mortem. |
| S4 | Certificate of Life |

National product IA is **implied by the clone**, not formally signed off. Root README still says TBD. Gap analysis §7 checklist was explicitly not done. See §8.

---

## 5. Live sites as of 16 Aug 2026

Synthesised from live walks of sandsauckland.org.nz, sands.org.nz, and sands.org.uk on 16 Aug 2026. Do not treat this section as a replacement for the national audits.

### Auckland — sandsauckland.org.nz

**Purpose.** Small regional-chapter brochure site for Sands Auckland Central. Tell recently bereaved parents/whānau in Auckland how to get support; secondarily inform health professionals. WordPress custom theme (`/wp-content/themes/sands/`), Dispersion Group. `sandsauckland.org.nz` redirects to `www`.

**Live IA (old axes — About / Support / Events / Resources / Contact).** Donate is buried under About. No search. Homepage is a hero + one quote + a single button to `/about/` — the nav is the only way anywhere else.

**Voice.** Gentle, first-person-plural, non-clinical, explicitly non-professional. Te reo used naturally (whānau, whetūrangitia, whakataukī). Lived-experience credibility stated up front: “All volunteers are also bereaved parents… We are not counsellors.” This voice is the asset. Rebuild copy should come from V0 extracts, not from invented warmth.

**Concrete facts (confirm before shipping):**

- Phone: **0508 SANDSA (726 372)** — 24-hour *callback* promise, not live answer. Email `info@sandsauckland.org.nz`.
- Monthly group: **first Thursday, Feb–Dec, 7:15–8:45pm**, Garlick Room, Mount Albert Community & Leisure Centre, 773 New North Rd. No January. No childcare — adults only.
- Closed Facebook groups (Bereaved Whānau / Dads / Grandparents / Whānau Info) are load-bearing for meeting updates.
- Support packs / inkless kits go to Auckland City, North Shore, Waitakere hospitals + independent LMCs.
- Expressions magazine is **Auckland-produced**, not national.
- Givealittle `org/sandsaucklandcentral`. Westpac `03-1555-0050567-02`, Sands New Zealand – Auckland.
- Crisis list on Other Support: Healthline 0800 611 116 · Lifeline 0800 543 354 · CATT Auckland 0800 800 717 · Plunketline · Relationship Services. Sands’ own channel should always sit visually above these.

**Strengths.** Warm, low-pressure, honest scope. Venue down to the room. Fast, no popups. Whetūrangitia page is a standout. Resource shelf (NZ books, Auckland Libraries by loss type, podcasts) is richer than the IA suggests.

**Gaps / live bugs.**

- Homepage does no work. No support CTA, no phone above the footer, no “I’ve just lost my baby — start here.”
- `/about-us/` and `/contact-us/` **404**. Canonical paths are `/about/` and `/contact/`.
- Events are stale in Aug 2026: BLAW written as a recap of Sunday 12 Oct **2025**; conference describes June **2025**; Training Days still lists 2014–2017 workshops.
- Duplicate About pages; thin Contact (~4 lines); donate hidden; no volunteering pathway; no privacy/people/financials; `lang="en-US"`; hover-only dropdowns; low-contrast lilac quote text.
- No findable content for siblings, grandparents, subsequent pregnancy, or employers as topics — those exist in the *planned* Orientation children, not on the live site.

V0 captures of this live copy: `products/auckland/V0-current/content/*.md` (22 files). That folder is the copy source of truth for what is currently said, not for what should be said.

### National — sands.org.nz

**Purpose.** National umbrella for a volunteer, parent-run network. Three homepage cards: “I need support” / “I need information” (professionals) / “I want to help.” Primary jobs: find a local group, first-days guidance, pamphlets, online chat, donate, contact the board. Static HTML, ~2015 Bootstrap + Camera slider. Priority product in the repo.

**Live IA.** HOME / ABOUT SANDS / INFORMATION (phantom `#` parent) / SANDS SUPPORT / CONTACTS + search icon + **Sands Groups Login** (401 on `/committee/index.html`). Footer sitemap is much larger than the five-item nav — ~30 pages hidden. Home currently equal-weights Support, Information/Professionals, and Donations. Stakeholder instruction: **rebalance so acute support dominates.**

**Voice.** Same family as Auckland: “A little life, not a little loss.” “We are so sorry that your baby has died.” “Non-Judgemental support for any gestation any reason.” Founding history (Holly, 18 Feb 1986, paper shawl) is national-only substance worth keeping. Certificate of Life already uses bilingual framing (“Every pēpi | baby…”) — the rebuild should extend that, not invent it. Live site is sloppy with macrons (`whanau`, `M?ori` mojibake).

**Relationship to regional sites.** Hub for semi-autonomous groups, not a replacement for them — until N1 is rebuilt as source of truth.

- Auckland Central — sandsauckland.org.nz — live, cleaner than national.
- Wellington & Hutt — sandswellingtonhutt.org.nz — live.
- Bay of Plenty — **sandsbop.co.nz DNS dead**; sandsbayofplenty.weebly.com works.
- Timaru — **sandstimaru.co.nz DNS dead**.
- International: Sands Australia, Sands UK (links-only page; stakeholder wants this merged into secondary references).

**Concrete facts (confirm before shipping):**

- Footer: PO Box 136, Hamilton 3240 · chairperson phone **0508 726 372** (same digits as Auckland’s 0508 SANDSA — do not assume it is the same callback mobile without checking) · `info@sands.org.nz` (flagged to confirm).
- Givealittle `org/sands`. Regional bank account numbers are pasted into group-directory copy — a privacy/ops smell.
- Group directory: one long `supportgroups.html`, ~25 groups in 11 regions, free text, no map, no postcode filter. Contacts in the *draft* finder are empty `flag` placeholders.
- Board headed **2019–2021**. Training last noted **2018**. Research headlines 13th PMMRC report (**Sept 2019**). Homepage still advertised AGM **15 June 2025** on 16 Aug 2026. BLAW pages are 2024/2023.
- 2012 press release 404 (noted in the national audit).
- Three near-duplicate contact forms; unused Mailchimp join to kill; expired Videos page to kill; unattributed photo of a real person (PPI) on “first few days” to remove.

**Strengths.** Voice. Real crisis-moment content (first few days, memory-making, transporting your baby, funeral). National coverage is visible. Goals, philosophy, founding history, board bios. Light, no cookie wall.

**Gaps.** Stale everything. Dead regional domains. Hidden IA. 49KB wall of text instead of a finder. Donate is a Givealittle handoff plus bare account numbers. No crisis affordance; 0508 buried in footer. Te reo and tikanga are an afterthought. Stock photography. Inconsistent brand across the federation. Accessibility failures throughout. Groups login 401 sitting in public nav.

National live sitemap + stakeholder dispositions: `products/national/audits/current-state-sitemap.md` (dated 5 Aug 2026). Gap vs Auckland v3: `products/national/audits/gap-analysis-vs-auckland-v3.md`.

### How the two live sites relate

Auckland is the regional prototype the rebuild is actually designing. National is the priority *product* but its live IA is not the model. Patterns travel Auckland → National (axes, tokens, tone, static-HTML discipline). Copy does not travel blindly: Mount Albert meetings, CATT Auckland, Expressions-as-Auckland-magazine, and Auckland hospital names must not remain in the national draft. The national v1-build still contains a lot of that regional copy — “structure first,” not launch copy.

---

## 6. Sands UK as a quality benchmark

This research was **not in the repo** before 16 Aug 2026. There was no competitor teardown in planning. The live national page `international-sands.html` is a links-only list, not research. **Do not mix this section into Auckland planning briefs.** Steal patterns. Do not steal UK content, UK law, or UK fundraising.

Site: sands.org.uk. Walked 16 Aug 2026. Findings synthesised below; they were not in the repo before this date.

UK is a large charity with a staffed helpline, shop, training subdomain, campaigning arm, and four-audience nav (Support for you / Get involved / Professionals / About Sands). Aotearoa Sands is a volunteer parent-run network. The quality gap is real; the org-model gap is also real. Benchmark the *craft*, not the scale.

### What to steal (patterns, not content)

1. **Support-first, donate-second.** Hero is a support message. Donate is a utility button and a mid/low-page band. Donate never intercepts a grieving user. (Auckland planning already says this; live Auckland hides donate under About — the rebuild should keep donate *out of the grief path*, not hide it from people who came to give.)
2. **Four-item audience nav with depth in mega-menus.** Low top-level load. Auckland already chose *axis* nav rather than UK’s *audience* nav — do not replace Start Here / Support / What’s On / Support Our Work with a UK clone. The lesson is cognitive load, not their four labels.
3. **EXIT SITE** quick-escape, fixed on every page. Thoughtful privacy/safety affordance. Not in Auckland briefs. Open product question — do not add it in a drive-by.
4. **Loss-type router** (“Support for all types of baby loss”): one-sentence plain definition per type + find-out-more. Lets someone self-identify without reading someone else’s grief. Auckland Orientation is *who you are in time/relationship*, not *what kind of loss*. Complementary, not a substitute. Could be a Support or Start Here child later; it is not currently briefed.
5. **Named cohort pages** as a *pattern*: men, siblings/young people, long-ago bereaved, specific communities, TFMR, returning to work. Explicit inclusion beats a generic Support page. Auckland already has long-ago and someone-I-love doorways; fathers go through the primary doorway; mothers/solo-parent “learn more” is a known gap (`Fathers Grieve Too` has no mother equivalent). Copy the *idea of naming people*, not the UK category list.
6. **Group finder as crawlable A–Z** (name, phone, email, website) — no JS map required. Directly relevant to N1. Live national is a 49KB wall of text. UK’s directory is the quality bar for the rebuild.
7. **Helpline transparency** — hours, who answers, call length, email SLA, confidentiality limits. Steal the *honesty*. Do **not** steal the chrome: Auckland’s 0508 is a callback mobile. Publishing UK-style “helpline” UI on Auckland would be a lie. National routing via N1 is still TBD.
8. **Professionals as a separate stream** so clinical content never dilutes the family journey. Auckland already demotes this to a header CTA, same template, no “back to main site.” Good. Keep it.
9. **Trust signals** (impact, finances, trustees, charity numbers in footer). Live Auckland has almost none of this. Live national has board + goals but a stale roster. Rebuild should add privacy/terms (already flagged) without turning Home into an annual report.
10. **Rituals as content** (Wave of Light, remembrance), not only as fundraising. Auckland/National already run BLAW / Light Up Aotearoa / Wave of Light — elevate them (N5), don’t import Tree of Love / Sands Garden / Knit to Remember as if they were local.
11. **Concrete donation framing** (“£25 could provide a memory box”) is a pattern. NZ numbers and Givealittle mechanics are different. Do not invent impact figures.
12. **Story template in the parent’s voice, baby named.** Powerful. Would need bereaved-parent consent and a privacy rule (Expressions already omits the remembrance page online). Do not scrape or invent stories.

UK’s own Accessibility page is dated (IE8, Safari 5, 1024×768). **Do not copy it.** Write a modern WCAG 2.2 AA statement.

### What must not transfer to Aotearoa

- **NHS everything:** GP referral, National Bereavement Care Pathway (England/Scotland), hospital-liaison volunteers in NHS trusts, UK maternity inquiries.
- **Legal/definitional lines:** UK stillbirth at 24 weeks; NZ is **20 weeks / 400g**. TFMR legal framing, coroner vs NZ post-mortem consent, birth/death registration rules. Do not paste UK definitions onto a terminology page.
- **Fundraising mechanics:** Gift Aid, payroll giving, society lottery, Enthuse, Fundraising Regulator “Fundraising Promise,” UK charity numbers, UK legacy wording. NZ is Givealittle + bank transfer + (Auckland) Westpac + MoH-funded packs.
- **Equity categories:** UK names Black/African-Caribbean and South Asian communities because that is *their* perinatal disparity story. **Aotearoa’s equity story is Māori and Pacific perinatal mortality.** Asian communities may also need naming, but do not copy the UK heading. Pattern = named cohort pages. Categories = local.
- **Tikanga and te reo:** UK has none. Do not “add Māori” as decoration. Whetūrangitia, whānau, pēpi, tūpāpaku, urupā, hospital/whānau-room practice — these are already in live Auckland copy and in the Te Tiriti statement on About the Organisation. Breadth of te reo across the rebuild is still TBD (ROADMAP). Accidental macron-free `whanau` on national is a bug, not a style.
- Geography, football (Sands United FC), Welsh-language obligation, Language Line, 0808 freephone format, UK helpline hours.
- UK lexicon to use with care: they say “rainbow baby” and “born sleeping.” Auckland design system **forbids** rainbow-baby-as-recovery and forbids depicting private “born sleeping” albums. “The death of a baby” / “baby loss” / “bereaved families” *do* travel.

---

## 7. Live vs planned vs UK — the interesting gaps

The useful work is the three-way comparison. Live NZ sites under-serve the newly bereaved. Planning already chose a support-first Auckland IA. UK shows what support-first looks like at high craft — and several of those craft moves **conflict with already-decided Auckland rules**.

### Homepage that actually works

- **Live Auckland:** does nothing. One About button.
- **Live National:** three equal cards including donate. Carousel hides slides. AGM 2025 still up.
- **Planned Auckland:** hierarchical doorways, newly-bereaved dominant, Start Here as decision-support (not a card grid). Home brief added a What’s On teaser the content schedule forbade.
- **UK:** support hero, 3-up audience cards, helpline band, donate band *below*.
- **Do:** make Home receive-and-direct, acute path first. **Don’t:** equal-weight donate. **Don’t:** assume UK’s repeated helpline band is available to us (see next).

### Helpline prominence vs Auckland callback-mobile decision

UK repeats a “DO YOU NEED SUPPORT?” band (number, email, find a group) at top and bottom of Home and sitewide. That works because they run a staffed helpline with published hours and an SLA.

Auckland **removed the help bar** because 0508 is a callback mobile. Unconditional phone = footer only. Putting a UK-style band on Auckland v3 would re-open a closed decision and would misrepresent the service (a parent at 2am would think someone is waiting).

National is different: routing via N1, board emails, possibly still an 0508 in the footer. Whether national ever gets a repeated support band is **not decided**. Do not copy UK’s band onto national “because UK does it” and do not copy it onto Auckland at all.

### EXIT SITE

UK has it. Neither live NZ site does. Not in Auckland briefs. Genuinely useful for someone reading about baby loss on a shared device. If it is added, it is a product decision (and a small JS/CSS pattern), not a drive-by from a learning file.

### Loss-type router vs Orientation axes

UK: miscarriage / molar / ectopic / stillbirth / neonatal / TFMR / SIDS as a self-serve router.  
Auckland planned: who-you-are doorways (just happened / long ago / pregnant again / someone I love).  
Live NZ: pamphlets exist by topic (Early Loss, Fathers Grieve Too, When a Brother or Sister Dies…) but there is no router page.

These are two different questions. Do not flatten loss-type into Start Here, and do not invent a UK router as a sixth nav item. If a router is wanted, it belongs in Support or as a Start Here child, and it needs a brief. S3’s extra pamphlets (Early Loss, Heartbreaking Choice, Post Mortem) are the content that would sit behind it.

### Named cohort pages

UK is explicit. Live Auckland is not (fathers exist as a pamphlet and a Facebook group; grandparents similarly; no sibling page; no subsequent-pregnancy page as a findable topic). Planning adds long-ago, pregnant-again, someone-I-love, and routes fathers through the primary doorway. Mothers/solo-parent resource gap is logged, not filled. National has no equivalent IA yet (unsigned).

### Group finder

UK: A–Z, crawlable, enough metadata to act.  
Live national: one page, ~25 groups, 11 regions, dead BOP and Timaru domains, raw bank numbers.  
Planned N1: bigger buckets + filter; national as source of truth. Open query in the audit: is the first job **find a local group** or **explain what support is available**? Do not answer that here. Support-first vs groups-first is still open.

### Donate never intercepts grief

UK gets this right. Live national puts “I want to help” as a coequal home door. Live Auckland hides donate so thoroughly that people who *came* to give cannot find it. Planning: Support Our Work is its own axis; no donation ask in the acute path. Honour both sides of that — visible to givers, absent from my-baby-died.

### Trust, privacy, people

UK: finances, trustees, EEDI, Fundraising Promise, charity numbers in footer.  
Live Auckland: no privacy, no people, no charity number in footer, no safeguarding.  
Live national: board bios (stale), no real privacy/terms, Groups login 401 in public nav.  
Planning: privacy + terms are required on the future site; board is a child of About (N2), not equal weight; kill fake News.

### Memory-making and first days

Live national has the emotional core pages — and an insensitive memory-making page plus a PPI risk photo. S1 is “rebuild tone,” not “delete.” UK’s “Understanding why your baby died” cluster (post-mortem, reviews, complaints) is a pattern for hard practical content handled gently; NZ legal process is different, so rewrite locally.

### What not to learn from UK at the IA level

Do not replace Auckland’s axis nav with UK’s four audience items.  
Do not add a shop, lottery, or campaigning mega-menu.  
Do not stand up a helpline band.  
Do not import NHS pathways or 24-week stillbirth.  
Do not use UK community categories.

---

## 8. Open contradictions I will not resolve

If a change request “resolves” one of these in passing, stop and flag it. Do not pick a side in HTML.

| Topic | Older / other doc | Later / other doc |
|---|---|---|
| Persistent help bar | Content schedule: phone+email on every page | Decision log + `00`: **removed**. Footer only. |
| Home dated content | Content schedule: **explicitly NOT** on homepage | `01-home` §E adds a 3-col What’s On teaser (structure only; col 3 tbc). Built. |
| Home header | `01-home`: bespoke hero with embedded nav, no standard bar | v3-build: **shared header** because dark logo can’t sit on dark hero. Confirm direction. |
| Primary doorway wording | Content schedule: 3 DRAFT candidates, dual review. ROADMAP: still open, highest copy priority | `01-home`: **“When your baby dies” confirmed final** |
| Support IA | Content schedule: ~10 Support children | Brief `04`: **3 children**; rest on-index. Footer in `00` still lists the old 10 Support links. |
| Crisis lines on contact page | Content schedule: duplicate onto contact so 2am numbers aren’t one click deep | Brief `05` + `04`: **index only**. Flag: distress landing on `/support/contact` won’t see them. “Dan’s call.” |
| Packs as own page | Content schedule `support/packs` | Folded into brochures (`06`) |
| `02b` L2 template | Pattern-setter for 10 pages | Demoted; 3 varied pages don’t need a shared skeleton |
| National structure | Root README + national README: TBD shell | v1-build implements AKL IA + deltas **without a signed national IA doc** |
| National About placement | Gap analysis: About under Orientation (AKL pattern) | National v1-build also/instead links About from Support Our Work — check whether Orientation About was dropped |
| Terracotta usage | Design system: rationed to actions | v3-build Support jump-to is a row of terracotta links — may violate the rule |
| Fonts | Design system: self-host woff2 | Both drafts still Google Fonts |
| `_redirects` | v1 maps old WP URLs to **old v1 filenames** | v3 URLs differ (`/orientation/about.html`, `/support/`, `/whats-on/`). Redirects **not ported**. |
| `.claude/launch.json` cwd | `"cwd": "v3-build"` | Real path `products/auckland/v3-build` |
| Expressions | Auckland-specific quarterly; privacy rule (online omits remembrance page) must survive | National clone still talks about it; gap analysis: regional or national later |
| Auckland Libraries | Brief `07` migrates full catalogue | National pamphlet-books gap: **nationalise or drop** |

**Also still TBD (not contradictions, just unfinished — do not fill from this file):**

- te reo Māori breadth (deliberate vs accidental)
- Footer column count (5) + mobile accordion
- Signature element (terracotta Wave of Light glow vs single-line heart-and-footprints)
- Max content width (1152px is a placeholder)
- Named monthly owner for What’s On (linchpin of no-rot design)
- Missing briefs: What’s On, Support Our Work, For Professionals, remaining Orientation children, Accessibility, Privacy
- “We remember too” (candidate phrase; needs volunteer confirmation; never a tagline replacement)
- All ⚠ DRAFT Orientation copy
- Top 3 brochures / top 3 books
- Home §E column 3
- Mothers / solo-parent resource gap
- Anchor labels on `my-baby-died` (Mothers · Fathers & partners · On your own)
- Sombre-violet and sage experiments — not run
- Hosting choice; accessibility audit
- National: group-directory contacts empty; board roster empty; extra pamphlet PDFs not in repo; charity number / some emails unconfirmed; support-first vs groups-first; whether national hosts the canonical pamphlet library; Groups login 401
- UK-inspired but unbriefed: EXIT SITE, loss-type router, named equity cohort pages (Māori / Pacific / Asian)

---

## 9. Working rules for future Website Dev

1. **Don’t invent a second national IA.** Prefer Auckland v3 skeleton + N1–N5 + S1–S4, with national-scoped copy. If someone emails a new national sitemap, that is a planning change — put it in an audit or a signed one-pager, not in a page of HTML.
2. **Don’t put dates on evergreen pages.** Standing rules only (“first Thursday monthly, Feb–Dec”). Instances belong on What’s On, and What’s On needs a named human owner or it will rot the way live BLAW/conference/training already have.
3. **Don’t duplicate content across axes.** Cross-link. Packs live with brochures. Events overview on Support is evergreen and points at What’s On. Donate does not appear on my-baby-died.
4. **DRAFT copy needs bereaved-parent review.** Dual review (mother and father) for the primary doorway and `my-baby-died`. Do not “improve” DRAFT wording into something that sounds more like UK or more like charity-soft. Highest-stakes page in the whole workspace is `orientation/my-baby-died`.
5. **Don’t hotlink old WordPress assets.** They 403 and the domain is being decommissioned. Localise into `/assets/`. Same for Google Fonts at launch — self-host.
6. **Don’t mix this file into `v2-Claude/planning/`.** Don’t drop UK findings into a brief as if they were decided. Don’t resolve §8 in a commit message. Don’t put agent notes in `shared/` (that folder is product tokens, currently empty on purpose).
7. **Don’t treat v1-Claude as current.** Wrong palette, old IA, help bar on every page, Inter + Source Serif 4. `_redirects` there are a starting map of *old* URLs and still need a port to v3 paths.
8. **Don’t treat national v1-build copy as launch copy.** Structure review artefact. Body is still Auckland-regional in many places. Empty `flag` contacts stay empty until a human fills them — do not invent group phone numbers.
9. **Don’t ship a staffed-helpline UI for a callback mobile.** Footer for unconditional 0508; Support for contextual. Label crisis lines as crisis lines, and keep Sands visually above them.
10. **Don’t use the live national menu as a content inventory to rebuild.** Stakeholder dispositions already say kill News, Videos, Join, My Angel, triple contact, phantom Information. Merge About + History + Goals into one ruthless About; Board is a child.
11. **Don’t generate images of living babies, children, families with children, nursery items, or a specific baby/gestation/death.** Dual bereaved-parent review of any generated art. Public coded symbols only.
12. **Don’t add a framework, a CMS, or a build step.** Volunteer-editable static HTML is the product constraint, not a temporary compromise.
13. **Confirm numbers, accounts, and charity details before they appear in a footer.** National email, national charity number, and whether 0508 on national is the Auckland callback or a chairperson mobile are all unconfirmed.
14. **When email feedback arrives**, map it onto an existing page brief or ROADMAP open decision. If it doesn’t map, it is new planning — write it down as a question, don’t implement it as if the briefs already said yes.

Tone reminder, from live copy (not invented): state the fact plainly before offering comfort; name the specific difficulty; say what Sands is *not* as often as what it is; first person plural, lived experience; permission as fact, not encouragement; no minimising qualifiers. Tagline reserves “little” for the baby’s life.

---

## 10. Suggested next product steps

From the existing planning docs, not new invention.

### Auckland (prototype — lock patterns before National copies them)

1. Confirm the v3-build deviations you want to keep: shared Home header; Home What’s On teaser; crisis-lines-not-on-contact.
2. Dual bereaved-parent review of primary doorway + all DRAFT Orientation copy; decide “We remember too.”
3. Org picks top-3 brochures/books; names a monthly What’s On owner; confirms bank / Givealittle / charity details.
4. Write missing briefs only if still useful (What’s On, Support Our Work, For Professionals, remaining Orientation children) — or accept v3 as the brief.
5. Run sombre-violet + sage experiments; choose signature element; self-host fonts; accessibility pass; port `_redirects` to v3 URLs; pick host.

### National (priority product)

1. Treat `products/national/v1-build/` as a **structure review artefact**, not a copy source.
2. Do the gap analysis’s missing one-pager: each N/S item → target section in the national tree (**sign off the IA**). Until that exists, do not invent one here.
3. Rebuild N1 group finder (bigger buckets, current contacts, no dead BOP/Timaru links, no raw bank numbers in the page). This is the core differentiator.
4. Add missing pamphlet PDFs (Early Loss, A Heartbreaking Choice, Post Mortem, Certificate of Life); group brochures in a user-centric order (first days / fathers / family / practical).
5. Rewrite/replace Auckland-regional copy; refresh Board; rewrite memory-making with bereaved-parent review; drop My Angel; add privacy + terms; remove Groups login from public nav (or document it as a private tool); remove PPI photo on first-few-days.
6. Extract portable tokens/principles into `shared/` only after Auckland tokens are stable.

### Shared

Wait. Do not premature-abstract. `shared/` is a policy README until design system v1_4 and S1–S4 are clearly reusable.

### Research sitting in this folder

When (if) UK patterns are wanted — EXIT SITE, loss-type router, named Māori/Pacific cohort pages, crawlable finder UX — they need a short product note and a brief, not a silent addition to v3. Keep that work out of `v2-Claude/planning/` until someone signs it. This file must not become the third content schedule.

---

## Pointers

| Need | Where |
|---|---|
| Workspace index + precedence | root `README.md` + `products/auckland/README.md` + `products/auckland/ROADMAP.md` |
| Auckland IA / content plan | `products/auckland/v2-Claude/planning/sands_content_schedule_v2.md` (older than briefs) |
| Design tokens | `products/auckland/v2-Claude/planning/sands_design_system_v1_4.md` |
| Per-page briefs | `products/auckland/v2-Claude/planning/00`–`07` |
| Existing live copy | `products/auckland/V0-current/content/*.md` |
| Auckland draft | `products/auckland/v3-build/` (port 8123) |
| National live audit | `products/national/audits/current-state-sitemap.md` |
| National gap vs AKL | `products/national/audits/gap-analysis-vs-auckland-v3.md` |
| National draft | `products/national/v1-build/` (port 8124) |
| Live Auckland / National / UK (16 Aug 2026) | synthesised in §5–7 of this file |

No GitHub issues. No CLAUDE.md / AGENTS.md in-repo as of the briefing. No brand-guidelines PDF, no analytics, no interview research.

When in doubt: smaller change, cite the brief, leave the contradiction open, do not speak over a bereaved parent.
