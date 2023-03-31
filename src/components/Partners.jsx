import React from "react";
import Image from "next/image";

import { partners } from "../constants";

const Partners = () => {
  return (
    <div className="px-6 md:px-0 py-14">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center justify-items-center content-end">
        {partners.map((partner) => (
          <Image
            key={partner.name}
            src={partner.image}
            alt={partner.name}
            height={150}
            width={150}
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
