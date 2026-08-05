# sands.org.nz — current-state sitemap audit

| | |
|---|---|
| **Base URL** | https://www.sands.org.nz/ |
| **Audited** | 2026-08-05 |
| **IDs** | **Nav structure** (how the menu presents depth), not the flat `*.html` file tree |
| **Scope** | Live national site; **Your instruction** = stakeholder notes (2026-08-05) |

## Legend

**ID scheme** — section-based, aligned to current site nav:

| Pattern | Meaning |
|---|---|
| **0.1** | Home |
| **1.0, 1.1, …** | About Sands and children |
| **1.4.x** | Under “Sands News” / News & events |
| **2.0, 2.1, …** | Information and children |
| **2.6.x** | Under “Website links” |
| **3.0, 3.1, …** | Sands Support and children (incl. contact items as nav places them) |
| **G.1** | Utility nav (Groups login) |
| **X.*** | Linked but broken / not in nav |
| **E.*** | Important external destinations |

Rows marked **(nav only)** have a menu parent with no real landing page (`#` or section label only).

Almost every page is still a **flat file** at site root — the numbers describe **menu depth**, not folders.

**Action (rec.):** `Keep` · `Change` · `Merge` · `Split` · `Remove` · `Redirect` · `External` · `Verify` · `Archive`

---

## Open queries

1. **Support first action:** For grieving parents, is the first job **find a local group** (**3.2**) or **explain what support is available** (**3.0**)?
2. **Privacy / terms:** Future site needs privacy + terms of use (data collection, access). Reinforced by killing **3.9** (unused Mailchimp join).

---

## Nav tree (ID map)

```
0.1  Home
1.0  About Sands
1.1    History of Sands NZ
1.2    Our goals & philosophy
1.3    The NZ Board
1.4    Sands News
1.4.1    Conference
1.4.2    Training
1.4.3    Baby Loss Awareness Week
2.0  Information                    ← nav # only (no landing page)
2.1    Pamphlets
2.2    Resources
2.3    Definitions / terminology
2.4    Research
2.5    Memory making                ← also under Support (same URL)
2.6    Website links                ← nav subsection only
2.6.1    Non-Sands support groups
2.6.2    Sands internationally
2.6.3    Products & services
2.7    Help Sands NZ
3.0  How we support                 ← first Support item / de facto section intro
3.1    The first few days
3.2    Find your local group
3.3    Memory making                ← same page as 2.5
3.4    Online support
3.5    Videos
3.6    Contact Sands NZ
3.7    To support Sands (contact)
3.8    Feedback
3.9    Join Sands
G.1  Sands Groups Login             ← 401
```

---

## Sitemap table

