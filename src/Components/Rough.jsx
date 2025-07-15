import React from 'react'


const Rough = () => {
  return (
    <div className='min-h-screen flex flex-col static'>
      {/* <div className='bg-purple-500 ' >
        this is 1 st div
        <img src="/images/react.svg" alt="" />
      </div>
      <div className='bg-pink-500 relative'>
     <div className='bg-yellow-500'>
        this is 2   frist child 
     </div>
     <div className='bg-green-500'>
        this 2 sencond child
     </div>
      </div> */}
      {/* <div class="relative w-64 h-40 bg-blue-100 rounded-lg shadow-md p-4">
  <h2 class="text-xl font-bold">Notification</h2>
  <p class="text-gray-600 mt-2">You have a new message.</p>

  {/* <!-- Badge --> */}
  {/* <span class="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
    New
  </span>
</div> */}
<div class="min-h-screen flex flex-col md:flex-row ">
  {/* <!-- Image + Overlay Text (Left) --> */}
  <div class="relative w-full md:w-1/3 h-64 md:h-auto">
    <img
      src="/images/bg-sidebar-desktop.svg"
      alt="Background"
      class="w-full h-full object-cover"
    />
    <div class="absolute inset-0  bg-opacity-50 flex items-center justify-center">
      <h2 class="text-white text-2xl font-bold px-4 text-center">
        Welcome to the Registration Form
      </h2>
    </div>
  </div>

  {/* <!-- Form Section (Right) --> */}
  <div class="w-full md:w-2/3 flex items-center justify-center p-6">
    <form class="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
      <h3 class="text-xl font-semibold mb-6 text-center">Fill Your Details</h3>

      <div class="mb-4">
        <label class="block text-gray-700 mb-1">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 mb-1">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div class="mb-6">
        <label class="block text-gray-700 mb-1">Phone</label>
        <input
          type="tel"
          placeholder="Enter your phone number"
          class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
      >
        Confirm
      </button>
    </form>
  </div>
</div>


    // </div>
  )
}

export default Rough