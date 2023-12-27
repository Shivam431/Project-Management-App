import React from "react";
import noProject from "../assets/no-projects.png";
import Buttons from "./Buttons";
const NoProjectsSelected = ({onStartAddProject}) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={noProject}
        alt="an empty list"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">select a project or start new one</p>
      <p>
        <Buttons onClick={onStartAddProject}>create new projects</Buttons>
      </p>
    </div>
  );
};

export default NoProjectsSelected;
