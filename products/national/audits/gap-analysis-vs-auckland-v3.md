# Gap analysis: sands.org.nz vs Auckland v3

| | |
|---|---|
| **Hypothesis** | After rationalising national pages (merge / remove / demote), most of sands.org.nz **overlaps** Auckland v3’s structure and jobs. What remains unique to national is a **small set of national-scale capabilities**, not a second full IA. |
| **Compared** | Live national sitemap ([current-state-sitemap.md](current-state-sitemap.md)) ↔ Auckland draft ([../../auckland/v3-build/](../../auckland/v3-build/)) |
| **Date** | 2026-08-05 |
| **Filter** | Stakeholder **Action** + **Your instruction** on the national audit — content marked Remove / Merge-away does **not** count as a lasting national difference |

---

## Method

1. Map each national nav ID to an Auckland v3 **job** (page or in-page block), not 1:1 URLs.
2. Apply audit disposition: **Remove**, **Merge into something that already exists in AKL**, or **Change but same job as AKL** → treat as **overlap**, not unique.
3. What remains is **national-unique** (or **shared content AKL is missing**).

---

## 1. Hypothesis check — large overlap

Auckland v3 is organised by job:

| Auckland section | Job |
|---|---|
| Home | Receive & direct (grief-first hierarchy) |
| Start Here (Orientation) | Who you are → hand off to support |
| Support | What help exists (active → passive); contact; brochures; reading |
| What's On | Dates only |
| Support Our Work | Donate / join / partner |
| For health professionals | Packs, refer, training (header CTA) |
| Privacy / Accessibility | Utility |

National live site uses different **labels** (About / Information / Support / News) but the same **underlying jobs** once you cut the fat:

| National (after prune) | Same job as Auckland |
|---|---|
| Home (0.1) rebalanced | Home |
| First days (3.1) | Orientation / “when your baby dies” |
| How we support (3.0) | Support index (not a link farm) |
| Online support (3.4) | Support index → talk / Facebook |
| Pamphlets (2.1) + Resources (2.2) | Support → brochures (+ pack story) |
| Help Sands (2.7) | Support Our Work |
| Contact collapse (3.6–3.8) | Support → contact |
| BLAW (1.4.3), Conference (1.4.1) | What's On (standing + dated) |
| About merge (1.0–1.2) | Orientation → About us |
| Whetūrangitia (E.1) | Support index block |
| Secondary org links (2.6.1–2.6.2) | Support → other organisations |
| Books currently misfiled as “News” (1.4) | Support → reading (if anything kept) |

**Conclusion:** Yes — structural overlap is large. National is not a different product type; it’s a **network-scale** version of the same product, plus a few national-only duties, currently wrapped in a noisier IA.

---

## 2. What drops out (does not create uniqueness)

These appear only on national today but **should not** drive a different architecture once instructions are applied:

| ID | Page | Disposition | Why it doesn’t stay “unique” |
|---|---|---|---|
| **1.4** | Sands News | **Remove** | Fake news / book promo; books belong under reading if at all |
| **3.5** | Videos | **Remove** | Expired |
| **3.9** | Join (Mailchimp) | **Remove** | Unused; privacy work is net-new, not a join page |
| **0.1a** | index.html alias | **Redirect** | — |
| **X.1, X.2** | Dead links | **Remove / Redirect** | — |
| **G.1** | Groups login 401 | **Verify** | Ops tool, not public content |
| **3.0** as link farm | How we support | **Change → AKL Support pattern** | Job already covered by AKL Support index |
| **3.1** | First days | **Change → AKL Orientation** | Same acute path; AKL better |
| **3.4** | Online support | **Merge → Support** | AKL already folds this in |
| **3.6–3.8** | Three contact forms | **Merge → one contact** | AKL has one contact path |
| **2.2** | Resources | **Merge → 2.1** | No separate job left |
| **2.6 / 2.6.1 / 2.6.2** | Website links cluster | **Merge → secondary refs** | AKL “other organisations” block |
| **1.0 + 1.1 + 1.2** | About / history / goals | **Merge → one About** | AKL has About; national *copy* differs (see §3) |
| **2.0** | Information `#` | **No page** | Phantom section — not a capability |
| **My Angel** (part of 2.6.3) | Cremation jewellery | **Remove** | Cuts commercial unique item |

