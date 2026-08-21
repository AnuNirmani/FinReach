import React from 'react';
import avenLogo from '../assets/logo/1.png';
import circleLogo from '../assets/logo/2.png';
import lightAiLogo from '../assets/logo/3.png';
import livaLogo from '../assets/logo/4.png';
import stariLogo from '../assets/logo/5.png';
import anotherLogo from '../assets/logo/6.png';
import yetAnotherLogo from '../assets/logo/7.png';

const clientLogos = [
    { src: stariLogo, name: 'Stari' },
    { src: livaLogo, name: 'Liva' },
    { src: avenLogo, name: 'Aven' },
    { src: circleLogo, name: 'Circle' },
    { src: lightAiLogo, name: 'Light AI' },
    { src: anotherLogo, name: 'Another Company' },
    { src: yetAnotherLogo, name: 'Yet Another Company' },
];

const ClientsStripSection = () => {
    const marqueeLogos = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

    return (
        <>
            <section className="fr-clients-strip-section">
                <div className="fr-clients-strip-shell text-center">
                    <span className="fr-clients-strip-badge">Our Clients</span>

                    <div className="fr-clients-marquee" aria-label="Client logos">
                        <div className="fr-clients-marquee-track">
                            {marqueeLogos.map((client, index) => (
                                <div key={`${client.name}-${index}`} className="fr-client-logo-item">
                                    <img src={client.src} alt={client.name} className="fr-client-logo-image" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                .fr-clients-strip-section {

                    margin: 22px 0;
                }

                .fr-clients-strip-shell {
                    width: 100%;
                    padding-top: 38px;
                    padding-bottom: 46px;
                }

                .fr-clients-strip-badge {
                    display: inline-block;
                    background-color: #cddc39;
                    color: #2b4a5f;
                    font-weight: 700;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    padding: 0.38rem 1.35rem;
                    border-radius: 999px;
                    font-size: 0.82rem;
                    margin-bottom: 2.25rem;
                }

                .fr-clients-marquee {
                    position: relative;
                    overflow: hidden;
                    width: 100%;
                }

                .fr-clients-marquee-track {
                    display: flex;
                    align-items: center;
                    gap: 3.4rem;
                    width: max-content;
                    animation: fr-clients-scroll 28s linear infinite;
                }

                .fr-client-logo-item {
                    min-width: 170px;
                    height: 44px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    white-space: nowrap;
                }

                .fr-client-logo-image {
                    max-width: 160px;
                    max-height: 42px;
                    width: auto;
                    height: auto;
                    object-fit: contain;
                    display: block;
                }

                @keyframes fr-clients-scroll {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(-25%);
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .fr-clients-marquee-track {
                        animation: none;
                    }
                }

                @media (max-width: 1199px) {
                    .fr-clients-marquee-track {
                        gap: 2.2rem;
                        animation-duration: 22s;
                    }

                    .fr-client-logo-item {
                        min-width: 130px;
                        height: 38px;
                    }

                    .fr-client-logo-image {
                        max-width: 124px;
                        max-height: 36px;
                    }
                }

                @media (max-width: 767px) {
                    .fr-clients-strip-section {
                        border-radius: 20px;
                        margin: 18px 0;
                    }

                    .fr-clients-strip-shell {
                        padding-top: 34px;
                        padding-bottom: 36px;
                    }

                    .fr-clients-strip-badge {
                        margin-bottom: 1.5rem;
                        font-size: 0.88rem;
                        letter-spacing: 0.12em;
                    }

                    .fr-clients-marquee-track {
                        gap: 1.6rem;
                        animation-duration: 18s;
                    }

                    .fr-client-logo-item {
                        min-width: 105px;
                        height: 30px;
                    }

                    .fr-client-logo-image {
                        max-width: 100px;
                        max-height: 28px;
                    }
                }
            `}</style>
        </>
    );
};

export default ClientsStripSection;
