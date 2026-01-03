import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaAngleDown, FaArrowRight } from "react-icons/fa";

const NAV_ITEMS = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About Us",
    to: "/about",
    dropdown: [
      { label: "Company Background", to: "/about#background" },
      { label: "Vision/Mission", to: "/about#vision" },
      { label: "Timeline", to: "/about#timeline" },
      { label: "Factory Gallery", to: "/about#factory-gallery" },
    ],
  },
  {
    label: "Factory & Capabilities",
    to: "/factory",
    dropdown: [
      { label: "OH Cranes", to: "/factory#ohcranes" },
      { label: "Plasma", to: "/factory#plasma" },
      { label: "Paint Booth", to: "/factory#paintbooth" },
    ],
  },
  {
    label: "Products",
    to: "/products",
    dropdown: [
      { label: "Hoppers", to: "/products/hoppers" },
      { label: "Sub-frames", to: "/products/subframes" },
      { label: "Torque-frame", to: "/products/torqueframe" },
      { label: "Bin frame", to: "/products/binframe" },
      { label: "Jig assembly", to: "/products/jigassembly" },
      { label: "Hydro project", to: "/products/hydroproject" },
    ],
  },
  {
    label: "Clients",
    to: "/clients",
    dropdown: [
      { label: "Industries Served", to: "/clients#industries" },
      { label: "Testimonials", to: "/clients#testimonials" },
    ],
  },
  {
    label: "Certification",
    to: "/certifications",
    dropdown: [{ label: "ISO", to: "/certifications#iso" }],
  },
  {
    label: "Career",
    to: "/career",
    dropdown: [
      { label: "Work Culture", to: "/career#work-culture" },
      { label: "Job Openings", to: "/career#openings" },
      { label: "Apply Now", to: "/career#application-form" },
    ],
  },
];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        const yOffset = -80;
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location]);

  const handleDropdownClick = (label, to) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
    navigate(to);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white text-black shadow-xl font-inter">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 flex flex-wrap justify-between items-center h-auto md:h-20 py-3 md:py-0">

        {/* Logo */}
       <Link to="/" className="flex items-center space-x-3 mb-4 md:mb-0">
  <img src="/AR logo.png" alt="AR Industries Logo" className="h-12 md:h-14" />
</Link>


        {/* Nav Items */}
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 md:space-x-8 text-sm md:text-base font-medium w-full md:w-auto">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="relative">
              <button
                onClick={() => handleDropdownClick(item.label, item.to)}
                className="flex items-center hover:text-[#3A3A8C] transition space-x-1 font-inter focus:outline-none"
              >
                <span>{item.label}</span>
                {item.dropdown && (
                  <FaAngleDown
                    className={
                      "ml-1 transition" +
                      (openDropdown === item.label ? " rotate-180" : "")
                    }
                  />
                )}
              </button>

              {openDropdown === item.label && item.dropdown && (
                <div
                  className="absolute top-full left-0 mt-2 min-w-[180px] bg-white text-[#222222] rounded-lg shadow-lg overflow-hidden z-50"
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div className="py-3 px-4 grid grid-cols-1 gap-1">
                    {item.dropdown.map((menu) => (
                      <Link
                        key={menu.label}
                        to={menu.to}
                        onClick={() => setOpenDropdown(null)}
                        className="block py-2 px-2 hover:bg-[#F3F4F6] hover:text-[#3A3A8C] rounded font-inter"
                      >
                        {menu.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Button */}
        <div className="mt-3 md:mt-0 w-full md:w-auto flex justify-center md:justify-end">
  <Link
    to="/contact"
    className="flex items-center space-x-2 
               border-2 border-black 
               text-black 
               py-2 px-6 rounded-lg 
               text-sm md:text-base font-semibold 
               hover:bg-gray-200 hover:text-black
               transition-all duration-300 font-inter"
  >
    <span>Contact Us</span>
    <FaArrowRight className="text-black" />
  </Link>
</div>

      </div>
    </nav>
  );
};

export default Navbar;
