import React, { useEffect } from 'react';
import './Dashboard.css';

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
    <section
      className="hero-section"
      style={{
        backgroundImage:
          "url('https://finreach.ultimatemarketing.com.au/assets/hero-home-DxzjKHhr.jpg')",
      }}
    >
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <div className="row align-items-center text-start">
          {/* LEFT SIDE TEXT */}
          <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
            <h1 className="hero-title">
              Financial confidence for businesses, not-for-profits and health
              organisations
            </h1>

            <p className="hero-subtitle text-white opacity-75">
              FinReach takes the stress out of bookkeeping, assurance, audits
              and financial leadership, so you can focus on growing your impact
              with clarity and control.
            </p>

            <div className="mb-3">
              <a href="#booking-form" className="btn btn-hero-primary">
                Book a 30-minute, obligation-free consultation
              </a>
            </div>

            <p className="hero-small-text text-white opacity-75">
              In just 30 minutes, we'll review where you're at today and outline
              practical next steps – no pressure, no jargon.
            </p>
          </div>

          {/* RIGHT SIDE FORM CARD WITH IFRAME */}
          <div className="col-lg-6 col-md-12">
            <div
              className="form-card-accurate text-start"
              id="booking-form"
            >
              <iframe
                src="https://link.finreach.com.au/widget/form/PvN5tiD5wIDmJRPeox5Q"
                style={{
                  width: '100%',
                  height: '600px', // adjust if needed
                  border: 'none',
                  borderRadius: '3px',
                }}
                id="inline-PvN5tiD5wIDmJRPeox5Q"
                data-layout='{"id":"INLINE"}'
                data-trigger-type="alwaysShow"
                data-activation-type="alwaysActivated"
                data-deactivation-type="neverDeactivate"
                data-form-name="Website Final  NOV 25"
                data-form-id="PvN5tiD5wIDmJRPeox5Q"
                title="Website Final  NOV 25"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithForm;
