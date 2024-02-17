import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";
import axios from "axios";
import { stringify } from "postcss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();

  const handleRegistration = async (e) => {
    e.preventDefault();
    const URL = "http://localhost:8080/api/v1/login";
    const body = {
      email: username,
      password: password,
    };

    console.log(username);
    console.log(password);

    const config={
        headers:{
          "Content-Type":"application/json",
        },
        withCredentials:true,
      }

    try {
      const loginresponse = await axios.post(URL, body, config);
      if (loginresponse.status === 200) {
        console.log(loginresponse);
      }
      const user = {
        userId: loginresponse.data.data.userId,
        username: loginresponse.data.data.username,
        role: loginresponse.data.data.role,
        isAuthenticated: loginresponse.data.dataauthenticated,
        accessExpiration: loginresponse.data.data.accessExpiration,
        refreshExpiration: loginresponse.data.data.refreshExpiration,
      };
      localStorage.setItem("user", JSON.stringify(user));
      setAuth(user);
      console.log(auth.data);
      navigate("/"); // as soon as we click on submit button it will redirect to the otp page
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form>
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <div className="bg-white p-16 w-96 rounded-3xl shadow-md">
          <img src="https://thumbs.dreamstime.com/b/simple-vector-filled-flat-amazon-icon-logo-solid-black-pictogram-isolated-white-background-amazon-logo-159029074.jpg" />
          <h2 className="text-3xl font-bold mb-4 text-center">Sign in</h2>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-bold">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your Username"
              onChange={(event) => setUsername(event.target.value)}
              className="w-full  px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              onChange={(event) => setPassword(event.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <button
            onClick={handleRegistration}
            className=" w-full bg-indigo-500 text-white font-bold py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
          >
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
