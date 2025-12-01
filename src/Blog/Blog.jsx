import React from 'react';
import SEO from '../utils/SEO';
import Header from '../Dashboard/Header';
import Footer from '../Dashboard/Footer';
import BlogHero from './BlogHero';
import BlogCategories from './BlogCategories';
import RecentArticles from './RecentArticles';
import BlogCTA from './BlogCTA';
import Subscribe from './Subscribe';
import '../Dashboard/Dashboard.css';

const Blog = React.memo(() => {
    return (
        <div className="blog-page">
            <SEO 
                title="Blog | FinReach Australia - Financial Insights & Expert Tips"
                description="Read the latest articles, insights, and tips on finance, bookkeeping, audit readiness, CFO strategies, and more from FinReach experts. Stay informed with practical financial advice for Australian businesses."
                keywords="FinReach Blog, Finance Articles, Bookkeeping Tips, Audit Readiness, Assurance Insights, CFO Strategies, Financial Management, Business Finance Australia"
                canonical="/blog"
                ogType="blog"
                breadcrumb={[
                    { name: 'Home', url: '/' },
                    { name: 'Blog', url: '/blog' }
                ]}
                schema={{
                    "@type": "Blog",
                    "name": "FinReach Blog",
                    "description": "Financial insights and expert tips for Australian businesses"
                }}
            />
            <Header />
            <BlogHero />
            <BlogCategories />
            <RecentArticles />
            <BlogCTA />
            <Subscribe />
            <Footer />
        </div>
    );
});

export default Blog;
