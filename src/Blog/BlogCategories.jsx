import React from 'react';

const BlogCategories = () => {
    const categories = [
        {
            icon: 'bi-file-earmark-text',
            title: 'Bookkeeping &<br>cash flow',
            description: 'Practical tips to stop back-end tasks from slowing your growth'
        },
        {
            icon: 'bi-shield-check',
            title: 'Assurance &<br>funding',
            description: 'How to stay grant-ready and avoid overspending on audits'
        },
        {
            icon: 'bi-check-circle',
            title: 'Audit readiness',
            description: 'Steps to reduce stress and get more value from your audits'
        },
        {
            icon: 'bi-graph-up-arrow',
            title: 'Fractional CFO<br>insights',
            description: 'How to build robust financial foundations and scale with confidence'
        }
    ];

    return (
        <section className="blog-categories-section">
            <div className="container">
                <h2 className="blog-cat-header">What we write about</h2>

                <div className="row g-4">
                    {categories.map((category, index) => (
                        <div key={index} className="col-lg-3 col-md-6">
                            <div className="category-card">
                                <i className={`bi ${category.icon} cat-icon`}></i>
                                <h3 
                                    className="cat-title" 
                                    dangerouslySetInnerHTML={{ __html: category.title }}
                                ></h3>
                                <p className="cat-desc">
                                    {category.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogCategories;
