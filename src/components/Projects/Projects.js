import React, { Component } from "react";
import "./projects.scss";
import Project from "./Project";
import { ProjectsData } from "../data/ProjectsData";
import helperFunction from "./helper";

export default class Projects extends Component {
  state = {
    projects: ProjectsData,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { projects } = this.state;
    console.log("new data is: ", helperFunction());

    return (
      <article>
        <div className="projects-title" id="projects-destination">
          Projects
        </div>

        <div className="projects">
          <div className="grid fadeIn">
            {projects.map((project) => (
              <Project key={project.id} project={project} />
            ))}
          </div>
        </div>
      </article>
    );
  }
}
