import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../axios";

function Blog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axiosInstance.get(`/blogs/${id}`);
        setBlog(res.data);
      } catch (err) {
        setError("Failed to load blog");
      }
    };

    fetchBlog();
  }, [id]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 font-medium">
        {error}
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-pulse flex flex-col items-center">
             <div className="h-4 w-32 bg-gray-200 rounded mb-4"></div>
             <p className="text-gray-500 font-medium">Loading article...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Navigation / Back Button - Absolute on desktop, relative on mobile */}
      <div className="absolute top-24 left-4 md:left-8 z-10">
        <Link 
            to="/blogs" 
            className="flex items-center gap-2 text-white bg-black/30 md:bg-white/90 md:text-gray-700 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-[#393185] hover:text-white transition-all shadow-sm text-sm font-semibold"
        >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blogs
        </Link>
      </div>

      {/* Cover Hero Section */}
      <div className="w-full h-[50vh] md:h-[60vh] relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-[1]" />
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}${blog.cover}`}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        
        {/* Title Overlay for impactful design */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 z-[2] max-w-5xl mx-auto w-full">
            <span className="inline-block px-3 py-1 bg-[#393185] text-white text-xs font-bold uppercase tracking-wider rounded-md mb-4 shadow-lg">
                Industry Insights
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-md mb-4">
            {blog.title}
            </h1>
             <div className="flex items-center text-white/90 text-sm md:text-base font-medium space-x-4">
                <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    {new Date(blog.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                <span className="w-1 h-1 bg-white rounded-full"></span>
                <span>AR Industries</span>
            </div>
        </div>
      </div>

      {/* Content container */}
      <article className="max-w-4xl mx-auto px-6 md:px-12 py-16 -mt-10 relative z-10 bg-white rounded-t-3xl md:rounded-3xl shadow-xl">
        {/* Author / Metadata bar could go here */}
        
        {/* Blog content */}
        <div
          className="prose prose-lg md:prose-xl max-w-none text-gray-700 leading-relaxed 
          prose-headings:text-[#393185] prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-800
          prose-img:rounded-xl prose-img:shadow-lg prose-blockquote:border-l-4 prose-blockquote:border-[#393185] prose-blockquote:bg-gray-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:italic"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
        
        {/* Footer/Tags placeholder */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
             <Link to="/blogs" className="text-[#393185] font-semibold hover:underline flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                Read more articles
             </Link>
             <div className="text-gray-400 text-sm">
                 Share on social media
             </div>
        </div>
      </article>
    </div>
  );
}

export default Blog;
