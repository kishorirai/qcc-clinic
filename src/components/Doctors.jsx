import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';

const DentistTeamCarousel = () => {
  const [translateX, setTranslateX] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const intervalRef = useRef(null);
  const containerRef = useRef(null);

  // Sample dentist data
  const dentists = [
    {
      id: 1,
      name: "Dr. Ahmed Hassan",
      specialty: "General Dentist",
      role: "Cosmetic Dentistry Expert",
      image: "/doc1.jpg"
    },
    {
      id: 2,
      name: "Dr. Sarah Johnson",
      specialty: "Orthodontist", 
      role: "Invisalign Specialist",
      image: "/doc 2.jpg"
    },
    {
      id: 3,
      name: "Dr. Osama Hassan Ashour",
      specialty: "General Dentist",
      role: "Root Canal Treatment Expert",
      image: "/doc 3.jpg"
    },
    {
      id: 4,
      name: "Dr. Michael Chen",
      specialty: "Oral Surgeon",
      role: "Implant Specialist", 
      image: "/doc4.png"
    }
  ];

  // Create duplicated array for seamless loop
  const duplicatedDentists = [...dentists, ...dentists];

  // Continuous scroll functionality
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setTranslateX(prev => {
          const cardWidth = 354; // Width of each card
          const newTranslateX = prev - 1; // Smooth pixel-by-pixel movement
          
         
          if (Math.abs(newTranslateX) >= cardWidth * dentists.length) {
            return 0;
          }
          
          return newTranslateX;
        });
      }, 20); // Fast interval 
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, dentists.length]);

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-2">
          <p className="text-blue-600 text-sm font-medium tracking-wide">Meet Our Team</p>
          <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 group text-sm">
            View All Doctors 
            <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>

        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Expert Dentists</h2>
          <p className="text-gray-600 text-lg">Leading specialists in modern dentistry</p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            ref={containerRef}
            className="flex transition-none"
            style={{ 
              transform: `translateX(${translateX}px)`,
              width: 'fit-content'
            }}
          >
            {duplicatedDentists.map((dentist, index) => (
              <div 
                key={`${dentist.id}-${index}`}
                className="flex-shrink-0 w-80 mx-8"
              >
                <div 
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative group cursor-pointer transform hover:-translate-y-2"
                  onMouseEnter={() => setHoveredCard(`${dentist.id}-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Doctor Image */}
                  <div className="aspect-[3/4] overflow-hidden">
                    <img 
                      src={dentist.image} 
                      alt={dentist.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Overlay Information */}
                  <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white transform transition-all duration-300 ${
                    hoveredCard === `${dentist.id}-${index}` ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}>
                    <h3 className="text-xl font-bold mb-1">{dentist.name}</h3>
                    <p className="text-blue-300 text-sm font-medium mb-1">{dentist.specialty}</p>
                    <p className="text-gray-300 text-sm mb-2">{dentist.role}</p>
                    <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200">
                      View More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentistTeamCarousel;