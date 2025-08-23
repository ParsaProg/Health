"use client";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

export default function AnimatedBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setReady(true);
    });
  }, []);

  if (!ready) return null;

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <Particles
      id="tsparticles"
      options={{
        fpsLimit: isMobile ? 30 : 60,
        particles: {
          number: { value: isMobile ? 25 : 80 },
          color: { value: "#58a6ff" },
          links: {
            enable: !isMobile,
            color: "#58a6ff",
            distance: isMobile ? 80 : 150,
            opacity: isMobile ? 0.2 : 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: isMobile ? 0.5 : 1.5,
          },
          opacity: { value: 0.3 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: isMobile ? 2 : 4 } },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
