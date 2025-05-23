import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TreatmentsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Dermatology Department",
      description: "We offer advanced dermatology and cosmetic treatments using cutting-edge technology and expert care — all delivered with elegance, precision, and international standards.",
      image: "/img1.png",
      label: "Dermatology Department"
    },
    {
      title: "Dental treatment",
      description: "We provide expert dental care using advanced technology and top-quality materials — all to ensure healthy, confident smiles",
      image: "./img 2.png",
      label: "Dental treatment"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out h-screen" 
           style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        
        {/* Slide 1 - Dermatology */}
        <div className="min-w-full flex">
          <div className="w-1/2 p-16 flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-teal-400 text-lg mb-6">Our Treatments</h3>
              <h1 className="text-6xl font-light mb-8 leading-tight">
                Dermatology Department
              </h1>
              <p className="text-gray-300 text-xl leading-relaxed max-w-lg">
                We offer advanced dermatology and cosmetic treatments using cutting-edge technology and expert care — all delivered with elegance, precision, and international standards.
              </p>
            </div>
            
            <div className="flex gap-4 mt-12">
              <button 
                onClick={prevSlide}
                className="w-16 h-16 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextSlide}
                className="w-16 h-16 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          
          <div className="w-1/2 relative">
            <div className="absolute inset-8 rounded-3xl overflow-hidden">
              <img 
                src={slides[0].image}
                alt="Dermatology treatment"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-8">
                <span className="text-white text-xl font-light">Dermatology Department</span>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 - Dental */}
        <div className="min-w-full flex">
          <div className="w-1/2 p-16 flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-teal-400 text-lg mb-6">Our Treatments</h3>
              <h1 className="text-6xl font-light mb-8 leading-tight">
                Dental treatment
              </h1>
              <p className="text-gray-300 text-xl leading-relaxed max-w-lg">
                We provide expert dental care using advanced technology and top-quality materials — all to ensure healthy, confident smiles
              </p>
            </div>
            
            <div className="flex gap-4 mt-12">
              <button 
                onClick={prevSlide}
                className="w-16 h-16 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextSlide}
                className="w-16 h-16 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          
          <div className="w-1/2 relative">
            <div className="absolute inset-8 rounded-3xl overflow-hidden bg-gray-900">
              <img 
                src={slides[1].image}
                alt="Dental treatment"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute bottom-8 left-8">
                <span className="text-white text-xl font-light">Dental treatment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}