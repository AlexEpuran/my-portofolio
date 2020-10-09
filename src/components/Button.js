

import React from "react";
import "./Button.css";



function Button({ id }) {
  return (
    <div>
      <button className="btn1" id={id}>
        CONTACT ME
      </button>
      <button className="btn2" id={id}>
        CONTACT ME
      </button>
      <button className="btn3" id={id}>
        CONTACT ME
      </button>
    </div>
  );
}
export default Button;