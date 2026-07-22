import React from 'react';

const testimonials = [
    {
        quoteTitle: '"Finally, an accountant that actually gets us."',
        quoteText:
            '"We’d struggled for years with accountants who treated us like a small fish. Finreach came in with genuine Big Four knowledge but actually took the time to understand our mission. Our financial reporting has never been cleaner, and our board finally feels confident in the numbers."',
        author: 'Sarah M.',
        role: '— CEO, Community Health NFP',
    },
    {
        quoteTitle: '"The expertise we needed, without the price tag we feared."',
        quoteText:
            '"As a growing business, we couldn’t justify the cost of a Big Four firm — but we needed that level of rigour. Finreach gave us exactly that. They’ve helped us scale with confidence, and their advice has been instrumental in our last two rounds of growth."',
        author: 'James T.',
        role: '— Founder, Greenfield Consulting',
    },
    {
        quoteTitle: '"They speak our language — and they actually care."',
        quoteText:
            '"What sets Finreach apart is how seamlessly they integrate with our team. They understand the unique pressures of running a not-for-profit — compliance, funding cycles, board reporting — and they handle it all with expertise and genuine care. Worth every cent."',
        author: 'Michelle R.',
        role: '— CFO, Horizon Community Services',
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
                    padding-left: 9rem;
                    padding-right: 9rem;
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
                    }

                    .fr-outcomes-title {
                        margin-bottom: 2.4rem;
                    }

                    .fr-outcome-stars {
                        font-size: 1.35rem;
                    }

                    .fr-outcome-quote-title {
                        font-size: 1.02rem;
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
