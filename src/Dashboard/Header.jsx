import React from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'
import logo from '../assets/sitelogo.webp'


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm">
      <div className="container">
        
        <Link className="navbar-brand" to="/">
  <img 
    src={logo} 
    alt="FinReach Logo" 
    style={{ height: "50px", width: "auto" }}
  />
</Link>


              <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
              <span className="navbar-toggler-icon"></span>
            </button>


        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Financial Planning</a></li>
                <li><a className="dropdown-item" href="#">Accounting</a></li>
                <li><a className="dropdown-item" href="#">Assurance</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="d-flex">
            <a href="#booking-form" className="btn btn-finreach-cta">Book a Consultation</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header

