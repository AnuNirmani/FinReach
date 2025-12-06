import React from 'react';
import './Dashboard.css';
import healthcareImg from '../assets/assets/healthcare-practice-3tfo55K3.jpg';

const ProcessSection = () => {
    const steps = [
        {
            number: '1',
            title: 'Free 30-minute consultation',
            description: 'We discuss your organisation, challenges, deadlines and goals – and clarify which services you actually need (and which you don\'t).'
        },
        {
            number: '2',
            title: 'Assessment & recommendations',
            description: 'We review your current financial setup – bookkeeping, systems, controls and obligations – and give clear, practical recommendations.'
        },
        {
            number: '3',
            title: 'Tailored engagement',
            description: 'We design a scope that fits your size, budget and risk profile – whether that\'s full back-office accounting, assurance, audit or fractional CFO support.'
        },
        {
            number: '4',
            title: 'Ongoing support and reporting',
            description: 'You get regular reporting, proactive communication and a partner who helps you stay ready for audits, lenders, boards and growth opportunities.'
        }
    ];

    return (
        <>
            <div
  className="process-banner"
  style={{
    backgroundImage: `
      linear-gradient(
        to top,
        rgba(15, 62, 93, 0.4) 0%,
        rgba(15, 62, 93, 0.5) 100%
      ),
      url(${healthcareImg})
    `
  }} 
></div>


            <section className="process-section">
                <div className="container">
                    <h2 className="process-title text-center">A simple process to remove complexity</h2>

                    <div className="row g-4">
                        {steps.map((step, index) => (
                            <div key={index} className="col-lg-3 col-md-6">
                                <div className="process-card text-start">
                                    <div className="process-number">{step.number}</div>
                                    <h3 className="process-card-title">{step.title}</h3>
                                    <p className="process-card-text">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProcessSection;
