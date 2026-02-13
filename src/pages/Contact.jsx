import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to an API
    console.log('Form submitted:', formData);
    // Using a simple alert, as per best practice.
    alert('Thank you for your message! We will get back to you shortly.');
    setFormData({ name: '', email: '', message: '' }); // Clear the form
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 flex flex-col items-center justify-center text-white text-center px-6 overflow-hidden bg-[#393185]">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-white blur-3xl"></div>
          <div className="absolute top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-white blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm font-semibold tracking-wide text-blue-100 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-300 mr-2"></span>
            Get in Touch
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Let's Build Something Great
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed font-light">
            Have a project in mind? We'd love to discuss how our manufacturing expertise can help bring your vision to life.
          </p>
        </div>
      </section>



      {/* Main Content */}
      <section className="py-20 -mt-24 relative z-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-0 shadow-2xl shadow-slate-200 rounded-3xl overflow-hidden bg-white ring-1 ring-slate-100">

            {/* Contact Form Section */}
            <div className="p-8 md:p-14 lg:p-16 bg-white relative">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Send Us a Message</h2>
                <p className="text-slate-500 text-lg leading-relaxed">Fill out the form below and our team will get back to you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 transition-all duration-200 outline-none font-medium placeholder-slate-400 text-slate-900"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 transition-all duration-200 outline-none font-medium placeholder-slate-400 text-slate-900"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-700 ml-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell us about your project requirements..."
                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 transition-all duration-200 outline-none font-medium placeholder-slate-400 text-slate-900 resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2.5 text-lg group"
                >
                  <span>Send Message</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Sidebar / Info Section */}
            <div className="bg-slate-50 p-8 md:p-14 lg:p-16 border-t lg:border-t-0 lg:border-l border-slate-200 flex flex-col h-full">
              <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
                Contact Information
              </h3>

              <div className="space-y-6 mb-10 flex-grow">
                {/* Map Preview */}
                <div className="rounded-2xl overflow-hidden shadow-md ring-1 ring-slate-200 bg-white relative group h-80">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62031.02425350812!2d77.46725597689199!3d13.661472150414799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1bdead0a6c35f%3A0xeef9cbfbd819da4d!2sA%20R%20INDUSTRIES!5e0!3m2!1sen!2sin!4v1770958177175!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full grayscale-0"></iframe>
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none rounded-2xl"></div>
                </div>

                <div className="grid gap-4">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/+919611103554"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-5 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-green-500 hover:scale-[1.01] transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300 shrink-0">
                      {/* Official-style WhatsApp logo */}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6">
                        <path fill="#25D366" d="M16 2.6A13.4 13.4 0 0 0 4.6 22.2L3 29l7-1.8A13.4 13.4 0 1 0 16 2.6z" className="group-hover:fill-white transition-colors" />
                        <path fill="#FFF" d="M23.2 19.3c-.4-.2-2.4-1.2-2.8-1.3-.4-.2-.7-.2-1 .2-.3.4-1.1 1.3-1.3 1.5-.2.2-.5.3-.9.1-.4-.2-1.6-.6-3.1-1.9-1.1-1-1.9-2.3-2.1-2.7-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.2 0-.5 0-.7 0-.2-1-.7-1.4-1-.4-.3-.7-.2-1 0-.3.2-1 .9-1 2.1s1 2.3 1.1 2.5c.1.2 2 3.2 4.9 4.5.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.5-.6 1.7-1.1.2-.5.2-1 .1-1.1-.1-.1-.4-.2-.8-.4z" className="group-hover:fill-green-500 transition-colors" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">WhatsApp</p>
                      <p className="text-base font-bold text-slate-900 group-hover:text-green-600 transition-colors font-mono">+91-9611103554</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:arindustries2153@gmail.com"
                    className="flex items-center gap-5 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-500 hover:scale-[1.01] transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300 shrink-0">
                      {/* Modern mail icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v.4l-10 6.25L2 5.4V5zm0 2.6l9.4 5.9a1 1 0 0 0 1.2 0L22 7.6V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7.6z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">Email</p>
                      <p className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">arindustries2153@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="text-center mt-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm text-sm font-medium text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
