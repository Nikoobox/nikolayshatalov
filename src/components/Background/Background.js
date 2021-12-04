import React, { Component } from "react";
import "./background.scss";
import { Link } from "react-scroll";
import Particles from "react-particles-js";
import { motion } from "framer-motion";

import { bioData } from "../data/bioData";

export default class Background extends Component {
  render() {
    return (
      <section className="background">
        <Particles
          params={{
            particles: {
              number: {
                value: 60,
                density: {
                  enable: true,
                  value_area: 1500,
                },
              },
              line_linked: {
                enable: true,
                opacity: 0.03,
              },
              move: {
                random: true,
                speed: 0.4,
              },
              size: {
                random: true,
                value: 4,
                // "color": "#3CA9D1",
              },
              color: {
                value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"],
              },
              opacity: {
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.1,
                },
              },
            },
            interactivity: {
              events: {
                onclick: {
                  enable: true,
                  mode: "push",
                },
              },
              modes: {
                push: {
                  particles_nb: 1,
                },
              },
            },
            retina_detect: true,
          }}
        />

        <div className="background-img">
          <div className="background-overlay"></div>
        </div>

        <motion.div
          className="background-box"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
        >
          <div className="background-text">
            {bioData.entrySection.hello}
            <div>{bioData.entrySection.info}</div>
          </div>
          <Link
            href="/"
            className="background-button"
            to="contact-destination"
            smooth={true}
            duration={1200}
          >
            Say Hi
          </Link>
        </motion.div>

        <div className="wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
    );
  }
}
