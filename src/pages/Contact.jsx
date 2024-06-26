import React from "react";
import Footer from "../components/Footer";

const contact = () => {
  return (
    <div>
      <div
        className="w-full  space-y-6 text-slate-200 
          bg-cover bg_img"
      >
        <div className="flex justify-center">
          <span className="text-6xl md:my-6 font-semibold tracking-wider">
            Contact
          </span>
        </div>
        <div className="w-10/12 md:w-3/6  mx-auto">
          <form className="grid gap-6 lg:grid-cols-1">
            <div>
              <label htmlFor="name" class="block mb-2 ms-2 font-medium ">
                Enter name :
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border-2 text-gray-900 rounded-lg focus:border-blue-700 block w-full p-2 outline-none "
                placeholder="Enter Name"
                required
              />
            </div>

            <div class="">
              <label for="email" class="block mb-2 ms-2 font-medium  ">
                Email :
              </label>
              <input
                type="email"
                class="bg-gray-50 border-2 text-gray-900  rounded-lg focus:border-blue-700 block w-full p-2 outline-none "
                placeholder="abc@gmail.com"
                required
              />
            </div>
            <div class="">
              <label for="about" class="block mb-2 ms-2 font-medium ">
                Your Message :
              </label>
              <div class="mt-1">
                <textarea
                  id="about"
                  name="about"
                  rows="3"
                  class="bg-gray-50 border-2 text-gray-900 rounded-lg focus:border-blue-700 block w-full p-2 outline-none "
                ></textarea>
              </div>
            </div>
            <div className="flex justify-end py-6">
              <button
                type="submit"
                className=" font-bold hover:bg-gray-50 border border-blue-700 hover:border-x-8 hover:text-[#050A30] hover:font-bold rounded-2xl px-2 py-1 text-2xl"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default contact;
