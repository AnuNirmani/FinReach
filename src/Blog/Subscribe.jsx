import React, { useState } from 'react';

const Subscribe = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle subscription logic here
        console.log('Subscribe:', formData);
        alert('Thank you for subscribing!');
        setFormData({ name: '', email: '' });
    };

    return (
        <section className="subscribe-section">
            <div className="container">
                <div className="subscribe-header">
                    <h2 className="subscribe-title">Subscribe to FinReach Insights</h2>
                    <p className="subscribe-subtitle">Get the latest financial tips and insights delivered to your inbox.</p>
                </div>

                <div className="subscribe-outer-wrapper">
                    <div className="subscribe-card">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-1">
                                <label htmlFor="subName" className="sub-label">Full Name</label>
                                <input 
                                    type="text" 
                                    className="sub-input" 
                                    id="subName"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                />
                            </div>

                            <div className="mb-1">
                                <label htmlFor="subEmail" className="sub-label">Email *</label>
                                <input 
                                    type="email" 
                                    className="sub-input" 
                                    id="subEmail"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    required
                                />
                            </div>

                            <button type="submit" className="btn-subscribe">Subscribe now</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;
