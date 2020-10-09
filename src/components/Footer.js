import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link, animateScroll as scroll } from "react-scroll";

function Footer() {
  return (
    <div className="footer-container" id="plm">
      <h1 className="footer-text">My Portofolio </h1>
      <p className="footer-para">&copy; Copyright 2020</p>
    </div>
  );
}

export default Footer;
