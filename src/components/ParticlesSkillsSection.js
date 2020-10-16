/** @format */

import React from "react";
import "./ParticlesSkillsSection.css";
import Particles from "react-particles-js";
function ParticlesSkillsSection() {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 10,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            speed: 1,
            out_mode: "out",
          },
          shape: {
            type: ["image", ""],
            image: [
              {
                src: "/images/html.svg",
                height: 20,
                width: 23,
              },
              {
                src: "/images/css.svg",
                height: 20,
                width: 23,
              },
              {
                src: "/images/js.svg",
                height: 20,
                width: 23,
              },
              {
                src: "/images/react.svg",
                height: 20,
                width: 30,
              },
              {
                src: "/images/github.svg",
                height: 20,
                width: 20,
              },
              {
                src: "/images/ps.svg",
                height: 20,
                width: 20,
              },
            ],
          },
          color: {
            value: "#ccc",
          },
          size: {
            value: 30,
            random: false,
            anim: {
              enable: true,
              speed: 4,
              size_min: 10,
              sync: false,
            },
          },
        },
        retina_detect: false,
      }}
    />
  );
}
export default ParticlesSkillsSection;
