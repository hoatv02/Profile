import React from "react";

const Home = () => {
  return (
    <div
      className=" h-screen w-full bg-gradient-to-b from-black to-gray-800 via-black text-white"
      name="home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Developer
          </h2>
          <p>
            My take on responsive React portfolio website from scratch using
            Tailwind CSS and deploying it to server. In this tutorial, we will
            work with JavaScript, React, and Tailwind.
          </p>
          <div className="text-gray-500 py-4 max-w-md ">
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio{" "}
              <span className="group-hover:rotate-90 duration-300 ml-3 items-center justify-center">
                <i class="fa-solid fa-angle-right"></i>
              </span>
            </button>
          </div>
        </div>
        <div className="">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRthQem9i29JDeaBaJx5dUJlNXhIhvXoYPW_A&usqp=CAU"
            alt="myAvt"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
