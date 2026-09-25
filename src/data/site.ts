export const PROFILE = {
  name: "MD Rubel Islam",
  xUrl: "https://x.com/rubelislam0461",
  telegramUrl: "https://t.me/robinkhan565",
  dmUrl: "https://x.com/messages/compose?recipient_id=1805707201358839812",
  followers: "6,574",
} as const;

export const NAV = [
  { href: "#home", id: "home", label: "Home" },
  { href: "#about", id: "about", label: "About" },
  { href: "#experience", id: "experience", label: "Experience" },
  { href: "#ecosystems", id: "ecosystems", label: "Ecosystems" },
  { href: "#skills", id: "skills", label: "Skills" },
  { href: "#creative-work", id: "creative-work", label: "Creative Work" },
  { href: "#contact", id: "contact", label: "Contact" },
] as const;

export const ABOUT_NOTES = [
  "I’m MD Rubel Islam, a crypto and blockchain professional who has been active in the industry since 2016.",
  "Over the years, I have explored and contributed across multiple blockchain ecosystems, gaining hands-on experience with onchain activity, Web3 research, community engagement, and project participation.",
  "My work also extends into digital art, visual storytelling, and video content creation for Web3 projects.",
  "I continuously research emerging ecosystems, technologies, and onchain trends while building creative ways to communicate complex ideas.",
] as const;

export const TIMELINE = [
  {
    marker: "2016",
    title: "Entered the crypto and blockchain space",
    detail: "The start of hands-on time across crypto and blockchain networks.",
  },
  {
    marker: "Ongoing",
    title: "Crypto research",
    detail: "Reading markets, networks, and how activity behaves once it is onchain.",
  },
  {
    marker: "Ongoing",
    title: "Web3 ecosystem exploration",
    detail: "Moving through Layer 1 and Layer 2 ecosystems rather than staying on a single chain.",
  },
  {
    marker: "Ongoing",
    title: "Onchain activity",
    detail: "Hands-on use of networks — wallets, apps, and the paths transactions actually take.",
  },
  {
    marker: "Ongoing",
    title: "Community contribution",
    detail: "Showing up in ecosystem communities and participating in public programs.",
  },
  {
    marker: "Ongoing",
    title: "Monad ecosystem experience",
    detail: "Experience inside the Monad ecosystem. Specific roles are not claimed beyond participation.",
  },
  {
    marker: "Ongoing",
    title: "Base Advocate experience",
    detail: "Base Advocate experience, focused on ecosystem participation rather than an invented mandate.",
  },
  {
    marker: "Ongoing",
    title: "Digital art",
    detail: "Visual work made around crypto culture and Web3 projects.",
  },
  {
    marker: "Ongoing",
    title: "Web3 video content",
    detail: "Video and visual storytelling produced for Web3 projects.",
  },
  {
    marker: "Ongoing",
    title: "Ongoing blockchain research",
    detail: "Ongoing research into emerging ecosystems, technologies, and onchain trends.",
  },
] as const;

export type Layer = "Layer 1" | "Layer 2" | "App";

export type Chain = {
  name: string;
  layer: Layer;
  href: string;
  logo: string;
  framed?: boolean;
  current?: boolean;
};

