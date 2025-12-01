import React from 'react';
import SEO from '../utils/SEO';
import Header from '../Dashboard/Header.jsx';
import Footer from '../Dashboard/Footer.jsx';
import '../Dashboard/Dashboard.css';

const AuditReadiness = React.memo(() => {
  return (
    <>
      <SEO 
        title="Audit Readiness & Compliance Services | FinReach Australia"
        description="Stress-free audit services to keep you compliant with ACNC and ASIC deadlines. Expert financial statement audits, internal controls review, and continuous audit readiness support for Australian organizations."
        keywords="Audit Services, Audit Readiness, ACNC Compliance, ASIC Compliance, Financial Statement Audit, Internal Controls, NFP Audit, Compliance Audit Australia"
        canonical="/categories/audit-readiness"
        breadcrumb={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/blog' },
          { name: 'Audit Readiness', url: '/categories/audit-readiness' }
        ]}
        schema={{
          "@type": "Service",
          "serviceType": "Audit Readiness & Compliance Services",
          "provider": { "@id": "https://finreach.com.au/#organization" },
          "areaServed": "Australia",
          "description": "Professional audit services ensuring ACNC and ASIC compliance with continuous support"
        }}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section
          className="hero-section"
          style={{
            backgroundImage:
              "url('https://finreach.ultimatemarketing.com.au/assets/audit-hero-Bk5pu4Jp.jpg')",
          }}
        >
          <div className="hero-overlay" />
          <div className="container hero-content">
            <div className="row align-items-center text-start">
              <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
                <h1 className="hero-title">
                  Audits that reduce anxiety and strengthen your organisation
                </h1>
                <p className="hero-subtitle text-white opacity-75">
                  Audits are often stressful – but they don't have to be. We
                  simplify the process, keep you compliant with ACNC and ASIC
                  deadlines, and provide insights that actually help your
                  organisation improve, not just 'pass the test'.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Are you required to audit? */}
        <section className="audit-required-section">
          <div className="container">
            <h2 className="section-heading-centered mb-2">Are you required to audit?</h2>
            <p className="text-center text-muted mb-5">
              We help you navigate who needs audits and when, including:
            </p>

            <div className="row g-4 justify-content-md-center">
              <div className="col-md-5">
                <div className="audit-card">
                  <i className="bi bi-file-earmark-text audit-icon"></i>
                  <h3 className="audit-card-title">Not-for-profits</h3>
                  <p className="audit-card-text">
                    Revenue over $500K generally requires a review; revenue of
                    $3M+ requires a full audit.
                  </p>
                </div>
              </div>

              <div className="col-md-5">
                <div className="audit-card">
                  <i className="bi bi-file-earmark-text audit-icon"></i>
                  <h3 className="audit-card-title">For-profits</h3>
                  <p className="audit-card-text">
                    Meeting 2 of 3 thresholds (revenue, assets, employees)
                    triggers audit requirements.
                  </p>
                </div>
              </div>

              <div className="col-md-5">
                <div className="audit-card">
                  <i className="bi bi-shield audit-icon"></i>
                  <h3 className="audit-card-title">Constitutional requirements</h3>
                  <p className="audit-card-text">
                    Situations where your Constitution or funding agreements
                    require an audit regardless of size.
                  </p>
                </div>
              </div>

              <div className="col-md-5">
                <div className="audit-card">
                  <i className="bi bi-calendar-event audit-icon"></i>
                  <h3 className="audit-card-title">ACNC and ASIC deadlines</h3>
                  <p className="audit-card-text">
                    Typically 6 months for ACNC and 4 months for ASIC
                    submissions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost of getting audits wrong */}
        <section className="audit-cost-section">
          <div className="container">
            <h2 className="section-heading-centered mb-5">
              The cost of getting audits wrong
            </h2>

            <div className="row g-4 justify-content-md-center">
                {[
                  'Late lodgements, fines and compliance breaches',
                  'Undetected fraud, errors or misstatements',
                  'Loss of donor, investor or stakeholder trust',
                  'Weak internal controls and unmanaged risk',
                  'Audit reports that add no strategic value',
                ].map((text, idx) => (
                  <div className="col-md-4 mb-4" key={idx}>
                    <div className="audit-error-box">
                      <i className="bi bi-x-circle audit-error-icon"></i>
                      <p className="audit-error-text">{text}</p>
                    </div>
                  </div>
                ))}
                <div className="col-md-4 d-none d-md-block"></div>
            </div>
          </div>
        </section>

        {/* How FinReach runs your audit */}
        <section className="audit-process-section">
          <div className="container">
            <h2 className="section-heading-centered mb-5">
              How FinReach runs your audit
            </h2>

            <div className="row g-4 justify-content-md-center">
              <div className="col-12">
                <div className="row">
                  <div className="row justify-content-md-center">
                    <div className="col-md-6">
                      {[
                        '25 years of hands-on audit experience across NFPs, government, for-profits and listed entities.',
                        'Deep understanding of your sector – we take time to understand your model, revenue streams and specific risks.',
                        'Strong security and confidentiality – robust measures to protect your most sensitive documents.',
                      ].map((text, idx) => (
                        <div className="audit-process-item" key={idx}>
                          <i className="bi bi-check-circle audit-check-icon"></i>
                          <p className="audit-process-text">{text}</p>
                        </div>
                      ))}
                    </div>

                    <div className="col-md-6">
                      {[
                        'Structured, phased approach aligned with your AGM and lodgement dates.',
                        "Continuity of team – you're not starting from scratch with new auditors every year.",
                      ].map((text, idx) => (
                        <div className="audit-process-item" key={idx}>
                          <i className="bi bi-check-circle audit-check-icon"></i>
                          <p className="audit-process-text">{text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The benefits */}
        <section className="audit-benefits-section">
          <div className="container">
            <h2 className="section-heading-centered mb-5">The benefits</h2>

            <div className="row g-4 justify-content-md-center">
                {[
                  {
                    icon: 'bi bi-check-circle',
                    title: 'Guaranteed compliance',
                    text: 'Guaranteed statutory compliance and on-time lodgements',
                  },
                  {
                    icon: 'bi bi-shield-check',
                    title: 'Stronger controls',
                    text: 'Stronger internal controls and better risk management',
                  },
                  {
                    icon: 'bi bi-file-text',
                    title: 'Reliable statements',
                    text: 'Clearer, more reliable financial statements',
                  },
                  {
                    icon: 'bi bi-check-circle',
                    title: 'Time saved',
                    text: 'Time back to focus on strategy, not paperwork',
                  },
                  {
                    icon: 'bi bi-check-circle',
                    title: 'Strategic insights',
                    text:
                      'Strategic insights that help your organisation thrive, not just comply',
                  },
                ].map((item, idx) => (
                  <div className="col-md-4 mb-4" key={idx}>
                    <div className="audit-card">
                      <i className={`${item.icon} audit-icon`}></i>
                      <h3 className="audit-card-title">{item.title}</h3>
                      <p className="audit-card-text">{item.text}</p>
                    </div>
                  </div>
                ))}
                <div className="col-md-4 d-none d-md-block"></div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="cta-lime-banner">
          <div className="container text-center">
            <h2 className="cta-lime-title" style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>
              Ready for an audit experience that actually works for you?
            </h2>
            <p className="cta-lime-text" style={{ maxWidth: 600, margin: '0 auto 2rem auto' }}>
              Book your free 30-minute consultation and we'll map out a clear,
              stress-free path to your next audit.
            </p>
            <a href="#" className="btn-dark-consult">Book Your Consultation</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
});

export default AuditReadiness;
