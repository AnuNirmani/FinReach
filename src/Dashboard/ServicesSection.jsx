import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const ServicesSection = () => {
    const services = [
        {
            icon: 'bi-file-earmark-check',
            title: 'Bookkeeping & Accounting',
            description: 'Professional-grade accounting at a price small business can sustain. Your work is completed by an off-shore team with 25 years of expertise, under Australian CPA oversight.',
            link: '/blog/bookkeeping-cash-flow'
        },
        {
            icon: 'bi-shield-check',
            title: 'Assurance',
            description: 'Bespoke assurance engagements for not-for-profits and regulated organisations – so you\'re not overspending on a full audit when a targeted review will do.',
            link: '/blog/assurance-funding'
        },
        {
            icon: 'bi-check-circle',
            title: 'Auditing',
            description: 'Risk-based audits by experienced professionals who understand NFP, government and for-profit environments. Compliant, on time, with real insight.',
            link: '/blog/audit-readiness'
        },
        {
            icon: 'bi-graph-up-arrow',
            title: 'Fractional CFO',
            description: 'Executive-level finance leadership without the full-time salary. Strategic financial partnership for confident, data-driven growth.',
            link: '/blog/fractional-cfo-insights'
        }
    ];

    return (
        <section className="services-section">
            <div className="container text-center">
                <h2 className="services-title">End-to-end financial support, tailored to your stage of growth</h2>
                <p className="services-subtitle">
                    We combine practical bookkeeping, smart use of off-shore delivery, and 25+ years of Australian assurance and audit experience to give you a complete financial backbone.
                </p>

                <div className="row g-4 text-start">
                    {services.map((service, index) => (
                        <div key={index} className="col-lg-3 col-md-6">
                            <div className="service-card">
                                <i className={`bi ${service.icon} service-icon`}></i>
                                <h3 className="service-card-title">{service.title}</h3>
                                <p className="service-card-text">
                                    {service.description}
                                </p>
                                <Link to={service.link} className="btn-learn-more">
                                    Learn more <i className="bi bi-arrow-right-short"></i>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="delivery-note-box text-center">
                    <span className="note-strong">Note on delivery:</span> Bookkeeping & Accounting is delivered off-shore, under the direction, review and approval of a CPA in Australia. Assurance, Auditing & Fractional CFO are delivered in Australia by experienced, locally based professionals.
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
