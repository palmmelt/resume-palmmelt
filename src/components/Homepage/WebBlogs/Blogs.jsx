import React from "react";

const Blogs = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 bg-computer bg-fixed bg-cover">
      <div className="bg-[#000000bb] w-[350px] h-[350px] p-5 flex justify-center items-center flex-col">
        <div className="flex mb-6 font-bold text-[calc(100%+2vmin)] px-2 border-b-2 text-white">
          Web<p className="text-[#ff5e00]">Blogs</p>
        </div>
        <div
          className="text-center flex flex-col w-full gap-6 text-white font-bold text-[calc(80%+1.5vmin)]
      "
        >
          <div className="  cursor-pointer hover:text-[#ff5e00] hover:scale-125 duration-300 h-10 flex justify-center items-center">
            <a href="/frontend-blogs"> Front-End Blogs</a>
          </div>
          <div className="  cursor-pointer hover:text-[#ff5e00] hover:scale-125 duration-300 h-10 flex justify-center items-center">
            <a href="/backend-blogs">Back-End Blogs</a>
          </div>
          <div className="  cursor-pointer hover:text-[#ff5e00] hover:scale-125 duration-300 h-10 flex justify-center items-center">
            <a href="/other-blogs">Other Blogs</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
