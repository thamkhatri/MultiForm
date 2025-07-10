import React, { useState } from 'react';

export default function MultiStepForm() {
  const [confirmed, setConfirmed] = useState(false);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: '',
    addons: []
  });
  const [errors, setErrors] = useState({});
  const [billing, setBilling] = useState('monthly'); // 'monthly' or 'yearly'

  const plans = [
    { id: 'arcade', name: 'Arcade', icon: 'images/icon-arcade.svg', monthly: 9, yearly: 90 },
    { id: 'advanced', name: 'Advanced', icon: 'images/icon-advanced.svg', monthly: 12, yearly: 120 },
    { id: 'pro', name: 'Pro', icon: 'images/icon-pro.svg', monthly: 15, yearly: 150 }
  ];

  const addons = [
    {
      id: 'online-service',
      title: 'Online service',
      description: 'Access to multiplayer games',
      price: 1
    },
    {
      id: 'larger-storage',
      title: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: 2
    },
    {
      id: 'customizable-profile',
      title: 'Customizable Profile',
      description: 'Custom theme on your profile',
      price: 2
    }
  ];

  const validateStep = () => {
    const newErrors = {};

    if (step === 1) {
      // Name: at least 2 letters, letters and spaces only
      if (!formData.name.trim()) {
        newErrors.name = 'This field is required';
      } else if (!/^[A-Za-z\s]{2,}$/.test(formData.name.trim())) {
        newErrors.name = 'Enter a valid name';
      }

      // Email: basic email pattern
      if (!formData.email.trim()) {
        newErrors.email = 'This field is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        newErrors.email = 'Enter a valid email address';
      }

      // Phone: exactly 10 digits
      if (!formData.phone.trim()) {
        newErrors.phone = 'This field is required';
      } else if (!/^\d{10}$/.test(formData.phone.trim())) {
        newErrors.phone = 'Enter a 10-digit phone number';
      }
    } else if (step === 2) {
      if (!formData.plan.trim()) newErrors.plan = 'Please select a plan';
    } else if (step === 3) {
      if (formData.addons.length === 0) newErrors.addons = 'Please select at least one add-on';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;

  };
  const handleNext = () => {
    if (step === 4) {
      setConfirmed(true);
    } else if (validateStep()) {
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
  const toggleAddon = (id) => {
    setFormData((prev) => {
      const isSelected = prev.addons.includes(id);
      return {
        ...prev,
        addons: isSelected
          ? prev.addons.filter((addon) => addon !== id)
          : [...prev.addons, id]
      };
    });
  };


  return (
    <div className="min-h-screen bg-[#f0f6ff] flex items-center justify-center p-8">
      <div className="bg-white h-auto p-6 rounded-2xl shadow-lg flex w-full max-w-5xl overflow-hidden">
        {/* Sidebar */}
        <div className="flex-[1] h-auto p-10 text-white relative flex-col justify-between rounded-l-2xl">

          <img src="/images/bg-sidebar-desktop.svg" alt="Sidebar" className="absolute inset-0 object-cover rounded-l-2xl " />
          <div className="space-y-6 absolute top-0 left-0 p-10 z-10">
            {["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"].map((label, i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step === i + 1 ? 'bg-[#bfe2fd] text-black' : 'border border-white'
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
        <div className="flex-[2] p-10">

          {!confirmed && (<>
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
                      className={`w-full border rounded-md px-4 py-2 ${errors.name ? 'border-red-500' : 'border-gray-300'
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
                      className={`w-full border rounded-md px-4 py-2 ${errors.email ? 'border-red-500' : 'border-gray-300'
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
                      className={`w-full border rounded-md px-4 py-2 ${errors.phone ? 'border-red-500' : 'border-gray-300'
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
                <p className="text-gray-500 mb-8">You have the option of monthly or yearly billing.</p>

                {/* Plan Options */}
                <div className="grid grid-cols-3 gap-4">
                  {plans.map((plan) => {
                    const isSelected = formData.plan === plan.id;
                    const price = billing === 'monthly' ? `$${plan.monthly}/mo` : `$${plan.yearly}/yr`;
                    console.log(plan)

                    return (
                      <div
                        key={plan.id}
                        onClick={() => setFormData({ ...formData, plan: plan.id })}
                        className={`cursor-pointer border rounded-lg p-4 flex flex-col items-start space-y-2 ${isSelected ? 'border-[#483EFF] bg-[#f8f9ff]' : 'border-gray-300'
                          }`}
                      >
                        <img src={plan.icon} alt={`${plan.name} icon`} width={40} height={40} />
                        <div className="font-bold text-[#02295a]">{plan.name}</div>
                        <div className="text-sm text-gray-500">{price}</div>
                      </div>
                    );
                  })}
                </div>




                {/* Billing Toggle */}
                <div className="mt-8 flex justify-center items-center gap-4 bg-[#f8f9ff] py-3 rounded-md">
                  <span className={`${billing === 'monthly' ? 'text-[#02295a] font-bold' : 'text-gray-500'}`}>Monthly</span>
                  <div
                    className="relative w-12 h-6 bg-[#02295a] rounded-full cursor-pointer"
                    onClick={() => setBilling(billing === 'monthly' ? 'yearly' : 'monthly')}
                  >
                    <div
                      className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-300 ${billing === 'yearly' ? 'translate-x-6' : ''
                        }`}
                    />
                  </div>
                  <span className={`${billing === 'yearly' ? 'text-[#02295a] font-bold' : 'text-gray-500'}`}>Yearly</span>
                </div>

                {errors.plan && <p className="text-red-500 text-sm mt-4">{errors.plan}</p>}
              </>
            )}
            {step === 3 && (
              <>
                <h1 className="text-2xl font-bold text-[#02295a] mb-2">Pick add-ons</h1>
                <p className="text-gray-500 mb-8">Add-ons help enhance your gaming experience.</p>

                <div className="space-y-4">
                  {addons.map((addon) => {
                    const isChecked = formData.addons.includes(addon.id);
                    const price = billing === 'monthly' ? `+$${addon.price}/mo` : `+$${addon.price * 10}/yr`;

                    return (
                      <label
                        key={addon.id}
                        className={`flex items-center border rounded-lg p-4 cursor-pointer ${isChecked ? 'border-[#483EFF] bg-[#f8f9ff]' : 'border-gray-300'}`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleAddon(addon.id)}
                          className="mr-4 w-5 h-5 accent-blue-800"
                        />
                        <div className="flex-1">
                          <div className="text-[#02295a] font-medium">{addon.title}</div>
                          <div className="text-gray-500 text-sm">{addon.description}</div>
                        </div>
                        <div className="text-[#483EFF] font-medium">{price}</div>
                      </label>
                    );
                  })}
                </div>
                {errors.addons && <p className="text-red-500 text-sm mt-4">{errors.addons}</p>}

              </>
            )}

            {step === 4 && (
              <>
                <h1 className="text-2xl font-bold text-[#02295a] mb-2">Finishing up</h1>
                <p className="text-gray-500 mb-8">
                  Double-check everything looks OK before confirming.
                </p>

                {/* Summary Box */}
                <div className="bg-[#f8f9ff] rounded-lg p-4 space-y-4">
                  {/* Plan Summary */}
                  <div className="flex justify-between items-center border-b border-gray-300 pb-4">
                    <div>
                      <div className="text-[#02295a] font-medium capitalize">
                        {plans.find((p) => p.id === formData.plan)?.name} ({billing})
                      </div>
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="text-sm text-gray-500 underline hover:text-[#02295a] hover:"
                      >
                        Change
                      </button>
                    </div>
                    <div className="text-[#02295a] font-bold">
                      {billing === 'monthly'
                        ? `$${plans.find((p) => p.id === formData.plan)?.monthly}/mo`
                        : `$${plans.find((p) => p.id === formData.plan)?.yearly}/yr`}
                    </div>
                  </div>

                  {/* Add-ons Summary */}
                  {formData.addons.length > 0 && (
                    <div className="space-y-2">
                      {addons
                        .filter((addon) => formData.addons.includes(addon.id))
                        .map((addon) => (
                          <div key={addon.id} className="flex justify-between items-center">
                            <div className="text-gray-500 text-sm">{addon.title}</div>
                            <div className="text-[#02295a] text-sm font-medium">
                              {billing === 'monthly'
                                ? `+$${addon.price}/mo`
                                : `+$${addon.price * 10}/yr`}
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </div>

                {/* Total */}
                <div className="flex justify-between items-center mt-6 px-4">
                  <div className="text-gray-500 text-sm">
                    Total (per {billing === 'monthly' ? 'month' : 'year'})
                  </div>
                  <div className="text-[#483EFF] font-bold text-lg">
                    {(() => {
                      const planPrice =
                        billing === 'monthly'
                          ? plans.find((p) => p.id === formData.plan)?.monthly || 0
                          : plans.find((p) => p.id === formData.plan)?.yearly || 0;
                      const addonsTotal = formData.addons.reduce((sum, id) => {
                        const addon = addons.find((a) => a.id === id);
                        return sum + (addon ? (billing === 'monthly' ? addon.price : addon.price * 10) : 0);
                      }, 0);
                      return billing === 'monthly'
                        ? `$${planPrice + addonsTotal}/mo`
                        : `$${planPrice + addonsTotal}/yr`;
                    })()}
                  </div>
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
                {step === 4 ? 'Confirm' : 'Next Step'}
              </button>
            </div>
          </>
          )}
          {confirmed && (
            <div className="flex flex-col items-center justify-center text-center space-y-6 py-20">
              <img src="/images/icon-thank-you.svg" alt="Thank you" className="w-16 h-16" />
              <h1 className="text-2xl font-bold text-[#02295a]">Thank you!</h1>
              <p className="text-gray-500 max-w-md">
                Thanks for confirming your subscription! We hope you have fun using our platform.
                If you ever need support, please feel free to email us at
                 support@loremgaming.com
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
