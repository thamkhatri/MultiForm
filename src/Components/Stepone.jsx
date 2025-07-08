import React, { useState } from 'react';


export default function FormStep1() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'This field is required';
    if (!formData.email.trim()) newErrors.email = 'This field is required';
    if (!formData.phone.trim()) newErrors.phone = 'This field is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      alert("Step 1 valid — proceed to next step");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // clear error on change
  };

  return (
    <div className="min-h-screen bg-[#f0f6ff] flex items-center justify-center p-8">
      <div className="bg-white h-160 p-6 rounded-2xl shadow-lg flex w-full max-w-5xl overflow-hidden">
        {/* Sidebar */}
        <div className="w-1/3 p-6  text-white p-6 relative flex-col justify-between rounded-l-2xl ">
        <img src="/images/bg-sidebar-desktop.svg" alt="Description"/>
          <div className="space-y-6  absolute top-0 left-0 p-10">
            {["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"].map((step, i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                  i === 0 ? 'bg-[#bfe2fd] text-black' : 'border border-white'
                }`}>
                  {i + 1}
                </div>
                <div>
                  <p className="text-xs uppercase text-white opacity-70">Step {i + 1}</p>
                  <p className="font-bold uppercase">{step}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="h-24 w-full rounded-b-2xl  bg-no-repeat bg-cover" />
        </div>

        {/* Form Panel */}
        <div className="w-2/3 p-10">
          <h1 className="text-2xl font-bold text-[#02295a] mb-2">Personal info</h1>
          <p className="text-gray-500 mb-8">
            Please provide your name, email address, and phone number.
          </p>

          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-[#02295a] mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Vanessa Mint"
                className={`w-full border rounded-md px-4 py-2 focus:outline-none ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-[#02295a] mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. vanessamint@"
                className={`w-full border rounded-md px-4 py-2 focus:outline-none ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-medium text-[#02295a] mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +1 234 567 890"
                className={`w-full border rounded-md px-4 py-2 focus:outline-none ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-end mt-8">
            <button
              onClick={handleNext}
              className="bg-[#02295a] hover:bg-[#1c3d7a] text-white px-6 py-2 rounded-md transition"
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
