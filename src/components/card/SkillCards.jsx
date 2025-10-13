import React from "react";
import style from "../css/SkillCard.module.css";
const SkillCards = ({ htmlLogo, cssLogo, jsLogo, reactLogo }) => {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <img src={htmlLogo} alt="" />
      </div>
      <div className={style.card}>
        <img src={cssLogo} alt="" />
      </div>
      <div className={style.card}>
        <img src={jsLogo} alt="" />
      </div>
      <div className={style.card}>
        <img src={reactLogo} alt="" />
      </div>
    </div>
  );
};

export default SkillCards;