| ID | URL | Title | Summary | Action (rec.) | Your instruction |
|---|---|---|---|---|---|
| **0.1** | `/` | Home | Welcome and sympathy; three equal doors (support / information / want to help) plus quick links. | Change | Appears to weight **Support, Professionals/Information, and Donations** as audiences equally. Rebalance hierarchy (acute support should dominate). |
| 0.1a | `/index.html` | Home (alias) | Same page as **0.1**. | Redirect | Redirect to `/`. |
| | | | | | |
| **1.0** | `/about.html` | About Sands | Who Sands is + what we offer. | Merge | **Brutally cut back.** Merge **1.0 + 1.1 + 1.2** into a **single** About page. Current content is **not mindful of the intended audience**. |
| **1.1** | `/about-history.html` | History of Sands NZ | 1986 origin story + honorary life members. | Merge | Merge into single About page with **1.0** and **1.2**; cut ruthlessly. |
| **1.2** | `/about-goals.html` | Our goals & philosophy | Organisational goals and philosophical statement. | Merge | Merge into single About page with **1.0** and **1.1**; cut ruthlessly. |
| **1.3** | `/nzboard.html` | The NZ Board | Board bios; still headed 2019–2021. | Change | Keep as a **sub-page off About Sands** (child of **1.0**, not equal weight). Refresh content. |
| **1.4** | `/news.html` | Sands News | Static book promos — not a news feed. | Remove | Previous board members selling/promoting books. **Completely inappropriate as “News”.** Content could live under other resources if anything; do not keep this page role. |
| **1.4.1** | `/conference.html` | Conference | Biennial national conference; links out to 2025 external site. | Change | Annual/biennial **support feature** — **shouldn’t be buried** under About › News. Elevate. |
| **1.4.2** | `/training.html` | Training | Volunteer training; last noted Nov 2018. | Change | Belongs under **how to support Sands** (volunteer / volunteering training) — not News and events. |
| **1.4.3** | `/news-blaw.html` | Baby Loss Awareness Week | BLAW + Light Up Aotearoa + Wave of Light. | Change | Feature under **Support or What’s On** (as per Auckland v3) — not buried in About › News. |
| | | | | | |
| **2.0** | `#` *(no page)* | Information | **Nav parent only** — no L1 landing HTML. | Change | Needs a real section strategy (landing or restructure). Currently a `#` link with children only. |
| **2.1** | `/help-pamphlets.html` | Pamphlets | Pamphlet downloads + Certificate of Life + some extra resources. | Change | Includes **more than pamphlets**; items not in any user-centric order or grouping. Restructure/group for users. |
| **2.2** | `/resources.html` | Resources | Certificate of Life + other resource copy; overlaps **2.1**. | Merge | Certificate of Life also on **2.1**. Many references **out of date**. Merge/rationalise with pamphlets hub. |
| **2.3** | `/help-terminology.html` | Definitions / terminology | NZ/WHO legal and clinical definitions. | Change | Probably **footer** or **For professionals**. **Harsh for parents** in the main path. |
| **2.4** | `/research.html` | Research | Research interest + old PMMRC (2019) content. | Change | Old, out-of-date. **Demote** under something else (not a primary Information destination). |
| **2.5** | `/memorymaking.html` | Memory making | Ideas for memories; partner service links. *(Same URL as **3.3**.)* | Change | Good idea, poorly executed. Valuable to both sites, but content is bad and **insensitive** (e.g. “go on a holiday”). Needs **one clear home** as a support option for parents — currently duplicated in Information and Support nav. |
| **2.6** | — *(nav only)* | Website links | Subsection label under Information; no own page. | Merge | Use as grouping only; children become one “secondary references” area. |
| **2.6.1** | `/nonsands-supportgroups.html` | Non-Sands support groups | Links to other NZ/international baby-loss orgs. | Merge | Merge with **2.6.2** into general secondary references. |
| **2.6.2** | `/international-sands.html` | Sands internationally | Links only: Sands Australia + Sands UK. | Merge | Merge with **2.6.1** into general secondary references. |
| **2.6.3** | `/productsandservices.html` | Products & services | Partner memorial products (Glover, My Angel, Huggable Hearts, Fidds). | Change | **Remove My Angel cremation jewellery.** Other free/donated services: keep idea, **update links** (not current). |
| **2.7** | `/helpsands.html` | Help Sands NZ | Ways to help / donate (Givealittle); thin options. | Change | **Core goal of the site**, but **buried** under Information; few options/suggestions. **Auckland v3 is better** (Support Our Work). |
| | | | | | |
| **3.0** | `/howwesupport.html` | How we support | Peer-support blurb + ~14 links out to other pages. | Change | Content terrible; stock imagery appalling. Link farm — most targets not relevant/useful. Full rethink. |
| **3.1** | `/thefirstdays.html` | The first few days | Acute-period guidance; points to pamphlets, groups, contact. | Change | **Unattributed photo of a real person — PPI; must remove.** Sentiment right; execution poor. **Auckland approach better for all Support-section content.** |
| **3.2** | `/supportgroups.html` | Find your local group | National directory by many small regions. | Change | Out of date; not a current group list. Hierarchy too fragmented (too many regions, uneven). **Replace** with simple sort/filter using bigger buckets. **Query:** groups first, or explain support first (**3.0**)? |
| **3.3** | `/memorymaking.html` | Memory making | Same page as **2.5** (duplicate nav entry). | Change | Same instruction as **2.5** — pick one nav home; don’t list twice. |
| **3.4** | `/onlinesupport.html` | Online support | Handoff to Facebook groups + public page. | Merge | Merge into a broader support page **as per Auckland v3**. |
| **3.5** | `/videos.html` | Videos | Thin/expired Christmas reflection; no real library. | Remove | **Remove.** Content expired. |
| **3.6** | `/contact.html` | Contact Sands NZ | National address, board emails, JS contact form. | Merge | Same details + basic JS email form as **3.7** / **3.8**. **Collapse** to one clear contact path. |
| **3.7** | `/contact-support.html` | To support Sands | Form for offering help/services; same contact block. | Merge | Same form pattern as **3.6** / **3.8**. Merge into contact and/or Help Sands (**2.7**). |
| **3.8** | `/contact-feedback.html` | Feedback | Feedback form to board (optional anonymous). | Merge | Same form pattern as **3.6** / **3.7**. Merge into single contact/feedback path. |
| **3.9** | `/join.html` | Join Sands | Mailchimp-shaped mailing list + contact details. | Remove | **Kill it.** Mailchimp **no one uses**. Future site needs **privacy + terms of use** for any data collection. |
| | | | | | |
| **G.1** | `/committee/index.html` | Sands Groups Login | Nav utility; returns **401**. | Verify | Remove from nav, replace, or document as private tool. |
| **X.1** | `/news-pressrelease-march2012.html` | Press release (2012) | **404** (linked from research-related content). | Remove | Dead link; remove references. |
| **X.2** | `/supporters-groups.html` | Other support orgs | **404** (linked from first days; old non-Sands URL). | Redirect | Redirect to **2.6.1** (or merged secondary-references page). |
| **E.1** | https://wheturangitia.services.govt.nz | Whetūrangitia | Govt practical hub; primary “information” door on home. | External | Keep; place deliberately in IA. |
| **E.2** | https://givealittle.co.nz/org/sands | Givealittle | Donation destination. | External | Keep; surface via Help / Support Our Work (**2.7**), not equal home door unless intentional. |
| **E.3** | https://www.sandsnationalconference.org.nz | National conference site | Live conference details. | External | Keep; elevate with **1.4.1**. |
| **E.4** | Facebook (Sands NZ + groups) | Facebook | Online support destination. | External | Absorb into broader support with **3.4**; no thin intermediate page. |
| **E.5** | Regional group websites | Local group sites | **3.2** often exits to separate regional sites. | External | Long-term national site = source of truth, not traffic router. Note when rebuilding **3.2**. |

