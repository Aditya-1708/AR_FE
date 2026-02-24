import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axiosInstance from "../axios";
import Timeline from "../components/Timeline";

const AboutUs = () => {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await axiosInstance.get("/staff");
        setStaff(response.data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchStaff();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative py-24 md:py-32 flex flex-col items-center justify-center text-white text-center px-6 overflow-hidden bg-[#393185]">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-white blur-3xl"></div>
          <div className="absolute top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-white blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Optional Tagline (you can remove if not needed) */}
          <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-semibold tracking-wider mb-6">
            PRECISION MANUFACTURING
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Building the Future
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Specialists in custom fabrication components and tailored industrial
            solutions.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section id="story" className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-50 rounded-tl-3xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-50 rounded-br-3xl -z-10"></div>
              <img
                src="AboutUs.webp"
                alt="Factory Overview"
                className="rounded-2xl shadow-xl w-full object-cover h-[400px] md:h-[500px]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-[#393185] uppercase tracking-widest mb-2">
                Our Story
              </h2>
              <p className="text-4xl font-bold mb-8 text-gray-900 leading-tight">
                From Humble Beginnings to{" "}
                <span className="text-[#393185]">Industrial Excellence</span>
              </p>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-gray-900">A R Industries</strong> is
                  part of a visionary group led by industrialist Mr. Umesh
                  Patil. Strategically located in KIADB Industrial Area,
                  Gauribidanur, we sit at the heart of a thriving industrial
                  ecosystem, enabling rapid collaboration and logistics.
                </p>
                <p>
                  What started as a small fabrication unit has evolved into a
                  powerhouse of manufacturing. We now operate state-of-the-art
                  facilities featuring CNC plasma cutting machines, overhead
                  cranes, automated welding stations, and advanced paint
                  booths—delivering precision at scale.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section
        id="vision"
        className="py-24 bg-gray-50 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#393185 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        ></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Our Vision & Mission
            </h2>
            <p className="text-xl text-gray-600">
              Guided by purpose, driven by passion. We are committed to
              redefining quality and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <motion.div
              className="bg-white p-10 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-500 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-eye text-3xl text-blue-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the premier choice for innovative metal fabrication
                solutions globally, setting industry standards for quality,
                reliability, and engineering excellence.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-10 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border-t-4 border-[#393185] group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-bullseye text-3xl text-[#393185]"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Delivering exceptional quality products through advanced
                manufacturing techniques, continuous innovation, and an
                unwavering commitment to exceeding customer expectations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Staffs & Authorities */}
      <section id="team" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#393185] font-bold tracking-wider uppercase text-sm mb-3 block">
              Leadership
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <div className="w-24 h-1 bg-[#393185] mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our strength lies in a dedicated leadership team and skilled
              workforce driving excellence across all operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {staff.map((member, index) => (
              <motion.div
                key={member.id ?? index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Image Container */}
                <div className="h-80 overflow-hidden relative bg-gray-100">
                  <div className="absolute inset-0 bg-[#393185]/0 group-hover:bg-[#393185]/10 transition-colors z-10 duration-300"></div>
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${member.image}`}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-center relative z-20 bg-white">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#393185] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="bg-gray-50 border-t border-gray-200">
        <div>
          <Timeline />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
