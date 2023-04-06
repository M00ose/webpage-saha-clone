import React, { useState } from "react";

const SideMenu = () => {
  const [active, setActive] = useState("");

  return (
    <div className="h-full w-[200px]">
      <ul className="list-none flex flex-col">
        {["Our Story", "Meet Our Team", "Founding", "Financials"].map(
          (item) => (
            <li
              key={item}
              className={`font-bold p-2 hover:text-offGrey ${
                active === item ? "text-primary" : "text-black"
              } cursor-pointer`}
              onClick={() => setActive(item)}
            >
              {item}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default SideMenu;
