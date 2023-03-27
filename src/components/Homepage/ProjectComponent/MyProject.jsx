import React from "react";

const MyProject = () => {
  return (
    <div
      className="border-y bg-slate-100 flex flex-col items-center justify-center text-center py-8 px-5
    " id="project"
    >
      <div
        className="flex mb-6 font-bold px-2 border-b-2 text-[calc(100%+2vmin)]"
        data-aos="zoom-in"
      >
        My<p className="text-[#ff5e00] ">Project</p>
      </div>
      <div data-aos="zoom-out">None</div>
    </div>
  );
};

export default MyProject;
