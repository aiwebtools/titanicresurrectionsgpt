
import React, { useState, useEffect } from 'react';
import { Menu, X, Anchor, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isToolsMenuOpen, setIsToolsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToolsToggle = () => {
    setIsToolsMenuOpen(!isToolsMenuOpen);
  };

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
              href="https://aiwebtools.lovable.app/?via=aiwebtools" 
              className="text-white hover:text-gold transition-colors duration-200"
            >
              More AI Tools
            </a>
            
            {/* Desktop Dropdown Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white hover:text-gold transition-colors duration-200 px-0">
                  You May Also Like <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-60 bg-ocean-dark/95 backdrop-blur-md border-ocean-medium/30">
                <DropdownMenuGroup>
                  <DropdownMenuItem 
                    className="text-white hover:text-gold hover:bg-ocean-light/10 cursor-pointer"
                    onClick={() => window.open("https://chatgpt.com/g/g-67d59eb431b88191888701b820de0ef8-the-salem-witch-trials-ai", "_blank")}
                  >
                    The Salem Witch Trials AI
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="text-white hover:text-gold hover:bg-ocean-light/10 cursor-pointer"
                    onClick={() => window.open("https://talk-to-history-gpt.lovable.app/?via=aiwebtools", "_blank")}
                  >
                    Talk to History GPT
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="text-white hover:text-gold hover:bg-ocean-light/10 cursor-pointer"
                    onClick={() => window.open("https://time-machine-gpt.lovable.app/?via=aiwebtools", "_blank")}
                  >
                    Time Machine GPT
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            
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
              href="https://aiwebtools.lovable.app/?via=aiwebtools" 
              className="text-white hover:text-gold transition-colors duration-200 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              More AI Tools
            </a>
            
            {/* Mobile "You May Also Like" dropdown */}
            <div className="border-t border-ocean-medium/20 pt-3">
              <button
                onClick={handleToolsToggle}
                className="flex w-full items-center justify-between text-white hover:text-gold transition-colors duration-200 py-2"
              >
                <span>You May Also Like</span>
                {isToolsMenuOpen ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>
              
              {isToolsMenuOpen && (
                <div className="pl-4 mt-2 space-y-3 border-l border-ocean-medium/20">
                  <a 
                    href="https://chatgpt.com/g/g-67d59eb431b88191888701b820de0ef8-the-salem-witch-trials-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white hover:text-gold transition-colors duration-200 py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    The Salem Witch Trials AI
                  </a>
                  <a 
                    href="https://talk-to-history-gpt.lovable.app/?via=aiwebtools"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white hover:text-gold transition-colors duration-200 py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Talk to History GPT
                  </a>
                  <a 
                    href="https://time-machine-gpt.lovable.app/?via=aiwebtools"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white hover:text-gold transition-colors duration-200 py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Time Machine GPT
                  </a>
                </div>
              )}
            </div>
            
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
