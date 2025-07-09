import React from 'react'

const Practice = () => {
    return (
        <><div className="flex w-full h-screen">
  {/* Left 1/3 with image and overlay content */}
  <div className="w-1/3 relative bg-[url('/path/to/image.jpg')] bg-cover bg-center">
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="text-white text-center px-4">
        <h1 className="text-3xl font-bold mb-2">Welcome!</h1>
        <p className="text-sm">Join us to get the best experience.</p>
      </div>
    </div>
  </div>

  {/* Right 2/3 with input form */}
  <div className="w-2/3 bg-white flex items-center justify-center">
    <form className="w-full max-w-md space-y-4 p-8">
      <h2 className="text-2xl font-semibold text-gray-800">Sign Up</h2>

      <div>
        <label className="block text-gray-600 mb-1">Name</label>
        <input 
          type="text" 
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label className="block text-gray-600 mb-1">Email</label>
        <input 
          type="email" 
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label className="block text-gray-600 mb-1">Password</label>
        <input 
          type="password" 
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter password"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Register
      </button>
    </form>
  </div>
</div>

        </>
    )
}

export default Practice