import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] overflow-hidden flex flex-col group mx-6 my-10 aspect-square"
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden flex-1">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Category Badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white shadow-md ${
          product.category === 'storage' ? 'bg-blue-500' :
          product.category === 'mounting' ? 'bg-green-500' :
          product.category === 'equipment' ? 'bg-amber-500' :
          'bg-purple-500'
        }`}>
          {product.category}
        </div>
      </div>

      {/* Product Content */}
      <div className="p-4 text-center">
        <p className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors duration-300">
          {product.name}
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          {product.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
