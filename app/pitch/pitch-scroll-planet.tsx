"use client";

import { useEffect } from "react";

export function PitchScrollPlanet() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let animationFrame = 0;

    const updatePlanet = () => {
      const progress = Math.min(window.scrollY / Math.max(window.innerHeight * 1.25, 1), 1);
      document.documentElement.style.setProperty(
        "--pitch-planet-rotate",
        `${progress * 36}deg`,
      );
      document.documentElement.style.setProperty(
        "--pitch-planet-drift",
        `${progress * -28}px`,
      );
      animationFrame = 0;
    };

    const requestUpdate = () => {
      if (animationFrame === 0) {
        animationFrame = window.requestAnimationFrame(updatePlanet);
      }
    };

    updatePlanet();
    window.addEventListener("scroll", requestUpdate, { passive: true });

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      if (animationFrame !== 0) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div className="pitch-scroll-planet" aria-hidden="true">
      <div className="pitch-scroll-planet-core">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
