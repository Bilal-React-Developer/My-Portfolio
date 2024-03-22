import React from "react";
import ProjectCard from "../components/ProjectCard";
import { FaGithub } from "react-icons/fa6";
import Developer4_img from "../components/assets/Developer4_img.jpg";

function projects() {
  return (
    <div className=" bg-gradient-to-r from-[#24075D] to-slate-900 w-full h-full text-slate-200 ">
      <div className="flex-col flex space-y-6 w-10/12 m-auto justify-center">
        <span className="md:text-5xl md:mt-6 text-4xl font-semibold flex justify-center">
           Projects
        </span>
        <span className=" text-justify mx-auto md:text-lg md:w-4/5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Libero
          placeat, recusandae nobis officia amet possimus a doloremque
          exercitationem? Quidem dolores cupiditate commodi enim totam ipsa
          similique eaque maiores nihil cumque amet sint, qui optio.
        </span>
      </div>
      <div className=" flex flex-col md:space-x-4 space-x-0 space-y-3 md:space-y-0 md:flex-row md:justify-evenly py-8 m-auto w-10/12 ">
        
          <ProjectCard
            image={Developer4_img}
            title="Project_1"
            icon={<FaGithub />}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elitLibero placeat, recusandae nobis officia amet possimus a doloremque exercitationem?"
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
