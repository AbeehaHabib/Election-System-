# 🗳️ Election Intel — Iceland & Luxembourg 2016–2026

> Electoral research by **Abeeha Habib** · `S25BINCE1M04005`

An interactive Next.js app presenting parliamentary election data for Iceland and Luxembourg. Select a country and year — get the full breakdown: seat distribution, voter turnout, coalition formed, prime minister, and outcome.

---

## Countries & Elections Covered

| 🇮🇸 Iceland | 🇱🇺 Luxembourg |
|---|---|
| PR — D'Hondt, Closed-List | PR — Hagenbach-Bischoff |
| 63 seats · 6 constituencies | 60 seats · 4 constituencies |
| 4 elections: 2016, 2017, 2021, 2024 | 2 elections: 2018, 2023 |
| Voluntary voting · ~80% avg turnout | Compulsory voting · ~88% avg turnout |

---

## Getting Started

```bash
git clone https://github.com/your-username/abeeha-election-intel.git
cd abeeha-election-intel
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Dark theme, CSS variables, animations
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Interactive flow (intro → country → year → result)
├── components/
│   └── ElectionView.tsx  # Full election result display
└── data/
    └── elections.ts      # All election data
```

---

## Election Data Summary

### 🇮🇸 Iceland

| Year | Type | Winner / PM | Seats | Turnout |
|---|---|---|---|---|
| 2016 | Snap | Independence Party / Bjarni Benediktsson | 21/63 | 79.18% |
| 2017 | Snap | Left-Green led coalition / Katrín Jakobsdóttir | 37/63 | 81.2% |
| 2021 | Scheduled | Same coalition retained / Katrín Jakobsdóttir | 37/63 | 80.1% |
| 2024 | Snap | SDA + Viðreisn + People's Party / Kristrún Frostadóttir | 36/63 | 80.1% |

### 🇱🇺 Luxembourg

| Year | Type | Winner / PM | Seats | Turnout |
|---|---|---|---|---|
| 2018 | Scheduled | DP + LSAP + Greens / Xavier Bettel | 31/60 | 89.66% |
| 2023 | Scheduled | CSV + DP / Luc Frieden | 35/60 | 87.20% |

---

## Tech Stack

| | |
|---|---|
| Next.js 14 | Framework |
| React 18 + TypeScript | UI & type safety |
| Syne + Instrument Serif + IBM Plex Mono | Typography |
| Tailwind CSS | Utility styling |
| Vercel | Deployment |

---

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for auto-deploy on push.

---

## Sources

- IPU Parline — [data.ipu.org](https://data.ipu.org)
- IFES Election Guide — [electionguide.org](https://electionguide.org)
- Statistics Iceland — [statice.is](https://statice.is)
- National Electoral Commission Iceland — [island.is](https://island.is)
- Official Luxembourg Elections — [elections.public.lu](https://elections.public.lu)
- International IDEA — [idea.int](https://idea.int)

---

**Abeeha Habib · S25BINCE1M04005**
