import React, { Component } from "react";
import "./background.scss";
import { Link } from "react-scroll";
import Particles from "react-particles-js";
import { motion } from "framer-motion";
import Wave from "react-wavify";

import { HiChevronDown } from "react-icons/hi";
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
            <HiChevronDown style={{ marginLeft: "6px" }} />
          </Link>
        </motion.div>

        <div className="wave">
          <Wave
            fill="#0d1d27"
            paused={false}
            options={{
              height: 50,
              amplitude: 50,
              speed: 0.1,
              points: 4,
            }}
          />
        </div>
      </section>
    );
  }
}
