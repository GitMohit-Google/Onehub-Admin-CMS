import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Home, SignIn } from "./pages";
import HomeState from "./context/Home/HomeState";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./app/actions/authAction";
import { toast } from "react-toastify";

const App = () => {
  const user = useSelector((state)=>state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [user]);

  useEffect(() => {
    const loginSuccess = localStorage.getItem("loginSuccess");
      console.log(loginSuccess);
    if (loginSuccess) {
      toast.success("Login successful!");
      console.log("wokring");
      localStorage.removeItem("loginSuccess");
    }
  }, []);

  useEffect(() => {
    const storedToken = localStorage.getItem("jwtToken");
    if (storedToken) {
      try {
        const token = JSON.parse(storedToken);
        const email = token?.email;
        const password = token?.password;
        if (email && password) {
          dispatch(login( email, password ));
        } else {
          console.log("Token does not contain email or password");
        }
      } catch (error) {
        console.log("Error parsing token from localStorage:", error);
        localStorage.removeItem("jwtToken"); // Optionally remove the corrupted token
      }
    } else {
      console.log("No token found in localStorage");
    }
  }, [dispatch]);

  
  return (
    <div className="overflow-auto font-googleSans h-screen">
      <HomeState>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn/>}/>
        </Routes>
      </HomeState>
    </div>
  );
};

export default App;
