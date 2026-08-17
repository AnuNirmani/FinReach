import React from 'react';

const testimonials = [
    {
        quoteTitle: '"Reliable AP & Payroll Outsourcing"',
        quoteText:
            '"Great experience with FinReach for AP and Payroll outsourcing. Their reliable, detail-oriented approach has significantly improved our operations—streamlining processes, reducing errors, and freeing up our team to focus on higher-value work. They ensure accurate, on-time processing every cycle and act as a true extension of our business. Highly recommended."',
        author: 'Blessy PGutierrez',
        role: null,
    },
    {
        quoteTitle: '"Quality Financial Management at a Fair Price"',
        quoteText:
            '"Don and the FinReach team do a great job on our annual financial review. I highly recommend them to anyone who is looking for good quality financial management at a very reasonable price."',
        author: 'Accounts Office',
        role: null,
    },
    {
        quoteTitle: '"Thorough and Professional Payroll Auditing"',
        quoteText:
            '"Don and his team delivered a thorough and professional payroll audit, providing valuable insights, identifying risks, and offering practical recommendations. Their expertise, reliability, and attention to detail made the entire process smooth and efficient."',
        author: 'Angie Ng',
        role: null,
    },
];

const ClientOutcomesSection = () => {
    return (
        <>
            <section className="fr-outcomes-section">
                <div className="container fr-outcomes-shell text-center">
                    <span className="fr-outcomes-badge">Client Outcomes</span>
                    <h2 className="fr-outcomes-title">Trusted by organisations doing meaningful work</h2>

                    <div className="row g-4 fr-outcomes-grid justify-content-center">
                        {testimonials.map((item) => (
                            <div key={item.author} className="col-lg-4 col-md-6 d-flex">
                                <article className="fr-outcome-card w-100 text-center">
                                    <div className="fr-outcome-stars" aria-hidden="true">★★★★★</div>
                                    <h3 className="fr-outcome-quote-title">{item.quoteTitle}</h3>
                                    <p className="fr-outcome-quote">{item.quoteText}</p>
                                    <p className="fr-outcome-author">{item.author}</p>
                                    <p className="fr-outcome-role">{item.role}</p>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style>{`
                .fr-outcomes-section {
                    background-color: #dfe5ea;
                    border-radius: 44px;
                    margin: 22px 0;
                }

                .fr-outcomes-shell {
                    max-width: 1760px;
                    padding-top: 72px;
                    padding-bottom: 66px;
                    padding-left: clamp(1rem, 4vw, 9rem);
                    padding-right: clamp(1rem, 4vw, 9rem);
                }

                .fr-outcomes-badge {
                    display: inline-block;
                    background-color: #cddc39;
                    color: #2b4a5f;
                    font-weight: 700;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    padding: 0.38rem 1.35rem;
                    border-radius: 999px;
                    font-size: 0.82rem;
                    margin-bottom: 1.4rem;
                }

                .fr-outcomes-title {
                    color: #2b4a5f;
                    font-size: clamp(1.5rem, 2.2vw, 2.25rem);
                    font-weight: 700;
                    margin-bottom: 3.2rem;
                }

                .fr-outcomes-grid {
                    --bs-gutter-x: 2rem;
                    --bs-gutter-y: 1.8rem;
                }

                .fr-outcome-card {
                    background: transparent;
                    border: none;
                    padding: 0 1rem;
                }

                .fr-outcome-stars {
                    color: #f2ba18;
                    font-size: 1.6rem;
                    letter-spacing: 0.1em;
                    margin-bottom: 1rem;
                    line-height: 1;
                }

                .fr-outcome-quote-title {
                    color: #2b4a5f;
                    font-size: 1.35rem;
                    line-height: 1.3;
                    font-weight: 700;
                    margin-bottom: 0.95rem;
                }

                .fr-outcome-quote {
                    color: #1e2228;
                    font-size: 1.15rem;
                    line-height: 1.6;
                    font-style: italic;
                    margin-bottom: 0.85rem;
                }

                .fr-outcome-author {
                    color: #2b4a5f;
                    font-size: 1.15rem;
                    font-weight: 700;
                    margin-bottom: 0.15rem;
                }

                .fr-outcome-role {
                    color: #2b4a5f;
                    font-size: 1.15rem;
                    margin: 0;
                }

                @media (max-width: 1199px) {
                    .fr-outcomes-section {
                        border-radius: 28px;
                    }

                    .fr-outcomes-shell {
                        padding-left: 1.25rem;
                        padding-right: 1.25rem;
                    }

                    .fr-outcome-card {
                        padding: 0 0.6rem;
                    }
                }

                @media (max-width: 767px) {
                    .fr-outcomes-section {
                        border-radius: 20px;
                        margin: 18px 0;
                    }

                    .fr-outcomes-shell {
                        padding-top: 56px;
                        padding-bottom: 52px;
                        padding-left: 0.9rem;
                        padding-right: 0.9rem;
                    }

                    .fr-outcomes-title {
                        margin-bottom: 2.4rem;
                    }

                    .fr-outcome-stars {
                        font-size: 1.35rem;
                    }

                    .fr-outcome-quote-title {
                        font-size: 1.1rem;
                        line-height: 1.35;
                    }

                    .fr-outcome-quote,
                    .fr-outcome-author,
                    .fr-outcome-role {
                        font-size: 0.95rem;
                    }
                }
            `}</style>
        </>
    );
};

export default ClientOutcomesSection;
