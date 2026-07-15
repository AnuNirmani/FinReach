import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';


const PainPointsSection = () => {
    const steps = [
        {
            title: 'Free 30-Minute Consultation',
            text: "We discuss your organisation, challenges, deadlines and goals - and clarify which services you actually need (and which you don't)."
        },
        {
            title: 'Assessment & Recommendations',
            text: 'We review your current financial setup - bookkeeping, systems, controls and obligations - and give clear, practical recommendations.'
        },
        {
            title: 'Tailored Engagement',
            text: "We design a scope that fits your size, budget and risk profile - whether that's full back-office bookkeeping & accounting, assurance, audit or fractional CFO support."
        },
        {
            title: 'Ongoing Support And Reporting',
            text: 'You get regular reporting, proactive communication and a partner who helps you stay ready for audits, lenders, boards and growth opportunities.'
        }
    ];

    return (
        <section className="painpoints-process-section">
            <div className="container painpoints-process-shell text-center">
                <span className="painpoints-process-badge">How To Get Started</span>

                <div className="row g-4 painpoints-process-grid align-items-stretch mt-1">
                    {steps.map((step, index) => (
                        <div key={step.title} className="col-xl-3 col-lg-6 d-flex">
                            <article className="painpoints-process-card text-start w-100">
                                <div className="painpoints-step-number">{index + 1}</div>
                                <h3 className="painpoints-step-title">{step.title}</h3>
                                <p className="painpoints-step-text">{step.text}</p>
                            </article>
                        </div>
                    ))}
                </div>

                <div className="painpoints-process-actions d-flex justify-content-center gap-3 flex-wrap mt-5">
                    <Link to="/contact" className="btn painpoints-btn-dark">
                        Enquire Now
                    </Link>
                    <Link to="/contact" className="btn painpoints-btn-lime">
                        Book a Consultation
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PainPointsSection;
