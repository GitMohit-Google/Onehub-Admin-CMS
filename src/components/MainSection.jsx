import React, { useContext, useEffect } from "react";
import { fetchData, fetchFormData } from "../app/actions/dataAction";
import { useDispatch, useSelector } from "react-redux";
import HomeContext from "../context/Home/HomeContext";

const MainSection = () => {
  const { selectedSection, testingFiles, productionFiles, filterFiles,fileList } =
    useContext(HomeContext);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchFormData("home-page-carousel"));
  }, [dispatch]);

  useEffect(() => {
    filterFiles();
  }, [fileList]);

  const groupTestingFiles = (files) => {
    const groupedFiles = {
      "test-knowledge-centre": [],
      "contest-rewards": [],
      "spaces": [],
      other: [],
    };

    files.forEach((file) => {
      if (file.startsWith("test-knowledge-centre")) {
        groupedFiles["test-knowledge-centre"].push(file);
      } else if (
        file.startsWith("test-chat-rooms") ||
        file.startsWith("test-groups") ||
        file.startsWith("test-users")
      ) {
        groupedFiles["spaces"].push(file);
      }else if(file.startsWith("test-contest")){
        groupedFiles["contest-rewards"].push(file);
      }
      else{
        groupedFiles["other"].push(file);
      }
    });
    return groupedFiles;
  };

  const testFiles = groupTestingFiles(testingFiles);

  return (
    <div className="h-full w-full">
      {selectedSection === "OneHub-Testing" ? (
        <div>
          {/* Knowledge Centre */}
          <h3 className="font-bold text-lg mb-2">Knowledge Centre</h3>
          {testFiles["test-knowledge-centre"].map((file, index) => (
            <p key={index} className="mb-1">
              {file}
            </p>
          ))}

          {/* Spaces */}
          <h3 className="font-bold text-lg mb-2">Spaces</h3>
          {testFiles["spaces"].map((file, index) => (
            <p key={index} className="mb-1">
              {file}
            </p>
          ))}

          {/* Contest and rewards */}
          <h3 className="font-bold text-lg mb-2">Contest and rewards</h3>
          {testFiles["contest-rewards"].map((file, index) => (
            <p key={index} className="mb-1">
              {file}
            </p>
          ))}
          <h3 className="font-bold text-lg mt-4 mb-2">Other Files</h3>
          {testFiles["other"].map((file, index) => (
            <p key={index} className="mb-1">
              {file}
            </p>
          ))}
        </div>
      ) : (
        productionFiles?.map((file, index) => {
          return <p key={index}>{file}</p>;
        })
      )}
    </div>
  );
};

export default MainSection;
