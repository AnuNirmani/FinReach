import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useMeta } from '../utils/useMeta.js';
import Header from '../Dashboard/Header.jsx';
import Footer from '../Dashboard/Footer.jsx';
import '../Dashboard/Dashboard.css';
import assuranceHero from '../assets/assets/assurance1.jpg';
import notForProfitsImage from '../assets/assets/notforprofits.jpg';
import growthStageImage from '../assets/assets/growthstage.jpg';
import assuranceTeamImage from '../assets/assets/assurance2.jpg';
import assuranceCtaBg from '../assets/assets/157858.jpg';
import logoIpsum265 from '../assets/logo/logoipsum-265.png';
import logoIpsum287 from '../assets/logo/logoipsum-287.png';
import logoIpsum331 from '../assets/logo/logoipsum-331.png';
import logoIpsum214 from '../assets/logo/logoipsum-214.png';
import grantAcquittalIcon from '../assets/icon/Reliable statements.png';
import reviewEngagementsIcon from '../assets/icon/Review engagements.png';
import aupIcon from '../assets/icon/AUP.png';
import complianceAssuranceIcon from '../assets/icon/Guaranteed compliance.png';
import internalControlAssuranceIcon from '../assets/icon/Stronger controls.png';
import assuranceApproachExperienceIcon from '../assets/icon/资源 31.png';
import assuranceApproachSupportIcon from '../assets/icon/资源 32.png';
import assuranceApproachPlanningIcon from '../assets/icon/资源 33.png';
import assuranceApproachRecommendationsIcon from '../assets/icon/资源 34.png';


