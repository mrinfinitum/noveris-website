export const navItems = ["Vision", "Eras", "Civilizations", "Explore", "Build", "Discover"];

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

export const progressionEras = [
  {
    name: "Survival",
    period: "First Spark",
    thesis: "Learn the world by hand.",
    detail: "Gather, hunt, shelter, and turn the first fragile camp into a repeatable growth loop.",
  },
  {
    name: "Ancient",
    period: "First Cities",
    thesis: "Turn camps into kingdoms.",
    detail: "Farms, stonework, writing, trade, and law transform survival into the first durable societies.",
  },
  {
    name: "Medieval",
    period: "Fortified Worlds",
    thesis: "Build culture and control.",
    detail: "Castles, guilds, faith, metallurgy, and regional power turn villages into connected realms.",
  },
  {
    name: "Industrial",
    period: "Industrial Age",
    thesis: "Convert resources into scale.",
    detail: "Steam, factories, rail, electricity, and automation turn local production into planetary momentum.",
  },
  {
    name: "Modern",
    period: "Modern Future",
    thesis: "Connect everything.",
    detail: "Cities, networks, AI, orbital launch systems, and climate repair push civilization past one world.",
  },
  {
    name: "Space Age",
    period: "Orbital Breakout",
    thesis: "Leave the cradle.",
    detail: "Stations, satellites, spaceports, and moon industry make expansion a planetary habit.",
  },
  {
    name: "Interstellar",
    period: "Space Age",
    thesis: "Build beyond the horizon.",
    detail: "Colonies, elevators, starships, and living planetary systems keep humanity growing without end.",
  },
  {
    name: "Galactic",
    period: "Infinite Universe",
    thesis: "Connect the stars.",
    detail: "Civilizations, fleets, wonders, and living economies spread across an ever-growing galaxy.",
  },
];

export const civilizations = [
  {
    name: "Industrial",
    theme: "Collect from asteroid belts, moons, and orbital wreckage.",
    description: "Turn raw matter into automated economies and megastructure chains.",
    accent: "amber",
    image: "/media/civilizations/industrial.png",
    stat: "42 extractor chains",
    signal: "Megastructure economy",
    doctrine: "Mine the impossible. Convert raw worlds into civilization-scale engines.",
  },
  {
    name: "Scientific",
    theme: "Scan unknown systems until the map becomes alive.",
    description: "Discover species, anomalies, and breakthroughs that unlock the next scale.",
    accent: "cyan",
    image: "/media/civilizations/scientific.png",
    stat: "19 anomaly labs",
    signal: "Research frontier",
    doctrine: "Turn every strange signal into a theory, then into a new future.",
  },
  {
    name: "Ecological",
    theme: "Grow from cells to biospheres to planetary networks.",
    description: "Seed life, balance worlds, and evolve habitats that survive the void.",
    accent: "green",
    image: "/media/civilizations/ecological.png",
    stat: "87% biosphere spread",
    signal: "Living colony web",
    doctrine: "Build with life itself and let worlds become the infrastructure.",
  },
  {
    name: "Cybernetic",
    theme: "Upgrade the systems that keep expansion moving.",
    description: "Neural infrastructure, autonomous stations, and cities that learn.",
    accent: "violet",
    image: "/media/civilizations/cybernetic.png",
    stat: "64 neural loops",
    signal: "Autonomous ascent",
    doctrine: "Teach the machine to maintain, optimize, and expand the civilization.",
  },
  {
    name: "Corporate",
    theme: "Route the rarest finds across an endless economy.",
    description: "Trade relics, resources, and discoveries across growing civilizations.",
    accent: "gold",
    image: "/media/civilizations/corporate.png",
    stat: "31 trade corridors",
    signal: "Interstellar market",
    doctrine: "Own the routes. Move the rarest discoveries through a universe that never stops growing.",
  },
];

export const explorePlanets = [
  {
    name: "Veyra",
    className: "Ocean world",
    orbit: "Inner ribbon",
    x: 22,
    y: 58,
    signal: "88%",
    finds: "05",
    growth: "Biomes",
    distance: "2.4 LY",
    hazard: "Low",
    reward: "Species data",
    note: "Warm shallows, drowned ruins, and living coastlines ready for the first survey chain.",
  },
  {
    name: "Halcyon",
    className: "Temperate colony",
    orbit: "Gold zone",
    x: 48,
    y: 34,
    signal: "92%",
    finds: "07",
    growth: "Rising",
    distance: "3.1 LY",
    hazard: "Stable",
    reward: "Colony seed",
    note: "A balanced world with enough old infrastructure to turn exploration into expansion.",
  },
  {
    name: "Nadir",
    className: "Ancient ruin",
    orbit: "Silent arm",
    x: 68,
    y: 66,
    signal: "61%",
    finds: "11",
    growth: "Relic",
    distance: "5.8 LY",
    hazard: "Unknown",
    reward: "Lost machines",
    note: "Broken megastructure traces surface when probes cross the night-side debris field.",
  },
  {
    name: "Eos",
    className: "Gas giant",
    orbit: "Outer veil",
    x: 82,
    y: 28,
    signal: "74%",
    finds: "03",
    growth: "Fuel",
    distance: "7.2 LY",
    hazard: "Storms",
    reward: "Helium lattice",
    note: "High-atmosphere skimmers and ring harvesters unlock long-range route planning.",
  },
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
