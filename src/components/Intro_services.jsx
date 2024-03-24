import React from "react";

function IntroServices(props) {
  const { img, title } = props;
  return (
    // <div className="">
        <div className="flex justify-evenly hover:bg-blue-900 md:w-56 w-2/3 border-2 border-[#2563EB] rounded-3xl ">
          <div className="p-6 cursor-pointer">
            <img
              className="h-28 mx-auto rounded-xl"
              src={img}
              alt="UX Designer"
            />
            <span className="flex pt-6 justify-center text-xl">
              {title}
            </span>
          </div>
        </div>
    // </div>
  );
}
export default IntroServices;
