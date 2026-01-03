import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import BackToTop from "./components/BackToTop";

// Pages
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import Factory from "./pages/Factory";
import Products from "./pages/Products";
import Clients from "./pages/Clients";
import Certifications from "./pages/Certifications";
import Career from "./pages/Career";
import Contact from "./pages/Contact";

// Scroll to top or to element when route changes
const ScrollToTopOrAnchor = () => {
  const location = useLocation();

  useEffect(() => {
    // If URL has hash (like /about#vision), scroll to that section smoothly
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // If no hash, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col scroll-smooth">
        {/* Navbar */}
        <Navbar />

        {/* Scroll behavior */}
        <ScrollToTopOrAnchor />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/factory" element={<Factory />} />
            <Route path="/products" element={<Products />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Components */}
        <WhatsAppButton />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
