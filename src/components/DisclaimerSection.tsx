
import React from 'react';

const DisclaimerSection = () => {
  return (
    <section id="disclaimer" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-ocean-medium/20 text-ice-light text-sm mb-4">
            Legal Information
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold title-gradient mb-6">
            Disclaimer
          </h2>
        </div>

        <div className="glass-panel rounded-xl p-8 max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none prose-headings:font-playfair prose-headings:text-gold-light prose-p:text-ice-light/80">
            <h3>Historical Accuracy</h3>
            <p>
              While Titanic Resurrections GPT strives for historical accuracy, it is an AI interpretation based on available historical records. Some interactions may include creative interpretations where direct historical evidence is limited. We've made every effort to ensure authenticity, but this experience should be considered a supplement to, not a replacement for, traditional historical research.
            </p>
            
            <h3>Educational Purpose</h3>
            <p>
              This tool is designed for educational and entertainment purposes only. The conversations and perspectives represented are AI-generated based on historical documentation and should be understood as interpretive rather than definitive.
            </p>
            
            <h3>Content Notice</h3>
            <p>
              The Titanic disaster was a tragic event that resulted in the loss of over 1,500 lives. Some content may contain descriptions of distressing situations, including discussions of death, panic, and trauma. User discretion is advised.
            </p>
            
            <h3>No Endorsement</h3>
            <p>
              This experience is not endorsed by, directly affiliated with, maintained, authorized, or sponsored by any official Titanic historical society, museum, or the families of Titanic passengers and crew. All product and company names are the registered trademarks of their original owners.
            </p>
            
            <h3>Limitation of Liability</h3>
            <p>
              By using Titanic Resurrections GPT, you agree that AI Web Tools LLC, its affiliates, and OpenAI shall not be liable for any direct, indirect, incidental, special, consequential or exemplary damages resulting from your use or inability to use the service.
            </p>
            
            <h3>User Responsibility</h3>
            <p>
              Users are responsible for their interactions with the AI and should approach the experience with respect for the historical significance of the Titanic disaster and those affected by it.
            </p>
            
            <h3>Terms of Service & Privacy Policy</h3>
            <p>
              Use of this service is subject to OpenAI's <a href="https://openai.com/policies/privacy-policy/" className="text-ocean-light hover:text-gold transition-colors">Privacy Policy</a> and <a href="https://aiwebtools.ai/terms-of-services" className="text-ocean-light hover:text-gold transition-colors">Terms of Service</a>.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default DisclaimerSection;
