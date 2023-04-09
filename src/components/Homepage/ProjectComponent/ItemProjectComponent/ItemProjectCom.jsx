import React from "react";

const ItemProjectCom = ({data}) => {
  return (
    <div>
      <ul className="m-8 grid gap-12 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] ">
        {data.map((item) => {
          return (
            <li key={item.id}>
              <div className=" shadow-sm shadow-black bg-white ">
                <div className=" max-h-36  ">
                  <img
                    className="w-[100%] object-cover min-h-[80%] object-center border border-black"
                    src={item.img_project}
                    alt=""
                  />
                </div>
                <div className="py-8 p-2 mt-10 text-start ">
                  <div>
                    <h1>
                      {" "}
                      Project:
                      <span className=" text-slate-500">{item.title}</span>
                    </h1>
                    <ol className="mt-4">
                      <li className="mt-2">
                        {" "}
                        Tech used:{" "}
                        <span className=" text-slate-500">{item.tech} </span>
                      </li>
                      <li>
                        <a className="flex justify-center items-center w-full h-10 mt-6 bg-slate-400 text-white hover:text-[#ff5e00] hover:bg-black " href={item.source} target="_blank" rel="noreferrer">Source Code<i className="fa-brands fa-github  ml-3 "></i></a>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemProjectCom;
