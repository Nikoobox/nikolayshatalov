import React from "react";
import { motion } from "framer-motion";
import { useInView, InView } from "react-intersection-observer";

import Skill from "./Skill";
import "./skills.scss";
import { SKILLS_DATA } from "../data/SkillsData";
import d3Icon from "./d3Icon.png";

const MAIN = "main";
const ADDITIONAL = "additional";

const renderSkills = ({ type }) => {
  return SKILLS_DATA.filter((item) => item.type === type).map((skill, idx) => {
    const TechIcon = skill.iconType;
    return (
      <Skill key={idx} id={idx}>
        <TechIcon className="skill-icon" />
        <div className="skill-name">{skill.name}</div>
      </Skill>
    );
  });
};

const Skills = () => {
  const { ref, inView } = useInView({
    // visible percentage before trigering
    threshold: 0.5,
  });

  return (
    <div className="skills-container" id="skills-destination">
      <div className="skills-title">Skills</div>
      <div className="skills-box">{renderSkills({ type: MAIN })}</div>

      <div className="skills-title">Additional Skills</div>
      <div className="skills-box">
        {renderSkills({ type: ADDITIONAL })}
        <InView triggerOnce>
          <motion.div
            ref={ref}
            className="box"
            initial={{ y: 30, opacity: 0 }}
            animate={inView && { y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img src={d3Icon} alt="" className="d3Icon" />
            <div className="skill-name">D3.js</div>
          </motion.div>
        </InView>
      </div>
    </div>
  );
};

export default Skills;
