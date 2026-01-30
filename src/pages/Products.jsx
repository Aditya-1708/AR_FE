import React, { useEffect, useState } from "react";
import { FaMedal, FaCogs, FaShippingFast, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";
import axiosInstance from "../axios"
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
    <div className="min-h-screen pt-20">
      {/* ================= HERO ================= */}
      <section className="relative py-32 flex flex-col items-center justify-center bg-gradient-to-r from-teal-900 to-slate-800 text-white text-center px-6">
        <div className="container mx-auto px-4">
          <p className="text-5xl font-extrabold mb-6">Products & Components</p>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Explore our diverse range of industrial-grade fabricated products
            designed for reliability and performance.
          </p>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">

          {/* Loading */}
          {loading && (
            <p className="text-center text-lg text-gray-500">
              Loading products...
            </p>
          )}

          {/* Error */}
          {error && (
            <p className="text-center text-lg text-red-500">
              {error}
            </p>
          )}

          {/* Grid */}
          {!loading && !error && (
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 },
                },
              }}
            >
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="h-72 bg-gray-100">
                    {product.img ? (
                      <img
                        src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${product.img}`}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-400">
                        No Image
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-2xl font-bold mb-3 text-gray-900">
                      {product.name}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-4xl font-extrabold mb-6">Why Choose Our Products?</p>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Built with precision, durability, and performance at the core.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FaMedal,
                title: "Premium Quality",
                desc: "High-grade materials with strict QC.",
                color: "text-blue-600",
              },
              {
                icon: FaCogs,
                title: "Precision Engineering",
                desc: "CNC machined with tight tolerances.",
                color: "text-green-600",
              },
              {
                icon: FaShippingFast,
                title: "Fast Delivery",
                desc: "Efficient production and logistics.",
                color: "text-amber-600",
              },
              {
                icon: FaTools,
                title: "Custom Solutions",
                desc: "Fabricated to your exact needs.",
                color: "text-purple-600",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gray-100 ${feature.color}`}>
                  <feature.icon className="text-2xl" />
                </div>
                <p className="text-xl font-bold mb-2">{feature.title}</p>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
