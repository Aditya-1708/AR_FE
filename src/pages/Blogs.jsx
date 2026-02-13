import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../axios";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axiosInstance.get("/blogs");
        setBlogs(res.data);
      } catch (err) {
        setError(err.response?.data?.error || "Failed to load blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-[#393185]"></div>
          <p className="text-gray-500 font-medium animate-pulse">Loading insights...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center p-8 bg-white rounded-2xl shadow-xl border border-red-100 max-w-md w-full">
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Something went wrong</h3>
          <p className="text-gray-500">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Heading - Hero Section */}
      <section className="relative py-24 md:py-40 flex flex-col items-center justify-center text-white text-center px-6 overflow-hidden bg-[#393185]">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-white blur-3xl"></div>
          <div className="absolute top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-white blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase mb-6 text-blue-100">
            Thought Leadership
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Our Latest Insights
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-blue-100 leading-relaxed font-light">
            Discover the latest news, updates, and technological innovations shaping the future of industrial manufacturing.
          </p>
        </div>
      </section>

      {/* Blog Grid Section */}
      <div className="max-w-7xl mx-auto px-6 pb-24 -mt-20 relative z-20">
        {blogs.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-3xl shadow-xl border border-gray-100">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No Articles Found</h3>
            <p className="text-gray-500 max-w-md mx-auto">We haven't published any articles yet. Subscribe to our newsletter to get notified when we do.</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <Link
                to={`/blog/${blog.id}`}
                key={blog.id}
                className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full transform hover:-translate-y-2"
              >
                {/* Thumbnail Container */}
                <div className="h-60 w-full overflow-hidden relative bg-gray-200">
                  <div className="absolute inset-0 bg-[#393185]/0 group-hover:bg-[#393185]/20 transition-colors duration-500 z-10"></div>
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}${blog.thumbnail}`}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 will-change-transform"
                    loading="lazy"
                  />
                  {/* Category Badge - Visual Polish */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-white/90 backdrop-blur text-[#393185] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      Blog
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-8 flex flex-col relative z-20">
                  {/* Date & Meta */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-0.5 w-8 bg-gray-200 group-hover:bg-[#393185] transition-colors duration-300"></div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-[#393185] transition-colors duration-300">
                      {new Date(blog.createdAt).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </p>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#393185] transition-colors duration-300 line-clamp-2 leading-tight">
                    {blog.title}
                  </h2>

                  {/* Divider */}
                  <div className="w-full h-px bg-gray-100 my-4 group-hover:bg-gray-100/50 transition-colors"></div>

                  <div className="mt-auto flex items-center text-gray-500 text-sm font-semibold group-hover:text-[#393185] transition-colors duration-300">
                    Read Full Article
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Blogs;
