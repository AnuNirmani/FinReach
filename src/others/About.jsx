import React from 'react'
import { Helmet } from 'react-helmet-async';
import { useMeta } from '../utils/useMeta';
import '../Dashboard/Dashboard.css'
import Header from '../Dashboard/Header'
import Footer from '../Dashboard/Footer'
import aboutHero from '../assets/assets/4.png';
import image1 from '../assets/assets/1.png';
import image2 from '../assets/assets/2.png';
import image3 from '../assets/assets/3.jpg';
import image4 from '../assets/assets/about4.webp';


const About = () => {
  const { meta } = useMeta(2);

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

      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${aboutHero})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="row align-items-center text-start">
            <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
              <h1 className="hero-title">Senior-Level Oversight. Technically Trained Delivery. One Straightforward Process.</h1>
              <p className="hero-subtitle text-white opacity-75">
                Here's exactly how a FinReach engagement works, from first conversation to ongoing partnership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* You Start With A Real Conversation */}
      <section className="about-section-padding">
        <div className="container">
          <h2 className="about-heading text-center mb-4">You start with a real conversation</h2>
          <p className="about-subtext text-center">
            No forms to fill out into a void. You book a no-obligation consultation directly with Don, he'll understand your organisation, your obligations, and where you're currently feeling exposed or unsupported, before anything is proposed.
          </p>
        </div>
      </section>

      {/* A Plan & Canberra Oversight */}
      <section className="about-section-padding about-structure-section">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <img src={image1} alt="A plan built around your organisation" className="img-fluid rounded mb-3" />
              <h3 className="structure-title mb-3">A plan built around your organisation</h3>
              <p className="structure-desc">
                Whether you're an NFP needing ACNC-compliant audit and reporting, or a growing SME that's outgrown your bookkeeper, we scope a plan around what your organisation actually needs, not a one-size-fits-all package.
              </p>
            </div>
            <div className="col-lg-6">
              <img src={image2} alt="Canberra oversight, every step" className="img-fluid rounded mb-3" />
              <h3 className="structure-title mb-3">Canberra oversight, every step</h3>
              <p className="structure-desc">
                Don and the Canberra team stay directly across your file. You always have a real person here who knows your organisation, answers your questions, and takes responsibility for the work - not a rotating ticket queue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technically Trained Delivery */}
      <section className="about-section-padding" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="about-heading text-center mb-5">Technically trained delivery, working in step</h2>
          <p className="about-subtext text-center mb-5">
            The detailed work - reconciliations, bookkeeping, reporting - is delivered by our technically trained team in Sri Lanka, working in close coordination with Canberra throughout your engagement. This is how we keep quality high and costs sensible, without cutting corners.
          </p>
        </div>
      </section>

      {/* Clear Reporting & Genuine Partnership */}
      <section className="about-section-padding">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <img src={image3} alt="Clear reporting, no surprises" className="img-fluid rounded mb-3" />
              <h3 className="structure-title mb-3">Clear reporting, no surprises</h3>
              <p className="structure-desc">
                You get straightforward, jargon-free reporting and regular check-ins, not a single confusing PDF once a year. If something needs your attention, you'll hear about it early, directly, and in plain language.
              </p>
            </div>
            <div className="col-lg-6">
              <img src={image4} alt="A genuine partnership" className="img-fluid rounded mb-3" />
              <h3 className="structure-title mb-3">A genuine partnership</h3>
              <p className="structure-desc">
                Most FinReach relationships go on for years. As your organisation grows or your obligations change, we grow with you, from bookkeeping through to audit, assurance and fractional CFO support, all from one team that already knows your history.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Purpose */}
      <section className="about-section-padding" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="about-heading text-center">Our Purpose</h2>
          <p className="about-subtext text-center">
            To simplify finance and strengthen organisations by combining practical bookkeeping & accounting, tailored assurance, robust audits and strategic CFO-level guidance.
          </p>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="about-section-padding">
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
      <section className="values-section" style={{ backgroundColor: '#f8f9fa' }}>
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

      {/* Bottom CTA */}
      <section className="bottom-cta-section">
        <div className="container">
          <h2 className="bottom-cta-heading">Ready to see how this would work for your organisation?</h2>
          <button
            type="button"
            className="btn-dark-consult"
            onClick={() => window.dispatchEvent(new Event('open-consultation-modal'))}
          >
            Enquire Now
          </button>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default About
