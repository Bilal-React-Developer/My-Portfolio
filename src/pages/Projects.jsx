import React from "react";
// import { Link } from 'react-router-dom';
import ProjectCard from "../components/ProjectCard";
import { FaGithub } from "react-icons/fa";
import Developer4_img from "../components/assets/Developer4_img.jpg";
import todo1 from "../components/assets/todo1.png";


function projects() {
  return (
    <div className=" bg_img w-full h-full text-slate-200 ">
      <div className="flex-col flex space-y-6 w-10/12 m-auto justify-center">
        <span className="md:text-5xl mt-6 text-4xl font-semibold flex justify-center tracking-wider">
           Projects
        </span>
        <span className="md:pt-6 text-justify mx-auto md:text-lg md:w-4/5">
        I am proficient in a variety of programming languages, including JavaScript and C++. I have experience building frontend web applications using frameworks such as React, as well as frontend technologies like HTML, CSS, Bootstrap, and Tailwind. I am always looking to expand my skillset and am open to learning new languages and technologies.
        </span>
      </div>
      
      <div className=" flex flex-col md:space-x-2 space-x-0 space-y-3 md:space-y-0 md:flex-row md:justify-evenly py-8 m-auto w-10/12 ">
        
          <ProjectCard
            image={todo1}
            title="Todo_App"
            icon={<FaGithub />}
            desc="Developed a dynamic React-based To-Do application featuring seamless adding, deleting, and editing functionalities, enhancing user productivity and experience"
          />
          <ProjectCard
            image={Developer4_img}
            title="Project_2"
            icon={<FaGithub />}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elitLibero placeat, recusandae nobis officia amet possimus a doloremque exercitationem?"
          />
          <ProjectCard
            image={Developer4_img}
            title="Project_3"
            icon={<FaGithub />}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elitLibero placeat, recusandae nobis officia amet possimus a doloremque exercitationem?"
          />
      </div>
    </div>
  );
}

export default projects;
