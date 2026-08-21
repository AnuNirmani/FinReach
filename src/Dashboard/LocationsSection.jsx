import React from 'react';
import mapImage from '../assets/assets/map.webp';

const LocationsSection = () => {
    const locations = [
        'Canberra, ACT',
        'Sri Lanka',
        'Sydney, NSW',
        'Melbourne, VIC',
    ];

    return (
        <>
            <section className="fr-locations-section">
                <div className="container fr-locations-shell">
                    <div className="row g-0 align-items-stretch fr-locations-row">
                        <div className="col-lg-6">
                            <div className="fr-locations-content">
                                <span className="fr-locations-badge">Where We Are</span>
                                <h2 className="fr-locations-title">
                                    Local presence.<br />
                                    National capability.
                                </h2>

                                <p className="fr-locations-text">
                                    Headquartered in Canberra as a registered audit and accounting practice serving clients across ACT,
                                    NSW and VIC and a technical team in Sri Lanka.
                                </p>

                                <div className="row g-3 fr-location-pill-grid">
                                    {locations.map((item) => (
                                        <div key={item} className="col-sm-6">
                                            <div className="fr-location-pill">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <img
                                src={mapImage}
                                alt="Map showing Australia and Sri Lanka locations"
                                className="fr-locations-map"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                .fr-locations-section {
                   
                    margin: 22px 0;
                    overflow: hidden;
                }

                .fr-locations-shell {
                    max-width: 1760px;
                }

                .fr-locations-row {
                    min-height: 620px;
                }

                .fr-locations-content {
                    padding: 78px 86px 70px;
                    max-width: 830px;
                }

                .fr-locations-badge {
                    display: inline-block;
                    background-color: #cddc39;
                    color: #2b4a5f;
                    font-weight: 700;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    padding: 0.38rem 1.35rem;
                    border-radius: 999px;
                    font-size: 0.82rem;
                    margin-bottom: 1.2rem;
                }

                .fr-locations-title {
                    color: #2b4a5f;
                    font-size: clamp(1.6rem, 2.3vw, 2.45rem);
                    font-weight: 700;
                    line-height: 1.15;
                    margin-bottom: 1.55rem;
                }

                .fr-locations-text {
                    color: #1f2d3a;
                    font-size: 1.06rem;
                    line-height: 1.6;
                    margin-bottom: 2rem;
                    max-width: 650px;
                }

                .fr-location-pill {
                    border: 1.5px solid #c6cc45;
                    border-radius: 999px;
                    text-align: center;
                    color: #2b4a5f;
                    font-weight: 600;
                    font-size: 1.12rem;
                    line-height: 1;
                    padding: 0.7rem 1rem;
                    background-color: transparent;
                }

                .fr-locations-map {
                    width: 100%;
                    height: 100%;
                    min-height: 620px;
                    object-fit: cover;
                    display: block;
                }

                @media (max-width: 1199px) {
                    .fr-locations-content {
                        padding: 56px 44px 52px;
                    }

                    .fr-locations-map,
                    .fr-locations-row {
                        min-height: 520px;
                    }

                    .fr-location-pill {
                        font-size: 1rem;
                    }
                }

                @media (max-width: 991px) {
                    .fr-locations-map {
                        min-height: 420px;
                    }
                }

                @media (max-width: 767px) {
                    .fr-locations-section {
                        border-radius: 20px;
                        margin: 18px 0;
                    }

                    .fr-locations-content {
                        padding: 42px 20px 36px;
                    }

                    .fr-locations-text {
                        font-size: 1rem;
                    }

                    .fr-location-pill {
                        font-size: 0.96rem;
                        padding: 0.62rem 0.8rem;
                    }

                    .fr-locations-map {
                        min-height: 300px;
                    }
                }
            `}</style>
        </>
    );
};

export default LocationsSection;
