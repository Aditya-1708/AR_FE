
import cementImg from "../assets/industries/cement.jpg";
import constructionImg from "../assets/industries/construction.jpg";
import heavyImg from "../assets/industries/heavy.jpg";
import miningImg from "../assets/industries/mining.jpeg";
import portImg from "../assets/industries/port.jpg";
import powerImg from "../assets/industries/power.jpg";

const ClientGrid = () => {
  const industries = [
    {
      id: 1,
      name: "Construction & Infrastructure",
      image: constructionImg,
      description:
        "Structural fabrication and heavy components for commercial, industrial, and infrastructure projects.",
    },
    {
      id: 2,
      name: "Heavy Equipment",
      image: heavyImg,
      description:
        "Precision fabrication for construction machinery, mining equipment, and industrial vehicles.",
    },
    {
      id: 3,
      name: "Mining & Material Handling",
      image: miningImg,
      description:
        "Robust structural and conveying systems for mining, mineral processing, and bulk material handling.",
    },
    {
      id: 4,
      name: "Energy & Power",
      image: powerImg,
      description:
        "Fabricated components and structures for hydro, thermal, and renewable energy projects.",
    },
    {
      id: 5,
      name: "Cement & Process Plants",
      image: cementImg,
      description:
        "Heavy-duty fabrication for cement plants, kilns, conveyors, and process equipment.",
    },
    {
      id: 6,
      name: "Ports & Marine Structures",
      image: portImg,
      description:
        "Structural fabrication for port infrastructure, marine equipment, and coastal projects.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
            >
              {/* Industry Image */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#393185] mb-3 group-hover:text-blue-700 transition-colors">
                  {industry.name}
                </h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {industry.description}
                </p>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <span className="text-sm font-semibold text-[#393185] flex items-center gap-2 group-hover:gap-3 transition-all">
                    Explore Solutions 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientGrid;
