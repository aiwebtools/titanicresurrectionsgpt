
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Elizabeth Wright",
    role: "History Teacher",
    quote: "This is an incredible educational tool for my students. The historical accuracy combined with the immersive conversation style brings the Titanic disaster to life in a way textbooks never could.",
    stars: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "History Enthusiast",
    quote: "I've been fascinated by the Titanic for years, but speaking with the passengers and crew through this AI gave me new insights and perspectives I'd never considered before.",
    stars: 5,
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Museum Curator",
    quote: "The attention to historical detail is remarkable. The personalities of each passenger and crew member are distinct and align perfectly with historical records.",
    stars: 4,
  },
  {
    id: 4,
    name: "James Peterson",
    role: "Maritime Historian",
    quote: "As someone who has studied the Titanic for decades, I'm impressed by how this tool manages to be both historically accurate and emotionally engaging.",
    stars: 5,
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="glass-panel rounded-xl p-6 h-full flex flex-col">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${i < testimonial.stars ? 'text-gold' : 'text-gray-500'}`} 
            fill={i < testimonial.stars ? 'currentColor' : 'none'} 
          />
        ))}
      </div>
      <p className="italic text-ice-light/90 mb-6 flex-grow">{`"${testimonial.quote}"`}</p>
      <div>
        <h4 className="font-semibold text-gold-light">{testimonial.name}</h4>
        <p className="text-sm text-white/70">{testimonial.role}</p>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-ocean-medium/20 text-ice-light text-sm mb-4">
            User Experiences
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold title-gradient mb-6">
            What Our Users Say
          </h2>
          <p className="text-lg text-ice-light/90 max-w-3xl mx-auto">
            Discover how Titanic Resurrections GPT is creating meaningful historical connections.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-10 right-20 w-32 h-32 bg-ocean-light/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default TestimonialsSection;
