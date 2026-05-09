export type Party = {
  name: string;
  shortName?: string;
  leader?: string;
  ideology: string;
  seats: number;
  voteShare: number;
  color: string;
  ruling?: boolean;
  eliminated?: boolean;
};

export type ElectionEntry = {
  key: string;
  country: "iceland" | "luxembourg";
  year: number;
  date: string;
  title: string;
  type: "Snap Election" | "Scheduled Election" | "Upcoming";
  system: string;
  systemDetail: string;
  totalSeats: number;
  majorityNeeded: number;
  upcoming?: boolean;
  parties: Party[];
  turnout: {
    percentage: number;
    cast: number | null;
    registered: number | null;
    invalid?: string;
    blank?: string;
  } | null;
  coalition: string;
  coalitionSeats: number;
  pm: string;
  pmParty: string;
  outcome: string;
  trigger?: string;
  notable?: string;
};

export const elections: ElectionEntry[] = [
  // ─── ICELAND ────────────────────────────────────────────────────────────────
  {
    key: "isl-2016",
    country: "iceland",
    year: 2016,
    date: "29 October 2016",
    title: "Parliamentary Election",
    type: "Snap Election",
    system: "PR — D'Hondt, Closed-List",
    systemDetail:
      "The Althing (Alþingi) has 63 seats across 6 multi-member constituencies. The D'Hondt method is used with closed party lists. A minimum of 5% of the national vote is required to qualify for leveling seats.",
    totalSeats: 63,
    majorityNeeded: 32,
    parties: [
      { name: "Independence Party", shortName: "IP", ideology: "Centre-right / Conservative", seats: 21, voteShare: 29.0, color: "#2563EB", ruling: true },
      { name: "Left-Green Movement", shortName: "LGM", ideology: "Left / Green", seats: 10, voteShare: 15.9, color: "#16A34A" },
      { name: "Pirate Party", shortName: "PP", ideology: "Digital Rights / Progressive", seats: 10, voteShare: 14.5, color: "#7C3AED" },
      { name: "Progressive Party", shortName: "PPr", ideology: "Agrarian Centre / Populist", seats: 8, voteShare: 11.5, color: "#D97706" },
      { name: "Liberal Reform (Viðreisn)", shortName: "VID", ideology: "Classical Liberalism", seats: 7, voteShare: 10.5, color: "#0891B2", ruling: true },
      { name: "Social Democratic Alliance", shortName: "SDA", ideology: "Social Democracy / Centre-Left", seats: 3, voteShare: 5.7, color: "#DC2626" },
      { name: "Bright Future", shortName: "BF", ideology: "Liberalism / Green", seats: 4, voteShare: 7.2, color: "#D946EF", ruling: true },
    ],
    turnout: { percentage: 79.18, cast: 188000, registered: null },
    coalition: "Independence Party + Viðreisn + Bright Future",
    coalitionSeats: 32,
    pm: "Bjarni Benediktsson",
    pmParty: "Independence Party",
    outcome:
      "Snap election triggered by the Panama Papers scandal, which exposed PM Sigmundur Davíð Gunnlaugsson's offshore assets, sparking mass protests and his resignation. The Independence Party formed a 3-party coalition with Viðreisn and Bright Future. Turnout of 79.18% was the lowest in Icelandic history at the time.",
    trigger: "Panama Papers scandal — PM Gunnlaugsson resignation",
    notable: "Lowest turnout in Icelandic history at the time (79.18%)",
  },
  {
    key: "isl-2017",
    country: "iceland",
    year: 2017,
    date: "28 October 2017",
    title: "Parliamentary Election",
    type: "Snap Election",
    system: "PR — D'Hondt, Closed-List",
    systemDetail:
      "The Althing (Alþingi) has 63 seats across 6 multi-member constituencies. 5% national threshold for leveling seats. 8 parties entered parliament — the most fragmented result in years.",
    totalSeats: 63,
    majorityNeeded: 32,
    parties: [
      { name: "Independence Party", shortName: "IP", ideology: "Centre-right / Conservative", seats: 16, voteShare: 25.2, color: "#2563EB", ruling: true },
      { name: "Left-Green Movement", shortName: "LGM", ideology: "Left / Green", seats: 11, voteShare: 16.9, color: "#16A34A", ruling: true },
      { name: "Progressive Party", shortName: "PPr", ideology: "Agrarian Centre / Populist", seats: 8, voteShare: 10.7, color: "#D97706", ruling: true },
      { name: "Centre Party", shortName: "CP", ideology: "Populist Centre / Decentralist", seats: 7, voteShare: 10.9, color: "#92400E" },
      { name: "Social Democratic Alliance", shortName: "SDA", ideology: "Social Democracy / Centre-Left", seats: 7, voteShare: 12.1, color: "#DC2626" },
      { name: "Liberal Reform (Viðreisn)", shortName: "VID", ideology: "Classical Liberalism", seats: 4, voteShare: 6.7, color: "#0891B2" },
      { name: "People's Party", shortName: "PEP", ideology: "Right-wing Populism", seats: 4, voteShare: 6.9, color: "#B45309" },
      { name: "Pirate Party", shortName: "PP", ideology: "Digital Rights / Progressive", seats: 6, voteShare: 9.2, color: "#7C3AED" },
    ],
    turnout: { percentage: 81.2, cast: 201777, registered: 248502 },
    coalition: "Left-Green Movement + Independence Party + Progressive Party",
    coalitionSeats: 37,
    pm: "Katrín Jakobsdóttir",
    pmParty: "Left-Green Movement",
    outcome:
      "Coalition collapsed after PM Benediktsson's father signed a letter restoring honour to a convicted sex offender. Bright Future withdrew, triggering this snap election. A cross-ideological coalition of left and right was formed. Katrín Jakobsdóttir (LGM) became PM on 30 November 2017.",
    trigger: "Coalition collapse — letter of honour controversy",
    notable: "8 parties entered parliament — broad cross-ideological coalition formed",
  },
  {
    key: "isl-2021",
    country: "iceland",
    year: 2021,
    date: "25 September 2021",
    title: "Parliamentary Election",
    type: "Scheduled Election",
    system: "PR — D'Hondt, Closed-List",
    systemDetail:
      "The Althing (Alþingi) has 63 seats across 6 multi-member constituencies. 5% national threshold. The incumbent coalition sought re-election and retained its majority — the first government to survive a full term since 2008.",
    totalSeats: 63,
    majorityNeeded: 32,
    parties: [
      { name: "Independence Party", shortName: "IP", ideology: "Centre-right / Conservative", seats: 16, voteShare: 24.4, color: "#2563EB", ruling: true },
      { name: "Progressive Party", shortName: "PPr", ideology: "Agrarian Centre / Populist", seats: 13, voteShare: 17.3, color: "#D97706", ruling: true },
      { name: "Left-Green Movement", shortName: "LGM", ideology: "Left / Green", seats: 8, voteShare: 12.6, color: "#16A34A", ruling: true },
      { name: "Social Democratic Alliance", shortName: "SDA", ideology: "Social Democracy / Centre-Left", seats: 6, voteShare: 9.9, color: "#DC2626" },
      { name: "Pirate Party", shortName: "PP", ideology: "Digital Rights / Progressive", seats: 6, voteShare: 8.8, color: "#7C3AED" },
      { name: "People's Party", shortName: "PEP", ideology: "Right-wing Populism", seats: 6, voteShare: 8.8, color: "#B45309" },
      { name: "Liberal Reform (Viðreisn)", shortName: "VID", ideology: "Classical Liberalism", seats: 5, voteShare: 8.3, color: "#0891B2" },
      { name: "Centre Party", shortName: "CP", ideology: "Populist Centre / Decentralist", seats: 3, voteShare: 5.4, color: "#92400E" },
    ],
    turnout: { percentage: 80.1, cast: 203978, registered: 254586 },
    coalition: "Independence Party + Left-Green Movement + Progressive Party",
    coalitionSeats: 37,
    pm: "Katrín Jakobsdóttir",
    pmParty: "Left-Green Movement",
    outcome:
      "The incumbent three-party coalition sought re-election. Despite drops in individual party support, the coalition retained its 37-seat majority — the first Icelandic government to survive a full term since the 2008 financial crisis. Katrín Jakobsdóttir remained PM.",
    notable: "First government to survive a full term since the 2008 financial crisis",
  },
  {
    key: "isl-2024",
    country: "iceland",
    year: 2024,
    date: "30 November 2024",
    title: "Parliamentary Election",
    type: "Snap Election",
    system: "PR — D'Hondt, Closed-List",
    systemDetail:
      "The Althing (Alþingi) has 63 seats. PM Jakobsdóttir resigned to run for president; Benediktsson succeeded her and called a snap election after the coalition broke down over immigration, energy policy, and cost-of-living issues.",
    totalSeats: 63,
    majorityNeeded: 32,
    parties: [
      { name: "Social Democratic Alliance", shortName: "SDA", ideology: "Social Democracy / Centre-Left", seats: 15, voteShare: 20.8, color: "#DC2626", ruling: true },
      { name: "Liberal Reform (Viðreisn)", shortName: "VID", ideology: "Classical Liberalism", seats: 11, voteShare: 15.8, color: "#0891B2", ruling: true },
      { name: "Independence Party", shortName: "IP", ideology: "Centre-right / Conservative", seats: 14, voteShare: 19.4, color: "#2563EB" },
      { name: "Progressive Party", shortName: "PPr", ideology: "Agrarian Centre / Populist", seats: 8, voteShare: 12.0, color: "#D97706" },
      { name: "People's Party", shortName: "PEP", ideology: "Right-wing Populism", seats: 6, voteShare: 7.5, color: "#B45309", ruling: true },
      { name: "Centre Party", shortName: "CP", ideology: "Populist Centre / Decentralist", seats: 5, voteShare: 5.5, color: "#92400E" },
      { name: "Left-Green Movement", shortName: "LGM", ideology: "Left / Green", seats: 0, voteShare: 4.9, color: "#16A34A", eliminated: true },
      { name: "Pirate Party", shortName: "PP", ideology: "Digital Rights / Progressive", seats: 0, voteShare: 4.7, color: "#7C3AED", eliminated: true },
    ],
    turnout: { percentage: 80.1, cast: 215216, registered: 266741 },
    coalition: "Social Democratic Alliance + Viðreisn + People's Party",
    coalitionSeats: 36,
    pm: "Kristrún Mjöll Frostadóttir",
    pmParty: "Social Democratic Alliance",
    outcome:
      "Social Democratic Alliance topped the polls for the first time ever (15 seats, 20.8%). Left-Green Movement and Pirate Party both fell below the 5% threshold and lost ALL seats — eliminated from parliament. PM Kristrún Mjöll Frostadóttir (age 36) became Iceland's youngest-ever PM. Historic first: all 3 coalition parties led by women. Sworn in 21 December 2024.",
    trigger: "Coalition collapse — immigration, energy policy, cost-of-living crisis; PM Jakobsdóttir resigned to run for President",
    notable: "Youngest-ever Icelandic PM (age 36). All 3 coalition leaders were women — historic first. LGM and Pirates eliminated.",
  },

  // ─── LUXEMBOURG ─────────────────────────────────────────────────────────────
  {
    key: "lux-2018",
    country: "luxembourg",
    year: 2018,
    date: "14 October 2018",
    title: "Chamber of Deputies Election",
    type: "Scheduled Election",
    system: "PR — Hagenbach-Bischoff",
    systemDetail:
      "The Chamber of Deputies (Chambre des Députés) has 60 seats elected every 5 years across 4 multi-member constituencies: North (9 seats), East (7), South (23), and Centre (21). Voting is compulsory for Luxembourgish citizens under 75, explaining consistently high turnout.",
    totalSeats: 60,
    majorityNeeded: 31,
    parties: [
      { name: "Christian Social People's Party", shortName: "CSV", ideology: "Christian Democracy / Centre-Right", seats: 21, voteShare: 28.31, color: "#F59E0B" },
      { name: "Democratic Party", shortName: "DP", ideology: "Liberalism / Centre", seats: 12, voteShare: 16.91, color: "#0891B2", ruling: true },
      { name: "Luxembourg Socialist Workers' Party", shortName: "LSAP", ideology: "Social Democracy / Centre-Left", seats: 10, voteShare: 17.60, color: "#DC2626", ruling: true },
      { name: "The Greens (Déi Gréng)", shortName: "Greens", ideology: "Green Politics / Centre-Left", seats: 9, voteShare: 15.12, color: "#16A34A", ruling: true },
      { name: "Alternative Democratic Reform Party", shortName: "ADR", ideology: "National Conservatism / Right", seats: 4, voteShare: 8.28, color: "#7C3AED" },
      { name: "The Left (Déi Lénk)", shortName: "Left", ideology: "Democratic Socialism / Left", seats: 2, voteShare: 5.48, color: "#B91C1C" },
      { name: "Pirate Party Luxembourg", shortName: "PPLU", ideology: "Digital Rights / Pirate", seats: 2, voteShare: 6.45, color: "#6B7280" },
    ],
    turnout: { percentage: 89.66, cast: null, registered: 265000 },
    coalition: "Democratic Party + LSAP + The Greens",
    coalitionSeats: 31,
    pm: "Xavier Bettel",
    pmParty: "Democratic Party",
    outcome:
      "CSV was the largest party but was excluded from government for the second time. DP + LSAP + The Greens formed a bare 31-seat majority coalition. PM Xavier Bettel (DP) began his second consecutive term. The Pirate Party entered parliament for the first time.",
    notable: "CSV largest party but again excluded from government. Pirate Party entered parliament for first time.",
  },
  {
    key: "lux-2023",
    country: "luxembourg",
    year: 2023,
    date: "8 October 2023",
    title: "Chamber of Deputies Election",
    type: "Scheduled Election",
    system: "PR — Hagenbach-Bischoff",
    systemDetail:
      "The Chamber of Deputies has 60 seats across 4 constituencies. Compulsory voting for citizens under 75. 7 parties won seats. CSV finally entered government after being excluded in 2013 and 2018.",
    totalSeats: 60,
    majorityNeeded: 31,
    parties: [
      { name: "Christian Social People's Party", shortName: "CSV", ideology: "Christian Democracy / Centre-Right", seats: 21, voteShare: 29.22, color: "#F59E0B", ruling: true },
      { name: "Democratic Party", shortName: "DP", ideology: "Liberalism / Centre", seats: 14, voteShare: 18.70, color: "#0891B2", ruling: true },
      { name: "Luxembourg Socialist Workers' Party", shortName: "LSAP", ideology: "Social Democracy / Centre-Left", seats: 11, voteShare: 18.92, color: "#DC2626" },
      { name: "Alternative Democratic Reform Party", shortName: "ADR", ideology: "National Conservatism / Right", seats: 5, voteShare: 9.27, color: "#7C3AED" },
      { name: "The Greens (Déi Gréng)", shortName: "Greens", ideology: "Green Politics / Centre-Left", seats: 4, voteShare: 8.55, color: "#16A34A" },
      { name: "Pirate Party Luxembourg", shortName: "PPLU", ideology: "Digital Rights / Pirate", seats: 3, voteShare: 6.74, color: "#6B7280" },
      { name: "The Left (Déi Lénk)", shortName: "Left", ideology: "Democratic Socialism / Left", seats: 2, voteShare: 3.93, color: "#B91C1C" },
    ],
    turnout: { percentage: 87.20, cast: null, registered: null, invalid: "~14,456", blank: "~11,047" },
    coalition: "CSV + Democratic Party",
    coalitionSeats: 35,
    pm: "Luc Frieden",
    pmParty: "Christian Social People's Party",
    outcome:
      "CSV won for the third consecutive election (21 seats, 29.22%) and finally led the government. CSV + DP formed a centre-right majority (35 seats). PM: Luc Frieden (CSV); Deputy PM & Foreign Affairs: Xavier Bettel (DP) — sworn in 17 November 2023. The Greens lost 5 seats (9→4). LSAP entered opposition for the first time since 1999.",
    notable: "CSV finally in government after being excluded in 2013 and 2018. Greens collapsed −5 seats. LSAP in opposition for first time since 1999.",
  },
];

