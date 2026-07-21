"use client";

import { useState } from "react";
import { progressionEras } from "../noveris-content";

const eraPlayerBenefits = [
  {
    name: "Survival",
    loop: "Gather, shelter, craft, and feel the first click matter.",
    benefit: "Instant onboarding with tactile wins and a clear reason to keep upgrading.",
  },
  {
    name: "Ancient",
    loop: "Turn camps into farms, roads, writing, and the first shared economy.",
    benefit: "Players see their tiny settlement become a civilization instead of a bigger counter.",
  },
  {
    name: "Medieval",
    loop: "Build guilds, walls, trade routes, and regional power structures.",
    benefit: "Adds identity, specialization, and strategic choices without overwhelming the core loop.",
  },
  {
    name: "Industrial",
    loop: "Automate production through factories, rail, extractors, and megastructure supply chains.",
    benefit: "The idle fantasy comes alive: players feel compounding scale and smarter automation.",
  },
  {
    name: "Modern",
    loop: "Connect cities, research networks, AI systems, and planetary infrastructure.",
    benefit: "Turns growth into optimization, giving advanced players richer knobs to tune.",
  },
  {
    name: "Space Age",
    loop: "Launch satellites, stations, moon industry, and orbital logistics.",
    benefit: "A major fantasy pivot that rewards long-term play with a visible new frontier.",
  },
  {
    name: "Interstellar",
    loop: "Colonize systems, discover rare worlds, route resources, and build starships.",
    benefit: "Expands the map into a living hobby where exploration feeds every progression system.",
  },
  {
    name: "Galactic",
    loop: "Coordinate civilizations, fleets, wonders, and economies across the galaxy.",
    benefit: "Creates an aspirational endgame built for seasons, expansions, and community goals.",
  },
];

export function PitchEraShowcase() {
  const [activeEra, setActiveEra] = useState(progressionEras[0]);
  const activeIndex = progressionEras.findIndex(
    (era) => era.name === activeEra.name,
  );
  const activeBenefit =
    eraPlayerBenefits.find((benefit) => benefit.name === activeEra.name) ??
    eraPlayerBenefits[0];

  return (
    <section className="pitch-era" aria-labelledby="pitch-era-title">
      <div className="pitch-era-copy">
        <p className="pitch-kicker">Civilization continuum</p>
        <h2 id="pitch-era-title">Eight ages. One civilization that remembers.</h2>
        <p>
          Every breakthrough changes the world players already built. Progress
          feels continuous from the first shelter to a living galactic network.
        </p>
        <div className="pitch-era-detail" aria-live="polite">
          <div className="pitch-era-detail-heading">
            <span>Selected era</span>
            <strong>
              {String(activeIndex + 1).padStart(2, "0")}
              <small>/08</small>
            </strong>
          </div>
          <div className="pitch-era-detail-copy">
            <p className="pitch-era-detail-name">{activeEra.name}</p>
            <p>{activeBenefit.loop}</p>
            <span>Player value</span>
            <p>{activeBenefit.benefit}</p>
          </div>
        </div>
      </div>
      <div className="pitch-era-art">
        <img
          src="/media/progression/survival-to-space.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />
        <div className="pitch-era-art-hud" aria-hidden="true">
          <span>Persistent world state</span>
          <span>Era {String(activeIndex + 1).padStart(2, "0")}</span>
        </div>
        <div className="pitch-era-art-label">
          <span>{activeEra.period}</span>
          <strong>{activeEra.name}</strong>
        </div>
      </div>
      <div className="pitch-era-tabs" role="tablist" aria-label="Playable eras">
        {progressionEras.map((era, index) => (
          <button
            type="button"
            className={activeEra.name === era.name ? "is-active" : ""}
            key={era.name}
            role="tab"
            aria-selected={activeEra.name === era.name}
            onClick={() => setActiveEra(era)}
            onMouseEnter={() => {
              if (activeEra.name !== era.name) {
                setActiveEra(era);
              }
            }}
          >
            <small>{String(index + 1).padStart(2, "0")}</small>
            <span>{era.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
