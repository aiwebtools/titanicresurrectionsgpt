
import React from 'react';
import { Button } from '@/components/ui/button';
import { Ship } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Wave background */}
      <div className="ocean-wave opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="ice-panel rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden">
          {/* Visual effects */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-ocean-light/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gold/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <Ship className="h-16 w-16 text-gold mx-auto mb-6" />
            
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-playfair font-bold title-gradient mb-6">
              Begin Your Journey Through History
            </h2>
            
            <p className="text-lg text-ice-light/90 mb-10">
              Step aboard the Titanic and engage in conversations with those who experienced its maiden voyage. Their stories await you.
            </p>
            
            <Button 
              className="gold-button text-lg py-6 px-8"
              onClick={() => window.open("https://chatgpt.com/g/g-67d4a5f65f64819196609472b3b6ed56-titanic-resurrections-gpt", "_blank")}
            >
              Experience Titanic Resurrections GPT
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
