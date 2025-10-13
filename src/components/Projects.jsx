import React from "react";
import style from "./css/Projects.module.css";
import ProjectCards from "./card/ProjectCards";
import mobile from "../images/projects/mobile.png";
import table from "../images/projects/table.png";
const Projects = () => {
  return (
    <div className={style.main} id="projects">
      <h2 className={style.header}>Projects</h2>
      <ProjectCards mobile={mobile} table={table} />
    </div>
  );
};

export default Projects;