After that cut, the national tree is mostly **the same skeleton as Auckland**, not a parallel library of topics.

---

## 3. What is specifically unique to national (keep-worthy)

These jobs **do not exist** as first-class Auckland capabilities (or only as a thin cross-link). They survive the merge/remove filter.

### A. Must-have national capabilities

| # | Capability | National ID(s) | Why unique | Notes |
|---|---|---|---|---|
| **N1** | **Find support near me** (multi-group directory) | **3.2** | Auckland is one group; national must route across Aotearoa without dumping people onto regional sites long-term | Core differentiator. Rebuild (bigger buckets + filter), don’t port current region soup. |
| **N2** | **National governance (NZ Board)** | **1.3** | Regional site has no board page | Child of About only; refresh roster. |
| **N3** | **National conference (owned, elevated)** | **1.4.1** + **E.3** | Auckland only teases conference under What’s On + external link | National should **feature** it (not bury under News). Detail can stay on conference subdomain. |
| **N4** | **Volunteer / group training (for Sands people)** | **1.4.2** | Distinct from AKL “training for health students” (VCA under For professionals) | Belongs under Help / volunteer path, not News. Content is stale — job is unique; copy is not. |
| **N5** | **National BLAW coordination** | **1.4.3** | Light Up Aotearoa **nationwide** landmark list + national Wave of Light service | Auckland What’s On has **local** BLAW/Wave. National owns the **country-wide** layer. Dates still need a single home (What’s On pattern). |

### B. Shared content Auckland lacks (not “national only” forever)

These are **valuable on both** products. They’re gaps in Auckland v3, not proof that only national should own them.

| # | Capability | National ID(s) | Auckland today | Recommendation |
|---|---|---|---|---|
| **S1** | **Memory-making guide** (how to create memories) | **2.5 / 3.3** | Mentioned inside brochures/packs; **no dedicated guide** | Rebuild carefully (current page insensitive). Candidate for **shared** content: national can host canonical page; Auckland links in. |
| **S2** | **Free / donated memorial services** (Glover, Huggable Hearts, Fidds, etc.) | **2.6.3** (minus My Angel) | Not a page; some partners named in passing | Fits under memory-making or support “when ready”; verify links. Shared block, not national-exclusive. |
| **S3** | **Expanded pamphlet set** | **2.1** | AKL has **six** core pamphlets | National also has Early Loss, Heartbreaking Choice, Post Mortem, Certificate of Life, etc. **Canonical pamphlet library = national**; Auckland can subset + link to full set (AKL for-professionals already links to national pamphlets). |
| **S4** | **Certificate of Life** | **2.1 / 2.2** | Not a dedicated AKL page | National-owned resource; surface from packs/brochures everywhere. |

### C. National flavour of shared jobs (same page type, different content)

Not new sections — **scoped copy** when one site is national:

| Job | Auckland | National |
|---|---|---|
| About | Auckland group + “part of Sands NZ” | Network of groups, national aims, history, charity identity |
| Contact | One callback mobile / local email | Board emails + route to **local** contact via N1 |
| Support Our Work | Local Givealittle / bank / membership | National Givealittle (**E.2**) + volunteer/group start + craft/hospital items |
| What's On | Local meetings + local remembrance + national teasers | National events + **aggregates or features** multi-region where needed |
| For professionals | Local hospital pathways + packs | Pack ordering via national Resource Coordinator; student training; terminology (**2.3**) may live here |

### D. Weak / demoted — unique-ish but not worth a primary path

| ID | Item | Call |
|---|---|---|
| **2.3** | Terminology | Keep content somewhere; **not** parent path. Footer or For professionals. |
| **2.4** | Research | Out of date; demote or drop until owned updates exist. Does **not** justify a national Information section. |
| **1.1** history detail | Origin story | Optional short block inside merged About — not a separate IA pillar. |

