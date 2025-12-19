import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../../../assets/icon.png';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Handle scroll to section
  const handleScroll = (sectionId) => {
    if (location.pathname !== '/vaultenx-cloud') {
      navigate('/vaultenx-cloud');
      // Small delay to allow the page to load before scrolling
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
    setIsOpen(false);
  };

  // Helper function to handle scrolling to a section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-md py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src={logo} 
                alt="VaultenX Logo" 
                className="h-12 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-blue-800">VaultenX</span>
                <span className="text-sm font-medium text-gray-800 -mt-1">Secure Object Cloud Storage</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleScroll('features')}
              className="text-gray-800 hover:text-blue-600 transition-colors cursor-pointer"
            >Features</button>
            <button 
              onClick={() => handleScroll('usecases')}
              className="text-gray-800 hover:text-blue-600 transition-colors cursor-pointer"
            >Use Cases</button>
            <button 
              onClick={() => handleScroll('services')}
              className="text-gray-800 hover:text-blue-600 transition-colors cursor-pointer"
            >Services</button>
            <button 
              onClick={() => handleScroll('industries')}
              className="text-gray-800 hover:text-blue-600 transition-colors cursor-pointer"
            >Industries</button>
            <button 
              onClick={() => navigate('/contact')} 
              className="bg-blue-400 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => handleScroll('features')}
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer block py-2 w-full text-left"
              >
                Features
              </button>
              <button 
                onClick={() => handleScroll('usecases')}
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer block py-2 w-full text-left"
              >
                Use Cases
              </button>
              <button 
                onClick={() => handleScroll('services')}
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer block py-2 w-full text-left"
              >
                Services
              </button>
              <button 
                onClick={() => handleScroll('industries')}
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer block py-2 w-full text-left"
              >
                Industries
              </button>
              <button 
                onClick={() => {
                  setIsOpen(false);
                  navigate('/contact');
                }}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full text-center"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
