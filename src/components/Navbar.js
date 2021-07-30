import React from 'react';
import "./Navbar.css";
import {Link} from "react-scroll";

function Navbar() {
  return (
    <div>
      <nav id = "navbar" className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div className="container">
  <a className="navbar-brand" href="#">Adib Shadman Ornob</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <Link smooth = {true} to ="header" className="nav-link" href="#">Home</Link>
      </li>
      <li className="nav-item active">
        <Link smooth = {true} to ="aboutMe" offset = {-110} className="nav-link" href="#">About Me</Link>
      </li>
      <li className="nav-item">
        <Link smooth = {true} to ="certifications"offset = {-110}className="nav-link" href="#">Certifications</Link>
      </li>
      <li className="nav-item">
        <Link smooth = {true} to ="projects" offset= {-110} className="nav-link" href="#">Projects</Link>
      </li>
      <li className="nav-item">
        <Link smooth = {true} to ="resume"offset = {-110} className="nav-link" href="#">Resume</Link>
      </li>
      <li className="nav-item">
        <Link smooth = {true} to ="contacts" offset={-110} className="nav-link" href="#">Contact</Link>
      </li>
      
    </ul>
    </div> 
  </div>
</nav>
    </div>
  )
}

export default Navbar
