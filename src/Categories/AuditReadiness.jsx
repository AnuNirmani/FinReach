import React from 'react';
import Header from '../Dashboard/Header.jsx';
import Footer from '../Dashboard/Footer.jsx';

const AuditReadiness = React.memo(() => {
  return (
    <>
      <Header />
      <main className="container py-5">
        <h1>Audit Readiness</h1>
        <p>Steps to reduce stress and extract more value from your audits through preparation, documentation, and stakeholder collaboration.</p>
      </main>
      <Footer />
    </>
  );
});

export default AuditReadiness;
