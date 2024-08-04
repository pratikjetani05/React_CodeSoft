
import React, { useState } from "react";
import axios from "axios";

const Apply = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resume, setResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("resume", resume);
    formData.append("coverLetter", coverLetter);

    try {
      const response = await axios.post("http://localhost:3000/apply", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        alert("Application submitted successfully!");
      }
    } catch (error) {
      console.error("There was an error submitting the form!", error);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <div className="apply-now max-w-md mx-auto p-4 mt-10 bg-gray-200 rounded-lg shadow-md" id="apply">
      <h1 className="text-lg font-bold mb-4 text-center">Apply Now</h1>
      <form onSubmit={handleSubmit} className="p-5">
        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input
            type="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-bold mb-2">Phone:</label>
          <input
            type="tel"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Your Phone Number"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-bold mb-2">Resume:</label>
          <input
            type="file"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setResume(e.target.files[0])}
            accept=".pdf,.doc,.docx"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-bold mb-2">Cover Letter:</label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            
            onChange={(e) => setCoverLetter(e.target.value)}
            placeholder="Your Cover Letter"
            rows="4"
            
          />
        </div>
        <div className="mb-5 text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Apply Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Apply;
