import React from 'react';

const BlogCTA = () => {
    return (
        <section className="blog-cta-section">
            <div className="container">
                <h2 className="blog-cta-title">Want personalised financial guidance?</h2>
                
                <p className="blog-cta-text">
                    Beyond reading our insights, you can work directly with the FinReach team to solve your specific challenges.
                </p>

                
                <button
  type="button"
  className="btn-blog-cta"
  onClick={() => window.dispatchEvent(new Event('open-consultation-modal'))}
>
  Book Your Consultation
</button>
            </div>
        </section>
    );
};

export default BlogCTA;
