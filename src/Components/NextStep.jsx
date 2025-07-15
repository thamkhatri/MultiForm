import React, { useState } from 'react';

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: ''
  });
  const [errors, setErrors] = useState({});

  const validateStep = () => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = 'This field is required';
      if (!formData.email.trim()) newErrors.email = 'This field is required';
      if (!formData.phone.trim()) newErrors.phone = 'This field is required';
    } else if (step === 2) {
      if (!formData.plan.trim()) newErrors.plan = 'Please select a plan';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  return (
    <div className="min-h-screen bg-[#f0f6ff] flex items-center justify-center p-8">
      <div className="bg-white h-auto p-6 rounded-2xl shadow-lg flex w-full max-w-5xl overflow-hidden">
        {/* Sidebar */}
        <div className="w-1/3 p-6 bg-white text-white relative flex-col justify-between rounded-l-2xl">
          <img src="/images/bg-sidebar-desktop.svg" alt="Sidebar" className="absolute inset-0 object-cover rounded-l-2xl" />
          <div className="space-y-6 absolute top-0 left-0 p-10 z-10">
            {["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"].map((label, i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                  step === i + 1 ? 'bg-[#bfe2fd] text-black' : 'border border-white'
                }`}>
                  {i + 1}
                </div>
                <div>
                  <p className="text-xs uppercase text-white opacity-70">Step {i + 1}</p>
                  <p className="font-bold uppercase text-white">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="w-2/3 p-10">
          {step === 1 && (
            <>
              <h1 className="text-2xl font-bold text-[#02295a] mb-2">Personal info</h1>
              <p className="text-gray-500 mb-8">Please provide your name, email address, and phone number.</p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#02295a] mb-1">Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Vanessa Mint"
                    className={`w-full border rounded-md px-4 py-2 ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#02295a] mb-1">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. vanessa@example.com"
                    className={`w-full border rounded-md px-4 py-2 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#02295a] mb-1">Phone</label>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +1 234 567 890"
                    className={`w-full border rounded-md px-4 py-2 ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h1 className="text-2xl font-bold text-[#02295a] mb-2">Select your plan</h1>
              <p className="text-gray-500 mb-8">You can choose between monthly or yearly billing.</p>

              <div className="space-y-4">
                <label className="block">
                  <input
                    type="radio"
                    name="plan"
                    value="basic"
                    onChange={handleChange}
                    checked={formData.plan === 'basic'}
                    className="mr-2"
                  />
                  Basic Plan
                </label>
                <label className="block">
                  <input
                    type="radio"
                    name="plan"
                    value="pro"
                    onChange={handleChange}
                    checked={formData.plan === 'pro'}
                    className="mr-2"
                  />
                  Pro Plan
                </label>
                {errors.plan && <p className="text-red-500 text-sm">{errors.plan}</p>}
              </div>
            </>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-10">
            {step > 1 && (
              <button onClick={handleBack} className="text-gray-500 hover:text-black font-medium">
                Go Back
              </button>
            )}
            <button
              onClick={handleNext}
              className="ml-auto bg-[#02295a] hover:bg-[#1c3d7a] text-white px-6 py-2 rounded-md"
            >
              {step === 4 ? 'Submit' : 'Next Step'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
