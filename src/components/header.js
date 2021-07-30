import React from 'react';
import "./header.css";
import Typed from "react-typed";
import Particles from "react-particles-js";

function header() {
  return (
    <div id = "header" className = "header-wraper">
        <div className ="emptySpace"></div>
        <div className="main-info">
            <h1>My goal is to build responsive, mobile fast, cross browser compatible web applications that clearly communicates with visitors</h1>
           
        </div>
        <div className ="emptySpace2"></div>
        <Typed
            className = "typed-text"
            strings = {["PHP","Vanilla Javascript","React","AWS"]}
            typeSpeed = {50}
            backSpeed = {60}
            loop
            />
    </div> 
  )
}

export default header
