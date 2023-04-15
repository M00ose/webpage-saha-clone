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
    <header className="relative isolate px-6 pt-14 pb-14 lg:px-8 font-sans">
      <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 items-center justify-center text-white">
        <div className="px-2 sm:px-0 w-full sm:w-4/5 xl:w-3/5 text-4xl xl:text-5xl text-center font-bold z-20">
          <h1 className="uppercase font-serif tracking-wider">
            Getting the Cleanest Water to the Hardest to Reach People.
          </h1>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center px-2 sm:px-0 w-full sm:w-3/5 xl:w-[50%] text-center z-20">
          <h2 className="z-20">
            We work in rural Northern Region Ghana where we set up
            entrepreneurial women with chlorinating businesses that provide
            clean water that all can afford.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="blueGradient min-w-[120px] hover:bg-offBlack">
              <label htmlFor="join-us">Join Us</label>
            </Button>
            <Button className="bg-transparent border-1 border-solid border-white hover:bg-offBlack min-w-[120px]">
              <label htmlFor="support-us">Support Us</label>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 h-full w-full overflow-clip">
        <Image
          key="hero-banner"
          src={hero}
          alt="Women in rural Ghana carrying water containers on their heads."
          height={700}
          width={1600}
          className="object-cover h-full w-full z-0"
        />
      </div>
      <div className="absolute top-0 left-0 h-full w-full z-10 bg-black opacity-50"></div>
    </header>
  );
};

export default Hero;
