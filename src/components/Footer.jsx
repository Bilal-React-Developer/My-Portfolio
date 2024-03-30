import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-black ">
      <div className="flex w-full justify-evenly md:flex-row ">
        <ul className="w-full flex  md:flex-row flex-wrap md:justify-around items-center justify-center mx-auto ">
          <li className=" w-1/2 md:w-1/4 ">
            <Link to ="https://www.linkedin.com/in/muhammad-bilal-79700321a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center text-[#F1E757] py-3 hover:text-white"
            >
              <span className="flex items-center hover:text-white">
                <FaLinkedin className="me-1" />
                LinkedIn
              </span>
            </Link>
          </li>
          <li className=" w-1/2 md:w-1/4">
            <Link
              to="https://profile.indeed.com/?hl=en_PK&co=PK&from=gnav-homepage&_ga=2.33088574.1049688533.1711125054-34562763.1706638998"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center md: text-[#F1E757] py-3"
            >
              <span className="flex items-center hover:text-white">
                <SiIndeed className="me-1" />
                Indeed
              </span>
            </Link>
          </li>
          <li className=" w-1/2 md:w-1/4">
            <Link
              to="https://github.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center md: text-[#F1E757] py-3"
            >
              <span className="flex items-center hover:text-white">
                <FaGithub className="me-1" />
                GitHub
              </span>
            </Link>
          </li>
          <li className=" w-1/2 md:w-1/4">
            <Link
              to="mailto:muhammadbilal91055@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center md: text-[#F1E757] py-3"
            >
              <span className="flex items-center hover:text-white">
                <MdEmail className="me-1" />
                Gmail
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
