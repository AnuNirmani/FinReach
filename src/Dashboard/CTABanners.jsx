import React from 'react';
import './Dashboard.css';

const CTABanners = () => {
    return (
        <>
            <section className="cta-lime-banner">
                <div className="container">
                    <h2 className="cta-lime-title">Not sure which service you really need?</h2>
                    <p className="cta-lime-text">
                        Book your 30-minute, obligation-free consultation and we'll map out the best fit for your size, risk and budget.
                    </p>
                </div>
            </section>

            <section className="final-cta-section">
                <div className="container">
                    <h2 className="final-cta-title">Ready to take the stress out of your finances?</h2>
                    
                   
                    <button
  type="button"
  className="btn btn-dark-consult"
  onClick={() => window.dispatchEvent(new Event('open-consultation-modal'))}
>
  Book Your 30-Minute Consultation
</button>

                </div>
            </section>
        </>
    );
};

export default CTABanners;
