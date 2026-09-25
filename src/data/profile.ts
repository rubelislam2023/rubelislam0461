export const PROFILE = {
  name: "Rubel Islam",
  handle: "rubelislam0461",
  xUrl: "https://x.com/rubelislam0461",
  recipientId: "1805707201358839812",
  followers: "6,531",
  role: "Baseposting & content creator",
  motto: "Patience and implementation of discipline is the main strength.",
} as const;

export const CATEGORIES = ["Essays", "Markets", "Product", "Community"] as const;
export type Category = (typeof CATEGORIES)[number];
export type Filter = "All" | Category;

export type Note = {
  id: string;
  index: string;
  category: Category;
  title: string;
  ghost: string;
  date: string;
  lede: string;
  href: string;
  ink: boolean;
};

export const NOTES: Note[] = [
  {
    id: "separate",
    index: "01",
    category: "Essays",
    title: "Onchain should not feel like a separate world",
    ghost: "separate",
    date: "23 Sep 2026",
    lede: "A note on Base as the layer under ordinary life — not a second internet you visit on purpose. One builder, one app, quietly.",
    href: "https://x.com/rubelislam0461/status/2102550763667136597",
    ink: true,
  },
  {
    id: "volume",
    index: "02",
    category: "Markets",
    title: "Tokenized stocks, from a few million to $60M days",
    ghost: "volume",
    date: "25 Sep 2026",
    lede: "Daily volume in Coinbase tokenized stocks on Base climbed into $60M+ sessions through September. Still early. The trend is the story.",
    href: "https://x.com/rubelislam0461/status/2103274533407060170",
    ink: false,
  },
  {
    id: "billion",
    index: "03",
    category: "Markets",
    title: "A billion dollars of equity, onchain",
    ghost: "billion",
    date: "20 Sep 2026",
    lede: "Tokenized stocks on Base crossed $1B in trading volume. The milestone matters less than what can be built once equities are programmable.",
    href: "https://x.com/rubelislam0461/status/2101463096921637269",
    ink: false,
  },
  {
    id: "blocks",
    index: "04",
    category: "Essays",
    title: "Stocks as building blocks, not tickers",
    ghost: "blocks",
    date: "24 Sep 2026",
    lede: "Aerodrome, Aave, Morpho, Chainlink, wallets, neobanks. A map of the rails already forming around tokenized equities — and why the next use is not just a trade.",
    href: "https://x.com/rubelislam0461/status/2102912648560206127",
    ink: true,
  },
  {
    id: "builders",
    index: "05",
    category: "Essays",
    title: "The design space Base just opened",
    ghost: "builders",
    date: "22 Sep 2026",
    lede: "Neobrokerages, AI indexes, gifting, yield, memestocks, agent-run portfolios. A field note on what has not been built yet, now that the stocks are live.",
    href: "https://x.com/rubelislam0461/status/2102187621330100476",
    ink: false,
  },
  {
    id: "terminal",
    index: "06",
    category: "Product",
    title: "The wallet, becoming a trading terminal",
    ghost: "terminal",
    date: "21 Sep 2026",
    lede: "Discover, trending coins, perps, and prediction markets in one surface. How Coinbase Wallet is closing the gap between seeing a move and trading it.",
    href: "https://x.com/rubelislam0461/status/2101824981848175080",
    ink: true,
  },
  {
    id: "bundle",
    index: "07",
    category: "Product",
    title: "Sell the long tail in one pass",
    ghost: "bundle",
    date: "18 Sep 2026",
    lede: "A practical wallet change: select many small DEX balances and sell them together for USDC, instead of clearing the dust one token at a time.",
    href: "https://x.com/rubelislam0461/status/2100738069716508675",
    ink: false,
  },
  {
    id: "rails",
    index: "08",
    category: "Essays",
    title: "The future of money will not wait for permission",
    ghost: "rails",
    date: "19 Sep 2026",
    lede: "Faster, global, onchain. Less a slogan than a description of the rails — written as a morning note, one block at a time.",
    href: "https://x.com/rubelislam0461/status/2101100206083236209",
    ink: true,
  },
  {
    id: "moon",
    index: "09",
    category: "Community",
    title: "Joining Mooniez, from the dark side",
    ghost: "moon",
    date: "18 Sep 2026",
    lede: "A short public note on stepping into Mooniez — the community thread beside the market coverage.",
    href: "https://x.com/rubelislam0461/status/2101002781150863514",
    ink: false,
  },
];

export const ISSUE = NOTES.slice(0, 4);

export const SKILL_GROUPS = [
  {
    index: "01",
    label: "Narrative",
    items: [
      {
        name: "Daily field notes",
        detail: "One idea, carried through. Most days the timeline gets a finished note, not a fragment.",
      },
      {
        name: "Thread structure",
        detail: "Open with the fact, name the venues, leave the reader with what is still unbuilt.",
      },
      {
        name: "Plain market language",
        detail: "Volume, routes, fees, and slippage said so a builder can use them — not a glossary for its own sake.",
      },
    ],
  },
  {
    index: "02",
    label: "Markets",
    items: [
      {
        name: "Tokenized equities",
        detail: "Coinbase stocks on Base: volume regimes, who can touch them, and what “live” actually means.",
      },
      {
        name: "Infrastructure maps",
        detail: "DEXs, lending, oracles, aggregators, wallets. The stack around an asset, not the asset alone.",
      },
      {
        name: "Onchain distribution",
        detail: "Where a note travels — Base, Coinbase Wallet, and the accounts that actually read it.",
      },
    ],
  },
  {
    index: "03",
    label: "Product",
    items: [
      {
        name: "Wallet teardowns",
        detail: "Discover, charts, limit orders, multi-token sells. What changed in the product, in one sitting.",
      },
      {
        name: "Close reading",
        detail: "Official docs beside the screenshot. Quotes, fees, and the part the interface hides.",
      },
      {
        name: "Builder briefs",
        detail: "Turning a launch into a list of products that do not exist yet — indexes, yield, agents, gifts.",
      },
    ],
  },
  {
    index: "04",
    label: "Practice",
    items: [
      {
        name: "Patience",
        detail: "The bio, practiced. Early markets get a daily record instead of a victory lap.",
      },
      {
        name: "Discipline",
        detail: "Same hour, same standard. The September run is the proof, not a content calendar.",
      },
      {
        name: "In public",
        detail: "Blue-verified notes on X, replies included. The archive is the portfolio.",
      },
    ],
  },
] as const;
