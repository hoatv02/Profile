import React from "react";
import CssPng from '../assets/css.png'
import Avt from '../assets/DSC_4202.JPG'
import GithubPng from '../assets/github.png'
import Graphql from '../assets/graphql.png'
import Html from '../assets/html.png'
import Next from '../assets/nextjs.png'
import Node from '../assets/node.png'
import react from '../assets/react.png'

const Portfolio = () => {
  const profolio = [
    {
      id: 1,
      src: react,
    },
    {
      id: 2,
      src: Html,
    },
    {
      id: 3,
      src:CssPng,
    },
    {
      id: 4,
      src: Node,
    },
    {
      id: 5,
      src:GithubPng
    },
    {
      id: 6,
      src: Graphql,
    },
  ];
  return (
    <div
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen "
      name="portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {/* <div className="shadow-md shadow-gray-600 rounded-lg ">
            <img
              className="rounded-md duration-200 hover:scale-105"
              src="https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo.png"
              alt=""
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Demo
              </button>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Code here
              </button>
            </div>
          </div> */}
          {profolio.map(({id,src}) => {
            return (
              <div key={id} className=" shadow-md shadow-gray-700 rounded-lg w-full">
                <img
                  className="w-1/3 mx-auto mt-10 items-center rounded-md duration-200 hover:scale-105"
                  src={src}
                  alt=""
                />
                {/* <div className="w-[100%]  rounded-md duration-200 hover:scale-105 justify-center items-center">
                  {item.src}
                </div> */}
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105  text-sm">
                    Demo
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-sm">
                    Code
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
