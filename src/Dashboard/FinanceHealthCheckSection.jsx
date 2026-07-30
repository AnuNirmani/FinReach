import React, { useState, useEffect } from 'react';
import bannerImage from '../assets/assets/team-collaboration-Dfr1_auB.jpg';

const FinanceHealthCheckSection = () => {
    const [isNFPModalOpen, setIsNFPModalOpen] = useState(false);
    const [isACNCModalOpen, setIsACNCModalOpen] = useState(false);

    useEffect(() => {
        // Load the form embed script when component mounts
        if (!window.BrandscapeForm) {
            const script = document.createElement('script');
            script.src = 'https://link.finreach.com.au/js/form_embed.js';
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    useEffect(() => {
        // Reinitialize forms when modal opens
        if ((isNFPModalOpen || isACNCModalOpen) && window.BrandscapeForm) {
            window.BrandscapeForm.init?.();
        }
    }, [isNFPModalOpen, isACNCModalOpen]);

    const handleNFPClick = (e) => {
        e.preventDefault();
        setIsNFPModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const handleACNCClick = (e) => {
        e.preventDefault();
        setIsACNCModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeNFPModal = () => {
        setIsNFPModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    const closeACNCModal = () => {
        setIsACNCModalOpen(false);
        document.body.style.overflow = 'auto';
    };

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
                        <button
                            onClick={handleNFPClick}
                            className="fr-finance-check-btn fr-finance-check-btn-primary"
                            style={{ border: 'none', cursor: 'pointer', font: 'inherit' }}
                        >
                            Download NFP Finance Health Check
                        </button>
                        <button
                            onClick={handleACNCClick}
                            className="fr-finance-check-btn fr-finance-check-btn-secondary"
                            style={{ border: 'none', cursor: 'pointer', font: 'inherit' }}
                        >
                            Download ACNC Audit Readiness Checklist
                        </button>
                    </div>
                </div>
            </section>

            {/* NFP Finance Health Check Modal */}
            {isNFPModalOpen && (
                <div className="fr-modal-overlay" onClick={closeNFPModal}>
                    <div className="fr-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="fr-modal-cancel-btn-top" onClick={closeNFPModal} title="Close">
                            ✕
                        </button>
                        <div className="fr-modal-form-container">
                            <iframe
                                src="https://link.finreach.com.au/widget/form/wVl5bHWwHexCzCU82O5m"
                                style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
                                id="inline-wVl5bHWwHexCzCU82O5m"
                                data-layout="{'id':'INLINE'}"
                                data-trigger-type="alwaysShow"
                                data-trigger-value=""
                                data-activation-type="alwaysActivated"
                                data-activation-value=""
                                data-deactivation-type="neverDeactivate"
                                data-deactivation-value=""
                                data-form-name="NFP Finance Health Check Lead Magnet Form - Brandscape"
                                data-height="901"
                                data-layout-iframe-id="inline-wVl5bHWwHexCzCU82O5m"
                                data-form-id="wVl5bHWwHexCzCU82O5m"
                                title="NFP Finance Health Check Lead Magnet Form - Brandscape"
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* ACNC Audit Readiness Modal */}
            {isACNCModalOpen && (
                <div className="fr-modal-overlay" onClick={closeACNCModal}>
                    <div className="fr-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="fr-modal-cancel-btn-top" onClick={closeACNCModal} title="Close">
                            ✕
                        </button>
                        <div className="fr-modal-form-container">
                            <iframe
                                src="https://link.finreach.com.au/widget/form/woWzeOXDe17Nhp7bBpHU"
                                style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
                                id="inline-woWzeOXDe17Nhp7bBpHU"
                                data-layout="{'id':'INLINE'}"
                                data-trigger-type="alwaysShow"
                                data-trigger-value=""
                                data-activation-type="alwaysActivated"
                                data-activation-value=""
                                data-deactivation-type="neverDeactivate"
                                data-deactivation-value=""
                                data-form-name="ACNC Audit Readiness Checklist Lead Magnet Form - Brandscape"
                                data-height="901"
                                data-layout-iframe-id="inline-woWzeOXDe17Nhp7bBpHU"
                                data-form-id="woWzeOXDe17Nhp7bBpHU"
                                title="ACNC Audit Readiness Checklist Lead Magnet Form - Brandscape"
                            />
                        </div>
                    </div>
                </div>
            )}

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
                    font-size: clamp(1.6rem, 2.3vw, 2.35rem);
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

                /* Modal Styles */
                .fr-modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.6);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                    padding: 20px;
                }

                .fr-modal-content {
                    position: relative;
                    background-color: white;
                    border-radius: 12px;
                    width: 100%;
                    max-width: 600px;
                    max-height: 85vh;
                    display: flex;
                    flex-direction: column;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
                    animation: fr-modal-slide-in 0.3s ease-out;
                }

                @keyframes fr-modal-slide-in {
                    from {
                        opacity: 0;
                        transform: translateY(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .fr-modal-form-container {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    padding: 20px;
                    min-height: 0;
                }

                .fr-modal-form-container iframe {
                    width: 100%;
                    height: 900px;
                    border-radius: 8px;
                }

                .fr-modal-cancel-btn-top {
                    position: absolute;
                    top: 12px;
                    right: 12px;
                    background: none;
                    border: none;
                    font-size: 28px;
                    cursor: pointer;
                    color: #666;
                    width: 36px;
                    height: 36px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 4px;
                    transition: background-color 0.2s ease, color 0.2s ease;
                    z-index: 10000;
                }

                .fr-modal-cancel-btn-top:hover {
                    background-color: #f0f0f0;
                    color: #333;
                }

                @media (max-width: 991px) {
                    .fr-finance-check-section {
                        min-height: 310px;
                    }

                    .fr-finance-check-btn {
                        min-width: 300px;
                    }

                    .fr-modal-content {
                        max-width: 90vw;
                        max-height: 90vh;
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
                        font-size: 1.28rem;
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

                    .fr-modal-overlay {
                        padding: 10px;
                    }

                    .fr-modal-content {
                        max-width: 100%;
                        max-height: 95vh;
                    }

                    .fr-modal-form-container {
                        padding: 15px;
                    }

                    .fr-modal-form-container iframe {
                        height: 600px;
                    }

                    .fr-modal-cancel-btn-top {
                        width: 32px;
                        height: 32px;
                        font-size: 24px;
                    }
                }
            `}</style>
        </>
    );
};

export default FinanceHealthCheckSection;
