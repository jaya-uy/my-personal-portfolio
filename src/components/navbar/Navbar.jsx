import React from "react";
import "../css/Navbar.css";

const Navbar = () => {
  const myFunction = () => {
    var x = document.getElementById("mobileNav");
    if (x.className === "mobileNav") {
      x.className += " responsive";
    } else {
      x.className = "mobileNav";
    }
  };
  const hideLinks = () => {
    var x = document.getElementById("mobileNav");
    if (x.className === "mobileNav") {
      x.className += " responsive";
    } else {
      x.className = "mobileNav";
    }
  };
  return (
    <header>
      <nav>
        <h1 className="logo">Jaya</h1>
        <ul>
          <li>
            <a className="home" href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#aboutMe">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
          <li>
            <a href="javaScript:void(0);" className="menu" onClick={myFunction}>
              <i class="fa fa-bars"></i>
            </a>
          </li>
        </ul>
      </nav>
      {/* mobileNav */}
      <div class="mobileNav" id="mobileNav">
        <a className="home" onClickCapture={hideLinks} href="#home">
          Home
        </a>
        <a onClickCapture={hideLinks} href="#aboutMe">
          About Me
        </a>
        <a onClickCapture={hideLinks} href="#skills">
          Skills
        </a>
        <a onClickCapture={hideLinks} href="#projects">
          Projects
        </a>
        <a onClickCapture={hideLinks} href="#contacts">
          Contacts
        </a>
      </div>
    </header>
  );
};

export default Navbar;
