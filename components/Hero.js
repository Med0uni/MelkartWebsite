import React from "react";
import './Hero.css';
import Collaborate from "../components/work-with-us";


function Hero() {
  return (
    <div className='hero-container'>
      
      <h1>Trading legacy carried by youth</h1>
      
      <button className="btn-h from-left"><a href="http://localhost:3000/contact"> {console.log("test link")}Start a project with us</a></button>
     
    </div>
  );
}

export default Hero;