import React from "react";
import "./AboutSection.css";

export default function AboutSection({ id }) {
  return (
    <div className="about-section-main" id={id}>
      <div className="about-text-container">
        <h1 className="about-main-text">
          About <span className="about-span">Me</span>
        </h1>
      </div>
      <div className="picture-second-text-container">
        <div className="picture-container"></div>
        <div className="second-text-container">
          <h1>TEST</h1>
        </div>
      </div>
    </div>
  );
}
