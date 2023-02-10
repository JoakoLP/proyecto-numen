import React from "react";
import { DataCategories } from "./CategoryData";
import Category from "./Category";

function Categories() {
  return (
    <div className="flex w-[100%] justify-between items-center p-5 mobile:flex-col">
      {DataCategories.map((category, index) => (
        <Category item={category} key={index} />
      ))}
    </div>
  );
}

export default Categories;
