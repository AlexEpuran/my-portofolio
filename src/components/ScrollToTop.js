import React, { Fragment, useState, useEffect } from "react";
import './ScrollToTop.css'

const ScrollToTop = () => {
  const [isVisible, setVisiblity] = useState(false);

  const handleScroll = () => {
    setVisiblity(window.scrollY > 1000);
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  useEffect(
    () => {
      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    },
    [isVisible]
  );

  return (
    <Fragment>
      {isVisible && (
        <button className="scroll-to-top" onClick={handleClick}>
          <i
            className="scroll-to-top__icon fa fa-angle-up"
            aria-hidden="true"
          />
        </button>
      )}
    </Fragment>
  );
};

export default ScrollToTop;
