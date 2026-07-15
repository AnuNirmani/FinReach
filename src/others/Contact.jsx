import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useMeta } from '../utils/useMeta';
import '../Dashboard/Dashboard.css';
import Header from '../Dashboard/Header';
import Footer from '../Dashboard/Footer';
import cfo1Image from '../assets/assets/cfo1.jpg';

const Contact = () => {
  const { meta } = useMeta(4);

  const [form, setForm] = useState({
    firstName: '', lastName: '', phone: '', email: '', organisation: '',
    orgTypes: [], helpWith: [], message: '', hearAbout: '',
    consentSMS: false, consentMarketing: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const key = e.target.dataset.group;
      if (key) {
        setForm(prev => ({
          ...prev,
          [key]: checked
            ? [...prev[key], value]
            : prev[key].filter(v => v !== value),
        }));
      } else {
        setForm(prev => ({ ...prev, [name]: checked }));
      }
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch('https://link.finreach.com.au/api/form-submit/PvN5tiD5wIDmJRPeox5Q', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    } catch (_) {}
    setSubmitting(false);
    setSubmitted(true);
  };

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
            {submitted ? (
              <div className="cf-success">
                <p>Thank you! We'll be in touch shortly.</p>
              </div>
            ) : (
              <form className="cf" onSubmit={handleSubmit} noValidate>
                {/* Row 1 */}
                <div className="cf-row">
                  <div className="cf-field">
                    <label className="cf-label">First Name <span className="cf-req">*</span></label>
                    <input className="cf-input" type="text" name="firstName" placeholder="Enter your first name" value={form.firstName} onChange={handleChange} required />
                  </div>
                  <div className="cf-field">
                    <label className="cf-label">Last Name <span className="cf-req">*</span></label>
                    <input className="cf-input" type="text" name="lastName" placeholder="Enter your last name" value={form.lastName} onChange={handleChange} required />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="cf-row">
                  <div className="cf-field">
                    <label className="cf-label">Phone <span className="cf-req">*</span></label>
                    <input className="cf-input" type="tel" name="phone" placeholder="+61" value={form.phone} onChange={handleChange} required />
                  </div>
                  <div className="cf-field">
                    <label className="cf-label">Email <span className="cf-req">*</span></label>
                    <div className="cf-input-icon-wrap">
                      <svg className="cf-email-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" fill="none"><rect x="0.5" y="0.5" width="19" height="15" rx="1.5" stroke="#9CA3AF"/><path d="M1 1l9 7 9-7" stroke="#9CA3AF" strokeWidth="1.2"/></svg>
                      <input className="cf-input cf-input-with-icon" type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                    </div>
                  </div>
                </div>

                {/* Organisation */}
                <div className="cf-field cf-field-full">
                  <label className="cf-label">Organisation <span className="cf-req">*</span></label>
                  <input className="cf-input" type="text" name="organisation" placeholder="Enter your organisation" value={form.organisation} onChange={handleChange} required />
                </div>

                {/* Checkboxes row */}
                <div className="cf-row cf-checkbox-row">
                  <div className="cf-check-col">
                    <label className="cf-label">Select which type of organisation you are? <span className="cf-req">*</span></label>
                    {['Not-for-profits / charities', 'Growth-stage SMEs', 'Both', 'Other'].map(opt => (
                      <label key={opt} className="cf-check-label">
                        <input type="checkbox" data-group="orgTypes" value={opt} checked={form.orgTypes.includes(opt)} onChange={handleChange} />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                  <div className="cf-check-col">
                    <label className="cf-label">What would you like help with? <span className="cf-req">*</span></label>
                    {['Bookkeeping & accounting', 'Auditing & assurance', 'Grant acquittals or compliance reporting', 'Fractional CFO / financial oversight', 'Other'].map(opt => (
                      <label key={opt} className="cf-check-label">
                        <input type="checkbox" data-group="helpWith" value={opt} checked={form.helpWith.includes(opt)} onChange={handleChange} />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="cf-field cf-field-full">
                  <label className="cf-label">Tell us a bit about what's going on</label>
                  <textarea className="cf-textarea" name="message" placeholder="We've outgrown our current accountant, we've got an audit coming up, we need s..." value={form.message} onChange={handleChange} rows={3} />
                </div>

                {/* Hear about */}
                <div className="cf-field cf-field-full">
                  <label className="cf-label">How did you hear about us?</label>
                  <div className="cf-select-wrap">
                    <select className="cf-select" name="hearAbout" value={form.hearAbout} onChange={handleChange}>
                      <option value="">Select an option</option>
                      <option>Google Search</option>
                      <option>Social Media</option>
                      <option>Referral</option>
                      <option>LinkedIn</option>
                      <option>Other</option>
                    </select>
                    <svg className="cf-select-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 8" fill="none"><path d="M1 1l5 5 5-5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </div>
                </div>

                {/* Consent */}
                <label className="cf-consent-label">
                  <input type="checkbox" name="consentSMS" checked={form.consentSMS} onChange={handleChange} />
                  <span>By checking this box, I consent to receive non-marketing text messages from Finreach</span>
                </label>
                <label className="cf-consent-label">
                  <input type="checkbox" name="consentMarketing" checked={form.consentMarketing} onChange={handleChange} />
                  <span>By checking this box, I consent to receive marketing and promotional from FinReach at the phone number provided.</span>
                </label>

                <div className="cf-submit-row">
                  <button className="cf-submit-btn" type="submit" disabled={submitting}>
                    {submitting ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="contact-cta-banner">
        <p className="contact-cta-text">The sooner we talk, the sooner you'll have peace of mind.</p>
        <Link className="contact-cta-btn" to="/book-consultation">Book A Consultation</Link>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
