import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useMeta } from '../utils/useMeta.js';
import Header from '../Dashboard/Header.jsx';
import Footer from '../Dashboard/Footer.jsx';
import cfoHeroImage from '../assets/assets/cfo1.jpg';
import nfpAudience from '../assets/assets/notforprofits.jpg';
import growthStageAudience from '../assets/assets/growthstage.jpg';
import directorImage from '../assets/assets/cfo2.jpg';
import cfoCtaBg from '../assets/assets/audit-hero-Bk5pu4Jp.jpg';
import financialAssessmentImage from '../assets/icon/资源 32.png';
import cashManagementImage from '../assets/icon/资源 33.png';
import strategicReportingImage from '../assets/icon/资源 34.png';
import auditReadinessImage from '../assets/icon/资源 35.png';
import internalControlsImage from '../assets/icon/资源 36.png';
import investmentConfidenceImage from '../assets/icon/资源 37.png';
import investmentCashFlowImage from '../assets/icon/资源 38.png';
import investmentVisibilityImage from '../assets/icon/资源 39.png';
import investmentTimeSavedImage from '../assets/icon/资源 40.png';
import investmentControlsImage from '../assets/icon/Stronger controls.png';
import notForProfitsImage from '../assets/icon/Not-for-profits.png';
import guaranteed from '../assets/icon/Guaranteed compliance.png';
import logoIpsum265 from '../assets/logo/logoipsum-265.png';
import logoIpsum287 from '../assets/logo/logoipsum-287.png';
import logoIpsum331 from '../assets/logo/logoipsum-331.png';
import logoIpsum214 from '../assets/logo/logoipsum-214.png';
import './CFO.css';

const serviceItems = [
	{
		image: auditReadinessImage,
		imageAlt: 'Financial assessment and planning icon',
		title: 'Financial Assessment & Planning',
		text: 'We dive into your profitability, liquidity and efficiency, and give you clear, data-driven recommendations so you know exactly where you stand and where to go next.',
	},
	{
		image: internalControlsImage,
		imageAlt: 'Internal controls and fraud prevention icon',
		title: 'Internal Controls & Fraud Prevention',
		text: 'We strengthen your approval processes, segregation of duties and oversight so issues are caught early – or prevented entirely.',
	},
	{
		image: financialAssessmentImage,
		imageAlt: 'Cash management and forecasting icon',
		title: 'Cash Management & Forecasting',
		text: 'We help you manage day-to-day cash, then build forward-looking forecasts and scenarios for investments, expansion and growth.',
	},
	{
		image: notForProfitsImage,
		imageAlt: 'Strategic reporting and analysis icon',
		title: 'Strategic Reporting & Analysis',
		text: 'You receive regular reports and analysis that highlight trends, risks and opportunities – in language you and your board can actually use.',
	},
	{
		image: cashManagementImage,
		imageAlt: 'Audit readiness and compliance icon',
		title: 'Audit Readiness & Compliance',
		text: "We ensure you're always audit-ready with solid documentation, making investor and regulator conversations much less stressful.",
	},
];

const processSteps = [
	{
		step: '1',
		title: 'Understand Your Position',
		text: 'We start with where your organisation actually is – finances, goals, and pressure points.',
	},
	{
		step: '2',
		title: 'Build The Framework',
		text: 'Forecasts, budgets, and reporting structures built around your decisions, not generic templates.',
	},
	{
		step: '3',
		title: 'Ongoing Strategic Input',
		text: 'Regular sessions with Don, supported by the technical team keeping the underlying numbers accurate.',
	},
	{
		step: '4',
		title: 'Evolve As You Grow',
		text: "The level of support flexes as your organisation's needs change.",
	},
];

const painPoints = [
	"You know you need serious financial insight, but a full-time CFO isn't realistic yet.",
	'You\'re making big decisions based on "gut feel" because you don\'t have clear, consistent reporting.',
	'Cash flow surprises are forcing you to say no to good opportunities.',
	"You're worried your internal controls aren't strong enough to prevent errors or fraud.",
	"Investors, lenders or auditors are asking questions your current reports can't answer confidently.",
];

const includedItems = [
	'Cash flow forecasting and scenario planning',
	'Budget development and board reporting support',
	'Funding, grant, and investment readiness',
	'Strategic financial advice as you grow, restructure, or scale',
];

const investmentItems = [
	{
		image: investmentConfidenceImage,
		imageAlt: 'Confidence in financial decisions icon',
		text: 'Unshakeable confidence in your financial decisions',
	},
	{
		image: investmentCashFlowImage,
		imageAlt: 'Cash flow ready for growth icon',
		text: 'Optimised cash flow, ready for growth',
	},
	{
		image: investmentControlsImage,
		imageAlt: 'Stronger internal controls and reduced risk icon',
		text: 'Stronger internal controls and reduced risk',
	},
	{
		image: investmentVisibilityImage,
		imageAlt: 'Better visibility and efficiency icon',
		text: 'A healthier bottom line through better visibility and efficiency',
	},
	{
		image: investmentTimeSavedImage,
		imageAlt: 'Time saved icon',
		text: 'Time back to focus on the work only you can do',
	},
];

