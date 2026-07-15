import React from 'react';
import bannerImage from '../assets/assets/team-collaboration-Dfr1_auB.jpg';

const FinanceHealthCheckSection = () => {
    return (
        <>
            <section
                className="fr-finance-check-section"
                style={{
                    backgroundImage: `
                        linear-gradient(to top, rgba(32, 58, 76, 0.72) 0%, rgba(32, 58, 76, 0.72) 100%),
                        url(${bannerImage})
                    `,
                }}
            >
                <div className="fr-finance-check-inner">
                    <h2 className="fr-finance-check-title">Not sure where your finances stand?</h2>
                    <p className="fr-finance-check-text">
                        Download the NFP Finance Health Check - 10 questions every Finance Manager should answer before their next board meeting.
                    </p>

                    <div className="fr-finance-check-actions">
                        <a href="#" className="fr-finance-check-btn fr-finance-check-btn-primary">
                            Download NFP Finance Health Check
                        </a>
                        <a href="#" className="fr-finance-check-btn fr-finance-check-btn-secondary">
                            Download ACNC Audit Readiness Checklist
                        </a>
                    </div>
                </div>
            </section>

            <style>{`
                .fr-finance-check-section {
                    margin: 22px 0 0;
                    min-height: 340px;
                    width: 100%;
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    border-radius: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .fr-finance-check-inner {
                    width: 100%;
                    max-width: 1240px;
                    text-align: center;
                    padding: 54px 20px;
                }

                .fr-finance-check-title {
                    color: #ffffff;
                    font-size: clamp(2rem, 3.1vw, 3.15rem);
                    font-weight: 700;
                    line-height: 1.2;
                    margin-bottom: 1.05rem;
                }

                .fr-finance-check-text {
                    color: rgba(255, 255, 255, 0.95);
                    font-size: 1.02rem;
                    line-height: 1.55;
                    margin: 0 auto 2rem;
                    max-width: 1100px;
                }

                .fr-finance-check-actions {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                }

                .fr-finance-check-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 340px;
                    border-radius: 10px;
                    padding: 0.9rem 1.75rem;
                    font-weight: 700;
                    font-size: 1rem;
                    text-decoration: none;
                    transition: transform 0.2s ease, filter 0.2s ease;
                }

                .fr-finance-check-btn:hover {
                    transform: translateY(-1px);
                    filter: brightness(0.98);
                }

                .fr-finance-check-btn-primary {
                    background-color: #cddc39;
                    color: #21445d;
                }

                .fr-finance-check-btn-secondary {
                    background-color: #ffffff;
                    color: #28506c;
                }

                @media (max-width: 991px) {
                    .fr-finance-check-section {
                        min-height: 310px;
                    }

                    .fr-finance-check-btn {
                        min-width: 300px;
                    }
                }

                @media (max-width: 767px) {
                    .fr-finance-check-section {
                        min-height: 300px;
                        margin: 18px 0 0;
                    }

                    .fr-finance-check-inner {
                        padding: 42px 16px;
                    }

                    .fr-finance-check-title {
                        font-size: 1.5rem;
                        margin-bottom: 0.8rem;
                    }

                    .fr-finance-check-text {
                        font-size: 0.95rem;
                        margin-bottom: 1.4rem;
                    }

                    .fr-finance-check-btn {
                        width: 100%;
                        min-width: 0;
                        max-width: 360px;
                        font-size: 0.95rem;
                        padding: 0.8rem 1rem;
                    }
                }
            `}</style>
        </>
    );
};

export default FinanceHealthCheckSection;
