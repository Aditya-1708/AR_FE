import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ClientGrid from '../components/ClientGrid';
import IndustryCards from '../components/IndustryCards';
import TestimonialSlider from '../components/TestimonialSlider';

const Clients = () => {
  const location = useLocation();

  // Scroll to section if there's a hash
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        const yOffset = -80; // height of fixed navbar
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="relative py-32 flex flex-col items-center justify-center bg-gradient-to-r from-teal-900 to-slate-800 text-white text-center px-6 overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <p className="text-5xl font-extrabold mb-6 py-1">Our Clients & Industries</p>
          <p className="text-xl max-w-3xl mx-auto">
            We proudly serve leading companies across diverse industries, delivering high-quality manufacturing solutions that empower business growth and long-term success.
          </p>
        </div>
      </section>

      {/* Industries Served */}
      <section id="industries" className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="container mx-auto px-4 flex flex-col items-center text-center">
      <p className="text-4xl text-blue-900 font-bold mb-3">Clients We Serve</p>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
        Our expertise spans multiple sectors, offering specialized industrial solutions tailored to meet each industry's unique requirements with precision and reliability.
      </p>
    </div>
    <IndustryCards />
  </div>
</section>


    
{/* Client Logos */}
<section id="clients" className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 py-5">
    <div className="container mx-auto px-4 flex flex-col items-center text-center">
      <p className="text-4xl text-blue-900 font-bold mb-6">Industries We Cater To</p>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto py-4">
        We’ve built strong partnerships with leading companies that trust our expertise in manufacturing, quality control, and innovation. Our clients rely on us for reliable, high-quality industrial solutions tailored to their needs.
      </p>
    </div>
    <ClientGrid />
  </div>
</section>



      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="container mx-auto px-4 flex flex-col items-center text-center">
            <p className="text-4xl text-blue-900 font-bold mb-6">Success Stories</p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover real-world manufacturing success stories and case studies showcasing how we help clients achieve their goals efficiently and effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Story Cards */}
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="mb-4">
                <i className="fas fa-building text-3xl text-blue-600 mb-3"></i>
                <p className="text-xl text-blue-900 font-bold">Construction Sector</p>
              </div>
              <p className="text-gray-600 mb-4">
                Delivered 2,000+ structural components for a major infrastructure project, maintaining strict quality standards and completing the project 3 weeks ahead of schedule.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-blue-600 font-semibold">Project Value: $2.5M</span>
                <span className="text-gray-500">2023</span>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="mb-4">
                <i className="fas fa-industry text-3xl text-green-600 mb-3"></i>
                <p className="text-xl text-blue-900 font-bold">Manufacturing OEM</p>
              </div>
              <p className="text-gray-600 mb-4">
                Developed custom production line components that enhanced manufacturing efficiency by 40%, boosting productivity and reducing operational downtime.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-green-600 font-semibold">Efficiency Gain: 40%</span>
                <span className="text-gray-500">2023</span>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="mb-4">
                <i className="fas fa-truck text-3xl text-amber-600 mb-3"></i>
                <p className="text-xl text-blue-900 font-bold">Transportation</p>
              </div>
              <p className="text-gray-600 mb-4">
                Manufactured specialized vehicle components that improved durability and reduced maintenance costs by 30% for a major logistics and fleet operator.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-amber-600 font-semibold">Cost Reduction: 30%</span>
                <span className="text-gray-500">2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="container mx-auto px-4 flex flex-col items-center text-center">
            <p className="text-4xl text-blue-900 font-bold mb-6">What Our Clients Say</p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear genuine client testimonials about our professional approach, high-quality manufacturing, and customer-focused service excellence.
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </section>
    </div>
  );
};

export default Clients;
