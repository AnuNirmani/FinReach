import React, { useEffect } from 'react';
import './Dashboard.css';
import heroHomeVideo from '../assets/assets/6a30d8cc1b95dbb2c217d302.mp4';

const HeroWithForm = () => {
  // load the external form script once
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.finreach.com.au/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="hero-section">
      <video
        className="hero-video-bg"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={heroHomeVideo} type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <div className="row justify-content-end align-items-center text-start hero-layout-row">
          <div className="col-xl-6 col-lg-7 col-md-10 col-12 mb-0 hero-copy-wrap">
            <h1 className="hero-title">
              Financial confidence for the organisations that matter.
            </h1>

            <p className="hero-subtitle">
              Accounting, assurance and financial leadership for medium-sized
              not-for-profits and growing businesses delivered with big four
              expertise, at a boutique price.
            </p>

            <div className="hero-cta-group">
              <button
                type="button"
                className="btn btn-hero-primary"
                onClick={() =>
                  window.dispatchEvent(new Event('open-consultation-modal'))
                }
              >
                Book a Consultation
              </button>

              <button
                type="button"
                className="btn btn-hero-secondary"
                onClick={() => window.location.assign('/contact')}
              >
                Enquire Now
              </button>
            </div>

            <ul className="hero-highlights">
              <li>
                <i className="bi bi-calendar3"></i>
                25+ years Australian audit experience
              </li>
              <li>
                <i className="bi bi-people-fill"></i>
                Big Four-trained team
              </li>
              <li>
                <i className="bi bi-check-circle-fill"></i>
                Nationally registered
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithForm;
