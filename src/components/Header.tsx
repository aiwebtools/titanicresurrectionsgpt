
import React, { useState, useEffect } from 'react';
import { Menu, X, Anchor } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
      isScrolled ? "bg-ocean-deep/80 backdrop-blur-md shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="https://chatgpt.com/g/g-67d4a5f65f64819196609472b3b6ed56-titanic-resurrections-gpt" 
            className="flex items-center group"
          >
            <div className="flex items-center mr-3">
              <Anchor className="h-8 w-8 text-gold transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <div>
              <h1 className="text-xl font-playfair font-bold title-gradient">Titanic Resurrections GPT</h1>
              <p className="text-xs text-gold-light/80 font-medium -mt-1">Presented by AiWebTools.Ai</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="https://chatgpt.com/g/g-67d4a5f65f64819196609472b3b6ed56-titanic-resurrections-gpt" 
              className="text-white hover:text-gold transition-colors duration-200"
            >
              Home
            </a>
            <a 
              href="#faq" 
              className="text-white hover:text-gold transition-colors duration-200"
            >
              FAQ
            </a>
            <a 
              href="#disclaimer" 
              className="text-white hover:text-gold transition-colors duration-200"
            >
              Disclaimer
            </a>
            <a 
              href="https://www.aiwebtools.ai" 
              className="text-white hover:text-gold transition-colors duration-200"
            >
              More AI Tools
            </a>
            <Button 
              className="gold-button ml-2" 
              onClick={() => window.open("https://chatgpt.com/g/g-67d4a5f65f64819196609472b3b6ed56-titanic-resurrections-gpt", "_blank")}
            >
              Experience Titanic Resurrections GPT NOW
            </Button>
          </nav>

          {/* Mobile Menu Trigger */}
          <button 
            className="md:hidden text-white hover:text-gold transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-ocean-dark/95 backdrop-blur-md shadow-lg py-4 px-6 border-t border-ocean-medium/20 animate-fade-in-up">
          <nav className="flex flex-col space-y-4">
            <a 
              href="https://chatgpt.com/g/g-67d4a5f65f64819196609472b3b6ed56-titanic-resurrections-gpt" 
              className="text-white hover:text-gold transition-colors duration-200 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#faq" 
              className="text-white hover:text-gold transition-colors duration-200 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#disclaimer" 
              className="text-white hover:text-gold transition-colors duration-200 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Disclaimer
            </a>
            <a 
              href="https://www.aiwebtools.ai" 
              className="text-white hover:text-gold transition-colors duration-200 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              More AI Tools
            </a>
            <Button 
              className="gold-button w-full mt-2" 
              onClick={() => {
                window.open("https://chatgpt.com/g/g-67d4a5f65f64819196609472b3b6ed56-titanic-resurrections-gpt", "_blank");
                setIsMobileMenuOpen(false);
              }}
            >
              Experience Titanic Resurrections GPT NOW
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
