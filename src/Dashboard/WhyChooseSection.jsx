import React from 'react';
import './Dashboard.css';

const WhyChooseSection = () => {
    const benefits = [
        {
            text: "25+ years of real-world experience across SMEs, not-for-profits, government and listed entities – we've seen what works and what doesn't."
        },
        {
            text: "Right-sized assurance and audits – we help you choose the most cost-effective level of assurance that still meets your stakeholders' expectations."
        },
        {
            text: 'Budget-friendly bookkeeping & accounting through our off-shore delivery model.'
        },
        {
            text: 'Strategic fractional CFO support that gives you a financial compass, robust internal controls and forward-looking cash and scenario planning.'
        },
        {
            text: "Continuity and care – you're not explaining your business to a new team every year; we stay with you and build deep knowledge of how you operate."
        }
    ];

    return (
        <>
            <div className="why-choose-banner" style={{
                backgroundImage: "linear-gradient(to top, rgba(15, 62, 93, 0.2) 0%, rgba(15, 62, 93, 0.5) 100%), url('https://finreach.ultimatemarketing.com.au/assets/financial-analysis-BQaM4ht9.jpg')"
            }}></div>

            <section className="why-choose-content">
                <div className="container">
                    <h2 className="why-choose-title text-center">Why organisations choose FinReach over "just getting by"</h2>

                    <div className="row">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="col-md-4">
                                <div className="benefit-item">
                                    <i className="bi bi-check-circle benefit-icon"></i>
                                    <p className="benefit-text">
                                        {benefit.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhyChooseSection;
