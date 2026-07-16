"use client";

import { useState } from "react";
import { buildPillars } from "../noveris-content";

const calloutPositions = [
  "pitch-loop-callout-top",
  "pitch-loop-callout-mid",
  "pitch-loop-callout-bottom",
];

export function PitchLoopShowcase() {
  const [activePillar, setActivePillar] = useState(buildPillars[0]);

  return (
    <section className="pitch-loop" aria-labelledby="pitch-loop">
      <div className="pitch-loop-art-wrap">
        {buildPillars.map((pillar, index) => (
          <img
            src={pillar.image}
            alt=""
            aria-hidden="true"
            className={`pitch-loop-art ${activePillar.title === pillar.title ? "is-active" : ""}`}
            key={pillar.title}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        ))}
        {activePillar.callouts.map((callout, index) => (
          <span
            className={`pitch-loop-callout ${calloutPositions[index]}`}
            key={callout}
          >
            {callout}
          </span>
        ))}
      </div>
      <div className="pitch-loop-copy">
        <p className="pitch-kicker">The playable engine</p>
        <h2 id="pitch-loop">A growth loop that always reveals the next horizon.</h2>
        <div className="pitch-loop-steps" role="tablist" aria-label="Core gameplay loop">
          {buildPillars.map((pillar, index) => (
            <button
              type="button"
              className={activePillar.title === pillar.title ? "is-active" : ""}
              key={pillar.title}
              role="tab"
              aria-selected={activePillar.title === pillar.title}
              onClick={() => setActivePillar(pillar)}
              onMouseEnter={() => {
                if (activePillar.title !== pillar.title) {
                  setActivePillar(pillar);
                }
              }}
            >
              <small>{String(index + 1).padStart(2, "0")}</small>
              {pillar.title}
            </button>
          ))}
        </div>
        <div className="pitch-loop-detail" aria-live="polite">
          <span>{activePillar.stat}</span>
          <p>{activePillar.detail}</p>
        </div>
      </div>
    </section>
  );
}
