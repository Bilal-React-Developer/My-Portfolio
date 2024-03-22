import React, { useState } from "react";
import { Link } from 'react-router-dom';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#050A30]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between py-2">
        <img
          src="src/components/assets/golden_logo_Dark1.png"
          className="h-16 ms-[8%]"
          alt="Bilal" />
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center p-1 me-[8%] w-6 h-6 justify-center text-sm text-[#F1E757] rounded-md md:hidden hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-[#F1E757]"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only ">Open main menu</span>
          <svg
            className="w-5 h-5 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div
          className={`w-full ${isOpen ? "block" : "hidden"} md:block mx-[11%] md:w-auto`}
          id="navbar-default"
        >
          <ul className="text-xl flex flex-col p-2 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#050A30]">
            <li>
              <Link to="/">
                <span className="block py-2 px-3 text-[#F1E757] rounded hover:bg-blue-200 hover:text-gray-900 md:border-0 md:text-[#F1E757] md:p-0 ">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/Introduction">
                <span className="block py-2 px-3 text-[#F1E757] rounded hover:bg-blue-200 hover:text-gray-900 md:border-0 md:text-[#F1E757] md:p-0 ">About</span>
              </Link>
            </li>
            <li>
              <Link to="/projects">
                <span className="block py-2 px-3 text-[#F1E757] hover:text-gray-900 rounded hover:bg-blue-200 md:bg-transparent md:border-0 md:p-0 ">Projects</span>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <span className="block py-2 px-3 text-[#F1E757] hover:text-gray-900 rounded hover:bg-blue-200 md:bg-transparent md:border-0 md:p-0 ">Contacts</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;