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
        fpsLimit: isMobile ? 25 : 60,
        particles: {
          number: { value: isMobile ? 15 : 80 },
          color: { value: "#58a6ff" },
          links: {
            enable: true,
            color: "#58a6ff",
            distance: isMobile ? 100 : 150,
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: isMobile ? 0.5 : 1.5,
          },
          opacity: { value: 0.3 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: isMobile ? 3 : 4 } },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
