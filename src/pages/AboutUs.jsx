import React from "react";
import { motion } from "framer-motion";
import Timeline from "../components/Timeline";

const AboutUs = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="relative py-32 flex flex-col items-center justify-center bg-gradient-to-r from-teal-900 to-slate-800 text-white text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <motion.div
          className="relative z-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-6xl font-extrabold mb-4 tracking-tight py-5">
            About Us
          </p>
          <p className="text-lg text-gray-200 leading-relaxed px-10">
            With a team of skilled professionals, we have excelled in fabrication within a short span of time and established ourselves as specialists in custom fabrication components and tailored solutions.
          </p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section id="background" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop"
                alt="Factory Overview"
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
            <motion.div
              className="md:text-left text-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-4xl font-extrabold mb-6 text-blue-900">
                OUR STORY
              </p>

              <p className="text-xl text-gray-800 mb-4 text-justify leading-relaxed py-6">
                A R Industries is part of a company run by industrialist &
                entrepreneur Mr. Umesh Patil, with interests in construction and
                fabrication. Located in KIADB Industrial Area, Gauribidanur, it
                has proximity to many industries and construction equipment
                companies.
              </p>

              <p className="text-xl text-gray-800 mb-6 text-justify leading-relaxed">
                We operate state-of-the-art facilities with CNC plasma cutting
                machines, overhead cranes, automated welding stations, and
                advanced paint booths.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center mb-16 flex flex-col items-center">
          <h2 className="!text-4xl !font-bold mb-6 !text-blue-900">
            Our Vision & Mission
          </h2>
          <p className="text-xl text-black max-w-3xl text-center">
            Commited to quality, delivery and customer satisfaction.
          </p>
        </div>

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-6">
              <i className="fas fa-eye text-4xl text-blue-600 mb-4"></i>
              <p className="text-2xl font-bold text-blue-800">Our Vision</p>
            </div>
            <p className="text-lg text-gray-700 text-justify leading-relaxed">
              To be the premier choice for innovative metal fabrication
              solutions globally, setting industry standards for quality,
              reliability, and customer satisfaction.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-6">
              <i className="fas fa-bullseye text-4xl text-blue-600 mb-4"></i>
              <p className="text-2xl font-bold text-blue-800">Our Mission</p>
            </div>
            <p className="text-lg text-gray-700 text-justify leading-relaxed">
              Delivering exceptional quality products through advanced
              manufacturing techniques, continuous innovation, and unwavering
              commitment to customer satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Staffs & Authorities */}
      <section id="staffs-authorities" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center mb-16 flex flex-col items-center">
          <p className="text-4xl font-bold text-blue-900 mb-6">
            Staffs & Authorities
          </p>
         <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
  Our strength lies in a dedicated leadership team and skilled workforce
  driving excellence across all operations.
</p>


        </div>

        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            { name: "Mr. Umesh Patil", role: "Managing Director" },
            { name: "Production Head", role: "Manufacturing & Operations" },
            { name: "Quality Manager", role: "Quality Assurance" },
            { name: "Design Engineer", role: "Fabrication Design" },
            { name: "Site Supervisor", role: "Project Execution" },
            { name: "Skilled Workforce", role: "Fabrication & Assembly" },
          ].map((person, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                <i className="fas fa-user-tie text-3xl text-blue-700"></i>
              </div>
              <p className="text-xl font-bold text-blue-800">{person.name}</p>
              <p className="text-gray-600 mt-2">{person.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="py-20 bg-white">
        <Timeline />
      </section>
    </div>
  );
};

export default AboutUs;
