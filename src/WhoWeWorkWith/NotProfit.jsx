import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useMeta } from '../utils/useMeta.js';
import Header from '../Dashboard/Header.jsx';
import Footer from '../Dashboard/Footer.jsx';
import '../Dashboard/Dashboard.css';
import './NotProfit.css';
import notprofitHero from '../assets/assets/notforprofits.jpg';
import notprofitImg2 from '../assets/assets/bookkeeping1.jpg';
import notprofitImg3 from '../assets/assets/audit1.jpg';
import notprofitImg4 from '../assets/assets/assurance1.jpg';
import notprofitImg5 from '../assets/assets/cfo1.jpg';
import directorImage from '../assets/assets/notprofit3.jpg';
import ctaBg from '../assets/assets/157858.jpg';
import logoIpsum265 from '../assets/logo/logoipsum-265.png';
import logoIpsum287 from '../assets/logo/logoipsum-287.png';
import logoIpsum331 from '../assets/logo/logoipsum-331.png';
import logoIpsum214 from '../assets/logo/logoipsum-214.png';

const NotProfit = React.memo(() => {
  const { meta } = useMeta(8);
  const [activeTestimonialIdx, setActiveTestimonialIdx] = React.useState(null);
  const [testimonialPageIdx, setTestimonialPageIdx] = React.useState(0);

  const understandingItems = [
    'Restricted and unrestricted funds, and the reporting discipline they demand',
    'Grant acquittals and the deadlines that come with them',
    'Board and committee accountability to funders, members, and the public',
    'ACNC compliance and the reporting obligations that come with registration',
  ];

  const serviceCards = [
    {
      image: notprofitImg2,
      imageAlt: 'Bookkeeping and Accounting',
      title: 'Bookkeeping & Accounting',
      text: 'Accurate financials that hold up to board and funder scrutiny.',
      link: '/bookkeeping-accounting',
    },
    {
      image: notprofitImg3,
      imageAlt: 'Auditing services',
      title: 'Auditing',
      text: 'Risk-based audits that understand the NFP audit environment, not just the standards.',
      link: '/auditing',
    },
    {
      image: notprofitImg4,
      imageAlt: 'Assurance services',
      title: 'Assurance',
      text: 'Independent assurance your funders and grant bodies will trust.',
      link: '/assurance',
    },
    {
      image: notprofitImg5,
      imageAlt: 'Fractional CFO services',
      title: 'Fractional CFO',
      text: 'Strategic financial thinking for boards asking harder questions about sustainability.',
      link: '/cfo',
    },
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Understand Your Funding Structure',
      text: 'Grants, donations, government funding - we map how money moves through your organisation before anything else.',
    },
    {
      step: '2',
      title: 'Build The Right Reporting',
      text: 'Acquittals, board reports, and funder requirements, set up to be straightforward rather than scrambled.',
    },
    {
      step: '3',
      title: 'Stay Ahead Of Deadlines',
      text: 'Funding and compliance deadlines are tracked proactively, not chased at the last minute.',
    },
    {
      step: '4',
      title: 'Support Your Board',
      text: 'Clear, accurate financial information your board can actually act on.',
    },
  ];

  const testimonialItems = [
    {
      text: 'This platform has completely transformed how we manage our marketing campaigns. The ease of use and powerful features have made a significant impact on our ROI.',
      author: 'Anonymous Client',
      logo: logoIpsum265,
      logoAlt: 'Client logo 1',
    },
    {
      text: 'The automation capabilities are incredible. We\'ve saved countless hours and improved our customer engagement significantly.',
      author: 'Anonymous Client',
      logo: logoIpsum287,
      logoAlt: 'Client logo 2',
    },
    {
      text: 'The analytics and reporting features give us insights we never had before. Our conversion rates have improved by 40%.',
      author: 'Anonymous Client',
      logo: logoIpsum331,
      logoAlt: 'Client logo 3',
    },
    {
      text: 'This platform has revolutionized our business operations. The seamless integration and powerful features have helped us scale our marketing efforts efficiently.',
      author: 'Anonymous Client',
      logo: logoIpsum214,
      logoAlt: 'Client logo 4',
    },
  ];

  const testimonialsPerPage = 3;
  const totalTestimonialPages = Math.ceil(testimonialItems.length / testimonialsPerPage);
  const testimonialStart = testimonialPageIdx * testimonialsPerPage;
  const visibleTestimonials = testimonialItems.slice(
    testimonialStart,
    testimonialStart + testimonialsPerPage,
  );

  const activeTestimonial =
    activeTestimonialIdx !== null ? testimonialItems[activeTestimonialIdx] : null;

  const openTestimonial = (idx) => {
    setActiveTestimonialIdx(idx);
  };

  const closeTestimonial = () => {
    setActiveTestimonialIdx(null);
  };

  const shiftTestimonialsNext = () => {
    setTestimonialPageIdx((prev) => (prev + 1) % totalTestimonialPages);
  };

  const shiftTestimonialsPrevious = () => {
    setTestimonialPageIdx((prev) =>
      (prev - 1 + totalTestimonialPages) % totalTestimonialPages,
    );
  };

  React.useEffect(() => {
    if (activeTestimonialIdx === null) {
      document.body.style.removeProperty('overflow');
      return undefined;
    }

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeTestimonial();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.removeProperty('overflow');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeTestimonialIdx]);

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
      <main className="assurance-page assurance-page--notprofit">
        <section className="assurance-hero">
          <div className="assurance-hero-media">
            <img src={notprofitHero} alt="Not-for-profit consultation" className="assurance-hero-image" />
          </div>
          <div className="assurance-hero-content">
            <h1 className="assurance-hero-title">Financial Confidence For The Organisations Doing The Work That Matters.</h1>
            <p className="assurance-hero-subtitle">
              Accounting, audit, and assurance built around the realities of running a not-for-profit.
            </p>
            <button
              type="button"
              className="assurance-hero-btn"
              onClick={() => window.dispatchEvent(new Event('open-consultation-modal'))}
            >
              Enquire Now
            </button>
          </div>
        </section>

        <section className="assurance-content-wrap">
          <div className="container assurance-shell">
            <section className="assurance-headaches-block">
              <p className="assurance-pill">What we understand</p>

              <div className="assurance-included-list">
                {understandingItems.map((item) => (
                  <article className="assurance-included-item" key={item}>
                    <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
                    <span>{item}</span>
                  </article>
                ))}
              </div>
            </section>

            <section className="assurance-solutions-block">
              <p className="assurance-pill">How we help</p>

              <div className="row g-4 justify-content-center nfp-help-cards-row">
                {serviceCards.map((card) => (
                  <div className="col-md-6 col-xl-3 nfp-help-card-col" key={card.title}>
                    <article className="nfp-help-card">
                      <img src={card.image} alt={card.imageAlt} className="nfp-help-card-image" />
                      <h3 className="nfp-help-card-title">{card.title}</h3>
                      <p className="nfp-help-card-text">{card.text}</p>
                      <a href={card.link}>Learn More</a>
                    </article>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>

        <section className="nfp-process-section">
          <div className="container assurance-shell">
            <section className="assurance-process-block nfp-process-block">
              <p className="assurance-pill">How we work</p>

              <div className="row g-4">
                {processSteps.map((step) => (
                  <div className="col-md-6 col-xl-3" key={step.step}>
                    <article className="assurance-process-card">
                      <span className="assurance-process-number">{step.step}</span>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </article>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>

        <section className="assurance-who-section">
          <div className="container assurance-shell">
            <div className="row g-4 align-items-center assurance-why-row">
              <div className="col-lg-6">
                <div className="assurance-why-image-wrap">
                  <img src={directorImage} alt="FinReach leadership" className="assurance-why-image" />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="assurance-why-copy">
                  <p className="assurance-pill assurance-pill-left">Why FinReach for NFPs</p>
                  <h2>Sector knowledge that&apos;s already there, not built on the job.</h2>
                  <p>
                    Don brings more than 25 years in accounting and assurance, with a large component of that spent working directly with not-for-profits, including Woden Community Services, Carers Australia, and Communities at Work, alongside government and ASX-listed audit work. That depth means we already understand the compliance pressure, funding complexity, and board accountability your organisation operates under.
                  </p>
                  <p>
                    It also means knowing which funding conditions actually trip audits, which board reporting gaps turn into real problems, and when a compliance issue needs escalating versus just fixing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="new-auditing-testimonials-wrap assurance-testimonials-wrap">
          <div className="container new-auditing-shell">
            <div className="new-auditing-testimonials">
              <div className="new-auditing-testimonial-carousel">
                <button
                  type="button"
                  className="new-auditing-testimonial-side-arrow new-auditing-testimonial-side-arrow-left"
                  onClick={shiftTestimonialsPrevious}
                  aria-label="Previous testimonials"
                >
                  ‹
                </button>

                <div className="new-auditing-testimonial-track">
                  <div className="row g-4 justify-content-start">
                    {visibleTestimonials.map((item, idx) => (
                      <div className="col-lg-4 col-md-6" key={`${testimonialPageIdx}-${idx}`}>
                        <article className="new-auditing-testimonial-card">
                          <p className="new-auditing-testimonial-preview-text">{item.text}</p>
                          <button
                            type="button"
                            className="new-auditing-testimonial-readmore"
                            onClick={() => openTestimonial(testimonialStart + idx)}
                          >
                            Read more
                          </button>
                          <div className="new-auditing-testimonial-meta">
                            <span>{item.author}</span>
                            <img
                              src={item.logo}
                              alt={item.logoAlt}
                              className="new-auditing-testimonial-logo"
                            />
                          </div>
                        </article>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  className="new-auditing-testimonial-side-arrow new-auditing-testimonial-side-arrow-right"
                  onClick={shiftTestimonialsNext}
                  aria-label="Next testimonials"
                >
                  ›
                </button>
              </div>

              <div className="new-auditing-testimonial-dots" aria-hidden="true">
                {Array.from({ length: totalTestimonialPages }).map((_, idx) => (
                  <span key={idx} className={testimonialPageIdx === idx ? 'active' : ''}></span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="new-auditing-final-cta" style={{ backgroundImage: `url(${ctaBg})` }}>
          <div className="new-auditing-final-cta-overlay"></div>
          <div className="container">
            <div className="new-auditing-final-cta-content">
              <h2>Ready for a financial partner who already understands the NFP world?</h2>
              <p>Let&apos;s talk about your funding structure, your reporting obligations, and where you need support.</p>
              <button
                type="button"
                className="new-auditing-final-cta-btn"
                onClick={() => window.dispatchEvent(new Event('open-consultation-modal'))}
              >
                Enquire Now
              </button>
            </div>
          </div>
        </section>

        {activeTestimonial && (
          <div
            className="new-auditing-testimonial-modal-backdrop"
            onClick={closeTestimonial}
          >
            <article
              className="new-auditing-testimonial-modal"
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Client testimonial"
            >
              <p className="new-auditing-testimonial-full-text">{activeTestimonial.text}</p>
              <div className="new-auditing-testimonial-meta">
                <span>{activeTestimonial.author}</span>
                <img
                  src={activeTestimonial.logo}
                  alt={activeTestimonial.logoAlt}
                  className="new-auditing-testimonial-logo"
                />
              </div>
            </article>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
});

export default NotProfit;
