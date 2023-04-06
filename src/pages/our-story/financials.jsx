import React from "react";

import { Nav, Footer } from "../../components";

const financials = () => {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen w-screen font-sans overflow-hidden">
      <div className="w-full xs:w-4/5 max-w-screen xl:max-w-[1024px]">
        <Nav />
        <div className="relative isolate px-6 pt-14 pb-14 lg:px-8 font-sans">
          <h1>Financials</h1>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default financials;
