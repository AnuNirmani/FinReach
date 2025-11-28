import React from 'react';
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

const Dashboard = () => {
    return (
        <div className="finreach-dashboard">
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
};

export default Dashboard;
