import { motion } from "framer-motion";
import { FaAward, FaCheckCircle, FaClipboardCheck, FaDownload, FaGlobe } from "react-icons/fa";

const Certifications = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* ================= HERO ================= */}
      <section className="relative py-24 md:py-32 flex flex-col items-center justify-center text-white text-center px-6 overflow-hidden bg-[#393185]">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
            <div className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-white blur-3xl"></div>
            <div className="absolute top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-white blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-semibold tracking-wider mb-6">
              QUALITY ASSURANCE
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Accreditations & Standards
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Our certifications reflect our unwavering commitment to quality, safety, and
            compliance with rigorous international standards.
          </p>
        </div>
      </section>

      {/* ================= CERTIFICATION DETAILS ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
            
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
            >
                <div className="grid lg:grid-cols-2">
                    {/* Content Side */}
                    <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#393185]">
                                <FaAward className="text-3xl" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 leading-tight">ISO 9001:2015 Licensed</h2>
                                <p className="text-blue-600 font-medium">International Standard for Quality</p>
                            </div>
                        </div>

                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            We are proud to be ISO 9001:2015 certified, enforcing a robust Quality Management System (QMS) that ensures every product meets global specifications. This certification validates our dedication to:
                        </p>

                        <div className="space-y-4">
                            {[
                                { icon: FaClipboardCheck, text: "Standardized operational processes" },
                                { icon: FaCheckCircle, text: "Consistent product quality & safety" },
                                { icon: FaGlobe, text: "Regulatory compliance & risk management" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/50 transition-colors">
                                    <item.icon className="text-[#393185] text-xl mr-4 flex-shrink-0" />
                                    <span className="text-gray-800 font-medium">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8">
                            <a 
                                href="/ISO.jpeg" 
                                download="ISO_9001_2015_Certificate.jpeg"
                                className="inline-flex items-center px-6 py-3 bg-[#393185] text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/20 hover:shadow-xl hover:-translate-y-1 transform duration-200"
                            >
                                <FaDownload className="mr-2" />
                                Download Certificate
                            </a>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="relative bg-[#393185]/5 flex items-center justify-center p-12 lg:p-20">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="relative z-10 bg-white p-6 rounded-2xl shadow-2xl">
                             <img
                                src="/ISO.jpeg"
                                alt="ISO Certification Document"
                                className="w-full max-w-sm object-contain rounded-lg border border-gray-100"
                            />
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#393185] rounded-full flex items-center justify-center text-white shadow-lg">
                                <span className="font-bold text-center text-xs uppercase tracking-widest px-2">Certified Since 2023</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

        </div>
      </section>

       {/* ================= QUALITY POLICY CTA ================= */}
       <section className="py-20 bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto px-4 text-center">
                 <h3 className="text-2xl font-bold text-gray-900 mb-4">Committed to Excellence</h3>
                 <div className="w-16 h-1 bg-[#393185] mx-auto rounded-full mb-6"></div>
                 <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                     Our quality policy acts as a compass for our improvement, guiding us to deliver superior value to our stakeholders through continuous innovation.
                 </p>
            </div>
       </section>

    </div>
  );
};

export default Certifications;
