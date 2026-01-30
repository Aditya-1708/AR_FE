import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../axios";

function ApplicationForm() {
  const [submissionStatus, setSubmissionStatus] = useState("idle");
  const { jobId } = useParams();
  const [title, setTitle] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    jobRole: "",
    statement: "",
    resume: null,
  });

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axiosInstance.get(`/openings/${jobId}`);
        setTitle(res.data.title);
      } catch (error) {
        console.error("Failed to fetch job:", error);
      }
    };

    if (jobId) fetchJob();
  }, [jobId]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus("loading");

    try {
      const form = new FormData();

      form.append("jobId", jobId); // ✅ FIXED
      form.append("fullName", formData.name);
      form.append("email", formData.email);
      form.append("phoneNo", formData.phone);
      form.append("wswhy", formData.statement || "");
      form.append("resume", formData.resume);

      await axiosInstance.post("/applications", form);

      setSubmissionStatus("success");

      setFormData({
        name: "",
        email: "",
        phone: "",
        statement: "",
        resume: null,
      });

      document
        .getElementById("application-form")
        ?.scrollIntoView({ behavior: "smooth" });
    } catch (err) {
      console.error(err);
      setSubmissionStatus("error");
    }
  };

  return (
    <div className="min-h-screen pt-0 bg-gray-50 flex flex-col font-sans">
      <section
        id="application-form"
        className="py-16 flex justify-center items-start bg-gray-50"
      >
        <div className="w-full max-w-3xl px-4">
          <div className="bg-white shadow-xl p-8 rounded-2xl">
            {/* Header */}
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-black mb-2">
                Apply for {title}
              </h2>

              <p className="text-sm text-gray-600 mb-8 text-center">
                Please fill in the details below. Our HR team will review your
                application and contact you if your profile matches our
                requirements.
              </p>
            </div>
            <h2 className="text-2xl font-bold text-black">Apply for {title}</h2>
            {/* Status Messages */}
            {submissionStatus === "loading" && (
              <div className="mb-6 rounded-lg bg-yellow-100 px-4 py-3 text-sm font-medium text-yellow-700">
                Processing your application…
              </div>
            )}

            {submissionStatus === "success" && (
              <div className="mb-6 rounded-lg bg-green-100 px-4 py-3 text-sm font-medium text-green-700">
                Application submitted successfully. We’ll be in touch soon.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6 text-black">
              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-5">
                <Input
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  required
                />

                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  required
                />
              </div>

              {/* Phone */}
              <Input
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
              />

              {/* Statement */}
              <Textarea
                label="Why should we hire you?"
                name="statement"
                value={formData.statement}
                onChange={handleChange}
                placeholder="Briefly describe your skills and experience relevant to this role."
              />

              {/* Resume */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload Resume
                </label>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm
              file:mr-3 file:rounded-md file:border-0 file:bg-indigo-600
              file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white
              hover:file:bg-indigo-700"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Accepted formats: PDF, DOC, DOCX
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submissionStatus === "loading"}
                className={`w-full rounded-lg py-3 text-sm font-semibold text-white transition ${
                  submissionStatus === "loading"
                    ? "cursor-not-allowed bg-gray-400"
                    : "bg-indigo-600 hover:bg-indigo-700"
                }`}
              >
                {submissionStatus === "loading"
                  ? "Submitting…"
                  : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- Reusable Components ---------- */

const Input = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
}) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-1">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full border px-4 py-3 rounded-lg"
    />
  </div>
);

const Textarea = ({ label, name, value, onChange, placeholder }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-1">
      {label}
    </label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={4}
      className="w-full border px-4 py-3 rounded-lg"
    />
  </div>
);

export default ApplicationForm;
