import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useMeta } from '../utils/useMeta'
import Header from '../Dashboard/Header'
import Footer from '../Dashboard/Footer'
import '../Dashboard/Dashboard.css'
import './aboutus.css'
import aboutUsHero from '../assets/assets/4.png'

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
					className="hero-section about-us-hero"
					style={{
						backgroundImage: `url(${aboutUsHero})`,
					}}
				>
					<div className="hero-overlay about-us-hero-overlay"></div>
					<div className="container hero-content h-100">
						<div className="row align-items-center justify-content-end h-100 text-start">
							<div className="col-xl-6 col-lg-7 col-md-10">
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
						</div>
					</div>
				</section>

				<section className="about-us-story-section">
					<div className="container">
						<article className="about-us-story-card text-center">
							<h2 className="about-us-story-title">Where we started</h2>
							<p className="about-us-story-text">
								Don Siriwardana started FinReach with a simple frustration: too many good organisations; the NFPs holding communities together, the growing businesses doing real work, were stuck choosing between accounting firms that were either too expensive to access properly, or too small to trust with anything complex.
							</p>
							<p className="about-us-story-text">
								He&apos;d spent years working inside larger firms, seeing first-hand what high-calibre financial delivery actually looked like and seeing just as clearly that most of the organisations who needed it most could never afford it. FinReach was built to close that gap.
							</p>
						</article>
					</div>
				</section>
			</main>

			<Footer />
		</>
	)
}

export default AboutUs
