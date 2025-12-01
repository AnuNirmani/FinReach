import React from 'react';
import Header from '../../Dashboard/Header';
import Footer from '../../Dashboard/Footer';
import { Link } from 'react-router-dom';
import '../../Dashboard/Dashboard.css';

const AuditReadiness = () => {
  const articles = [
    {
      id: 4,
      category: 'Audit Readiness',
      title: '5 Steps to Make Your NFP Audit-Ready Year-Round',
      description: 'Stop scrambling when audit season arrives. Build audit-readiness into your regular routines with these practical steps.'
    },
    {
      id: 5,
      category: 'Audit Readiness',
      title: 'Understanding ACNC and ASIC Reporting Deadlines',
      description: 'Missing statutory deadlines can lead to penalties and damaged reputation. Here\'s your complete guide to staying compliant.'
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="blog-category-hero" style={{ marginTop: '80px', padding: '60px 0', background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <span className="badge mb-3" style={{ 
                backgroundColor: '#cddc39', 
                color: '#fff', 
                fontSize: '14px',
                padding: '8px 20px',
                borderRadius: '20px'
              }}>
                Audit Readiness
              </span>
              <h1 className="display-4 fw-bold mb-3">Audit Readiness</h1>
              <p className="lead text-muted">
                Steps to reduce stress and get more value from your audits
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="recent-articles-section">
        <div className="container">
          <div className="row g-4">
            {articles.map((article) => (
              <div key={article.id} className="col-lg-4 col-md-6">
                <div className="article-card">
                  <i className="bi bi-check-circle article-icon"></i>
                  <div className="article-category">{article.category}</div>
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-excerpt">{article.description}</p>
                  <Link to={`/blog/article/${article.id}`} className="btn-read-more">
                    Read more <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AuditReadiness;
