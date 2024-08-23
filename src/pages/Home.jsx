import React from "react";
import { MainSection, NavigationBar, SideNavbar } from "../components";

const Home = () => {
  return (
    <div className="flex flex-row">
      <SideNavbar />
      <div className="flex flex-col w-full h-screen">
        <NavigationBar />
        <div className="flex h-full w-full overflow-auto bg-[#F9F9F9]">
          <MainSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
