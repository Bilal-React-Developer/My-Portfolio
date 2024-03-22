import React from 'react';

function ProjectCard({ icon, image, title, desc }) {
    return (
        // <div className=''>
            <div className="flex  ">
                <div className=" flex-col justify-evenly mx-auto border-2 border-[#2563EB] rounded-3xl hover:text-[#24075D] shadow-stone-300 shadow-md  md:border-4  hover:bg-blue-100">
                    <div className=' flex justify-center py-4 text-3xl '>
                        <a href="" className=''>{icon}</a>
                        {/* <Link>{icon}</Link> */}
                    </div>
                    <div className=' flex justify-center'>
                            <img
                                className="h-[30vh] md:h-[24vh] rounded-xl border border-[#24075D] border-l-8 border-t-8 hover:border-r-8 hover:border-b-8 hover:border-l-0 hover:border-t-0"
                                src={image}
                                alt="Project_1"
                            />
                    </div>
                    <span className="flex p-2 pb- justify-center font-bold text-2xl">
                        {title}
                    </span>
                    <div className='flex mx-auto w-11/12 pb-2 justify-center md:text-justify text:xs sm:text-sm '>
                        <span className=' '>{desc}</span>
                    </div>
                </div>
            </div>
        // </div>
    );
}

export default ProjectCard;
