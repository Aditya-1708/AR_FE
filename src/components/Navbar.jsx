import { useEffect, useState } from "react";
import { FaAngleDown, FaArrowRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
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
      { label: "Company Background", to: "/about#story" },
      { label: "Vision & Mission", to: "/about#vision" },
      { label: "Leadership Team", to: "/about#team" },
      { label: "Timeline", to: "/about#timeline" },
    ],
  },

  {
    label: "Factory & Capabilities",
    to: "/factory",
    dropdown: [
      { label: "Overview", to: "/factory#overview" },
      { label: "Equipment", to: "/factory#equipment" },
      { label: "Processes", to: "/factory#processes" },
      { label: "Capabilities", to: "/factory#capabilities" },
    ],
  },

  {
    label: "Products",
    to: "/products",
    dropdown: [
      { label: "Product Catalog", to: "/products#catalog" },
      { label: "Key Features", to: "/products#features" },
    ],
  },

  {
    label: "Clients",
    to: "/clients",
    dropdown: [
      { label: "Industries Served", to: "/clients#industries" },
      { label: "Our Clients", to: "/clients#clients" },
      { label: "Testimonials", to: "/clients#testimonials" },
    ],
  },

  {
    label: "Certification",
    to: "/certifications",
  },
  {
    label: "Career",
    to: "/career",
    dropdown: [
      { label: "Work Culture", to: "/career#work-culture" },
      { label: "Job Openings", to: "/career#open-positions" },
    ],
  },

  {
    label: "Blogs",
    to: "/blogs",
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
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/AR logo.png" alt="Logo" className="h-12 transition-transform group-hover:scale-105" />
          </Link>

          {/* Desktop Menu (hidden on mobile) */}
          <div className="hidden lg:flex gap-8 text-sm font-semibold text-gray-700">
            {navItems.map(item => (
              <div key={item.label} className="relative group">
                <Link to={item.to} className="flex items-center gap-1 py-2 hover:text-[#393185]">
                  {item.label}
                  {item.dropdown && <FaAngleDown className="text-xs opacity-50 group-hover:opacity-100" />}
                </Link>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#393185] transition-all duration-300 group-hover:w-full"></span>
                {item.dropdown && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-xl ring-1 ring-black/5 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                    {/* Dropdown links */}
                    {item.dropdown.map(menu => (
                      <Link key={menu.label} to={menu.to}
                        className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-blue-50/50 hover:text-[#393185] flex justify-between">
                        {menu.label}
                        <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA (hidden on mobile) */}
          <div className="hidden lg:flex items-center gap-4">
            {isAdmin && (
              <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full">
                Admin Mode
              </span>
            )}
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#393185] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg hover:bg-blue-900 transition">
              Contact Us <FaArrowRight className="text-xs" />
            </Link>
          </div>

          {/* Mobile Toggle Button (visible on mobile only) */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-800 hover:bg-gray-100 rounded-lg"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <span className="text-2xl">×</span>
              : <span className="text-2xl">☰</span>}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer (below navbar) */}
      <div className={`
      lg:hidden fixed top-20 left-0 right-0 bottom-0 z-40
      bg-white border-t border-gray-100 overflow-y-auto
      transform transition-transform duration-300
      ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}
    `}>
        <div className="p-6 space-y-4">
          {navItems.map(item => (
            <div key={item.label} className="border-b border-gray-100 last:border-0 pb-3">
              {item.dropdown ? (
                <div>
                  <button
                    className="w-full flex justify-between items-center py-3 text-base font-semibold text-gray-800"
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.label ? null : item.label)
                    }
                  >
                    <span>{item.label}</span>
                    <FaAngleDown className={`transition-transform duration-300 ${openDropdown === item.label ? "rotate-180" : ""
                      }`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openDropdown === item.label ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                    }`}>
                    {item.dropdown.map(menu => (
                      <Link key={menu.label} to={menu.to}
                        onClick={() => { setMobileOpen(false); setOpenDropdown(null); }}
                        className="block px-4 py-2.5 text-sm text-gray-600 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-[#393185] mb-2">
                        {menu.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={item.to}
                  onClick={() => { setMobileOpen(false); setOpenDropdown(null); }}
                  className="block py-3 text-base font-semibold text-gray-800"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          {/* Mobile CTA */}
          <Link
            to="/contact"
            onClick={() => { setMobileOpen(false); setOpenDropdown(null); }}
            className="block w-full mt-6 text-center bg-[#393185] text-white py-3 rounded-xl font-semibold text-base shadow-md hover:bg-blue-900 transition"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </>

  );
};

export default Navbar;
