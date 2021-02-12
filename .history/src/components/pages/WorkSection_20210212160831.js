/** @format */

import React, { useEffect } from "react";
import "./WorkSection.css";
import Cards from "../Cards";
import Aos from "aos";
import "aos/dist/aos.css";
export default function WorkSection({ id }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="work-section-main" id={id}>
      <div className="work-section-title-container">
        <h1 data-aos="fade-up" className="work-section-title">
          <span className="work-span">My </span>Work
        </h1>
      </div>
      <div className="work-section-subtitle-container">
        {/* <h1 data-aos="fade-up" className="work-section-subtitle">
          SCIT Final Team Project
        </h1> */}
      </div>
      <div className="work-section-cards-container">
        <Cards />
      </div>
    </div>
  );
}
