import React from 'react';
import { Helmet } from 'react-helmet-async';
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
            <Helmet>
                <title>Blog | FinReach</title>
                <meta name="description" content="Read the latest articles, insights, and tips on finance, bookkeeping, audit readiness, and more from FinReach experts." />
                <meta name="keywords" content="FinReach, Blog, Finance, Articles, Bookkeeping, Audit, Assurance, CFO" />
            </Helmet>
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
