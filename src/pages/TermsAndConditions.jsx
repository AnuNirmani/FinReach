import React from 'react';
import SEO from '../utils/SEO';
import '../Dashboard/Dashboard.css';
import '../others/About.css';
import Header from '../Dashboard/Header';
import Footer from '../Dashboard/Footer';
import aboutHero from '../assets/assets/about-hero-BEnMor4y.jpg';

const TermsAndConditions = () => {
  return (
    <>
      <SEO
        title="Terms & Conditions | FinReach"
        description="Read the Terms & Conditions governing the use of the FinReach website and our professional services."
        keywords="FinReach Terms and Conditions, Website Terms, Accounting Services Terms"
        canonical="/terms-and-conditions"
        breadcrumb={[
          { name: 'Home', url: '/' },
          { name: 'Terms & Conditions', url: '/terms-and-conditions' },
        ]}
      />

      <Header />

      {/* Hero Section (same as About page) */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="row align-items-center text-start">
            <div className="col-lg-8 col-md-12">
              <h1 className="hero-title">Terms &amp; Conditions</h1>
              <p className="hero-subtitle text-white opacity-75">
                Terms governing the use of our website and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="about-section-padding">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 className="about-heading">Terms &amp; Conditions – FinReach</h2>
          <p className="about-subtext" style={{ marginBottom: '28px' }}>
            <strong>Last Updated:</strong> 6 October 2025
          </p>

          <h2 className="about-heading" style={{ marginTop: '28px' }}>1. Introduction</h2>
          <p className="about-subtext">
            These Terms &amp; Conditions (“Terms”) govern your use of the FinReach website
            (finreach.com.au) and any related content or services provided by FinReach (“we”, “our”, “us”).
            By accessing or using this website, you agree to be bound by these Terms.
          </p>

          <h2 className="about-heading" style={{ marginTop: '40px' }}>2. General Information Only</h2>
          <p className="about-subtext">
            Information on this website is provided for general information purposes only and does not
            constitute financial, accounting, taxation, legal, or other professional advice. You should
            obtain advice specific to your circumstances before acting on any information.
          </p>

          <h2 className="about-heading" style={{ marginTop: '40px' }}>3. Engagement of Services</h2>
          <p className="about-subtext">
            If you engage FinReach to provide bookkeeping, accounting, auditing, assurance, or CFO
            services, the scope, fees, responsibilities, and deliverables will be set out in a separate
            written engagement letter or agreement. In the event of inconsistency, that agreement will
            prevail over these Terms.
          </p>

          <h2 className="about-heading" style={{ marginTop: '40px' }}>4. Client Responsibilities</h2>
          <p className="about-subtext">
            You agree to provide accurate, complete, and timely information necessary for us to perform
            services. FinReach is not responsible for delays or outcomes arising from incomplete or
            inaccurate information provided by you.
          </p>

          <h2 className="about-heading" style={{ marginTop: '40px' }}>5. Intellectual Property</h2>
          <p className="about-subtext">
            All content on this website, including text, graphics, logos, layout, and design, is owned by
            or licensed to FinReach and is protected by intellectual property laws. You may not copy,
            reproduce, or distribute any content without our prior written consent, except as permitted
            by law.
          </p>

          <h2 className="about-heading" style={{ marginTop: '40px' }}>6. Website Use</h2>
          <p className="about-subtext">
            You must not misuse this website, attempt unauthorised access, introduce malicious code, or
            interfere with its operation. We reserve the right to restrict or terminate access where
            misuse is suspected.
          </p>

          <h2 className="about-heading" style={{ marginTop: '40px' }}>7. Third-Party Links</h2>
          <p className="about-subtext">
            This website may contain links to third-party websites. FinReach does not control and is not
            responsible for the content, security, or practices of those websites.
          </p>

          <h2 className="about-heading" style={{ marginTop: '40px' }}>8. Limitation of Liability</h2>
          <p className="about-subtext">
            To the maximum extent permitted by law, FinReach excludes all liability for any loss or damage
            arising from your use of, or reliance on, this website. Where liability cannot be excluded, it
            is limited to the minimum extent permitted by law.
          </p>

          <h2 className="about-heading" style={{ marginTop: '40px' }}>9. Privacy</h2>
          <p className="about-subtext">
            Your use of this website is also governed by our Privacy Policy, which explains how we collect
            and handle personal information.
          </p>

          <h2 className="about-heading" style={{ marginTop: '40px' }}>10. Changes to These Terms</h2>
          <p className="about-subtext">
            FinReach may update these Terms from time to time to reflect changes in our practices or
            legal obligations. The current version will always be available on this website.
          </p>

          <h2 className="about-heading" style={{ marginTop: '40px' }}>11. Governing Law</h2>
          <p className="about-subtext">
            These Terms are governed by the laws of Australia. Any disputes will be subject to the
            jurisdiction of the Australian courts.
          </p>

          <h2 className="about-heading" style={{ marginTop: '40px' }}>12. Contact Us</h2>
          <p className="about-subtext" style={{ marginBottom: '0' }}>
            <strong>FinReach</strong>
          </p>
          <p className="about-subtext" style={{ marginBottom: '0' }}>
            <strong>Email:</strong>{' '}
            <a
              href="mailto:info@finreach.com.au"
              style={{ color: '#000', textDecoration: 'underline' }}
            >
              info@finreach.com.au
            </a>
          </p>
          <p className="about-subtext">
            <strong>Website:</strong> finreach.com.au
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TermsAndConditions;
