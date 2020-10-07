

import React from "react";
import "./Button.css";



function Button({ id }) {
  return (
    <div>
      <button className="btn1" id={id}>
        CONTACT ME
      </button>
    </div>
  );
}
export default Button;