import React, { useContext, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { BsQuestionCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import HomeContext from "../context/Home/HomeContext";
import { useSelector } from "react-redux";
import { FaCaretDown } from "react-icons/fa";

const NavigationBar = () => {
  const { selectedSection, setSelectedSection } = useContext(HomeContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const firstLetter = "M";
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleSignOut = () => {
    localStorage.removeItem("jwtToken");
    // dispatch(logout())
  };
  return (
    <div className="flex flex-col border-b-2 border-b-gray-200">
      {/* Serach bar and profile action*/}
      <div className="flex flex-row py-8 px-6 items-center justify-between">
        {/* Search Bar */}
        <div className="search p-3 px-4 flex flex-row items-center gap-4 bg-[#F6F6F6] rounded-md w-[60%]">
          <IoIosSearch className="text-xl text-gray-700" />
          <input
            type="text"
            name="search"
            id=""
            className="bg-transparent outline-none w-full"
            placeholder="Search for App, User or setting..."
          />
        </div>

        {/* Actions */}
        <div className="flex flex-row items-center gap-5">
          <BsQuestionCircleFill className="text-xl text-gray-600" />
          <motion.div className="p-2 bg-[#DEDEDE] text-white rounded-md px-6">
            Push Changes
          </motion.div>
          <div
            className="flex items-center cursor-pointer relative"
            onClick={toggleDropdown}
          >
            {/* Profile Picture and Initial */}
            <div className="relative w-8 h-8">
              <img
                src="/Profile.png"
                alt="User"
                className="w-full h-full rounded-full"
              />
              {firstLetter && (
                <div className="absolute inset-0 flex items-center justify-center font-bold text-blue-500 bg-opacity-75 rounded-full">
                  {firstLetter}
                </div>
              )}
            </div>
            <FaCaretDown
              className={`w-4 h-4 ml-2 text-googleBlue-500 transition-transform duration-300 ${
                isDropdownOpen ? "rotate-180" : "rotate-0"
              }`}
            />
            {isDropdownOpen && (
              <div className="absolute top-full mt-2 right-0 min-w-max bg-white border border-gray-300 shadow-lg rounded-lg">
                <div className="p-4 flex items-center justify-center">
                  <p className="text-lg">Hello, {user?.full_name}</p>
                  <p className="text-sm text-gray-600 ml-2">
                    {user?.user_type}
                  </p>
                </div>
                <div
                  onClick={handleSignOut}
                  className="px-4 flex items-center justify-start pb-4 cursor-pointer hover:text-blue-500"
                >
                  Signout
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Path */}
      <div className="px-10 pb-3 text-[#5A5A5A]">
        {selectedSection} / Content Management
      </div>
    </div>
  );
};

export default NavigationBar;
