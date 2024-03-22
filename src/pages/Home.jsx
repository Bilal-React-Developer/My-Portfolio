import React from "react";
import { PiDownloadSimpleBold } from "react-icons/pi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {


  const downloadPDF = () => {
    // Replace 'path_to_your_pdf.pdf' with the actual path to your PDF file
    const pdfPath = 'src/components/assets/Muhammad-Bilal-CV1.pdf';
    const link = document.createElement('a');
    link.href = pdfPath;
    link.setAttribute('download', true);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
      <div className=" bg-gradient-to-r gap-y-6 from-[#24075D] to-slate-900 text-slate-200 flex-col-reverse flex md:flex-row text-center md:py-14 py-5 justify-items-center justify-between w-full md:h-[90vh]">
        <div className="w-2/4 m-auto ">
          <div className=" space-y-4">
            <p className="text-3xl md:text-4xl font-bold">Muhammad Bilal</p>
            <p className=" font-semibold text-2xl">
              ReatJs Developer & Web Designer
            </p>
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
