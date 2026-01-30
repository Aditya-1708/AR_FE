import React, { useEffect, useState } from "react";
import adminApi from "../axios";
import { motion } from "framer-motion";

const EMPTY_FORM = {
  products: { name: "", description: "" },
  equipments: { name: "", description: "", details: "" },
  processes: { name: "", description: "" },
};

function AdminPanel() {
  const [resource, setResource] = useState("products");
  const [data, setData] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM.products);
  const [file, setFile] = useState(null);

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

    if (resource === "products" || resource === "equipments") {
      payload = new FormData();
      Object.entries(form).forEach(([k, v]) => payload.append(k, v));
      if (file) payload.append("img", file);
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
    <div className="min-h-screen pt-24 bg-gray-50">
      {/* applications section */}
      {/* openings section */}
      <section className="max-w-7xl mx-auto px-6 py-12 space-y-8">
        <h2 className="text-3xl font-bold">Hiring · Job Applications</h2>

        <div className="grid lg:grid-cols-[340px_1fr] gap-8">
          {/* ================= LEFT : OPENINGS + FORM ================= */}
          <aside className="space-y-6">
            {/* ===== CREATE / EDIT OPENING ===== */}
            <form
              onSubmit={submitOpening}
              className="bg-white rounded-2xl border shadow-sm p-5 space-y-4"
            >
              <h3 className="font-semibold">
                {editingOpening ? "Edit Opening" : "Create Opening"}
              </h3>

              <input
                placeholder="Job Title"
                value={openingForm.title}
                onChange={(e) =>
                  setOpeningForm({ ...openingForm, title: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2"
                required
              />

              <textarea
                placeholder="Description"
                rows={3}
                value={openingForm.description}
                onChange={(e) =>
                  setOpeningForm({
                    ...openingForm,
                    description: e.target.value,
                  })
                }
                className="w-full border rounded-lg px-3 py-2"
              />

              <input
                type="number"
                placeholder="Salary (optional)"
                value={openingForm.salary}
                onChange={(e) =>
                  setOpeningForm({ ...openingForm, salary: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2"
              />

              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={openingForm.isActive}
                  onChange={(e) =>
                    setOpeningForm({
                      ...openingForm,
                      isActive: e.target.checked,
                    })
                  }
                />
                Active
              </label>

              <div className="flex gap-2">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
                  {editingOpening ? "Update" : "Create"}
                </button>

                {editingOpening && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditingOpening(null);
                      setOpeningForm({
                        title: "",
                        description: "",
                        salary: "",
                        isActive: true,
                      });
                    }}
                    className="border px-4 py-2 rounded-lg text-sm"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>

            {/* ===== OPENINGS LIST ===== */}
            <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
              <div className="p-4 border-b font-semibold">Open Positions</div>

              <ul className="divide-y">
                {openings.map((job) => (
                  <li
                    key={job.id}
                    className={`p-4 cursor-pointer transition group ${
                      selectedOpening?.id === job.id
                        ? "bg-blue-50 border-l-4 border-blue-600"
                        : "hover:bg-gray-50"
                    }`}
                    onClick={() => {
                      setSelectedOpening(job);
                      fetchApplicationsByJob(job.id);
                    }}
                  >
                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium">{job.title}</p>
                        <p className="text-xs text-gray-500">
                          {job.isActive ? "Active" : "Closed"}
                        </p>
                      </div>

                      <div className="flex gap-2 opacity-0 group-hover:opacity-100">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setEditingOpening(job);
                            setOpeningForm(job);
                          }}
                          className="text-xs border px-2 py-1 rounded"
                        >
                          Edit
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteOpening(job.id);
                          }}
                          className="text-xs border px-2 py-1 rounded text-red-600"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* ================= RIGHT : APPLICATIONS ================= */}
          <div className="bg-white rounded-2xl border shadow-sm p-6">
            {!selectedOpening && (
              <div className="h-full flex items-center justify-center text-gray-500">
                Select a job opening to view applications
              </div>
            )}

            {selectedOpening && (
              <>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold">
                    {selectedOpening.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {applications.length} applications received
                  </p>
                </div>

                {loadingApps && <p className="text-gray-500">Loading…</p>}

                {!loadingApps && applications.length === 0 && (
                  <p className="text-center text-gray-500 py-10">
                    No applications yet
                  </p>
                )}

                <div className="space-y-4">
                  {applications.map((app) => (
                    <div
                      key={app.id}
                      className="border rounded-xl p-4 flex justify-between"
                    >
                      <div>
                        <p className="font-medium">{app.fullName}</p>
                        <p className="text-sm text-gray-600">{app.email}</p>
                        <p className="text-sm text-gray-500">{app.phoneNo}</p>
                      </div>

                      <div className="flex gap-2">
                        <a
                          href={`${import.meta.env.VITE_BACKEND_URL}/uploads/${app.resume}`}
                          target="_blank"
                          className="border px-3 py-1.5 rounded text-xs"
                        >
                          Resume
                        </a>

                        <button
                          onClick={async () => {
                            if (!confirm("Delete this application?")) return;
                            await adminApi.delete(`/applications/${app.id}`);
                            fetchApplicationsByJob(selectedOpening.id);
                          }}
                          className="border px-3 py-1.5 rounded text-xs text-red-600"
                        >
                          Delete
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

      <section className="pt-24 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          {/* ===== HEADER ===== */}
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold capitalize">{resource}</h1>

            <select
              value={resource}
              onChange={(e) => setResource(e.target.value)}
              className="rounded-lg border px-4 py-2 bg-white focus:ring-2 focus:ring-blue-500"
            >
              <option value="products">Products</option>
              <option value="equipments">Equipments</option>
              <option value="processes">Processes</option>
            </select>
          </div>

          <div className="grid lg:grid-cols-[380px_1fr] gap-10">
            {/* ===== FORM ===== */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl border shadow-sm p-8 h-fit sticky top-28"
            >
              <h2 className="text-xl font-semibold mb-4">
                {editing ? "Edit" : "Create"} {resource.slice(0, -1)}
              </h2>

              <form onSubmit={submit} className="space-y-4">
                <input
                  placeholder="Name"
                  className="w-full border rounded-lg px-4 py-2"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />

                <textarea
                  placeholder="Description"
                  rows={4}
                  className="w-full border rounded-lg px-4 py-2"
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                />

                {resource === "equipments" && (
                  <input
                    placeholder="Details"
                    className="w-full border rounded-lg px-4 py-2"
                    value={form.details}
                    onChange={(e) =>
                      setForm({ ...form, details: e.target.value })
                    }
                  />
                )}

                {(resource === "products" || resource === "equipments") && (
                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                )}

                <div className="flex gap-3 pt-2">
                  <button className="px-6 py-2 rounded-lg bg-blue-600 text-white">
                    {editing ? "Update" : "Create"}
                  </button>

                  {editing && (
                    <button
                      type="button"
                      onClick={() => {
                        setEditing(null);
                        setForm(EMPTY_FORM[resource]);
                      }}
                      className="px-6 py-2 rounded-lg border"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </motion.div>

            {/* ===== GRID ===== */}
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {data.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl border shadow-sm overflow-hidden"
                >
                  {(item.img || item.image) && (
                    <img
                      src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${
                        item.img || item.image
                      }`}
                      className="h-48 w-full object-cover"
                    />
                  )}

                  <div className="p-4">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {item.description}
                    </p>

                    <div className="flex gap-3 mt-4">
                      <button
                        onClick={() => startEdit(item)}
                        className="text-sm border px-3 py-1 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteItem(item.id)}
                        className="text-sm text-red-600 border px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminPanel;
