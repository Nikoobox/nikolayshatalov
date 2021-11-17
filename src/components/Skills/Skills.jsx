import React from "react";
import "./skills.scss";
import { SKILLS_DATA } from "../data/SkillsData";
import d3Icon from "./d3Icon.png";

class Skills extends React.Component {
  renderSkills = () => {
    return SKILLS_DATA.map((skill, idx) => {
      const TechIcon = skill.iconType;
      return (
        <div className="box" key={idx}>
          <TechIcon className="skill-icon" />
          <div className={skill.class}>{skill.name}</div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="skills-container" id="skills-destination">
        <div className="skills-title">Skills</div>
        <div className="skills-box anim" data-delay="0s">
          {this.renderSkills()}
          <div className="box">
            <img src={d3Icon} alt="" className="d3Icon" />
            <div className="skill-name">D3.js</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
