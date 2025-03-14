
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
    
    // Initialize YouTube player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player('youtube-player', {
        videoId: 'u7sTTv_A3IQ',
        playerVars: {
          autoplay: 1,
          mute: 0,
          controls: 1,
          playsinline: 1,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          origin: window.location.origin
        },
        events: {
          onReady: (event) => {
            event.target.setPlaybackQuality('hd1080');
            event.target.playVideo();
          }
        }
      });
    };
    
    return () => {
      // Clean up
      delete window.onYouTubeIframeAPIReady;
    };
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

// Add the YouTube interface to the Window type
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default Index;
