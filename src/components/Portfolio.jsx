import React from "react";
import cicdAWS from "../assets/portfolio/cicdAWS.png";
import devBook from "../assets/portfolio/devBook.png";
import grafanaDash from "../assets/portfolio/grafanaDash.png";
import jamStack from "../assets/portfolio/jamStack.png";
import mykoLogin from "../assets/portfolio/mykoLogin.png";
import s3Event from "../assets/portfolio/s3Event.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      image: cicdAWS,
      alt: "cicdAWSImage",
    },
    {
      id: 2,
      image: devBook,
      alt: "devBookImage",
    },
    {
      id: 3,
      image: grafanaDash,
      alt: "grafanaDashImage",
    },
    {
      id: 4,
      image: jamStack,
      alt: "jamStackImage",
    },
    {
      id: 5,
      image: mykoLogin,
      alt: "mykoLoginImage",
    },
    {
      id: 6,
      image: s3Event,
      alt: "s3EventImage",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-5xl font-bold inline border-b-4 border-purple-800 leading-normal">
            My Recent Projects
          </h2>
        </div>
        <div className="grid mt-10 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, image, alt }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={image}
                alt={alt}
                className="rounded-md duration-200 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
