import React from 'react';

const GoogleMap = () => {
  return (
    <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
      <div className="h-96 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center relative">
        {/* Map Placeholder */}
        <div className="text-center text-gray-600">
          <i className="fas fa-map-marked-alt text-6xl mb-4"></i>
          <p className="text-xl font-semibold mb-2">Interactive Map</p>
          <p className="mb-4">123 Industrial Boulevard, Manufacturing City</p>
          <div className="space-y-2">
            <button 
              onClick={() => window.open('https://maps.google.com/?q=123+Industrial+Boulevard+Manufacturing+City', '_blank')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              <i className="fas fa-external-link-alt mr-2"></i>
              Open in Google Maps
            </button>
            <div className="text-sm text-gray-600">
              <p>Click to view detailed directions and street view</p>
            </div>
          </div>
        </div>

        {/* Map Controls Overlay */}
        <div className="absolute top-4 right-4 space-y-2">
          <button className="bg-white p-2 rounded shadow hover:bg-gray-50 transition duration-200">
            <i className="fas fa-plus text-gray-600"></i>
          </button>
          <button className="bg-white p-2 rounded shadow hover:bg-gray-50 transition duration-200">
            <i className="fas fa-minus text-gray-600"></i>
          </button>
        </div>

        {/* Location Pin */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full">
          <div className="relative">
            <i className="fas fa-map-pin text-4xl text-red-500 animate-bounce"></i>
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded shadow-lg text-sm font-semibold whitespace-nowrap">
              Industrial Fabrication Co.
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Information Bar */}
      <div className="bg-white p-4 border-t">
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center">
            <i className="fas fa-car text-blue-600 mr-2"></i>
            <span>Free parking available</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-wheelchair text-green-600 mr-2"></i>
            <span>Wheelchair accessible</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-clock text-amber-600 mr-2"></i>
            <span>Open Mon-Fri 8AM-6PM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;