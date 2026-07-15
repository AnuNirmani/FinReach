import React from 'react';

const InsightsSection = () => {
    return (
        <>
            <section className="fr-insights-section">
                <div className="container fr-insights-shell text-center">
                    <span className="fr-insights-badge">Finreach Insights</span>

                    <div className="fr-insights-empty-wrap">
                        <p className="fr-insights-empty">No blogs found</p>
                    </div>
                </div>
            </section>

            <style>{`
                .fr-insights-section {

                    margin: 22px 0;
                    min-height: 280px;
                }

                .fr-insights-shell {
                    max-width: 1760px;
                    padding-top: 58px;
                    padding-bottom: 52px;
                }

                .fr-insights-badge {
                    display: inline-block;
                    background-color: #cddc39;
                    color: #2b4a5f;
                    font-weight: 700;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    padding: 0.38rem 1.35rem;
                    border-radius: 999px;
                    font-size: 0.82rem;
                    margin-bottom: 2.6rem;
                }

                .fr-insights-empty-wrap {
                    min-height: 100px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .fr-insights-empty {
                    margin: 0;
                    color: #101417;
                    font-size: 2.35rem;
                    line-height: 1.2;
                    font-weight: 500;
                }

                @media (max-width: 991px) {
                    .fr-insights-empty {
                        font-size: 1.8rem;
                    }
                }

                @media (max-width: 767px) {
                    .fr-insights-section {
                        border-radius: 20px;
                        margin: 18px 0;
                        min-height: 230px;
                    }

                    .fr-insights-shell {
                        padding-top: 42px;
                        padding-bottom: 36px;
                    }

                    .fr-insights-badge {
                        margin-bottom: 1.8rem;
                        font-size: 0.75rem;
                        letter-spacing: 0.12em;
                    }

                    .fr-insights-empty {
                        font-size: 1.35rem;
                    }
                }
            `}</style>
        </>
    );
};

export default InsightsSection;
