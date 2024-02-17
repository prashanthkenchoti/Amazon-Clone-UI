
import axios from 'axios';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const VerifyOTP = () => {
  const[otp, setOTP]= useState("");

  const handleOTP= async(event) =>{
    event.preventDefault();

    const URL="http://localhost:8080/api/v1/verify-otp";
    const body={
      email:sessionStorage.getItem('email'),
     otp:otp
    } 
    const header={
      headers:{
        "Content-Type":"application/json",
      },
      withCredentials:true
    }

    try {
      const otpResponse = await axios.post(URL,body,header);
      console.log(otpResponse);
      sessionStorage.setItem("email",email);
      navigate("/verify-otp")// as soon as we click on submit button it will redirect to the otp page
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <form>
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-16 w-96 rounded-3xl shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-center">Verify OTP</h2>
        <div className="mb-6">
          <input onChange={(event)=>setOTP(event.target.value)}
            type="text"
            id="otp"
            placeholder="Enter OTP here"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <button 
        onClick={handleOTP}
        className="w-full bg-yellow-500 text-white font-bold py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600">
          Submit 
        </button>
      </div>
    </div>
    </form>
  );
}

export default VerifyOTP;
