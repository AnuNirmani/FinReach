import React, { useEffect } from 'react';

const Subscribe = () => {
  useEffect(() => {
    const scriptSrc = 'https://link.finreach.com.au/js/form_embed.js';
    const existing = document.querySelector(`script[src="${scriptSrc}"]`);

    if (!existing) {
      const s = document.createElement('script');
      s.src = scriptSrc;
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <section className="subscribe-section">
      <div className="container">
        <div className="subscribe-header">
          <h2 className="subscribe-title">Subscribe to FinReach Insights</h2>
          <p className="subscribe-subtitle">
            Get the latest financial tips and insights delivered to your inbox.
          </p>
        </div>

        <div className="subscribe-card">
  <iframe
    src="https://link.finreach.com.au/widget/form/mCNhp0ZNw378GMsQ7msD"
    style={{
      width: '100%',
      height: '492px',
      border: 'none',
      borderRadius: '3px',
      display: 'block',
    }}
    id="inline-mCNhp0ZNw378GMsQ7msD"
    data-layout="{'id':'INLINE'}"
    data-trigger-type="alwaysShow"
    data-trigger-value=""
    data-activation-type="alwaysActivated"
    data-activation-value=""
    data-deactivation-type="neverDeactivate"
    data-deactivation-value=""
    data-form-name="Subscribe Blog"
    data-height="492"
    data-layout-iframe-id="inline-mCNhp0ZNw378GMsQ7msD"
    data-form-id="mCNhp0ZNw378GMsQ7msD"
    title="Subscribe Blog"
  />
</div>

      </div>
    </section>
  );
};

export default Subscribe;
