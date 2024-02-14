
  import React, { useState } from 'react'
  
    const Register=(role) =>{
      const[username,setUsername]=useState("");
      const[password,setPassword]=useState("");

      const respond=(event) =>{
        event.preventDefault();
        console.log(username);
        console.log(password);
        console.log(role);
      }
  
    return (
      

<div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-pink-400 p-16 w-96 rounded-3xl shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-center">User Registration</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">Username</label>
          <input
            type="text"
            id="username"
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Enter your Username"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <button className="w-full bg-white to-green-600ext-white font-bold py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">
          Register
        </button>
      </div>
    </div>
      
    )
  }
  
  export default Register
  
    
  
 






{/* <div>
       <input
          type='text'
          placeholder='enter your password'
          onChange={(event) => setUsername(event.target.value)}
          className='px-2 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-70 ml-40' // Added 'w-full' to make the input full width
        />

<input
          type='text'
          placeholder='enter your password'
          onChange={(event) => setPassword(event.target.value)}
          className='px-2 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-70 ml-40' // Added 'w-full' to make the input full width
        />

        <button onClick={respond}></button>
    </div> */}
