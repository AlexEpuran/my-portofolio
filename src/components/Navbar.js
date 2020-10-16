/** @format */

import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 860) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);
  const changeBackground = () => {
    window.scrollY >= 30 ? setNavbar(true) : setNavbar(false);
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="navbar-container">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-190}
            duration={500}
            className="navbar-logo"
            activeClass="active"
            onClick={closeMobileMenu}
          >
            {}
            <img
              className="logo-menu-image active"
              src="images/LOGO1.png"
              alt="main-logo"
            ></img>
            {}
            {}
            {}
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul
            className={click ? "nav-menu active nav-menu-mobile" : "nav-menu"}
          >
            <li className="nav-item active">
              <Link
                to="home"
                className="nav-links"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-190}
                duration={700}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                className="nav-links"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={700}
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="skills"
                className="nav-links"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
                onClick={closeMobileMenu}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="work"
                className="nav-links"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-190}
                duration={700}
                onClick={closeMobileMenu}
              >
                Work
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                className="nav-links"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            {}
          </ul>
          {}
        </div>
      </nav>
    </>
  );
}
export default Navbar;
