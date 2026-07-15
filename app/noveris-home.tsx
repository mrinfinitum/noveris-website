"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import type { MotionValue } from "framer-motion";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import Lenis from "lenis";
import {
  buildPillars,
  civilizations,
  communityLinks,
  discoveries,
  explorePlanets,
  heroActions,
  navItems,
  structuredData,
  visionLines,
} from "./noveris-content";

type MediaKind =
  | "hero-art"
  | "hero-planet"
  | "hero-ship"
  | "galaxy-background"
  | "planet-screenshot"
  | "civilization-artwork"
  | "gameplay-ui"
  | "concept-art";

const mediaAssets: Partial<
  Record<
    MediaKind,
    {
      src: string;
      alt: string;
      credit: string;
    }
  >
> = {
  "hero-art": {
    src: "/media/retro/noveris-retro-colony-hero.png",
    alt: "Retro minimal NOVERIS colony at twilight with orbit trails, spacecraft, and a ringed planet.",
    credit: "NOVERIS concept art",
  },
  "galaxy-background": {
    src: "/media/retro/noveris-retro-orbit-map.png",
    alt: "Retro minimal orbital map over a planetside horizon with multiple worlds and spacecraft.",
    credit: "NOVERIS concept art",
  },
  "hero-planet": {
    src: "/media/retro/noveris-retro-ocean-world.png",
    alt: "Retro minimal ocean world with research habitats, ancient ruins, and ringed moons.",
    credit: "NOVERIS game art",
  },
  "concept-art": {
    src: "/media/retro/noveris-retro-colony-hero.png",
    alt: "Retro minimal planet-side colony scene with habitats, orbit trails, and passing ships.",
    credit: "NOVERIS concept art",
  },
  "civilization-artwork": {
    src: "/media/retro/noveris-retro-build-network.png",
    alt: "Retro minimal NOVERIS colony network with habitats, trade routes, and orbital infrastructure.",
    credit: "NOVERIS concept art",
  },
  "gameplay-ui": {
    src: "/media/retro/noveris-retro-build-network.png",
    alt: "Retro minimal build network showing colony automation, trade routes, ships, and orbital infrastructure.",
    credit: "NOVERIS concept art",
  },
  "planet-screenshot": {
    src: "/media/retro/noveris-retro-ocean-world.png",
    alt: "Retro minimal ocean world with research habitats, water reflections, and ancient ruins.",
    credit: "NOVERIS concept art",
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0 },
};

