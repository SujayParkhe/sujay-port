import React from "react";
import aws from "../assets/aws.png";
import css from "../assets/css.png";
import figma from "../assets/figma.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import mongodb from "../assets/mongodb.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";

const Skills = () => {
  const skills = [
    {
      id: 1,
      image: html,
      alt: "htmlImage",
      title: "HTML5",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      image: css,
      alt: "cssImage",
      title: "CSS3",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      image: javascript,
      alt: "javascriptImage",
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      image: react,
      alt: "reactImage",
      title: "ReactJs",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      image: node,
      alt: "nodeImage",
      title: "NodeJs",
      style: "shadow-green-500",
    },
    {
      id: 6,
      image: mongodb,
      alt: "mongodbImage",
      title: "MongoDB",
      style: "shadow-green-700",
    },
    {
      id: 7,
      image: tailwind,
      alt: "tailwindImage",
      title: "TailwindCSS",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      image: github,
      alt: "githubImage",
      title: "Github",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      image: figma,
      alt: "figmaImage",
      title: "Figma",
      style: "shadow-pink-400",
    },
    {
      id: 10,
      image: aws,
      alt: "awsImage",
      title: "AWS",
      style: "shadow-orange-400",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8">
          <h2 className="text-5xl font-bold inline border-b-4 border-purple-800 leading-normal">
            Skills
          </h2>
        </div>
        <div className="w-full grid mt-10 grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, image, title, style, alt }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={image} alt={alt} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
