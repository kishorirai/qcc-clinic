import React, { useState } from 'react';
import { Play, Apple, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function DentalAppComponent() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <div className="w-full">
      {/* Section 1: App Download Area */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Mobile Mockup */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-64 h-[500px] bg-black rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Phone Screen Content */}
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-4 text-white">
                      <div className="flex items-center space-x-2 mb-4">
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                          <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                        </div>
                        <div>
                          <h3 className="font-bold text-sm">DENTAL PROTECT</h3>
                          <p className="text-xs opacity-90">Healthy teeth make happy smiles</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Navigation Menu */}
                    <div className="p-4 space-y-3">
                      {['Home', 'About Us', 'Our Services', 'Blog', 'Gallery', 'Contact Us'].map((item, index) => (
                        <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100">
                          <span className="text-gray-700 text-sm">{item}</span>
                          <span className="text-gray-400">›</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Bottom Content */}
                    <div className="p-4 mt-4">
                      <div className="bg-gray-100 rounded-lg p-3">
                        <div className="w-full h-16 bg-gray-200 rounded mb-2"></div>
                        <h4 className="text-sm font-semibold text-blue-500">Dental Orthodontics</h4>
                        <p className="text-xs text-gray-600">Freely smile involved with dentistry</p>
                        <div className="flex space-x-1 mt-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - App Download Content */}
            <div className="text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Get Our App
              </h2>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-lg mx-auto">
                Download our dental clinic app for easy appointment booking, reminders, and more!
              </p>
              
              {/* Download Buttons */}
              <div className="flex flex-col gap-4 items-center max-w-sm mx-auto">
             
                {/* Google Play Button */}
               <button className="w-full flex items-center justify-center space-x-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-teal-400 hover:to-blue-500">
                   <img
                    src="/logo.png"
                    alt="Google Play" className="h-8"
                />
                   <span className="text-xl font-semibold">Download on Google Play</span>
                </button>

                {/* App Store Button */}
                <button className="w-full flex items-center justify-center space-x-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-teal-400 hover:to-blue-500">
                  <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">A</span>
                  </div>
                  <span className="text-xl font-semibold">Download on App Store</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Footer with Newsletter and Info */}
      <footer className="bg-black text-white">
        {/* Newsletter Section */}
        <div className="bg-black py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-2 text-white">Stay in touch</h2>
            <h3 className="text-4xl font-bold mb-8 text-cyan-400">Join our Community</h3>
            <p className="text-gray-300 mb-8 text-lg">
              Don't worry — we won't spam you with countless emails or texts. Stay in touch and receive VIP 
              offers and first-access to our events!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 bg-transparent border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-all text-lg"
                />
              </div>
              <button
                onClick={handleSubscribe}
                className="px-8 py-4 bg-cyan-400 hover:bg-cyan-300 text-black font-semibold rounded-lg transition-all duration-300 text-lg"
              >
                Subscribe
              </button>
            </div>
            
            <p className="text-sm text-gray-400 mt-6">
              By clicking Sign Up you're confirming that you agree with our Terms and Conditions.
            </p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="bg-black-900 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <div className="text-cyan-400 text-sm font-medium">Quality Care Clinics</div>
                    <div className="text-gray-400 text-xs">New Hope • Live Hope</div>
                  </div>
                </div>
                <div className="text-cyan-400 font-medium">Quality Clinics, Saudi Arabia</div>
                <div className="text-gray-300">0141 777 7511</div>
                <div className="text-gray-300">info@qualityclinics.sa</div>
              </div>

              {/* Navigation Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-cyan-400 mb-4">Navigation</h4>
                <ul className="space-y-2">
                  {['Home', 'About', 'Pricing', 'Contact', 'Careers', 'Quality Gallery', 'Technology'].map((link, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Useful Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-cyan-400 mb-4">Useful Links</h4>
                <ul className="space-y-2">
                  {['Discover', 'Our Doctors'].map((link, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter Signup */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-cyan-400 mb-4">Subscribe</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Join our newsletter to stay up to date on features and releases.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 text-sm"
                  />
                  <button
                    className="w-full px-4 py-2 bg-cyan-400 hover:bg-cyan-300 text-black rounded transition-colors font-medium text-sm"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-3">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-black-900 border-t border-gray-800 py-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 lg:mb-0">
              Website By Gravit Infosystems pvt. ltd
            </p>
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6">
              <span className="text-gray-400 text-sm">© 2023 Quality Clinics. All rights reserved.</span>
              <div className="flex space-x-4 text-sm">
                <a href="#" className="text-gray-400 hover:text-cyan-400">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-cyan-400">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-cyan-400">Cookies Settings</a>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3 mt-4 lg:mt-0">
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-cyan-400 hover:text-black transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-cyan-400 hover:text-black transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-cyan-400 hover:text-black transition-colors">
                <span className="text-xs font-bold">in</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-cyan-400 hover:text-black transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-400 transition-colors">
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}