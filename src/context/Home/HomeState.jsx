import React, { useState } from "react";
import HomeContext from "./HomeContext";
import { useSelector } from "react-redux";

const HomeState = ({ children }) => {
  const { fileList } = useSelector((state) => state.data);
  const [testingFiles, setTestingFiles] = useState([]);
  const [productionFiles, setProductionFiles] = useState([]);
  const [selectedSection, setSelectedSection] = useState("OneHub");
  const filterFiles = () => {
    setProductionFiles([]);
    setTestingFiles([]);
   const files = fileList.filter((file)=>{
    if(file.startsWith('test')){
      setTestingFiles((prev)=>[...prev,file]);
    }else{
      setProductionFiles((prev)=>[...prev,file]);
    }
   })
  };
  return (
    <HomeContext.Provider
      value={{
        selectedSection,
        setSelectedSection,
        filterFiles,
        testingFiles,
        productionFiles,
        fileList,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeState;
