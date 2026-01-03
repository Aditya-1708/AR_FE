import React from 'react';
// import EquipmentCard from '../components/EquipmentCard';
import EquipmentsSection from "../components/EquipmentsSection";

import FactoryGallery from '../components/FactoryGallery';
import { equipmentData } from '../assets/data/equipmentData';

const Factory = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
     {/* Header Section */}
<section className="py-20 bg-gradient-to-r from-teal-900 to-slate-800 text-white flex flex-col items-center justify-center text-center">
  <div className="container mx-auto px-4 flex flex-col items-center">
    <p className="text-5xl font-extrabold mb-6 py-7">Factory & Capabilities</p>
    <p className="text-xl max-w-3xl mx-https://github.com/Ananya-0109/AR_FEauto">
      Our state-of-the-art manufacturing facility spans 46,500 square feet and houses cutting-edge equipment operated by skilled professionals.
    </p>
  </div>
</section>


      {/* Factory Overview Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">46.5K</div>
              <div className="text-gray-600">Sq Ft Facility</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
              <div className="text-gray-600">Skilled Workers</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-amber-600 mb-2">24/7</div>
              <div className="text-gray-600">Operations</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">ISO</div>
              <div className="text-gray-600">Certified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Factory Gallery */}
    
      <EquipmentsSection />

      {/* Equipment Section */}
      {/* <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6 !text-blue-600">
        Our Manufacturing Equipment
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl text-center">
        Advanced machinery and precision tools that enable us to deliver
        exceptional quality and efficiency.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {equipmentData.map((equipment) => (
        <EquipmentCard key={equipment.id} equipment={equipment} />
      ))}
    </div>
  </div>
</section> */}

      {/* Manufacturing Processes */}
      <section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6 !text-blue-900">
        Manufacturing Processes
      </h2>
      <p className="entetext-xl text-gray-700 max-w-3xl text-cr">
        From raw materials to finished products, our comprehensive manufacturing
        processes ensure quality at every step.
      </p>
    </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-cut text-4xl text-blue-600 mb-3"></i>
                <p className="text-2xl font-bold text-black">Cutting & Shaping</p>
              </div>
              <p className="text-gray-600 mb-4">
                Plasma cutting, laser cutting, and CNC machining for accurate component sizing.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Plasma cutting up to 10mm thick</li>
                <li>• High-precision cutting with minimal material wastage</li>
                {/* <li>• CNC machining ±0.001" tolerance</li>
                <li>• Waterjet cutting for complex shapes</li> */}
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-fire text-4xl text-red-600 mb-3"></i>
               <p className="text-2xl font-bold text-black">Welding & Joining</p>
              </div>
              <p className="text-gray-600 mb-4">
                Expert welding services using MIG, TIG, and Arc welding processes with certified welders.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• AWS certified welders</li>
                {/* <li>• All position welding capabilities</li> */}
                <li>• Structural and pressure vessel welding</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-hammer text-4xl text-amber-600 mb-3"></i>
                <p className="text-2xl font-bold text-black">Forming & Bending</p>
              </div>
              <p className="text-gray-600 mb-4">
                Advanced press brakes and forming equipment for precise metal shaping and bending operations.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 1000-ton press brake capacity</li>
                <li>• 10m forming length</li>
            
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-spray-can text-4xl text-green-600 mb-3"></i>
                <p className="text-2xl font-bold text-black">Surface Finishing</p>
              </div>
              <p className="text-gray-600 mb-4">
                Professional spray painting and painting services in our automotive-grade paint booth.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Spray painting capabilities</li>
                <li>• Liquid paint applications</li>
                
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-tools text-4xl text-purple-600 mb-3"></i>
                <p className="text-2xl font-bold text-black">Assembly & Integration</p>
              </div>
              <p className="text-gray-600 mb-4">
                Complete assembly services with precision fitting and integration of complex components.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Mechanical assembly</li>
                <li>• Hardware installation</li>
                {/* <li>• Sub-assembly services</li> */}
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-search text-4xl text-indigo-600 mb-3"></i>
                <p className="text-2xl font-bold text-black">Quality Control</p>
              </div>
              <p className="text-gray-600 mb-4">
                Rigorous inspection and testing procedures to ensure every product meets specifications.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                
                <li>• Non-destructive testing</li>
                <li>• Material verification</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Overview */}
      {/* Capabilities Overview */}
<section className="py-20 bg-gray-100">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-6 !text-blue-900">
        Production Capabilities
      </h2>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto">
        Our facility is equipped to handle projects of all sizes, from prototype development to full-scale production runs.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Dimensional Capabilities */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <p className="text-2xl font-bold mb-4 text-blue-600 text-left">
          Dimensional Capabilities
        </p>

        <div className="grid grid-cols-2 gap-y-3 text-sm text-left">
          <div>
            <p className="font-semibold text-gray-800">Maximum Length</p>
            <p className="text-gray-700 text-justify">100 meters</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800">Maximum Width</p>
            <p className="text-gray-700 text-justify">40 meters</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800">Maximum Thickness</p>
            <p className="text-gray-700 text-justify">6 inch</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800">Weight Capacity</p>
            <p className="text-gray-700 text-justify">350 tons</p>
          </div>
        </div>
      </div>

      {/* Production Metrics */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <p className="text-2xl font-bold mb-4 text-blue-600 text-left">
          Production Metrics
        </p>

        <div className="grid grid-cols-2 gap-y-3 text-sm text-left">
          <div>
            <p className="font-semibold text-gray-800">Daily Capacity</p>
            <p className="text-gray-700 text-justify">10 tons </p>
          </div>
          <div>
            <p className="font-semibold text-gray-800">Lead Time</p>
            <p className="text-gray-700 text-justify">2-4 weeks typical</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800">Rush Orders</p>
            <p className="text-gray-700 text-justify">Contact Us</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800">Quality Rate</p>
            <p className="text-gray-700 text-justify">Exceeds your expectations</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      
    </div>
  );
};

export default Factory;