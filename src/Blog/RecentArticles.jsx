import React from 'react';

const RecentArticles = () => {
    const articles = [
        {
            icon: 'bi-file-earmark-text',
            category: 'Bookkeeping & Cash Flow',
            title: 'Is Your Business Outgrowing Your Financial Systems?',
            excerpt: 'Learn the warning signs that your bookkeeping and accounting processes can\'t keep up with your growth - and what to do about it.',
            link: '#'
        },
        {
            icon: 'bi-shield-check',
            category: 'Assurance & Funding',
            title: 'Review vs Audit: What Do You Actually Need?',
            excerpt: 'Not every organisation needs a full audit. Discover how to choose the right level of assurance for your size, risk and stakeholder expectations.',
            link: '#'
        },
        {
            icon: 'bi-file-earmark-text',
            category: 'Bookkeeping & Cash Flow',
            title: 'How Clean Books Save You Money at Tax Time and Audit Time',
            excerpt: 'Poor bookkeeping doesn\'t just create stress - it creates real costs. Here\'s how tidy accounts throughout the year can save you thousands.',
            link: '#'
        },
        {
            icon: 'bi-graph-up-arrow',
            category: 'Fractional CFO Insights',
            title: 'When to Bring in a Fractional CFO (and What They Really Do)',
            excerpt: 'Fractional CFOs aren\'t just for large enterprises. Find out when it makes sense to bring in strategic financial leadership on a part-time basis.',
            link: '#'
        },
        {
            icon: 'bi-check-circle',
            category: 'Audit Readiness',
            title: '5 Steps to Make Your NFP Audit-Ready Year-Round',
            excerpt: 'Stop scrambling when audit season arrives. Build audit-readiness into your regular routines with these practical steps.',
            link: '#'
        },
        {
            icon: 'bi-check-circle',
            category: 'Audit Readiness',
            title: 'Understanding ACNC and ASIC Reporting Deadlines',
            excerpt: 'Missing statutory deadlines can lead to penalties and damaged reputation. Here\'s your complete guide to staying compliant.',
            link: '#'
        }
    ];

    return (
        <section className="recent-articles-section">
            <div className="container">
                <h2 className="recent-articles-title">Recent articles</h2>

                <div className="row g-4">
                    {articles.map((article, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <div className="article-card">
                                <i className={`bi ${article.icon} article-icon`}></i>
                                <div className="article-category">{article.category}</div>
                                <h3 className="article-title">{article.title}</h3>
                                <p className="article-excerpt">
                                    {article.excerpt}
                                </p>
                                <a href={article.link} className="btn-read-more">
                                    Read more <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecentArticles;
