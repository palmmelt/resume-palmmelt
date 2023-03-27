import React, { useState } from "react";
import swal from "sweetalert";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  //NavBar-Toggle
  const [toggleBar, setToggleBar] = useState(true);

  const handleNav = () => {
    setToggleBar(!toggleBar);
  };

  //Accordion-Contact after toggle
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  // contact social
  const myGmail = "palmmeltwork@gmail.com";
  const gmailCopy = () => {
    navigator.clipboard.writeText(myGmail);
    swal("You copied contact email.", "palmmeltwork@gmail.com", "success");
  };

  return (
    <nav
      className="flex z-50 justify-between items-center w-full h-14 shadow-black shadow-sm
     px-4 md:px-[calc(30%-18vmin)] py-1 text-white bg-[#000000fa] sticky top-0"
    >
      <div className="">
        <h1 className="text-[calc(120%+0.8vmin)] text-[#ff5e00]">
          <a href="/">
            PALMMELT
            <i className="fa-solid fa-code" />
          </a>
        </h1>
      </div>
      <ul className="hidden md:flex flex-row gap-6 text-[calc(70%+0.8vmin)] ">
        <li className="cursor-pointer hover:text-[#ff5e00] hover:scale-125 duration-300">
          <a href="/#home">Home</a>
        </li>
        <li className="cursor-pointer hover:text-[#ff5e00] hover:scale-125 duration-300">
          <a href="/#about">About Me</a>
        </li>
        <li className="cursor-pointer hover:text-[#ff5e00] hover:scale-125 duration-300">
          <a href="/#project">Project</a>
        </li>
        {/* <li className="cursor-pointer hover:text-[#ff5e00] hover:scale-125 duration-300">
          <a href="/">Contact</a>
        </li> */}
      </ul>
      <div
        onClick={handleNav}
        className={!!toggleBar
        ? "md:hidden hover:text-[#ff5e00] hover:scale-105 duration-300"
        : "text-[#ff5e00]"}
      >
        {!toggleBar ? (
          <AiOutlineClose size={25} className="cursor-pointer" />
        ) : (
          <AiOutlineMenu size={25} className="cursor-pointer  " />
        )}
      </div>
      <div
        className={
          !toggleBar
            ? "fixed left-0 top-14 w-[60%] h-full border-r border-r-gray-900 bg-[#000000ee] ease-in-out peer:transition duration-300"
            : "fixed left-[-300%]"
        }
      >
        <ul className="uppercase  text-white">
          <li className="px-5 mt-10 border-b border-gray-600 cursor-pointer hover:text-[#ff5e00] hover:scale-y-125 duration-300 ">
            <a href="/#home">Home</a>
          </li>
          <li className="px-5 mt-10 border-b border-gray-600 cursor-pointer hover:text-[#ff5e00] hover:scale-y-125 duration-300 ">
            <a href="/#about">About Me</a>
          </li>
          <li className="px-5 mt-10 border-b border-gray-600 cursor-pointer hover:text-[#ff5e00] hover:scale-y-125 duration-300 ">
            <a href="/#project">Project</a>
          </li>
          {/* <li className='px-5 mt-10 border-b border-gray-600 cursor-pointer hover:text-[#ff5e00] hover:scale-105 duration-300' onClick={toggleAccordion} ><a href='#contact'>Contact</a></li> */}
          <div
            className={`flex mt-10 items-center justify-between px-5  border-b border-gray-600 cursor-pointer hover:text-[#ff5e00] hover:scale-y-125 duration-300 select-none
                            ${isOpen ? "text-[#ff5e00] hover:scale-y-125" : ""}
                            `}
            onMouseOver={toggleAccordion}
          >
            <h2 className="text-lg font-medium">CONTACT</h2>
            <svg
              className={`w-6 h-6 ${isOpen ? "transform rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {isOpen && (
            <div className="flex flex-col gap-3  justify-center mt-3 ml-5 ">
              <a
                href="https://www.facebook.com/palmiez"
                target="_blank"
                rel="noreferrer"
                className="flex items-center hover:text-orange-800  p-2 hover:bg-[#f0a5792f] "
              >
                <i className="fa-brands fa-square-facebook  mr-3 "></i>
                Facebook
              </a>
              <a
                href="#coppygmail"
                className="flex items-center hover:text-orange-800  p-2 hover:bg-[#f0a5792f] "
                onClick={gmailCopy}
              >
                <i className="fa-solid fa-envelope  mr-2 "></i>
                Gmail : Coppy
              </a>
              <a
                href="https://www.instagram.com/palmmeltz/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center hover:text-orange-800  p-2 hover:bg-[#f0a5792f] "
              >
                <i className="fa-brands fa-instagram  mr-3 "></i>
                Instagram
              </a>
              <a
                href="https://twitter.com/palmmelt_dev"
                target="_blank"
                rel="noreferrer"
                className="flex items-center  hover:text-orange-800  p-2 hover:bg-[#f0a5792f] "
              >
                <i className="fa-brands fa-twitter  mr-2 "></i>
                Twitter
              </a>
              <a
                href="https://github.com/palmmelt"
                target="_blank"
                rel="noreferrer"
                className="flex items-center  hover:text-orange-800  p-2 hover:bg-[#f0a5792f] "
              >
                <i className="fa-brands fa-github  mr-2 "></i>
                Github
              </a>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
