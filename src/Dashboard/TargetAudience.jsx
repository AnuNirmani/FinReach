import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import auditHero from '../assets/assets/audit1.jpg';
import assuranceHero from '../assets/assets/assurance1.jpg';
import bookkeepingHero from '../assets/assets/bookkeeping1.jpg';
import cfoHero from '../assets/assets/cfo1.jpg';
import nfpAudience from '../assets/assets/notforprofits.jpg';
import smeAudience from '../assets/assets/growthstage.jpg';

const TargetAudience = () => {
    const services = [
        {
            image: auditHero,
            title: 'Auditing',
            description: 'Risk-based audits for NFPs and regulated organisations. Compliant and delivered on time.',
            to: '/newauditing'
        },
        {
            image: assuranceHero,
            title: 'Assurance',
            description: 'Independent verification of financial controls sized appropriately for your organisation.',
            to: '/assurance'
        },
        {
            image: bookkeepingHero,
            title: 'Bookkeeping & Accounting',
            description: 'Professional-grade financials without the overhead of an in-house function.',
            to: '/bookkeeping-accounting' 
        },
        {
            image: cfoHero,
            title: 'Fractional CFO',
            description: 'Executive-level financial leadership without the full-time salary.',
            to: '/fractional-cfo'
        }
    ];

    const audienceGroups = [
        {
            image: nfpAudience,
            title: 'Not-For-Profits',
            description:
                'Community service organisations, disability providers, housing associations $3M to $30M. You carry audit obligations, ACNC requirements, restricted funds and board accountability. You need a firm that already speaks your language.',
            linkLabel: 'Learn More NFP Services',
            to: '/assurance'
        },
        {
            image: smeAudience,
            title: 'Growth-Stage SMEs',
            description:
                "Private businesses turning over $1M - $10M who've outgrown DIY bookkeeping. You're growing fast but your financial infrastructure hasn't kept pace. You need CFO-level thinking without the full-time salary.",
            linkLabel: 'Learn More SME Services',
            to: '/fractional-cfo'
        }
    ];

    return (
        <section className="target-audience-section">
            <div className="container target-services-shell text-center">
                <span className="target-services-badge">Services</span>
                <h2 className="target-services-title">What we do</h2>

                <div className="row g-4 target-services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="col-xl-3 col-lg-6">
                            <div className="target-service-card text-center">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="target-service-image"
                                />

                                <div className="target-service-body">
                                    <h3 className="target-service-title">{service.title}</h3>
                                    <p className="target-service-text">
                                        {service.description}
                                    </p>

                                    <Link to={service.to} className="target-service-link">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="target-who-section">
                    <span className="target-services-badge">Who We Work With</span>
                    <h2 className="target-services-title target-who-title">
                        Designed for the organisations that matter
                    </h2>
                    <p className="target-who-subtitle">
                        Not-for-profits and SMEs doing real work in their communities deserve an accounting partner that cares.
                    </p>

                    <div className="row g-4 target-who-grid">
                        {audienceGroups.map((group, index) => (
                            <div key={index} className="col-lg-6">
                                <article className="target-who-card text-center">
                                    <img src={group.image} alt={group.title} className="target-who-image" />
                                    <h3 className="target-who-card-title">{group.title}</h3>
                                    <p className="target-who-card-text">{group.description}</p>
                                    <Link to={group.to} className="target-who-link">
                                        {group.linkLabel}
                                    </Link>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TargetAudience;
