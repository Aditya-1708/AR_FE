import React, { useState } from 'react';

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
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section for Contact Page */}
      <section className="relative py-32 flex flex-col items-center justify-center bg-gradient-to-r from-teal-900 to-slate-800 text-white text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight py-8">
            Get in Touch
          </p>
          <p className="text-lg text-gray-200 leading-relaxed px-10 ">
            We're here to help you with your industrial fabrication needs.
          </p>
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="p-8 rounded-xl shadow-lg bg-gray-50">
              <h2 className="text-3xl font-bold !text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Details & Map */}
            <div className="flex flex-col gap-8">
              {/* Google Maps Link */}
              <div className="p-8 rounded-xl shadow-lg bg-gray-50">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Find Us</h2>
                <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-md mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.511905330366!2d144.9630573153245!3d-37.81729017975143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b5d448c40b%3A0x5045675218d2d6c6!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1628178888000!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Our Location on Google Maps"
                  ></iframe>
                </div>
                <a
                  href="https://goo.gl/maps/YourLocation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-700 font-semibold flex items-center justify-center transition duration-300 mt-4"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="mr-2 h-4 w-4 fill-current">
                    <path d="M168.3 499.24L113.8 322.95C48.64 242.42 0 162.77 0 119.53C0 61.16 43.15 16.51 92.5 16.51C141.85 16.51 185 61.16 185 119.53C185 162.77 136.36 242.42 71.2 322.95L168.3 499.24zM168.3 499.24C198.8 443.9 224.2 384.8 243.6 322.95C308.8 242.42 357.4 162.77 357.4 119.53C357.4 61.16 314.25 16.51 264.9 16.51C215.55 16.51 172.4 61.16 172.4 119.53C172.4 162.77 221.04 242.42 286.2 322.95L168.3 499.24z"/>
                  </svg>
                  Open in Google Maps
                </a>
              </div>

              {/* Quick Contact Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://wa.me/15551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600  text-white font-bold py-4 px-6 rounded-lg text-center flex items-center justify-center transition duration-300 shadow-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="text-xl mr-3 h-4 w-4 fill-current">
                    <path d="M380.9 97.4C339.6 57.3 286.9 33 229.9 33c-109.1 0-197.9 88.8-197.9 198 0 49.3 18.2 95 49.6 129.4l-36.9 135.1 138.8-35.9c32.7 17.8 69.3 27 107.6 27h.1c109 0 197.8-88.8 197.8-198 .1-52.2-20.7-100.8-56.9-137.9zM229.9 450.4c-35.9 0-70.2-10.8-99.3-31.4l-7.1-5.6-73.6 19.1 19.3-70.9-4.7-7.4c-33.8-54.8-51.5-117-51.5-181.7 0-99.7 81.3-181 181.6-181 48.6 0 94.3 19.3 128.5 53.6s53.6 79.9 53.6 128.5c0 100-81.3 181.3-181.3 181.3zm139-166c-4.2-2.1-24.9-12.4-28.7-13.8-3.8-1.5-6.6-2.2-9.4 2.2-2.8 4.5-10.9 13.8-13.4 16.7-2.5 2.9-5 3.2-9.2 1-4.2-2.2-17.7-6.5-33.7-20.8-12.6-11.4-21.2-25.5-23.8-29.9-2.6-4.4-2.8-4.2-2.8-5.9 0-1.7 1.4-3.3 4.2-6.1 2.8-2.8 6.3-7.2 9.1-10.8 2.8-3.6 3.7-6.1 4.7-10.1 1-4.1.5-7.6-.2-10.6-1.5-5.9-6.3-14.8-8.8-19.1-2.5-4.4-2.8-3.7-4.7-3.7-1.9 0-4.1-.2-6.3-.2-1.9 0-5.1.7-7.8 3.5-2.7 2.8-10.4 10.1-12.7 12.1-2.3 2.1-4.4 2.3-8.3 1-3.9-1.2-16.5-6.1-31.5-19.4-24.3-21.8-40.6-48.4-45.3-56.4-4.8-8-5.8-9.8-5.8-10.4 0-.6 1.4-1.2 3.6-2.9 2-1.8 4.2-4.6 6.3-7.1 2.1-2.5 2.8-4.2 4.2-7.1 1.4-2.9 1.4-5.4.9-7.1-.5-1.7-1.9-6.5-4-9.1-2.1-2.6-4.6-4.4-6.3-4.6-1.9-.2-4.1-.2-6.3-.2-.4 0-.9 0-1.4 0-1.7 0-4.4.6-6.7 3.3-2.3 2.8-8.7 8.5-8.7 20.8 0 12.3 8.9 24.1 10.1 25.7 1.2 1.7 17.5 26.8 25.3 40.9 7.9 14.2 15 21.3 25.3 26.6 9.2 4.8 17.2 7.7 29.8 11.2 10.4 2.9 19.9 2.5 27.5 1.5 8.1-1.1 24.8-10.1 28.3-15.5 3.5-5.4 3.5-10 2.5-12.1-1.1-2.1-4.1-3.3-8.7-5.5z"/>
                  </svg>
                  WhatsApp Us
                </a>
                <a
                  href="mailto:contact@industrial.com"
                  className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-6 rounded-lg text-center flex items-center justify-center transition duration-300 shadow-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="text-xl mr-3 h-4 w-4 fill-current">
                    <path d="M490 65c-26-17-57-27-89-27H111c-32 0-63 10-89 27-26 17-41 39-41 62v288c0 23 15 45 41 62 26 17 57 27 89 27h290c32 0 63-10 89-27 26-17 41-39 41-62V127c0-23-15-45-41-62zm-28 32c12 9 20 21 20 35v273c0 14-8 26-20 35H111c-12-9-20-21-20-35V132c0-14 8-26 20-35h290zm-177 151l116 80 116-80V182l-116 80L135 182v66z"/>
                  </svg>
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
