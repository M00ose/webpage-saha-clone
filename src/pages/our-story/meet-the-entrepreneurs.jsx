import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import { Nav, Footer } from "../../components";
import { Modal } from "@/components/Modal";
import { EntrepreneurCard } from "@/components/EntrepreneurCard";

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

const MeetTheEntrepreneurs = ({ entrepreneurs }) => {
  const [active, setActive] = useState("");
  let router = useRouter();
  return (
    <main className="flex flex-col items-center justify-start min-h-screen w-screen font-sans overflow-hidden">
      <div className="w-full xs:w-4/5 max-w-screen xl:max-w-[1024px]">
        <Nav />
        {router.query.image && (
          <Modal onClose={() => router.push("")}>
            <EntrepreneurCard image={router.query.image} data={active} />
          </Modal>
        )}

        <div className="py-12 columns-5 gap-1">
          {entrepreneurs.map((entrepreneur) => (
            <Link
              key={entrepreneur.name}
              href={`/our-story/meet-the-entrepreneurs/?image=${entrepreneur.coverPhoto.url}`}
            >
              <div className="max-w-[200px] hover:rounded-lg hover:shadow-2xl hover:scale-125 hover:cursor-pointer overflow-clip">
                <Image
                  src={entrepreneur.coverPhoto.url}
                  alt={entrepreneur.name}
                  height={entrepreneur.coverPhoto.height}
                  width={entrepreneur.coverPhoto.width}
                  className="object-cover mb-1"
                  onClick={() =>
                    setActive({
                      name: entrepreneur.name,
                      origin: entrepreneur.origin,
                      height: entrepreneur.coverPhoto.height,
                      width: entrepreneur.coverPhoto.width,
                      description: entrepreneur.description,
                    })
                  }
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default MeetTheEntrepreneurs;
