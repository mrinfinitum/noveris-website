import type { Metadata } from "next";
import { PitchEraShowcase } from "./pitch-era-showcase";
import { PitchLoopShowcase } from "./pitch-loop-showcase";
import { PitchScrollPlanet } from "./pitch-scroll-planet";

const proofPoints = [
  {
    stat: "01",
    title: "A loop players already understand",
    body: "Collect, upgrade, automate, discover, and prestige into a larger universe. The fantasy is ambitious, but the verbs are immediately readable.",
  },
  {
    stat: "02",
    title: "A universe that can keep expanding",
    body: "New planets, species, relics, resource chains, civilizations, events, and research eras can arrive as authored drops without breaking the core loop.",
  },
  {
    stat: "03",
    title: "Big scope, modular production",
    body: "The game can start with a strong vertical slice, then grow by adding systems, biomes, discoveries, and civilization archetypes over time.",
  },
];

const civilizationCards = [
  {
    name: "Industrial",
    image: "/media/civilizations/industrial.png",
    line: "Megastructure chains, extractors, orbital freight, and automated economies.",
  },
  {
    name: "Scientific",
    image: "/media/civilizations/scientific.png",
    line: "Anomalies, research breakthroughs, deep scans, and physics-bending upgrades.",
  },
  {
    name: "Ecological",
    image: "/media/civilizations/ecological.png",
    line: "Living habitats, terraforming pressure, species traits, and planet-scale biospheres.",
  },
  {
    name: "Cybernetic",
    image: "/media/civilizations/cybernetic.png",
    line: "Autonomous cities, neural infrastructure, synthetic labor, and adaptive networks.",
  },
  {
    name: "Corporate",
    image: "/media/civilizations/corporate.png",
    line: "Trade lanes, relic markets, contracts, logistics, and galaxy-spanning influence.",
  },
];

const roadmap = [
  "Prototype the core clicker and idle economy around one starter colony.",
  "Add galaxy exploration, system discovery, and resource routing.",
  "Layer civilization identities with unique art, bonuses, and progression.",
  "Ship live events, seasonal discoveries, and new eras as expansion packs.",
];

export const metadata: Metadata = {
  title: "Pitch Deck",
  description:
    "A hidden NOVERIS teaser deck for developers and collaborators.",
  alternates: {
    canonical: "/pitch",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function PitchPage() {
  return (
    <main className="pitch-page">
      <header className="pitch-nav" aria-label="Pitch deck navigation">
        <a href="/" aria-label="Return to NOVERIS home">
          <img src="/media/derived/noveris-wordmark.svg" alt="NOVERIS" />
        </a>
        <span>Private teaser deck</span>
      </header>

      <section className="pitch-hero" aria-labelledby="pitch-title">
        <img
          src="/media/explore/noveris-galaxy-map.png"
          alt=""
          aria-hidden="true"
          className="pitch-hero-bg"
        />
        <PitchScrollPlanet />
        <div className="pitch-hero-copy">
          <p className="pitch-kicker">Game concept pitch</p>
          <h1 id="pitch-title">Build civilizations across an infinite living universe.</h1>
          <p>
            NOVERIS combines the growth curve of Cells to Singularity with the discovery
            fantasy of No Man's Sky: a premium idle strategy game where every click,
            colony, system, and civilization pushes humanity into the next era.
          </p>
        </div>
        <div className="pitch-hero-card">
          <span>Core promise</span>
          <strong>Collect. Explore. Evolve. Keep growing.</strong>
        </div>
      </section>

      <section className="pitch-section pitch-split" aria-labelledby="pitch-why">
        <div>
          <p className="pitch-kicker">Why it can win</p>
          <h2 id="pitch-why">A simple loop with a universe-sized ceiling.</h2>
          <p>
            The opportunity is not just a bigger clicker. It is a game that turns
            collection, automation, and discovery into a long-term sci-fi hobby:
            approachable in minute one, rich enough to keep opening for years.
          </p>
        </div>
        <div className="pitch-proof-grid">
          {proofPoints.map((point) => (
            <article className="pitch-proof" key={point.title}>
              <span>{point.stat}</span>
              <h3>{point.title}</h3>
              <p>{point.body}</p>
            </article>
          ))}
        </div>
      </section>

      <PitchEraShowcase />

      <PitchLoopShowcase />

      <section className="pitch-section" aria-labelledby="pitch-civs">
        <div className="pitch-section-heading">
          <p className="pitch-kicker">Civilization fantasy</p>
          <h2 id="pitch-civs">Let players decide what humanity becomes.</h2>
          <p>
            Each civilization path is a content lane, an art direction, a progression
            identity, and a reason to replay the universe from a new philosophy.
          </p>
        </div>
        <div className="pitch-civ-grid">
          {civilizationCards.map((card) => (
            <article className="pitch-civ-card" key={card.name}>
              <img src={card.image} alt="" aria-hidden="true" />
              <div>
                <h3>{card.name}</h3>
                <p>{card.line}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pitch-section pitch-scale" aria-labelledby="pitch-scale">
        <div className="pitch-scale-copy">
          <p className="pitch-kicker">Production shape</p>
          <h2 id="pitch-scale">Start focused. Grow without losing the dream.</h2>
          <p>
            The first playable version can be narrow: one planet, one colony, one
            economy, one civilization track. The long-term vision stays huge because
            every later feature plugs into the same expandable universe model.
          </p>
        </div>
        <ol className="pitch-roadmap">
          {roadmap.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <section className="pitch-close" aria-labelledby="pitch-close">
        <img src="/media/community/helmet-profile.png" alt="" aria-hidden="true" />
        <div>
          <p className="pitch-kicker">The ask</p>
          <h2 id="pitch-close">Help turn the signal into a vertical slice.</h2>
          <p>
            NOVERIS needs builders who can translate a rich fantasy into a playable
            prototype: economy design, responsive UI, procedural content, live systems,
            and a visual language that makes growth feel cosmic.
          </p>
        </div>
      </section>
    </main>
  );
}
