export const navItems = ["Vision", "Civilizations", "Explore", "Build", "Discover"];

export const heroActions = [
  { label: "Wishlist", href: "#community", intent: "primary" },
  { label: "Start Growing", href: "#build", intent: "ghost" },
  { label: "Join Community", href: "#community", intent: "ghost" },
];

export const visionLines = [
  "From first spark to infinite universe.",
  "Collect resources.",
  "Explore living galaxies.",
  "Keep growing.",
];

export const civilizations = [
  {
    name: "Industrial",
    theme: "Collect from asteroid belts, moons, and orbital wreckage.",
    description: "Turn raw matter into automated economies and megastructure chains.",
    accent: "amber",
  },
  {
    name: "Scientific",
    theme: "Scan unknown systems until the map becomes alive.",
    description: "Discover species, anomalies, and breakthroughs that unlock the next scale.",
    accent: "cyan",
  },
  {
    name: "Ecological",
    theme: "Grow from cells to biospheres to planetary networks.",
    description: "Seed life, balance worlds, and evolve habitats that survive the void.",
    accent: "green",
  },
  {
    name: "Cybernetic",
    theme: "Upgrade the systems that keep expansion moving.",
    description: "Neural infrastructure, autonomous stations, and cities that learn.",
    accent: "violet",
  },
  {
    name: "Corporate",
    theme: "Route the rarest finds across an endless economy.",
    description: "Trade relics, resources, and discoveries across growing civilizations.",
    accent: "gold",
  },
];

export const explorePlanets = [
  { name: "Veyra", className: "Ocean world", orbit: "Inner ribbon", x: 22, y: 58 },
  { name: "Halcyon", className: "Temperate colony", orbit: "Gold zone", x: 48, y: 34 },
  { name: "Nadir", className: "Ancient ruin", orbit: "Silent arm", x: 68, y: 66 },
  { name: "Eos", className: "Gas giant", orbit: "Outer veil", x: 82, y: 28 },
];

export const buildPillars = [
  "Collect",
  "Evolve",
  "Explore",
  "Automate",
  "Ascend",
];

export const discoveries = [
  { title: "Exotic Worlds", detail: "Scan impossible climates, rare biomes, and settlement odds before the first colony lands." },
  { title: "Rare Matter", detail: "Track crystals, volatile elements, and ancient components that unlock the next build chain." },
  { title: "Ancient Tech", detail: "Recover dormant machines, ruin signals, and relic systems from civilizations lost to deep time." },
  { title: "Living Systems", detail: "Collect species traits and ecological mutations that push worlds from cells to biospheres." },
  { title: "Hidden Routes", detail: "Reveal shortcuts, trade corridors, and dangerous gates that keep the universe expanding." },
];

export const researchEras = [
  "Primitive",
  "Ancient",
  "Industrial",
  "Modern",
  "Interstellar",
  "Galactic",
];

export const communityLinks = ["Discord", "Twitter", "YouTube", "Newsletter"];

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "NOVERIS",
  alternateName: "Noveris",
  description:
    "NOVERIS is a hopeful AAA-scale game about collecting, exploring, evolving, and growing civilizations across an infinite universe.",
  genre: ["Exploration", "Strategy", "Simulation", "Science fiction"],
  applicationCategory: "Game",
  operatingSystem: "Windows, macOS",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/PreOrder",
  },
};
