import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DentalCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Sample data - replace with your actual images and doctor info
  const slides = [
    {
      id: 1,
      image: "/1stimg.jpg",
      doctor: {
        name: "Dr. Nayef Mohammed Ba Faraj",
        title: "Prosthodontist, DDS, MSD",
        university: "University of Michigan, USA",
        photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face"
      }
    },
    {
      id: 2,
      image: "/2ndimg.jpg",
      doctor: {
        name: "Dr. Sarah Johnson",
        title: "Orthodontist, DDS, MS",
        university: "Harvard School of Dental Medicine",
        photo: "/doc4.png"
      }
    },
    {
      id: 3,
      image: "/3rdimg.jpg",
      doctor: {
        name: "Dr. Michael Chen",
        title: "Cosmetic Dentist, DDS",
        university: "Stanford University School of Medicine",
        photo: "/doc 3.jpg"
      }
    },
    {
      id: 4,
      image: "/4thimg.jpg",
      doctor: {
        name: "Dr. Emily Rodriguez",
        title: "Maxillofacial Surgeon, DDS, MD",
        university: "UCLA School of Dentistry",
        photo: "/doc 2.jpg"
      }
    },
    {
      id: 5,
      image: "/5thimg.jpg",
      doctor: {
        name: "Dr. James Wilson",
        title: "Endodontist, DDS, MS",
        university: "Johns Hopkins University",
        photo: "/doc1.jpg"
      
      }
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-black min-h-screen">
      <div className="relative h-screen flex items-center">
        {/* Main Carousel */}
        <div 
          className="flex w-full h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full h-full flex-shrink-0">
              <div className="flex h-full">
                {/* Left Side - Image (60%) */}
                <div className="w-3/5 h-full p-8 pr-4">
                  <div className="h-full rounded-lg overflow-hidden">
                    <img 
                      src={slide.image} 
                      alt={`Dental work by ${slide.doctor.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Right Side - Doctor Info (40%) */}
                <div className="w-2/5 h-full flex flex-col justify-center items-center p-8 pl-4">
                  <div className="text-center max-w-sm">
                    {/* Doctor Photo */}
                    <div className="w-32 h-32 mx-auto mb-6 rounded-lg overflow-hidden border-2 border-gray-600">
                      <img 
                        src={slide.doctor.photo} 
                        alt={slide.doctor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Doctor Info */}
                    <div className="space-y-3 mb-8">
                      <h2 className="text-xl font-bold text-white leading-tight">
                        {slide.doctor.name}
                      </h2>
                      <p className="text-base text-gray-300 font-medium">
                        {slide.doctor.title}
                      </p>
                      <p className="text-sm text-gray-400 italic">
                        {slide.doctor.university}
                      </p>
                    </div>

                    {/* View More Button */}
                    <button className="w-full bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                      View More Smiles
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200 z-10"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200 z-10"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-teal-500 w-8' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75 w-3'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block lg:hidden">
        <div className="h-screen">
          {slides.map((slide, index) => (
            <div 
              key={slide.id} 
              className={`${index === currentSlide ? 'flex' : 'hidden'} flex-col h-full`}
            >
              {/* Top - Image */}
              <div className="flex-1 p-4">
                <div className="h-full rounded-lg overflow-hidden">
                  <img 
                    src={slide.image} 
                    alt={`Dental work by ${slide.doctor.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Bottom - Doctor Info */}
              <div className="p-6">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-lg overflow-hidden border-2 border-gray-600">
                    <img 
                      src={slide.doctor.photo} 
                      alt={slide.doctor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-lg font-bold text-white mb-2">
                    {slide.doctor.name}
                  </h2>
                  <p className="text-sm text-gray-300 font-medium mb-1">
                    {slide.doctor.title}
                  </p>
                  <p className="text-xs text-gray-400 italic mb-4">
                    {slide.doctor.university}
                  </p>
                  <button className="w-full bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200">
                    View More Smiles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DentalCarousel;