const whoItems = [
	{
		image: nfpAudience,
		title: 'Not-For-Profits',
		paragraphs: [
			'Community service organisations, disability providers, housing associations $3M to $30M. You carry audit obligations, ACNC requirements, restricted funds and board accountability.',
			'You need a firm that already speaks your language.',
		],
		linkLabel: 'Learn More NFP Services',
		to: '/not-profit',
	},
	{
		image: growthStageAudience,
		title: 'Growth-Stage SMEs',
		paragraphs: [
			"Private businesses turning over $1M - $30M who've outgrown DIY bookkeeping.",
			"You're growing fast but your financial infrastructure hasn't kept pace. You need CFO-level thinking without the full-time salary.",
		],
		linkLabel: 'Learn More SME Services',
		to: '/growth-stage',
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

const CFO = () => {
	const { meta } = useMeta(8);
	const [activeTestimonialIdx, setActiveTestimonialIdx] = React.useState(null);
	const [testimonialPageIdx, setTestimonialPageIdx] = React.useState(0);

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

			<main className="cfo-page">
				<section className="cfo-hero">
					<div className="cfo-hero-image-wrap">
						<img src={cfoHeroImage} alt="Fractional CFO strategy session" className="cfo-hero-image" />
					</div>
					<div className="cfo-hero-content">
						<h1>Senior Financial Strategy, Without The Senior Price Tag.</h1>
						<p>
							Fractional CFO support for not-for-profits and growth-stage SMEs ready for board-level financial thinking - without the cost of a full-time hire.
						</p>
						<button
							type="button"
							className="cfo-hero-btn"
							onClick={() => window.dispatchEvent(new Event('open-consultation-modal'))}
						>
							Enquire Now
						</button>
					</div>
				</section>

				<section className="cfo-content-wrap">
					<div className="container cfo-shell">
						<section className="cfo-painpoints-section text-center">
							<h2>The hidden roadblocks</h2>
							<p className="cfo-painpoints-subtitle">
								Without expert financial leadership, your organisation is taking unnecessary risks with its future.
							</p>

							<ul className="cfo-painpoints-list">
								{painPoints.map((item) => (
									<li key={item}>
										<i className="bi bi-x-lg" aria-hidden="true"></i>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</section>

						<section className="cfo-services-section text-center">
							<h2>What our Fractional CFO service covers</h2>
							<div className="cfo-service-grid">
								{serviceItems.map((item) => (
									<article className="cfo-service-card" key={item.title}>
										<div className="cfo-service-image-wrap">
											<img
												src={item.image}
												alt={item.imageAlt}
												className="cfo-service-image"
											/>
										</div>
										<h3>{item.title}</h3>
										<p>{item.text}</p>
									</article>
								))}
							</div>
						</section>

						<section className="cfo-process-section text-center">
							<p className="cfo-process-lead">
								All Fractional CFO work is delivered within Australia by experienced financial leaders.
							</p>
							<p className="cfo-pill">How we work</p>

							<div className="row g-4">
								{processSteps.map((step) => (
									<div className="col-md-6 col-xl-3" key={step.step}>
										<article className="cfo-process-card">
											<span className="cfo-step-number">{step.step}</span>
											<h3>{step.title}</h3>
											<p>{step.text}</p>
										</article>
									</div>
								))}
							</div>
						</section>

						<section className="cfo-included-section text-center">
							<p className="cfo-pill">What&apos;s included</p>
							<div className="cfo-included-list">
								{includedItems.map((item) => (
									<article key={item} className="cfo-included-item">
										<i className="bi bi-check-circle-fill" aria-hidden="true"></i>
										<span>{item}</span>
									</article>
								))}
							</div>
						</section>

						<section className="cfo-investment-section text-center">
							<p className="cfo-pill">Why it&apos;s a smart investment</p>
							<div className="cfo-investment-grid">
								{investmentItems.map((item) => (
									<article className="cfo-investment-card" key={item.text}>
										<div className="cfo-investment-image-wrap">
											<img
												src={item.image}
												alt={item.imageAlt}
												className="cfo-investment-image"
											/>
										</div>
										<p>{item.text}</p>
									</article>
								))}
							</div>
						</section>
					</div>
				</section>

					<section className="cfo-lower-wrap">
					<div className="container cfo-shell">
						<section className="assurance-who-section">
							<p className="assurance-pill">Who this is for</p>
							<div className="row g-5 justify-content-center assurance-who-grid">
								{whoItems.map((item) => (
									<div className="col-lg-6" key={item.title}>
										<article className="assurance-who-card">
											<img src={item.image} alt={item.title} className="assurance-who-image" />
											<h3>{item.title}</h3>
											{item.paragraphs.map((paragraph) => (
												<p key={paragraph}>{paragraph}</p>
											))}
											<Link to={item.to}>{item.linkLabel}</Link>
										</article>
									</div>
								))}
							</div>
						</section>

						<section className="cfo-why-section">
							<div className="row g-4 align-items-center cfo-why-row">
								<div className="col-lg-6">
									<div className="cfo-why-image-wrap">
										<img src={directorImage} alt="Don in a strategy session" className="cfo-why-image" />
									</div>
								</div>

								<div className="col-lg-6">
									<div className="cfo-why-copy">
										<p className="cfo-pill cfo-pill-left">Why FinReach for fractional CFO</p>
										<h2>25 years of judgement, hands on professional experience.</h2>
										<p>
											Don spent years as a Senior Manager at RSM Australia&apos;s Canberra office and as Audit Principal at Charterpoint before founding FinReach - working across government, ASX-listed, and not-for-profit organisations including Woden Community Services, Carers Australia, and CSIRO. He&apos;s a member of Chartered Accountants Australia and New Zealand, and a Registered Company Auditor. When you bring him in as your fractional CFO, you&apos;re getting that depth of judgement applied directly to your numbers - not a summary handed up from someone else.
										</p>
									</div>
								</div>
							</div>
						</section>
					</div>

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

					<section className="new-auditing-final-cta" style={{ backgroundImage: `url(${cfoCtaBg})` }}>
						<div className="new-auditing-final-cta-overlay"></div>
						<div className="container">
							<div className="new-auditing-final-cta-content">
								<h2>Ready for a financial strategist in your corner?</h2>
								<p>Let's talk about where your organisation is heading and what it needs to get there.</p>
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
};

export default CFO;
