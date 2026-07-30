import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useMeta } from '../utils/useMeta';
import '../Dashboard/Dashboard.css';
import Header from '../Dashboard/Header';
import Footer from '../Dashboard/Footer';
import cfo1Image from '../assets/assets/cfo1.jpg';

const Contact = () => {
  const { meta } = useMeta(4);

  useEffect(() => {
    const scriptSrc = 'https://link.finreach.com.au/js/form_embed.js';
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      {meta && (
        <Helmet>
          {meta.meta_title && <title>{meta.meta_title}</title>}
          {meta.meta_description && (
            <meta name="description" content={meta.meta_description} />
          )}
          {meta.meta_keywords && (
            <meta name="keywords" content={meta.meta_keywords} />
          )}

          {/* Open Graph */}
          {meta.og_title && <meta property="og:title" content={meta.og_title} />}
          {meta.og_description && (
            <meta property="og:description" content={meta.og_description} />
          )}
          {meta.og_image && <meta property="og:image" content={meta.og_image} />}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={window.location.href} />
        </Helmet>
      )}

      <Header />

      <section
        className="contact-hero-section"
        style={{ backgroundImage: `url(${cfo1Image})` }}
      >
        <div className="contact-hero-overlay"></div>

        <div className="container contact-hero-content">
          <div className="contact-hero-card">
            <h1 className="contact-hero-title">
              Let's Talk About What Your Organisation Actually Needs.
            </h1>

            <p className="contact-hero-subtitle">
              No forms into a void, no call centre. You'll hear from Don directly.
            </p>

            <Link className="btn contact-hero-btn" to="/book-consultation">
              Book A No-Obligation Consultation
            </Link>
          </div>
        </div>
      </section>

      <section id="contact-embed-section" className="contact-info-form-section">
        <div className="contact-info-form-container">
          {/* Left column */}
          <div className="contact-info-col">
            <h2 className="contact-info-heading">What happens when you get in touch</h2>
            <p className="contact-info-body">
              Fill in the form below and Don will personally call you, usually within a couple of hours, always within one business day. No account managers, no hand-offs. You'll be speaking with the person who actually leads your engagement from day one.
            </p>

            <p className="contact-info-direct-label">Prefer to call or email directly? That's fine too.</p>

            <p className="contact-info-detail">PH: (02) 6105 9300</p>
            <p className="contact-info-detail">E: info@finreach.com.au</p>
            <p className="contact-info-detail">A: Level 1, 11-17 Swanson Court, Belconnen ACT 2617 Australia</p>

            <div className="contact-map-wrapper">
              <iframe
                src="https://maps.google.com/maps?q=Level+1,+11-17+Swanson+Court,+Belconnen+ACT+2617+Australia&output=embed"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Finreach Location"
              ></iframe>
            </div>
          </div>

          {/* Right column – Contact form */}
          <div className="contact-form-col">
            <div className="contact-embed-wrapper">
              <iframe
                src="https://link.finreach.com.au/widget/form/hPxv7LyJok2C2nFTNeYB"
                style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px', minHeight: '1060px' }}
                id="inline-hPxv7LyJok2C2nFTNeYB"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="FinReach Contact Form - Brandscape"
                data-height="1060"
                data-layout-iframe-id="inline-hPxv7LyJok2C2nFTNeYB"
                data-form-id="hPxv7LyJok2C2nFTNeYB"
                title="FinReach Contact Form - Brandscape"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="contact-cta-banner">
        <p className="contact-cta-text">The sooner we talk, the sooner you'll have peace of mind.</p>
        <Link className="contact-cta-btn" to="/book-consultation"><strong>Book A Consultation</strong></Link>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
