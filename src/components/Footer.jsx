import React from "react";
import Link from "next/link";
import Image from "next/image";

import { socials } from "@/constants";
import {
  CiFacebook,
  CiInstagram,
  CiMail,
  CiLinkedin,
  CiTwitter,
} from "react-icons/ci";

const Footer = () => {
  return (
    <div className="relative flex items-start justify-center w-full bg-primary font-sans overflow-hidden">
      <div className="flex flex-col sm:flex-row gap-8 justify-between w-full xs:w-4/5 max-w-[1024px] px-6 md:px-0 py-4 text-white text-sm z-20">
        <div className="flex-1 flex flex-col gap-4">
          <Image
            src="/logo.png"
            alt="Saha Global"
            key="Saha Global logo"
            height={50}
            width={50}
            className="object-contain rounded-full"
          />
          <h2 className="">
            Getting the cleanest water to the hardest to reach people.
          </h2>
          <div className="flex flex-row gap-4">
            {socials.map((social) => (
              <Link
                href={social.link}
                key={social.name}
                className="hover:transition ease-in hover:-translate-y-2"
              >
                <div>{social.icon}</div>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="uppercase font-bold mb-2 ">What We Do</h3>
          <div>
            <ul className="flex flex-col gap-2">
              <Link href="/what-we-do/overview">Overview</Link>
              <Link href="/what-we-do/our-approach">Our Approach</Link>
              <Link href="/what-we-do/water-business">Water Business</Link>
              <Link href="/what-we-do/sustainability">Sustainability</Link>
              <Link href="/what-we-do/in-the-press">In the Press</Link>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="uppercase font-bold mb-2">Our Story</h3>
          <div>
            <ul className="flex flex-col gap-2">
              <Link href="/our-story/financials">Financials</Link>
              <Link href="/our-story/founding-story">Founding Story</Link>
              <Link href="/our-story/meet-our-team">Meet Our Team</Link>
              <Link href="/our-story/meet-our-entrepreneurs">
                Meet Our Entrepreneurs
              </Link>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="uppercase font-bold mb-2">
            <a href="/blog/">Blog</a>
          </h3>
          <div></div>
        </div>
      </div>
      <div className="absolute translate-y-20 blueWhiteGradient w-[1000px] h-[1000px] rounded-full"></div>
    </div>
  );
};

export default Footer;
