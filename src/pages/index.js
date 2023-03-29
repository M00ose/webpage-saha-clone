import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import {
  Header,
  Nav,
  Hero,
  Stats,
  About,
  Opportunities,
  BlogFeed,
  Partners,
  Footer,
} from "../components";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-start min-h-screen w-screen font-sans">
        <div className="w-full xs:w-4/5 max-w-[1024px]">
          <Nav />
          <Hero />
          <Stats />
          <About />
        </div>
      </main>
    </>
  );
}
