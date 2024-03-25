import React from "react";

import { Link as ScrollLink } from "react-scroll";
import profileImg from "../images/PortfolioImg.jpeg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <section className="profile">
          <div className="imgCover">
            <img src={profileImg} alt="My Profile" className="profileImg" />
          </div>

          <div className="profile-info">
            <h1 className="profileName">Sanjay Chauhan</h1>
            <h2 className="profileTitle">MERN Stack Developer</h2>
            <p className="profileDesc">
              I'm a passionate web developer with expertise in creating
              responsive and user-friendly web applications. My goal is to craft
              elegant solutions to complex problems. As a MERN Stack Developer,
              I specialize in building full-stack applications using MongoDB,
              Express.js, React.js, and Node.js.
            </p>
            <p className="collegeInfo">
              Graduated from Uttarakhand Technical University, 2019-2023
            </p>
          </div>
        </section>

        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <ScrollLink
                to="about-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="navLink"
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="project-section"
                spy={true}
                smooth={true}
                duration={500}
                className="navLink"
              >
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact-section"
                spy={true}
                smooth={true}
                duration={500}
                className="navLink"
              >
                Contact Me
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
