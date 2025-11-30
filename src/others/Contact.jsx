import React from 'react';
import '../Dashboard/Dashboard.css';
import Header from '../Dashboard/Header';
import Footer from '../Dashboard/Footer';

const Contact = () => {
  return (
    <>
      <Header />
      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-border-wrapper">
            <h1 className="contact-page-title">
              Book your 30-minute, obligation-free consultation
            </h1>
            <p className="contact-page-subtitle">
              Tell us a little about your organisation and what you're looking for. 
              We'll be in touch to confirm a time and let you know what to have handy for the call.
            </p>

            <div className="contact-white-card">
              <form>
                <div className="row">
                  {/* Full Name */}
                  <div className="col-md-6">
                    <label htmlFor="cName" className="contact-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="contact-input"
                      id="cName"
                      placeholder="First Name"
                    />
                  </div>

                  {/* Phone */}
                  <div className="col-md-6">
                    <label htmlFor="cPhone" className="contact-label">
                      Phone *
                    </label>
                    <input
                      type="text"
                      className="contact-input"
                      id="cPhone"
                      placeholder="Phone"
                    />
                  </div>

                  {/* Email */}
                  <div className="col-md-6">
                    <label htmlFor="cEmail" className="contact-label">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="contact-input"
                      id="cEmail"
                      placeholder="Email"
                    />
                  </div>

                  {/* Services */}
                  <div className="col-md-6">
                    <label htmlFor="cService" className="contact-label">
                      Services *
                    </label>
                    <select className="contact-select" id="cService">
                      <option value="" disabled selected></option>
                      <option value="bookkeeping">Bookkeeping</option>
                      <option value="assurance">Assurance</option>
                      <option value="cfo">Fractional CFO</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="col-12">
                    <label htmlFor="cMessage" className="contact-label">
                      Your Message *
                    </label>
                    <textarea
                      className="contact-textarea"
                      id="cMessage"
                      rows="5"
                    ></textarea>
                    <p className="form-text-muted">Message</p>
                  </div>

                  {/* Submit Button */}
                  <div className="col-12 text-center">
                    <button type="submit" className="btn-contact-submit">
                      Contact us now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact Section */}
      <section className="direct-contact-section">
        <div className="container">
          <h2 className="direct-contact-title">Prefer to reach out directly?</h2>

          <div className="row g-4 justify-content-center">
            {/* Email Card */}
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-card">
                <i className="bi bi-envelope contact-card-icon"></i>
                <h3 className="contact-card-title">Email</h3>
                <a href="mailto:info@finreach.com.au" className="contact-card-link">
                  info@finreach.com.au
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-card">
                <i className="bi bi-telephone contact-card-icon"></i>
                <h3 className="contact-card-title">Phone</h3>
                <a href="tel:0261059300" className="contact-card-link">
                  (02) 6105 9300
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-card">
                <i className="bi bi-geo-alt contact-card-icon"></i>
                <h3 className="contact-card-title">Address</h3>
                <p className="contact-card-text">
                  Level 1, 11-17 Swanson Court,<br />
                  Belconnen ACT 2617 Australia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
