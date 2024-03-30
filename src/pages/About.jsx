
import React from "react";
import IntroServices from "../components/Intro_services";
import Developer4_img from "../components/assets/Developer4_img.jpg";
import UX_Designer from "../components/assets/UX_Designer.png";
import react_logo from "../components/assets/react_logo.svg"

import Skills from "../components/Skills";

function About() {

  return (
    // <div className="">
      <div className="bg_img w-full h-full text-slate-200 ">
        <div className="flex flex-col space-y-10 w-10/12 m-auto justify-center">
          <span className="md:text-5xl mt-6 text-4xl font-semibold flex justify-center">
            Introduction
          </span>
          <span className=" text-justify mx-auto md:text-lg md:w-4/5">
          I am a developer with experience in React.js, as well as a range of other skills including frontend development, JavaScript, and Tailwind. I have completed several individual projects and am always looking for new opportunities and challenges to improve my skills and advance my career.
          </span>
        </div>
        <div className="flex  flex-col md:flex-row md:justify-evenly justify-center gap-4 items-center  mx-auto w-10/12 py-10">
          <IntroServices img={Developer4_img} title="Web Developer" />
          <IntroServices img={react_logo} title="React Developer" />
          <IntroServices img={UX_Designer} title="UX Designer" />
        </div>
      
      <Skills/>
      </div>
    // </div>
  )
}

export default About;
