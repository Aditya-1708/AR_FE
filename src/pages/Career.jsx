import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axios";

// EXPANDED AND MORE INFORMATIVE CULTURE POINTS
const CULTURE_POINTS = [
  {
    icon: "Sparkles",
    title: "Innovation-Driven Environment",
    description:
      "We dedicate 20% of engineering time to exploring new ideas and projects. Our culture encourages smart risk-taking, continuous experimentation, and embracing failure as a path to ground-breaking success.",
  },
  {
    icon: "Briefcase",
    title: "High-Impact Mission",
    description:
      "Join critical projects that are shaping the future of global mobility and sustainable technology. Your contributions directly influence large-scale, real-world industrial transformation and innovation.",
  },
  {
    icon: "BrainCircuit",
    title: "Accelerated Professional Growth",
    description:
      "We invest heavily in our people, providing an annual stipend for external courses, global conference attendance, and a structured mentorship program linking junior talent with senior leadership.",
  },
  {
    icon: "Users",
    title: "Inclusion & Global Collaboration",
    description:
      "Work with diverse, cross-functional teams spanning multiple continents. We uphold an inclusive environment where unique perspectives drive better product outcomes and are celebrated daily.",
  },
  {
    icon: "Trophy",
    title: "Competitive Compensation & Rewards",
    description:
      "Our performance-based rewards system includes top-tier salaries, comprehensive health coverage, generous paid time off, and substantial equity/stock options for high-impact contributors.",
  },
  {
    icon: "HeartHandshake",
    title: "Holistic Wellness & Support",
    description:
      "Benefit from flexible work arrangements, mental health resources, and a robust physical wellness program. We prioritize the sustainable well-being of every employee, ensuring work-life harmony.",
  },
];

// --- INLINE ICON COMPONENTS (lucide-react equivalents) ---

const Briefcase = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="14" x="2" y="7" rx="2" />
    <path d="M14 2v4a2 2 0 0 1-2 2h-0a2 2 0 0 1-2-2V2" />
  </svg>
);

const BrainCircuit = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 5a2 2 0 1 0-.01-.001.001.001 0 0 0 .01.001Z" />
    <path
      d="M12 5a2 2 1 0 1 0 .01-.001.001.001 0 0 0-.01.001Z"
      fill="currentColor"
      opacity=".25"
    />
    <path d="M12 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z" />
    <path
      d="M12 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"
      fill="currentColor"
      opacity=".25"
    />
    <path d="M16 17H8" />
    <path d="M14 11h-4" />
    <path d="M18 14h-4" />
    <path d="M10 8H6" />
    <path d="M14 8h-4" />
    <path d="M18 8h-4" />
  </svg>
);

const Users = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const Trophy = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 9H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2" />
    <path d="M18 9v14" />
    <path d="M6 9v14" />
    <path d="M2 13h20" />
    <path d="M12 17H6" />
    <path d="M12 17h6" />
  </svg>
);

const ArrowRight = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const Sparkles = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="M22 12h-2" />
    <path d="M4 12h-2" />
    <path d="m19.5 5.5-1.4 1.4" />
    <path d="m6.4 17.6-1.4 1.4" />
    <path d="m20 19.9-1.5-1.5" />
    <path d="m5.5 4.5 1.5 1.5" />
    <path d="M12 17l-3-3 3-3 3 3z" />
  </svg>
);

const HeartHandshake = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <path d="M12 14h6" />
    <path d="M16 18h-4" />
  </svg>
);

const getIcon = (name, props) => {
  switch (name) {
    case "Briefcase":
      return <Briefcase {...props} />;
    case "BrainCircuit":
      return <BrainCircuit {...props} />;
    case "Users":
      return <Users {...props} />;
    case "Trophy":
      return <Trophy {...props} />;
    case "Sparkles":
      return <Sparkles {...props} />;
    case "HeartHandshake":
      return <HeartHandshake {...props} />;
    default:
      return null;
  }
};

// --- MAIN APPLICATION COMPONENT ---
const App = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();
  // Handle smooth scroll for internal links
  const handleSmoothScroll = useCallback((e, hash) => {
    e.preventDefault();
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axiosInstance.get("/openings");
        if (response) {
          setJobs(response.data.jobs);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-gray-50 font-sans">
      {/* ================= HERO ================= */}
      <section className="relative py-24 md:py-32 flex flex-col items-center justify-center text-white text-center px-6 overflow-hidden bg-[#393185]">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
            <div className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-white blur-3xl"></div>
            <div className="absolute top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-white blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-semibold tracking-wider mb-6">
              JOIN OUR MISSION
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Careers at AR Industries
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-10">
            We are building a legacy of innovation. Join our team of dedicated
            problem-solvers and pioneers, where your work will have a tangible
            impact on the world.
          </p>

          <button
              onClick={(e) => handleSmoothScroll(e, "#open-positions")}
              className="inline-flex items-center px-8 py-4 bg-white text-[#393185] rounded-full font-bold text-lg shadow-xl hover:bg-gray-100 transition-all transform hover:-translate-y-1 duration-300 group"
            >
              Explore Openings
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* ================= WORK CULTURE ================= */}
      <section id="work-culture" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Our Culture. Your Growth.
            </h2>
            <div className="w-24 h-1 bg-[#393185] mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               We foster an environment of trust, empowerment, and bold experimentation, believing that the best work happens when people feel valued and challenged.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CULTURE_POINTS.map((point, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-xl hover:bg-white hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#393185] transition-colors duration-300 border border-gray-100">
                    {getIcon(point.icon, {
                      className: "w-7 h-7 text-[#393185] transition-colors duration-300 group-hover:text-white",
                    })}
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-[#393185] transition-colors">
                  {point.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= JOB LISTINGS ================= */}
      <section id="open-positions" className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Current Open Positions
            </h2>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               Find the role that matches your passion and skills.
             </p>
          </div>

          {!jobs || jobs.length === 0 ? (
             <div className="text-center py-12">
                <p className="text-lg text-gray-500">No open positions at the moment. Please check back later.</p>
             </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col h-full group"
                  onClick={() => {
                    navigate(`/jobs/${job.id}`);
                  }}
                >
                  <div className="flex-grow">
                     <span className="inline-block px-3 py-1 bg-blue-50 text-[#393185] text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
                        Full Time
                     </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#393185] transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-6 line-clamp-3">
                        Join our team and help shape the future of industrial manufacturing with your unique skills and perspective.
                    </p>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-100 flex items-center text-[#393185] font-semibold text-sm group-hover:underline decoration-2 underline-offset-4 pointer-events-none">
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default App;
