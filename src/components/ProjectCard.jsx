import React from "react";
import { Link } from 'react-router-dom';

import { FaGithub } from "react-icons/fa";

function ProjectCard(props) {
  const { icon, image, title, desc } = props;
  return (
    // <div className=''>
    <div className="flex  ">
      <div className=" flex-col justify-evenly mx-auto border-2 border-[#2563EB] rounded-3xl hover:text-[#24075D] shadow-stone-200 shadow-lg  md:border-4  hover:bg-blue-100 sm:w-8/12 md:w-full">
        <div className=" flex justify-center py-4 text-3xl ">
          <Link
            to="https://github.com/Bilal-React-Developer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center p-2"
            title="GitHub" 
          >
            <FaGithub className="me-1" />
          </Link>
        </div>
        <div className=" flex justify-center">
          <img
            className="h-[30vh] md:h-[24vh] rounded-xl border border-[#24075D] border-l-8 border-t-8 hover:border-r-8 hover:border-b-8 hover:border-l-0 hover:border-t-0"
            src={image}
            alt="Project_1"
          />
        </div>
        <span className="flex pt-1 pb-4 justify-center font-bold text-2xl">
          {title}
        </span>
        <div className="flex mx-auto w-8/12 md:w-11/12 pb-2 justify-center md:text-center text:xs sm:text-sm ">
          <p className="text-justify ">{desc}</p>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default ProjectCard;
