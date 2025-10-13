import React from "react";
import style from "../components/css/AboutMe.module.css";
import profileImage from "../images/jayaProfile.jpg";
import { Outlet } from "react-router-dom";
const AboutUs = () => {
  return (
    <div className={style.main} id="aboutMe">
      <h2>About me</h2>
      <div className={style.container}>
        {/* need to search hoe to locate the scr of images */}

        <img className={style.profile} src={profileImage} alt="" />

        <article>
          <p>
            <span>Jaya Isabel R. Rocero </span>
            results-driven web developer with a proven track record of
            delivering projects and on budget. My expertise in javaScript
            ensures high quality solutions that meet clients need.
          </p>
        </article>
      </div>
      <Outlet />
    </div>
  );
};

export default AboutUs;
