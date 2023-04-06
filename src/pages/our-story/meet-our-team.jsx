import React from "react";
import Image from "next/image";

import { Nav, Footer } from "../../components";
import styles from "../../styles";
import { Sahateam } from "../../constants";

const team = () => {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen w-screen font-sans overflow-hidden">
      <div className="w-full xs:w-4/5 max-w-screen xl:max-w-[1024px]">
        <Nav />
        <div className="relative isolate px-6 pt-14 pb-14 lg:px-8 font-sans text-center">
          <h1 className={styles.header1}>Meet The Team</h1>
          <div className="grid grid-cols-3 gap-2">
            {Sahateam.map((member) => (
              <div
                key={member.name}
                className="p-4 hover:rounded-2xl hover:shadow-2xl"
              >
                <div className="h-[200px] w-[280px] rounded-lg  shadow-lg overflow-clip">
                  <Image
                    src={member.image}
                    alt={member.name}
                    height={500}
                    width={300}
                    className="object-cover"
                  />
                </div>
                <div className="text-left my-4">
                  <h6 className="text-1xl text-grey-700 font-extrabold">
                    {member.name}
                  </h6>
                  <h6 className="text-gray-5a00">{member.title}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default team;
