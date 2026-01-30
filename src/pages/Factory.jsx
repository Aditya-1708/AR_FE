import React, { useEffect, useState } from "react";
import EquipmentsSection from "../components/EquipmentsSection";
import axiosInstance from "../axios";

const Factory = () => {
  const [processes, setProcesses] = useState([]);
  const [loadingProcesses, setLoadingProcesses] = useState(true);

  useEffect(() => {
    const fetchProcesses = async () => {
      try {
        const res = await axiosInstance.get("/processes");
        setProcesses(res.data);
      } catch (error) {
        console.error("Failed to fetch processes", error);
      } finally {
        setLoadingProcesses(false);
      }
    };

    fetchProcesses();
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-r from-teal-900 to-slate-800 text-white text-center">
        <div className="container mx-auto px-4">
          <p className="text-5xl font-extrabold mb-6">Factory & Capabilities</p>
          <p className="text-xl max-w-3xl mx-auto">
            Our state-of-the-art manufacturing facility spans 46,500 square feet
            and houses cutting-edge equipment operated by skilled professionals.
          </p>
        </div>
      </section>

      {/* Factory Overview Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              ["46.5K", "Sq Ft Facility", "text-blue-600"],
              ["100+", "Skilled Workers", "text-green-600"],
              ["24/7", "Operations", "text-amber-600"],
              ["ISO", "Certified", "text-purple-600"],
            ].map(([value, label, color], i) => (
              <div key={i} className="p-6">
                <div className={`text-4xl font-bold mb-2 ${color}`}>
                  {value}
                </div>
                <div className="text-gray-600">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <EquipmentsSection />

      {/* ================= MANUFACTURING PROCESSES ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-blue-900">
              Manufacturing Processes
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From raw materials to finished products, our comprehensive
              manufacturing processes ensure quality at every step.
            </p>
          </div>

          {loadingProcesses ? (
            <p className="text-center text-gray-500">
              Loading manufacturing processes...
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processes.map((process) => (
                <div
                  key={process.id}
                  className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition duration-300"
                >
                  <div className="text-center mb-4">
                    <i
                      className={`fas ${process.icon} text-4xl text-blue-600 mb-3`}
                    />
                    <p className="text-2xl font-bold text-black">
                      {process.name}
                    </p>
                  </div>

                  <p className="text-gray-600 mb-4">
                    {process.description}
                  </p>

                  <ul className="text-sm text-gray-600 space-y-1">
                    {process.highlights.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ================= PRODUCTION CAPABILITIES (STATIC FOR NOW) ================= */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-blue-900">
              Production Capabilities
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our facility is equipped to handle projects of all sizes, from
              prototype development to full-scale production runs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Dimensional Capabilities */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-2xl font-bold mb-4 text-blue-600">
                Dimensional Capabilities
              </p>
              <div className="grid grid-cols-2 gap-y-3 text-sm">
                <div><b>Maximum Length</b><p>100 meters</p></div>
                <div><b>Maximum Width</b><p>40 meters</p></div>
                <div><b>Maximum Thickness</b><p>6 inch</p></div>
                <div><b>Weight Capacity</b><p>350 tons</p></div>
              </div>
            </div>

            {/* Production Metrics */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-2xl font-bold mb-4 text-blue-600">
                Production Metrics
              </p>
              <div className="grid grid-cols-2 gap-y-3 text-sm">
                <div><b>Daily Capacity</b><p>10 tons</p></div>
                <div><b>Lead Time</b><p>2–4 weeks</p></div>
                <div><b>Rush Orders</b><p>Contact Us</p></div>
                <div><b>Quality Rate</b><p>Exceeds expectations</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Factory;
