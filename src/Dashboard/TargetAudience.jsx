import React from 'react';
import './Dashboard.css';

const TargetAudience = () => {
    const audiences = [
        {
            icon: 'bi-heart',
            title: 'Health care professionals',
            description: 'Especially dental and specialist practices that need clear numbers, strong controls and the capacity to grow without chaos.'
        },
        {
            icon: 'bi-people',
            title: 'Medium-sized not-for-profits',
            description: 'With $3M+ turnover that require reliable assurance and audit support to meet funding, board and regulatory expectations.'
        },
        {
            icon: 'bi-building',
            title: 'Small and medium businesses',
            description: 'Up to 10 employees that have moved past DIY bookkeeping and now need proper financial operations and leadership, not just tax compliance.'
        }
    ];

    return (
        <section className="target-audience-section">
            <div className="container text-center">
                <h2 className="section-title">Who FinReach is for</h2>
                <p className="section-subtitle">
                    FinReach is a Canberra-based financial services firm supporting organisations where the stakes are high and time is limited. We work best with:
                </p>

                <div className="row g-4">
                    {audiences.map((audience, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <div className="audience-card text-start">
                                <i className={`bi ${audience.icon} audience-icon`}></i>
                                <h3 className="audience-card-title">{audience.title}</h3>
                                <p className="audience-card-text">
                                    {audience.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="section-footer-text">
                    If that sounds like you, you don't have to wrestle with spreadsheets, deadlines and financial risk on your own.
                </p>
            </div>
        </section>
    );
};

export default TargetAudience;
