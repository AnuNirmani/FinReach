import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'FinReach Australia | Assurance and Accounting Services',
  description = 'Finreach Pty Limited is a trusted Australia-based firm specializing in professional bookkeeping, accounting, auditing, assurance, and outsourced CFO services.',
  keywords = 'FinReach, Bookkeeping, Accounting, Audit, Assurance, CFO, Australia, Financial Services',
  canonical = 'https://finreach.com.au/',
  ogImage = 'https://finreach.com.au/wp-content/uploads/2024/07/22-scaled.jpg',
  ogType = 'website',
  schema = null,
  breadcrumb = null
}) => {
  const baseUrl = 'https://finreach.com.au';
  const fullCanonical = canonical.startsWith('http') ? canonical : `${baseUrl}${canonical}`;

  // ✅ Make sure og:image is an absolute URL and not empty
  const resolvedOgImage = ogImage && ogImage.startsWith('http')
    ? ogImage
    : ogImage
      ? `${baseUrl}${ogImage}`
      : null;

  // Default schema for organization
  const organizationSchema = {
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    "name": "FinReach",
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "@id": `${baseUrl}/#logo`,
      "url": `${baseUrl}/wp-content/uploads/2024/06/site-logo.png`,
      "contentUrl": `${baseUrl}/wp-content/uploads/2024/06/site-logo.png`,
      "width": 350,
      "height": 100
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+61-xxx-xxx-xxx",
      "contactType": "customer service",
      "areaServed": "AU",
      "availableLanguage": "en"
    },
    "sameAs": [
      "https://www.facebook.com/finreach",
      "https://www.linkedin.com/company/finreach"
    ]
  };

  const websiteSchema = {
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    "url": baseUrl,
    "name": "FinReach",
    "description": "The Best Cost Effective Financial Service",
    "publisher": { "@id": `${baseUrl}/#organization` },
    "inLanguage": "en-US"
  };

  const breadcrumbSchema = breadcrumb ? {
    "@type": "BreadcrumbList",
    "@id": `${fullCanonical}#breadcrumb`,
    "itemListElement": breadcrumb.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url ? `${baseUrl}${item.url}` : undefined
    }))
  } : {
    "@type": "BreadcrumbList",
    "@id": `${fullCanonical}#breadcrumb`,
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home" }
    ]
  };

  const pageSchema = {
    "@type": "WebPage",
    "@id": fullCanonical,
    "url": fullCanonical,
    "name": title,
    "isPartOf": { "@id": `${baseUrl}/#website` },
    "about": { "@id": `${baseUrl}/#organization` },
    "description": description,
    "breadcrumb": { "@id": `${fullCanonical}#breadcrumb` },
    "inLanguage": "en-US",
    "potentialAction": [{
      "@type": "ReadAction",
      "target": [fullCanonical]
    }]
  };

  const schemaGraph = [
    pageSchema,
    breadcrumbSchema,
    websiteSchema,
    organizationSchema,
    ...(schema ? (Array.isArray(schema) ? schema : [schema]) : [])
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": schemaGraph
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />

      {/* OpenGraph Meta Tags */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content="FinReach" />

      {resolvedOgImage && (
        <>
          <meta property="og:image" content={resolvedOgImage} />
          <meta property="og:image:secure_url" content={resolvedOgImage} />
          <meta property="og:image:width" content="200" />
          <meta property="og:image:height" content="200" />
          <meta property="og:image:type" content="image/jpeg" />
        </>
      )}

      <meta property="article:modified_time" content={new Date().toISOString()} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {resolvedOgImage && (
        <meta name="twitter:image" content={resolvedOgImage} />
      )}

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="FinReach" />
      <meta name="geo.region" content="AU" />
      <meta name="geo.placename" content="Australia" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
