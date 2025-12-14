import React from 'react';
import SEO from '../utils/SEO';
import '../Dashboard/Dashboard.css';
import Header from '../Dashboard/Header';
import Footer from '../Dashboard/Footer';
import aboutHero from '../assets/assets/about-hero-BEnMor4y.jpg';

const PrivacyPolicy = () => {
  return (
    <>
      <SEO
        title="Privacy Policy | FinReach"
        description="Read FinReach’s Privacy Policy outlining how we collect, use, disclose, and protect personal information."
        keywords="FinReach Privacy Policy, Privacy Act 1988, Australian Privacy Principles"
        canonical="/privacy-policy"
        breadcrumb={[
          { name: 'Home', url: '/' },
          { name: 'Privacy Policy', url: '/privacy-policy' },
        ]}
      />

      <Header />

      {/* Hero Section (same style as About) */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="row align-items-center text-start">
            <div className="col-lg-8 col-md-12">
              <h1 className="hero-title">Privacy Policy</h1>
              <p className="hero-subtitle text-white opacity-75">
                How we collect, use, disclose and protect your personal information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section (same spacing as About sections) */}
      <section className="about-section-padding">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 className="about-heading">Privacy Policy – FinReach</h2>
          <p className="about-subtext" style={{ marginBottom: '28px' }}>
            <strong>Last Updated:</strong> 6 October 2025
          </p>

          <h2 className="about-heading" style={{ marginTop: '28px' }}>Introduction</h2>
          <p className="about-subtext">
            This Privacy Policy outlines how FinReach (“FinReach”, “we”, “our”, or “us”) collects,
            uses, discloses, and protects personal information in connection with our website
            finreach.com.au and the provision of our bookkeeping, accounting, auditing, and CFO services.
            We are committed to complying with the Privacy Act 1988 (Cth) (“Privacy Act”) and the
            Australian Privacy Principles (APPs) in handling personal information.
          </p>

          <h2 className="about-heading" style={{ marginTop: '40px' }}>1. Information We Collect</h2>
          <p className="about-subtext">We may collect and hold the following categories of personal information:</p>
          <ul className="about-subtext">
            <li><strong>Personal details:</strong> name, residential and postal address, email address, telephone number, and other contact information.</li>
            <li><strong>Business information:</strong> company name, ABN/ACN, engagement details, and documents necessary to perform our professional services.</li>
            <li><strong>Financial information:</strong> bank account details, invoices, payroll and superannuation records, tax file numbers (TFNs), ledgers, and supporting documentation.</li>
            <li><strong>Website and analytics data:</strong> IP address, device and browser type, pages accessed, referral sources, cookies, and related technologies.</li>
            <li><strong>Other information:</strong> any additional information you voluntarily provide via forms, emails, meetings, or file uploads relevant to our engagement.</li>
          </ul>

          <h2 className="about-heading" style={{ marginTop: '40px' }}>2. How We Collect Information</h2>
          <p className="about-subtext">We may collect personal information:</p>
          <ul className="about-subtext">
            <li>Directly from you through our website, email, telephone, or in-person communications.</li>
            <li>Through authorised accounting software and integrations (e.g., Xero, MYOB, QuickBooks) and secure file transfer platforms.</li>
            <li>From publicly available sources and professional networks (e.g., LinkedIn), where appropriate.</li>
            <li>From third parties you authorise, including your bookkeeper, tax agent, auditor, payroll provider, or financial institution.</li>
          </ul>

          <h2 className="about-heading" style={{ marginTop: '40px' }}>3. Purposes for Collection and Use</h2>
          <p className="about-subtext">We collect, hold, and use personal information for purposes including:</p>
          <ul className="about-subtext">
            <li>Providing bookkeeping, accounting, auditing, and CFO services.</li>
            <li>Verifying identity, establishing and managing client engagements, and communicating regarding our services.</li>
            <li>Complying with legal, regulatory, and professional obligations (including taxation, corporations, AML/CTF, and auditing requirements).</li>
            <li>Processing payments, maintaining accounts, and performing internal record-keeping.</li>
            <li>Operating, maintaining, and enhancing our website and client experience.</li>
            <li>Sending service updates or marketing communications with your consent (you may opt out at any time).</li>
          </ul>

          <h2 className="about-heading" style={{ marginTop: '40px' }}>4. Disclosure of Personal Information</h2>
          <p className="about-subtext">We may disclose personal information to:</p>
          <ul className="about-subtext">
            <li>Trusted third-party service providers (including IT, cloud hosting, document management, and analytics providers).</li>
            <li>Accounting platforms and integrations authorised by you.</li>
            <li>Professional advisers such as auditors, insurers, or legal representatives.</li>
            <li>Government agencies and regulatory authorities, where required or authorised by law.</li>
            <li>Any other third party with your express consent.</li>
          </ul>
          <p className="about-subtext">
            We do not sell, rent, or trade personal information under any circumstances.
          </p>

          <h2 className="about-heading" style={{ marginTop: '40px' }}>5. Data Security</h2>
          <p className="about-subtext">
            We take reasonable steps to safeguard personal information from misuse, interference, loss,
            and unauthorised access, modification, or disclosure. Security measures include:
          </p>
          <ul className="about-subtext">
            <li>Secure systems and data encryption (in transit and at rest, where supported).</li>
            <li>Multi-factor authentication and role-based access controls.</li>
            <li>Confidentiality obligations for personnel and contractors.</li>
            <li>Vendor due diligence and periodic security reviews.</li>
          </ul>
          <p className="about-subtext">
            In the event of an eligible data breach likely to result in serious harm, we will notify
            affected individuals and the Office of the Australian Information Commissioner (OAIC) in
            accordance with the Notifiable Data Breaches Scheme.
          </p>

          <h2 className="about-heading" style={{ marginTop: '40px' }}>6. Access and Correction</h2>
          <p className="about-subtext">
            You may request access to, or correction of, your personal information at any time by
            contacting us. We may require verification of identity before providing access or making
            corrections. We will respond to all requests within a reasonable timeframe.
          </p>

          <h2 className="about-heading" style={{ marginTop: '40px' }}>7. Cookies and Analytics</h2>
          <p className="about-subtext">
            Our website uses cookies and similar technologies to improve functionality and analyse user
            behaviour (e.g., via Google Analytics). You may adjust your browser settings to disable
            cookies, though this may affect certain site features or functionality.
          </p>

          <h2 className="about-heading" style={{ marginTop: '40px' }}>8. Overseas Disclosure</h2>
          <p className="about-subtext">
            Some of our service providers and cloud storage solutions may store or process data outside
            Australia (for example, in the United States or European Union). Where practicable, we take
            reasonable steps to ensure that any overseas recipient handles personal information in a
            manner consistent with the APPs.
          </p>

          <h2 className="about-heading" style={{ marginTop: '40px' }}>9. Marketing Communications</h2>
          <p className="about-subtext">
            We may send newsletters, service announcements, or other marketing communications where
            permitted by law. You may opt out at any time by following the unsubscribe link or contacting
            us directly.
          </p>

          <h2 className="about-heading" style={{ marginTop: '40px' }}>10. Data Retention</h2>
          <p className="about-subtext">
            We retain personal information only for as long as necessary to fulfil the purposes outlined
            in this Policy and to meet legal, regulatory, and professional record-keeping obligations
            (for example, under taxation and corporations laws). When information is no longer required,
            we will securely destroy or de-identify it in accordance with applicable standards.
          </p>

          <h2 className="about-heading" style={{ marginTop: '40px' }}>11. Changes to This Policy</h2>
          <p className="about-subtext">
            We may amend this Privacy Policy periodically to reflect changes in our practices or legal
            obligations. The current version will always be available on our website, with the effective
            date displayed at the top of this page.
          </p>

          <h2 className="about-heading" style={{ marginTop: '40px' }}>12. Contact Us</h2>
          <p className="about-subtext" style={{ marginBottom: '0' }}><strong>FinReach</strong></p>
          <p className="about-subtext" style={{ marginBottom: '0' }}>
            <strong>Email:</strong>{' '}
            <a href="mailto:info@finreach.com.au" style={{ color: '#000', textDecoration: 'underline' }}>
              info@finreach.com.au
            </a>
          </p>
          <p className="about-subtext" style={{ marginBottom: '0' }}>
            <strong>Website:</strong> finreach.com.au
          </p>
          <p className="about-subtext">
            <strong>Address:</strong> Level 1, 11-17 Swanson Court, Belconnen ACT 2617 Australia
          </p>

          <h2 className="about-heading" style={{ marginTop: '40px' }}>
            13. Sensitive Information and Tax File Numbers (TFNs)
          </h2>
          <p className="about-subtext">
            We only collect sensitive information (including TFNs) where it is reasonably necessary for
            our functions, with your consent, or where required or authorised by law. TFN information is
            handled strictly in accordance with the Privacy Act and the Privacy (Tax File Number) Rule 2015.
          </p>

          <h2 className="about-heading" style={{ marginTop: '40px' }}>14. Questions and Complaints</h2>
          <p className="about-subtext">
            If you have any questions or concerns regarding this Privacy Policy or the handling of your
            personal information, please contact us using the details above. We will respond to all
            privacy-related enquiries or complaints as soon as reasonably practicable. If you are
            dissatisfied with our response, you may refer the matter to the Office of the Australian
            Information Commissioner (OAIC) at oaic.gov.au.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
