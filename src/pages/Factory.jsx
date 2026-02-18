import { useEffect, useState } from "react";
import { FaAward, FaCheckCircle, FaClock, FaCogs, FaIndustry, FaUsers } from "react-icons/fa";
import axiosInstance from "../axios";
import EquipmentsSection from "../components/EquipmentsSection";

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
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="relative py-24 md:py-32 flex flex-col items-center justify-center text-white text-center px-6 overflow-hidden bg-[#393185]">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-white blur-3xl"></div>
          <div className="absolute top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-white blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-semibold tracking-wider mb-6">
            WORLD-CLASS INFRASTRUCTURE
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Factory & Capabilities
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Our state-of-the-art manufacturing facility spans 46,500 square feet
            and houses cutting-edge equipment operated by skilled professionals.
          </p>
        </div>
      </section>

      {/* Factory Overview Stats */}
      <section id="overview" className="relative z-20 -mt-10 px-4 mb-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "46.5K", label: "Sq Ft Facility", icon: FaIndustry, color: "text-blue-600", bg: "bg-blue-50" },
              { value: "100+", label: "Skilled Workers", icon: FaUsers, color: "text-green-600", bg: "bg-green-50" },
              { value: "24/7", label: "Operations", icon: FaClock, color: "text-amber-600", bg: "bg-amber-50" },
              { value: "ISO", label: "Certified", icon: FaAward, color: "text-purple-600", bg: "bg-purple-50" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center transform hover:-translate-y-1 transition-transform duration-300">
                <div className={`w-14 h-14 ${item.bg} rounded-full flex items-center justify-center mb-4`}>
                  <item.icon className={`text-2xl ${item.color}`} />
                </div>
                <div className={`text-4xl font-extrabold mb-2 ${item.color}`}>
                  {item.value}
                </div>
                <div className="text-gray-500 font-medium uppercase tracking-wide text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section id="equipment">      <EquipmentsSection />
      </section>
      {/* ================= MANUFACTURING PROCESSES ================= */}
      <section id="processes" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-[#393185] font-bold tracking-wider uppercase text-sm mb-3 block">From Start to Finish</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Manufacturing Processes
            </h2>
            <div className="w-24 h-1 bg-[#393185] mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From raw materials to finished products, our comprehensive
              manufacturing processes ensure quality at every step.
            </p>
          </div>

          {loadingProcesses ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#393185]"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {processes.map((process) => (
                <div
                  key={process.id}
                  className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                >
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#393185] transition-colors mb-6">{process.name}</h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {process.description}
                  </p>

                  <ul className="space-y-3">
                    {process.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ================= PRODUCTION CAPABILITIES (STATIC FOR NOW) ================= */}
      <section id="capabilities" className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                Production Capabilities
              </h2>
              <p className="text-xl text-gray-600">
                Our facility is equipped to handle projects of all sizes, from prototype development to full-scale production runs.
              </p>
            </div>
            <div className="hidden md:block"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Dimensional Capabilities */}
            <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                  <FaCogs className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Dimensional Capabilities
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">Maximum Length</div>
                  <div className="text-xl font-bold text-gray-900">100 meters</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">Maximum Width</div>
                  <div className="text-xl font-bold text-gray-900">40 meters</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">Maximum Thickness</div>
                  <div className="text-xl font-bold text-gray-900">6 inch</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">Weight Capacity</div>
                  <div className="text-xl font-bold text-gray-900">350 tons</div>
                </div>
              </div>
            </div>

            {/* Production Metrics */}
            <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mr-4">
                  <FaAward className="text-2xl text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Production Metrics
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">Daily Capacity</div>
                  <div className="text-xl font-bold text-gray-900">10 tons</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">Lead Time</div>
                  <div className="text-xl font-bold text-gray-900">2–4 weeks</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">Rush Orders</div>
                  <div className="text-xl font-bold text-gray-900">Contact Us</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">Quality Rate</div>
                  <div className="text-xl font-bold text-green-600">Exceeds Expectations</div>
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
