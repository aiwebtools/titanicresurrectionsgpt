
import React, { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import PassengersSection from '../components/PassengersSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import DisclaimerSection from '../components/DisclaimerSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import ConsentPopup from '../components/ConsentPopup';

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "Titanic Resurrections GPT - Speak with Titanic Passengers & Crew";
    
    // Create YouTube iframe API
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-ocean-deep text-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PassengersSection />
        <TestimonialsSection />
        <FAQSection />
        <DisclaimerSection />
        <CTASection />
      </main>
      <Footer />
      <ConsentPopup />
    </div>
  );
};

export default Index;
