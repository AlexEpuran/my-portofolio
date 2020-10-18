/** @format */

import React from "react";
import CookieConsent from "react-cookie-consent";
import "./Cookies.css";
function Cookies() {
  return (
    <CookieConsent
      className="cookie-consent"
      location="bottom"
      buttonText="Accept"
      cookieName="cookies_accepted"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      expires={150}
    >
      This website uses cookies to enhance the user experience.{" "}
    </CookieConsent>
  );
}
export default Cookies;
