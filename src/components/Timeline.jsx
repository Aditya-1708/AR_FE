import React from "react";

const Timeline = () => {
  const timelineData = [
    {
      year: "Mar 2023",
      title: "Company Founded",
      description:
        "Officially founded on 29th March 2023, marking the beginning of our manufacturing journey.",
      image: "AR logo.png",
      side: "left",
    },
    {
      year: "Apr 2023",
      title: "First Major Contract – DYU Uppahar",
      description:
        "Secured our first major contract with DYU Uppahar, establishing our presence in the industry.",
      image: "DYU.webp",
      side: "right",
    },
    {
      year: "Apr 2023",
      title: "Hydro Power Projects Initiated",
      description:
        "Entered the hydro power sector with our first set of structural and fabrication projects.",
      image: "Hydro.webp",
      side: "left",
    },
    {
      year: "Oct 2023",
      title: "ISO Certification",
      description:
        "Achieved ISO certification, reinforcing our commitment to quality and process standards.",
      image: "ISO.png",
      side: "right",
    },
    {
      year: "Jun 2024",
      title: "IMT Mineral Handling Equipment",
      description:
        "Started fabrication of mineral handling equipment under the IMT order.",
      image: "imt.jpg",
      side: "left",
    },
    {
      year: "Oct 2025",
      title: "Port Structure – TKL",
      description:
        "Began large-scale port structural fabrication for the TKL project.",
      image:
        "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400&h=300&fit=crop",
      side: "right",
    },
    {
      year: "2025",
      title: "Major Project Milestones",
      description:
        "Successfully completed 7 major projects and delivered over 100 purchase orders.",
      image: "growth.webp",
      side: "left",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-3xl font-bold mb-4 !text-blue-900 py-2">
            Our Journey Through Time
          </p>
          <p className="text-lg md:text-xl text-black leading-relaxed max-w-3xl mx-auto">
            From humble beginnings to industry leadership - discover the
            milestones that shaped our company.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Vertical Line (Desktop Only) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-700 to-amber-500 rounded-full"></div>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {timelineData.map((item, index) => {
              const isLeft = item.side === "left";

              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center justify-between w-full relative ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Text Content */}
                  <div
                    className={`w-full md:w-5/12 mb-6 md:mb-0 relative z-10 ${
                      isLeft
                        ? "md:text-right md:pr-10"
                        : "md:text-left md:pl-10"
                    }`}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">
                      <div className="text-2xl font-bold text-blue-800 mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold !text-gray-700 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-800 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot (Desktop Only) */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-6 h-6 bg-white border-4 border-blue-600 rounded-full shadow-lg flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                  </div>

                  {/* Image Content */}
                  <div
                    className={`w-full md:w-5/12 ${
                      isLeft ? "md:pl-10" : "md:pr-10"
                    }`}
                  >
<div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-48 md:h-56 bg-gray-100 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-w-full max-h-full object-contain transform hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
