import React from "react";
import "./projects.scss";
import Project from "./Project";
import { ProjectsData } from "../data/ProjectsData";

const Projects = () => {
  return (
    <article>
      <div className="projects-title" id="projects-destination">
        Projects
      </div>

      <div className="projects">
        <div className="grid fadeIn">
          {ProjectsData.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default Projects;
