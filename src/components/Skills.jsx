import React from "react";
import style from "./css/Skills.module.css";
import SkillCards from "./card/SkillCards";
import htmlLogo from "../images/skillLogos/html.png";
import cssLogo from "../images/skillLogos/css.png";
import jsLogo from "../images/skillLogos/js.png";
import reactLogo from "../images/skillLogos/react.js.png";

const Skills = () => {
  return (
    <div className={style.main} id="skills">
      <h2>Skills</h2>
      <SkillCards
        htmlLogo={htmlLogo}
        cssLogo={cssLogo}
        jsLogo={jsLogo}
        reactLogo={reactLogo}
      />
    </div>
  );
};

export default Skills;
