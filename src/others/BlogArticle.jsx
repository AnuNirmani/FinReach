import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SEO from '../utils/SEO';
import Header from '../Dashboard/Header';
import Footer from '../Dashboard/Footer';
import { buildApiUrl } from '../utils/api';
import '../Dashboard/Dashboard.css';

const BlogArticle = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Map backend category names to the correct category page route
    const getCategoryPath = (name) => {
        const n = (name || '').toLowerCase();
        if (n.includes('book')) return '/blog/bookkeeping-cash-flow';
        if (n.includes('assurance')) return '/blog/assurance-funding';
        if (n.includes('audit')) return '/blog/audit-readiness';
        if (n.includes('fractional')) return '/blog/fractional-cfo-insights';
        return '/blog';
    };

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setLoading(true);
          let res = await fetch(buildApiUrl(`post-details/${id}`));

          if (res.status === 404) {
            res = await fetch(buildApiUrl(`posts/${id}`));
          }

          if (!res.ok) throw new Error(`HTTP ${res.status}`);

          const data = await res.json();
                setPost(data);
                setError(null);
            } catch (err) {
                console.error('Error fetching post details:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        if (id) fetchPost();
    }, [id]);

    return (
        <div className="blog-article-page">
            {post && (
        <SEO
          title={post.meta_title || post.title}
          description={post.meta_description || post.sub_topic || ''}
          keywords={post.sub_topic || ''}
          canonical={`/blog/article/${post.post_id}`}
          ogType="article"
          ogImage={post.image}
          breadcrumb={[
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blog' },
            { name: post.title, url: `/blog/article/${post.post_id}` }
          ]}
          schema={{
            '@type': 'Article',
            '@id': `https://finreach.com.au/blog/article/${post.post_id}`,
            headline: post.title,
            datePublished: post.created_at,
            dateModified: post.created_at,
            articleSection: post.category_name,
            keywords: post.category_name
          }}
        />
      )}

      <Header />

      {/* Blog Post */}
      <div className="lit-article-wrapper">
        {loading && (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {error && (
          <div className="alert alert-danger" role="alert">
            Error loading post: {error}
          </div>
        )}

        {post && (
          <>
            <header className="lit-header">
              <span className="lit-category">{post.category_name}</span>
              <h1 className="lit-title">{post.title}</h1>
              {post.sub_topic && (
                <p className="lit-subtitle">{post.sub_topic}</p>
              )}
              <div className="lit-meta">
                <span>{new Date(post.created_at).toLocaleDateString()}</span>
              </div>
            </header>

            {post.image && (
              <img src={post.image} alt={post.title} className="lit-hero-image" />
            )}

            <article className="lit-body">
              <div dangerouslySetInnerHTML={{ __html: post.description }} />
            </article>

            <div className="mt-4">
              <center>
                <Link
                  to={getCategoryPath(post.category_name)}
                  className="btn btn-outline-secondary"
                >
                  Back to {post.category_name || 'Blog'}
                </Link>
              </center>
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default BlogArticle;
