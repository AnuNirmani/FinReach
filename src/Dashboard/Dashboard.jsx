import React from 'react';
import SEO from '../utils/SEO';
import Header from './Header';
import HeroWithForm from './HeroWithForm';
import BookingFormSection from './BookingFormSection';
import TargetAudience from './TargetAudience';
import ServicesSection from './ServicesSection';
import PainPointsSection from './PainPointsSection';
import WhyChooseSection from './WhyChooseSection';
import ProcessSection from './ProcessSection';
import CTABanners from './CTABanners';
import Footer from './Footer';
import './Dashboard.css';

const Dashboard = React.memo(() => {
    return (
        <div className="finreach-dashboard">
            <SEO 
                title="FinReach Australia | Assurance and Accounting Services"
                description="Finreach Pty Limited is a trusted Australia-based firm specializing in professional bookkeeping, accounting, auditing, assurance, and outsourced CFO services. We help small to medium businesses streamline financial operations, ensure compliance, and make data-driven decisions with confidence."
                keywords="FinReach, Bookkeeping, Accounting, Audit, Assurance, CFO, Australia, Financial Services, SME Accounting, Business Finance"
                canonical="/"
                ogImage="https://finreach.com.au/wp-content/uploads/2024/07/22-scaled.jpg"
                breadcrumb={[
                    { name: 'Home', url: '/' }
                ]}
                schema={{
                    "@type": "ProfessionalService",
                    "name": "FinReach",
                    "description": "Professional bookkeeping, accounting, auditing, assurance, and outsourced CFO services",
                    "priceRange": "$$",
                    "areaServed": "Australia"
                }}
            />
            <Header />
            <main>
                <HeroWithForm />
                <BookingFormSection />
                <TargetAudience />
                <ServicesSection />
                <PainPointsSection />
                <WhyChooseSection />
                <ProcessSection />
                <CTABanners />
            </main>
            <Footer />
            <a 
                href="#" 
                className="back-to-top"
                onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
            >
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </div>
    );
});

export default Dashboard;
