
import React from 'react';
import { Anchor, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-ocean-deep border-t border-ocean-light/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Logo and About */}
          <div>
            <a 
              href="https://chatgpt.com/g/g-67d4a5f65f64819196609472b3b6ed56-titanic-resurrections-gpt" 
              className="flex items-center group mb-4"
            >
              <div className="flex items-center mr-3">
                <Anchor className="h-6 w-6 text-gold transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <div>
                <h3 className="text-lg font-playfair font-bold text-gold">Titanic Resurrections GPT</h3>
                <p className="text-xs text-gold-light/80 -mt-1">Presented by AiWebTools.Ai</p>
              </div>
            </a>
            <p className="text-ice-light/70 text-sm mt-4">
              An immersive historical AI experience that brings the stories of Titanic passengers and crew to life through authentic conversations.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-playfair font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://chatgpt.com/g/g-67d4a5f65f64819196609472b3b6ed56-titanic-resurrections-gpt" 
                  className="text-ice-light/70 hover:text-gold transition-colors duration-200"
                >
                  Titanic Resurrections GPT
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="text-ice-light/70 hover:text-gold transition-colors duration-200"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer" 
                  className="text-ice-light/70 hover:text-gold transition-colors duration-200"
                >
                  Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="https://www.aiwebtools.ai" 
                  className="text-ice-light/70 hover:text-gold transition-colors duration-200"
                >
                  More AI Tools
                </a>
              </li>
              <li className="pt-2">
                <h4 className="text-sm font-semibold text-white mb-2">You May Also Like:</h4>
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    className="border-ocean-light/30 hover:bg-ocean-light/10 hover:text-gold text-ice-light w-full justify-start text-sm"
                    onClick={() => window.open("https://chatgpt.com/g/g-67d59eb431b88191888701b820de0ef8-the-salem-witch-trials-ai", "_blank")}
                  >
                    The Salem Witch Trials AI
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="border-ocean-light/30 hover:bg-ocean-light/10 hover:text-gold text-ice-light w-full justify-start text-sm"
                    onClick={() => window.open("https://talk-to-history-gpt.lovable.app/?via=aiwebtools", "_blank")}
                  >
                    Talk to History GPT
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="border-ocean-light/30 hover:bg-ocean-light/10 hover:text-gold text-ice-light w-full justify-start text-sm"
                    onClick={() => window.open("https://time-machine-gpt.lovable.app/?via=aiwebtools", "_blank")}
                  >
                    Time Machine GPT
                  </Button>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-lg font-playfair font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  className="text-ice-light/70 hover:text-gold transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/disclaimers" 
                  className="text-ice-light/70 hover:text-gold transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-playfair font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:4758008096" 
                  className="text-ice-light/70 hover:text-gold transition-colors duration-200 flex items-center"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  (475) 800-8096
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-ice-light/70 hover:text-gold transition-colors duration-200 flex items-center"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section with More AI Tools button */}
        <div className="pt-8 border-t border-ocean-light/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-ice-light/60 text-sm">
            © 2025 
            <a 
              href="https://www.aiwebtools.ai" 
              className="hover:text-gold transition-colors duration-200"
            > AI WEB TOOLS LLC </a> 
            All rights reserved.
          </p>
          
          <a 
            href="https://www.aiwebtools.ai" 
            className="mt-4 md:mt-0 bg-gradient-to-r from-ocean-light to-ocean-medium text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-ocean-light/20 transition-all duration-300"
          >
            More AI Tools
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
