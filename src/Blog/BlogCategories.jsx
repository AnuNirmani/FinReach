import React from 'react';
import { Link } from 'react-router-dom';

const BlogCategories = () => {
    const categories = [
        {
            icon: 'bi-file-earmark-text',
            title: 'Bookkeeping &<br>cash flow',
            description: 'Practical tips to stop back-end tasks from slowing your growth',
            path: '/categories/bookkeeping-cash-flow'
        },
        {
            icon: 'bi-shield-check',
            title: 'Assurance &<br>funding',
            description: 'How to stay grant-ready and avoid overspending on audits',
            path: '/categories/assurance-funding'
        },
        {
            icon: 'bi-check-circle',
            title: 'Audit readiness',
            description: 'Steps to reduce stress and get more value from your audits',
            path: '/categories/audit-readiness'
        },
        {
            icon: 'bi-graph-up-arrow',
            title: 'Fractional CFO<br>insights',
            description: 'How to build robust financial foundations and scale with confidence',
            path: '/categories/fractional-cfo-insights'
        }
    ];

    return (
        <section className="blog-categories-section">
            <div className="container">
                <h2 className="blog-cat-header">What we write about</h2>

                <div className="row g-4">
                    {categories.map((category, index) => (
                        <div key={index} className="col-lg-3 col-md-6">
                            <Link to={category.path} className="category-card text-decoration-none">
                                <i className={`bi ${category.icon} cat-icon`}></i>
                                <h3
                                    className="cat-title"
                                    dangerouslySetInnerHTML={{ __html: category.title }}
                                ></h3>
                                <p className="cat-desc">
                                    {category.description}
                                </p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogCategories;
