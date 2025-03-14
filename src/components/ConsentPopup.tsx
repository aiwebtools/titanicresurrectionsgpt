
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ShieldCheck } from 'lucide-react';

const ConsentPopup = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Show consent popup after a short delay
    const timer = setTimeout(() => {
      const hasConsented = localStorage.getItem('titanic-consent');
      if (!hasConsented) {
        setShowConsent(true);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('titanic-consent', 'true');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="relative max-w-md w-full">
        <div className="ice-panel rounded-xl p-6 animate-fade-in-up shadow-xl">
          <div className="bg-ocean-light/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="h-8 w-8 text-gold" />
          </div>
          
          <h3 className="text-xl text-center font-playfair font-bold text-gold-light mb-4">
            Before You Continue
          </h3>
          
          <p className="text-ice-light/90 mb-6 text-center">
            This experience portrays historical events and contains content related to the Titanic disaster, including discussions of tragedy and loss of life. By continuing, you acknowledge that you understand the nature of this content.
          </p>
          
          <div className="text-center">
            <Button 
              className="gold-button w-full"
              onClick={handleAccept}
            >
              I Understand & Agree
            </Button>
          </div>
          
          <p className="text-xs text-center text-ice-light/60 mt-4">
            By clicking "I Agree," you consent to the terms outlined in our full disclaimer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConsentPopup;
