import { useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import WhatsAppButton from "./components/WhatsAppButton";
import AboutUs from "./pages/AboutUs";
import AdminPanel from "./pages/AdminPanel";
import ApplicationForm from "./pages/ApplicationForm";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import Career from "./pages/Career";
import Certifications from "./pages/Certifications";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import Factory from "./pages/Factory";
import Homepage from "./pages/Homepage";
import Job from "./pages/Job";
import Products from "./pages/Products";
import Signin from "./pages/Signin";
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
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/factory" element={<Factory />} />
            <Route path="/products" element={<Products />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/jobs/:id" element={<Job></Job>} />
            <Route path="/application/:jobId" element={<ApplicationForm />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminPanel />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Components */}
        <WhatsAppButton />
        {/* <BackToTop /> */}
      </div>
    </Router>
  );
}

export default App;
