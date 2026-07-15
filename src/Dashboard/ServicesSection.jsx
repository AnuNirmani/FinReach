import React from 'react';
import './Dashboard.css';

const ServicesSection = () => {
    const transparencyCards = [
        {
            title: 'Canberra',
            subheading: 'Australian oversight. Right here.',
            description:
                'Don Siriwardana and the FinReach Directorship is based in Canberra. He\'s the face and first point of contact for FinReach. Don holds Australian professional registrations. When something needs a decision, a senior eye, or a conversation - it\'s handled locally.'
        },
        {
            title: 'Sri Lanka',
            subheading: 'Internationally credentialled. Exceptionally qualified.',
            description:
                'Our delivery team is based in Sri Lanka - home to the largest pool of ACCA and CIMA-certified accountants outside the United Kingdom. Directly aligned with ATO, ASIC, and ACNC compliance requirements. They\'re not generalists. They\'re finance and accounting specialists.'
        }
    ];

    const statCards = [
        {
            heading: '25+ Years',
            text: 'Australian audit experience'
        },
        {
            heading: 'Big 4',
            text: 'Trained offshore team'
        },
        {
            heading: 'ACT | NSW | VIC',
            text: 'Geographic reach'
        }
    ];

    return (
        <section className="services-section">
            <div className="container text-center services-work-shell">
                <span className="services-work-badge">How We Work</span>

                <h2 className="services-title services-work-title">
                    Two cities. One team. Complete transparency.
                </h2>

                <p className="services-subtitle services-work-subtitle">
                    FinReach runs on a deliberate model, local Canberra leadership and client relationships, backed by a highly qualified team in Sri Lanka with Big Four experience.
                </p>

                <div className="row g-4 services-work-cards-row">
                    {transparencyCards.map((card) => (
                        <div key={card.title} className="col-lg-6">
                            <div className="services-work-card h-100">
                                <h3 className="services-work-card-title">{card.title}</h3>
                                <h4 className="services-work-card-subheading">{card.subheading}</h4>
                                <p className="services-work-card-text">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="row g-4 services-work-stats-row">
                    {statCards.map((stat) => (
                        <div key={stat.heading} className="col-lg-4 col-md-6">
                            <div className="services-work-stat-card h-100">
                                <h3 className="services-work-stat-heading">{stat.heading}</h3>
                                <p className="services-work-stat-text">{stat.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
