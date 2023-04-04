import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar, Dropdown } from "flowbite-react";

const Nav = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <Image alt="Saha Global logo" height="64" src="/logo.png" width="64" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <div className="flex flex-col md:flex-row gap-3 sm:order-2">
          <Dropdown inline label="What We Do">
            <Dropdown.Item>
              <Link href="/what-we-do/overview">Overview</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/what-we-do/our-approach">Our Approach</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/what-we-do/water-business">Water Business</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/what-we-do/sustainability">Sustainability</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/what-we-do/in-the-press">In the Press</Link>
            </Dropdown.Item>
          </Dropdown>
          <Dropdown inline label="Our Story">
            <Dropdown.Item>
              <Link href="/our-story/founding-story">Founding Story</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/our-story/meet-the-entrepreneurs">
                Meet the Entrepreneurs
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/our-story/meet-our-team">Meet Our Team</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/our-story/financials">Financials</Link>
            </Dropdown.Item>
          </Dropdown>
          <Dropdown inline arrowIcon={false} label="Get Involved"></Dropdown>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
