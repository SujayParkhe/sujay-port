import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-5xl font-bold inline border-b-4 border-purple-800 leading-normal">
            Hi, I'm Sujay. Nice to meet you.
          </h2>
          <p className="text-xl mt-20 text-justify">
            I've worked with a wide range of technologies in the development
            world using MERN stack with Tailwind CSS for designing the
            Application, for Deployment using AWS EC2 Instances. I've also
            Created and Deployed static sites using HTML, CSS, Javascript,
            Bootstrap, React, Amazon S3 and AWS Amplify. Designed UI for Web
            Apps and Mobile Apps on Figma. Setting up infrastructure for
            deployment of Web Applciations. And I'm still exploring more...
          </p>
          <br />
          <p className="text-xl mt-2">
            Currently learning to develop CI/CD pipelines, EDA Architecture, and
            also I'm preparing for my AWS SysOps Exam. Want to grow and excel in
            my career as a future Software/DevOps Engineer who can understand
            the software lifecycle and perform best practices while developing
            and deploying applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
