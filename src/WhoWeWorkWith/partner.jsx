import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../Dashboard/Header.jsx';
import Footer from '../Dashboard/Footer.jsx';
import './partner.css';
import heroImage from '../assets/assets/DSC03803.jpg';
import introImage from '../assets/assets/tmpt9og_3fn.jpg';
import partnerImage from '../assets/assets/tmph6w507ot.jpg';
import ctaImage from '../assets/assets/157858.jpg';

const Partner = React.memo(() => {
	const collaborationPoints = [
		'A direct line to Don or the Canberra team',
		'Clear visibility on how your referred clients are going',
		'A relationship that works both ways',
		'Simple communication and senior-level oversight',
	];

	return (
		<>
			<Helmet>
				<title>Partner With Us | FinReach</title>
				<meta
					name="description"
					content="Partner with FinReach to refer not-for-profits and growth-stage SMEs with confidence."
				/>
			</Helmet>

			<Header />

			<main className="partner-page">
				<section className="partner-hero">
					<div className="partner-hero-media">
						<img
							src={heroImage}
							alt="FinReach partner discussion"
							className="partner-hero-image"
						/>
					</div>

					<div className="partner-hero-copy">
						<h1>Refer With Confidence.</h1>
						<p>
							If you work with NFPs and growing SMEs, partner with a firm that will look after them properly and look after the relationship with you, too.
						</p>

						<button
							type="button"
							className="partner-btn partner-btn-primary enquire-now-btn-standard"
							onClick={() => window.dispatchEvent(new Event('open-consultation-modal'))}
						>
							Enquire Now
						</button>
					</div>
				</section>

				<section className="partner-intro-card-wrap">
					<div className="partner-intro-card">
						<p className="partner-pill">Who This Is For</p>
						<p className="partner-intro-text">
							We partner with the people and organisations already in the orbit of NFPs and growth-stage SMEs - bookkeepers, lawyers, business advisors, NFP umbrella bodies and sector networks, and other professionals who regularly get asked: "Do you know a good accountant?"
						</p>
					</div>
				</section>

				<section className="partner-section partner-reason-section">
					<div className="partner-section-heading">
						<p className="partner-pill">Why Refer To FinReach</p>
						<p className="partner-section-lead">
							When you refer a client to us, you're putting your own reputation on the line. We take that seriously. Every referred client gets the same senior-level oversight from Don personally, the same technically rigorous delivery, and the same straightforward communication, so the referral reflects well on you, every time.
						</p>
					</div>

					<div className="partner-feature-image-wrap partner-center-image-wrap">
						<img
							src={introImage}
							alt="FinReach team meeting"
							className="partner-feature-image"
						/>
					</div>

					<div className="partner-center-copy">
						<h2>Built for the NFP sector specifically</h2>
						<p>
							When you refer a client to us, you're putting your own reputation on the line. We take that seriously. Every referred client gets the same senior-level oversight from Don personally, the same technically rigorous delivery, and the same straightforward communication, so the referral reflects well on you, every time.
						</p>
					</div>
				</section>

				<section className="partner-section partner-split-section">
					<div className="partner-split-grid">
						<div className="partner-feature-image-wrap">
							<img
								src={partnerImage}
								alt="Partner meeting with FinReach"
								className="partner-feature-image"
							/>
						</div>

						<div className="partner-split-copy">
							<p className="partner-pill partner-pill-left">What Partnership Looks Like</p>
							<p>
								We keep it simple and personal, a direct line to Don or the Canberra team, visibility on how your referred clients are going, and a genuine two-way relationship. We're always happy to return the favour where it makes sense for your business too.
							</p>
						</div>
					</div>
				</section>

				<section className="partner-referral-cta" style={{ backgroundImage: `url(${ctaImage})` }}>
					<div className="partner-referral-cta-overlay" />
					<div className="partner-referral-cta-content">
						<h2>Know an organisation that needs us?</h2>
						<p>
							If you'd like to explore a referral partnership, we'd genuinely like to meet you, not fill out a form and wait.
						</p>

						<button
							type="button"
							className="partner-btn partner-btn-primary enquire-now-btn-standard"
							onClick={() => window.dispatchEvent(new Event('open-consultation-modal'))}
						>
							Enquire Now
						</button>
					</div>
				</section>

			</main>

			<Footer />
		</>
	);
});

export default Partner;
