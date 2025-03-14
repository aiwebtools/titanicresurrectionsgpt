
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const youtubeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize YouTube player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player('youtube-player', {
        videoId: 'XlWVaz5bw08', // Updated to the new video ID
        playerVars: {
          autoplay: 1,
          mute: 1, // Start muted to comply with autoplay policies
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
            // Unmute after playback starts (user interaction may be required in some browsers)
            setTimeout(() => {
              try {
                event.target.unMute();
              } catch (error) {
                console.log("Could not unmute automatically, user interaction may be needed");
              }
            }, 1000);
          }
        }
      });
    };

    return () => {
      // Clean up
      delete window.onYouTubeIframeAPIReady;
    };
  }, []);

  const scrollToContent = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen pt-24 pb-16 flex flex-col items-center justify-center overflow-hidden">
      {/* Animated ocean waves background */}
      <div className="ocean-wave"></div>
      <div className="second-ocean-wave"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <span className="inline-block py-1 px-3 rounded-full bg-ocean-medium/20 text-ice-light text-sm mb-4">
              Step Back in Time • 1912
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 title-gradient leading-tight">
              Speak With Titanic Passengers & Crew
            </h1>
            <p className="text-lg md:text-xl text-ice-light/90 mb-8 max-w-2xl mx-auto lg:mx-0">
              Experience an immersive historical journey through interactive conversations with those who lived through the Titanic disaster. Hear their stories, in their own words.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="gold-button text-base"
                onClick={() => window.open("https://chatgpt.com/g/g-67d4a5f65f64819196609472b3b6ed56-titanic-resurrections-gpt", "_blank")}
              >
                Begin Your Journey
              </Button>
              <Button 
                variant="outline" 
                className="border-ocean-light/30 hover:bg-ocean-light/10 text-white"
                onClick={scrollToContent}
              >
                Learn More
              </Button>
            </div>
          </div>
          
          {/* YouTube Video Section with Glassmorphism Frame */}
          <div className="lg:w-1/2 relative">
            <div className="glass-panel rounded-2xl overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-ocean-deep/20 pointer-events-none z-10"></div>
              <div ref={youtubeContainerRef} className="aspect-video w-full">
                <div id="youtube-player"></div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-gold/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 h-16 w-16 bg-ocean-light/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={scrollToContent}
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors"
        >
          <span className="text-sm mb-2">Discover More</span>
          <ArrowDown className="animate-bounce h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
