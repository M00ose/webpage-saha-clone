import React from "react";
import Image from "next/image";
import { Button } from "flowbite-react";

import {
  BsFillArrowRightCircleFill,
  BsFillArrowUpRightCircleFill,
} from "react-icons/bs";
import { hero } from "../assets";

const Hero = () => {
  return (
    <div className="relative isolate px-6 pt-14 pb-14 lg:px-8">
      <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 items-center justify-center text-white">
        <div className="px-2 sm:px-0 w-full sm:w-4/5 xl:w-3/5 text-4xl xl:text-5xl text-center font-bold z-20">
          <h1>Getting the Cleanest Water to the Hardest to Reach People.</h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center text-1xl md:text-2xl lg:text-3xl z-20">
          <div className="flex flex-col gap-4 items-center justify-center max-w-[200px]">
            <h6 className="text-center">
              <span className="font-bold">398</span> water businesses
            </h6>
            <Button className="w-fit bg-primary hover:bg-offBlack">
              Learn More <span className="pl-2">&#x2192;</span>
            </Button>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center max-w-[200px]">
            <h6 className="text-center">
              <span className="font-bold">127,062</span> people served
            </h6>
            <Button className="w-fit bg-transparent text-white border-white border-1 border-solid hover:bg-transparent hover:italic">
              See How it Works
              <span className="pl-2">&#9654;</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 h-full w-full overflow-clip">
        <Image
          key="hero-banner"
          src={hero}
          alt="woman carrying water"
          height={700}
          width={1600}
          className="object-cover h-full w-full z-0"
        />
      </div>
      <div className="absolute top-0 left-0 h-full w-full z-10 bg-black opacity-50"></div>
    </div>
  );
};

export default Hero;
