import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import adminApi from "../axios";
import AdminBlog from "../components/AdminBlog";
const EMPTY_FORM = {
    products: { name: "", description: "" },
    equipments: { name: "", description: "", details: "" },
    processes: { name: "", description: "" },
    staff: { name: "", role: "" },
};

function AdminPanel() {
    const [resource, setResource] = useState("products");
    const [data, setData] = useState([]);
    const [editing, setEditing] = useState(null);
    const [form, setForm] = useState(EMPTY_FORM.products);
    const [file, setFile] = useState(null);
    const [content, setContent] = useState("hello world");
    const navigate = useNavigate();
    /* ================= FETCH ================= */

    const fetchMap = {
        products: async () => {
            const res = await adminApi.get("/products");
            setData(res.data);
        },
        equipments: async () => {
            const res = await adminApi.get("/equipments");
            setData(res.data);
        },
        processes: async () => {
            const res = await adminApi.get("/processes");
            setData(res.data);
        },
        staff: async () => {
            const res = await adminApi.get("/staff");
            setData(res.data);
        },
    };

    const logout = async () => {
        try {
            await adminApi.get("/admins/logout");
            navigate("/signin");
        } catch (err) {
            console.error("Logout failed", err);
        }
    };

    useEffect(() => {
        setEditing(null);
        setForm(EMPTY_FORM[resource]);
        setFile(null);
        fetchMap[resource]();
    }, [resource]);

    /* ================= SUBMIT ================= */

    const submit = async (e) => {
        e.preventDefault();

        let payload;
        let headers = {};

        if (["products", "equipments", "staff"].includes(resource)) {
            payload = new FormData();
            Object.entries(form).forEach(([k, v]) => payload.append(k, v));
            if (file) payload.append("image", file); // Backend expects 'image'
        } else {
            payload = form;
            headers["Content-Type"] = "application/json";
        }

        if (editing) {
            await adminApi.put(`/${resource}/${editing.id}`, payload, { headers });
        } else {
            await adminApi.post(`/${resource}`, payload, { headers });
        }

        setEditing(null);
        setForm(EMPTY_FORM[resource]);
        setFile(null);
        fetchMap[resource]();
    };

    /* ================= DELETE ================= */

    const deleteItem = async (id) => {
        if (!confirm("Delete this item?")) return;
        await adminApi.delete(`/${resource}/${id}`);
        fetchMap[resource]();
    };

    /* ================= EDIT ================= */

    const startEdit = (item) => {
        setEditing(item);
        setForm({
            name: item.name || "",
            description: item.description || "",
            details: item.details || "",
        });
    };

    const [openings, setOpenings] = useState([]);
    const [selectedOpening, setSelectedOpening] = useState(null);
    const [applications, setApplications] = useState([]);
    const [loadingApps, setLoadingApps] = useState(false);

    // opening form
    const [openingForm, setOpeningForm] = useState({
        title: "",
        description: "",
        salary: "",
        isActive: true,
    });
    const [editingOpening, setEditingOpening] = useState(null);

    /* ================= FETCH OPENINGS ================= */

    const fetchOpenings = async () => {
        const res = await adminApi.get("/openings");
        setOpenings(res.data.jobs);
    };

    useEffect(() => {
        fetchOpenings();
    }, []);

    /* ================= APPLICATIONS ================= */

    const fetchApplicationsByJob = async (jobId) => {
        setLoadingApps(true);
        const res = await adminApi.get(`/applications/job/${jobId}`);
        setApplications(res.data);
        setLoadingApps(false);
    };

    /* ================= CREATE / UPDATE OPENING ================= */

    const submitOpening = async (e) => {
        e.preventDefault();

        if (editingOpening) {
            await adminApi.put(`/openings/${editingOpening.id}`, openingForm);
        } else {
            await adminApi.post("/openings", openingForm);
        }

        setOpeningForm({ title: "", description: "", salary: "", isActive: true });
        setEditingOpening(null);
        fetchOpenings();
    };

    /* ================= DELETE OPENING ================= */

    const deleteOpening = async (id) => {
        if (!confirm("Delete this job opening? All applications will be removed."))
            return;
        await adminApi.delete(`/openings/${id}`);
        setSelectedOpening(null);
        fetchOpenings();
    };

    /* ================= UI ================= */

    return (
        <div className="min-h-screen bg-gray-50 font-sans pb-20">
            {/* ================= HEADER ================= */}
            <div className="bg-[#393185] text-white shadow-lg sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold tracking-tight">Admin Dashboard</h1>
                            <p className="text-xs text-blue-200">Manage your website content</p>
                        </div>
                    </div>
                    <button
                        onClick={logout}
                        className="px-5 py-2 bg-red-500/10 hover:bg-red-500 text-red-100 hover:text-white rounded-lg text-sm font-medium transition-all border border-red-500/20 backdrop-blur-sm flex items-center gap-2"
                    >
                        Logout
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-10 space-y-12">

                {/* ================= HIRING SECTION ================= */}
                <section className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-8 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">Careers & Applications</h2>
                            <p className="text-gray-500 mt-1">Manage job openings and review candidate applications</p>
                        </div>
                        <div className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            HR Module
                        </div>
                    </div>

                    <div className="p-8 grid lg:grid-cols-[400px_1fr] gap-10">
                        {/* LEFT: FORM + LIST */}
                        <div className="space-y-8">
                            {/* CREATE/EDIT FORM */}
                            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    {editingOpening ? (
                                        <>
                                            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                                            Edit Opening
                                        </>
                                    ) : (
                                        <>
                                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                            New Job Position
                                        </>
                                    )}
                                </h3>
                                <form onSubmit={submitOpening} className="space-y-4">
                                    <input
                                        placeholder="Job Title"
                                        value={openingForm.title}
                                        onChange={(e) => setOpeningForm({ ...openingForm, title: e.target.value })}
                                        className="w-full border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#393185] focus:border-transparent transition-all text-sm shadow-sm"
                                        required
                                    />
                                    <textarea
                                        placeholder="Job Description"
                                        rows={3}
                                        value={openingForm.description}
                                        onChange={(e) => setOpeningForm({ ...openingForm, description: e.target.value })}
                                        className="w-full border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#393185] focus:border-transparent transition-all text-sm shadow-sm resize-none"
                                    />
                                    <div className="grid grid-cols-2 gap-4">
                                        <input
                                            type="number"
                                            placeholder="Salary (opt)"
                                            value={openingForm.salary}
                                            onChange={(e) => setOpeningForm({ ...openingForm, salary: e.target.value })}
                                            className="w-full border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#393185] focus:border-transparent transition-all text-sm shadow-sm"
                                        />
                                        <label className="flex items-center justify-center gap-3 bg-white border border-gray-200 rounded-xl px-4 cursor-pointer hover:bg-gray-50 transition-colors">
                                            <span className="text-sm font-medium text-gray-600">Active</span>
                                            <div className="relative inline-flex items-center cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={openingForm.isActive}
                                                    onChange={(e) => setOpeningForm({ ...openingForm, isActive: e.target.checked })}
                                                    className="sr-only peer"
                                                />
                                                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-500"></div>
                                            </div>
                                        </label>
                                    </div>

                                    <div className="flex gap-3 pt-2">
                                        <button className="flex-1 bg-[#393185] hover:bg-blue-800 text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-blue-900/20 transition-all">
                                            {editingOpening ? "Update Position" : "Create Position"}
                                        </button>
                                        {editingOpening && (
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setEditingOpening(null);
                                                    setOpeningForm({ title: "", description: "", salary: "", isActive: true });
                                                }}
                                                className="px-4 py-2.5 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all"
                                            >
                                                Cancel
                                            </button>
                                        )}
                                    </div>
                                </form>
                            </div>

                            {/* LIST */}
                            <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                                <div className="bg-gray-50/50 px-4 py-3 border-b border-gray-100 font-semibold text-gray-700 text-sm">
                                    Open Positions ({openings.length})
                                </div>
                                <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
                                    {openings.length === 0 && (
                                        <p className="p-8 text-center text-gray-400 text-sm">No positions created yet.</p>
                                    )}
                                    <ul className="divide-y divide-gray-100">
                                        {openings.map((job) => (
                                            <li
                                                key={job.id}
                                                onClick={() => {
                                                    setSelectedOpening(job);
                                                    fetchApplicationsByJob(job.id);
                                                }}
                                                className={`p-4 cursor-pointer transition-all hover:bg-gray-50 group flex items-start justify-between ${selectedOpening?.id === job.id ? 'bg-blue-50/60 border-l-4 border-[#393185]' : 'border-l-4 border-transparent'}`}
                                            >
                                                <div>
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <h4 className={`font-bold text-sm ${selectedOpening?.id === job.id ? 'text-[#393185]' : 'text-gray-800'}`}>{job.title}</h4>
                                                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${job.isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                                                            {job.isActive ? 'Active' : 'Closed'}
                                                        </span>
                                                    </div>
                                                    <p className="text-xs text-gray-500 line-clamp-1">{job.description}</p>
                                                </div>
                                                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button
                                                        onClick={(e) => { e.stopPropagation(); setEditingOpening(job); setOpeningForm(job); }}
                                                        className="p-1.5 hover:bg-amber-100 text-amber-600 rounded-lg transition-colors"
                                                        title="Edit"
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" /></svg>
                                                    </button>
                                                    <button
                                                        onClick={(e) => { e.stopPropagation(); deleteOpening(job.id); }}
                                                        className="p-1.5 hover:bg-red-100 text-red-600 rounded-lg transition-colors"
                                                        title="Delete"
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 1 0 002 2h8a2 1 0 002-2V6a1 1 0 000-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                                                    </button>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: APPLICATIONS */}
                        <div className="bg-gray-50/50 rounded-2xl border border-gray-200/60 p-6 min-h-[500px] flex flex-col">
                            {!selectedOpening ? (
                                <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
                                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <p className="font-medium">Select a job to view applications</p>
                                </div>
                            ) : (
                                <>
                                    <div className="mb-6 flex items-end justify-between border-b border-gray-200 pb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 leading-tight">{selectedOpening.title}</h3>
                                            <p className="text-sm text-gray-500 mt-1">Applications Review</p>
                                        </div>
                                        <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
                                            {loadingApps ? "Syncing..." : `${applications.length} Candidates`}
                                        </span>
                                    </div>

                                    <div className="flex-1 overflow-y-auto custom-scrollbar space-y-4 pr-2">
                                        {loadingApps && (
                                            <div className="flex justify-center py-10"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#393185]"></div></div>
                                        )}

                                        {!loadingApps && applications.length === 0 && (
                                            <div className="text-center py-12 text-gray-400 bg-white rounded-xl border border-dashed border-gray-200">
                                                <p>No applications received yet.</p>
                                            </div>
                                        )}

                                        {applications.map((app) => (
                                            <div key={app.id} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                                                <div>
                                                    <h4 className="font-bold text-gray-900">{app.fullName}</h4>
                                                    <div className="text-sm text-gray-500 space-y-0.5 mt-1">
                                                        <div className="flex items-center gap-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                                            {app.email}
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                                            {app.phoneNo}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3 w-full sm:w-auto mt-2 sm:mt-0">
                                                    <a
                                                        href={`${import.meta.env.VITE_BACKEND_URL}/uploads/${app.resume}`}
                                                        target="_blank"
                                                        className="flex-1 sm:flex-none text-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-lg transition-colors border border-gray-200"
                                                    >
                                                        View Resume
                                                    </a>
                                                    <button
                                                        onClick={async () => {
                                                            if (!confirm("Delete this application?")) return;
                                                            await adminApi.delete(`/applications/${app.id}`);
                                                            fetchApplicationsByJob(selectedOpening.id);
                                                        }}
                                                        className="px-3 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-colors border border-red-100"
                                                        title="Delete Application"
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 1 0 002 2h8a2 1 0 002-2V6a1 1 0 000-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </section>


                {/* ================= CONTENT MANAGEMENT SECTION ================= */}
                <section className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-8 border-b border-gray-100 bg-gray-50/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">Website Content</h2>
                            <p className="text-gray-500 mt-1">Manage products, equipments, and manufacturing processes</p>
                        </div>

                        <div className="flex bg-white p-1 rounded-xl border border-gray-200 shadow-sm">
                            {['products', 'equipments', 'processes', 'staff'].map((opt) => (
                                <button
                                    key={opt}
                                    onClick={() => setResource(opt)}
                                    className={`px-6 py-2 rounded-lg text-sm font-semibold capitalize transition-all ${resource === opt ? 'bg-[#393185] text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="p-8 grid xl:grid-cols-[400px_1fr] gap-12">
                        {/* FORM */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            key={resource} // Re-animate on resource change
                            className="bg-gray-50 rounded-2xl p-6 border border-gray-100 h-fit sticky top-28"
                        >
                            <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2 text-lg">
                                {editing ? "Edit Item" : "Add New Item"}
                                <span className="text-xs font-normal text-gray-500 bg-white border px-2 py-0.5 rounded ml-auto capitalize">{resource}</span>
                            </h3>

                            <form onSubmit={submit} className="space-y-5">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Name</label>
                                    <input
                                        placeholder={`Enter ${resource.slice(0, -1)} name`}
                                        className="w-full border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#393185] focus:border-transparent transition-all shadow-sm"
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        required
                                    />
                                </div>

                                {resource === "staff" ? (
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Role</label>
                                        <input
                                            placeholder="e.g. Senior Engineer"
                                            className="w-full border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#393185] focus:border-transparent transition-all shadow-sm"
                                            value={form.role}
                                            onChange={(e) => setForm({ ...form, role: e.target.value })}
                                            required
                                        />
                                    </div>
                                ) : (
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Description</label>
                                        <textarea
                                            placeholder="Write a short description..."
                                            rows={4}
                                            className="w-full border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#393185] focus:border-transparent transition-all shadow-sm resize-none"
                                            value={form.description}
                                            onChange={(e) => setForm({ ...form, description: e.target.value })}
                                        />
                                    </div>
                                )}

                                {resource === "equipments" && (
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Technical Details</label>
                                        <input
                                            placeholder="Specs, capacity, etc."
                                            className="w-full border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#393185] focus:border-transparent transition-all shadow-sm"
                                            value={form.details}
                                            onChange={(e) => setForm({ ...form, details: e.target.value })}
                                        />
                                    </div>
                                )}

                                {(resource === "products" || resource === "equipments" || resource === "staff") && (
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Image {resource === "staff" && "(Profile Photo)"}</label>
                                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 bg-white text-center hover:bg-gray-50 transition-colors cursor-pointer relative">
                                            <input
                                                type="file"
                                                onChange={(e) => setFile(e.target.files[0])}
                                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                            />
                                            <div className="pointer-events-none">
                                                {file ? (
                                                    <p className="text-sm font-semibold text-green-600 truncate">{file.name}</p>
                                                ) : (
                                                    <>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                                        <p className="text-sm text-gray-500">Click to upload image</p>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="flex gap-3 pt-4 border-t border-gray-200">
                                    <button className="flex-1 bg-[#393185] hover:bg-blue-800 text-white px-4 py-3 rounded-xl font-bold shadow-lg shadow-blue-900/20 transition-all">
                                        {editing ? "Save Changes" : "Publish Item"}
                                    </button>
                                    {editing && (
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setEditing(null);
                                                setForm(EMPTY_FORM[resource]);
                                            }}
                                            className="px-4 py-3 rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-50 font-semibold transition-all"
                                        >
                                            Cancel
                                        </button>
                                    )}
                                </div>
                            </form>
                        </motion.div>

                        {/* GRID LIST */}
                        <div>
                            {data.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-gray-400 py-20 border-2 border-dashed border-gray-200 rounded-3xl">
                                    <p className="font-medium">No items found</p>
                                    <p className="text-sm">Create your first {resource.slice(0, -1)} using the form.</p>
                                </div>
                            ) : (
                                <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {data.map((item) => (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            layout
                                            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col"
                                        >
                                            <div className="relative h-48 bg-gray-100 overflow-hidden">
                                                {(item.img || item.image) ? (
                                                    <img
                                                        src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${item.img || item.image}`}
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                        alt={item.name}
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                                    </div>
                                                )}
                                                <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                                                    <button
                                                        onClick={() => startEdit(item)}
                                                        className="bg-white/90 backdrop-blur text-blue-600 p-2 rounded-lg shadow-sm hover:bg-white"
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" /></svg>
                                                    </button>
                                                    <button
                                                        onClick={() => deleteItem(item.id)}
                                                        className="bg-white/90 backdrop-blur text-red-600 p-2 rounded-lg shadow-sm hover:bg-white"
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 1 0 002 2h8a2 1 0 002-2V6a1 1 0 000-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="p-5 flex-1 flex flex-col">
                                                <h4 className="font-bold text-gray-900 mb-2">{item.name}</h4>

                                                {item.role && (
                                                    <p className="text-[#393185] font-medium text-sm mb-2">{item.role}</p>
                                                )}

                                                <p className="text-gray-500 text-sm line-clamp-3 mb-4 flex-1">{item.description}</p>
                                                {item.details && (
                                                    <div className="bg-gray-50 p-2 rounded text-xs text-gray-600 font-mono mt-auto">
                                                        {item.details}
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* ================= BLOG SECTION ================= */}
                <section className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-8 border-b border-gray-100 bg-gray-50/50">
                        <h2 className="text-2xl font-bold text-gray-900">Blog Management</h2>
                        <p className="text-gray-500 mt-1">Create and edit blog posts</p>
                    </div>
                    <div className="p-4 sm:p-8">
                        <AdminBlog />
                    </div>
                </section>

            </div>
        </div>
    );
}

export default AdminPanel;
