import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useMeta } from '../utils/useMeta.js';
import Header from '../Dashboard/Header.jsx';
import Footer from '../Dashboard/Footer.jsx';
import bookkeepingHero from '../assets/assets/bookkeeping1.jpg';
import notForProfitsImage from '../assets/assets/notforprofits.jpg';
import growthStageImage from '../assets/assets/growthstage.jpg';
import bookkeepingWhyImage from '../assets/assets/bookkeeping2.jpg';
import bookkeepingCtaBg from '../assets/assets/audit-hero-Bk5pu4Jp.jpg';
import logoIpsum265 from '../assets/logo/logoipsum-265.png';
import logoIpsum287 from '../assets/logo/logoipsum-287.png';
import logoIpsum331 from '../assets/logo/logoipsum-331.png';
import logoIpsum214 from '../assets/logo/logoipsum-214.png';


const BookkeepingCashFlow = React.memo(() => {
  const { meta } = useMeta(5);
  const [activeTestimonialIdx, setActiveTestimonialIdx] = React.useState(null);
  const [testimonialPageIdx, setTestimonialPageIdx] = React.useState(0);

  const challengeItems = [
    "You're drowning in daily financial tasks – invoices, payroll, bills and reconciliations – and losing hours every week.",
    "Cash flow feels like chaos: bills get missed, suppliers may be paid twice, and you're never quite sure what's really in the bank.",
    "Admin staff are 'doing their best' with the accounts but don't have specialist training.",
    "Xero, MYOB or QuickBooks are technically 'set up' – but dashboards, reports and cash-flow tools aren't truly working for you.",
  ];

  const solutionItems = [
    'Day-to-day bookkeeping and general ledger',
    'Accounts Receivable and Accounts Payable',
    'Payroll and superannuation processing',
    'Bank and Account reconciliations',
    'BAS and GST preparation support',
    'Asset registers and basic fixed asset management',
    'Monthly and Quarterly management reports, ready for your tax accountant or auditors',
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Onboard & Set Up',
      text: 'We get across your systems, chart of accounts, and reporting needs from day one.',
    },
    {
      step: '2',
      title: 'Ongoing Processing',
      text: 'Our Sri Lanka resources team handles the day-to-day work on a regular cycle.',
    },
    {
      step: '3',
      title: 'Monthly Check-In',
      text: 'Your Canberra contact reviews everything and flags anything that needs your attention.',
    },
    {
      step: '4',
      title: 'Reporting',
      text: 'Clear, timely numbers you can actually use to make decisions - not just file away.',
    },
  ];

  const includedItems = [
    'Day-to-day bookkeeping and bank reconciliations',
    'Monthly and quarterly management accounts',
    'AP and AR processing',
    'Payroll processing and compliance',
    'Year-end financial statement preparation',
  ];

  const gainItems = [
    {
      icon: 'bi bi-shield-check',
      title: 'Time Back',
      text: 'Up to 30% of your time back to reinvest into sales, strategy and service.',
    },
    {
      icon: 'bi bi-safe2',
      title: 'Clear Visibility',
      text: "Crystal-clear cash flow visibility - you know what's due, when, and whether you can cover it.",
    },
    {
      icon: 'bi bi-stopwatch',
      title: 'Scalable Foundation',
      text: 'A scalable financial foundation that grows with you.',
    },
    {
      icon: 'bi bi-bullseye',
      title: 'Better Decisions',
      text: 'Streamlined year-end, lower tax and audit fees, and better decision-making.',
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
      text: 'This platform has revolutionized our business operations. The seamless integration and powerful features have helped us scale our marketing efforts efficiently while maintaining excellent customer relationships.',
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
      <main className="new-auditing-page bookkeeping-page">
        <section className="new-auditing-hero">
          <div className="new-auditing-hero-media">
            <img
              src={bookkeepingHero}
              alt="Bookkeeping and accounting team"
              className="new-auditing-hero-image"
            />
          </div>
          <div className="new-auditing-hero-content">
            <h1 className="new-auditing-hero-title">
              Numbers You Can Actually Rely On, Every Single Month.
            </h1>
            <p className="new-auditing-hero-subtitle">
              Bookkeeping and accounting for not-for-profits and growth-stage
              SMEs, handled by an experienced team - so you&apos;re never making
              decisions on guesswork.
            </p>
            <button
              type="button"
              className="new-auditing-hero-btn"
              onClick={() => window.dispatchEvent(new Event('open-consultation-modal'))}
            >
              Enquire Now
            </button>
          </div>
        </section>

        <section className="new-auditing-content-wrap bookkeeping-content-wrap">
          <div className="container new-auditing-shell">
            <section className="new-auditing-outcomes">
              <div className="row g-5">
                <div className="col-lg-6">
                  <h2 className="new-auditing-column-title">The challenges we see every day</h2>
                  <p className="new-auditing-subheading text-start mb-4">
                    Over time, messy books lead to a stressful tax time, higher
                    audit fees, penalties and poor decisions based on unreliable
                    numbers.
                  </p>
                  <ul className="new-auditing-list new-auditing-list-cost">
                    {challengeItems.map((item) => (
                      <li key={item}>
                        <i className="bi bi-x" aria-hidden="true"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="col-lg-6">
                  <h2 className="new-auditing-column-title">Our bookkeeping & accounting solution</h2>
                  <p className="new-auditing-subheading text-start mb-4">
                    We act as your outsourced accounting back-office, handling:
                  </p>
                  <ul className="new-auditing-list new-auditing-list-how">
                    {solutionItems.map((item) => (
                      <li key={item}>
                        <i className="bi bi-check" aria-hidden="true"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section className="new-auditing-process">
              <p className="new-auditing-pill">How we work</p>

              <div className="row g-4">
                {processSteps.map((step) => (
                  <div className="col-md-6 col-xl-3" key={step.step}>
                    <article className="new-auditing-step-card">
                      <span className="new-auditing-step-number">{step.step}</span>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </article>
                  </div>
                ))}
              </div>
            </section>

            <section className="new-auditing-included">
              <p className="new-auditing-pill">What&apos;s included</p>

              <div className="new-auditing-included-list">
                {includedItems.map((item) => (
                  <article className="new-auditing-included-item" key={item}>
                    <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
                    <span>{item}</span>
                  </article>
                ))}
              </div>
            </section>

            <section className="bookkeeping-gains-section">
              <p className="new-auditing-pill">What you gain</p>

              <div className="row g-4 justify-content-center bookkeeping-gains-grid">
                {gainItems.map((item) => (
                  <div className="col-md-6 col-lg-5" key={item.title}>
                    <article className="bookkeeping-gain-card">
                      <i className={`${item.icon} bookkeeping-gain-icon`} aria-hidden="true"></i>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </article>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>

        <section className="bookkeeping-lower-section">
          <div className="container new-auditing-shell">
            <section className="bookkeeping-audience-section">
              <p className="new-auditing-pill">Who this is for</p>

              <div className="row g-4">
                <div className="col-lg-6">
                  <article className="bookkeeping-audience-card">
                    <img src={notForProfitsImage} alt="Not-for-profits discussion" className="bookkeeping-audience-image" />
                    <h3>Not-For-Profits</h3>
                    <p>
                      Community service organisations, disability providers,
                      housing associations $3M to $30M. You carry audit
                      obligations, ACNC requirements, restricted funds and board
                      accountability.
                    </p>
                    <p>You need a firm that already speaks your language.</p>
                    <a href="/not-profit">Learn More NFP Services</a>
                  </article>
                </div>

                <div className="col-lg-6">
                  <article className="bookkeeping-audience-card">
                    <img src={growthStageImage} alt="Growth-stage SME planning" className="bookkeeping-audience-image" />
                    <h3>Growth-Stage SMEs</h3>
                    <p>
                      Private businesses turning over $1M - $30M who&apos;ve
                      outgrown DIY bookkeeping.
                    </p>
                    <p>
                      You&apos;re growing fast but your financial infrastructure
                      hasn&apos;t kept pace. You need CFO-level thinking without
                      the full-time salary.
                    </p>
                    <a href="/fractional-cfo">Learn More SME Services</a>
                  </article>
                </div>
              </div>
            </section>

            <section className="bookkeeping-why-section">
              <div className="row g-4 align-items-center">
                <div className="col-lg-6">
                  <div className="bookkeeping-why-image-wrap">
                    <img
                      src={bookkeepingWhyImage}
                      alt="Bookkeeping team oversight"
                      className="bookkeeping-why-image"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <p className="new-auditing-pill bookkeeping-why-pill">
                    Why FinReach for bookkeeping & accounting
                  </p>
                  <h3 className="bookkeeping-why-title">
                    Senior oversight on every set of books.
                  </h3>
                  <p className="bookkeeping-why-text">
                    Our Sri Lankan resource team is highly qualified and
                    well-trained to support local requirements, with a Canberra
                    principal reviewing your numbers every month - so small
                    issues get caught before they become big ones.
                  </p>
                </div>
              </div>
            </section>
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

        <section className="new-auditing-final-cta" style={{ backgroundImage: `url(${bookkeepingCtaBg})` }}>
          <div className="new-auditing-final-cta-overlay"></div>
          <div className="container">
            <div className="new-auditing-final-cta-content">
              <h2>Tired of chasing your own numbers?</h2>
              <p>Let&apos;s talk about what your books actually need.</p>
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

export default BookkeepingCashFlow;
