
  import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

  
    const Register=({role}) =>{
      const[username,setUsername]=useState("");
      const[password,setPassword]=useState("");
      const navigate=useNavigate();// as soon as we click on submit button it will redirect to the otp page

      const valueEmail=sessionStorage.setItem("email",username);
      // if(valueEmail==null);
      // {
      //   navigate("/");
      // }

      const handleRegistration= async(event) =>{
        event.preventDefault();
        // axios -> helps to send the cross origin requests.command to install the axios using terminal "npm install axios"
        //fire request  to the server using axios
        
        const URL="http://localhost:8080/api/v1/register";
      const body={
                email:username,
                password:password,
                userRole:role
              } 

              console.log(username);
              console.log(password);
              console.log(role);


              const config={
                headers:{
                  "Content-Type":"application/json",
                },
                withCredentials:true,
              }

              try {
                const response = await axios.post(URL,body,config);
                console.log(response);
               sessionStorage.setItem("email",username);
                navigate("/verify-otp")// as soon as we click on submit button it will redirect to the otp page
                //sessionStorage.removeItem(email);
              } catch (error) {
                console.log(error);
              }
        
      }
  
    return (
     <form> 
<div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-16 w-96 rounded-3xl shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-center">User Registration</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-bold">Username</label>
          <input
            type="text"
            id="username"
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Enter your Username"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-bold">Password</label>
          <input
            type="password"
            id="password"
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <button 
        onClick={handleRegistration}
        className="w-full bg-indigo-500 text-white font-bold py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">
          Register
        </button>
      </div>
    </div>
    </form>
      
    )
  }
  
  export default Register
  
    
  
 






