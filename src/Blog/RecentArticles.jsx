import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RecentArticles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Map category to icon & display label
    const iconFor = (name) => {
        if (!name) return 'bi-file-earmark-text';
        const n = name.toLowerCase();
        if (n.includes('book')) return 'bi-file-earmark-text';
        if (n.includes('assurance')) return 'bi-shield-check';
        if (n.includes('audit')) return 'bi-check-circle';
        if (n.includes('fractional')) return 'bi-graph-up-arrow';
        return 'bi-file-earmark-text';
    };

    const truncate = (html, max = 150) => {
        if (!html) return '';
        const text = html.replace(/<[^>]*>/g, '');
        return text.length > max ? text.slice(0, max).trim() + '...' : text;
    };

    useEffect(() => {
        const endpoints = [
            'http://localhost:8000/api/book-keeping',
            'http://localhost:8000/api/assurance',
            'http://localhost:8000/api/audit',
            'http://localhost:8000/api/fractional'
        ];

        const fetchAll = async () => {
            try {
                setLoading(true);
                const results = await Promise.allSettled(endpoints.map(e => fetch(e)));
                const jsonArrays = [];
                for (const r of results) {
                    if (r.status === 'fulfilled' && r.value.ok) {
                        jsonArrays.push(await r.value.json());
                    } else if (r.status === 'rejected') {
                        console.error('Endpoint failed:', r.reason);
                    }
                }
                const merged = jsonArrays.flat();
                // Sort by created_at desc (fallback to now if missing)
                merged.sort((a,b) => new Date(b.created_at || 0) - new Date(a.created_at || 0));
                setArticles(merged.slice(0,6));
                setError(null);
            } catch (err) {
                console.error('Error fetching recent articles:', err);
                setError('Failed to load articles');
            } finally {
                setLoading(false);
            }
        };
        fetchAll();
    }, []);

    return (
        <section className="recent-articles-section">
            <div className="container">
                <h2 className="recent-articles-title">Recent articles</h2>

                {loading && (
                    <div className="text-center py-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}

                {error && !loading && (
                    <div className="alert alert-danger" role="alert">{error}</div>
                )}

                {!loading && !error && articles.length === 0 && (
                    <div className="text-center py-5 text-muted">No recent articles found.</div>
                )}

                {!loading && !error && articles.length > 0 && (
                    <div className="row g-4">
                        {articles.map((article) => (
                            <div key={article.post_id} className="col-lg-4 col-md-6">
                                <div className="article-card">
                                    <i className={`bi ${iconFor(article.category_name)} article-icon`}></i>
                                    <div className="article-category">{article.category_name}</div>
                                    <h3 className="article-title">{article.title}</h3>
                                    <p className="article-excerpt">{truncate(article.description)}</p>
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
    );
};

export default RecentArticles;
