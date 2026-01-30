import React from "react";
import { Link } from "react-router-dom";
import {
  FaCogs,
  FaShieldAlt,
  FaClock,
  FaUsers,
  FaHammer,
  FaHeadset,
} from "react-icons/fa";
import HeroSection from "../components/HeroSection";
import StatsCounter from "../components/StatsCounter";
import ClientLogos from "../components/ClientLogos";

const Homepage = () => {
  // kept these variables (no visual changes)
  const primaryColor = "teal";
  const primaryColorDark = "teal-600";
  const primaryColorLight = "teal-100";
  const headingColor = "gray-800";

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-red-500 text-white p-6 rounded-xl">
        Tailwind v4 is working 🚀
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsCounter />

      {/* Client Logos Section */}
      <ClientLogos />

      {/* Features Overview */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-8 md:mb-12">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-800 mb-3 sm:mb-4 tracking-tight leading-tight">
              Why Choose Us?
            </p>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mt-3 sm:mt-4">
              We are a growing and dynamic manufacturing organization dedicated
              to delivering excellence in precision metal fabrication and
              industrial engineering solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Precision Manufacturing Card */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg transition duration-300 transform hover:scale-105 cursor-pointer group">
              <div className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6 transition-all duration-300 group-hover:bg-blue-600">
                  <FaCogs className="text-xl sm:text-2xl text-blue-800 transition-all duration-300 group-hover:text-white" />
                </div>
                <p className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800 transition-all duration-300 group-hover:text-blue-500">
                  Precision Manufacturing
                </p>
                <p className="text-gray-700 text-sm sm:text-base">
                  Utilizing advanced CNC machining and modern production
                  systems, we deliver highly accurate and reliable components
                  for industrial applications.
                </p>
              </div>
            </div>

            {/* Quality Assured Card */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg transition duration-300 transform hover:scale-105 cursor-pointer group">
              <div className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6 transition-all duration-300 group-hover:bg-green-600">
                  <FaShieldAlt className="text-xl sm:text-2xl text-green-800 transition-all duration-300 group-hover:text-white" />
                </div>
                <p className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800 transition-all duration-300 group-hover:text-green-600">
                  Quality Assured
                </p>
                <p className="text-gray-700 text-sm sm:text-base">
                  Certified under ISO 9001:2015, we maintain stringent quality
                  control processes and partner with third-party auditors for
                  guaranteed performance.
                </p>
              </div>
            </div>

            {/* On-Time Delivery Card */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg transition duration-300 transform hover:scale-105 cursor-pointer group">
              <div className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6 transition-all duration-300 group-hover:bg-amber-600">
                  <FaClock className="text-xl sm:text-2xl text-amber-800 transition-all duration-300 group-hover:text-white" />
                </div>
                <p className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800 transition-all duration-300 group-hover:text-amber-600">
                  On-Time Delivery
                </p>
                <p className="text-gray-700 text-sm sm:text-base">
                  Our streamlined project management and efficient logistics
                  ensure timely delivery of fabricated parts and components to
                  meet your deadlines.
                </p>
              </div>
            </div>

            {/* Expert Team Card */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg transition duration-300 transform hover:scale-105 cursor-pointer group">
              <div className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6 transition-all duration-300 group-hover:bg-purple-600">
                  <FaUsers className="text-xl sm:text-2xl text-purple-800 transition-all duration-300 group-hover:text-white" />
                </div>
                <p className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800 transition-all duration-300 group-hover:text-purple-600">
                  Expert Team
                </p>
                <p className="text-gray-700 text-sm sm:text-base">
                  Our skilled engineers and experienced team of fabricators and
                  welders bring decades of expertise in structural fabrication,
                  product design, and mechanical assembly.
                </p>
              </div>
            </div>

            {/* Custom Solutions Card */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg transition duration-300 transform hover:scale-105 cursor-pointer group">
              <div className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6 transition-all duration-300 group-hover:bg-red-600">
                  <FaHammer className="text-xl sm:text-2xl text-red-800 transition-all duration-300 group-hover:text-white" />
                </div>
                <p className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800 transition-all duration-300 group-hover:text-red-600">
                  Custom Solutions
                </p>
                <p className="text-gray-700 text-sm sm:text-base">
                  We provide customized fabrication and manufacturing services
                  precisely engineered to meet unique project needs and
                  technical standards.
                </p>
              </div>
            </div>

            {/* 24/7 Support Card */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg transition duration-300 transform hover:scale-105 cursor-pointer group">
              <div className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6 transition-all duration-300 group-hover:bg-indigo-600">
                  <FaHeadset className="text-xl sm:text-2xl text-indigo-800 transition-all duration-300 group-hover:text-white" />
                </div>
                <p className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800 transition-all duration-300 group-hover:text-indigo-500">
                  Support
                </p>
                <p className="text-gray-700 text-sm sm:text-base">
                  We offer around-the-clock technical and customer support to
                  ensure uninterrupted manufacturing operations and client
                  satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-12 md:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-8 md:mb-12">
            <p className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4">
              Explore Our Capabilities
            </p>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-3 sm:mt-4">
              Discover our industrial fabrication expertise, engineering
              precision, and on-time project execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Link to="/factory" className="group">
              <div className="bg-white p-6 sm:p-8 rounded-xl hover:shadow-lg transition duration-300 group-hover:scale-105">
                <i className="fas fa-industry text-4xl text-teal-600 mb-4"></i>
                <p className="text-lg sm:text-xl font-bold mb-2 text-gray-800">
                  Factory & Equipment
                </p>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  Explore our state-of-the-art factory equipped with advanced
                  equipments and precision tools for industrial manufacturing.
                </p>
                <span className="text-teal-600 font-semibold group-hover:translate-x-2 inline-block transition duration-300">
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </span>
              </div>
            </Link>

            <Link to="/products" className="group">
              <div className="bg-white p-6 sm:p-8 rounded-xl hover:shadow-lg transition duration-300 group-hover:scale-105">
                <i className="fas fa-boxes text-4xl text-teal-600 mb-4"></i>
                <p className="text-lg sm:text-xl font-bold mb-2 text-gray-800">
                  Products & Components
                </p>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  Browse our industrial products, precision components, and
                  custom-built assemblies designed for durability and
                  performance.
                </p>
                <span className="text-teal-600 font-semibold group-hover:translate-x-2 inline-block transition duration-300">
                  View Products <i className="fas fa-arrow-right ml-2"></i>
                </span>
              </div>
            </Link>

            <Link to="/certifications" className="group">
              <div className="bg-white p-6 sm:p-8 rounded-xl hover:shadow-lg transition duration-300 group-hover:scale-105">
                <i className="fas fa-certificate text-4xl text-teal-600 mb-4"></i>
                <p className="text-lg sm:text-xl font-bold mb-2 text-gray-800">
                  Quality Certifications
                </p>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  We are ISO certified with industry approvals, and quality
                  assurance standards that guarantee excellence.
                </p>
                <span className="text-teal-600 font-semibold group-hover:translate-x-2 inline-block transition duration-300">
                  View Certifications{" "}
                  <i className="fas fa-arrow-right ml-2"></i>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-12 md:py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 sm:mb-8">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg sm:text-xl mb-6 max-w-2xl mx-auto mt-2">
            Connect with our expert team today to discuss your project needs,
            request a custom quote, or schedule a plant visit.
          </p>

          {/* buttons stack on mobile, inline on sm+ */}
          <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-4 justify-center mt-4 sm:mt-6">
            <Link
              to="/contact"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 border-2 border-white text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-gray-900"
            >
              <i className="fas fa-envelope mr-2"></i>
              <span>Get A Quote</span>
            </Link>
            <a
              href="tel:+1-555-123-4567"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 border-2 border-white text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-gray-900"
            >
              <i className="fas fa-phone mr-2"></i>
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>

  );
};

export default Homepage;
