import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import HomeState from "./context/Home/HomeState";

const App = () => {
  return (
    <div className="overflow-auto font-googleSans h-screen">
      <HomeState>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HomeState>
    </div>
  );
};

export default App;
