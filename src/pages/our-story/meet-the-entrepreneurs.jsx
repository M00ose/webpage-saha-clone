import React from "react";
import Image from "next/image";

import { Nav, Footer } from "../../components";

import { getEntrepreneurs } from "@/services";

export async function getStaticProps() {
  const { entrepreneurs } = await getEntrepreneurs();
  return {
    props: {
      entrepreneurs,
    },
    revalidate: 10,
  };
}

const meetTheEntrepreneurs = ({ entrepreneurs }) => {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen w-screen font-sans overflow-hidden">
      <div className="w-full xs:w-4/5 max-w-screen xl:max-w-[1024px]">
        <Nav />
        <div className="relative isolate px-6 pt-14 pb-14 lg:px-8 font-sans">
          {entrepreneurs.map((entrepreneur) => (
            <Image
              key={entrepreneur.name}
              src={entrepreneur.coverPhoto.url}
              alt={entrepreneur.name}
              height={entrepreneur.coverPhoto.height}
              width={entrepreneur.coverPhoto.width}
            />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default meetTheEntrepreneurs;
