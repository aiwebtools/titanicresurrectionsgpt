
import React from 'react';
import { Users, BookOpen, Clock, MessageCircle, Ship, History } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: <Users className="h-10 w-10 text-gold" />,
    title: "Authentic Personalities",
    description: "Interact with historically accurate representations of Titanic passengers and crew members, each responding with their unique personality and perspective.",
  },
  {
    icon: <BookOpen className="h-10 w-10 text-gold" />,
    title: "First-Person Accounts",
    description: "Read survivor testimonies in their own words, drawn from historical records, interviews, and court inquiries.",
  },
  {
    icon: <Clock className="h-10 w-10 text-gold" />,
    title: "Timeline Exploration",
    description: "Access a detailed chronology of events from departure to rescue, with precise times and documented occurrences.",
  },
  {
    icon: <MessageCircle className="h-10 w-10 text-gold" />,
    title: "Interactive Dialogue",
    description: "Ask questions directly to over 50 key historical figures from the Titanic, including Captain Smith, Molly Brown, and Thomas Andrews.",
  },
  {
    icon: <Ship className="h-10 w-10 text-gold" />,
    title: "Ship Knowledge",
    description: "Learn about the Titanic's design, accommodations, and technical specifications through conversations with those who knew her best.",
  },
  {
    icon: <History className="h-10 w-10 text-gold" />,
    title: "Alternate History Mode",
    description: "Explore 'what if' scenarios while clearly distinguishing between historical fact and hypothetical outcomes.",
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  return (
    <div 
      className={cn(
        "glass-panel rounded-xl p-6 transform transition-all duration-500 hover:shadow-xl group",
        "hover:-translate-y-2 relative overflow-hidden"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <div className="mb-4">{feature.icon}</div>
        <h3 className="text-xl font-playfair font-semibold mb-3 text-white group-hover:text-gold-light transition-colors duration-300">{feature.title}</h3>
        <p className="text-ice-light/80">{feature.description}</p>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-ocean-medium/20 text-ice-light text-sm mb-4">
            Key Features
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold title-gradient mb-6">
            Step Aboard the Titanic
          </h2>
          <p className="text-lg text-ice-light/90 max-w-3xl mx-auto">
            Our AI creates a bridge to the past, allowing you to experience the Titanic disaster through the eyes of those who were there.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-ocean-light/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default FeaturesSection;
