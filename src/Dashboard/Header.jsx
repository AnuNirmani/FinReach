import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'
import logo from '../assets/sitelogo.webp'

const Header = () => {
  const [isConsultOpen, setIsConsultOpen] = useState(false)

  // Load external embed script once (optional but safe)
 useEffect(() => {
  // load external script once
  if (!document.querySelector('script[data-finreach-form]')) {
    const script = document.createElement('script')
    script.src = 'https://link.finreach.com.au/js/form_embed.js'
    script.async = true
    script.setAttribute('data-finreach-form', 'true')
    document.body.appendChild(script)
  }

  // listen for global "open consult" event
  const handleOpen = () => setIsConsultOpen(true)
  window.addEventListener('open-consultation-modal', handleOpen)

  // cleanup
  return () => {
    window.removeEventListener('open-consultation-modal', handleOpen)
  }
}, [])


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt="FinReach Logo"
              style={{ height: '50px', width: 'auto' }}
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
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
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
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/bookkeeping-accounting"
                    >
                      Bookkeeping &amp; Accounting
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/assurance">
                      Assurance
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/auditing">
                      Auditing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/fractional-cfo">
                      Fractional CFO
                    </Link>
                  </li>
                </ul>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>

            <div className="d-flex">
              <button
                type="button"
                className="btn btn-finreach-cta"
                onClick={() => setIsConsultOpen(true)}
              >
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </nav>

           {/* Popup Modal */}
      {isConsultOpen && (
        <div
          className="fr-modal-backdrop"
          onClick={() => setIsConsultOpen(false)} // click outside to close
        >
          <div
            className="fr-modal"
            onClick={(e) => e.stopPropagation()} // don't close when clicking inside
          >
            <button
              type="button"
              className="fr-modal-close"
              onClick={() => setIsConsultOpen(false)}
            >
              ×
            </button>

            <div className="fr-modal-body">
              <iframe
                src="https://link.finreach.com.au/widget/form/PvN5tiD5wIDmJRPeox5Q"
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  borderRadius: '3px',
                }}
                id="inline-PvN5tiD5wIDmJRPeox5Q"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Website Final  NOV 25"
                data-height="undefined"
                data-layout-iframe-id="inline-PvN5tiD5wIDmJRPeox5Q"
                data-form-id="PvN5tiD5wIDmJRPeox5Q"
                title="Website Final  NOV 25"
              />
            </div>
          </div>
        </div>
      )}

    </>
  )
}

export default Header
