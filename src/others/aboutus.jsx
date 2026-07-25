import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useMeta } from '../utils/useMeta'
import Header from '../Dashboard/Header'
import Footer from '../Dashboard/Footer'
import '../Dashboard/Dashboard.css'
import './aboutus.css'
import aboutUsHero from '../assets/assets/DSC03629.jpg'
import aboutUsAudienceImage from '../assets/assets/DSC03701.jpg'
import integrityIcon from '../assets/icon/Integrity.png'
import excellenceIcon from '../assets/icon/Excellence.png'
import partnershipIcon from '../assets/icon/Partnership.png'
import communityIcon from '../assets/icon/Community.png'
import clarityIcon from '../assets/icon/Clarity.png'
import ctaBgImage from '../assets/assets/15628.jpg'
import communitiesAtWorkLogo from '../assets/icon/Communities-as-work.png'
import carersAustraliaLogo from '../assets/icon/Carers-AU.png'
import wodenCommunityServicesLogo from '../assets/icon/Woden-Community-Services.png'

const AboutUs = () => {
	const { meta } = useMeta(2)

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

			<main className="about-us-page">
				<section
          className="about-us-hero"
          style={{
            backgroundImage: `url(${aboutUsHero})`,
          }}
        >
          <div className="about-us-hero-overlay"></div>
          <div className="about-us-hero-inner">
            <div className="about-us-hero-card">
              <h1 className="about-us-hero-title">
                Financial Confidence For The Organisations That Matter.
              </h1>
              <p className="about-us-hero-subtitle">
                FinReach exists for the not-for-profits and growth-stage SMEs doing the work that matters most in our community and the leaders who need a financial partner they can actually trust.
              </p>
              <button
                type="button"
                className="about-us-hero-cta"
                onClick={() => window.dispatchEvent(new Event('open-consultation-modal'))}
              >
                Book A No-Obligation Consultation
              </button>
            </div>
          </div>
        </section>

        <div className="about-us-cards-wrap">
          <div className="about-us-shell">
            <article className="about-us-story-card">
              <h2 className="about-us-story-title">Where we started</h2>
              <p className="about-us-story-text">
                Don Siriwardana started FinReach with a simple frustration: too many good organisations; the NFPs holding communities together, the growing businesses doing real work, were stuck choosing between accounting firms that were either too expensive to access properly, or too small to trust with anything complex.
              </p>
              <p className="about-us-story-text">
                He&apos;d spent years working inside larger firms, seeing first-hand what high-calibre financial delivery actually looked like and seeing just as clearly that most of the organisations who needed it most could never afford it. FinReach was built to close that gap.
              </p>
            </article>
          </div>
        </div>

        <section className="about-us-differently-section">
          <div className="container about-us-content-shell text-center">
            <h2 className="about-us-section-title">How we do it differently</h2>
            <p className="about-us-section-text">
              We built a model that gives you senior-level oversight here in Canberra, backed by a technically trained delivery team. You get a direct relationship with the people who know your organisation and your sector and the depth and capacity of a much larger firm behind every piece of work.
            </p>
            <p className="about-us-section-text">
              It means an NFP with a six-person board can get the same calibre of audit and assurance work as a much bigger organisation. It means a growing SME doesn&apos;t have to choose between "affordable" and "actually good." That&apos;s not a footnote to what we do, it&apos;s the whole point of how we built FinReach.
            </p>
          </div>
        </section>

        <section className="about-us-audience-section">
          <div className="container about-us-content-shell">
            <div className="row align-items-center about-us-audience-row">
              <div className="col-xl-5 col-lg-6">
                <img
                  src={aboutUsAudienceImage}
                  alt="FinReach leadership team"
                  className="about-us-audience-image"
                />
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="about-us-audience-copy">
                  <h2 className="about-us-section-title about-us-audience-title">Who we&apos;re here for</h2>
                  <p className="about-us-audience-text">
                    We work primarily with <strong>not-for-profits</strong> - community services, care organisations, advocacy groups - who need a financial partner that understands ACNC obligations, board reporting, and funding accountability, not just numbers. We also work with <strong>growth-stage SMEs</strong> across ACT, NSW and VIC who&apos;ve outgrown their bookkeeper but aren&apos;t ready for (or interested in) a big, impersonal firm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-us-purpose-section">
          <div className="container about-us-values-shell text-center">
            <h2 className="about-us-section-title about-us-purpose-title">Our purpose, in plain terms</h2>
            <p className="about-us-purpose-text">
              Our mission is simple: innovative accounting and assurance services that enable client organisational growth and give business leaders genuine peace of mind. We want to be the most trusted accounting and assurance firm in ACT, NSW and VIC for medium-sized NFPs and SMEs - not the biggest, the most trusted.
            </p>
          </div>
        </section>

        <section className="about-us-values-section">
          <div className="container about-us-values-shell">
            <div className="text-center">
              <span className="about-us-values-badge">What we stand for</span>
            </div>

            <div className="about-us-values-grid">
              <article className="about-us-value-card">
                <img src={integrityIcon} alt="Integrity" className="about-us-value-image" />
                <h3 className="about-us-value-title">Integrity</h3>
                <p className="about-us-value-text">We hold ourselves to account and take our financial obligations seriously</p>
              </article>

              <article className="about-us-value-card">
                <img src={excellenceIcon} alt="Excellence" className="about-us-value-image" />
                <h3 className="about-us-value-title">Excellence</h3>
                <p className="about-us-value-text">Technically rigorous work, every time</p>
              </article>

              <article className="about-us-value-card">
                <img src={partnershipIcon} alt="Partnership" className="about-us-value-image" />
                <h3 className="about-us-value-title">Partnership</h3>
                <p className="about-us-value-text">We sit on your side of the table</p>
              </article>

              <article className="about-us-value-card">
                <img src={communityIcon} alt="Community" className="about-us-value-image" />
                <h3 className="about-us-value-title">Community</h3>
                <p className="about-us-value-text">We measure our success by the impact our clients have</p>
              </article>

              <article className="about-us-value-card">
                <img src={clarityIcon} alt="Clarity" className="about-us-value-image" />
                <h3 className="about-us-value-title">Clarity</h3>
                <p className="about-us-value-text">No jargon, no obscured numbers, ever</p>
              </article>
            </div>
          </div>
        </section>

        <section className="about-us-proof-section">
          <div className="container about-us-proof-shell text-center">
            <h2 className="about-us-section-title about-us-proof-title">Proof, not promises</h2>

            <div className="about-us-proof-marquee" aria-label="Partner logos">
              <div className="about-us-proof-track">
                <div className="about-us-proof-set">
                  <img src={communitiesAtWorkLogo} alt="Communities at Work" className="about-us-proof-logo about-us-proof-logo--caw" />
                  <img src={wodenCommunityServicesLogo} alt="Woden Community Service" className="about-us-proof-logo about-us-proof-logo--woden" />
                  <img src={carersAustraliaLogo} alt="Carers Australia" className="about-us-proof-logo about-us-proof-logo--carers" />
                </div>
                <div className="about-us-proof-set" aria-hidden="true">
                  <img src={communitiesAtWorkLogo} alt="" className="about-us-proof-logo about-us-proof-logo--caw" />
                  <img src={wodenCommunityServicesLogo} alt="" className="about-us-proof-logo about-us-proof-logo--woden" />
                  <img src={carersAustraliaLogo} alt="" className="about-us-proof-logo about-us-proof-logo--carers" />
                </div>
                <div className="about-us-proof-set" aria-hidden="true">
                  <img src={communitiesAtWorkLogo} alt="" className="about-us-proof-logo about-us-proof-logo--caw" />
                  <img src={wodenCommunityServicesLogo} alt="" className="about-us-proof-logo about-us-proof-logo--woden" />
                  <img src={carersAustraliaLogo} alt="" className="about-us-proof-logo about-us-proof-logo--carers" />
                </div>
                <div className="about-us-proof-set" aria-hidden="true">
                  <img src={communitiesAtWorkLogo} alt="" className="about-us-proof-logo about-us-proof-logo--caw" />
                  <img src={wodenCommunityServicesLogo} alt="" className="about-us-proof-logo about-us-proof-logo--woden" />
                  <img src={carersAustraliaLogo} alt="" className="about-us-proof-logo about-us-proof-logo--carers" />
                </div>
                <div className="about-us-proof-set" aria-hidden="true">
                  <img src={communitiesAtWorkLogo} alt="" className="about-us-proof-logo about-us-proof-logo--caw" />
                  <img src={wodenCommunityServicesLogo} alt="" className="about-us-proof-logo about-us-proof-logo--woden" />
                  <img src={carersAustraliaLogo} alt="" className="about-us-proof-logo about-us-proof-logo--carers" />
                </div>
              </div>
            </div>

            <p className="about-us-proof-text">
              We&apos;re proud to work alongside organisations like Woden Community Services, Carers Australia and Communities at Work - NFPs doing genuinely important work in our community. If you&apos;re in that same boat, we&apos;d like to meet you.
            </p>
          </div>
        </section>

        <section
          className="about-us-cta-section"
          style={{ backgroundImage: `url(${ctaBgImage})` }}
        >
          <div className="about-us-cta-overlay"></div>
          <div className="about-us-cta-content">
            <h2 className="about-us-cta-heading">Let&apos;s see if we&apos;re the right fit for your organisation.</h2>
            <button
              type="button"
              className="about-us-cta-btn"
              onClick={() => window.dispatchEvent(new Event('open-consultation-modal'))}
            >
              Enquire Now
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default AboutUs
