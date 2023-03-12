import React from "react";

const Social = ({ Icons }) => {
  return (
    <>
      <div className="text-[#86efac]">
        {Icons.map((icon) => (
          <a href={icon.link} target="_blank">
            <span
              key={icon.name}
              className="p-2 cursor-pointer inline-flex item-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-[#16a34a] duration-300"
            >
              <ion-icon name={icon.name}></ion-icon>
            </span>
          </a>
        ))}
      </div>
    </>
  );
};
export default Social;
