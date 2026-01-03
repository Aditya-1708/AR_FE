import React from 'react';

const ClientGrid = () => {
  const clients = [
    {
      id: 1,
      name: "ConstructCorp",
      industry: "Construction",
      icon: "fas fa-building",
      description: "Leading construction company specializing in commercial and industrial projects."
    },
    {
      id: 2,
      name: "ManuTech Inc",
      industry: "Manufacturing",
      icon: "fas fa-industry",
      description: "Advanced manufacturing solutions for automotive and aerospace industries."
    },
    {
      id: 3,
      name: "Heavy Equipment Co",
      industry: "Equipment",
      icon: "fas fa-truck",
      description: "Heavy machinery and equipment manufacturing for construction and mining."
    },
    {
      id: 4,
      name: "Energy Solutions",
      industry: "Energy",
      icon: "fas fa-bolt",
      description: "Renewable energy infrastructure and power generation equipment."
    },
    {
      id: 5,
      name: "Marine Works",
      industry: "Marine",
      icon: "fas fa-ship",
      description: "Marine engineering and shipyard fabrication services."
    },
    {
      id: 6,
      name: "Transport Systems",
      industry: "Transportation",
      icon: "fas fa-train",
      description: "Railway and transportation infrastructure components."
    },
    {
      id: 7,
      name: "AgriTech Solutions",
      industry: "Agriculture",
      icon: "fas fa-tractor",
      description: "Agricultural equipment and farming technology solutions."
    },
    {
      id: 8,
      name: "Global Logistics",
      industry: "Logistics",
      icon: "fas fa-warehouse",
      description: "Warehouse and logistics equipment manufacturing."
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {clients.map((client) => (
        <div
          key={client.id}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
        >
          <div className="text-center">
            {/* Client Icon */}
            <div className="w-16 h-16 !bg-gray-100 group-hover:!bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
              <i className={`${client.icon} text-2xl !text-gray-600 group-hover:!text-blue-600 transition-colors duration-300`}></i>
            </div>
            
            {/* Client Name */}
            <h3 className="font-bold mb-2 text-sm !text-gray-900">{client.name}</h3>
            
            {/* Industry Badge */}
            <span className="inline-block px-3 py-1 !bg-gray-200 group-hover:!bg-blue-200 !text-gray-700 group-hover:!text-blue-800 text-xs rounded-full mb-3 transition-colors duration-300">
              {client.industry}
            </span>
            
            {/* Description */}
            <p className="text-xs leading-relaxed !text-gray-600">
              {client.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClientGrid;