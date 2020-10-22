/** @format */

import React, { useEffect } from "react";
import "./AboutSection.css";
import Typical from "react-typical";
import Aos from "aos";
import "aos/dist/aos.css";
export default function AboutSection({ id }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="about-section-main" id={id}>
      <div className="about-text-container">
        <h1 data-aos="fade-up" className="about-main-text">
          About <span className="about-span">Me</span>
        </h1>
      </div>
      <div className="picture-second-text-container">
        <div className="picture-container">
          <img
            data-aos="fade-right"
            className="about-me-img"
            src="/images/aboutme-main-pic.jpg"
            alt="about me"
          ></img>
          <div class="overlay7">{}</div>
          <div className="short-desc">
            {}
            <img
              data-aos="fade-right"
              className={"about-me-img"}
              src={"/images/aboutme-hover-pic.jpg"}
              alt={"about me"}
            />
          </div>
        </div>
        <div className="second-text-container">
          {}
          <h1 data-aos="fade-left" className="about-me-text1">
            I'm Alex and {""}
            <Typical
              className="auto-type"
              steps={[
                "I'm a Dog Lover",
                1500,
                "I love Gaming",
                1000,
                "I love Coding",
                1500,
                "I like Building Computers",
                1000,
              ]}
              loop={Infinity}
              wrapper="b"
            />
          </h1>
          <p data-aos="zoom-in" className="about-me-paragraph">
            Courteous , hardworking , enthusiastic and great sense of humour. I
            am interested in IT and everything in its orbit. I recently began to
            be fascinated by web programming, e.g. developing apps and building
            websites.I like to code and develop my skills every day I also enjoy
            working both individually or as a team especially as a team because
            you know in a team you can achieve great things develop you as a
            person and learn something new every day. I also like to help people
            when they need without expecting something in return because that's
            who i am. My goal is to become a full time Front-End Web-Developer
            because i like to see immediate results of my work.
          </p>
          <div className="btn-container">
            <form method="get" action="/files/AlexEpuranCV.pdf" target="_blank">
              <button data-aos="fade-left" className="btn2 btn2-about-me">
                Download Resume
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
