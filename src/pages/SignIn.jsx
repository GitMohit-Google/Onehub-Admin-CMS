// src/Pages/SignIn.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../app/actions/authAction";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const token = dispatch(login( email, password ));
      if(typeof token === "object") toast.success("Logged In succesfully");
      if (token) {
        const object = {
          email: email,
          password: password,
        };
        localStorage.setItem("jwtToken", JSON.stringify(object));
        localStorage.setItem("loginSuccess", true);
      }
    } catch (error) {
      toast.error(error.message || "Login failed: User does not exist or incorrect password");
    }
  };

  // Check if user is already authenticated, then redirect
  const isUser = useSelector((state) => state.auth.user);
  if (isUser) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex items-center justify-center h-screen bg-[#FCFCFC]">
      <ToastContainer />
      <div className="flex bg-white shadow-lg rounded-3xl w-[70%] h-[60%] flex-row">
        <div className="flex h-full justify-center items-center w-[60%] px-16">
          <div className="flex flex-col gap-10 w-full">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 items-center">
                <img src="/Google Logo.png" alt="Google Logo" className="h-8 w-8" />
                <p className="text-3xl font-medium">Sign In</p>
              </div>
              <p className="text-base">Login in to OneHub-CMS</p>
            </div>
            <form onSubmit={handleSignIn}>
              <div className="mb-6">
                <input
                  className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <input
                  className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline "
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex h-full justify-center items-center pr-3">
          <img src="/LoginAsset.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
