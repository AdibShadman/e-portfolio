import React from 'react';
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container">
  <a className="navbar-brand" href="#">Adib Shadman Ornob</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Certifications</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Resume</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
      
    </ul>
    </div> 
  </div>
</nav>
    </div>
  )
}

export default Navbar
