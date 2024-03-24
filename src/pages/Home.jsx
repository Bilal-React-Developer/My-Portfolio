import React from "react";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  const downloadPDF = () => {
    const pdfPath = "src/components/assets/Muhammad-Bilal-CV1.pdf";
    const link = document.createElement("a");
    link.href = pdfPath;
    link.setAttribute("download",true);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className=" bg-cover bg-center bg-no-repeat bg-[url('src/components/assets/bg.jpg')] text-slate-200 flex-col-reverse flex md:flex-row text-center md:py-14 py-5 justify-items-center justify-between w-full md:h-[90vh]">
      <div className="w-3/4 md:2-2/4 m-auto">
        <div className=" space-y-8">
          <p className="text-3xl md:text-4xl font-bold">Muhammad Bilal</p>
          <p className=" font-semibold text-2xl">
            ReatJs Developer & Web Designer
          </p>
          <div className="md:mt-10 text-2xl">
            <ul className="flex justify-center">
              <li>
                <Link
                  to="https://www.linkedin.com/in/muhammad-bilal-79700321a"
                  target="_blank"
                  title="LinkdIn"
                  rel="noopener noreferrer"
                  className="flex justify-center md: text-[#F1E757] p-2">
                  <FaLinkedin  className="me-1" />
                </Link>
              </li>
              <li>
                <Link
                  to="https://profile.indeed.com/?hl=en_PK&co=PK&from=gnav-homepage&_ga=2.33088574.1049688533.1711125054-34562763.1706638998"
                  target="_blank"
                  title="Indeed"
                  rel="noopener noreferrer"
                  className="flex justify-center md: text-[#F1E757] p-2">
                  <SiIndeed className="me-1" />
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.instagram.com/g_u_jj_a_r693/"
                  target="_blank"
                  title="Instagram"
                  rel="noopener noreferrer"
                  className="flex justify-center md: text-[#F1E757] p-2">
                  <FaInstagramSquare className="me-1" />
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.facebook.com/profile.php?id=100015783487350&sk=about_work_and_education"
                  target="_blank"
                  title="Facebook"
                  rel="noopener noreferrer"
                  className="flex justify-center md: text-[#F1E757] p-2">
                  <FaFacebook className="me-1" />
                </Link>
              </li>
              <li>
                <Link
                  to="https://github.com/Bilal-React-Developer"
                  target="_blank"
                  title="GitHub"
                  rel="noopener noreferrer"
                  className="flex justify-center md: text-[#F1E757] p-2">
                  <FaGithub  className="me-1" />
                </Link>
              </li>
              <li>
                <Link
                  to="https://wa.me/+923065358536"
                  target="_blank"
                  title="WhatsApp"
                  rel="noopener noreferrer"
                  className="flex justify-center md: text-[#F1E757] p-2">
                  <FaWhatsappSquare   className="me-1" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className=" flex justify-center items-center md:mt-10">
          <button
            onClick={downloadPDF}
            type="button"
            class="mt-6 text-2xl flex gap-3 justify-center align-middle items-center hover:text-[#F1E757] border border-blue-700 hover:bg-[#050A30] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg py-2 px-4 text-center me-2 mb-2 "
          >
            Resume
            <PiDownloadSimpleBold />
          </button>
        </div>
      </div>
      <div className="md:w-2/5 w-full flex justify-center items-center">
        <img
          src="src/components/assets/my_pic1.jpg"
          className="h-[50vh] sm:w-2/5 w-3/5 md:w-3/5 border rounded-xl"
          alt="Bilal"
        />
      </div>
    </div>
  );
}

export default Home;
