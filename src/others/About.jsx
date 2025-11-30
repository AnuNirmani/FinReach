import React from 'react'
import '../Dashboard/Dashboard.css'
import Header from '../Dashboard/Header'
import Footer from '../Dashboard/Footer'

const About = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: "url('https://finreach.ultimatemarketing.com.au/assets/about-hero-BEnMor4y.jpg')" }}
      >
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="row align-items-center text-start">
            <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
              <h1 className="hero-title">About FinReach</h1>
              <p className="hero-subtitle text-white opacity-75">
                FinReach exists to give growing businesses, not-for-profits and health organisations the financial clarity and confidence they need to thrive – without drowning in complexity, compliance and spreadsheets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Purpose */}
      <section className="about-section-padding about-purpose-section">
        <div className="container">
          <h2 className="about-heading">Our purpose</h2>
          <p className="about-subtext">
            To simplify finance and strengthen organisations, by combining practical bookkeeping, tailored assurance, robust audits and strategic CFO-level guidance.
          </p>
        </div>
      </section>

      {/* Structure */}
      <section className="about-section-padding about-structure-section">
        <div className="container">
          <h2 className="about-heading text-center mb-5">How we're structured</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="structure-card">
                <h3 className="structure-title">Bookkeeping & Accounting</h3>
                <p className="structure-desc">
                  Delivered by our experienced off-shore team, under the direction, review and approval of a CPA based in Australia – giving you quality, affordability and consistency.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="structure-card">
                <h3 className="structure-title">Assurance, Auditing & Fractional CFO</h3>
                <p className="structure-desc">
                  Delivered in Australia, drawing on more than 25 years of real-world experience across SMEs, not-for-profits, government and listed companies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="about-section-padding about-serve-section">
        <div className="container">
          <h2 className="about-heading text-center mb-5">Who we serve</h2>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="serve-card-about">
                <i className="bi bi-heart serve-icon"></i>
                <h3 className="serve-title">Health</h3>
                <p className="serve-desc">Especially dental and specialist practices needing clear numbers and strong controls</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="serve-card-about">
                <i className="bi bi-people serve-icon"></i>
                <h3 className="serve-title">Not-for-profits</h3>
                <p className="serve-desc">Organisations with diverse funding streams and reporting requirements</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="serve-card-about">
                <i className="bi bi-building serve-icon"></i>
                <h3 className="serve-title">Small/medium businesses</h3>
                <p className="serve-desc">Growing companies that need proper financial operations and leadership</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="container values-container">
          <h2 className="about-heading text-center mb-5">What we value</h2>
          {[
            { letter: 'R', title: 'Reliable', desc: 'Consistent, accurate solutions you can trust.' },
            { letter: 'E', title: 'Expert Led', desc: 'All work is reviewed and approved by qualified Australian professionals.' },
            { letter: 'A', title: 'Affordable', desc: 'Our solutions are cost-effective, offering great value without compromising on quality or compliance.' },
            { letter: 'C', title: 'Compliant', desc: 'We ensure your business meets all ATO and financial reporting requirements with precision and transparency.' },
            { letter: 'H', title: 'Helpful', desc: 'We act as an extension of your team providing clear advice, proactive support, and peace of mind.' }
          ].map(v => (
            <div className="value-item" key={v.letter}>
              <div className="value-letter-box">{v.letter}</div>
              <div className="value-content">
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How We Work */}
      <section className="how-we-work-section">
        <div className="container">
          <h2 className="work-title">How we work with you</h2>
          <p className="work-desc">
            We start with a conversation, not a template. We listen to your challenges, deadlines and goals, then build a practical, affordable plan that keeps you compliant today and ready for tomorrow.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bottom-cta-section">
        <div className="container">
          <h2 className="bottom-cta-heading">If you're ready for clearer numbers and less stress</h2>
          <p className="bottom-cta-sub">Book a 30-minute, obligation-free consultation with the FinReach team.</p>
          <a href="#booking-form" className="btn-bottom-dark">Book Your Consultation</a>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default About
