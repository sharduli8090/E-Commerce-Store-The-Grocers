import React from "react";

const Button = (props) => {
  return (
    <>
      <button className="bg-[#16a34a] text-white  md:ml-10 md:mt-7 md:mb-7  px-6 rounded hover:bg-[#15803d] duration-500 animate-pulse  ">
        {props.text}
      </button>
    </>
  );
};
export default Button;
