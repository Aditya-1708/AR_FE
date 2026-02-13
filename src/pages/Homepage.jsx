import {
  FaClock,
  FaCogs,
  FaHammer,
  FaHeadset,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ClientLogos from "../components/ClientLogos";
import HeroSection from "../components/HeroSection";
import StatsCounter from "../components/StatsCounter";

const Homepage = () => {

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <div className="relative z-10 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
             <StatsCounter />
        </div>
      </div>

      {/* Client Logos Section */}
      <div className="py-12 bg-white border-b border-gray-100">
          <ClientLogos />
      </div>

      {/* Features Overview */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16 md:mb-20">
            <span className="text-[#393185] font-bold tracking-wider uppercase text-sm mb-3">Excellence in Engineering</span>
            <p className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Why Choose Us?
            </p>
            <div className="h-1 w-24 bg-[#393185] rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a growing and dynamic manufacturing organization dedicated
              to delivering excellence in precision metal fabrication and
              industrial engineering solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Precision Manufacturing Card */}
            <div className="bg-gray-50 p-8 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-2xl border border-transparent hover:border-gray-100 group">
              <div className="flex flex-col items-start h-full">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-6">
                  <FaCogs className="text-3xl text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                  Precision Manufacturing
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6 flex-grow">
                  Utilizing advanced CNC machining and modern production
                  systems, we deliver highly accurate and reliable components
                  for industrial applications.
                </p>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
              </div>
            </div>

            {/* Quality Assured Card */}
            <div className="bg-gray-50 p-8 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-2xl border border-transparent hover:border-gray-100 group">
              <div className="flex flex-col items-start h-full">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-6">
                  <FaShieldAlt className="text-3xl text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-green-600 transition-colors">
                  Quality Assured
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6 flex-grow">
                  Certified under ISO 9001:2015, we maintain stringent quality
                  control processes and partner with third-party auditors for
                  guaranteed performance.
                </p>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-600 w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
              </div>
            </div>

            {/* On-Time Delivery Card */}
            <div className="bg-gray-50 p-8 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-2xl border border-transparent hover:border-gray-100 group">
              <div className="flex flex-col items-start h-full">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-6">
                  <FaClock className="text-3xl text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-amber-600 transition-colors">
                  On-Time Delivery
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6 flex-grow">
                  Our streamlined project management and efficient logistics
                  ensure timely delivery of fabricated parts and components to
                  meet your deadlines.
                </p>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-600 w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
              </div>
            </div>

            {/* Expert Team Card */}
            <div className="bg-gray-50 p-8 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-2xl border border-transparent hover:border-gray-100 group">
              <div className="flex flex-col items-start h-full">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-6">
                  <FaUsers className="text-3xl text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-purple-600 transition-colors">
                  Expert Team
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6 flex-grow">
                  Our skilled engineers and experienced team of fabricators and
                  welders bring decades of expertise in structural fabrication,
                  product design, and mechanical assembly.
                </p>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-600 w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
              </div>
            </div>

            {/* Custom Solutions Card */}
            <div className="bg-gray-50 p-8 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-2xl border border-transparent hover:border-gray-100 group">
              <div className="flex flex-col items-start h-full">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-6">
                  <FaHammer className="text-3xl text-red-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-red-600 transition-colors">
                  Custom Solutions
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6 flex-grow">
                  We provide customized fabrication and manufacturing services
                  precisely engineered to meet unique project needs and
                  technical standards.
                </p>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-red-600 w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
              </div>
            </div>

            {/* 24/7 Support Card */}
            <div className="bg-gray-50 p-8 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-2xl border border-transparent hover:border-gray-100 group">
              <div className="flex flex-col items-start h-full">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-6">
                  <FaHeadset className="text-3xl text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-indigo-600 transition-colors">
                  Support
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6 flex-grow">
                  We offer around-the-clock technical and customer support to
                  ensure uninterrupted manufacturing operations and client
                  satisfaction.
                </p>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-600 w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 md:py-28 bg-[#f8fafc] relative">
         {/* Decorative background element */}
         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#393185] mb-6 tracking-tight">
              Explore Our Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our industrial fabrication expertise, engineering
              precision, and on-time project execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/factory" className="group h-full">
              <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col items-center text-center hover:-translate-y-2">

                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-teal-700 transition-colors">
                  Factory & Equipment
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  Explore our state-of-the-art factory equipped with advanced
                  equipments and precision tools for industrial manufacturing.
                </p>
                <span className="text-teal-600 font-bold group-hover:translate-x-1 inline-flex items-center transition-transform duration-300">
                  Learn More <i className="fas fa-arrow-right ml-2 text-sm"></i>
                </span>
              </div>
            </Link>

            <Link to="/products" className="group h-full">
              <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col items-center text-center hover:-translate-y-2">

                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-[#393185] transition-colors">
                  Products & Components
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  Browse our industrial products, precision components, and
                  custom-built assemblies designed for durability and
                  performance.
                </p>
                <span className="text-[#393185] font-bold group-hover:translate-x-1 inline-flex items-center transition-transform duration-300">
                  View Products <i className="fas fa-arrow-right ml-2 text-sm"></i>
                </span>
              </div>
            </Link>

            <Link to="/certifications" className="group h-full">
              <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col items-center text-center hover:-translate-y-2">

                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-orange-700 transition-colors">
                  Quality Certifications
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  We are ISO certified with industry approvals, and quality
                  assurance standards that guarantee excellence.
                </p>
                <span className="text-orange-600 font-bold group-hover:translate-x-1 inline-flex items-center transition-transform duration-300">
                  View Certifications <i className="fas fa-arrow-right ml-2 text-sm"></i>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 md:py-24 bg-[#393185] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
             <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
             <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Connect with our expert team today to discuss your project needs,
            request a custom quote, or schedule a plant visit.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-[#393185] py-4 px-8 rounded-xl font-bold text-lg shadow-lg hover:bg-gray-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <i className="fas fa-envelope mr-3"></i>
              Get A Quote
            </Link>
            <a
              href="tel:+1-555-123-4567"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white/30 text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              <i className="fas fa-phone mr-3"></i>
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};


export default Homepage;
