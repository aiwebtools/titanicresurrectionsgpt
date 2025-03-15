import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const youtubeContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

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
            // Set high quality by default - 1080p for desktop, 720p for mobile
            const quality = isMobile ? 'hd720' : 'hd1080';
            console.log(`Setting video quality to: ${quality}`);
            event.target.setPlaybackQuality(quality);
            
            // Force quality setting again after a short delay to ensure it takes effect
            setTimeout(() => {
              event.target.setPlaybackQuality(quality);
            }, 500);
            
            event.target.playVideo();
            
            // Try to unmute immediately - might still require user interaction on some browsers
            try {
              event.target.unMute();
              // Set volume to 100%
              event.target.setVolume(100);
            } catch (error) {
              console.log("Initial unmute attempt failed, will try again after playback starts");
            }
            
            // Second attempt to unmute after a short delay
            setTimeout(() => {
              try {
                event.target.unMute();
                event.target.setVolume(100);
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
  }, [isMobile]);

  const scrollToContent = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen pt-24 pb-16 flex flex-col items-center justify-center overflow-hidden">
      {/* Animated ocean waves background with enhanced animation */}
      <div className="ocean-wave"></div>
      <div className="second-ocean-wave"></div>
      <div className="third-ocean-wave"></div>
      
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
                Experience Titanic Resurrections GPT NOW
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
          <div className="lg:w-1/2 w-full relative">
            <div className="glass-panel rounded-2xl overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-ocean-deep/20 pointer-events-none z-10"></div>
              <div ref={youtubeContainerRef} className="aspect-video w-full">
                {/* Apply inline style for mobile compatibility */}
                <div id="youtube-player" style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  minHeight: isMobile ? '200px' : '300px'
                }}></div>
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
