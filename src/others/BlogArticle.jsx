import React from 'react';
import { Link } from 'react-router-dom';
import '../Dashboard/Dashboard.css';

const BlogArticle = () => {
    return (
        <div className="blog-article-page">
            {/* Navigation */}
            <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="https://finreach.com.au/wp-content/uploads/2024/06/site-logo.png" width="145" alt="FinReach Logo" /> 
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/categories/bookkeeping-cash-flow">Bookkeeping & Cash Flow</Link></li>
                                    <li><Link className="dropdown-item" to="/categories/assurance-funding">Assurance & Funding</Link></li>
                                    <li><Link className="dropdown-item" to="/categories/audit-readiness">Audit Readiness</Link></li>
                                    <li><Link className="dropdown-item" to="/categories/fractional-cfo-insights">Fractional CFO</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>

                        <div className="d-flex">
                            <Link to="/contact" className="btn btn-finreach-cta">Book a Consultation</Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Literary Blog Post */}
            <div className="lit-article-wrapper">
                {/* Elegant Header */}
                <header className="lit-header">
                    <span className="lit-category">Financial Strategy</span>
                    <h1 className="lit-title">The Quiet Art of Financial Resilience</h1>
                    <p className="lit-subtitle">Why the most successful organizations don't just chase growth—they architect stability.</p>
                    
                    <div className="lit-meta">
                        <span>By Sarah Jenkins</span> &bull; <span>November 28, 2025</span>
                    </div>
                </header>

                {/* Wide Hero Image */}
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" alt="Abstract Architecture" className="lit-hero-image" />

                {/* The Article Body */}
                <article className="lit-body">
                    {/* Paragraph with Drop Cap */}
                    <p className="lit-drop-cap">
                        There is a seductive quality to speed. In the early days of a business, velocity is often mistaken for vitality. We move fast, we break things, and we celebrate the chaos as a sign of progress. But there comes a moment—often quiet, often unnoticed—when the machinery of growth begins to grind against the gears of stability.
                    </p>

                    <p>
                        I have sat in boardrooms where the revenue charts pointed sharply upward, yet the air was thick with anxiety. The numbers were good, but the foundation was cracking. It is in these moments that the true nature of financial leadership reveals itself. It is not about acceleration; it is about aerodynamics.
                    </p>

                    <div className="lit-divider">&mdash; * &mdash;</div>

                    <h2>The Illusion of Complexity</h2>

                    <p>
                        We tend to equate sophistication with complexity. We build elaborate financial models, intricate corporate structures, and labyrinthine reporting lines. We convince ourselves that if it isn't difficult to understand, it isn't valuable.
                    </p>

                    <p>
                        However, the most resilient organizations I have worked with share a startling characteristic: <strong>simplicity</strong>. Their ledgers are clean. Their cash flow forecasts are boringly accurate. They do not hide behind jargon.
                    </p>

                    {/* Pull Quote */}
                    <div className="lit-pull-quote">
                        "True financial health is quiet. It doesn't scream for attention; it simply supports the weight of the ambition placed upon it."
                    </div>

                    <p>
                        When we strip away the noise, we are left with the raw truth of the business. This is where the work of assurance and auditing transforms from a compliance exercise into a strategic asset. It ceases to be a test you must pass and becomes a mirror you must look into.
                    </p>

                    <h2>Architecting for the Decade</h2>

                    <p>
                        To build for the long term requires a shift in mindset. It demands that we stop asking "Can we afford this?" and start asking "Does this strengthen our core?"
                    </p>
                    
                    <p>
                        This brings us to the concept of the Fractional CFO. It is a modern solution to an age-old problem: how to access high-level wisdom without the high-level overhead. It allows a growing entity to borrow the eyes of a veteran strategist, someone who can spot the storm clouds long before they reach the shore.
                    </p>

                    <p>
                        In the end, financial confidence is not about having the most money in the bank. It is about the certainty that comes from knowing exactly where you stand, and exactly where you are going.
                    </p>

                    {/* Literary Author Box */}
                    <div className="lit-author">
                        <img src="https://ui-avatars.com/api/?name=Sarah+Jenkins&background=333&color=fff" alt="Sarah Jenkins" />
                        <div className="lit-author-bio">
                            <h5>About the Author</h5>
                            <p>
                                Sarah Jenkins is a partner at FinReach. She writes extensively on the intersection of organizational psychology and fiscal policy. She believes that good accounting is a form of storytelling.
                            </p>
                        </div>
                    </div>
                </article>
            </div>

            {/* Footer */}
            <footer className="footer-section">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-5 col-md-12">
                            <div className="footer-brand-wrapper">
                                <Link className="navbar-brand" to="/">
                                    <img src="https://finreach.com.au/wp-content/uploads/2024/06/site-logo.png" width="145" alt="FinReach Logo" /> 
                                </Link>
                            </div>
                            
                            <p className="footer-desc">
                                Financial confidence for businesses, not-for-profits and health organisations.
                            </p>

                            <Link to="/contact" className="btn-footer-cta">Book Your Consultation</Link>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <h4 className="footer-heading">Quick Links</h4>
                            <ul className="footer-links-list">
                                <li><Link to="/categories/bookkeeping-cash-flow" className="footer-link">Bookkeeping & Accounting</Link></li>
                                <li><Link to="/categories/assurance-funding" className="footer-link">Assurance</Link></li>
                                <li><Link to="/categories/audit-readiness" className="footer-link">Auditing</Link></li>
                                <li><Link to="/categories/fractional-cfo-insights" className="footer-link">Fractional CFO</Link></li>
                                <li><Link to="/about" className="footer-link">About</Link></li>
                                <li><Link to="/blog" className="footer-link">Blog</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <h4 className="footer-heading">Contact Us</h4>
                            <ul className="footer-contact-list">
                                <li className="footer-contact-item">
                                    <i className="bi bi-envelope contact-icon"></i>
                                    <span>info@finreach.com.au</span>
                                </li>
                                <li className="footer-contact-item">
                                    <i className="bi bi-telephone contact-icon"></i>
                                    <span>(02) 6105 9300</span>
                                </li>
                                <li className="footer-contact-item">
                                    <i className="bi bi-geo-alt contact-icon"></i>
                                    <span>Level 1, 11-17 Swanson Court,<br />Belconnen ACT 2617 Australia</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        &copy; 2025 FinReach. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default BlogArticle;
