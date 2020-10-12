import React from "react";
import "./SkillsSection.css";
import Typical from "react-typical";
import ParticlesSkillsSection from "../ParticlesSkillsSection"

export default function SkillsSection({ id }) {
  return (
    <div className="skills-section-main" id={id}>
      <ParticlesSkillsSection />
      <div className="skills-text-container">
        <h1 className='skills-main-text'><span className='skills-span'>My </span>Knowledge</h1>
      </div>
      <div className="skills-picture-icons-container">
        <div className="skills-icons-container">
          <ul id="MiniLeftNav">
            <li>
              <a className="navtext" href="#"><i className="fab fa-html5 fa-5x"></i>
                <span>Html</span></a>
            </li>
            <li>
              <a class="navtext" href="#"><i className="fab fa-css3 fa-5x"></i>
                <span>css</span>
              </a>
            </li>
          </ul>
          <ul id="MiniLeftNav2">
            <li>
              <a className="navtext" href="#"><i className="fab fa-js-square fa-5x"></i>
                <span>Javascript</span>
              </a>
            </li>
            <li>
              <a className="navtext" href="#"><i class="fab fa-react fa-5x"></i>
                <span>React</span>
              </a>
            </li>
          </ul>
          <ul id="MiniLeftNav3">
            <li>
              <a className="navtext" href="#"><i className="fab fa-github-square fa-5x"></i>
                <span>github</span>
              </a>
            </li>
            <li>
              <a className="navtext" href="#"><i class="fas fa-paint-brush fa-5x"></i>
                <span>photoshop</span>
              </a>
            </li>
          </ul>
          
        </div>
        
        
        <div className="skills-middle-text-container">
          <div className="skills-middle-text">
          <h1 className="skills-me-text1">
           HT<span>ML</span> {""}</h1>
          <h1 className="skills-me-text1">
              CS<span>S</span>  {""}</h1>
            <h1 className="skills-me-text1">
              JAVA<span>SCRIPT</span>  {""}</h1>
            <h1 className="skills-me-text1">
              RE<span>ACT</span>  {""}</h1>
            <h1 className="skills-me-text1">
              GIT<span>HUB</span>  {""}</h1>
            <h1 className="skills-me-text1">
              PHOTO<span>SHOP</span>  {""}</h1>
            </div>
          <div className="tipical-container">  
          <Typical
              className="auto-type-skills"
              steps={["Advanced", 1000, "Advanced Level", 500]}
              loop={Infinity}
              wrapper="b"
            />
          <Typical
              className="auto-type-skills"
              steps={["Advanced", 1000, "Advanced Level", 500]}
              loop={Infinity}
              wrapper="b"
            />
            <Typical
              className="auto-type-skills"
              steps={["Medium", 1000, "Medium Level", 500]}
              loop={Infinity}
              wrapper="b"
            />
            <Typical
              className="auto-type-skills"
              steps={["Medium", 1000, "Medium Level", 500]}
              loop={Infinity}
              wrapper="b"
            />
            <Typical
              className="auto-type-skills"
              steps={["Medium", 1000, "Medium Level", 500]}
              loop={Infinity}
              wrapper="b"
            />
            <Typical
              className="auto-type-skills"
              steps={["Medium", 1000, "Medium Level", 500]}
              loop={Infinity}
              wrapper="b"
            />
          </div>
      
        </div>
        
      </div>
    </div>
  );
}
