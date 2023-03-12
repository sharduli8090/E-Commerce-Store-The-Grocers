import React, { useState } from "react";
import Button from "../Button";
import logo from '../../Assets/Images/logo.png';

const Header = () => {
  let links = [
    { name: "HOME", link: "/" },
    { name: "FOOD", link: "/food" },
    { name: "SANITARY", link: "/sanitary" },
    { name: "ORDERS", link: "/orders" },
    { name: "ABOUT US", link: "/aboutus" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="shadow-md w-full fixed top-0 left-0"
        style={{ zIndex: 1 }}
      >
        <div className="md:flex bg-white py-0.5 md:px-10 px-7 items-center justify-between">
          <div className="font-bold text-base sm:text-2xl cursor-pointer flex items-center text-gray-800 ">
            <span className="  md:mr-5 text-indigo-800 mr-1 ">
              {/* <ion-icon name="logo-ionic"></ion-icon> */}
              <img src={logo} className="h-10 sm:h-16"/>
            </span>
            The Grocers
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-2 sm:top-5  cursor-pointer md:hidden"
          >
            <ion-icon name={open ? "close" : "menu-outline"}></ion-icon>
          </div>
          <ul
            className={`md:flex md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-17 opacity-100" : "top-[-490px]"
            } md:opacity-100 opacity-0`}
          >
            {links.map((obj) => (
              <li key={obj.name} className="md:ml-8 text-xl md:my=0 my-7">
                <a
                  className="text-gray-700 hover:text-gray-400 duration-500"
                  href={obj.link}
                >
                  {obj.name}
                </a>
              </li>
            ))}

            <Button text="Get Started" />
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
