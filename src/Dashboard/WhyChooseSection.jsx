import React from 'react';
import './Dashboard.css';
import auditHero from '../assets/assets/director.jpg';

const WhyChooseSection = () => {
    return (
        <section className="director-message-section">
            <div className="container director-message-shell">
                <div className="row g-0 align-items-stretch director-message-row">
                    <div className="col-lg-5">
                        <img
                            src={auditHero}
                            alt="Don, Director of FinReach"
                            className="director-message-image"
                        />
                    </div>

                    <div className="col-lg-7">
                        <div className="director-message-content">
                            <span className="director-message-badge">Hear From Don, Our Director</span>
                            <h2 className="director-message-title">Why I built FinReach the way I did.</h2>

                            <p className="director-message-text">
                                "Most accounting firms go one of two ways - big corporates or small businesses. The organisations in the middle get forgotten.
                            </p>

                            <p className="director-message-text">FinReach exists for them.</p>

                            <p className="director-message-text">
                                We work with medium-sized not-for-profits managing grants, reporting to boards, navigating audits - and they deserve Big Four thinking without the Big Four price tag.
                            </p>

                            <p className="director-message-text">
                                That's the hybrid model. Our Directorship is in Canberra. Our delivery team is in Sri Lanka - qualified, experienced, and fully integrated into how we work. Our local team will attend on site meetings to deliver the service and our international team will join via video-link. In addition, while local resources are required to attend on site to deliver the service, we are still in a position to support and assist you.
                            </p>

                            <p className="director-message-text mb-0">
                                The organisations that matter most to our communities deserve better. That's what we're here to change."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;
