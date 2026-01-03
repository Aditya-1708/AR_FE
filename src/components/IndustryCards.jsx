import React from "react";
import { motion } from "framer-motion";

// Logos
import ajaxLogo from "../assets/ajax.png";
import dyLogo from "../assets/dy.jpg";
import imtLogo from "../assets/imt.png";
import kscaLogo from "../assets/ksca.png";
import promanLogo from "../assets/proman.png";
import delkorLogo from "../assets/delkor.jpg";
import rollwellLogo from "../assets/rollwell.jpg";

const IndustryCards = () => {
  const clients = [
    {
      id: 1,
      name: "AJAX",
      logo: ajaxLogo,
      description:
        "AJAX Engineering pioneers world-class concrete equipment — from batching plants to mixers — powering India’s infrastructure revolution.",
    },
    {
      id: 2,
      name: "D.Y. Uppar & Sons",
      logo: dyLogo,
      description:
        "A leader in heavy industrial fabrication and precision engineering, delivering reliable solutions for large-scale projects across India.",
    },
    {
      id: 3,
      name: "IMT",
      logo: imtLogo,
      description:
        "IMT is renowned globally for its advanced drilling and piling rigs — engineered for strength, precision, and lasting performance.",
    },
    {
      id: 4,
      name: "KSCA",
      logo: kscaLogo,
      description:
        "The Karnataka State Cricket Association (KSCA) trusts our structural solutions for stadium excellence and architectural innovation.",
    },
    {
      id: 5,
      name: "PROMAN",
      logo: promanLogo,
      description:
        "PROMAN manufactures top-tier crushers and aggregate systems, driving productivity and efficiency across construction and mining sectors.",
    },
    {
      id: 6,
      name: "DELKOR",
      logo: delkorLogo,
      description:
        "DELKOR delivers advanced conveying and transport systems, streamlining material flow across industrial operations worldwide.",
    },
    {
      id: 7,
      name: "ROLLWELL",
      logo: rollwellLogo,
      description:
        "ROLLWELL designs next-generation conveyors and handling systems — setting benchmarks in durability and energy efficiency.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100"
      aria-label="Clients We Serve - Leading Industrial and Manufacturing Partners"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
        >
          Clients We Proudly Serve
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-14 max-w-3xl mx-auto text-base md:text-lg"
        >
          We partner with industry leaders across manufacturing, construction,
          and engineering sectors — delivering innovation, reliability, and
          excellence through every project.
        </motion.p> */}

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10 justify-center"
        >
          {clients.map((client) => (
            <motion.div
              key={client.id}
              variants={cardVariants}
              whileHover="hover"
              className="relative bg-white p-8 rounded-2xl shadow-md border border-gray-100 
                         hover:border-blue-200 transition-all duration-200 ease-out 
                         flex flex-col items-center overflow-hidden"
              style={{
                willChange: "transform",
                backfaceVisibility: "hidden",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Hover background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />

              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 220, damping: 15 }}
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="h-20 w-auto object-contain mb-5"
                  loading="lazy"
                />
              </motion.div>

              {/* Name */}
              <p className="text-xl font-bold text-black mb-2 tracking-tight">
                {client.name}
              </p>

              {/* Description */}
              <p className="text-sm text-gray-700 leading-relaxed text-center font-medium max-w-xs">
                {client.description}
              </p>

              {/* Underline animation */}
              <motion.div
                className="w-0 h-[2px] bg-blue-600 mt-5 rounded-full"
                whileInView={{ width: 60 }}
                transition={{ duration: 0.35 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryCards;
