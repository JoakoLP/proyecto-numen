import React from "react";

const Category = ({ item }) => {
  return (
    <div className="flex-1 h-[400px] md:h-[250px] m-2 shadow-lg rounded-md overflow-hidden relative">
      <img
        src={item.src}
        className=" w-[100%] h-[100%] left-0 top-0 bottom-0 "
        alt="category_img"
      />
      <div className="flex absolute w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col">
        <h2 className="text-white font-medium text-[30px] md:text-base">
          {item.title}
        </h2>
        <buttton className="btn">Ver mas</buttton>
      </div>
    </div>
  );
};

export default Category;
