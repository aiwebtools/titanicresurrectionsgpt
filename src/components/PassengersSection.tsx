
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const passengerCategories = [
  { id: 'first-class', label: 'First Class' },
  { id: 'second-class', label: 'Second Class' },
  { id: 'third-class', label: 'Third Class' },
  { id: 'crew', label: 'Crew Members' },
];

const passengers = [
  // First Class
  { 
    id: 1, 
    name: 'John Jacob Astor IV', 
    role: 'Businessman',
    description: 'One of the richest men aboard, traveling with his young pregnant wife.',
    survived: false,
    category: 'first-class'
  },
  { 
    id: 2, 
    name: 'Margaret "Molly" Brown', 
    role: 'Socialite',
    description: 'The "Unsinkable" socialite who took charge of a lifeboat.',
    survived: true,
    category: 'first-class'
  },
  { 
    id: 3, 
    name: 'Benjamin Guggenheim', 
    role: 'Mining Magnate',
    description: 'Dressed in his finest suit, preparing to "go down like a gentleman."',
    survived: false,
    category: 'first-class'
  },
  { 
    id: 4, 
    name: 'Isidor Straus', 
    role: "Macy's Owner",
    description: 'Elderly owner who refused to be separated from his wife, choosing to die together.',
    survived: false,
    category: 'first-class'
  },
  
  // Second Class
  { 
    id: 5, 
    name: 'Eva Hart', 
    role: 'Child Passenger',
    description: 'A 7-year-old girl who later spoke about her memories of the sinking.',
    survived: true,
    category: 'second-class'
  },
  { 
    id: 6, 
    name: 'Lawrence Beesley', 
    role: 'Science Teacher',
    description: 'Survived and later wrote about the disaster.',
    survived: true,
    category: 'second-class'
  },
  { 
    id: 7, 
    name: 'Charlotte Collyer', 
    role: 'Widow',
    description: 'Traveling with her daughter to start a new life in America.',
    survived: true,
    category: 'second-class'
  },
  
  // Third Class
  { 
    id: 8, 
    name: 'Daniel Buckley', 
    role: 'Irish Immigrant',
    description: 'Disguised himself as a woman to board a lifeboat.',
    survived: true,
    category: 'third-class'
  },
  { 
    id: 9, 
    name: 'Kate McGowan', 
    role: 'Irish Girl',
    description: 'Traveling alone, searching for work in America.',
    survived: true,
    category: 'third-class'
  },
  { 
    id: 10, 
    name: 'Berthe Mayne', 
    role: 'Belgian Woman',
    description: 'Secretly traveling with her lover under a false name.',
    survived: true,
    category: 'third-class'
  },
  
  // Crew
  { 
    id: 11, 
    name: 'Captain Edward Smith', 
    role: 'Captain',
    description: 'The Titanic\'s captain, known for his calm demeanor.',
    survived: false,
    category: 'crew'
  },
  { 
    id: 12, 
    name: 'Thomas Andrews', 
    role: 'Ship Designer',
    description: 'Last seen trying to save as many passengers as possible.',
    survived: false,
    category: 'crew'
  },
  { 
    id: 13, 
    name: 'J. Bruce Ismay', 
    role: 'White Star Line Executive',
    description: 'Criticized for saving himself while women and children died.',
    survived: true,
    category: 'crew'
  },
  { 
    id: 14, 
    name: 'Frederick Fleet', 
    role: 'Lookout',
    description: 'The lookout who spotted the iceberg.',
    survived: true,
    category: 'crew'
  },
];

const PassengerCard = ({ passenger }: { passenger: typeof passengers[0] }) => {
  return (
    <div className="ice-panel rounded-xl p-6 transition-all duration-300 hover:shadow-xl group relative overflow-hidden">
      <div className="absolute -right-20 top-0 w-40 h-24 bg-ocean-light/10 blur-3xl rounded-full transform rotate-45 group-hover:translate-x-10 transition-transform duration-500"></div>
      
      <div className="absolute top-4 right-4">
        <span className={cn(
          "text-xs py-1 px-2 rounded-full font-medium",
          passenger.survived 
            ? "bg-green-900/30 text-green-300" 
            : "bg-red-900/30 text-red-300"
        )}>
          {passenger.survived ? "Survived" : "Perished"}
        </span>
      </div>
      
      <h3 className="text-xl font-playfair font-bold text-white mb-1">{passenger.name}</h3>
      <p className="text-sm text-gold-light mb-2">{passenger.role}</p>
      <p className="text-ice-light/80 mb-4">{passenger.description}</p>
      
      <Button 
        variant="link" 
        className="p-0 h-auto text-ocean-light hover:text-gold-light transition-colors"
        onClick={() => window.open("https://chatgpt.com/g/g-67d4a5f65f64819196609472b3b6ed56-titanic-resurrections-gpt", "_blank")}
      >
        Speak with {passenger.name.split(' ')[0]}
      </Button>
    </div>
  );
};

const PassengersSection = () => {
  const [activeCategory, setActiveCategory] = useState('first-class');
  
  const filteredPassengers = passengers.filter(
    passenger => passenger.category === activeCategory
  );

  return (
    <section id="passengers" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-ocean-medium/20 text-ice-light text-sm mb-4">
            Historical Figures
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold title-gradient mb-6">
            Meet the Passengers & Crew
          </h2>
          <p className="text-lg text-ice-light/90 max-w-3xl mx-auto">
            Choose from a variety of authentic historical figures to engage in conversation. Each responds with their own personality and perspective.
          </p>
        </div>

        {/* Category Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {passengerCategories.map((category) => (
            <button
              key={category.id}
              className={cn(
                "px-5 py-2 rounded-full text-sm transition-all duration-300",
                activeCategory === category.id
                  ? "bg-ocean-light text-white shadow-md shadow-ocean-light/20"
                  : "bg-ocean-surface/50 text-white/60 hover:bg-ocean-surface hover:text-white"
              )}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Passenger Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPassengers.map((passenger) => (
            <PassengerCard key={passenger.id} passenger={passenger} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-ice-light/70 mb-4">
            These are just a few of the many individuals you can interact with.
          </p>
          <Button 
            className="ocean-button"
            onClick={() => window.open("https://chatgpt.com/g/g-67d4a5f65f64819196609472b3b6ed56-titanic-resurrections-gpt", "_blank")}
          >
            Start Conversations Now
          </Button>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/3 right-10 w-32 h-32 bg-ocean-light/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default PassengersSection;
