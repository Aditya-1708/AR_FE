import React, { useState, useEffect, useCallback } from 'react';

// --- MOCK DATA ---
const MOCKED_JOBS_DATA = [
  {
    id: 'sre001',
    title: 'Site Reliability Engineer (SRE)',
    department: 'Cloud Operations',
    location: 'Bengaluru, India',
    description: 'Design, implement, and maintain highly available and scalable systems. Focus on automation, monitoring, and incident response for production environments.',
    requirements: [
      '5+ years experience in a high-volume production environment.',
      'Expertise in Kubernetes, AWS/GCP, and CI/CD pipelines.',
      'Strong background in Python or Go.',
      'Experience with observability tools (Prometheus, Grafana, ELK).'
    ]
  },
  {
    id: 'pm002',
    title: 'Senior Product Manager',
    department: 'Digital Innovation',
    location: 'Remote (US/EU)',
    description: 'Lead the roadmap and strategy for our next-generation AI platform. Define user stories, collaborate with engineering, and drive business outcomes.',
    requirements: [
      '7+ years in product management, preferably in B2B SaaS or AI.',
      'Proven ability to translate technical concepts into market strategy.',
      'Excellent communication and stakeholder management skills.',
      'Bachelor’s degree in business, engineering, or a related field.'
    ]
  },
  {
    id: 'data003',
    title: 'Data Scientist - Generative AI',
    department: 'R&D Lab',
    location: 'San Francisco, USA',
    description: 'Develop and train cutting-edge generative models. Research new techniques in NLP and image generation to enhance our product suite.',
    requirements: [
      'PhD or Master’s in Computer Science, Statistics, or related quantitative field.',
      'Deep expertise in PyTorch/TensorFlow and transformer architectures.',
      'Published research or contributions to major open-source projects.',
      'Proficiency in MLOps and cloud computing environments.'
    ]
  },
  {
    id: 'design004',
    title: 'UX/UI Designer',
    department: 'Product Design',
    location: 'London, UK',
    description: 'Craft intuitive and beautiful interfaces for our web and mobile applications. Work closely with product managers and front-end developers.',
    requirements: [
      '3+ years of professional UX/UI design experience.',
      'Mastery of Figma or Sketch.',
      'Strong portfolio demonstrating design thinking and problem-solving.',
      'Experience with accessibility standards (WCAG).'
    ]
  }
];

// EXPANDED AND MORE INFORMATIVE CULTURE POINTS
const CULTURE_POINTS = [
  {
    icon: 'Sparkles',
    title: 'Innovation-Driven Environment',
    description: 'We dedicate 20% of engineering time to exploring new ideas and projects. Our culture encourages smart risk-taking, continuous experimentation, and embracing failure as a path to ground-breaking success.'
  },
  {
    icon: 'Briefcase',
    title: 'High-Impact Mission',
    description: 'Join critical projects that are shaping the future of global mobility and sustainable technology. Your contributions directly influence large-scale, real-world industrial transformation and innovation.'
  },
  {
    icon: 'BrainCircuit',
    title: 'Accelerated Professional Growth',
    description: 'We invest heavily in our people, providing an annual stipend for external courses, global conference attendance, and a structured mentorship program linking junior talent with senior leadership.'
  },
  {
    icon: 'Users',
    title: 'Inclusion & Global Collaboration',
    description: 'Work with diverse, cross-functional teams spanning multiple continents. We uphold an inclusive environment where unique perspectives drive better product outcomes and are celebrated daily.'
  },
  {
    icon: 'Trophy',
    title: 'Competitive Compensation & Rewards',
    description: 'Our performance-based rewards system includes top-tier salaries, comprehensive health coverage, generous paid time off, and substantial equity/stock options for high-impact contributors.'
  },
  {
    icon: 'HeartHandshake',
    title: 'Holistic Wellness & Support',
    description: 'Benefit from flexible work arrangements, mental health resources, and a robust physical wellness program. We prioritize the sustainable well-being of every employee, ensuring work-life harmony.'
  }
];

// --- INLINE ICON COMPONENTS (lucide-react equivalents) ---

