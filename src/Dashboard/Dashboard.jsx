import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useMeta } from '../utils/useMeta';
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
    const { meta } = useMeta(1);

    return (
        <div className="finreach-dashboard">
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
            <main>
                <HeroWithForm />
               {/* <BookingFormSection /> */}
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
