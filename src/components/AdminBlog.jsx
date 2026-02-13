import { useState } from "react";
import axiosInstance from "../axios";
import Editor from "../components/Editor";

const AdminBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [cover, setCover] = useState(null);

  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setMessage("Title is required");
      return;
    }

    if (!thumbnail || !cover) {
      setMessage("Thumbnail and cover are required");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const formData = new FormData();
      formData.append("title", title.trim());
      formData.append("content", content);
      formData.append("published", "true");
      formData.append("thumbnail", thumbnail);
      formData.append("cover", cover);

      await axiosInstance.post("/blogs", formData);

      setMessage("Blog created successfully!");

      // Reset form
      setTitle("");
      setContent("");
      setThumbnail(null);
      setCover(null);
      setThumbnailPreview(null);
      setCoverPreview(null);

      // Optional: scroll to top after success
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      const errorMsg =
        err.response?.data?.error ||
        err.response?.data?.message ||
        "Failed to create blog";

      setMessage(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-8 border-b border-gray-100 bg-gray-50/50">
            <h2 className="text-xl font-bold text-gray-900">Create New Blog Post</h2>
            <p className="text-gray-500 text-sm mt-1">Share news and updates with your audience</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {/* Title Section */}
            <div className="space-y-4">
            <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">
                Blog Title <span className="text-red-500">*</span>
                </label>
                <input
                type="text"
                placeholder="Enter a descriptive title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#393185] focus:border-transparent transition-all shadow-sm text-gray-900 placeholder-gray-400"
                />
            </div>
            </div>

            {/* Images Section */}
            <div className="grid md:grid-cols-2 gap-8">
            {/* Thumbnail */}
            <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">
                Thumbnail Image <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                <div 
                    className={`border-2 border-dashed rounded-xl p-4 transition-all text-center h-48 flex flex-col items-center justify-center cursor-pointer overflow-hidden bg-gray-50 hover:bg-gray-100 ${thumbnailPreview ? 'border-[#393185] bg-blue-50/30' : 'border-gray-300'}`}
                    onClick={() => document.getElementById('thumbnail-upload').click()}
                >
                    {thumbnailPreview ? (
                    <img 
                        src={thumbnailPreview} 
                        alt="Thumbnail preview" 
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                    ) : (
                    <>
                        <div className="w-10 h-10 rounded-full bg-blue-50 text-[#393185] flex items-center justify-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        </div>
                        <p className="text-sm font-medium text-gray-900">Click to upload thumbnail</p>
                        <p className="text-xs text-gray-500 mt-1">SVG, PNG, JPG (rec. 400x300px)</p>
                    </>
                    )}
                    {thumbnailPreview && (
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">Change Image</span>
                        </div>
                    )}
                </div>
                <input
                    id="thumbnail-upload"
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                    const file = e.target.files[0];
                    setThumbnail(file);
                    if (file) setThumbnailPreview(URL.createObjectURL(file));
                    }}
                    className="hidden"
                />
                </div>
            </div>

            {/* Cover */}
            <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">
                Cover Image <span className="text-red-500">*</span>
                </label>
                 <div className="relative group">
                <div 
                    className={`border-2 border-dashed rounded-xl p-4 transition-all text-center h-48 flex flex-col items-center justify-center cursor-pointer overflow-hidden bg-gray-50 hover:bg-gray-100 ${coverPreview ? 'border-[#393185] bg-blue-50/30' : 'border-gray-300'}`}
                    onClick={() => document.getElementById('cover-upload').click()}
                >
                    {coverPreview ? (
                    <img 
                        src={coverPreview} 
                        alt="Cover preview" 
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                    ) : (
                    <>
                         <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        </div>
                        <p className="text-sm font-medium text-gray-900">Click to upload cover</p>
                        <p className="text-xs text-gray-500 mt-1">SVG, PNG, JPG (rec. 1200x600px)</p>
                    </>
                    )}
                    {coverPreview && (
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">Change Image</span>
                        </div>
                    )}
                </div>
                <input
                    id="cover-upload"
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                    const file = e.target.files[0];
                    setCover(file);
                    if (file) setCoverPreview(URL.createObjectURL(file));
                    }}
                    className="hidden"
                />
                </div>
            </div>
            </div>

            {/* Editor Section */}
            <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
                Content <span className="text-red-500">*</span>
            </label>
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:border-[#393185]/30 transition-colors">
                <Editor value={content} onChange={setContent} />
            </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-gray-100 flex items-center gap-4">
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#393185] hover:bg-blue-800 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-blue-900/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                    {loading ? (
                        <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Publishing...
                        </>
                    ) : (
                        "Publish Article"
                    )}
                </button>
                
                {message && (
                    <div
                    className={`px-4 py-2 rounded-lg text-sm font-medium animate-fade-in ${
                        message.toLowerCase().includes("success")
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-red-50 text-red-700 border border-red-200"
                    }`}
                    >
                    {message}
                    </div>
                )}
            </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default AdminBlog;
