"use client";

import { useState } from "react";
import "./noveris-galaxy-graphic.css";

export type GalaxyDestination = {
  name: string;
  className: string;
  orbit: string;
  x: number;
  y: number;
  signal: string;
  finds: string;
  growth: string;
  distance: string;
  hazard: string;
  reward: string;
  note: string;
};

export const galaxyDestinations: GalaxyDestination[] = [
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

type NoverisGalaxyGraphicProps = {
  imageSrc?: string;
  initialDestination?: string;
  showReadout?: boolean;
  onDestinationChange?: (destination: GalaxyDestination) => void;
};

export function NoverisGalaxyGraphic({
  imageSrc = "./noveris-galaxy-map.png",
  initialDestination = "Halcyon",
  showReadout = false,
  onDestinationChange,
}: NoverisGalaxyGraphicProps) {
  const initial = galaxyDestinations.find((item) => item.name === initialDestination) ?? galaxyDestinations[1];
  const [activeDestination, setActiveDestination] = useState(initial);

  function selectDestination(destination: GalaxyDestination) {
    setActiveDestination(destination);
    onDestinationChange?.(destination);
  }

  return (
    <section className="noveris-galaxy-shell" aria-label="NOVERIS galaxy atlas">
      <div className="nms-galaxy-layout">
        <div className="galaxy-stage nms-galaxy-stage">
          <div className="media-placeholder galaxy-background has-image">
            <img
              src={imageSrc}
              alt="Painterly NOVERIS galaxy map with glowing systems, nebula bloom, planets, and route arcs."
              className="media-image"
              loading="eager"
              decoding="async"
            />
          </div>

          <div className="nms-starfield nms-starfield-one" aria-hidden="true" />
          <div className="nms-starfield nms-starfield-two" aria-hidden="true" />
          <div className="nms-aurora nms-aurora-one" aria-hidden="true" />
          <div className="nms-aurora nms-aurora-two" aria-hidden="true" />
          <div className="nms-void-bloom nms-void-bloom-one" aria-hidden="true" />
          <div className="nms-void-bloom nms-void-bloom-two" aria-hidden="true" />
          <div className="nms-hyperlane nms-hyperlane-one" aria-hidden="true" />
          <div className="nms-hyperlane nms-hyperlane-two" aria-hidden="true" />
          <div className="nms-hyperlane nms-hyperlane-three" aria-hidden="true" />
          <div className="galaxy-map-grid" aria-hidden="true" />
          <div className="galaxy-core" aria-hidden="true" />
          <div className="scan-ring scan-ring-one" aria-hidden="true" />
          <div className="scan-ring scan-ring-two" aria-hidden="true" />
          <div className="scan-ring scan-ring-three" aria-hidden="true" />
          <div className="galaxy-dust galaxy-dust-one" aria-hidden="true" />
          <div className="galaxy-dust galaxy-dust-two" aria-hidden="true" />
          <div className="route-lane route-lane-one" aria-hidden="true" />
          <div className="route-lane route-lane-two" aria-hidden="true" />
          <div className="map-route route-veyr-halcyon" aria-hidden="true" />
          <div className="map-route route-halcyon-eos" aria-hidden="true" />
          <div className="map-route route-halcyon-nadir" aria-hidden="true" />
          <div className="map-route route-veyr-nadir" aria-hidden="true" />
          <div className="map-range map-range-view" aria-hidden="true">View</div>
          <div className="map-range map-range-probe" aria-hidden="true">Probe</div>
          <div className="map-node node-one" aria-hidden="true" />
          <div className="map-node node-two" aria-hidden="true" />
          <div className="map-node node-three" aria-hidden="true" />
          <div className="map-node node-four" aria-hidden="true" />
          <div className="sector-label sector-label-one" aria-hidden="true">Euclid drift</div>
          <div className="sector-label sector-label-two" aria-hidden="true">Atlas route</div>
          <div className="sector-label sector-label-three" aria-hidden="true">Probe veil</div>
          <div className="map-console map-console-top" aria-hidden="true">
            <span>Scanner atlas</span>
            <strong>04 systems linked</strong>
          </div>
          <div className="map-console map-console-bottom" aria-hidden="true">
            <span>Route state</span>
            <strong>Probe first</strong>
          </div>

          {galaxyDestinations.map((destination) => (
            <button
              type="button"
              className={`planet-pin ${activeDestination.name === destination.name ? "is-active" : ""}`}
              key={destination.name}
              aria-pressed={activeDestination.name === destination.name}
              onClick={() => selectDestination(destination)}
              onMouseEnter={() => selectDestination(destination)}
              style={{ left: `${destination.x}%`, top: `${destination.y}%` }}
            >
              <span aria-hidden="true" />
              <strong>{destination.name}</strong>
            </button>
          ))}
        </div>

        {showReadout ? (
          <aside className="nms-readout" aria-live="polite">
            <span>Selected system</span>
            <h2>{activeDestination.name}</h2>
            <p>{activeDestination.className}</p>
            <small>{activeDestination.orbit}</small>
            <p>{activeDestination.note}</p>
            <dl>
              <div><dt>Distance</dt><dd>{activeDestination.distance}</dd></div>
              <div><dt>Hazard</dt><dd>{activeDestination.hazard}</dd></div>
              <div><dt>Reward</dt><dd>{activeDestination.reward}</dd></div>
              <div><dt>Signal</dt><dd>{activeDestination.signal}</dd></div>
            </dl>
          </aside>
        ) : null}
      </div>
    </section>
  );
}

