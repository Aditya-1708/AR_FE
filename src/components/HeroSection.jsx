import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Array of slide data, including the image paths
const slides = [
  {
    headline: 'Engineering Excellence<br/>in Metal Fabrication',
    subheading: 'Leading manufacturer specializing in precision metal fabrication, industrial components, and custom solutions for diverse industries.',
    buttonText: 'Explore Products',
    link: '/products',
    backgroundImage: '/1.jpg',
  },
  {
    headline: 'Precision Manufacturing<br/>Advanced Technology',
    subheading: 'State-of-the-art CNC equipment and quality control processes ensure precision in every component we manufacture.',
    buttonText: 'Explore Products',
    link: '/products',
    backgroundImage: '/2.jpg',
  },
  {
    headline: 'Custom Solutions<br/>Tailored for You',
    subheading: 'Bespoke fabrication solutions designed to meet your specific requirements and exceed industry standards.',
    buttonText: 'Contact Us',
    link: '/contact',
    backgroundImage: '/3.jpg',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState('next'); // 'next' or 'prev'

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        setSlideDirection('next');
        return (prevSlide + 1) % slides.length;
      });
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  // Handler for next slide button
  const goToNextSlide = () => {
    setSlideDirection('next');
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Handler for previous slide button
  const goToPrevSlide = () => {
    setSlideDirection('prev');
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };
  
  // Handler for dot indicators
  const goToSlide = (index) => {
    setSlideDirection(index > currentSlide ? 'next' : 'prev');
    setCurrentSlide(index);
  };

  const { headline, subheading, buttonText, link, backgroundImage } = slides[currentSlide];

  return (
    <section className="relative h-screen flex items-center justify-start text-white overflow-hidden">
      {/* Background Image with Transition */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
      </div>

      {/* Content Container with animation */}
      <div 
        key={currentSlide} // Force re-render to restart animation
        className={`container mx-auto px-4 z-10 text-left transition-transform duration-1000 ease-in-out transform
          ${slideDirection === 'next' ? 'animate-slide-in-right' : 'animate-slide-in-left'}
        `}
      >
        <div className="max-w-3xl">
          {/* Main Headline */}
          <h1 
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-wide"
            dangerouslySetInnerHTML={{ __html: headline }}
          ></h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl mb-8 font-medium max-w-2xl">
            {subheading}
          </p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <Link
              to={link}
              className="flex items-center space-x-2 border-2 border-white text-white py-2 px-6 rounded-lg text-base font-semibold hover:bg-white hover:text-[#232f3e] transition-all duration-300"
            >
              <span>{buttonText}</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Navigation Controls */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 hidden md:block">
        <button 
          onClick={goToPrevSlide}
          className="p-3 bg-white bg-opacity-30 rounded-full text-white hover:bg-opacity-50 transition-all duration-300"
        >
          <FaChevronLeft size={24} />
        </button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 hidden md:block">
        <button 
          onClick={goToNextSlide}
          className="p-3 bg-white bg-opacity-30 rounded-full text-white hover:bg-opacity-50 transition-all duration-300"
        >
          <FaChevronRight size={24} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;