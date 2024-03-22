import React from "react";
import Footer from "../components/Footer";

const contact = () => {
  return (
    <>
    <div className="bg-gradient-to-r from-[#24075D] to-slate-900 w-full md:h-[80vh] text-slate-200">
      <div className="flex justify-center">
        <span className="text-6xl md:mt-6 font-semibold">Contact</span>
      </div>
      <div class="w-10/12 md:w-3/6 mt-8 mx-auto">
        <form className="">
          <div class="grid gap-6 mb-6 lg:grid-cols-1">
            <div>
              <label
                for="name"
                class="block mb-1 text-sm font-medium "
              >
                Enter name :
              </label>
              <input
                type="text"
                id="name"
                class="bg-gray-50 border-2 text-gray-900 rounded-lg focus:border-blue-700 block w-full p-2 outline-none "
                placeholder="Enter Name"
                required
              />
            </div>

            <div class="">
              <label
                for="email"
                class="block mb-1 text-sm font-medium  "
              >
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
              <label
                for="about"
                class="block text-sm font-medium "
              >
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
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              class=" ] font-bold hover:bg-gray-50 border border-blue-700 hover:border-x-8 hover:text-[#050A30] hover:font-bold rounded-2xl px-2 py-1 mb-3"
            >Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    {/* <Footer/> */}
    </>
  );
};
export default contact;
