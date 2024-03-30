import React from "react";
import ProgressBar from "./ProgressBar";

const Skills = () => {
  return (
    <div className=" w-full h-full text-slate-200">
      <div className="flex-col flex space-y-6 w-10/12 m-auto justify-center">
      <span className="md:text-5xl md:mt-6 text-4xl font-semibold flex justify-center tracking-wider md:pt-8">
            Skills
          </span>
          <span>
          <ul className=" px-10 md:px-0 py-4 md:flex justify-between ">
          <li className="w-full">
            <ProgressBar title="HTML5" percentage={100} />
            <ProgressBar title="CSS" percentage={90} />
            <ProgressBar title="Bootstrap" percentage={80} />
            <ProgressBar title="Tailwind" percentage={75} />
          </li>
          <li className="w-full">
            <ProgressBar title="JAVASCRIPT" percentage={75} />
            <ProgressBar title="React" percentage={70} />
            <ProgressBar title="Next.Js" percentage={50} />
            <ProgressBar title="GitHub" percentage={75} />
          </li>
        </ul>
          </span>
        
      </div>
    </div>
  );
};

export default Skills;











{/* <ul className="flex justify-between bg-blue-900">
          <li className="w-full">
            <ProgressBar title="HTML5" percentage={100} />
            <ProgressBar title="CSS" percentage={90} />
            <ProgressBar title="Bootstrap" percentage={80} />
            <ProgressBar title="Tailwind" percentage={75} />
          </li>
          <li className="w-full">
            <ProgressBar title="JAVASCRIPT" percentage={75} />
            <ProgressBar title="React" percentage={70} />
            <ProgressBar title="Next.Js" percentage={50} />
            <ProgressBar title="GitHub" percentage={75} />
          </li>
        </ul> */}
