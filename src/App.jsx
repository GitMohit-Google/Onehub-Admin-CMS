import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Home, SignIn } from "./pages";
import HomeState from "./context/Home/HomeState";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state)=>state.auth.user);
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (!user) {
  //     navigate("/signin");
  //   }
  // }, [user]);
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
