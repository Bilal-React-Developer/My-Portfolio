
import React from "react";
import IntroServices from "../components/Intro_services";
import Developer4_img from "../components/assets/Developer4_img.jpg";
import UX_Designer from "../components/assets/UX_Designer.png";
import html5 from "../components/assets/html5.png";
import css3_logo from "../components/assets/css3_logo.jpg";
import bootstrap_logo from "../components/assets/bootstrap_logo.png";
import Tailwind_logo from "../components/assets/Tailwind_logo.png";
import javascript_logo from "../components/assets/javascript_logo.png";
import NextJs_logo from "../components/assets/NextJs_logo.png";
import react_logo from "../components/assets/react_logo.svg"
import IntroCards from "../components/Intro_cards"
// import Carousel from "./Carousel";
// import Carousal from "./Carousal";
// import Test from "./Test";
// import Carousel from "../components/Carousel";

function introduction() {
  // const images = [
  //   css3_logo,
  //   html_logo,
  //   css3_logo,
  //   bootstrap_logo,
  //   css3_logo,
  //   bootstrap_logo,
  //   javascript_logo,
  //   NextJs_logo,
  //   javascript_logo,
  //   bootstrap_logo,
  //   react_logo,
  //   javascript_logo,
  //   bootstrap_logo,
  //   css3_logo,
  //   bootstrap_logo,
  //   // Add more image URLs as needed
  // ];

  return (
    <div className="bg-cover bg-center bg-no-repeat bg-[url('src/components/assets/bg.jpg')] w-full h-full text-slate-200 ">
      <div className="flex flex-col space-y-6 w-10/12 m-auto justify-center">
        <span className="md:text-5xl md:mt-6 text-4xl font-semibold flex justify-center">
          Introduction
        </span>
        <span className=" text-justify mx-auto md:text-lg md:w-4/5">
          I am a Developer with the experiance in React,as well as a range of other skills including Frontend Development, Javascript and Tailwind. I have completed several individual projects and am always looking for new opportunities and challenges to improve my skills and advance my career.
        </span>
      </div>
      <div className="flex  flex-col md:flex-row md:justify-evenly justify-center gap-4 items-center pt-8 mx-auto w-10/12">
        <IntroServices img={Developer4_img} title="Web Developer" />
        <IntroServices img={react_logo} title="React Developer" />
        <IntroServices img={UX_Designer} title="UX Designer" />
      </div>


<div className="flex flex-wrap justify-center md:justify-start w-full mx-auto py-6">
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
    <IntroCards img={html5} title="HTML-5" />
  </div>
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
    <IntroCards img={css3_logo} title="CSS-3" />
  </div>
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
    <IntroCards img={bootstrap_logo} title="Bootstrap" />
  </div>
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
    <IntroCards img={Tailwind_logo} title="Tailwind" />
  </div>
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
    <IntroCards img={javascript_logo} title="JAVASCRIPT" />
  </div>
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
    <IntroCards img={react_logo} title="React" />
  </div>
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
    <IntroCards img={NextJs_logo} title="NEXT.Js" />
  </div>
</div>


      </div>
  )
}

export default introduction;
