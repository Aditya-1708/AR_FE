import React from 'react';

const ProductFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {categories.map((category) => (
        <button
          key={category.key}
          onClick={() => onCategoryChange(category.key)}
          className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
            selectedCategory === category.key
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          <span>{category.label}</span>
          <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
            selectedCategory === category.key
              ? 'bg-blue-500 text-white'
              : 'bg-gray-300 text-gray-600'
          }`}>
            {category.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default ProductFilter;