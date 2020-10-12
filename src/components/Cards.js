import React from "react";
import './Cards.css'

export default function Cards() {
  return (
    <>
      <div className="card1">
        <div className="work-section-card1-container">
      <img className='card1-img' src="/images/home.png"></img>
          <p className="card1-p2">Home Page</p>
          <div class="overlay"></div>
          <a href="https://hungry-wiles-820e03.netlify.app/" target= "_blank"className="btn1 work-btn1"> See More </a>
      </div>
      </div>
      <div className="card2">
        <div className="work-section-card1-container">
      <img className='card1-img' src="/images/allmovies.png"></img>
          <p className="card1-p2">ALL MOVIES</p>
          <div class="overlay2"></div>
           <a href="https://hungry-wiles-820e03.netlify.app/movies" target= "_blank"className="btn1 work-btn1"> See More </a>
      </div>
      </div>
      <div className="card3">
        <div className="work-section-card1-container">
      <img className='card1-img' src="/images/moviesearch.png"></img>
          <p className="card1-p2">MOVIE SEARCH</p>
          <div class="overlay3"></div>
           <a href="https://hungry-wiles-820e03.netlify.app/movie-search" target= "_blank"className="btn1 work-btn1"> See More </a>
      </div>
      </div>
       <div className="card4">
        <div className="work-section-card1-container">
      <img className='card1-img' src="/images/moviedetails.png"></img>
          <p className="card1-p2">MOVIE DETAILS</p>
          <div class="overlay4"></div>
            <a href="https://hungry-wiles-820e03.netlify.app/movie-details?id=5f84a38b49c4e40022fe052e" target= "_blank"className="btn1 work-btn1"> See More </a>
      </div>
      </div>
       <div className="card5">
        <div className="work-section-card1-container">
      <img className='card1-img' src="/images/login_register.png"></img>
          <p className="card1-p2">LOGIN PAGE</p>
          <div class="overlay5"></div>
            <a href="https://hungry-wiles-820e03.netlify.app/join-us" target= "_blank"className="btn1 work-btn1"> See More </a>
      </div>
      </div>
       <div className="card6">
        <div className="work-section-card1-container">
      <img className='card1-img' src="/images/addmovie.png"></img>
          <p className="card1-p2">ADD MOVIE</p>
          <div class="overlay6"></div>
            <a href="https://hungry-wiles-820e03.netlify.app/Addmovie" target= "_blank"className="btn1 work-btn1"> See More </a>
      </div>
      </div>
    </>
    
   
  );
}
