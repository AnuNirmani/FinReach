import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useMeta } from '../utils/useMeta';
import Header from '../Dashboard/Header';
import Footer from '../Dashboard/Footer';
import BlogHero from './BlogHero';
import BlogCategories from './BlogCategories';
import RecentArticles from './RecentArticles';
import BlogCTA from './BlogCTA';
import Subscribe from './Subscribe';
import '../Dashboard/Dashboard.css';

const Blog = React.memo(() => {
    const { meta } = useMeta(3);

    return (
        <div className="blog-page">
            {meta && (
                <Helmet>
                    {meta.meta_title && <title>{meta.meta_title}</title>}
                    {meta.meta_description && (
                        <meta name="description" content={meta.meta_description} />
                    )}
                    {meta.meta_keywords && (
                        <meta name="keywords" content={meta.meta_keywords} />
                    )}

                    {/* Open Graph */}
                    {meta.og_title && <meta property="og:title" content={meta.og_title} />}
                    {meta.og_description && (
                        <meta property="og:description" content={meta.og_description} />
                    )}
                    {meta.og_image && <meta property="og:image" content={meta.og_image} />}
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={window.location.href} />
                </Helmet>
            )}
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
