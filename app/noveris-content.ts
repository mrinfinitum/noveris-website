export const navItems = ["Vision", "Civilizations", "Explore", "Build", "Discover"];

export const heroActions = [
  { label: "Wishlist", href: "#community", intent: "primary" },
  { label: "Play Free", href: "#build", intent: "ghost" },
  { label: "Join Community", href: "#community", intent: "ghost" },
];

export const visionLines = [
  "Humanity stands at the edge of its next great chapter.",
  "Build civilizations.",
  "Explore galaxies.",
  "Shape the future.",
];

export const civilizations = [
  {
    name: "Industrial",
    theme: "Forge orbital economies from raw asteroid belts.",
    description: "Automation networks, refinery chains, and megastructure logistics.",
    accent: "amber",
  },
  {
    name: "Scientific",
    theme: "Turn unknown systems into living maps.",
    description: "Observatories, expedition fleets, and breakthrough research eras.",
    accent: "cyan",
  },
  {
    name: "Ecological",
    theme: "Grow worlds that thrive beyond Earth.",
    description: "Closed-loop habitats, ocean restoration, and adaptive biospheres.",
    accent: "green",
  },
  {
    name: "Cybernetic",
    theme: "Synchronize people, machines, and cities.",
    description: "Neural infrastructure, autonomous stations, and predictive governance.",
    accent: "violet",
  },
  {
    name: "Corporate",
    theme: "Build the trade routes everyone depends on.",
    description: "Freight corridors, contract hubs, and interstellar market leverage.",
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
  "Research",
  "Automation",
  "Colonization",
  "Trade",
  "Megastructures",
];

export const discoveries = [
  { title: "Exotic Worlds", detail: "Frozen dawns, glass deserts, and living storms." },
  { title: "Ocean Worlds", detail: "Blue horizons built for habitats, science, and trade." },
  { title: "Gas Giants", detail: "Cities suspended above impossible atmospheres." },
  { title: "Ancient Ruins", detail: "Silent architectures older than every human era." },
  { title: "Alien Life", detail: "Ecosystems that ask more questions than they answer." },
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
    "NOVERIS is a hopeful AAA-scale game about civilization, exploration, automation, and humanity's future in space.",
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
