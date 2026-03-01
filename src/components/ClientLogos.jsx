import { useEffect, useState } from "react";
import ajaxLogo from "../assets/ajax.png";
import dyLogo from "../assets/dy.jpg";
import imtLogo from "../assets/imt.png";

// Newly added logos
import bflLogo from "../assets/bfl.png";
import delkorLogo from "../assets/delkor.jpg";
import flsLogo from "../assets/fls.svg";
import kscaLogo from "../assets/ksca.png";
import newField from "../assets/newField.svg";
import promanLogo from "../assets/proman.png";
import rollwellLogo from "../assets/rollwell.jpg";
import tiklLogo from "../assets/tikl.png";

const ClientLogos = () => {
  const [isVisible, setIsVisible] = useState(true);

  // __define-ocg__
  const varOcg = [
    { name: "AJAX", image: ajaxLogo },
    { name: "D.Y. Uppar & Sons", image: dyLogo },
    { name: "IMT", image: imtLogo },
    { name: "KSCA", image: kscaLogo },
    { name: "PROMAN", image: promanLogo },
    { name: "DELKOR", image: delkorLogo },
    { name: "ROLLWELL", image: rollwellLogo },
    { name: "FLSmidth's", image: flsLogo },
    { name: "Newfield", image: newField },
    { name: "BFL", image: bflLogo },
    { name: "TKIL", image: tiklLogo },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => setIsVisible(true), 100);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center py-12">
          <h2 className="text-3xl font-extrabold !text-black mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto font-medium">
            We have built lasting partnerships with companies across diverse
            industries that trust us to deliver on-time and meet customer
            deadlines for their critical manufacturing needs.
          </p>
        </div>

        {/* Single Scrolling Logos Row */}
        <div className="relative overflow-hidden group">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          {/* Logos Row */}
          <div className="flex space-x-12 animate-marquee group-hover:[animation-play-state:paused]">
            {[...varOcg, ...varOcg].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white px-6 py-4 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 min-w-[180px]"
              >
                <div className="text-center">
                  <div className="w-28 h-20 flex items-center justify-center mx-auto mb-3">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="object-contain max-h-16 transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <p className="font-bold text-black text-sm mt-1">
                    {client.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Animation Styles */}
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              display: flex;
              width: max-content;
              animation: marquee 25s linear infinite;
            }
          `}</style>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-700 mb-2">15+</div>
            <div className="text-gray-800 font-semibold">Served Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-700 mb-2">200+</div>
            <div className="text-gray-800 font-semibold">Orders Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-700 mb-2">7</div>
            <div className="text-gray-800 font-semibold">Industries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-700 mb-2">100%</div>
            <div className="text-gray-800 font-semibold">Client Retention</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
