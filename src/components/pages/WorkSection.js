import React from "react";
import './WorkSection.css';
import Cards from "../Cards"


export default function WorkSection({ id }) {
  return (
    
      <div className="work-section-main" id={id}>
      <div className="work-section-title-container">
      <h1 className="work-section-title"><span className="work-span">My </span>Work</h1>
      </div>
      <div className="work-section-cards-container">
        <Cards/>
       
      </div>
      </div>
      
   
  );
}
