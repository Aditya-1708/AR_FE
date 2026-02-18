import { motion } from "framer-motion";
import { useEffect } from "react";
import { FaBuilding, FaIndustry, FaTruck } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import ClientGrid from "../components/ClientGrid";
import IndustryCards from "../components/IndustryCards";
import TestimonialSlider from "../components/TestimonialSlider";

const Clients = () => {
  const location = useLocation();

  // Scroll to section if there's a hash
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const yOffset = -100; // height of fixed navbar + padding
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ================= HERO ================= */}
      <section className="relative py-24 md:py-32 flex flex-col items-center justify-center text-white text-center px-6 overflow-hidden bg-[#393185]">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-white blur-3xl"></div>
          <div className="absolute top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-white blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-semibold tracking-wider mb-6">
            TRUSTED PARTNERSHIPS
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Our Clients & Industries
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            We proudly serve leading companies across diverse industries,
            delivering high-quality manufacturing solutions that empower
            business growth and long-term success.
          </p>
        </div>
      </section>

      {/* ================= INDUSTRIES SERVED ================= */}

      {/* ================= CLIENT LOGOS ================= */}
      <section
        id="clients"
        className="py-24 bg-gray-50 border-t border-gray-200"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Valued Clients
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We’ve built strong partnerships with leading companies that trust
              our expertise in manufacturing and quality control.
            </p>
          </div>
          <IndustryCards />
        </div>
      </section>
      <section id="industries" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <div className="w-24 h-1 bg-[#393185] mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise spans multiple sectors, offering specialized
              industrial solutions tailored to meet each industry's unique
              requirements.
            </p>
            <ClientGrid />
          </div>
        </div>
      </section>
      {/* ================= SUCCESS STORIES ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-[#393185] font-bold tracking-wider uppercase text-sm mb-3 block">
              Real Results
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Success Stories
            </h2>
            <div className="w-24 h-1 bg-[#393185] mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover real-world manufacturing success stories and case studies
              showcasing our impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Story 1 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="mb-6 flex items-start justify-between">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center">
                  <FaBuilding className="text-2xl text-blue-600" />
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
                  2023
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Construction Sector
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                Delivered 2,000+ structural components for a major
                infrastructure project, maintaining strict quality standards and
                completing the project 3 weeks ahead of schedule.
              </p>
              <div className="pt-6 border-t border-gray-100 mt-auto">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 font-medium">
                    Project Value
                  </span>
                  <span className="text-blue-600 font-bold text-lg">$2.5M</span>
                </div>
              </div>
            </motion.div>

            {/* Story 2 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="mb-6 flex items-start justify-between">
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center">
                  <FaIndustry className="text-2xl text-green-600" />
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                  2023
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Manufacturing OEM
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                Developed custom production line components that enhanced
                manufacturing efficiency by 40%, boosting productivity and
                reducing operational downtime.
              </p>
              <div className="pt-6 border-t border-gray-100 mt-auto">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 font-medium">
                    Efficiency Gain
                  </span>
                  <span className="text-green-600 font-bold text-lg">40%</span>
                </div>
              </div>
            </motion.div>

            {/* Story 3 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="mb-6 flex items-start justify-between">
                <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center">
                  <FaTruck className="text-2xl text-amber-600" />
                </div>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full">
                  2024
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Transportation
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                Manufactured specialized vehicle components that improved
                durability and reduced maintenance costs by 30% for a major
                logistics and fleet operator.
              </p>
              <div className="pt-6 border-t border-gray-100 mt-auto">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 font-medium">
                    Cost Reduction
                  </span>
                  <span className="text-amber-600 font-bold text-lg">30%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section
        id="testimonials"
        className="py-24 bg-gray-50 border-t border-gray-200"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <div className="w-24 h-1 bg-[#393185] mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear genuine client testimonials about our professional approach,
              high-quality manufacturing, and customer-focused service.
            </p>
          </div>
          <div className="mt-2">
            <TestimonialSlider />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