const Briefcase = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2"/><path d="M14 2v4a2 2 0 0 1-2 2h-0a2 2 0 0 1-2-2V2"/></svg>
);

const BrainCircuit = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a2 2 0 1 0-.01-.001.001.001 0 0 0 .01.001Z"/><path d="M12 5a2 2 1 0 1 0 .01-.001.001.001 0 0 0-.01.001Z" fill="currentColor" opacity=".25"/><path d="M12 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"/><path d="M12 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z" fill="currentColor" opacity=".25"/><path d="M16 17H8"/><path d="M14 11h-4"/><path d="M18 14h-4"/><path d="M10 8H6"/><path d="M14 8h-4"/><path d="M18 8h-4"/></svg>
);

const Users = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);

const Trophy = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2"/><path d="M18 9v14"/><path d="M6 9v14"/><path d="M2 13h20"/><path d="M12 17H6"/><path d="M12 17h6"/></svg>
);

const ArrowRight = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);

const Sparkles = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v2"/><path d="M12 20v2"/><path d="M22 12h-2"/><path d="M4 12h-2"/><path d="m19.5 5.5-1.4 1.4"/><path d="m6.4 17.6-1.4 1.4"/><path d="m20 19.9-1.5-1.5"/><path d="m5.5 4.5 1.5 1.5"/><path d="M12 17l-3-3 3-3 3 3z"/></svg>
);

const HeartHandshake = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 14h6"/><path d="M16 18h-4"/></svg>
);


const getIcon = (name, props) => {
  switch (name) {
    case 'Briefcase': return <Briefcase {...props} />;
    case 'BrainCircuit': return <BrainCircuit {...props} />;
    case 'Users': return <Users {...props} />;
    case 'Trophy': return <Trophy {...props} />;
    case 'Sparkles': return <Sparkles {...props} />;
    case 'HeartHandshake': return <HeartHandshake {...props} />;
    default: return null;
  }
};

