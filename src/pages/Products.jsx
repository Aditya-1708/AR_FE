import React from "react";
import { FaMedal, FaCogs, FaShippingFast, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ProductCard from "../components/ProductCard";
import { productsData } from "../assets/data/productsData";

/* ✅ Correct Image Imports (ONLY CHANGE DONE) */
import coolWashing from "../assets/images/cool-washing.webp";
import distributionPiping from "../assets/images/distribution-piping-hydro-project.webp";
import binFrame from "../assets/images/bin-frame-4x6.webp";
import binFramesBatching from "../assets/images/Bin-frames-batching-plant.webp";
import aggregatesCrusher from "../assets/images/Aggregates-stone-crushers.webp";
import rakeMechanism from "../assets/images/Rake-mechanism-mining-equipment.webp";
import hydroDraftTube from "../assets/images/Hydro-project-draft-tube.webp";
import feedBox from "../assets/images/Feed-box-for-feed-well-mining-equipment.webp";

/* 🔥 FIXED THIS IMPORT ONLY — filename uses “thickner” (NOT thickener) */
import thickenerFeedWell from "../assets/images/Iron-ore-thickner-feed-well-mining-equipment.webp";

import thickenerBridge from "../assets/images/Bridge-for-thickner.webp";

const Products = () => {
  return (
    <div className="min-h-screen pt-20">

      {/* Hero Section */}
      <section className="relative py-32 flex flex-col items-center justify-center bg-gradient-to-r from-teal-900 to-slate-800 text-white text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative text-center flex flex-col items-center ">
          <p className="text-5xl font-extrabold mb-6">
            Products & Components
          </p>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Explore our diverse range of products including bin frames, CRBs, and rake arms, designed for industrial-grade performance and reliability.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      {/* Products Grid */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <motion.div
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"   // ⬅ Increased gap
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2 },
        },
      }}
    >

      {/* Card */}
      {[
        {
          img: coolWashing,
          alt: "Coal Washing Jig Mining Equipment",
          title: "Coal Washing Jig – Mining Equipment",
          desc:
            "High-efficiency coal washing jig engineered for mineral processing plants, improving coal quality through precise gravity separation and reduced ash content.",
        },
        {
          img: distributionPiping,
          alt: "Distribution Piping for Hydro Power Project",
          title: "Distribution Piping – Hydro Power Project",
          desc:
            "Precision-fabricated distribution piping systems designed to handle high-pressure water flow in hydroelectric power projects.",
        },
        {
          img: binFrame,
          alt: "Bin Frame 4x6 for Batching Plant",
          title: "Bin Frame – 4×6 – Batching Plant",
          desc:
            "Heavy-duty structural bin frame manufactured for concrete batching plants, ensuring superior load-bearing strength and dimensional accuracy.",
        },
        {
          img: binFramesBatching,
          alt: "Bin Frames for Concrete Batching Plant",
          title: "Bin Frames – Concrete Batching Plant",
          desc:
            "Industrial-grade bin frames fabricated for aggregate storage in batching plants, offering long service life and high structural stability.",
        },
        {
          img: aggregatesCrusher,
          alt: "Aggregates Stone Crusher Equipment",
          title: "Aggregates & Stone Crusher Components",
          desc:
            "Robust fabricated components for stone crushers and aggregate processing plants, designed for continuous operation in harsh mining environments.",
        },
        {
          img: rakeMechanism,
          alt: "Rake Mechanism for Mining Thickener",
          title: "Rake Mechanism – Thickener Equipment",
          desc:
            "Precision-engineered rake mechanisms used in mining thickeners, ensuring efficient sludge movement and sediment discharge.",
        },
        {
          img: hydroDraftTube,
          alt: "Draft Tube for Hydro Power Project",
          title: "Draft Tube – Hydro Power Project",
          desc:
            "Custom-fabricated draft tubes engineered for hydroelectric plants to optimize water discharge and turbine efficiency.",
        },
        {
          img: feedBox,
          alt: "Feed Box for Mining Feed Well",
          title: "Feed Box – Mining Feed Well",
          desc:
            "Heavy-duty feed boxes designed for uniform slurry distribution in mining feed wells and thickener systems.",
        },
        {
          img: thickenerFeedWell,
          alt: "Iron Ore Thickener Feed Well",
          title: "Thickener Feed Well – Iron Ore Mining",
          desc:
            "Engineered feed wells for iron ore thickeners, enabling controlled slurry entry and enhanced settling performance.",
        },
        {
          img: thickenerBridge,
          alt: "Bridge for Mining Thickener",
          title: "Bridge Structure – Thickener",
          desc:
            "Structural steel bridges manufactured for mining thickeners, providing stable support for drive mechanisms and maintenance access.",
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
        >
          {/* ⬆ Bigger images (70% of card height) */}
          <div className="h-72"> 
            <img
              src={item.img}
              alt={item.alt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* ⬇ Content (30% of card height) */}
          <div className="p-6">
            <p className="text-2xl font-bold mb-3 text-gray-900">
              {item.title}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>


      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 flex flex-col items-center ">
            <p className="text-4xl font-extrabold text-black mb-6">Why Choose Our Products?</p>
            <p className="text-xl !text-gray-800 max-w-3xl mx-auto">
              Every product is crafted with exceptional precision, premium materials, and quality assurance to ensure long-lasting industrial performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 text-blue-900 lg:grid-cols-4 gap-8 ">
            {[
              {
                icon: FaMedal,
                title: "Premium Quality",
                desc: "Made from high-grade materials with strict quality control for durability and reliability.",
                color: "text-blue-600",
              },
              {
                icon: FaCogs,
                title: "Precision Engineering",
                desc: "CNC machined with extremely fine tolerances up to ±0.001 inches for perfect fit and finish.",
                color: "text-green-600",
              },
              {
                icon: FaShippingFast,
                title: "Fast Delivery",
                desc: "Swift production and nationwide delivery ensuring your projects stay on schedule.",
                color: "text-amber-600",
              },
              {
                icon: FaTools,
                title: "Custom Solutions",
                desc: "Tailored fabrication services designed to match your unique industrial requirements.",
                color: "text-purple-600",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="text-center p-6 rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${feature.color} bg-gray-100`}
                >
                  <feature.icon className="text-2xl" />
                </div>
                <p className="text-xl font-bold mb-2">{feature.title}</p>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <div className="text-center mb-16">
            <p className="text-3xl font-extrabold mb-6 text-black">
              Technical Specifications
            </p>
            <p className="text-xl !text-gray-600 max-w-3xl mx-auto">
              Our industrial products are manufactured to meet stringent dimensional, material, and performance standards for maximum efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-r from-gray-800 to-gray-900 text-white text-center">
        <div className="absolute inset-0 bg-[url('/assets/blueprint.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative flex flex-col items-center text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Need Fabrication Solution?
          </h2>
          <p className="text-xl mb-8 max-w-2xl text-center py-4">
            Can’t find what you’re looking for? Our engineering experts design and manufacture custom-built components for all industrial needs.
          </p>
          <div className="flex gap-6 justify-center mt-6">
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-gray-900"
            >
              <i className="fas fa-envelope mr-2"></i>
              Request Quote
            </a>
            <a
              href="tel:+1-555-123-4567"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-gray-900"
            >
              <i className="fas fa-phone mr-2"></i>
              Call Engineering
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Products;
