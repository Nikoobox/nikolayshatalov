import React, { Component } from "react";
import "./navbar.scss";
import { Link, animateScroll as scroll } from "react-scroll";
// import { Link as RouterLink } from "react-router-dom";
import classnames from "classnames";
import { motion } from "framer-motion";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
      darkBackground: true,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;
    const currentScrollPos = window.pageYOffset;
    const winHeight = window.innerHeight;
    const visible = prevScrollpos > currentScrollPos;
    const bottomDarkSection = document.querySelector(".contact-section");

    if (currentScrollPos > 300) {
      this.setState({
        prevScrollpos: currentScrollPos,
        visible,
        sidebarShow: false,
      });
    }
    //changing links color when enter top dark background
    if (
      winHeight < currentScrollPos &&
      this.state.darkBackground &&
      currentScrollPos - 80 < bottomDarkSection.offsetTop
    ) {
      // scrolling down
      this.setState({
        darkBackground: false,
      });
    } else if (winHeight > currentScrollPos && !this.state.darkBackground) {
      // scrolling up
      this.setState({
        darkBackground: true,
      });
    }
    // changing links color to white when enter bottom dark background
    if (
      currentScrollPos + 80 > bottomDarkSection?.offsetTop &&
      !this.state.darkBackground
    ) {
      // console.log('down down', this.state.darkBackground)
      this.setState({
        darkBackground: true,
      });
    }
  };

  render() {
    return (
      <motion.div
        className={classnames("nav-bar", {
          "nav-bar--hidden": !this.state.visible,
        })}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
      >
        <a
          href="/"
          className="name"
          aria-label="homepage"
          duration={5000}
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <div className="logo-box">
            <img src="./img/logo.png" alt="my-logo" />
          </div>
        </a>

        <ul className="nav-links">
          <li>
            <Link
              href="/"
              className={`nav-link ${
                this.state.darkBackground ? "" : "on-scroll-a"
              }`}
              to="skills-destination"
              smooth={true}
              duration={1200}
            >
              Skills
            </Link>
          </li>

          <li>
            <Link
              href="/"
              className={`nav-link ${
                this.state.darkBackground ? "" : "on-scroll-a"
              }`}
              to="projects-destination"
              smooth={true}
              duration={1200}
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              href="/"
              className={`nav-link ${
                this.state.darkBackground ? "" : "on-scroll-a"
              }`}
              to="contact-destination"
              smooth={true}
              duration={1200}
            >
              Contact
            </Link>
          </li>
          {/* <li>
            <RouterLink
              to="/test"
              className={`nav-link ${
                this.state.darkBackground ? "" : "on-scroll-a"
              }`}
            >
              Test
            </RouterLink>
          </li> */}
        </ul>
      </motion.div>
    );
  }
}
