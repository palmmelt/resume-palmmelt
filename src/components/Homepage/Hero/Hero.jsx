import React from "react";
import Typed from "react-typed";
// import { AiOutlineClose } from "react-icons/ai";
// import AOS from "aos";
import "aos/dist/aos.css";
import "./Hero.css";
import swal from "sweetalert";

const Hero = () => {
  // useEffect(() => {
  //   AOS.init();
  // }, []);

  // const [close,setClose] = useState(false);

  // const present =()=>{
  //   setClose(!close)
  // }

  const myGmail = "palmmeltwork@gmail.com";
  const gmailCopy = () => {
    navigator.clipboard.writeText(myGmail);
    swal("You copied contact email.", "palmmeltwork@gmail.com", "success");
  };

  return (
    <div className="flex relative text-white flex-col bg-[#000000] py-10"
    id="home">
      <div className="flex flex-col  text-center px-[calc(40%-50vmin)]">
        <p className="text-[#ff5e00] font-bold p-2 text-[calc(100%+2vmin)]">
          Hello, this site is me.
        </p>
        <h1 className="text-[calc(120%+2vmin)] font bold ">
          You can see how I grow up within <br /> this website. This site is one
          of my creations
        </h1>
        <div className="flex justify-center items-center">
          <p className="text-[calc(120%+2vmin)] font-blod">and another is</p>
          <Typed
            className="text-[calc(120%+2vmin)] font-blod "
            strings={["...", "coming.", "creating."]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="text-[calc(60%+2vmin)] font-bold text-gray-500 mb-6">
          You can know me on this website and can comment.
        </p>
        {/* <AiOutlineClose size={20} 
        className=" absolute right-0 m-1 cursor-pointer hover:text-[#ff5e00] hover:scale-125 duration-300"
        onClick={present}/> */}
      </div>

      <div
        className="absolute flex left-0 right-0 top-auto lg:top-0 lg:left-auto lg:right-[360px] lg:items-start
            bottom-5 justify-center items-center gap-3 lg:rotate-90 z-[20] px-1
            "
      >
        <span className="text-white text-sm font-semibold tracking-widest w-max">
          Contact
        </span>
        <span className="w-12 h-[3px] bg-[#ff5e0086] rounded"></span>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/palmiez"
            className=" text-white hover:scale-110 duration-300 hover:text-[#ff5e00] transition"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-facebook text-sm sm:text-xl mr-3"></i>
          </a>
          <button
            onClick={gmailCopy}
            className="text-[#ff5e00] hover:scale-110 duration-300 hover:text-[#ff5e00] transition"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa-solid fa-envelope text-sm sm:text-xl mr-3 "></i>
          </button>
          <a
            href="https://www.instagram.com/palmmeltz/"
            className="text-white hover:scale-110 duration-300 hover:text-[#ff5e00] transition"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-instagram text-sm sm:text-xl mr-3 "></i>
          </a>
          <a
            href="https://twitter.com/palmmelt_dev"
            className="text-white hover:scale-110 duration-300 hover:text-[#ff5e00] transition"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-twitter text-sm sm:text-xl mr-3 "></i>
          </a>
          <a
            href="https://github.com/palmmelt"
            className="text-white hover:scale-110 duration-300 hover:text-[#ff5e00] transition "
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-github text-sm sm:text-xl mr-3 "></i>
          </a>
        </div>
      </div>

      <ul className="circles z-10">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Hero;
