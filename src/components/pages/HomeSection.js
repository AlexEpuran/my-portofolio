import React from "react";
import "./HomeSection.css";
import Typing from "react-typing-animation";
import Typical from "react-typical";
import Button from "../Button";
import { Link, animateScroll as scroll } from "react-scroll";
import ParticlesHomeSection from "../ParticlesHomeSection"


export default function HomeSection({ id }) {
  return (
    <div className="home-wrapper">
     <ParticlesHomeSection />
      <div className="home-section-main" id={id}>
        <div className="text-button-wrapper">
          <h2 className="home-text1">Hello, my name is</h2>
          <h2 className="home-text2">Alex Epuran</h2>
          <p className="home-text3">
            And i'm a {""}
            <Typical
              className="auto-type"
              steps={["Web Developer", 1500, "Designer", 1000, "Dreamer", 1500]}
              loop={Infinity}
              wrapper="b"
            />
          </p>
          <div className="home-contact-button">
             <Link
                to="contact"
                
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-80}
                duration={1000}
              >
                <button className="btn1 btn1-home">Email Me</button>
              </Link>
            
    </div>
          <div className="home-icons">
            <a href="https://www.facebook.com/epuran.alex/" target="_blank">
              <i className="fab fa-facebook fa-3x"></i>
            </a>
            <a href="https://github.com/AlexEpuran?tab=repositories" target="_blank">
              <i className="fab fa-github fa-3x"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/epuran-alexandru-lucian-3004981a0/"
              target="_blank"
            >
              <i className="fab fa-linkedin fa-3x"></i>
            </a>
            <a
              href="https://www.instagram.com/alexjskls/"
              target="_blank"
            >
              <i className="fab fa-instagram fa-3x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
