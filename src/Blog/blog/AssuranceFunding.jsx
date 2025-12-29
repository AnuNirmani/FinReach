import React, { useState, useEffect } from 'react';
import Header from '../../Dashboard/Header';
import Footer from '../../Dashboard/Footer';
import { Link } from 'react-router-dom';
import '../../Dashboard/Dashboard.css';

const AssuranceFunding = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to strip HTML and truncate text
  const truncateText = (html, maxLength = 150) => {
    // Remove HTML tags
    const text = html.replace(/<[^>]*>/g, '');
    // Truncate and add ellipsis
    if (text.length > maxLength) {
      return text.substring(0, maxLength).trim() + '...';
    }
    return text;
  };

  useEffect(() => {
  const fetchAssurance = async () => {
    try {
      setLoading(true);
       const response = await fetch('http://localhost:8001/api/posts/category/57');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Fetched articles:', data);
      console.log('Number of articles:', data.length);
      setArticles(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching assurance:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchAssurance();
}, []);


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
                Assurance & Funding
              </span>
              <h1 className="display-4 fw-bold mb-3">Assurance & Funding</h1>
              <p className="lead text-muted">
                How to stay grant-ready and avoid overspending on audits
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="recent-articles-section">
        <div className="container">
          {loading && (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}

          {error && (
            <div className="alert alert-danger" role="alert">
              Error loading articles: {error}
            </div>
          )}

          {!loading && !error && articles.length === 0 && (
            <div className="text-center py-5">
              <p className="text-muted">No articles found.</p>
            </div>
          )}

          {!loading && !error && articles.length > 0 && (
            <div className="row g-4">
              {articles.map((article) => (
                <div key={article.post_id} className="col-lg-4 col-md-6">
                  <div className="article-card">
                    <i className="bi bi-shield-check article-icon"></i>
                    <div className="article-category">{article.category_name}</div>
                    <h3 className="article-title">{article.title}</h3>
                    <p className="article-excerpt">
                      {truncateText(article.description, 150)}
                    </p>
                    <Link to={`/blog/article/${article.post_id}`} className="btn-read-more">
                      Read more <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AssuranceFunding;
