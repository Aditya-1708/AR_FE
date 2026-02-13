import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaCogs, FaMedal, FaShippingFast, FaTools } from "react-icons/fa";
import axiosInstance from "../axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axiosInstance.get("/products");
        setProducts(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* ================= HERO ================= */}
      <section className="relative py-24 md:py-32 flex flex-col items-center justify-center text-white text-center px-6 overflow-hidden bg-[#393185]">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-white blur-3xl"></div>
          <div className="absolute top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-white blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-semibold tracking-wider mb-6">
            ENGINEERED FOR EXCELLENCE
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Products & Components
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Explore our diverse range of industrial-grade fabricated products
            designed for reliability, precision, and performance.
          </p>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section id="catalog" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">

          {/* Loading */}
          {loading && (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#393185]"></div>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="text-center py-20">
              <p className="text-lg text-red-500 bg-red-50 inline-block px-6 py-3 rounded-lg border border-red-100">
                {error}
              </p>
            </div>
          )}

          {/* Grid */}
          {!loading && !error && (
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                >
                  {/* Image */}
                  <div className="h-64 bg-gray-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10" />
                    {product.img ? (
                      <img
                        src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${product.img}`}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full text-gray-400 bg-gray-50">
                        <FaTools className="text-4xl mb-2 opacity-20" />
                        <span className="text-sm">No Image Available</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#393185] transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="w-12 h-1 bg-[#393185]/20 rounded-full mb-4"></div>
                    <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                      {product.description}
                    </p>


                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section id="features" className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Why Choose Our Products?</h2>
            <div className="w-24 h-1 bg-[#393185] mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with precision, durability, and performance at the core using advanced fabrication techniques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FaMedal,
                title: "Premium Quality",
                desc: "High-grade materials verified by strict quality control protocols.",
                color: "text-blue-600",
                bg: "bg-blue-50"
              },
              {
                icon: FaCogs,
                title: "Precision Engineering",
                desc: "CNC machined components with extremely tight tolerances.",
                color: "text-green-600",
                bg: "bg-green-50"
              },
              {
                icon: FaShippingFast,
                title: "Fast Delivery",
                desc: "Optimized production workflows ensuring timely project delivery.",
                color: "text-amber-600",
                bg: "bg-amber-50"
              },
              {
                icon: FaTools,
                title: "Custom Solutions",
                desc: "Tailored fabrication services to meet specific industrial requirements.",
                color: "text-purple-600",
                bg: "bg-purple-50"
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ${feature.bg} ${feature.color} text-2xl shadow-sm`}>
                  <feature.icon />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
