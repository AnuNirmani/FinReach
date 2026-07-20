import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { useMeta } from '../utils/useMeta.js';
import Header from '../Dashboard/Header.jsx';
import Footer from '../Dashboard/Footer.jsx';
import '../Dashboard/Dashboard.css';
import auditHero from '../assets/assets/audit1.jpg';
import nfpImage from '../assets/assets/audit2.jpg';
import smeImage from '../assets/assets/audit3.jpg';
import whyImage from '../assets/assets/audit4.jpg';
import ctaBg from '../assets/assets/audit-hero-Bk5pu4Jp.jpg';
import logoIpsum265 from '../assets/logo/logoipsum-265.png';
import logoIpsum287 from '../assets/logo/logoipsum-287.png';
import logoIpsum331 from '../assets/logo/logoipsum-331.png';
import logoIpsum214 from '../assets/logo/logoipsum-214.png';

const NewAuditing = React.memo(() => {
	const navigate = useNavigate();
	const { meta } = useMeta(6);
	const [activeTestimonialIdx, setActiveTestimonialIdx] = React.useState(null);
	const [testimonialPageIdx, setTestimonialPageIdx] = React.useState(0);

	const requiredCards = [
		{
			icon: 'bi bi-file-earmark-text',
			title: 'Not-For-Profits',
			text: 'Revenue over $500K generally requires a review; revenue of $3M+ requires a full audit.',
		},
		{
			icon: 'bi bi-file-earmark-bar-graph',
			title: 'For-Profits',
			text: 'Meeting 2 of 3 thresholds (revenue, assets, employees) triggers audit requirements.',
		},
		{
			icon: 'bi bi-bank',
			title: 'Constitutional Requirements',
			text: 'Situations where your Constitution or funding agreements require an audit regardless of size.',
		},
		{
			icon: 'bi bi-stopwatch',
			title: 'ACNC, ASIC & ORIC Deadlines',
			text: 'ACNC, ASIC & ORIC allow 6 months for submission, while ASIC requires 4 months.',
		},
	];

	const costItems = [
		'Late lodgements, fines and compliance breaches',
		'Undetected fraud, errors or misstatements',
		'Loss of donor, investor or stakeholder trust',
		'Weak internal controls and unmanaged risk',
		'Audit reports that add no strategic value',
	];

	const howItems = [
		'25 years of hands-on audit experience across NFPs, government, for-profits and listed entities.',
		'Deep understanding of your sector – we take time to understand your model, revenue streams and specific risks.',
		'Strong security and confidentiality – robust measures to protect your most sensitive documents.',
		'Structured, phased approach aligned with your annual general meeting and lodgement dates.',
		"Continuity of team – you're not starting from scratch with new auditors every year.",
	];

	const processSteps = [
		{
			step: '1',
			title: 'Scope & Plan',
			text: "We assess your organisation's risk profile and confirm timing upfront.",
		},
		{
			step: '2',
			title: 'Fieldwork',
			text: 'Our Sri Lanka technical team conducts the detailed work; your Canberra contact stays across everything.',
		},
		{
			step: '3',
			title: 'Review & Report',
			text: 'Findings delivered clearly, with anything that matters flagged early - not buried in the final report.',
		},
		{
			step: '4',
			title: 'Sign-Off',
			text: 'On time, every time.',
		},
	];

	const includedItems = [
		'Financial statement audits for NFPs, incorporated associations, and SMEs',
		'ACNC, ASIC and regulatory compliance reporting',
		"Risk-based audit planning tailored to your organisation's size and complexity",
		'Clear, board-ready reporting - no jargon, no surprises',
	];

	const benefitItems = [
		{
			icon: 'bi bi-shield-check',
			title: 'Guaranteed Compliance',
			text: 'Guaranteed statutory compliance and on-time lodgements',
		},
		{
			icon: 'bi bi-diagram-3',
			title: 'Stronger Controls',
			text: 'Stronger internal controls and better risk management',
		},
		{
			icon: 'bi bi-file-earmark-text',
			title: 'Reliable Statements',
			text: 'Clearer, more reliable financial statements',
		},
		{
			icon: 'bi bi-stopwatch',
			title: 'Time Saved',
			text: 'Time back to focus on strategy, not paperwork',
		},
		{
			icon: 'bi bi-bullseye',
			title: 'Strategic Insights',
			text: 'Strategic insights that help your organisation thrive, not just comply',
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

			<main className="new-auditing-page">
				<section className="new-auditing-hero">
					<div className="new-auditing-hero-media">
						<img src={auditHero} alt="Auditing consultation" className="new-auditing-hero-image" />
					</div>
					<div className="new-auditing-hero-content">
						<h1 className="new-auditing-hero-title">
							Audits That Give Your Board And Funders Real Confidence.
						</h1>
						<p className="new-auditing-hero-subtitle">
							Risk-based auditing for not-for-profits and SMEs - delivered with the rigour of a big firm and the attention of a boutique one.
						</p>
						<button
							type="button"
							className="new-auditing-hero-btn"
							onClick={() => navigate('/book-consultation')}
						>
							Book A No-Obligation Consultation
						</button>
					</div>
				</section>

				<section className="new-auditing-content-wrap">
					<div className="container new-auditing-shell">
						<section className="new-auditing-required">
							<h2 className="new-auditing-heading">Are you required to audit?</h2>
							<p className="new-auditing-subheading">
								We help you navigate who needs audits and when, including:
							</p>

							<div className="row g-4 new-auditing-required-grid">
								{requiredCards.map((item) => (
									<div className="col-md-6 col-xl-3" key={item.title}>
										<article className="new-auditing-required-card">
											<i className={`${item.icon} new-auditing-required-icon`} aria-hidden="true"></i>
											<h3>{item.title}</h3>
											<p>{item.text}</p>
										</article>
									</div>
								))}
							</div>
						</section>

						<section className="new-auditing-outcomes">
							<div className="row g-5">
								<div className="col-lg-6">
									<h2 className="new-auditing-column-title">The cost of getting audits wrong</h2>
									<ul className="new-auditing-list new-auditing-list-cost">
										{costItems.map((item) => (
											<li key={item}>
												<i className="bi bi-x" aria-hidden="true"></i>
												<span>{item}</span>
											</li>
										))}
									</ul>
								</div>

								<div className="col-lg-6">
									<h2 className="new-auditing-column-title">How FinReach runs your audit</h2>
									<ul className="new-auditing-list new-auditing-list-how">
										{howItems.map((item) => (
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
							<p className="new-auditing-pill">What's included</p>

							<div className="new-auditing-included-list">
								{includedItems.map((item) => (
									<article className="new-auditing-included-item" key={item}>
										<i className="bi bi-check-circle-fill" aria-hidden="true"></i>
										<span>{item}</span>
									</article>
								))}
							</div>
						</section>

						<section className="new-auditing-benefits">
							<p className="new-auditing-pill">The benefits</p>

							<div className="row g-4">
								{benefitItems.map((item, idx) => (
									<div className={`col-md-6 ${idx < 3 ? 'col-xl-4' : 'col-xl-6'}`} key={item.title}>
										<article className="new-auditing-benefit-card">
											<i className={`${item.icon} new-auditing-benefit-icon`} aria-hidden="true"></i>
											<h3>{item.title}</h3>
											<p>{item.text}</p>
										</article>
									</div>
								))}
							</div>
						</section>
					</div>
				</section>

				<section className="new-auditing-lower-section">
					<div className="container new-auditing-shell">
						<section className="new-auditing-who">
							<p className="new-auditing-pill">Who this is for</p>

							<div className="row g-4">
								<div className="col-lg-6">
									<article className="new-auditing-who-card">
										<img src={nfpImage} alt="Not-for-profits audit consultation" />
										<h3>Not-For-Profits</h3>
										<p>
											Community service organisations, disability providers, housing associations,
											but not limited to, $3M to $30M. You carry audit obligations, ACNC
											requirements, restricted funds and board accountability.
										</p>
										<p>You need a firm that already speaks your language.</p>
										<a href="/not-profit">Learn More NFP Services</a>
									</article>
								</div>

								<div className="col-lg-6">
									<article className="new-auditing-who-card">
										<img src={smeImage} alt="Growth-stage SME audit meeting" />
										<h3>Growth-Stage SMEs</h3>
										<p>
											Private businesses turning over $1M - $30M who&apos;ve outgrown DIY
											bookkeeping.
										</p>
										<p>
											Meeting 2 of 3 thresholds (revenue, assets, employees) triggers audit
											requirements.
										</p>
										<a href="/bookkeeping-accounting">Learn More SME Services</a>
									</article>
								</div>
							</div>

							<div className="row g-4 align-items-center new-auditing-why-row">
								<div className="col-lg-5">
									<div className="new-auditing-why-image-wrap">
										<img src={whyImage} alt="FinReach principal" className="new-auditing-why-image" />
									</div>
								</div>

								<div className="col-lg-7">
									<div className="new-auditing-why-copy">
										<p className="new-auditing-pill new-auditing-pill-left">Why FinReach for audit</p>
										<h3>Big Four training. Boutique price.</h3>
										<p>
											Our technical audit work is delivered by a Sri Lanka-based team trained to Big Four standards, so you get the depth and rigour of a major firm,
											managed end-to-end by a Canberra principal who knows your organisation.
											No layers, no juniors learning on your file.
										</p>
									</div>
								</div>
							</div>
						</section>
					</div>
				</section>

				<section className="new-auditing-testimonials-wrap new-auditing-testimonials-wrap-rounded">
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

				<section className="new-auditing-final-cta" style={{ backgroundImage: `url(${ctaBg})` }}>
					<div className="new-auditing-final-cta-overlay"></div>
					<div className="container">
						<div className="new-auditing-final-cta-content">
							<h2>Ready for an audit that actually adds value?</h2>
							<p>Let&apos;s talk about your organisation&apos;s audit requirements and timeline.</p>
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
			</main>

			<Footer />
		</>
	);
});

export default NewAuditing;
