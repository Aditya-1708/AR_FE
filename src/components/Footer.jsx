import React from "react";
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
    <footer className="bg-slate-900 text-white py-14">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-5">
              <i className="fas fa-industry text-2xl text-amber-500 mr-3"></i>
              <h3 className="text-xl font-bold">AR Industries</h3>
            </div>
            <p className="text-gray-300 mb-5 leading-relaxed">
              Leading manufacturer specializing in precision metal fabrication,
              industrial components, and custom solutions for diverse industries.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-amber-500 transition duration-200 transform hover:scale-110"
                >
                  <i className={`${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-amber-500 transition duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-5">Our Services</h4>
            <ul className="space-y-3 text-gray-300">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="hover:text-white transition duration-200 flex items-start"
                >
                  <i className="fas fa-arrow-right text-amber-500 mr-2 mt-1 text-sm"></i>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-5">Contact Information</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-amber-500 mr-3 mt-1"></i>
                <span className="leading-relaxed">
                  Plot no 125-C, KIADB Industrial Area, 2nd Phase<br />
                  Kudumalakunte Village, Gauribidanur (Tk)<br />
                  Chikkaballapur (Dist), Karnataka – 561208
                </span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone text-amber-500 mr-3"></i>
                <a
                  href="tel:+919611103554"
                  className="hover:text-amber-500 transition duration-200"
                >
                  9611103554
                </a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope text-amber-500 mr-3"></i>
                <a
                  href="mailto:arindustries2153@gmail.com"
                  className="hover:text-amber-500 transition duration-200 break-all"
                >
                  arindustries2153@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <i className="fas fa-clock text-amber-500 mr-3 mt-1"></i>
                <span>
                  Mon - Sat: 8:00 AM - 6:00 PM<br />
                  
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} AR Industries. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-amber-500 transition duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-500 transition duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-500 transition duration-200"
              >
                Cookie Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-500 transition duration-200"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
