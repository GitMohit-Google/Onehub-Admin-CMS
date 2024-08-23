import React, { useContext, useEffect } from "react";
import { fetchData, fetchFormData } from "../app/actions/dataAction";
import { useDispatch } from "react-redux";
import HomeContext from "../context/Home/HomeContext";
import CustomAccordion from "./CustomAccordion";

const MainSection = () => {
  const { selectedSection, testingFiles, productionFiles, filterFiles, fileList } =
    useContext(HomeContext);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchFormData("home-page-carousel"));
  }, [dispatch]);

  useEffect(() => {
    console.log(fileList);
    filterFiles();
  }, [fileList]);

  const groupProductionFiles = (files) => {
    const groupedFiles = {
      "knowledge-centre": [],
      "contest-rewards": [],
      "homepage": [],
      other: [],
    };

    files.forEach((file) => {
      if (file.startsWith("knowledge-centre")) {
        groupedFiles["knowledge-centre"].push(file);
      } else if (
        file.startsWith("home-page-carousel") ||
        file.startsWith("store-hub-page") ||
        file.startsWith("webview-urls")
      ) {
        groupedFiles["homepage"].push(file);
      } else if (file.startsWith("contest")) {
        groupedFiles["contest-rewards"].push(file);
      } else {
        groupedFiles["other"].push(file);
      }
    });

    return groupedFiles;
  };

  const groupTestingFiles = (files) => {
    const groupedFiles = {
      "test-knowledge-centre": [],
      "contest-rewards": [],
      "spaces": [],
      "homepage": [],
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
      } else if (file.startsWith("test-contest")) {
        groupedFiles["contest-rewards"].push(file);
      } else if (
        file.startsWith("test-store-hub") ||
        file.startsWith("test-home-page") ||
        file.startsWith("test-webview")
      ) {
        groupedFiles["homepage"].push(file);
      } else {
        groupedFiles["other"].push(file);
      }
    });
    return groupedFiles;
  };

  const displayName = (name) => {
    const nameSegments = name.split("-");
    const returnedName = nameSegments.slice(1, nameSegments.length).join("-");
    return returnedName;
  };

  const testFiles = groupTestingFiles(testingFiles);
  const prodFiles = groupProductionFiles(productionFiles);

  const renderFiles = (files) => {
    return files.map((file, index) => (
      <span key={index} className="mb-1">
        {displayName(file)}
      </span>
    ));
  };
  const renderFilesProd = (files) => {
    return files.map((file, index) => (
      <span key={index} className="mb-1">
        {file}
      </span>
    ));
  };

  return (
    <div className="h-full w-full">
      {selectedSection === "OneHub-Testing" ? (
        <div>
          <CustomAccordion title="Knowledge Centre">
            {renderFiles(testFiles["test-knowledge-centre"])}
          </CustomAccordion>

          <CustomAccordion title="Spaces">
            {renderFiles(testFiles["spaces"])}
          </CustomAccordion>

          <CustomAccordion title="Contest and rewards">
            {renderFiles(testFiles["contest-rewards"])}
          </CustomAccordion>

          <CustomAccordion title="Home Page">
            {renderFiles(testFiles["homepage"])}
          </CustomAccordion>

          <CustomAccordion title="Other Files">
            {renderFiles(testFiles["other"])}
          </CustomAccordion>
        </div>
      ) : (
        <div>
          <CustomAccordion title="Knowledge Centre">
            {renderFilesProd(prodFiles["knowledge-centre"])}
          </CustomAccordion>

          <CustomAccordion title="Home Page">
            {renderFilesProd(prodFiles["homepage"])}
          </CustomAccordion>

          <CustomAccordion title="Contest and rewards">
            {renderFilesProd(prodFiles["contest-rewards"])}
          </CustomAccordion>

          <CustomAccordion title="Other">
            {renderFilesProd(prodFiles["other"])}
          </CustomAccordion>
        </div>
      )}
    </div>
  );
};

export default MainSection;
