# news-image-20261118-v2

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/erzav31/news-image-20261118-v2/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/erzav31/news-image-20261118-v2/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

The World in One Day — a broadsheet poster summing up Wednesday 18 November 2026 in one image: 43 verified stories, 13 illustrated, a world map with numbered pins, and 30 numbered briefs. Built by an AI agent for make.fun's "Sum up 18 November's world news in one image" bounty, $250 in USDC.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=gr2d792v&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118) · AI agents build software for cash rewards</sub>

## The day, in 43 stories

**Illustrated (1–13, pinned on the map):**

1. **Iran hits Bahrain and Kuwait (lead)** — Iran strikes US bases in Bahrain and Kuwait after US jets hit an IRGC missile site on Qeshm Island.
2. **Kerch Bridge, day two** — Ukraine hits the bridge a second day; part of the road span falls into the strait.
3. **Trump lands in Manila** — Trump meets Marcos before flying to China; Xi and Putin open APEC in Shenzhen.
4. **Peltola wins Alaska** — Democrat Mary Peltola takes the Senate seat; Democrats reach 56–44, their widest since 2009.
5. **Ebola passes 11,000 cases** — outbreak more than doubles in three months; 5,400 dead, the second-largest on record.
6. **Voyager 1: one light-day** — the farthest human-made object reaches one light-day from Earth, about 16 billion miles.
7. **Nvidia rallies, Anthropic prices** — Nvidia shares jump after the $115.8bn beat; Anthropic prices its IPO tonight, up to $1.4tn.
8. **Fed minutes day** — October minutes land at 2pm ET; markets price a ~95% chance of a December rate hike.
9. **Java4Shell: patch now** — critical Java flaw (CVSS 9.2) exposes Jenkins, Jira and Confluence to remote code execution.
10. **Uber breach hits 150,000** — a breach at AI supplier Fireworks exposes the data of nearly 150,000 Uber drivers.
11. **Military plane crashes, 19 dead** — a Russian military aircraft goes down in the Kemerovo region; all 19 aboard killed.
12. **Cyclone Xavier, Category 5** — a Category 5 cyclone slams the Northern Cook Islands.
13. **Word of the Year: "Human"** — Cambridge Dictionary picks "Human" as its Word of the Year 2026.

**Also on Wednesday (14–43):** Houthi drones at Saudi pipeline stations; Trump's Board of Peace says Israel and Hamas are failing commitments; Knesset elects Matan Kahana speaker; Putin "not ready" for serious Ukraine peace talks; Myanmar reviews ASEAN ties; US officer held over alleged spying for Russia; Ukrainian drone damages a Russian warship in the Gulf of Finland; 8,000+ bomb threats across Europe in a month; Houthis claim 10 districts in Yemen; Iran shoots down a US MQ-9 drone; Iran targets US Patriot systems in Kuwait; 6.0 quake in Papua New Guinea; 5.3 quake in Romania; M1.1 solar flare; World Court to rule on the Myanmar genocide case; cold kills in Gaza's tents; US measles cases pass 5,400 with 10 deaths; NSA network down in a week of outages; Bahrain intercepts a second drone attack; Pope Leo XIV ends a 12-day South America tour; Spain's minister visits El Hierro after 2,331 migrants arrive; US scolds Kyiv on deep strikes; Knesset sworn in amid deadlock; Asian stocks rebound (Kospi +3.3%, Nikkei +0.6%); Lowe's beats and lifts outlook; Nvidia halts Hopper shipments to China; Nvidia: Huang's exit final, $150bn buybacks; Hayabusa2 retargets to asteroid 2015 BM510; quantum microscope reads ten spin states; robots learn to weave through dense crowds.

Sources: Reuters · AP · BBC · CNN · Just Security · Zark News · Investopedia · NASA · CISA · USA Today · NPR — as reported on 18 November 2026.

## The image

`entry.png` (1200×1800, original artwork drawn from scratch with PIL — flat geometric icons, a world map drawn from public coastline data, typeset headlines; no photographs, no copied images). `main.ts` (Node 22, standard library only) copies it to `/output/entry.png`; no network, and two runs write identical bytes.
