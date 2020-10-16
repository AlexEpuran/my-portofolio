/** @format */

import React from "react";
import "./Footer.css";
import { Button } from "./Button";
function Footer() {
  return (
    <div className="footer-container" id="footer">
      <div className="footer-logo-text-container">
        <div className="footer-logo">
          <img
            className="footer-img"
            src="images/LOGO-footer.png"
            alt="footer-logo"
          ></img>
        </div>
        <p className="footer-para">&copy; Copyright 2020 Epuran Alexandru</p>
      </div>
    </div>
  );
}
export default Footer;
