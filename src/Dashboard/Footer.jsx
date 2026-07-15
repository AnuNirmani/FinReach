import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import logo from '../assets/assets/finreash-footer.png';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-shell">
        <div className="footer-logo-row">
          <img src={logo} alt="FinReach" className="footer-main-logo" />
        </div>

        <div className="row gy-4 footer-columns-row">
          <div className="col-lg-3 col-md-6">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-links-list">
              <li><a href="mailto:info@finreach.com.au" className="footer-link">info@finreach.com.au</a></li>
              <li><a href="tel:+61261059300" className="footer-link">(02) 6105 9300</a></li>
            </ul>

            <div className="footer-socials" aria-label="Social media links">
              <a href="#" className="footer-social-link" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="footer-social-link" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="footer-social-link" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links-list">
              <li><Link to="/auditing" className="footer-link">Auditing</Link></li>
              <li><Link to="/assurance" className="footer-link">Assurance</Link></li>
              <li><Link to="/bookkeeping-accounting" className="footer-link">Bookkeeping & Accounting</Link></li>
              <li><Link to="/fractional-cfo" className="footer-link">Fractional CFO</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h4 className="footer-heading">Who We Work With</h4>
            <ul className="footer-links-list">
              <li><Link to="/assurance" className="footer-link">Not-for-profits</Link></li>
              <li><Link to="/fractional-cfo" className="footer-link">Growth-stage SMEs</Link></li>
              <li><Link to="/contact" className="footer-link">Partner With Us</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links-list">
              <li><a href="#" className="footer-link">NFP Finance Health Check</a></li>
              <li><a href="#" className="footer-link">ACNC Audit Checklist</a></li>
              <li><a href="#" className="footer-link">Fractional CFO Guide</a></li>
              <li><Link to="/blog" className="footer-link">Insights</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          Copyright© 2026 Company Name. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
