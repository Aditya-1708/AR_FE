import { useEffect, useRef, useState } from 'react';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const slides = [
  {
    headline: 'View Full Story',
    subheading:'',
    buttonText: 'View on YouTube',
    link: 'https://www.youtube.com',
    backgroundImage: null,
    isVideo: true,
  },
  {
    headline: 'Engineering Excellence<br/>in Metal Fabrication',
    subheading:
      'Precision metal fabrication and industrial-grade components built with uncompromising quality.',
    buttonText: 'Explore Products',
    link: '/products',
    backgroundImage: '/1.jpg',
  },
  {
    headline: 'Precision Manufacturing<br/>Advanced Technology',
    subheading:
      'State-of-the-art CNC equipment and strict quality control ensure accuracy in every part.',
    buttonText: 'Explore Products',
    link: '/products',
    backgroundImage: '/2.jpg',
  },
  {
    headline: 'Custom Solutions<br/>Tailored for You',
    subheading:
      'Bespoke fabrication solutions engineered to meet your exact specifications.',
    buttonText: 'Contact Us',
    link: '/contact',
    backgroundImage: '/3.jpg',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('next');
  const [ctaAnimate, setCtaAnimate] = useState(false);

  const autoSlideRef = useRef(null);

  const startAutoSlide = () => {
    stopAutoSlide();
    autoSlideRef.current = setInterval(() => {
      setDirection('next');
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, currentSlide === 0 ? 22000 : 6000);
  };

  const stopAutoSlide = () => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, [currentSlide]);

  const goNext = () => {
    stopAutoSlide();
    setDirection('next');
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goPrev = () => {
    stopAutoSlide();
    setDirection('prev');
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    stopAutoSlide();
    setDirection(index > currentSlide ? 'next' : 'prev');
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];
useEffect(() => {
  setCtaAnimate(false);
}, [currentSlide]);

  return (
    <section className="relative h-screen overflow-hidden text-white">
      {/* Background */}
      {slide.isVideo ? (
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            src="/AR Industries Teaser002.mp4"
            autoPlay
            muted
            playsInline
            onEnded={()=>setCtaAnimate(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        </div>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{ backgroundImage: `url(${slide.backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        </div>
      )}

      {/* Content */}
      <div
        key={currentSlide}
        className={`relative z-10 h-full flex items-center container mx-auto px-6
        ${direction === 'next' ? 'animate-slide-in-right' : 'animate-slide-in-left'}
        `}
      >
        <div className="max-w-3xl">
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-6"
            dangerouslySetInnerHTML={{ __html: slide.headline }}
          />
          <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl">
            {slide.subheading}
          </p>

          <Link
  to={slide.link}
  className={`relative inline-flex items-center gap-3 px-8 py-4 rounded-lg 
    font-semibold text-lg border-2 overflow-hidden
    transition-colors duration-300
    ${
      ctaAnimate
        ? 'btn-fill-active text-white border-red-600'
        : 'bg-white text-red-600 border-red-600'
    }
  `}
>
  <span className="relative z-10 flex items-center gap-3">
    {slide.buttonText}
    <FaArrowRight />
  </span>
</Link>

        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={goPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 hover:bg-black/60 transition"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={goNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 hover:bg-black/60 transition"
      >
        <FaChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition
              ${index === currentSlide ? 'bg-white' : 'bg-white/40'}
            `}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
