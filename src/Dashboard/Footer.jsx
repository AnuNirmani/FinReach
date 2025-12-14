import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import logo from '../assets/assets/finreash-footer.png';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row gy-5">
          
          {/* LEFT SECTION */}
          <div className="col-lg-5 col-md-12">
            <div className="footer-brand-wrapper mb-3">
              <img 
                src={logo} 
                alt="FinReach Footer Logo"
                style={{ height: "55px", width: "auto" }}
              />
            </div>
            
            <p className="footer-desc">
              Financial confidence for Small & Medium Enterprises, not-for-profits and health organisations.
            </p>

            
            <button
  type="button"
  className="btn-footer-cta"
  onClick={() => window.dispatchEvent(new Event('open-consultation-modal'))}
>
  Book Your Consultation
</button>

          </div>

          {/* QUICK LINKS */}
          <div className="col-lg-3 col-md-6">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links-list">
              <li><Link to="/bookkeeping-accounting" className="footer-link">Bookkeeping & Accounting</Link></li>
              <li><Link to="/assurance" className="footer-link">Assurance</Link></li>
              <li><Link to="/auditing" className="footer-link">Auditing</Link></li>
              <li><Link to="/fractional-cfo" className="footer-link">Fractional CFO</Link></li>
              <li><Link to="/about" className="footer-link">About</Link></li>
              <li><Link to="/blog" className="footer-link">Blog</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="col-lg-4 col-md-6">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <i className="bi bi-envelope contact-icon"></i>
                <span>info@finreach.com.au</span>
              </li>
              <li className="footer-contact-item">
                <i className="bi bi-telephone contact-icon"></i>
                <span>(02) 6105 9300</span>
              </li>
              <li className="footer-contact-item">
                <i className="bi bi-geo-alt contact-icon"></i>
                <span>
                  Level 1, 11-17 Swanson Court,<br />
                  Belconnen ACT 2617 Australia
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">
          &copy; 2025 FinReach. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
