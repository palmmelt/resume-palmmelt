import React from "react";
import Titl from "react-parallax-tilt";

const Me = () => {
  return (
    <div className="  bg-[#000000] items-center text-center border-y-2 border-slate-700 py-8 px-5 "
    id="about">
      <p
        className="text-[#ff5e00] uppercase mb-6 font-bold text-[calc(80%+1.5vmin)]"
        data-aos="zoom-in"
      >
        About me
      </p>
      <div
        className="flex-col-reverse gap-x-24 md:flex-row  flex justify-center gap-5  items-center text-center md:text-start
      "
      >
        <div className="border-b rounded-b-lg py-4" data-aos="fade-right">
          <h1 className=" text-white bg-gradient-to-r px-5 rounded-t-xl from-orange-700 to-orange-900 font-bold text-[calc(60%+2vmin)]">
            Front-End React Developer
          </h1>
          <p className="text-white px-1">
            Hi, my name's <p className="text-[#ff5e00]">Narongchai wichaiya</p>{" "}
            I'm a front-end react developer based <br />
            in Bangkok, Thailand.
          </p>
        </div>

        <div className="" data-aos="fade-left">
          <Titl>
            <div className=" rounded-md w-[20vh] h-[20vh] justify-center items-center flex bg-[#ff5e007a] shadow-2xl hover:scale-105 duration-300 ">
            <img
              className="w-[15vh] rounded-md "
              src={process.env.PUBLIC_URL + "Untitled-1.png"}
              alt=""
            />
            </div>
          </Titl>
        </div>
      </div>
    </div>
  );
};

export default Me;
