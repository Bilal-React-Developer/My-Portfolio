import React from "react";
import ProgressBar from "./ProgressBar";

const Skills = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat bg-[url('src/components/assets/bg.jpg')] w-full h-full text-slate-200">
      <div className="flex-col flex space-y-6 w-10/12 m-auto justify-center">
        <ul className="flex justify-between">
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
      </div>
    </div>
  );
};

export default Skills;