---

## 4. Reverse gap — Auckland has it; national doesn’t (or does badly)

If national becomes the **source of truth** (replacing regional sites), these AKL strengths are **gaps to import**, not differences to preserve against:

| Auckland capability | National today | Import? |
|---|---|---|
| **Orientation by who you are** (newly bereaved / long ago / pregnant again / someone I love) | Only weak “first days” | **Yes** — primary IA upgrade |
| **Support sorted active → passive** on one index | Link farm (3.0) + scattered pages | **Yes** |
| **Dates only in What’s On** | Dates sprinkled (BLAW page, training “2018”, news) | **Yes** |
| **Grief-first home hierarchy** | Equal support / info / donate doors | **Yes** |
| **For health professionals** (task CTA) | No clear pro door (info door → Whetūrangitia) | **Yes** (national pro tasks) |
| **Privacy / accessibility** | Missing | **Yes** (esp. after killing join) |
| **Library / books curated** | Misused as “News” | **Yes** if national hosts reading list |
| **Crisis lines inlined** | Not prominent | **Yes** |
| **Newsletter (Expressions) privacy rule** | Not a national feature on live site | Regional or national later |

---

## 5. Visual: after filter, what’s left

```
NATIONAL UNIQUE (must design for)
  N1  Multi-group finder / local support routing
  N2  NZ Board
  N3  National conference (elevated)
  N4  Volunteer/group training
  N5  National BLAW / Light Up Aotearoa layer

SHARED / MISSING FROM AKL (build once, reuse)
  S1  Memory-making guide (rebuild tone)
  S2  Free memorial services list
  S3  Full pamphlet library (+ S4 Certificate of Life)

EVERYTHING ELSE
  → Same jobs as Auckland v3; prefer AKL structure + national-scoped copy
  → Or discarded per audit (news, videos, join, link farms, triple contact, My Angel)
```

---

## 6. Implications for the hypothesis

| Claim | Verdict |
|---|---|
| Large overlap with Auckland v3 | **Supported.** After merge/remove, most national URLs are alternate labels for AKL jobs. |
| Unique national substance is small | **Supported.** Five must-have capabilities (**N1–N5**), plus shared content AKL should also use (**S1–S4**). |
| Memory making is “national unique” | **Partly wrong.** It’s **unique to the live national site vs AKL v3**, but stakeholder intent is **value to both** — treat as **shared**, not national-only. |
| Information section is a real product area | **Not supported.** Phantom nav parent + pages that merge, demote, or become Support/About/Professionals. |
| Building national = inventing a new IA from the live menu | **Not recommended.** Better: **Auckland v3 skeleton + N1–N5 + shared S1–S4**, national copy/scope. |

---

## 7. Suggested next step (not done here)

When you’re ready: a one-page **“national product = AKL IA + deltas”** checklist — each N/S item → target section in a future national tree — still without prescribing full IA until you want that pass.

---

## ID quick ref (national → gap bucket)

| National ID | Bucket |
|---|---|
| 0.1 Home | Overlap (rebalance like AKL) |
| 1.0–1.2 About cluster | Overlap (merge); national-scoped copy |
| 1.3 Board | **N2** |
| 1.4 News | Drop |
| 1.4.1 Conference | **N3** |
| 1.4.2 Training | **N4** |
| 1.4.3 BLAW | **N5** |
| 2.1–2.2 Pamphlets/resources | Overlap + **S3/S4** depth |
| 2.3 Terminology | Demote (pro/footer) |
| 2.4 Research | Demote/drop |
| 2.5 / 3.3 Memory making | **S1** (shared) |
| 2.6.x Website links / products | Merge; **S2** from 2.6.3 |
| 2.7 Help Sands | Overlap → Support Our Work |
| 3.0–3.1, 3.4 Support path | Overlap → AKL Support/Orientation |
| 3.2 Local groups | **N1** |
| 3.5–3.9 Videos/contact mess/join | Drop or merge to one contact |
