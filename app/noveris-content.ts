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
  {
    title: "Collect",
    detail: "Pull matter, relics, species data, and anomalies into one expanding civilization engine.",
    stat: "48 resource classes",
    callouts: ["Resource lattice online", "Matter stream locked", "Archive intake primed"],
    image: "/media/build/collect.png",
  },
  {
    title: "Evolve",
    detail: "Push from cells to ecosystems to planet-scale networks that change what each colony can become.",
    stat: "87% biosphere growth",
    callouts: ["Biosphere growth stable", "Trait network adapting", "Habitat bloom detected"],
    image: "/media/build/evolve.png",
  },
  {
    title: "Explore",
    detail: "Open new routes, scan strange systems, and turn each discovery into fresh build options.",
    stat: "12 systems charted",
    callouts: ["New atlas route found", "Scanner sweep active", "Outer drift charted"],
    image: "/media/build/explore.png",
  },
  {
    title: "Automate",
    detail: "Link colonies, ships, extractors, and research loops until the civilization keeps moving on its own.",
    stat: "32 active loops",
    callouts: ["Automation mesh stable", "Loop chain synchronized", "Drone corridor online"],
    image: "/media/build/automate.png",
  },
  {
    title: "Ascend",
    detail: "Convert everything you have built into the next scale of civilization and start growing again.",
    stat: "Singularity pending",
    callouts: ["Ascension threshold near", "Singularity core awake", "New cycle standing by"],
    image: "/media/build/ascend.png",
  },
];

export const discoveries = [
  {
    title: "Exotic Worlds",
    detail: "Scan rare climates and settlement odds.",
    image: "/media/discoveries/exotic-worlds.png",
    heroImage: "/media/discoveries/exotic-worlds-wide.png",
  },
  {
    title: "Rare Matter",
    detail: "Track volatile elements and ancient components.",
    image: "/media/discoveries/rare-matter.png",
    heroImage: "/media/discoveries/rare-matter-wide.png",
  },
  {
    title: "Ancient Tech",
    detail: "Recover dormant machines and ruin signals.",
    image: "/media/discoveries/ancient-tech.png",
    heroImage: "/media/discoveries/ancient-tech-wide.png",
  },
  {
    title: "Evolving Worlds",
    detail: "Guide ecosystems from cells to biospheres.",
    image: "/media/discoveries/evolving-worlds.png",
    heroImage: "/media/discoveries/evolving-worlds-wide.png",
  },
  {
    title: "Discover Life",
    detail: "Find species that alter every growth path.",
    image: "/media/discoveries/discover-life.png",
    heroImage: "/media/discoveries/discover-life-wide.png",
  },
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
