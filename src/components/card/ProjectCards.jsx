import React from "react";
import style from "../css/ProjectCard.module.css";
const ProjectCards = ({ mobile, table }) => {
  return (
    <div>
      <div className={style.card}>
        <div>
          <img className={style.img1} src={table} alt="" />
          <img className={style.img2} src={mobile} alt="" />
        </div>
        <h2 className={style.projectTitle}>
          Title : <span>"Jaya Portfolio web"</span>
        </h2>

        <p className={style.discription}>
          Discription :{" "}
          <div className={style.text}>
            Portfolio web created using React, Css, Html, javaScript. Showcasing
            my skills and basic information about me.
          </div>
        </p>
      </div>
    </div>
  );
};

export default ProjectCards;
