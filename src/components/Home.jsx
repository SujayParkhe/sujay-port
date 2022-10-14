import React from "react";
import heroImage from "../assets/sujayAvatar.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="flex h-screen bg-gradient-to-b from-black via-black to-gray-800 md:pt-10"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-white text-4xl sm:text-7xl max-w-xl font-bold">
            Full Stack Web Developer & Cloud Enthusiast
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I design and code beautifully simple things using React, Node,
            ExpressJs, MongoDB, and I love what I do. Also I love to work with
            Cloud Technology such as AWS to enhance my skills.
          </p>
          <div>
            <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-500 to-violet-500">
              Portfolio
              <span className="hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={heroImage}
            alt="heroImage"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
