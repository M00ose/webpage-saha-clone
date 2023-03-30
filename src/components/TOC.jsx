import React from "react";
import { Button } from "flowbite-react";

import { toc } from "../constants";

const TOC = () => {
  return (
    <div className="relative grid grid-cols-4 items-center gap-2 px-6 md:px-0 py-14">
      <div className="absolute top-10 left-5 font-serif uppercase text-3xl text-primary">
        <h1 className="font-bold">Theory of Change</h1>
      </div>
      {toc.map((item) => (
        <div
          key={item.title}
          className="flex flex-col gap-4 items-center justify-start bg-blue-200 mx-auto px-2 py-6 min-h-[300px] rounded-lg shadow-lg h-fit max-w-xs w-full text-left md:text-center"
        >
          <h3 className="font-bold font-serif text-lg">{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default TOC;
