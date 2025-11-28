import React from 'react';
import './Dashboard.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-5 col-md-12">
            <div className="footer-brand-wrapper">
              <i className="bi bi-layers-half footer-brand-icon"></i>
              <span className="footer-brand-fin">Fin</span>
              <span className="footer-brand-reach">Reach</span>
            </div>
            
            <p className="footer-desc">
              Financial confidence for businesses, not-for-profits and health organisations.
            </p>

            <a href="#booking-form" className="btn-footer-cta">Book Your Consultation</a>
          </div>

          <div className="col-lg-3 col-md-6">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#" className="footer-link">Bookkeeping & Accounting</a></li>
              <li><a href="#" className="footer-link">Assurance</a></li>
              <li><a href="#" className="footer-link">Auditing</a></li>
              <li><a href="#" className="footer-link">Fractional CFO</a></li>
              <li><a href="#" className="footer-link">About</a></li>
              <li><a href="#" className="footer-link">Blog</a></li>
            </ul>
          </div>

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
                <span>Level 1, 11-17 Swanson Court,<br />Belconnen ACT 2617 Australia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; 2025 FinReach. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

