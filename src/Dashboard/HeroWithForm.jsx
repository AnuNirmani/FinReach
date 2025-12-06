import React, { useEffect } from 'react';
import './Dashboard.css';
import heroHome from '../assets/assets/hero-home-DxzjKHhr.jpg'; // make sure extension matches the real file

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
        backgroundImage: `url(${heroHome})`, // ✅ use template literal
      }}
    >
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <div className="row align-items-center text-start">
          {/* LEFT SIDE TEXT */}
          <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
            <h1 className="hero-title">
              Financial confidence for small & medium enterprises, not-for-profits and health
              organisations
            </h1>

            <p className="hero-subtitle text-white opacity-75">
              FinReach takes the stress out of bookkeeping & accounting, assurance, audits
              and financial leadership, so you can focus on growing your impact
              with clarity and control.
            </p>

            <div className="mb-3">
              <button
                type="button"
                className="btn btn-hero-primary"
                onClick={() =>
                  window.dispatchEvent(new Event('open-consultation-modal'))
                }
              >
                Book a 30-minute, obligation-free consultation
              </button>
            </div>

            <p className="hero-small-text text-white opacity-75">
              In just 30 minutes, we'll review where you're at today and outline
              practical next steps – no pressure, no commitment.
            </p>
          </div>

          {/* RIGHT SIDE FORM CARD WITH IFRAME (currently removed) */}
        </div>
      </div>
    </section>
  );
};

export default HeroWithForm;
