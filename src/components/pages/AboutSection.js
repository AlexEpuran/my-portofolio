import React, {useEffect} from "react";
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
       
          <img data-aos="fade-up" className='about-me-img' src="/images/about-me.jpg"></img>
          <div class="overlay2">
            {/* <div class="text">Hello World</div> */}
          </div>
          <div className="short-desc">
            <p className="language">HTML</p>
            <p className="language">CSS</p>
            <p className="language">JS</p>
            <p className="language">REACT</p>
          
        </div>
        </div>
        <div  className="second-text-container">
          {/* <h1 className='about-me-text1'>I'm Alex and love</h1> */}
          <h1 data-aos="fade-up" className="about-me-text1">
            I'm Alex and  {""}
            <Typical
              className="auto-type"
              steps={["i'm a Dog Lover", 1500, "I love Gaming", 1000, "I love Coding", 1500]}
              loop={Infinity}
              wrapper="b"
            />
          </h1>
          <p data-aos="fade-up" className='about-me-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consectetur quibusdam illo tempora molestiae obcaecati eum illum, doloribus quidem, aspernatur ex minima. Fugiat eaque laboriosam facilis corporis aut at ullam temporibus voluptas cupiditate quaerat nisi doloremque voluptates omnis, nam expedita consequatur similique ea et sed voluptatum consequuntur? Ut ipsam maxime saepe sit corrupti minus a commodi, debitis expedita officiis! Dolor saepe maxime accusamus quidem soluta placeat aut tempore, commodi ipsam praesentium repudiandae suscipit assumenda quos est quibusdam. Quibusdam neque similique quod molestias quae ipsa veniam! Assumenda a hic facere, perferendis, consequatur veritatis sequi necessitatibus error rerum recusandae officia voluptate aut!</p>
         <div className="btn-container">
          <form method="get" action="/files/Resume.docx">
            <button data-aos="fade-up" className="btn2 btn2-about-me">Download Resume</button>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}
