import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiDownload } from "react-icons/hi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import "./contact.scss";
import profilePic from "./profile.jpg";
import { bioData } from "../data/bioData";
import resume from "./Nikolay_Shatalov_Resume_Frontend.pdf";

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  return (
    <>
      <section className="contact-section">
        <div className="wave-bottom">
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
        <div className="contact-title" id="contact-destination">
          Contact
        </div>
        <div className="about-container">
          <div className="about-box ">
            <motion.div
              className="img-box"
              ref={ref}
              initial={{ opacity: 0 }}
              animate={inView && { opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <img src={profilePic} alt="profile" />
            </motion.div>
            <div className="info">
              <motion.div
                className="info-text"
                ref={ref}
                initial={{ y: 30, opacity: 0 }}
                animate={inView && { y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                {bioData.contactSection}
              </motion.div>
              <motion.div
                ref={ref}
                initial={{ y: 40, opacity: 0 }}
                animate={inView && { y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              >
                <a href={resume} target="_blank" rel="noopener noreferrer">
                  My Resume
                  <HiDownload className="icon" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form-box">
            <div className="lets-connect">Say Hi</div>
            <form
              className="contact-form"
              method="POST"
              action="https://formspree.io/nikoobox@gmail.com"
            >
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control first"
                  placeholder="Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email@email.com"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form">
                <textarea
                  name="message"
                  className="form-control last"
                  cols="30"
                  rows="7"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="form-group contact-button-box">
                <button className="contact-button" type="submit" value="Send">
                  Send <IoPaperPlaneOutline style={{ marginLeft: "6px" }} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
