import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { buildApiUrl } from '../utils/api';

const ALLOWED_CATEGORY_IDS = [56, 57, 58, 59];

const InsightsSection = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLatestPosts = async () => {
            try {
                setLoading(true);
                const responses = await Promise.allSettled(
                    ALLOWED_CATEGORY_IDS.map((categoryId) =>
                        fetch(buildApiUrl(`posts/category/${categoryId}`))
                    )
                );

                const mergedPosts = [];

                for (const result of responses) {
                    if (result.status === 'fulfilled' && result.value.ok) {
                        const data = await result.value.json();
                        if (Array.isArray(data)) {
                            mergedPosts.push(...data);
                        }
                    }
                }

                const sortedLatest = mergedPosts
                    .filter((post) => post && (post.post_id || post.id))
                    .sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0))
                    .slice(0, 3);

                setPosts(sortedLatest);
                setError(null);
            } catch (err) {
                console.error('Failed to fetch latest posts:', err);
                setError('Unable to load insights right now.');
            } finally {
                setLoading(false);
            }
        };

        fetchLatestPosts();
    }, []);

    return (
        <>
            <section className="fr-insights-section">
                <div className="container fr-insights-shell text-center">
                    <span className="fr-insights-badge">Finreach Insights</span>

                    {loading && (
                        <div className="fr-insights-empty-wrap">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )}

                    {!loading && error && (
                        <div className="alert alert-danger" role="alert">{error}</div>
                    )}

                    {!loading && !error && posts.length === 0 && (
                        <div className="fr-insights-empty-wrap">
                            <p className="fr-insights-empty">No blogs found</p>
                        </div>
                    )}

                    {!loading && !error && posts.length > 0 && (
                        <>
                            <div className="row g-4 text-start">
                                {posts.map((post) => (
                                    <div key={post.post_id || post.id} className="col-lg-4 col-md-6">
                                        <article className="fr-insights-card">
                                            {post.image && (
                                                <img src={post.image} alt={post.title} className="fr-insights-image" />
                                            )}
                                            <div className="fr-insights-content">
                                                <h3 className="fr-insights-title">{post.title}</h3>
                                                {post.sub_topic && (
                                                    <p className="fr-insights-subtopic">{post.sub_topic}</p>
                                                )}
                                                <div className="fr-insights-meta">
                                                    {post.created_at ? new Date(post.created_at).toLocaleDateString() : ''}
                                                </div>
                                                <Link to={`/blog/article/${post.post_id || post.id}`} className="fr-insights-readmore">
                                                    Read more <i className="bi bi-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </article>
                                    </div>
                                ))}
                            </div>

                            <div className="fr-insights-action-wrap">
                                <Link to="/blog" className="fr-insights-next-btn">
                                    Next: View all posts <i className="bi bi-arrow-right"></i>
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </section>

            <style>{`
                .fr-insights-section {

                    margin: 22px 0;
                    min-height: 280px;
                }

                .fr-insights-shell {
                    max-width: 1760px;
                    padding-top: 58px;
                    padding-bottom: 52px;
                }

                .fr-insights-badge {
                    display: inline-block;
                    background-color: #cddc39;
                    color: #2b4a5f;
                    font-weight: 700;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    padding: 0.38rem 1.35rem;
                    border-radius: 999px;
                    font-size: 0.82rem;
                    margin-bottom: 2.6rem;
                }

                .fr-insights-empty-wrap {
                    min-height: 100px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .fr-insights-empty {
                    margin: 0;
                    color: #101417;
                    font-size: 2.35rem;
                    line-height: 1.2;
                    font-weight: 500;
                }

                .fr-insights-card {
                    height: 100%;
                    background: #fff;
                    border: 1px solid #e6ebef;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 8px 24px rgba(16, 20, 23, 0.06);
                }

                .fr-insights-image {
                    width: 100%;
                    height: 220px;
                    object-fit: cover;
                    display: block;
                }

                .fr-insights-content {
                    padding: 1rem 1rem 1.2rem;
                }

                .fr-insights-title {
                    font-size: 1.1rem;
                    margin: 0;
                    color: #101417;
                    line-height: 1.4;
                }

                .fr-insights-subtopic {
                    margin-top: 0.6rem;
                    color: #4f5c66;
                    font-size: 0.95rem;
                    line-height: 1.45;
                }

                .fr-insights-meta {
                    margin-top: 0.65rem;
                    color: #6f7b84;
                    font-size: 0.85rem;
                }

                .fr-insights-readmore {
                    margin-top: 0.75rem;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.35rem;
                    color: #2b4a5f;
                    text-decoration: none;
                    font-weight: 600;
                }

                .fr-insights-action-wrap {
                    margin-top: 2rem;
                    text-align: center;
                }

                .fr-insights-next-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.4rem;
                    background: #2b4a5f;
                    color: #fff;
                    text-decoration: none;
                    font-weight: 600;
                    border-radius: 999px;
                    padding: 0.62rem 1.2rem;
                }

                .fr-insights-next-btn:hover {
                    color: #fff;
                    background: #21394a;
                }

                @media (max-width: 991px) {
                    .fr-insights-empty {
                        font-size: 1.8rem;
                    }
                }

                @media (max-width: 767px) {
                    .fr-insights-section {
                        border-radius: 20px;
                        margin: 18px 0;
                        min-height: 230px;
                    }

                    .fr-insights-shell {
                        padding-top: 42px;
                        padding-bottom: 36px;
                    }

                    .fr-insights-badge {
                        margin-bottom: 1.8rem;
                        font-size: 0.75rem;
                        letter-spacing: 0.12em;
                    }

                    .fr-insights-empty {
                        font-size: 1.35rem;
                    }

                    .fr-insights-image {
                        height: 180px;
                    }
                }
            `}</style>
        </>
    );
};

export default InsightsSection;
