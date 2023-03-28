import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import {
  Header,
  Nav,
  Hero,
  Opportunities,
  BlogFeed,
  Partners,
  Footer,
} from "../components";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-start min-h-screen w-screen">
        <Nav />
        <Hero />
      </main>
    </>
  );
}