export const countries = {
  iceland: {
    name: "Iceland",
    localName: "Ísland",
    flag: "🇮🇸",
    parliament: "Althing (Alþingi)",
    seats: 63,
    system: "PR — D'Hondt, Closed-List",
    threshold: "5% national threshold",
    constituencies: "6 multi-member constituencies",
    voting: "Voluntary",
    currentPM: "Kristrún Mjöll Frostadóttir",
    currentPMParty: "Social Democratic Alliance",
    nextElection: "By September 2028",
    avgTurnout: "~80%",
    elections: [2016, 2017, 2021, 2024],
    sources: "IPU Parline · IFES Election Guide · Statistics Iceland (statice.is) · National Electoral Commission (island.is)",
  },
  luxembourg: {
    name: "Luxembourg",
    localName: "Lëtzebuerg",
    flag: "🇱🇺",
    parliament: "Chamber of Deputies (Chambre des Députés)",
    seats: 60,
    system: "PR — Hagenbach-Bischoff",
    threshold: "No formal threshold",
    constituencies: "4 constituencies: North (9), East (7), South (23), Centre (21)",
    voting: "Compulsory (under 75)",
    currentPM: "Luc Frieden",
    currentPMParty: "Christian Social People's Party (CSV)",
    nextElection: "October 2028",
    avgTurnout: "~88%",
    elections: [2018, 2023],
    sources: "IPU Parline · IFES Election Guide · Official Luxembourg Elections (elections.public.lu) · International IDEA",
  },
};
