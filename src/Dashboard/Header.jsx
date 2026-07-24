import React from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'
import logo from '../assets/sitelogo.webp'

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-xl navbar-light fixed-top shadow-sm finreach-navbar">
        <div className="container finreach-navbar-inner">
          <Link className="navbar-brand" to="/" aria-label="FinReach Home">
            <img
              src={logo}
              alt="FinReach Logo"
              className="finreach-navbar-logo"
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
            <ul className="navbar-nav mx-auto mb-2 mb-xl-0 finreach-nav-list">
              <li className="nav-item dropdown">
                <div className="finreach-dropdown-split">
                  <Link className="nav-link finreach-dropdown-link" to="/our-services">
                    Our Services
                  </Link>
                  <button
                    className="nav-link dropdown-toggle finreach-dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    aria-label="Open Our Services submenu"
                  >
                    <span className="visually-hidden">Open Our Services submenu</span>
                  </button>
                </div>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/auditing">
                      Auditing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/assurance">
                      Assurance
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/bookkeeping-accounting"
                    >
                      Bookkeeping &amp; Accounting
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/fractional-cfo">
                      Fractional CFO
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Who We Work With
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/not-profit">
                      Not-for-Profit
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/growth-stage">
                      Growth-Stage SME
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/partner">
                      Partner With Us
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/team">
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/about">
                      How We Work
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Insights
                </Link>
              </li>
            </ul>

            <div className="d-flex align-items-center gap-3 finreach-navbar-actions">
              <Link to="/contact" className="btn btn-finreach-outline">
                Contact Us
              </Link>
              <Link to="/book-consultation" className="btn btn-finreach-cta">
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Header
