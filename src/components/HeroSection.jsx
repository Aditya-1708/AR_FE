import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HeroVideo from "./HeroVideo";
const slides = [
  {
    headline: "Engineering Excellence<br/>in Metal Fabrication",
    subheading:
      "Leading manufacturer specializing in precision metal fabrication, industrial components, and custom solutions for diverse industries.",
    buttonText: "Explore Products",
  },
  {
    headline: "Precision Manufacturing<br/>Advanced Technology",
    subheading:
      "State-of-the-art CNC equipment and quality control processes ensure precision in every component we manufacture.",
    buttonText: "Explore Products",
  },
  {
    headline: "Custom Solutions<br/>Tailored for You",
    subheading:
      "Bespoke fabrication solutions designed to meet your specific requirements and exceed industry standards.",
    buttonText: "Contact Us",
  },
];
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = slides[currentSlide];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-4rem)] pt-16">
      {/* ===== BACKGROUND IMAGE ===== */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Hero.webp')" }}
      />

      {/* ===== NEUTRAL OVERLAY ===== */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 items-center text-white">
          {/* LEFT */}
          <div>
            <div
              key={currentSlide}
              className="transition-opacity duration-700 ease-in-out"
            >
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"
                dangerouslySetInnerHTML={{ __html: slide.headline }}
              />
              <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-lg">
                {slide.subheading}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-lg
               bg-slate-900 px-6 py-3 text-sm font-semibold
               hover:bg-slate-800 transition shadow-lg"
              >
                Explore Products
                <FaArrowRight />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg
               border border-white/30 px-6 py-3 text-sm font-semibold
               hover:bg-white/10 transition backdrop-blur"
              >
                Contact Us
              </Link>

              {/* YouTube Premium Button */}
              <a
                href="https://www.youtube.com/watch?v=QHZhsRPNomkID"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg
               bg-gradient-to-r from-red-600 to-red-500
               px-6 py-3 text-sm font-semibold text-white
               shadow-lg hover:shadow-red-500/40
               hover:scale-[1.03] transition-all duration-200"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.5 6.2s-.2-1.7-.7-2.4c-.6-.9-1.3-.9-1.6-1C18.9 2.5 12 2.5 12 2.5h0s-6.9 0-9.2.3c-.3.1-1 .1-1.6 1C.7 4.5.5 6.2.5 6.2S.3 8.1.3 10v2c0 1.9.2 3.8.2 3.8s.2 1.7.7 2.4c.6.9 1.4.9 1.8 1 1.3.1 9 .3 9 .3s6.9 0 9.2-.3c.3-.1 1-.1 1.6-1 .5-.7.7-2.4.7-2.4s.2-1.9.2-3.8v-2c0-1.9-.2-3.8-.2-3.8zM9.8 14.8V7.9l6.3 3.5-6.3 3.4z" />
                </svg>
                Watch on YouTube
              </a>
            </div>
          </div>

          {/* RIGHT MEDIA */}
          <div
            className="relative aspect-video rounded-2xl overflow-hidden
                          bg-black/50 backdrop-blur shadow-xl
                          border border-white/10"
          >
            <HeroVideo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