const AssuranceFunding = React.memo(() => {
  const { meta } = useMeta(7);
  const [activeTestimonialIdx, setActiveTestimonialIdx] = React.useState(null);
  const [testimonialPageIdx, setTestimonialPageIdx] = React.useState(0);

  const solutionCards = [
    {
      image: grantAcquittalIcon,
      imageAlt: 'Grant acquittal audit support icon',
      title: 'Grant Acquittal Audit Support',
      text: "From setting up grant tracking properly to preparing documentation that's ready for review.",
    },
    {
      image: reviewEngagementsIcon,
      imageAlt: 'Review engagements icon',
      title: 'Review Engagements',
      text: 'Ideal for NFPs under $3M revenue that need stakeholder reassurance without paying for a full audit.',
    },
    {
      image: aupIcon,
      imageAlt: 'Agreed-upon procedures icon',
      title: 'Agreed-Upon Procedures (AUP)',
      text: 'Targeted work over high-risk areas like specific transactions, compliance questions or inventory counts.',
    },
    {
      image: complianceAssuranceIcon,
      imageAlt: 'Compliance assurance icon',
      title: 'Compliance Assurance',
      text: 'Focused assessments of particular regulations or contracts in regulated sectors.',
    },
    {
      image: internalControlAssuranceIcon,
      imageAlt: 'Internal control assurance icon',
      title: 'Internal Control Assurance',
      text: 'Independent assessment of the strength of your controls to protect against fraud and misstatements.',
    },
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Understand The Requirement',
      text: 'We clarify exactly what your funder, lender, or stakeholder needs before any work begins.',
    },
    {
      step: '2',
      title: 'Scope The Engagement',
      text: 'Right-sized to the requirement - not over-engineered, not under-delivered.',
    },
    {
      step: '3',
      title: 'Independent Review',
      text: 'Our technical team carries out the assurance work to the relevant standard.',
    },
    {
      step: '4',
      title: 'Deliver With Clarity',
      text: 'A report your stakeholders can act on immediately, with nothing left to interpret.',
    },
  ];

  const includedItems = [
    'Grant acquittal and funding compliance assurance for NFPs',
    'Agreed-upon procedures engagements for specific stakeholder requirements',
    'Review engagements for organisations',
    'Internal control assurance',
  ];

  const approachItems = [
    {
      image: assuranceApproachExperienceIcon,
      imageAlt: 'Assurance experience icon',
      text: '25 years of assurance experience across small and medium enterprises, NFPs, government and regulated industries.',
    },
    {
      image: assuranceApproachSupportIcon,
      imageAlt: 'Year-round audit readiness support icon',
      text: 'Year-round support – we help you build audit-readiness as an ongoing habit, not a last-minute scramble.',
    },
    {
      image: assuranceApproachPlanningIcon,
      imageAlt: 'Clear planning and timelines icon',
      text: 'Clear planning and timelines – detailed request lists, reverse-engineered deadlines and no surprises.',
    },
    {
      image: assuranceApproachRecommendationsIcon,
      imageAlt: 'Actionable recommendations icon',
      text: "Actionable recommendations – we don't just report issues; we help you strengthen governance, controls and risk management.",
    },
  ];

  const whoItems = [
    {
      image: notForProfitsImage,
      imageAlt: 'Not-for-profits assurance consultation',
      title: 'Not-For-Profits',
      paragraphs: [
        'Community service organisations, disability providers, housing associations $3M to $30M. You carry audit obligations, ACNC requirements, restricted funds and board accountability.',
        'You need a firm that already speaks your language.',
      ],
      linkLabel: 'Learn More NFP Services',
      linkHref: '/not-profit',
    },
    {
      image: growthStageImage,
      imageAlt: 'Growth-stage SMEs assurance meeting',
      title: 'Growth-Stage SMEs',
      paragraphs: [
        "Private businesses turning over $1M - $30M who've outgrown DIY bookkeeping.",
        "You're growing fast but your financial infrastructure hasn't kept pace. You need CFO-level thinking without the full-time salary.",
      ],
      linkLabel: 'Learn More SME Services',
      linkHref: '/growth-stage',
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
      <main className="assurance-page--assurance">
        <section className="assurance-hero">
          <div className="assurance-hero-media">
            <img src={assuranceHero} alt="Assurance consultation" className="assurance-hero-image" />
          </div>
          <div className="assurance-hero-content">
            <h1 className="assurance-hero-title">Assurance That Holds Up Under Scrutiny.</h1>
            <p className="assurance-hero-subtitle">
              Independent assurance for not-for-profits and growth-stage SMEs - giving your board, funders, and stakeholders confidence in the numbers behind every decision.
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
              <h2 className="assurance-heading">The headaches we remove</h2>

              <ul className="assurance-problem-list">
                <li>
                  <i className="bi bi-x-lg" aria-hidden="true"></i>
                  <span>Grant acquittal stress: tight deadlines, messy records and limited staff capacity.</span>
                </li>
                <li>
                  <i className="bi bi-x-lg" aria-hidden="true"></i>
                  <span>Confusion over whether you truly need a full audit or if a review or agreed-upon procedures would be sufficient.</span>
                </li>
                <li>
                  <i className="bi bi-x-lg" aria-hidden="true"></i>
                  <span>Operating in highly regulated sectors like aged care, health or education without a dedicated compliance team.</span>
                </li>
                <li>
                  <i className="bi bi-x-lg" aria-hidden="true"></i>
                  <span>Audit readiness becoming an annual panic instead of an ongoing, manageable process.</span>
                </li>
              </ul>

              <p className="assurance-headaches-note">
                Left unaddressed, these issues can lead to missed funding, higher costs, staff burnout, damaged credibility and even legal trouble.
              </p>
            </section>

            <section className="assurance-solutions-block">
              <h2 className="assurance-heading">Flexible assurance solutions</h2>
              <p className="assurance-subheading">We tailor assurance to your needs and budget:</p>

              <div className="row g-4 justify-content-center">
                {solutionCards.map((item, idx) => (
                  <div className="col-md-6 col-xl-4" key={item.title}>
                    <article className="assurance-solution-card">
                      <img src={item.image} alt={item.imageAlt} className="assurance-solution-icon" />
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </article>
                  </div>
                ))}
              </div>
            </section>

            <section className="assurance-process-block">
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

            <section className="assurance-included-block">
              <p className="assurance-pill">What&apos;s included</p>

              <div className="assurance-included-list">
                {includedItems.map((item) => (
                  <article className="assurance-included-item" key={item}>
                    <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
                    <span>{item}</span>
                  </article>
                ))}
              </div>
            </section>

            <section className="assurance-approach-block">
              <p className="assurance-pill">Our approach</p>

              <div className="row g-4">
                {approachItems.map((item) => (
                  <div className="col-md-6 col-xl-3" key={item.text}>
                    <article className="assurance-approach-card">
                      <img src={item.image} alt={item.imageAlt} className="assurance-approach-icon" />
                      <p>{item.text}</p>
                    </article>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>

        <section className="assurance-who-section">
          <div className="container assurance-shell">
            <p className="assurance-pill">Who this is for</p>

            <div className="row g-5 justify-content-center assurance-who-grid">
              {whoItems.map((item) => (
                <div className="col-lg-6" key={item.title}>
                  <article className="assurance-who-card">
                    <img src={item.image} alt={item.imageAlt} className="assurance-who-image" />
                    <h3>{item.title}</h3>
                    {item.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    <a href={item.linkHref}>{item.linkLabel}</a>
                  </article>
                </div>
              ))}
            </div>

            <div className="row g-4 align-items-center assurance-why-row">
              <div className="col-lg-6">
                <div className="assurance-why-image-wrap">
                  <img src={assuranceTeamImage} alt="FinReach assurance leadership team" className="assurance-why-image" />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="assurance-why-copy">
                  <p className="assurance-pill assurance-pill-left">Why FinReach for assurance</p>
                  <h2>Independence you can rely on. Insight you can use.</h2>
                  <p>
                    Assurance only matters if the people relying on it trust it completely. Our Sri Lanka-based technical team applies the same rigour as a Big Four assurance practice, with a Canberra principal who understands exactly what your funders or stakeholders are actually asking for - so the engagement gets scoped right the first time. If you require local resources for the assignment, we are available and ready to support your needs.
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

        <section className="new-auditing-final-cta" style={{ backgroundImage: `url(${assuranceCtaBg})` }}>
          <div className="new-auditing-final-cta-overlay"></div>
          <div className="container">
            <div className="new-auditing-final-cta-content">
              <h2>Need assurance your stakeholders will trust?</h2>
              <p>Tell us what&apos;s being asked of you, and we&apos;ll scope exactly what&apos;s needed.</p>
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

export default AssuranceFunding;
