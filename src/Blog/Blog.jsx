import React from 'react';
import Header from '../Dashboard/Header';
import Footer from '../Dashboard/Footer';
import BlogHero from './BlogHero';
import BlogCategories from './BlogCategories';
import RecentArticles from './RecentArticles';
import BlogCTA from './BlogCTA';
import Subscribe from './Subscribe';
import '../Dashboard/Dashboard.css';

const Blog = () => {
    return (
        <div className="blog-page">
            <Header />
            <BlogHero />
            <BlogCategories />
            <RecentArticles />
            <BlogCTA />
            <Subscribe />
            <Footer />
        </div>
    );
};

export default Blog;
