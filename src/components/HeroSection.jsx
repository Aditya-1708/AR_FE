import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HeroVideo from "./HeroVideo";

const HeroSection = () => {
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
        <div className="grid lg:grid-cols-2 gap-10 items-center text-white">
          {/* LEFT */}
          <div>
            <span className="inline-block mb-4 rounded-full bg-amber-400/15 px-3 py-1 text-xs font-semibold text-amber-300 tracking-wide">
              Precision Manufacturing
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Engineering Excellence
              <span className="block text-slate-200">in Metal Fabrication</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-lg">
              High-precision industrial fabrication powered by advanced CNC
              technology and uncompromising quality standards.
            </p>

            <div className="mt-6 flex gap-3">
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
