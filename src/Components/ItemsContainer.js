import React from "react";
import Item from "./Item";
import { Company, Icons, Categories, Support } from "./Menus";
const ItemsContainer = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
        <Item Links={Categories} Title="Categories" />
        <Item Links={Company} Title="Your Pace" />
        <Item Links={Support} Title="Support" />
      </div>
    </>
  );
};

export default ItemsContainer;
