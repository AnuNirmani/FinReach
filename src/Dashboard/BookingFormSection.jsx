import React from 'react';
import './Dashboard.css';

const BookingFormSection = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Booking form submitted');
    };

    return (
        <section className="container" id="booking-form">
            <div className="booking-outer-wrapper text-center">
                <h2 className="booking-title">Book a 30-minute, obligation-free consultation</h2>
                <p className="booking-subtitle">Fill in this form and we'll be in touch to confirm a time.</p>

                <div className="header bg-white wbrd">
                    <div className="form-card-accurate text-start">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group-spacing">
                                <label htmlFor="fullNameAccBooking" className="form-label-acc">Full Name</label>
                                <input type="text" className="form-control-acc" id="fullNameAccBooking" placeholder="Full Name" />
                            </div>

                            <div className="form-group-spacing">
                                <label htmlFor="phoneAccBooking" className="form-label-acc">Phone *</label>
                                <input type="text" className="form-control-acc" id="phoneAccBooking" placeholder="Phone" required />
                            </div>

                            <div className="form-group-spacing">
                                <label htmlFor="companyNameAccBooking" className="form-label-acc">Company Name</label>
                                <input type="text" className="form-control-acc" id="companyNameAccBooking" placeholder="Company" />
                            </div>

                            <div className="form-group-spacing">
                                <label htmlFor="emailAccBooking" className="form-label-acc">Email *</label>
                                <input type="email" className="form-control-acc" id="emailAccBooking" placeholder="Email" required />
                            </div>

                            <div className="form-group-spacing">
                                <label htmlFor="industryAccBooking" className="form-label-acc">Industry</label>
                                <select className="form-select-acc" id="industryAccBooking">
                                    <option value="" disabled selected>Industry</option>
                                    <option value="non-profit">Non-profit</option>
                                    <option value="health">Health</option>
                                    <option value="corporate">Corporate</option>
                                </select>
                            </div>

                            <div className="form-group-spacing">
                                <label htmlFor="serviceAccBooking" className="form-label-acc">Service *</label>
                                <select className="form-select-acc" id="serviceAccBooking" required>
                                    <option value="" disabled selected>Service Required</option>
                                    <option value="bookkeeping">Bookkeeping</option>
                                    <option value="auditing">Auditing</option>
                                    <option value="advisory">Advisory</option>
                                </select>
                            </div>

                            <div className="form-check mb-4 d-flex">
                                <input className="form-check-input me-2" type="checkbox" value="" id="consentCheckAccBooking" />
                                <label className="form-check-label consent-text" htmlFor="consentCheckAccBooking">
                                    I consent to receive messages related to FinReach services. These messages may include appointment reminders, order confirmations, and marketing material. You can opt-out at any time.
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
        </section>
    );
};

export default BookingFormSection;
