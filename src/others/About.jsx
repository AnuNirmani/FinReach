import React from 'react'
import { Helmet } from 'react-helmet-async';
import { useMeta } from '../utils/useMeta';
import '../Dashboard/Dashboard.css'
import './About.css'
import Header from '../Dashboard/Header'
import Footer from '../Dashboard/Footer'
import aboutHero from '../assets/assets/4.png';
import image1 from '../assets/assets/about 1.jpg';
import image2 from '../assets/assets/about2.webp';
import image3 from '../assets/assets/about3.webp';
import image4 from '../assets/assets/about4.webp';
import ctaImage from '../assets/assets/15628.jpg';


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
        className="hero-section about-hero-section"
        style={{
          backgroundImage: `url(${aboutHero})`,
        }}
      >
        <div className="hero-overlay about-hero-overlay"></div>
        <div className="container hero-content h-100">
          <div className="row align-items-center justify-content-end h-100 text-start">
            <div className="col-xl-6 col-lg-7 col-md-10">
              <div className="about-hero-card">
                <h1 className="hero-title about-hero-title">Senior-Level Oversight. Technically Trained Delivery. One Straightforward Process.</h1>
                <p className="hero-subtitle about-hero-subtitle">
                  Here's exactly how a FinReach engagement works, from first conversation to ongoing partnership.
                </p>
                <button
                  type="button"
                  className="about-hero-cta"
                  onClick={() => window.dispatchEvent(new Event('open-consultation-modal'))}
                >
                  Book A No-Obligation Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="about-intro-section">
        <div className="container about-intro-shell">
          <div className="about-intro-copy text-center">
            <h2 className="about-heading about-intro-heading">You start with a real conversation</h2>
            <p className="about-subtext about-intro-subtext">
              No forms to fill out into a void. You book a no-obligation consultation directly with Don, he'll understand your organisation, your obligations, and where you're currently feeling exposed or unsupported, before anything is proposed.
            </p>
          </div>

          <div className="row about-intro-grid justify-content-center">
            <div className="col-xl-5 col-lg-5 col-md-8">
              <article className="about-intro-card">
                <img src={image1} alt="A plan built around your organisation" className="about-intro-image" />
                <h3 className="about-intro-card-title">A plan built around your organisation</h3>
                <p className="about-intro-card-text">
                  Whether you're an NFP needing ACNC-compliant audit and reporting, or a growing SME that's outgrown your bookkeeper, we scope a plan around what your organisation actually needs, not a one-size-fits-all package.
                </p>
              </article>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-8">
              <article className="about-intro-card">
                <img src={image2} alt="Canberra oversight, every step" className="about-intro-image" />
                <h3 className="about-intro-card-title">Canberra oversight, every step</h3>
                <p className="about-intro-card-text">
                  Don and the Canberra team stay directly across your file. You always have a real person here who knows your organisation, answers your questions, and takes responsibility for the work - not a rotating ticket queue.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Technically Trained Delivery */}
      <section className="about-section-padding" >
        <div className="container">
          <h2 className="about-heading text-center mb-5">Technically trained delivery, working in step</h2>
          <p className="about-subtext text-center mb-5">
            The detailed work - reconciliations, bookkeeping, reporting - is delivered by our technically trained team in Sri Lanka, working in close coordination with Canberra throughout your engagement. This is how we keep quality high and costs sensible, without cutting corners.
          </p>
        </div>
      </section>

      {/* Clear Reporting & Genuine Partnership */}
      <section className="about-section-padding about-image-pair-section">
        <div className="container about-intro-shell">
          <div className="row about-intro-grid justify-content-center">
            <div className="col-xl-5 col-lg-5 col-md-8">
              <article className="about-intro-card">
                <img src={image3} alt="Clear reporting, no surprises" className="about-intro-image" />
                <h3 className="about-intro-card-title">Clear reporting, no surprises</h3>
                <p className="about-intro-card-text">
                You get straightforward, jargon-free reporting and regular check-ins, not a single confusing PDF once a year. If something needs your attention, you'll hear about it early, directly, and in plain language.
                </p>
              </article>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-8">
              <article className="about-intro-card">
                <img src={image4} alt="A genuine partnership" className="about-intro-image" />
                <h3 className="about-intro-card-title">A genuine partnership</h3>
                <p className="about-intro-card-text">
                Most FinReach relationships go on for years. As your organisation grows or your obligations change, we grow with you, from bookkeeping through to audit, assurance and fractional CFO support, all from one team that already knows your history.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      

      

      

      {/* Bottom CTA */}
      <section
        className="about-cta-banner"
        style={{ backgroundImage: `url(${ctaImage})` }}
      >
        <div className="about-cta-overlay"></div>
        <div className="about-cta-content">
          <h2 className="about-cta-heading">Ready to see how this would work for your organisation?</h2>
          <button
            type="button"
            className="about-cta-button enquire-now-btn-standard"
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