export const CHAINS: Chain[] = [
  { name: "Monad", layer: "Layer 1", href: "https://monad.xyz", logo: "/logos/monad.webp" },
  { name: "Story Protocol", layer: "Layer 1", href: "https://storyprotocol.xyz", logo: "/logos/story.webp", framed: true },
  { name: "Berachain", layer: "Layer 1", href: "https://berachain.com", logo: "/logos/berachain.webp" },
  { name: "XION", layer: "Layer 1", href: "https://xion.burnt.com", logo: "/logos/xion.webp" },
  { name: "Sei", layer: "Layer 1", href: "https://sei.io", logo: "/logos/sei.svg" },
  { name: "Aptos", layer: "Layer 1", href: "https://aptoslabs.com", logo: "/logos/aptos.svg" },
  { name: "Sui", layer: "Layer 1", href: "https://sui.io", logo: "/logos/sui.svg" },
  { name: "Avalanche", layer: "Layer 1", href: "https://avax.network", logo: "/logos/avalanche.svg" },
  { name: "Arbitrum", layer: "Layer 2", href: "https://arbitrum.io", logo: "/logos/arbitrum.svg" },
  { name: "Base", layer: "Layer 2", href: "https://base.org", logo: "/logos/base.svg", current: true },
  { name: "Optimism", layer: "Layer 2", href: "https://optimism.io", logo: "/logos/optimism.svg" },
  { name: "zkSync", layer: "Layer 2", href: "https://zksync.io", logo: "/logos/zksync.webp", framed: true },
  { name: "Starknet", layer: "Layer 2", href: "https://starknet.io", logo: "/logos/starknet.svg" },
  { name: "Taiko", layer: "Layer 2", href: "https://taiko.xyz", logo: "/logos/taiko.webp" },
  { name: "Soneium", layer: "Layer 2", href: "https://soneium.org", logo: "/logos/soneium.webp", current: true },
  { name: "Startale App", layer: "App", href: "https://startale.com/en/app", logo: "/logos/startale.png", current: true },
];

export const SKILLS = [
  { name: "Onchain Analysis", icon: "activity" },
  { name: "Web3 Research", icon: "search" },
  { name: "Blockchain Ecosystem Research", icon: "layers" },
  { name: "Crypto Market Research", icon: "chart" },
  { name: "Community Engagement", icon: "users" },
  { name: "Digital Art", icon: "palette" },
  { name: "Visual Storytelling", icon: "frame" },
  { name: "Video Content Creation", icon: "clapper" },
  { name: "Web3 Content Strategy", icon: "route" },
  { name: "Multi-chain Ecosystem Exploration", icon: "waypoints" },
] as const;

export const WORKS = [
  {
    title: "Digital art",
    detail: "Still studies around crypto culture and digital forms.",
    image: "/art/glass-lab.jpg",
    video: null as string | null,
  },
  {
    title: "Web3 artwork",
    detail: "Glass and light studies meant to sit beside ecosystem storytelling.",
    image: "/art/glass-sheets.jpg",
    video: null,
  },
  {
    title: "Project visuals",
    detail: "Board-ready frames for explaining a network without a dense diagram.",
    image: "/art/chart-curve.jpg",
    video: null,
  },
  {
    title: "Video content",
    detail: "A short motion study for project storytelling.",
    image: "/art/chart-curve.jpg",
    video: "/art/motion-study.mp4",
  },
  {
    title: "Motion graphics",
    detail: "Motion built to explain a network, a path, or a culture in a few seconds.",
    image: "/art/glass-lab.jpg",
    video: "/art/motion-study.mp4",
  },
  {
    title: "Educational visuals",
    detail: "Quiet frames for teaching how a chain, a wallet, or a path fits together.",
    image: "/art/glass-sheets.jpg",
    video: null,
  },
] as const;

export const CONTRIBUTIONS = [
  {
    title: "Ecosystem research",
    detail: "Reading how a network is put together — what it is for, who builds on it, and what is still early.",
  },
  {
    title: "Onchain exploration",
    detail: "Using the networks directly: wallets, apps, and the transactions that follow.",
  },
  {
    title: "Community contribution",
    detail: "Participation in ecosystem communities, including advocate-style programs, without a claimed staff role.",
  },
  {
    title: "Digital art",
    detail: "Images made to carry a Web3 idea further than a paragraph can.",
  },
  {
    title: "Video content",
    detail: "Moving images for projects that need the explanation seen, not only read.",
  },
  {
    title: "Web3 creative work",
    detail: "The overlap of research and making — notes, frames, and stories around the same ecosystems.",
  },
] as const;

export const CONSOLE_FIELDS = [
  "Block",
  "Transaction",
  "Wallet",
  "Network",
  "Activity",
  "Gas",
  "Liquidity",
  "NFT",
  "Contract",
] as const;
