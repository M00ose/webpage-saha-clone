import React from "react";
import { Button } from "flowbite-react";

import { toc } from "../constants";

const TOC = () => {
  return (
    <>
      <div className="relative grid grid-rows-4 md:hidden items-center gap-2 px-6 md:px-0 py-14">
        <div className="absolute top-8 left-5 font-serif uppercase text-3xl text-offBlack">
          <h2 className="font-bold text-4xl md:text-5xl xl:text-6xl">
            Theory of Change
          </h2>
        </div>
        {toc.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-4 items-center justify-start bg-primary mx-auto px-4 py-6 h-full rounded-lg shadow-lg md:max-w-xs w-full text-left md:text-center text-white overflow-clip"
          >
            <h3 className="font-bold font-serif text-2xl text-offGrey">
              {item.title}
            </h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <div className="invisible md:visible relative grid grid-cols-4 items-center gap-2 px-6 md:px-0 py-14">
        <div className="absolute top-0 left-5 font-serif uppercase text-3xl text-offBlack z-20">
          <h2 className="font-bold text-4xl md:text-5xl xl:text-6xl">
            Theory of Change
          </h2>
        </div>
        <div className="absolute top-[2px] left-6 font-serif uppercase text-3xl text-offWhite z-10">
          <h2 className="font-bold text-4xl md:text-5xl xl:text-6xl">
            Theory of Change
          </h2>
        </div>
        <div className="absolute top-[2px] left-[25px] font-serif uppercase text-3xl text-offBlack">
          <h2 className="font-bold text-4xl md:text-5xl xl:text-6xl">
            Theory of Change
          </h2>
        </div>
        {toc.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-4 items-center justify-start blueGradient mx-auto px-4 py-6 h-full rounded-lg shadow-lg md:max-w-xs w-full text-left md:text-center text-white overflow-clip"
          >
            <h3 className="font-bold font-serif text-2xl text-offWhite">
              {item.title}
            </h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default TOC;