export function NoverisHome() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });
  const heroDrift = useTransform(smoothProgress, [0, 0.45], [0, -140]);
  const planetScale = useTransform(smoothProgress, [0, 0.55], [1, 1.18]);
  const planetX = useTransform(mouseX, [-0.5, 0.5], [-26, 26]);
  const [activePlanet, setActivePlanet] = useState(explorePlanets[1]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.18,
      smoothWheel: true,
      wheelMultiplier: 0.72,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      gsap.to(".ship-primary", {
        xPercent: 18,
        yPercent: -6,
        rotate: -1.5,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".nebula-field", {
        backgroundPosition: "58% 44%, 42% 66%, 50% 50%",
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      ctx.revert();
    };
  }, []);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <main className="bg-[var(--void)] text-white" onPointerMove={handlePointerMove}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ProgressRail progress={smoothProgress} />
      <Header />

      <section className="hero-section min-h-screen overflow-hidden" id="top" aria-label="NOVERIS hero">
        <GalaxyBackground mouseX={mouseX} mouseY={mouseY} />
        <motion.div className="hero-brand-scene" style={{ y: heroDrift, scale: planetScale, x: planetX }}>
          <img
            src="/media/retro/noveris-retro-colony-hero.png"
            alt=""
            aria-hidden="true"
          />
        </motion.div>
        <div className="hero-copy">
          <h1 className="sr-only">NOVERIS - The Future We Build</h1>
          <motion.p
            className="section-kicker"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
          A civilization game about the future we build
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.46 }}
          >
            {heroActions.map((action) => (
              <a
                className={action.intent === "primary" ? "cta-primary" : "cta-secondary"}
                href={action.href}
                key={action.label}
              >
                {action.label}
              </a>
            ))}
          </motion.div>
        </div>
        <div className="scroll-cue" aria-hidden="true">
          <span />
        </div>
      </section>

      <VisionSection />
      <CivilizationsSection />
      <ExploreSection activePlanet={activePlanet} setActivePlanet={setActivePlanet} />
      <BuildSection />
      <DiscoverSection />
      <CommunitySection />
    </main>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand-mark" href="#top" aria-label="NOVERIS home">
        <img src="/media/derived/noveris-wordmark.png" alt="NOVERIS - The Future We Build" />
      </a>
      <nav aria-label="Primary navigation">
        {navItems.map((item) => (
          <a href={`#${item.toLowerCase()}`} key={item}>
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}

function ProgressRail({ progress }: { progress: MotionValue<number> }) {
  return (
    <motion.div className="progress-rail" aria-hidden="true">
      <motion.span style={{ scaleY: progress }} />
    </motion.div>
  );
}

function VisionSection() {
  return (
    <Section id="vision" label="The Vision">
      <div className="vision-grid">
        <motion.div
          className="vision-image"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={fadeUp}
          transition={{ duration: 0.85 }}
        >
          <MediaPlaceholder kind="concept-art" label="Concept Art" />
        </motion.div>
        <motion.div
          className="vision-copy"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={fadeUp}
          transition={{ duration: 0.85, delay: 0.12 }}
        >
          {visionLines.map((line, index) =>
            index === 0 ? (
              <h2 key={line}>{line}</h2>
            ) : (
              <p key={line}>{line}</p>
            ),
          )}
        </motion.div>
      </div>
    </Section>
  );
}

function CivilizationsSection() {
  return (
    <Section id="civilizations" label="Civilizations">
      <div className="section-heading">
        <h2>Choose what humanity becomes.</h2>
      </div>
      <div className="civilization-track">
        {civilizations.map((civilization, index) => (
          <motion.article
            className={`civilization-card accent-${civilization.accent}`}
            key={civilization.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.65, delay: index * 0.06 }}
          >
            <div>
              <span>{civilization.theme}</span>
              <h3>{civilization.name}</h3>
              <p>{civilization.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function ExploreSection({
  activePlanet,
  setActivePlanet,
}: {
  activePlanet: (typeof explorePlanets)[number];
  setActivePlanet: (planet: (typeof explorePlanets)[number]) => void;
}) {
  return (
    <Section id="explore" label="Explore">
      <div className="explore-layout">
        <div className="galaxy-stage">
          <MediaPlaceholder kind="galaxy-background" label="Galaxy Background" />
          <div className="galaxy-map-grid" aria-hidden="true" />
          <div className="galaxy-core" aria-hidden="true" />
          <div className="scan-ring scan-ring-one" aria-hidden="true" />
          <div className="scan-ring scan-ring-two" aria-hidden="true" />
          <div className="map-route route-veyr-halcyon" aria-hidden="true" />
          <div className="map-route route-halcyon-eos" aria-hidden="true" />
          <div className="map-route route-halcyon-nadir" aria-hidden="true" />
          <div className="map-route route-veyr-nadir" aria-hidden="true" />
          <div className="sector-label sector-label-one" aria-hidden="true">
            Euclid drift
          </div>
          <div className="sector-label sector-label-two" aria-hidden="true">
            Atlas route
          </div>
          {explorePlanets.map((planet) => (
            <button
              className={`planet-pin ${activePlanet.name === planet.name ? "is-active" : ""}`}
              key={planet.name}
              onClick={() => setActivePlanet(planet)}
              onMouseEnter={() => setActivePlanet(planet)}
              style={{ left: `${planet.x}%`, top: `${planet.y}%` }}
            >
              <span />
              <strong>{planet.name}</strong>
            </button>
          ))}
        </div>
        <motion.aside
          className="planet-readout"
          key={activePlanet.name}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <span>Selected system</span>
          <h3>{activePlanet.name}</h3>
          <p>{activePlanet.className}</p>
          <small>{activePlanet.orbit}</small>
          <div className="readout-grid" aria-hidden="true">
            <span>Signal</span>
            <strong>92%</strong>
            <span>Biomes</span>
            <strong>07</strong>
            <span>Route</span>
            <strong>Locked</strong>
          </div>
        </motion.aside>
      </div>
    </Section>
  );
}

function BuildSection() {
  return (
    <Section id="build" label="Build">
      <div className="build-grid">
        <div className="gameplay-frame">
          <MediaPlaceholder kind="gameplay-ui" label="Gameplay UI" />
          <div className="ui-callout callout-one">Automation mesh stable</div>
          <div className="ui-callout callout-two">Trade corridor online</div>
          <div className="ui-callout callout-three">Megastructure phase II</div>
        </div>
        <div className="build-copy">
          <h2>Turn discovery into civilization.</h2>
          <div className="pillar-list">
            {buildPillars.map((pillar) => (
              <span key={pillar}>{pillar}</span>
            ))}
          </div>
          <div className="build-stat-grid" aria-label="Build systems">
            <span>Colonies</span>
            <strong>12</strong>
            <span>Trade routes</span>
            <strong>48</strong>
            <span>Automation</span>
            <strong>87%</strong>
          </div>
        </div>
      </div>
    </Section>
  );
}

function DiscoverSection() {
  return (
    <Section id="discover" label="Discover">
      <div className="discover-hero">
        <MediaPlaceholder kind="planet-screenshot" label="Planet Screenshot" />
        <div>
          <h2>Worlds that feel found, not placed.</h2>
        </div>
      </div>
      <div className="discovery-grid">
        {discoveries.map((discovery) => (
          <article key={discovery.title}>
            <span />
            <h3>{discovery.title}</h3>
            <p>{discovery.detail}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function CommunitySection() {
  return (
    <footer className="community-section" id="community">
      <p className="section-kicker">Community</p>
      <h2>The future is already assembling.</h2>
      <div className="community-links">
        {communityLinks.map((link) => (
          <a href="#" key={link}>
            {link}
          </a>
        ))}
      </div>
      <div className="footer-line">
        <span>NOVERIS</span>
        <span>The Future We Build</span>
      </div>
    </footer>
  );
}

function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <section className="content-section" id={id}>
      <p className="section-kicker">{label}</p>
      {children}
    </section>
  );
}

function GalaxyBackground({
  mouseX,
  mouseY,
}: {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}) {
  const galaxyX = useTransform(mouseX, [-0.5, 0.5], [18, -18]);
  const galaxyY = useTransform(mouseY, [-0.5, 0.5], [14, -14]);

  return (
    <motion.div
      className="galaxy-background nebula-field"
      style={{
        x: galaxyX,
        y: galaxyY,
      }}
    >
      <MediaPlaceholder kind="galaxy-background" label="Galaxy Background" />
    </motion.div>
  );
}

function MediaPlaceholder({ kind, label }: { kind: MediaKind; label: string }) {
  const asset = mediaAssets[kind];

  return (
    <div className={`media-placeholder ${kind} ${asset ? "has-image" : ""}`} data-media={label}>
      {asset ? (
        <img
          src={asset.src}
          alt={asset.alt}
          className="media-image"
          loading={kind === "hero-art" || kind === "galaxy-background" || kind === "hero-planet" ? "eager" : "lazy"}
          decoding="async"
        />
      ) : null}
      <span className="media-label">{asset?.credit ?? label}</span>
    </div>
  );
}
