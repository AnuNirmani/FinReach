import React from 'react';
import './Dashboard.css';

const HeroWithForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted');
    };

    return (
        <section className="hero-section" style={{backgroundImage: "url('https://finreach.ultimatemarketing.com.au/assets/hero-home-DxzjKHhr.jpg')"}}>
            <div className="hero-overlay"></div>

            <div className="container hero-content">
                <div className="row align-items-center text-start">
                    <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
                        <h1 className="hero-title">
                            Financial confidence for businesses, not-for-profits and health organisations
                        </h1>
                        
                        <p className="hero-subtitle text-white opacity-75">
                            FinReach takes the stress out of bookkeeping, assurance, audits and financial leadership, so you can focus on growing your impact with clarity and control.
                        </p>

                        <div className="mb-3">
                            <a href="#booking-form" className="btn btn-hero-primary">
                                Book a 30-minute, obligation-free consultation
                            </a>
                        </div>

                        <p className="hero-small-text text-white opacity-75">
                            In just 30 minutes, we'll review where you're at today and outline practical next steps – no pressure, no jargon.
                        </p>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="form-card-accurate text-start">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group-spacing">
                                    <label htmlFor="fullNameAcc" className="form-label-acc">Full Name</label>
                                    <input type="text" className="form-control-acc" id="fullNameAcc" placeholder="Full Name" />
                                </div>

                                <div className="form-group-spacing">
                                    <label htmlFor="phoneAcc" className="form-label-acc">Phone *</label>
                                    <input type="text" className="form-control-acc" id="phoneAcc" placeholder="Phone" required />
                                </div>

                                <div className="form-group-spacing">
                                    <label htmlFor="companyNameAcc" className="form-label-acc">Company Name</label>
                                    <input type="text" className="form-control-acc" id="companyNameAcc" placeholder="Company" />
                                </div>

                                <div className="form-group-spacing">
                                    <label htmlFor="emailAcc" className="form-label-acc">Email *</label>
                                    <input type="email" className="form-control-acc" id="emailAcc" placeholder="Email" required />
                                </div>

                                <div className="form-group-spacing">
                                    <label htmlFor="industryAcc" className="form-label-acc">Industry</label>
                                    <select className="form-select-acc" id="industryAcc">
                                        <option value="" disabled selected>Industry</option>
                                        <option value="non-profit">Non-profit</option>
                                        <option value="health">Health</option>
                                        <option value="corporate">Corporate</option>
                                    </select>
                                </div>

                                <div className="form-group-spacing">
                                    <label htmlFor="serviceAcc" className="form-label-acc">Service *</label>
                                    <select className="form-select-acc" id="serviceAcc" required>
                                        <option value="" disabled selected>Service Required</option>
                                        <option value="bookkeeping">Bookkeeping</option>
                                        <option value="auditing">Auditing</option>
                                        <option value="advisory">Advisory</option>
                                    </select>
                                </div>

                                <div className="form-check mb-4 d-flex">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="consentCheckAcc" />
                                    <label className="form-check-label consent-text" htmlFor="consentCheckAcc">
                                        I consent to receive messages related to FinReach services.
                                    </label>
                                </div>

                                <button type="submit" className="btn btn-submit-accurate">Book a no obligation call now</button>

                                <div className="form-footer-links">
                                    <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroWithForm;
