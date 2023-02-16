import React from "react";
import CssPng from "../assets/css.png";
import Avt from "../assets/DSC_4202.JPG";
import GithubPng from "../assets/github.png";
import Graphql from "../assets/graphql.png";
import Html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import Node from "../assets/node.png";
import react from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";

const Experience = () => {
  const listLink = [
    {
      id: 1,
      src: react,
      content: "React JS",
      style:"shadow-blue-500"
    },
    {
      id: 2,
      src: Html,
      content: "HTML",
      style:"shadow-orange-500"
    },
    {
      id: 3,
      src: CssPng,
      content: "CSS",
      style:"shadow-blue-500"
    },
    {
      id: 4,
      src: Node,
      content: "Node JS",
      style:"shadow-orange-500"
    },
    {
      id: 5,
      src: javascript,
      content: "Javascript",
      style:"shadow-yellow-500"
    },
    {
      id: 6,
      src: GithubPng,
      content: "Github",
      style:"shadow-gray-500"
    },
    {
      id: 7,
      src: Graphql,
      content: "Github",
      style:"shadow-pink-500"
    },
    {
        id: 8,
        src: Tailwind,
        content: "Tailwind",
        style:"shadow-gray-500"
      },
  ];
  return (
    <div
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
      name="experiences"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="">
          <p className="text-4xl font-bold border-b-4  p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid gird-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {listLink.map((item, index) => {
            return (
              <div key={index} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${item.style}`}>
                <img src={item.src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{item.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
