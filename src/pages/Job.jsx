import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../axios";

function Job() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axiosInstance.get(`/openings/${id}`);
        setJob(response.data.job);
      } catch (err) {
        console.log(err);
        setError("Failed to load job");
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#393185]"></div>
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="text-red-500 text-xl font-semibold mb-4">{error || "Job not found"}</div>
        <button 
            onClick={() => navigate("/career")}
            className="px-6 py-2 bg-[#393185] text-white rounded-lg hover:bg-blue-800 transition-colors"
        >
            Back to Careers
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-12 font-sans">
      {/* Header / Breadcrumb */}
      <div className="bg-[#393185] text-white py-12">
          <div className="container mx-auto px-4">
              <button 
                onClick={() => navigate("/career")}
                className="text-blue-200 hover:text-white mb-6 flex items-center transition-colors text-sm font-medium"
              >
                  &larr; Back to Openings
              </button>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{job.title}</h1>
              <div className="flex flex-wrap gap-3">
                  <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm border border-white/20">
                      Full Time
                  </span>
                  <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm border border-white/20">
                      On-site
                  </span>
              </div>
          </div>
      </div>

      <div className="container mx-auto px-4 -mt-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto border border-gray-100">
            <div className="p-8 md:p-10">
                <div className="prose prose-lg max-w-none prose-headings:text-[#393185] prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-strong:text-gray-900 text-gray-600">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">
                        Role Description
                    </h3>
                    <div dangerouslySetInnerHTML={{ __html: job.description }} />
                </div>

                <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col items-center text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to make an impact?</h3>
                    <p className="text-gray-600 mb-8 max-w-xl">
                        Join our team and help us build the future of industrial manufacturing. We can't wait to hear from you.
                    </p>
                    <button
                        onClick={() => navigate(`/application/${job.id}`)}
                        className="px-10 py-4 bg-[#393185] text-white text-lg font-bold rounded-xl hover:bg-blue-800 transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-900/20"
                    >
                        Apply for this Role
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Job;
