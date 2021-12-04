import React from "react";
import { motion } from "framer-motion";
import { useInView, InView } from "react-intersection-observer";
import { IoMdPhonePortrait, IoMdDesktop, IoMdLaptop } from "react-icons/io";

const Project = (props) => {
  const {
    name,
    img,
    tools,
    info,
    address,
    repo,
    responsive,
    showLink,
    showRepo,
  } = props.project;

  const { ref, inView, entry } = useInView({
    // visible percentage before trigering
    threshold: 0.2,
  });

  const isRepo = repo && (
    <a
      href={`${repo}`}
      rel="noopener noreferrer"
      target="_blank"
      className="repo_link"
    >
      <button>Repo</button>
    </a>
  );

  return (
    // <InView triggerOnce>
    <motion.div
      className="card_box"
      ref={ref}
      initial={{ y: 30, opacity: 0 }}
      animate={inView && { y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="card">
        <div className="img_box">
          <img className="img" src={img} alt="" />
          <div className="overlay"></div>
          <div className="content">
            <div className="links_box_large">
              <div className="links">
                {showLink && (
                  <a
                    href={`${address}`}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="live_link"
                  >
                    <button>Live Link</button>
                  </a>
                )}
                {showRepo && isRepo}
              </div>
            </div>
          </div>
        </div>
        <div className="card_content_box">
          <div className="card_content">
            <div className="card-header-box">
              <div className="card_header">{name}</div>
              <div className="devices-box">
                {responsive && (
                  <div className="dev">
                    <IoMdPhonePortrait />
                  </div>
                )}
                <div className="dev">
                  <IoMdLaptop />
                </div>
                <div className="dev">
                  <IoMdDesktop />
                </div>
              </div>
            </div>
            <div className="card_text">{info}</div>
            <div className="card_tools_box">
              {tools.map((tool) => (
                <div className="card_tools" key={tool.toString()}>
                  {tool}
                </div>
              ))}
            </div>
          </div>
          <div className="links_box">
            <div className="links">
              <a
                href={`${address}`}
                rel="noopener noreferrer"
                target="_blank"
                className="live_link"
              >
                {showLink && <button>Live Link</button>}
              </a>
              {showRepo && isRepo}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
    // </InView>
  );
};

export default Project;
