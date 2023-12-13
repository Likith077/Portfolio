import "./HeroImgStyles.css";
import React from 'react'
import IntroImg from"../assets/intro.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return <div className="hero">
<div className="mask">
    <img className="intro-img" src={IntroImg} alt="intro-img"/>
    </div>  
    <div className="content">
        <p>HI, I'M LIKITH NIRVAN</p>
        <h1>WEB DEVELOPER</h1>
        <div>
            <Link to="/about" className="btn">About</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
    </div>
  </div>;

};


export default HeroImg