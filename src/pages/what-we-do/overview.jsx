import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Nav, Footer, SideMenu } from "../../components";
import { Press, Approach, Sustainability, WaterBusiness } from "./index";
import styles from "@/styles";
import coverPhoto from "../../assets/overviewCover.jpg";

const Overview = () => {
  const [active, setActive] = useState("");

  return (
    <main className="flex flex-col items-center justify-start min-h-screen w-screen font-sans overflow-hidden">
      <div className="w-full xs:w-4/5 max-w-screen xl:max-w-[1024px]">
        <Nav />
        <div className="py-12 flex flex-row gap-8">
          <div className="h-full w-[200px]">
            <ul className="list-none flex flex-col">
              {[
                "Overview",
                "Our Approach",
                "Water Business",
                "Sustainability",
                "In the Press",
              ].map((item) => (
                <li
                  key={item}
                  className={`font-bold p-2 hover:text-offGrey ${
                    active === item ? "text-primary" : "text-black"
                  } cursor-pointer`}
                  onClick={() => setActive(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <div className={`${active === "Overview" ? "visible" : "hidden"}`}>
              <div className="flex flex-col gap-4">
                <h2 className={styles.header2}>
                  The Water Crisis in Northern Region Ghana
                </h2>
                <p>
                  Over 800,000 people in Ghana’s Northern Region lack access to
                  safe drinking water. Most of the region lies within the
                  tropical savanna belt that experiences long dry spells
                  followed by hard seasonal rains. There are only a few
                  year-round streams and groundwater is inaccessible. Rural
                  villages rely on rainwater runoff that collects in big,
                  stagnant ponds called “dugouts” during the rainy season. But
                  the water in these dugouts is muddy and severely contaminated
                  with bacteria and fecal matter, putting villagers, especially
                  children, at risk for waterborne diseases. Clean water
                  solutions rarely reach these places, and when they do, they
                  are poorly maintained. Household water treatment products are
                  too expensive for poor families, and lack of proper handling
                  easily recontaminates the water.
                </p>
                <h2 className={styles.header2}>
                  A Simple, Low-Cost Water Treatment Model for Rural Villages
                </h2>
                <p>
                  <Image
                    src={coverPhoto}
                    alt="Women gathering water"
                    height={300}
                    width={300}
                    className="float-left mr-4"
                  />
                  The startling reality is that villagers can easily treat the
                  water that they do have with resources available locally. This
                  is where Saha Global comes in. Since 2008, we have connected
                  the poorest, most remote communities to simple, cost-effective
                  water treatment technology so that families beyond the reach
                  of costly solutions can access clean drinking water. In each
                  village, we have trained women to start and sustain small
                  water treatment businesses so that their communities can have
                  safe and affordable drinking water while women can earn
                  supplemental income. There are currently 389 Saha clean water
                  businesses which serve 127,062 people and are fraction of cost
                  of drilling a borehole or well.
                </p>
              </div>
            </div>
            <Approach
              visibility={active === "Our Approach" ? "visible" : "hidden"}
            />
            <WaterBusiness
              visibility={active === "Water Business" ? "visible" : "hidden"}
            />
            <Sustainability
              visibility={active === "Sustainability" ? "visible" : "hidden"}
            />

            <Press
              visibility={active === "In the Press" ? "visible" : "hidden"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Overview;
