
import React from 'react';

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-orange-400 p-16 w-96 rounded-3xl shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-center">Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your Username"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <button className="w-full bg-indigo-500 text-white font-bold py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;

