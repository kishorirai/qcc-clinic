import React from 'react';

const SmileMakeover = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 py-16 bg-white">
      {/* Left Content */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold text-black mb-8 leading-tight">
            Smile Makeovers 
            <br />
            that Change 
            <br />
            Lives
          </h1>
          <p className="text-gray-600 text-lg mb-10">
            We pride ourselves on delivering exceptionally high
            levels of cosmetic dentistry to each patient that
            walks through our doors.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-medium rounded hover:from-teal-600 hover:to-teal-700 transition-all duration-300">
            Book Appointment
          </button>
        </div>
      </div>

      {/* Right Video */}
      <div className="md:w-1/2">
        <div className="relative rounded-lg overflow-hidden shadow-xl">
          {/* Quality Clinics Logo */}
          <div className="absolute top-4 right-4 z-10 bg-white p-2 rounded-lg shadow-md flex items-center">
            <span className="text-sm font-medium text-blue-800 mr-2">Quality Clinics</span>
            <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
          </div>
          
          
          <video 
            className="w-full h-[560px] object-cover rounded-lg"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/video1.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default SmileMakeover;
