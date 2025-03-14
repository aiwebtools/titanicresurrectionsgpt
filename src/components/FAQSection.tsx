
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How historically accurate is this experience?",
    answer: "Titanic Resurrections GPT is built on extensive historical research, drawing from survivor accounts, testimony from the British and American inquiries, books, letters, and other primary sources. Each character's responses are crafted to match their documented personality, social status, and known actions during the disaster."
  },
  {
    question: "Can I speak with any passenger or crew member from the Titanic?",
    answer: "You can interact with dozens of well-documented passengers and crew members. While not every person aboard the Titanic is available (there were over 2,200), we focus on those with sufficient historical records to create authentic interactions."
  },
  {
    question: "How does the alternate history mode work?",
    answer: "The alternate history mode allows you to explore hypothetical scenarios, such as 'What if the Titanic had seen the iceberg earlier?' The AI clearly distinguishes between historical facts and speculative responses, creating a educational 'what if' experience based on reasonable historical possibilities."
  },
  {
    question: "Is this suitable for educational purposes?",
    answer: "Absolutely! Titanic Resurrections GPT was designed with educational value in mind. It's being used by history teachers, museums, and educational institutions to create engaging, interactive learning experiences about this significant historical event."
  },
  {
    question: "How do I get the most out of this experience?",
    answer: "We recommend beginning with a specific passenger or crew member and asking them about their personal experience. You can then explore different perspectives by switching between individuals from different classes or areas of the ship. The experience becomes more immersive when you engage in natural conversation rather than just asking facts."
  },
  {
    question: "Why can't I get certain modern perspectives from the characters?",
    answer: "To maintain historical authenticity, the characters respond with early 20th century perspectives, knowledge, and language. They cannot provide commentary on events that happened after 1912 or express views that would be anachronistic for their time period."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-ocean-medium/20 text-ice-light text-sm mb-4">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold title-gradient mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-ice-light/90 max-w-3xl mx-auto">
            Everything you need to know about the Titanic Resurrections experience.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-ocean-light/20">
                <AccordionTrigger className="text-white hover:text-gold-light transition-colors py-4 text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-ice-light/80 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-ocean-light/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default FAQSection;
