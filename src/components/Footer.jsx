import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/factory", label: "Factory & Capabilities" },
    { path: "/products", label: "Products" },
    { path: "/clients", label: "Clients" },
    { path: "/certifications", label: "Certifications" },
    { path: "/contact", label: "Contact" },
  ];

  const services = [
    "Custom Metal Fabrication",
    "CNC Bending",
    "Welding Services",
    "Spray Painting",
    "Assembly & Integration",
    "Quality Inspection",
    "Project Management",
    "Engineering Support",
  ];

  const socialLinks = [
    { icon: "fab fa-facebook", href: "#", label: "Facebook" },
    { icon: "fab fa-twitter", href: "#", label: "Twitter" },
    { icon: "fab fa-linkedin", href: "#", label: "LinkedIn" },
    { icon: "fab fa-youtube", href: "#", label: "YouTube" },
    { icon: "fab fa-instagram", href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-[#0B0F19] text-white pt-20 pb-10 border-t border-gray-800">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="AR logo.png"
                alt="AR Industries logo"
                className="h-8 w-auto object-contain"
              />
              <h3 className="text-2xl font-bold tracking-tight text-white">
                AR Industries
              </h3>
            </div>

            <p className="text-gray-400 leading-relaxed text-sm lg:pr-6">
              Leading manufacturer specializing in precision metal fabrication,
              industrial components, and custom solutions for diverse
              industries. Committed to quality and innovation.
            </p>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#393185] hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-[#393185]/40"
                >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-[#393185] after:rounded-full">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-[#393185] mr-0 group-hover:mr-2">
                      <i className="fas fa-chevron-right text-xs"></i>
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-[#393185] after:rounded-full">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
                >
                  <i className="fas fa-circle text-[4px] text-[#393185]"></i>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-[#393185] after:rounded-full">
              Contact Us
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="mt-1 w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 group-hover:bg-[#393185] transition-colors duration-300">
                  <i className="fas fa-map-marker-alt text-gray-400 group-hover:text-white text-sm"></i>
                </div>
                <span className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  Plot no 125-C, KIADB Industrial Area, 2nd Phase
                  <br />
                  Kudumalakunte Village, Gauribidanur (Tk)
                  <br />
                  Chikkaballapur (Dist), Karnataka – 561208
                </span>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 group-hover:bg-[#393185] transition-colors duration-300">
                  <i className="fas fa-phone text-gray-400 group-hover:text-white text-sm"></i>
                </div>
                <a
                  href="tel:+919611103554"
                  className="text-gray-400 hover:text-white transition-colors font-medium"
                >
                  +91-9611103554
                </a>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 group-hover:bg-[#393185] transition-colors duration-300">
                  <i className="fas fa-envelope text-gray-400 group-hover:text-white text-sm"></i>
                </div>
                <a
                  href="mailto:arindustries2153@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors break-all"
                >
                  arindustries2153@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 group-hover:bg-[#393185] transition-colors duration-300">
                  <i className="fas fa-clock text-gray-400 group-hover:text-white text-sm"></i>
                </div>
                <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  Mon - Sat: 8:00 AM - 6:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {currentYear} AR Industries. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "Sitemap",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-500 hover:text-[#393185] transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#393185] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
