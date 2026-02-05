import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaAngleDown, FaArrowRight } from "react-icons/fa";
import axiosInstance from "../axios";

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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const res = await axiosInstance.get("/admins/me");
        if (res.data.success) {
          setIsAdmin(true);
        }
      } catch {
        setIsAdmin(false);
      }
    };

    checkAdmin();
  }, []);

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

  // Add admin item dynamically
  const navItems = isAdmin
    ? [...NAV_ITEMS, { label: "Admin", to: "/admin" }]
    : NAV_ITEMS;

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img src="/AR logo.png" alt="AR Industries Logo" className="h-10" />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-800">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <Link to={item.to} className="hover:text-[#393185] transition">
                {item.label}
              </Link>

              {item.dropdown && (
                <div
                  className="
                    absolute left-0 top-full mt-3 w-56
                    bg-white rounded-xl shadow-lg border
                    opacity-0 invisible
                    group-hover:opacity-100 group-hover:visible
                    transition-all duration-200
                  "
                >
                  <div className="py-2">
                    {item.dropdown.map((menu) => (
                      <Link
                        key={menu.label}
                        to={menu.to}
                        className="
                          block px-5 py-2 text-sm
                          text-gray-700
                          hover:bg-gray-100
                          hover:text-[#393185]
                        "
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

        {/* DESKTOP CTA */}
        <Link
          to="/contact"
          className="
            hidden md:inline-flex items-center
            bg-[#393185] text-white px-5 py-2
            rounded-lg text-sm font-semibold
            hover:bg-[#2f296f] transition
          "
        >
          Contact Us
        </Link>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-2xl text-gray-800"
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-4 space-y-3 text-sm font-medium text-gray-800">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  className="w-full flex justify-between items-center py-2"
                  onClick={() => {
                    if (item.dropdown) {
                      setOpenDropdown(
                        openDropdown === item.label ? null : item.label,
                      );
                    } else {
                      navigate(item.to); // ✅ NAVIGATE
                      setMobileOpen(false); // ✅ CLOSE MENU
                      setOpenDropdown(null);
                    }
                  }}
                >
                  <span>{item.label}</span>
                  {item.dropdown && <FaAngleDown />}
                </button>

                {/* DROPDOWN */}
                {item.dropdown && openDropdown === item.label && (
                  <div className="pl-4 mt-2 space-y-2">
                    {item.dropdown.map((menu) => (
                      <Link
                        key={menu.label}
                        to={menu.to}
                        onClick={() => {
                          setMobileOpen(false);
                          setOpenDropdown(null);
                        }}
                        className="block py-1 text-gray-600 hover:text-[#393185]"
                      >
                        {menu.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* MOBILE CTA */}
            <Link
              to="/contact"
              onClick={() => {
                setMobileOpen(false);
                setOpenDropdown(null);
              }}
              className="
          block mt-4 text-center
          bg-[#393185] text-white py-2
          rounded-lg font-semibold
          hover:bg-[#2f296f] transition
        "
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
