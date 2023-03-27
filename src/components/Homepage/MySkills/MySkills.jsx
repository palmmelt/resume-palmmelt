import React from "react";

const MySkills = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-8 px-5">
      <div
        className="flex mb-6 font-bold text-[calc(100%+2vmin)] px-2 border-b-2 "
        data-aos="zoom-in">
        My<p className="text-[#ff5e00]">Skills</p>
      </div>
      <div className="flex sm:flex-row flex-col gap-10 m-auto ">
        <div className=" border w-52 rounded-xl"
        data-aos="fade-right">
          <div className="text-white rounded-t-xl bg-[#000000] py-2">
            <i class="fa-brands fa-html5  text-[calc(100%+2vmin)]"></i>
            <div className=" text-[calc(40%+2vmin)] ">Front-End </div>
          </div>
          <ul className="flex flex-col gap-2 my-3">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>Tailwind</li>
            <li>Redux</li>
          </ul>
        </div>
        <div className="border w-52 rounded-xl "
        data-aos="fade-up">
          <div className="text-white rounded-t-xl bg-[#000000] py-2">
            <i class="fa-solid fa-code-branch text-[calc(70%+2vmin)]"></i>
            <div className="text-[calc(40%+2vmin)]">Back-End</div>
          </div>
          <ul className="flex flex-col gap-2 my-3">
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>Mongoose</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="border w-52 rounded-xl"
        data-aos="fade-left">
          <div className="text-white rounded-t-xl bg-[#000000] py-2">
            <i class="fa-solid fa-gears text-[calc(60%+2vmin)]"></i>
            <div className="text-[calc(40%+2vmin)] ">Other</div>
          </div>
          <ul className="flex flex-col gap-2 my-3">
            <li>Git</li>
            <li>Github</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
