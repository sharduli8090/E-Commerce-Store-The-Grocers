import React from "react";

const Item = ({ Links, Title }) => {
  return (
    <>
      <ul>
        <h1 className="mb-1 font-semibold">{Title}</h1>
        {Links.map((linked) => (
          <li key={linked.name}>
            <a
              className="text-gray-400 hover:text-[#86efac] duration-300 text-sm cursor-pointer leading-6"
              href={linked.link}
            >
              {linked.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Item;
