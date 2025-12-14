import React from 'react';
import SEO from '../utils/SEO.jsx';
import Header from '../Dashboard/Header.jsx';
import Footer from '../Dashboard/Footer.jsx';
import bookkeepingHero from '../assets/assets/bookkeeping-hero-zWmJX4q8.jpg';


const BookkeepingCashFlow = React.memo(() => {
  return (
    <>
      <SEO 
        title="Bookkeeping & Cash Flow Management | FinReach Australia"
        description="Professional bookkeeping and accounting services that give you back your time. From daily bookkeeping to management reporting, payroll, BAS preparation, and cash flow management for Australian businesses."
        keywords="Bookkeeping Services, Cash Flow Management, Accounts Payable, Accounts Receivable, Payroll Processing, BAS Preparation, Management Reporting, Australian Bookkeeping"
        canonical="/categories/bookkeeping-cash-flow"
        breadcrumb={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/blog' },
          { name: 'Bookkeeping & Cash Flow', url: '/categories/bookkeeping-cash-flow' }
        ]}
        schema={{
          "@type": "Service",
          "serviceType": "Bookkeeping & Accounting Services",
          "provider": { "@id": "https://finreach.com.au/#organization" },
          "areaServed": "Australia",
          "description": "Professional bookkeeping and cash flow management services for small to medium businesses"
        }}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section
  className="hero-section"
  style={{
    backgroundImage: `url(${bookkeepingHero})`,
  }}
>

          <div className="hero-overlay" />
          <div className="container hero-content">
            <div className="row align-items-center text-start">
              <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
                <h1 className="hero-title">
                  Bookkeeping & accounting that gives you back your time
                </h1>
                <p className="hero-subtitle text-white opacity-75">
                  Your back-end accounting shouldn't be holding back your growth. We
                  take care of the financial heavy lifting – from daily
                  bookkeeping to management reporting – so you can take your business to the next level without worrying about your finances. 
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="challenges-section">
          <div className="container">
            <h2 className="section-heading-centered">
              The challenges we see every day
            </h2>

            <div className="row g-4 px-lg-5 justify-content-md-center">
              {[
                "You're drowning in daily financial tasks – invoices, payroll, bills and reconciliations – and losing hours every week.",
                "Cash flow feels like chaos: bills get missed, suppliers may be paid twice, and you're never quite sure what's really in the bank.",
                "Admin staff are 'doing their best' with the accounts but don't have specialist training.",
                "Xero, MYOB or QuickBooks are technically 'set up' – but dashboards, reports and cash-flow tools aren't truly working for you.",
              ].map((text, idx) => (
                <div className="col-md-5" key={idx}>
                  <div className="challenge-card">
                    <div className="challenge-icon-circle">
                      <i className="bi bi-x-lg"></i>
                    </div>
                    <p className="challenge-text">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <p
              className="text-center mt-5 text-muted"
              style={{ maxWidth: 800, margin: '0 auto' }}
            >
              Over time, messy books lead to a stressful tax time, higher audit
              fees, penalties and poor decisions based on unreliable numbers.
            </p>
          </div>
        </section>

        {/* Solution Section */}
        <section className="solution-section">
          <div className="container">
            <h2 className="section-heading-centered mb-2">
              Our bookkeeping & accounting solution
            </h2>
            <p className="solution-subtext">
              We act as your outsourced accounting back-office, handling:
            </p>

            <div className="row px-lg-5 justify-content-center">
              {[
                'Day-to-day bookkeeping and general ledger',
                'Accounts Receivable and Accounts Payable',
                'Payroll and superannuation processing',
                'Bank and Account reconciliations',
                'BAS and GST preparation support',
                'Asset registers and basic fixed asset management',
                'Monthly and Quarterly management reports, ready for your tax accountant or auditors',
              ].map((item, idx) => (
                <div className="col-lg-4 col-md-6" key={idx}>
                  <div className="solution-list-item">
                    <i className="bi bi-check-circle solution-check-icon"></i>
                    <span>{item}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="delivery-box">
              <h3 className="delivery-title">How we deliver it</h3>
              <p className="delivery-text">
                <strong>Work is performed by our off-shore accounting team</strong>,
                giving you a cost-effective way to cover all your accounting
                functions.
              </p>
              <p className="delivery-text mb-0">
                This ensures quality, compliance and complete confidence in your numbers.
              </p>
            </div>
          </div>
        </section>

        {/* Ideal For Section */}
        <section className="ideal-section">
          <div className="container px-lg-5">
            <h2 className="section-heading-centered">
              Who this service is ideal for
            </h2>

            <div className="row g-4">
              {[
                {
                  title: 'Small businesses',
                  desc:
                    'With under 10 employees and under ~$1M revenue needing complete bookkeeping support',
                },
                {
                  title: 'Medium-sized organisations',
                  desc:
                    'Including not-for-profits wanting either full back-office accounting or targeted support such as AP/AR or periodic reviews',
                },
                {
                  title: 'Health practices',
                  desc:
                    'Clinics that want clean, timely numbers without hiring internal accounting staff',
                },
              ].map((card, idx) => (
                <div className="col-md-4" key={idx}>
                  <div className="ideal-card">
                    <h3 className="ideal-title">{card.title}</h3>
                    <p className="ideal-desc">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gains Section */}
        <section className="gain-section">
          <div className="container">
            <h2 className="section-heading-centered">What you gain</h2>

            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="row">
                  {[
                    {
                      icon: 'bi bi-clock',
                      title: 'Time Back',
                      desc:
                        'Up to 30% of your time back to reinvest into sales, strategy and service.',
                    },
                    {
                      icon: 'bi bi-graph-up-arrow',
                      title: 'Clear Visibility',
                      desc:
                        "Crystal-clear cash flow visibility – you know what's due, when, and whether you can cover it.",
                    },
                    {
                      icon: 'bi bi-shield-check',
                      title: 'Scalable Foundation',
                      desc: 'A scalable financial foundation that grows with you.',
                    },
                    {
                      icon: 'bi bi-check-circle',
                      title: 'Better Decisions',
                      desc:
                        'Streamlined year-end, lower tax and audit fees, and better decision-making.',
                    },
                  ].map((gain, idx) => (
                    <div className="col-md-6" key={idx}>
                      <div className="gain-item">
                        <i className={`${gain.icon} gain-icon`}></i>
                        <div className="gain-content">
                          <h4>{gain.title}</h4>
                          <p>{gain.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="bk-cta-section">
          <div className="container">
            <h2 className="bk-cta-title">
              Tired of your back-end accounting getting in the way of your growth? 
            </h2>
            <p className="bk-cta-sub">
              Book a 30-minute, obligation-free consultation to see how our
              bookkeeping and accounting model can work for you.
            </p>
            
             <button
  type="button"
  className="btn-bottom-dark"
  onClick={() => window.dispatchEvent(new Event('open-consultation-modal'))}
>
  Book Your Consultation
</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
});

export default BookkeepingCashFlow;
