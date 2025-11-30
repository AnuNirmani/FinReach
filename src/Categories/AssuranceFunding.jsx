import React from 'react';
import Header from '../Dashboard/Header.jsx';
import Footer from '../Dashboard/Footer.jsx';

const AssuranceFunding = React.memo(() => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section
          className="hero-section"
          style={{
            backgroundImage:
              "url('https://finreach.ultimatemarketing.com.au/assets/assurance-hero-Crxtpee-.jpg')",
          }}
        >
          <div className="hero-overlay"></div>
          <div className="container hero-content">
            <div className="row align-items-center text-start">
              <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
                <h1 className="hero-title">
                  Assurance that protects your funding and reputation
                </h1>
                <p className="hero-subtitle text-white opacity-75">
                  Assurance requirements can feel like a minefield – reviews, audits, agreed-upon procedures, internal control assessments. We help you choose the right level of assurance, keep costs under control and stay funding-ready all year round.
                </p>
              </div>
              {/** Form column intentionally omitted to match current app structure */}
            </div>
          </div>
        </section>

        {/* Headaches Section */}
        <section className="assurance-headaches-section">
          <div className="container">
            <h2 className="section-heading-centered">The headaches we remove</h2>
            <div className="row g-4 px-lg-5 justify-content-md-center">
              <div className="col-md-5">
                <div className="headache-card">
                  <div className="headache-icon-circle">
                    <i className="bi bi-x-lg"></i>
                  </div>
                  <p className="headache-text">
                    Grant acquittal stress: tight deadlines, messy records and limited staff capacity.
                  </p>
                </div>
              </div>
              <div className="col-md-5">
                <div className="headache-card">
                  <div className="headache-icon-circle">
                    <i className="bi bi-x-lg"></i>
                  </div>
                  <p className="headache-text">
                    Confusion over whether you truly need a full audit or if a review or agreed-upon procedures would be enough.
                  </p>
                </div>
              </div>
              <div className="col-md-5">
                <div className="headache-card">
                  <div className="headache-icon-circle">
                    <i className="bi bi-x-lg"></i>
                  </div>
                  <p className="headache-text">
                    Operating in highly regulated sectors like aged care, health or education without a dedicated compliance team.
                  </p>
                </div>
              </div>
              <div className="col-md-5">
                <div className="headache-card">
                  <div className="headache-icon-circle">
                    <i className="bi bi-x-lg"></i>
                  </div>
                  <p className="headache-text">
                    Audit readiness becoming an annual panic instead of an ongoing, manageable process.
                  </p>
                </div>
              </div>
            </div>
            <p
              className="text-center mt-5 text-muted"
              style={{ maxWidth: 800, margin: '0 auto' }}
            >
              Left unaddressed, these issues can lead to missed funding, higher costs, staff burnout, damaged credibility and even legal trouble.
            </p>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="assurance-solutions-section">
          <div className="container">
            <h2 className="section-heading-centered mb-2">Flexible assurance solutions</h2>
            <p className="assurance-subtitle">
              We tailor assurance to your needs and budget:
            </p>
            <div className="row g-4 justify-content-md-center">
              <div className="col-md-5">
                <div className="assurance-card">
                  <i className="bi bi-file-earmark-check assurance-icon"></i>
                  <h3 className="assurance-card-title">Grant acquittal audit support</h3>
                  <p className="assurance-card-text">
                    From setting up grant tracking properly to preparing documentation that's ready for review.
                  </p>
                </div>
              </div>
              <div className="col-md-5">
                <div className="assurance-card">
                  <i className="bi bi-shield-check assurance-icon"></i>
                  <h3 className="assurance-card-title">Review engagements</h3>
                  <p className="assurance-card-text">
                    Ideal for NFPs under $3M revenue that need stakeholder reassurance without paying for a full audit.
                  </p>
                </div>
              </div>
              <div className="col-md-5">
                <div className="assurance-card">
                  <i className="bi bi-check-all assurance-icon"></i>
                  <h3 className="assurance-card-title">Agreed-upon procedures (AUP)</h3>
                  <p className="assurance-card-text">
                    Targeted work over high-risk areas like specific transactions, compliance questions or inventory counts.
                  </p>
                </div>
              </div>
              <div className="col-md-5">
                <div className="assurance-card">
                  <i className="bi bi-award assurance-icon"></i>
                  <h3 className="assurance-card-title">Compliance assurance</h3>
                  <p className="assurance-card-text">
                    Focused assessments over particular regulations or contracts in regulated sectors.
                  </p>
                </div>
              </div>
              <div className="col-10">
                <div className="assurance-card">
                  <i className="bi bi-shield assurance-icon"></i>
                  <h3 className="assurance-card-title">Internal control assurance</h3>
                  <p className="assurance-card-text">
                    Independent assessment of the strength of your controls to protect against fraud and misstatements.
                  </p>
                </div>
              </div>
            </div>
            <div className="assurance-notice-box">
              All assurance work is delivered from within Australia by experienced professionals.
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="assurance-approach-section">
          <div className="container">
            <h2 className="approach-heading">Our approach</h2>
            <div className="row px-lg-5 justify-content-md-center">
              <div className="col-md-5">
                <div className="approach-item">
                  <i className="bi bi-check-circle approach-icon"></i>
                  <p className="approach-text">
                    25 years of assurance experience across SMEs, NFPs, government and regulated industries.
                  </p>
                </div>
                <div className="approach-item">
                  <i className="bi bi-check-circle approach-icon"></i>
                  <p className="approach-text">
                    Clear planning and timelines – detailed request lists, reverse-engineered deadlines and no surprises.
                  </p>
                </div>
              </div>
              <div className="col-md-5">
                <div className="approach-item">
                  <i className="bi bi-check-circle approach-icon"></i>
                  <p className="approach-text">
                    Year-round support – we help you build audit-readiness as an ongoing habit, not a last-minute scramble.
                  </p>
                </div>
                <div className="approach-item">
                  <i className="bi bi-check-circle approach-icon"></i>
                  <p className="approach-text">
                    Actionable recommendations – we don't just report issues; we help you strengthen governance, controls and risk management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-lime-banner">
          <div className="container text-center">
            <h2 className="cta-lime-title" style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>
              Stop overspending on full audits and start using assurance strategically
            </h2>
            <p
              className="cta-lime-text"
              style={{ maxWidth: 600, margin: '0 auto 2rem auto' }}
            >
              Book your 30-minute, no-obligation consultation to find the right assurance approach for your organisation.
            </p>
            <a href="#" className="btn-dark-consult">
              Book Your Consultation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
});

export default AssuranceFunding;
