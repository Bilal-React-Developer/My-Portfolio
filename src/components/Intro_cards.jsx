import React from "react";

function Cards(props) {
  const { img, title, imgReact,imgHtml } = props;
  return (
  <div className="flex justify-evenly w-full ">
      <div className="pt-6">
        <img
         className={` border-l-8 border-t-8 hover:border-r-8 hover:border-b-8 hover:border-l-0 hover:border rounded-2xl border border-blue-600 bg-transparent
              ${title=="Tailwind" &&  "py-7"} p-3 ${
          imgHtml
            ? 'sm:w-[7.7vw]'
            : imgReact
            ? 'sm:w-[9.2vw]'
            : 'w-28'
        }
        `}
         src={img}
          alt="Web Developer"
        />
        <span className="flex pt-4 justify-center text-xl">
          {title}
        </span>
      </div>
    </div>
  );
}
export default Cards;
