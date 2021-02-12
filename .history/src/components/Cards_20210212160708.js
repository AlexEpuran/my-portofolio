/** @format */

import React, { useEffect } from "react";
import "./Cards.css";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Cards() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div data-aos="fade-right" className="card1">
        <div className="work-section-card1-container">
          <img className="card1-img" src="/images/home.png" alt="home"></img>

          <p className="card1-p2">SCIT Final Team Project</p>

          <div class="overlay"></div>
          <a
            href="https://venus.alexcoding.art/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn1 work-btn1"
          >
            {" "}
            See More{" "}
          </a>
          <a
            href="https://github.com/AlexEpuran/venus"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="github-icon"
              src="/images/github.png"
              alt="icon"
            ></img>
          </a>
        </div>
      </div>
      <div data-aos="zoom-in" className="card2">
        <div className="work-section-card1-container">
          <img
            className="card1-img"
            src="/images/watchlist.png"
            alt="moviesWatchlist"
          ></img>
          <p className="card1-p2">React Movie WAtchlist</p>
          <div class="overlay2"></div>
          <a
            href="https://mywatchlist.alexcoding.art/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn1 work-btn1"
          >
            {" "}
            See More{" "}
          </a>
          <a
            href="https://github.com/AlexEpuran/movie_watchlist"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="github-icon"
              src="/images/github.png"
              alt="icon"
            ></img>
          </a>
        </div>
      </div>
      <div data-aos="fade-left" className="card3">
        <div className="work-section-card1-container">
          <img
            className="card1-img"
            src="/images/emojiapp.png"
            alt="movie search"
          ></img>
          <p className="card1-p2">JavaScript Emoji App</p>
          <div class="overlay3"></div>
          <a
            href="https://emojiesapp.alexcoding.art/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn1 work-btn1"
          >
            {" "}
            See More{" "}
          </a>
          <a
            href="https://github.com/AlexEpuran/emojapps"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="github-icon"
              src="/images/github.png"
              alt="icon"
            ></img>
          </a>
        </div>
      </div>
      <div data-aos="fade-right" className="card4">
        <div className="work-section-card1-container">
          <img
            className="card1-img"
            src="/images/carousel.png"
            alt="details"
          ></img>
          <p className="card1-p2">JavaScript Carousel from scratch</p>
          <div class="overlay4"></div>
          <a
            href="https://venus.alexcoding.art/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn1 work-btn1"
          >
            {" "}
            See More{" "}
          </a>
          <a
            href="https://github.com/AlexEpuran/venus"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="github-icon"
              src="/images/github.png"
              alt="icon"
            ></img>
          </a>
        </div>
      </div>
      <div data-aos="zoom-in" className="card5">
        <div className="work-section-card1-container">
          <img
            className="card1-img"
            src="/images/login_register.png"
            alt="login"
          ></img>
          <p className="card1-p2">LOGIN PAGE</p>
          <div class="overlay5"></div>
          <a
            href="https://venus.alexcoding.art/join-us"
            target="_blank"
            rel="noopener noreferrer"
            className="btn1 work-btn1"
          >
            {" "}
            See More{" "}
          </a>
          <a
            href="https://github.com/AlexEpuran/venus"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="github-icon"
              src="/images/github.png"
              alt="icon"
            ></img>
          </a>
        </div>
      </div>
      <div data-aos="fade-left" className="card6">
        <div className="work-section-card1-container">
          <img
            className="card1-img"
            src="/images/addmovie.png"
            alt="addmovie"
          ></img>
          <p className="card1-p2">ADD MOVIE</p>
          <div class="overlay6"></div>
          <a
            href="https://venus.alexcoding.art/Addmovie"
            target="_blank"
            rel="noopener noreferrer"
            className="btn1 work-btn1"
          >
            {" "}
            See More{" "}
          </a>
          <a
            href="https://github.com/AlexEpuran/venus"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="github-icon"
              src="/images/github.png"
              alt="icon"
            ></img>
          </a>
        </div>
      </div>
    </>
  );
}
