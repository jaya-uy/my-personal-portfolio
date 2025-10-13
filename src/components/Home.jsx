import React from "react";
import style from "./css/Home.module.css";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <div className={style.main}>
        <p>
          Hi i'm <span> Jaya Isabel, </span>
          loves to build digital dreams
        </p>
      </div>
    </div>
  );
};

export default Home;
