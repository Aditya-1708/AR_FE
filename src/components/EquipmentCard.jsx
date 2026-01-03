import React from 'react';

const EquipmentCard = ({ equipment }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 relative">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      {/* Card Content */}
      <div className="relative z-10 p-6">
        {/* Equipment Header */}
        <div className="text-center mb-6">
          <div className="relative inline-block">
            <div className="w-18 h-18 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
              <i className={`${equipment.icon} text-2xl text-white`}></i>
            </div>
            <div className="absolute -inset-2 bg-blue-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
            {equipment.name}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">{equipment.description}</p>
        </div>

        {/* Specifications */}
        <div className="bg-gray-50 rounded-xl p-4 mb-6 group-hover:bg-blue-50 transition-colors duration-300">
          <div className="space-y-3">
            {Object.entries(equipment.specifications).slice(0, 3).map(([key, value], index) => (
              <div key={key} className="flex justify-between items-center">
                <span className="text-gray-600 text-sm font-medium capitalize">
                  {key.replace(/([A-Z])/g, ' $1')}
                </span>
                <span className="text-gray-900 font-semibold text-sm bg-white px-3 py-1 rounded-full shadow-sm group-hover:bg-blue-100 transition-colors duration-300">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        {equipment.features && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
              <i className="fas fa-star text-yellow-500 mr-2"></i>
              Key Features
            </h4>
            <div className="space-y-2">
              {equipment.features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-start text-xs text-gray-600 group">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full mr-3 mt-1.5 flex-shrink-0 shadow-sm"></div>
                  <span className="leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Button */}
        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group-hover:shadow-blue-500/25">
          <i className="fas fa-info-circle mr-2 group-hover:animate-pulse"></i>
          Learn More
        </button>
      </div>

      {/* Status Indicator */}
      <div className="absolute top-4 right-4">
        <div className="w-3 h-3 bg-green-400 rounded-full shadow-sm animate-pulse"></div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );
};

export default EquipmentCard;
