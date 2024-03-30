import React from "react";
function ProgressBar({ title, percentage }) {
  return (
    <div className="w-11/12 my-10">
      <div className="flex justify-between">
        <p className="mb-1 md:text-lg font-medium ">{title}</p>
        <p className=" text-sm md:text-lg font-medium text-slate-200">{`${percentage}%`}</p>
      </div>
      <div className="flex items-center bg-gray-200 rounded-full">
        <div
          className="bg-blue-500 text-xs leading-none py-1 rounded-full text-center text-white"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
