import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../Dashboard/Header.jsx';
import Footer from '../Dashboard/Footer.jsx';
import './whowework.css';

import heroImage from '../assets/assets/about2.webp';
import notForProfitImage from '../assets/assets/notforprofits.jpg';
import growthStageImage from '../assets/assets/DSC03782.jpg';
import featureImage from '../assets/assets/DSC03718.jpg';
import ctaImage from '../assets/assets/2.png';

const audienceCards = [
    {
        title: 'Not-For-Profits',
        image: notForProfitImage,
        imageAlt: 'Not-for-profits consultation',
        description:
            'Acquittals, restricted funds, board accountability - we speak the language your funders and board expect, not just the language of accounting.',
        to: '/not-profit',
    },
    {
        title: 'Growth-Stage SMEs',
        image: growthStageImage,
        imageAlt: 'Growth-stage SME consultation',
        description:
            'Outgrowing your current bookkeeper, your current systems, or your current decision-making? We scale with you.',
        to: '/growth-stage',
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
                            {audienceCards.map((card) => (
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
                                    <h2>Not-For-Profits and Growing SME's.</h2>
                                    <p>
                                        Plenty of firms will take on an NFP or a growing SME 
                                        as one client among many. We've built our team, 
                                        our processes, and our pricing specifically around what 
                                        these organisations need - so you're never explaining the 
                                        basics or paying for expertise that doesn't apply to you.
                                    </p>
                                </div>
                            </div>
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
                                className="our-services-cta-btn enquire-now-btn-standard"
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
