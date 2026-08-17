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
                    background: linear-gradient(135deg, #f8fafb 0%, #f3f6f9 100%);
                    border-radius: 24px;
                }

                .fr-insights-shell {
                    max-width: 1760px;
                    padding-top: 58px;
                    padding-bottom: 52px;
                }

                .fr-insights-badge {
                    display: inline-block;
                    background: linear-gradient(135deg, #cddc39 0%, #b8cc1f 100%);
                    color: #2b4a5f;
                    font-weight: 700;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    padding: 0.5rem 1.5rem;
                    border-radius: 999px;
                    font-size: 0.82rem;
                    margin-bottom: 2.6rem;
                    box-shadow: 0 4px 12px rgba(205, 220, 57, 0.25);
                    transition: all 0.3s ease;
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
                    border: 2px solid #e6ebef;
                    border-radius: 18px;
                    overflow: hidden;
                    box-shadow: 0 8px 32px rgba(16, 20, 23, 0.08);
                    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                }

                .fr-insights-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: linear-gradient(90deg, #cddc39 0%, #b8cc1f 100%);
                    border-radius: 18px 18px 0 0;
                }

                .fr-insights-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 16px 48px rgba(16, 20, 23, 0.16);
                    border-color: #cddc39;
                }

                .fr-insights-image {
                    width: 100%;
                    height: 220px;
                    object-fit: cover;
                    display: none;
                }

                .fr-insights-content {
                    padding: 2rem 1.8rem 1.8rem;
                }

                .fr-insights-title {
                    font-size: 1.28rem;
                    margin: 0;
                    color: #0f3e5d;
                    line-height: 1.5;
                    font-weight: 700;
                    letter-spacing: -0.3px;
                }

                

                .fr-insights-subtopic {
                    margin-top: 0.8rem;
                    color: #4f5c66;
                    font-size: 0.95rem;
                    line-height: 1.6;
                }

                .fr-insights-meta {
                    margin-top: 1.2rem;
                    color: #8b99a3;
                    font-size: 0.85rem;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .fr-insights-meta::before {
                    content: '📅';
                    font-size: 1rem;
                }

                .fr-insights-readmore {
                    margin-top: 1.5rem;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #0f3e5d;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 0.95rem;
                    padding: 0.6rem 0;
                    border-bottom: 2px solid transparent;
                    transition: all 0.3s ease;
                }

              

                .fr-insights-action-wrap {
                    margin-top: 2.5rem;
                    text-align: center;
                }

                .fr-insights-next-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: linear-gradient(135deg, #0f3e5d 0%, #1a5073 100%);
                    color: #fff;
                    text-decoration: none;
                    font-weight: 700;
                    border-radius: 999px;
                    padding: 0.75rem 1.8rem;
                    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 4px 16px rgba(15, 62, 93, 0.3);
                }

                .fr-insights-next-btn:hover {
                    color: #fff;
                    background: linear-gradient(135deg, #21394a 0%, #0f3e5d 100%);
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(15, 62, 93, 0.4);
                    gap: 0.8rem;
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

                    .fr-insights-content {
                        padding: 1.5rem 1.4rem 1.2rem;
                    }

                    .fr-insights-title {
                        font-size: 1.1rem;
                    }
                }
            `}</style>
        </>
    );
};

export default InsightsSection;
