import React from "react";
import ItemsContainer from "../ItemsContainer";
import Social from "../Social";
import { Icons } from "../Menus";

const Footer = () => {
  return (
    <>
      <footer className=" bg-[#1c1917] text-white">
        <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#44403c] py-7">
          <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
            <span className="text-[#86efac]">Buy</span> in budget according to
            your need
          </h1>
          <div>
            <input
              type="text"
              placeholder="Enter your email address"
              className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
            />
            <button className="bg-[#22c55e] hover:bg-[#16a34a] duration-300 px-5 py-2.5  rounded-md text-white md:w-auto w-full">
              Subscribe for Updates
            </button>
          </div>
        </div>
        <ItemsContainer />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 bg-Stone-900 text-sm pb-8">
          <span>@ 2023 All Rights Reserved</span>
          <span>Created By Sharduli Pandey</span>
          <Social Icons={Icons} />
        </div>
      </footer>
    </>
  );
};
export default Footer;
