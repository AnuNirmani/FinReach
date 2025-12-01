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
      description: 'Stop scrambling when audit season arrives. Build audit-readiness into your regular routines with these practical steps.',
      icon: '✓',
      categoryColor: '#A8D5A3'
    },
    {
      id: 5,
      category: 'Audit Readiness',
      title: 'Understanding ACNC and ASIC Reporting Deadlines',
      description: 'Missing statutory deadlines can lead to penalties and damaged reputation. Here\'s your complete guide to staying compliant.',
      icon: '✓',
      categoryColor: '#A8D5A3'
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
                backgroundColor: '#A8D5A3', 
                color: '#fff', 
                fontSize: '14px',
                padding: '8px 20px',
                borderRadius: '20px'
              }}>
                Audit Readiness
              </span>
              <h1 className="display-4 fw-bold mb-3">Audit Readiness</h1>
              <p className="lead text-muted">
                Stay audit-ready year-round with expert guidance on compliance, documentation, and regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="articles-section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="row g-4">
            {articles.map((article) => (
              <div key={article.id} className="col-lg-4 col-md-6">
                <div className="card h-100 shadow-sm border-0" style={{ transition: 'transform 0.3s ease' }}>
                  <div className="card-body d-flex flex-column p-4">
                    <div className="mb-3">
                      <span style={{ fontSize: '40px' }}>{article.icon}</span>
                    </div>
                    <span className="badge mb-3 align-self-start" style={{ 
                      backgroundColor: article.categoryColor, 
                      color: '#fff',
                      fontSize: '12px',
                      padding: '6px 12px'
                    }}>
                      {article.category}
                    </span>
                    <h3 className="h5 fw-bold mb-3">{article.title}</h3>
                    <p className="text-muted mb-4 flex-grow-1">{article.description}</p>
                    <Link 
                      to={`/blog/article/${article.id}`} 
                      className="btn btn-outline-primary mt-auto"
                      style={{ width: 'fit-content' }}
                    >
                      Read more →
                    </Link>
                  </div>
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
