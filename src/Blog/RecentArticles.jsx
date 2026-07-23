import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { buildApiUrl } from '../utils/api';

const ALLOWED_CATEGORY_IDS = [56, 57, 58, 59];

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
        const fetchLatest = async () => {
            try {
                setLoading(true);
                const results = await Promise.allSettled(
                    ALLOWED_CATEGORY_IDS.map((id) =>
                        fetch(buildApiUrl(`posts/category/${id}`))
                    )
                );

                const merged = [];
                for (const result of results) {
                    if (result.status === 'fulfilled' && result.value.ok) {
                        const data = await result.value.json();
                        if (Array.isArray(data)) merged.push(...data);
                    }
                }

                const latest3 = merged
                    .filter((p) => p && (p.post_id || p.id))
                    .sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0))
                    .slice(0, 3);

                setArticles(latest3);
                setError(null);
            } catch (err) {
                console.error('Error fetching recent articles:', err);
                setError('Failed to load articles');
            } finally {
                setLoading(false);
            }
        };

        fetchLatest();
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
                            <div key={article.post_id || article.id} className="col-lg-4 col-md-6">
                                <div className="article-card">
                                    <i className={`bi ${iconFor(article.category_name)} article-icon`}></i>
                                    <div className="article-category">{article.category_name}</div>
                                    <h3 className="article-title">{article.title}</h3>
                                    <p className="article-excerpt">{truncate(article.description)}</p>
                                    <Link to={`/blog/article/${article.post_id || article.id}`} className="btn-read-more">
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
