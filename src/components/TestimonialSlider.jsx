import React, { useState, useEffect } from 'react';

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      company: "ConstructCorp",
      position: "Operations Manager",
      text: "Industrial Fabrication Co. has been our go-to partner for custom metal fabrication for over 5 years. Their attention to detail, quality craftsmanship, and timely delivery have consistently exceeded our expectations. The team's expertise and professionalism make them an invaluable partner.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      company: "ManuTech Inc",
      position: "Engineering Director",
      text: "The quality of work and customer service provided by Industrial Fabrication Co. is outstanding. They understand our unique requirements and consistently deliver products that meet our exact specifications. Their technical expertise and reliability make them our preferred fabrication partner.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Mike Davis",
      company: "Heavy Equipment Co",
      position: "Plant Manager",
      text: "Working with Industrial Fabrication Co. has been a game-changer for our production efficiency. Their ability to handle complex projects while maintaining high quality standards is impressive. The team is responsive, knowledgeable, and always goes the extra mile to ensure our satisfaction.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Testimonials Container */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0">
              <div className="bg-white p-8 rounded-xl shadow-lg mx-4">
                {/* Rating Stars */}
                <div className="flex justify-center mb-6">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star text-yellow-400 text-xl"></i>
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg text-gray-700 text-center mb-8 leading-relaxed italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div className="text-center">
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
      >
        <i className="fas fa-chevron-left text-lg"></i>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
      >
        <i className="fas fa-chevron-right text-lg"></i>
      </button>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;