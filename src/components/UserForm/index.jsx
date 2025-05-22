import React, { useState } from "react";

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const [submittedData, setSubmittedData] = useState({
    name: "",
    email: ""
  });

  const handleInputChange = (e) => {
    const key = e.target.id;
    const value = e.target.value.trim();
    setFormData({ ...formData, [key]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmittedData({ ...formData });
      setFormData({ name: "", email: "" });
    }
  };

  return (
    <div className="border border-gray-500 rounded-2xl w-96 p-2">
      <form onSubmit={onSubmit} className="max-w-xl">
        <h2 className="text-3xl font-semibold">User Form</h2>
        <div className="mb-2">
          <label className="block text-sm font-medium" htmlFor="name">
            Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            maxLength={100}
            className="mt-1 w-full border border-blue-200 rounded-md shadow-sm p-1 focus:border-blue-400 focus:outline-none focus:ring-0"
          />
        </div>

        <div className="mb-2">
          <label className="block text-sm font-medium" htmlFor="email">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            maxLength={300}
            className="mt-1 w-full border border-blue-200 rounded-md shadow-sm p-1 focus:border-blue-400 focus:outline-none focus:ring-0"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-400 text-white cursor-pointer font-semibold rounded-md hover:bg-indigo-700 transition disabled:opacity-50"
        >
          Submit
        </button>

        {submittedData.name && submittedData.email && (
          <div>
            <h3 className="font-semibold">Submitted Data</h3>
            <p>
              <strong>Name: </strong>
              {submittedData.name}
            </p>
            <p>
              <strong>Email: </strong>
              {submittedData.email}
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default UserForm;
