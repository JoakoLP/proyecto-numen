import React from "react";
import { brandsIcons } from "./brandsIcon";

function Brands() {
  return (
    <div className="bg-white h-28">
      <div className="relative flex flex-row items-center overflow-x-auto">
        <div className="relative flex items-center shrink-0 ">
          {brandsIcons.map((e) => (
            <div className="w-full p-3 ">
              <a className=" grayscale hover:grayscale-0" href="#">
                <img
                  className="inline-block h-20 duration-300 ease-in-out cursor-pointer hover:scale-110"
                  src={e.img}
                  alt="/"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Brands;
