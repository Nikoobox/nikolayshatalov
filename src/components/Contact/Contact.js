import React, { Component } from "react";
import "./contact.scss";
import profilePic from "./profile.jpg";
import { bioData } from "../data/bioData";
import resume from "./Nikolay_Shatalov_Resume_Frontend.pdf";

export default class Contact extends Component {
  render() {
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
              <div className="img-box anim" data-delay="0.2s">
                <img src={profilePic} alt="profile" />
              </div>

              <div className="info anim" data-delay="0.4s">
                <div className="info-text">{bioData.contactSection}</div>

                <a
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="anim"
                  data-delay="0.8s"
                >
                  Download My Resume
                </a>
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
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  }
}
