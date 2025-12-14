import React, { useEffect } from 'react';
import SEO from '../utils/SEO';
import '../Dashboard/Dashboard.css';
import Header from '../Dashboard/Header';
import Footer from '../Dashboard/Footer';

const Contact = () => {
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
      <SEO
        title="Contact FinReach | Book Your Free Consultation Today"
        description="Get in touch with FinReach for professional bookkeeping, accounting, audit, and CFO services. Book a 30-minute obligation-free consultation. Email: info@finreach.com.au | Phone: (02) 6105 9300 | Belconnen, ACT, Australia"
        keywords="Contact FinReach, Book Consultation, Accounting Services Australia, Bookkeeping Contact, CFO Services, Audit Consultation, Belconnen Accountant"
        canonical="/contact"
        breadcrumb={[
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' },
        ]}
        schema={{
          '@type': 'ContactPage',
          mainEntity: {
            '@type': 'Organization',
            name: 'FinReach',
            email: 'info@finreach.com.au',
            telephone: '+61-2-6105-9300',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Level 1, 11-17 Swanson Court',
              addressLocality: 'Belconnen',
              addressRegion: 'ACT',
              postalCode: '2617',
              addressCountry: 'AU',
            },
          },
        }}
      />

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
              We'll be in touch to confirm a time and let you know what to have for the call.
            </p>

            <div className="contact-white-card">
              <iframe
                src="https://link.finreach.com.au/widget/form/1j6lMFNrccoaSNpTKVEU"
                style={{
                  width: '100%',
                  height: '749px',
                  border: 'none',
                  borderRadius: '3px',
                  display: 'block',
                }}
                id="inline-1j6lMFNrccoaSNpTKVEU"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Contact Us Form"
                data-height="749"
                data-layout-iframe-id="inline-1j6lMFNrccoaSNpTKVEU"
                data-form-id="1j6lMFNrccoaSNpTKVEU"
                title="Contact Us Form"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact Section */}
      <section className="direct-contact-section">
        <div className="container">
          <h2 className="direct-contact-title">Prefer to reach out directly?</h2>

          <div className="row g-4 justify-content-center">
            {/* Email */}
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-card">
                <i className="bi bi-envelope contact-card-icon"></i>
                <h3 className="contact-card-title">Email</h3>

                <a
                  href="mailto:info@finreach.com.au"
                  className="contact-card-link contact-link-black"
                >
                  info@finreach.com.au
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-card">
                <i className="bi bi-telephone contact-card-icon"></i>
                <h3 className="contact-card-title">Phone</h3>

                <a
                  href="tel:+61261059300"
                  className="contact-card-link contact-link-black"
                >
                  (02) 6105 9300
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-card">
                <i className="bi bi-geo-alt contact-card-icon"></i>
                <h3 className="contact-card-title">Address</h3>
                <p className="contact-card-text">
                  Level 1, 11-17 Swanson Court,
                  <br />
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
