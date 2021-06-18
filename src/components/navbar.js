import React from 'react'
import logo from "../logo.png"
//react font awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

  <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="Alok" /> <span className="tagline" >an aspiring software engineer. . .</span> </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <FontAwesomeIcon icon={faBars} style={{color:"#fff"}} />
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Achievments</a>
      </li>
    </ul> 
  </div>
  </div>
</nav>
    )
}

export default navbar
