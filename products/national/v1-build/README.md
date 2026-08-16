# National v1-build — draft site

Clone of Auckland [`products/auckland/v3-build`](../../auckland/v3-build) plus national deltas from the gap analysis. **Draft for structure review**, not launch-ready. Auckland v3 is left unchanged.

## Run it

```bash
cd products/national/v1-build
python3 -m http.server 8124
```

Open <http://localhost:8124/> (use a different port if Auckland v3 is already on 8123).

## What this is

| Layer | Source |
|---|---|
| Design system, nav, Orientation, Support shell, What's On pattern, Support Our Work, For professionals, Privacy, Accessibility | Cloned from Auckland v3 |
| Branding chrome | Retitled **Sands New Zealand** (local Auckland copy still appears in places — flagged) |
| National deltas | Below |

## National deltas (this clone)

| ID | What | Where |
|---|---|---|
| **N1** | Find a local group | `support/find-a-group.html` + Support index block |
| **N2** | NZ Board (sub-page of About) | `support-our-work/board.html` ← linked from About |
| **N3** | National conference elevated | `whats-on/index.html` `#conference` |
| **N5** | BLAW / Wave / Light Up Aotearoa elevated | `whats-on/index.html` `#blaw` `#wave` `#lightup` |
| **N4** | Volunteer training | `support-our-work/training.html` |
| **S1** | Memory making | `support/memory-making.html` |
| **S2** | Free memorial services | `support/memorial-services.html` |
| **OS** | Online support meetings | `support/online-support.html` + Support index block |
| **CoL** | Certificate of Life (within Support resources) | `support/resources.html#certificate-of-life` |
| **S3–S4** | Pamphlet/books gap | [`../audits/pamphlet-books-gap.md`](../audits/pamphlet-books-gap.md) |

## Still draft / not done

- Group directory contacts empty (`flag` placeholders)
- Board roster empty
- Extra national pamphlet PDFs not in `/assets/` yet
- Much body copy still Auckland-regional (meetings venue history, crisis CATT Auckland, etc.) — intentional “structure first”
- Charity number, some emails: confirm
- DRAFT memory-making needs bereaved-parent review
- No privacy/terms beyond the cloned privacy draft

## Related docs

- [Current-state sitemap audit](../audits/current-state-sitemap.md)
- [Gap analysis vs Auckland v3](../audits/gap-analysis-vs-auckland-v3.md)
- [Pamphlet & books gap](../audits/pamphlet-books-gap.md)
