import React, { useContext } from "react";
import { navList } from "../constants";
import HomeContext from "../context/Home/HomeContext";

const SideNavbar = () => {
  const { selectedSection, setSelectedSection } = useContext(HomeContext);
  return (
    <div className="h-screen bg-[#FCFCFC] w-[22%] flex flex-col">
      {/* Title Onehub Admin */}
      <div className="p-3 py-9 flex flex-row gap-1 items-center justify-center text-xl">
        <p className="font-medium">OneHub</p>
        <p className="font-normal">Admin</p>
      </div>
      <div className="p-3 flex flex-row items-center">
        <p className="w-24 text-gray-600">All Apps</p>
        <div className="h-0.5 w-full bg-gray-200"></div>
      </div>
      <div className="h-full flex flex-col gap-2 pr-4 py-3">
        {navList.map((option, index) => {
          return (
            <div
              onClick={() => setSelectedSection(option)}
              key={index}
              className={`flex flex-row gap-2 items-center cursor-pointer hover:text-googleBlue-500 `}
            >
              {selectedSection === option ? (
                <div className="h-full w-2 rounded-md bg-googleBlue-500"></div>
              ) : (
                <div className="h-full w-2 rounded-md bg-white"></div>
              )}
              <div
                className={`flex flex-row items-center w-full p-2 gap-3 ${
                  selectedSection === option
                    ? "bg-googleBlue-100 text-googleBlue-500 "
                    : ""
                }`}
              >
                <img src="/One-Hub-1.png" alt="Onehub" />
                <p>{option}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideNavbar;
