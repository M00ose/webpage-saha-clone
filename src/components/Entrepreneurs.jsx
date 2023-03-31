import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Carousel } from "flowbite-react";
import { featuredEntrepreneurs } from "@/constants";

const Entrepreneurs = () => {
  return (
    <div className="px-6 md:px-0 py-14">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div>
          <div className="flex flex-col gap-4 items-start">
            <h2 className="font-serif uppercase font-bold text-4xl md:text-5xl xl:text-6xl">
              Water Businesses
            </h2>
            <h6 className="font-normal text-gray-700 dark:text-gray-400">
              Saha Global water entrepreneurs use
              <span className="text-primary"> local</span> products to treat
              contaminated water from their community and make it
              <span className="text-primary"> safe</span> to drink. They then
              sell this water at an
              <span className="text-primary"> affordable</span> price.
            </h6>
            <Link
              href="/what-we-do/water-business"
              className="text-primary hover:italic flex flex-row items-center"
            >
              Learn More about Water Businesses
              <span>
                <svg
                  className="ml-2 -mr-1 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
        <div className="h-80 sm:h-96 xl:h-[28rem] w-full xl:w-[96rem] rounded-lg shadow-xl">
          <Carousel slideInterval={5000}>
            {featuredEntrepreneurs.map((entrepreneur) => (
              <Image
                src={entrepreneur.image}
                alt={entrepreneur.name}
                height={1000}
                width={1000}
                key={entrepreneur.name}
                className="object-cover h-full w-full"
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Entrepreneurs;
