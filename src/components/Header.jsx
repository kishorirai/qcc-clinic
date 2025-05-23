import React, { useState } from 'react';

const DentalHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-teal-400 rounded-lg flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded-full"></div>
          </div>
          <div className="text-white">
            <div className="text-sm font-medium">عيادات كوالتي كير</div>
            <div className="text-xs text-teal-300">Quality Care Clinics</div>
            <div className="text-xs text-gray-300">الدمام . الرياض</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#" className="text-white text-sm hover:text-teal-300">About</a>
          <a href="#" className="text-white text-sm hover:text-teal-300">Discover</a>
          <a href="#" className="text-white text-sm hover:text-teal-300">Careers</a>
          <a href="#" className="text-white text-sm hover:text-teal-300">Contact</a>
          <a href="#" className="text-white text-sm hover:text-teal-300">Quality Gallery</a>
          <a href="#" className="text-white text-sm hover:text-teal-300">Technology</a>
          <a href="#" className="text-white text-sm hover:text-teal-300">Our Doctors</a>
          
          {/* Language Button */}
          <button className="px-4 py-2 border border-white text-white text-sm rounded hover:bg-white hover:text-black">
            عربي
          </button>
          
          {/* Book Appointment Button */}
          <button className="px-6 py-3 bg-teal-500 text-white text-sm rounded hover:bg-teal-600">
            Book Appointment
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black bg-opacity-90 p-4 space-y-3 mt-4 rounded">
          <a href="#" className="block text-white text-sm py-2">About</a>
          <a href="#" className="block text-white text-sm py-2">Discover</a>
          <a href="#" className="block text-white text-sm py-2">Careers</a>
          <a href="#" className="block text-white text-sm py-2">Contact</a>
          <a href="#" className="block text-white text-sm py-2">Quality Gallery</a>
          <a href="#" className="block text-white text-sm py-2">Technology</a>
          <a href="#" className="block text-white text-sm py-2">Our Doctors</a>
          <button className="block w-full text-left px-4 py-2 border border-white text-white text-sm rounded my-2">
            عربي
          </button>
          <button className="block w-full px-6 py-3 bg-teal-500 text-white text-sm rounded mt-3">
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
};

export default DentalHeader;