---

## Instruction roll-up

| Nav section | Direction |
|---|---|
| **0.x Home** | Stop equal-weighting support / info / donations. |
| **1.x About** | One ruthless About (**1.0–1.2**); Board (**1.3**) as child only. |
| **1.4 News** | Kill fake news (**1.4**); elevate conference + BLAW; move training under volunteer/help. |
| **2.x Information** | No landing today (**2.0**). Regroup pamphlets/resources; demote terminology + research; un-bury Help Sands (**2.7**). |
| **2.6 Website links** | One secondary-references page; drop My Angel; refresh free-service links. |
| **3.x Support** | Fix group finder; kill link-farm + PPI/stock imagery; Auckland-style support content; merge online; remove videos; one home for memory making. |
| **3.6–3.9 Contact** | One contact path; kill Mailchimp join; add privacy + terms later. |

---

## Future pages (not on live site)

| Need | Why |
|---|---|
| Privacy | Data collection (forms, lists); how to access data held |
| Terms of use | Companion for site use / submissions |

---

## ID crosswalk (old → new)

| Old | New |
|---|---|
| L0-01 | **0.1** |
| L0-02 | **0.1a** |
| L1-08 | **1.0** |
| L2-01 | **1.1** |
| L2-02 | **1.2** |
| L2-03 | **1.3** |
| L2-04 | **1.4** |
| L2-05 | **1.4.1** |
| L2-06 | **1.4.2** |
| L2-07 | **1.4.3** |
| L1-05 | **2.1** |
| L1-10 | **2.2** |
| L2-08 | **2.3** |
| L2-09 | **2.4** |
| L1-06 | **2.5** / **3.3** |
| L2-10 | **2.6.1** |
| L2-11 | **2.6.2** |
| L2-12 | **2.6.3** |
| L1-07 | **2.7** |
| L1-02 | **3.0** |
| L1-03 | **3.1** |
| L1-01 | **3.2** |
| L1-04 | **3.4** |
| L2-13 | **3.5** |
| L1-09 | **3.6** |
| L2-14 | **3.7** |
| L2-15 | **3.8** |
| L2-16 | **3.9** |
| ERR-01 | **G.1** |
| ERR-02 | **X.1** |
| ERR-03 | **X.2** |
| EXT-01…05 | **E.1…E.5** |
