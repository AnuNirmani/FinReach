import React from 'react';
import './Dashboard.css';

const PainPointsSection = () => {
    const painPoints = [
        {
            text: "You're spending up to 30% of your time juggling bills, payroll and reconciliations instead of growing your organisation."
        },
        {
            text: "Audits and reviews leave your team drained, scrambling for documents and worried about deadlines and findings."
        },
        {
            text: "Cash flow feels like guesswork – you're not sure what's coming in, what's going out, or if there'll be enough to cover everything."
        },
        {
            text: "You know you need serious financial insight, but a full-time CFO simply isn't in the budget right now."
        }
    ];

    return (
        <>
            <div className="familiar-image-banner" style={{
                backgroundImage: "linear-gradient(to top, rgba(15, 62, 93, 0.5) 0%, rgba(15, 62, 93, 0.5) 100%), url('https://finreach.ultimatemarketing.com.au/assets/team-collaboration-Dfr1_auB.jpg')"
            }}></div>

            <section className="familiar-content-section">
                <div className="container">
                    <h2 className="familiar-title text-center">Does any of this sound familiar?</h2>

                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="row">
                                <div className="col-md-6">
                                    {painPoints.slice(0, 2).map((point, index) => (
                                        <div key={index} className="pain-point-item">
                                            <div className="pain-icon-circle">
                                                <i className="bi bi-x"></i>
                                            </div>
                                            <p className="pain-text">
                                                {point.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="col-md-6">
                                    {painPoints.slice(2, 4).map((point, index) => (
                                        <div key={index} className="pain-point-item">
                                            <div className="pain-icon-circle">
                                                <i className="bi bi-x"></i>
                                            </div>
                                            <p className="pain-text">
                                                {point.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="familiar-footer-note text-center">
                        We step in to replace the stress with structure – and give you back time, confidence and control.
                    </p>
                </div>
            </section>
        </>
    );
};

export default PainPointsSection;
