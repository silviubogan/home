"use client";

import React, { useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import {
  type Engine,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

// TODO: use https://github.com/tsparticles/tsparticles/tree/main/wrappers/nextjs#readme

// this should be run only once per application lifetime (?)
const particlesInit = async (engine: Engine) => {
  await loadSlim(engine);
};

export const MyParticles: React.FC = () => {
  const options: ISourceOptions = useMemo(() => {
    return {
      background: {
        color: {
          value: "white",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: {
            delay: 0,
            enable: true,
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#333",
        },
        links: {
          color: "#333",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            // area: {
            //   width: 800,
            //   height: 800,
            //   enable: true,
            // },
          },
          value: 75,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    };
  }, []);

  return (
    <ParticlesProvider init={particlesInit}>
      <Particles
        id="tsparticles"
        // particlesLoaded={particlesLoaded}
        options={options}
      />
    </ParticlesProvider>
  );
};
