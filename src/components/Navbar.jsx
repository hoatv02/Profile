import React, { useState } from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const data = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experiences",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="bg-black px-4 flex justify-between items-center w-full h-20 text-white fixed">
      <div>
        <h1 className="text-5xl font-extrabold ml-2">Yash</h1>
      </div>
      <ul className="hidden md:flex  ">
        {data.map((item, index) => {
          return (
            <li
              key={index}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
            >
              <Link to={item.link} smooth duration={500}>
                {item.link}
              </Link>
            </li>
          );
        })}
      </ul>
      <div
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? (
          <i class="fa-solid fa-xmark text-2xl"></i>
        ) : (
          <i class="fa-solid fa-bars text-2xl"></i>
        )}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {data.map((item, index) => {
            return (
              <li
                key={index}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link onClick={()=>setNav(!nav)} to={item.link} smooth duration={500}>
                  {item.link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
