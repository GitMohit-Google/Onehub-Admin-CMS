import React, { useContext } from "react";
import { IoIosSearch } from "react-icons/io";
import { BsQuestionCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import HomeContext from "../context/Home/HomeContext";

const NavigationBar = () => {
  const {selectedSection, setSelectedSection} = useContext(HomeContext);
  const firstLetter = "M";
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
          <div className="relative w-10 h-10">
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
        </div>
      </div>

      {/* Path */}
      <div
        className="px-10 pb-3 text-[#5A5A5A]"
      >
        {selectedSection} / Content Management
      </div>
    </div>
  );
};

export default NavigationBar;
