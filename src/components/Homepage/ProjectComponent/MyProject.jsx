import React from "react";
import ItemProjectCom from "./ItemProjectComponent/ItemProjectCom";
import {projectItem}  from "../ProjectComponent/ItemProjectComponent/projectItem"

const MyProject = () => {
  return (
    <div
      className="border-y bg-slate-100 flex flex-col items-center justify-center text-center py-8 px-5
    "
      id="project"
    >
      <div
        className="flex mb-6 font-bold px-2 border-b-2 text-[calc(100%+2vmin)]"
        data-aos="zoom-in"
      >
        My<p className="text-[#ff5e00] ">Project</p>
      </div>
      <div
        className="w-[96%] max-w-[1140px] m-auto py-1"
        data-aos="zoom-out"
      >
        <div className="flex justify-center items-center my-10 ">
          <ItemProjectCom data={projectItem}/>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
