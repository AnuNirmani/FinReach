import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../Dashboard/Header.jsx';
import Footer from '../Dashboard/Footer.jsx';
import './ourservices.css';

import heroImage from '../assets/assets/about2.webp';
import auditImage from '../assets/assets/audit1.jpg';
import assuranceImage from '../assets/assets/assurance1.jpg';
import bookkeepingImage from '../assets/assets/bookkeeping1.jpg';
import cfoImage from '../assets/assets/cfo1.jpg';
import featureImage from '../assets/assets/DSC03573.jpg';
import ctaImage from '../assets/assets/2.png';

const serviceCards = [
	{
		title: 'Auditing',
		image: auditImage,
		imageAlt: 'Audit consultation',
		description:
			'Risk-based audits delivered by a team that understands NFP and growth-stage business environments. Compliant, on time, with insight you can actually use.',
		to: '/auditing',
	},
	{
		title: 'Assurance',
		image: assuranceImage,
		imageAlt: 'Assurance consultation',
		description:
			'Independent assurance that gives your board, funders, and stakeholders confidence in the numbers - without the big-firm price tag.',
		to: '/assurance',
	},
	{
		title: 'Bookkeeping & Accounting',
		image: bookkeepingImage,
		imageAlt: 'Bookkeeping and accounting support',
		description:
			"Accurate, timely financials handled by an experienced team, so you're never making decisions on guesswork.",
		to: '/bookkeeping-accounting',
	},
	{
		title: 'Fractional CFO',
		image: cfoImage,
		imageAlt: 'Fractional CFO support',
		description:
			'Senior financial strategy and decision support, on demand - without the cost of a full-time hire.',
		to: '/fractional-cfo',
	},
];

const OurServices = () => {
	return (
		<>
			<Helmet>
				<title>Our Services | FinReach</title>
				<meta
					name="description"
					content="Explore FinReach services across auditing, assurance, bookkeeping & accounting, and fractional CFO support."
				/>
			</Helmet>

			<Header />

			<main className="our-services-page">
				<section className="our-services-hero">
					<div className="our-services-hero-media" aria-hidden="true">
						<img src={heroImage} alt="Canberra landscape" className="our-services-hero-image" />
						<div className="our-services-hero-overlay" />
					</div>

					<div className="container our-services-hero-inner">
						<h1>Expertise Across The Full Financial Picture.</h1>
						<p>One team. Every stage of your financial journey, covered.</p>
					</div>
				</section>

				<section className="our-services-cards-wrap">
					<div className="our-services-shell">
						<div className="our-services-grid">
							{serviceCards.map((card) => (
								<div className="our-services-grid-item" key={card.title}>
									<article className="our-services-card">
										<div className="our-services-card-image-wrap">
											<img src={card.image} alt={card.imageAlt} className="our-services-card-image" />
										</div>
										<div className="our-services-card-body">
											<h2>{card.title}</h2>
											<p>{card.description}</p>
											<Link to={card.to} className="our-services-card-link">
												Learn More
											</Link>
										</div>
									</article>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="our-services-feature-section">
					<div className="container our-services-feature-shell">
						<div className="row align-items-center g-5">
							<div className="col-lg-6">
								<div className="our-services-feature-image-wrap">
									<img
										src={featureImage}
										alt="FinReach team working with a client"
										className="our-services-feature-image"
									/>
								</div>
							</div>

							<div className="col-lg-6">
								<div className="our-services-feature-copy">
									<h2>The same expertise. A smarter delivery model.</h2>
									<p>
										Our Canberra team manages every client relationship directly.
										Behind them, a Big Four-trained technical team in Sri Lanka
										delivers the work, giving you boutique attention with the
										rigour of a much larger firm, at a price that makes sense for
										your organisation.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="our-services-fit-section">
					<div className="our-services-fit-shell">
						<div className="our-services-fit-copy">
							<h2>Not Sure Where You Fit?</h2>
							<p>See how we work with:</p>
							<div className="our-services-fit-actions">
								<Link to="/not-profit" className="our-services-fit-btn our-services-fit-btn--lime">
									Not-for-Profits
								</Link>
								<Link to="/growth-stage" className="our-services-fit-btn our-services-fit-btn--navy">
									Growth-Stage SMEs
								</Link>
							</div>
						</div>

						<div className="our-services-fit-media">
							<img
								src={auditImage}
								alt="FinReach team discussing services"
								className="our-services-fit-image"
							/>
						</div>
					</div>
				</section>

				<section className="our-services-cta-section">
					<div className="our-services-cta-shell">
						<div className="our-services-cta-media" aria-hidden="true">
							<img src={ctaImage} alt="" className="our-services-cta-image" />
							<div className="our-services-cta-overlay" />
						</div>

						<div className="our-services-cta-content">
							<h2>Not sure which service you need?</h2>
							<p>
								Most organisations need more than one. Let&apos;s talk about what your
								situation actually requires.
							</p>
							<button
								type="button"
								className="our-services-cta-btn"
								onClick={() => window.dispatchEvent(new Event('open-consultation-modal'))}
							>
								Enquire Now
							</button>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
};

export default OurServices;