// --- MAIN APPLICATION COMPONENT ---
const App = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [applicationFormData, setApplicationFormData] = useState({
    name: '',
    email: '',
    phone: '',
    jobRole: MOCKED_JOBS_DATA[0].title, // Default to first job
    statement: '',
  });

  // Handle smooth scroll for internal links
  const handleSmoothScroll = useCallback((e, hash) => {
    e.preventDefault();
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // Update form data state
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setApplicationFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission (mock)
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissionStatus('loading');

    // Simulate API call delay
    setTimeout(() => {
      console.log('Application Submitted:', applicationFormData);
      setSubmissionStatus('success');
      setApplicationFormData({
        name: '',
        email: '',
        phone: '',
        jobRole: MOCKED_JOBS_DATA[0].title,
        statement: '',
      });
      // Scroll to the application form section to show the success message
      const element = document.getElementById('application-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 1500);
  };

  // Open the job details modal and set the selected job
  const openJobModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  // Close the modal and reset states
  const closeJobModal = () => {
    setSelectedJob(null);
    setIsModalOpen(false);
  };

  // Effect to handle initial scroll if a job is pre-selected or if needed (mocking hash)
  useEffect(() => {
    // If you wanted to dynamically select a job based on an external state
    // For this single file, we skip the location hash logic as router is not available.
  }, []);

  return (
    <div className="min-h-screen pt-0 bg-gray-50 flex flex-col font-sans">
      
      {/* Header Section: Catchy and Dynamic */}
<section className="relative py-40 flex flex-col items-center justify-center bg-gradient-to-r from-teal-900 to-slate-800 text-white text-center px-6 overflow-hidden">
  {/* Subtle dark overlay */}
  <div className="absolute inset-0 bg-black/20"></div>

  <div className="container mx-auto px-4 relative z-10">
    {/* <p className="text-sm font-semibold tracking-widest uppercase text-teal-400 mb-4 animate-fadeInUp text-center">
      The Future of Mobility & Tech
    </p> */}

    {/* FIXED FONT SIZE BELOW */}
    <h1
  className="font-black tracking-tight mb-8 leading-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-400 to-emerald-500 drop-shadow-lg"
  style={{ fontSize: '3rem', lineHeight: '1.1', fontWeight: 900 }}
>
  Careers at <span className="text-cyan-300 drop-shadow-md">AR Industries</span>
</h1>

    <div className="flex justify-center">
      <p className="text-lg text-gray-200 leading-relaxed px-10 text-justify">
        We are building a legacy of innovation. Join our team of dedicated
        problem-solvers and pioneers, where your work will have a tangible impact
        on the world.
      </p>
    </div>

    <div className="flex justify-center">
      <button
        onClick={(e) => handleSmoothScroll(e, '#open-positions')}
        className="inline-flex items-center bg-gradient-to-r from-slate-600 to-teal-400 text-white px-8 py-3 rounded-full font-bold text-lg shadow-xl 
                   hover:from-teal-400 hover:to-emerald-300 hover:text-gray-50 transition-all transform hover:scale-105 duration-300 group"
      >
        Explore Openings
        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  </div>
</section>

      {/* --- Work Culture Section --- (New and Dynamic) */}
      <section id="work-culture" className="py-24 bg-white">
        <div className="container mx-auto px-4">
         <div className="text-center mb-16">
  <p className="text-5xl font-extrabold text-gray-900 mb-4">
    Our <span className="text-blue-900">Culture</span>. Your Growth.
  </p>

  <div className="flex justify-center">
    <p className="text-xl text-gray-800 max-w-3xl text-center">
      We foster an environment of trust, empowerment, and bold experimentation, believing that the best work happens when people feel valued and challenged.
    </p>
  </div>
</div>

          {/* Adjusted grid layout for 6 detailed points */}
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {CULTURE_POINTS.map((point, index) => (
    <div
      key={index}
      className="bg-white p-8 rounded-xl shadow-lg transition duration-300 transform hover:scale-105 cursor-pointer group"
    >
      <div className="text-center">
        {/* Icon Circle */}
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-blue-700">
          {getIcon(point.icon, {
            className:
              "w-8 h-8 text-teal-800 transition-all duration-300 group-hover:text-white",
          })}
        </div>

        {/* Title */}
        <p className="text-xl font-bold mb-4 text-gray-800 transition-all duration-300 group-hover:text-blue-900">
          {point.title}
        </p>

        {/* Description */}
        <p className="text-gray-700 text-base leading-relaxed">
          {point.description}
        </p>
      </div>
    </div>
  ))}
</div>

        </div>
      </section>
      {/* --- END Work Culture Section --- */}

      {/* Job Listings */}
      <section id="open-positions" className="py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-4xl font-extrabold text-black mb-3">Current Open Positions</p>
            <p className="text-lg text-gray-700">
              Find the role that matches your passion and skills. Click a card to view details.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {MOCKED_JOBS_DATA.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-xl hover:border-teal-500 transition cursor-pointer flex flex-col justify-between h-full"
                onClick={() => openJobModal(job)}
              >
                <div>
                  <p className="text-sm font-semibold uppercase text-blue-700 mb-1">{job.department}</p>
                  <p className="text-2xl font-bold text-gray-800 mb-2 leading-snug">{job.title}</p>
                </div>
                <div>
                    <div className="border-t border-gray-100 pt-4 mt-4 text-sm text-gray-500">
                      <p className="mb-1">📍 {job.location}</p>
                      <p className="font-medium text-indigo-600 mt-2 flex items-center">
                          View Details 
                          <ArrowRight className="w-4 h-4 ml-1"/>
                      </p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      {isModalOpen && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 transition-opacity duration-300" aria-modal="true" role="dialog">
          <div className="bg-white rounded-xl shadow-2xl max-w-xl w-full p-8 relative transform scale-100 transition-transform duration-300 max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 text-xl transition-colors"
              onClick={closeJobModal}
              aria-label="Close modal"
            >
              &times;
            </button>
            <p className="text-3xl font-extrabold text-indigo-900 mb-2">
              {selectedJob.title}
            </p>
            <div className="text-sm text-teal-600 font-semibold mb-6 space-x-4">
                <span>{selectedJob.department}</span>
                <span>|</span>
                <span>{selectedJob.location}</span>
            </div>

            <p className='text-xl font-bold text-gray-800 mb-2'>Description</p>
            <p className="text-gray-700 mb-6 border-l-4 border-blue-500 pl-3">{selectedJob.description}</p>
            
            <p className='text-xl font-bold text-gray-800 mb-2'>Requirements</p>
            <ul className="list-disc list-outside text-gray-600 space-y-2 ml-5 mb-8">
              {selectedJob.requirements.map((req, i) => (
                <li key={i} className='text-sm'>{req}</li>
              ))}
            </ul>
            <a
              href="#application-form"
              onClick={(e) => {
                closeJobModal(); // Close modal upon clicking apply
                handleSmoothScroll(e, '#application-form');
              }}
              className="w-full text-center inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-800 transition transform hover:scale-[1.01] shadow-lg"
            >
              Apply for this Role
            </a>
          </div>
        </div>
      )}

      {/* Application Form */}
      <section
        id="application-form"
        className="py-24  flex justify-center items-center"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white shadow-2xl p-8 md:p-12 rounded-2xl">
            {/* Heading and Status */}
            <p className="text-4xl font-extrabold text-indigo-900 text-center mb-4">
              Submit Your Application
            </p>
            <p className="text-gray-600 text-center mb-10">
              Secure your place in the future. We look forward to reviewing your profile.
            </p>

            {/* Submission Status Message */}
            {submissionStatus === 'loading' && (
                <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6 rounded-lg font-semibold" role="alert">
                    Processing your application...
                </div>
            )}
            {submissionStatus === 'success' && (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded-lg font-semibold" role="alert">
                    Thank you! Your application has been successfully submitted. We will be in touch soon.
                </div>
            )}

            {/* Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="text-left">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={applicationFormData.name}
                    onChange={handleFormChange}
                    placeholder="Jane Doe"
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    required
                  />
                </div>

                {/* Email Address */}
                <div className="text-left">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={applicationFormData.email}
                    onChange={handleFormChange}
                    placeholder="jane@example.com"
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Phone Number */}
                <div className="text-left">
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={applicationFormData.phone}
                    onChange={handleFormChange}
                    placeholder="(555) 123-4567"
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                  />
                </div>

                {/* Select Job Role */}
                <div className="text-left">
                  <label htmlFor="jobRole" className="block text-sm font-semibold text-gray-700 mb-1">
                    Select Job Role
                  </label>
                  <select 
                    id="jobRole"
                    name="jobRole"
                    value={applicationFormData.jobRole}
                    onChange={handleFormChange}
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg text-black focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors bg-white"
                    required
                  >
                    {MOCKED_JOBS_DATA.map((job) => (
                      <option key={job.id} value={job.title}>
                        {job.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Statement */}
              <div className="text-left">
                <label htmlFor="statement" className="block text-sm font-semibold text-gray-700 mb-1">
                  Why should we hire you?
                </label>
                <textarea
  id="statement"
  name="statement"
  value={applicationFormData.statement}
  onChange={handleFormChange}
  placeholder="Write a short statement about your vision, experience, and what makes you a great fit."
  rows="4"
  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900"
></textarea>

              </div>

              {/* Upload Resume */}
              <div className="text-left">
                <label htmlFor="resume" className="block text-sm font-semibold text-gray-700 mb-1">
                  Upload Resume (.pdf, .doc, .docx)
                </label>
                <input
                  id="resume"
                  name="resume"
                  type="file"
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg cursor-pointer bg-gray-50 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-700 file:text- hover:file:bg-blue-800 transition-colors"
                  accept=".pdf,.doc,.docx"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submissionStatus === 'loading'}
                className={`w-full text-white py-3 rounded-xl font-bold text-lg shadow-xl transition-all duration-300 ${
                    submissionStatus === 'loading'
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-indigo-600 hover:bg-indigo-700 transform hover:scale-[1.005]'
                }`}
              >
                {submissionStatus === 'loading' ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer (Simple Placeholder) */}
      {/* <footer className="bg-gray-900 text-center py-6 text-gray-400 text-sm">
        &copy; 2025 AR Industries. All rights reserved.
      </footer> */}
    </div>
  );
};

export default App;
