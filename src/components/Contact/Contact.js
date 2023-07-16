import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  HiDownload,
  HiOutlineDocumentDownload,
  HiOutlineDocumentText,
  HiOutlineExternalLink,
} from "react-icons/hi";
import Wave from "react-wavify";

import ContactForm from "./ContactForm";
import "./contact.scss";
import profilePic from "./profile.jpg";
import { bioData } from "../data/bioData";
import resume from "./Nikolay_Shatalov_july_2023.pdf";
import MyModal from "../Modal/Modal";
import PdfViewer from "../PdfViewer/PdfViewer";

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <section className="contact-section">
        <div className="wave-bottom">
          <Wave
            fill="#fff"
            paused={false}
            options={{
              height: 40,
              amplitude: 40,
              speed: 0.1,
              points: 3,
            }}
          />
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
                {/* on smaller screens pdf is downloaded on click */}
                <a
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Nikolay_Shatalov_frontend_developer_resume.pdf"
                >
                  My Resume
                  <HiDownload style={{ marginLeft: "6px" }} />
                </a>
                {/*  on larger screens modal opens */}
                <button
                  className="modal-button"
                  onClick={() => setIsOpen(true)}
                >
                  View My Resume
                  <HiOutlineDocumentText style={{ marginLeft: "6px" }} />
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        <ContactForm />
      </section>

      <MyModal
        open={isOpen}
        setOpen={setIsOpen}
        renderTitle={() => (
          <div>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              download="Nikolay_Shatalov_frontend_developer_resume.pdf"
            >
              Download
              <HiOutlineDocumentDownload style={{ marginLeft: "4px" }} />
            </a>

            <a
              className="resume-link-browser"
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              View in browser
              <HiOutlineExternalLink style={{ marginLeft: "4px" }} />
            </a>
          </div>
        )}
      >
        <PdfViewer />
      </MyModal>
    </>
  );
};

export default Contact;
