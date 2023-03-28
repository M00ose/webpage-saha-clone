import React from "react";
import { Button } from "flowbite-react";

const About = () => {
  return (
    <div className="flex flex-col items-center gap-8 px-6 md:px-0 pt-14">
      <h2>
        Saha gets the cleanest water to the hardest to reach people who need it
        most. We work in rural Northern Region Ghana where we set up
        entrepreneurial women with chlorinating businesses that provide clean
        water that all can afford. To date, we have trained 1,109 women
        entrepreneurs who run 389 clean{" "}
        <span className="text-primary">
          <a href="/what-we-do/water-business">water business</a>
        </span>{" "}
        that serve approximately 127,062 people.
      </h2>
      <Button className="bg-primary w-full hover:bg-offBlack">
        Support Us
      </Button>
    </div>
  );
};

export default About;
