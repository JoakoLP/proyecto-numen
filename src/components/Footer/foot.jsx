import React from "react";
import Column1 from "./column1";
import Column2 from "./column2";
import Column3 from "./column3";
import imgIcon from "../../img/icons8-circuit-96.png";
import Logo from "../Header/HeaderMain/logo";

function Foot() {
  return (
    <div className="flex flex-col flex-wrap p-5 sm:flex-row lg:flex-nowrap sm:justify-center justify-evenly columns-4">
      {/* column1 */}
      <div className="flex flex-col w-full md:items-center md:flex-row justify-evenly">
        <div className="flex justify-center w-full md:w-min md:min-w-fit ">
          <img src={imgIcon} alt="" className="w-96px h-96px" />
          <span className="flex flex-col pl-0.5 justify-center font-mono bg-gradient-to-b from-blue-icon to-fuchsia-icon bg-clip-text text-transparent font-bold">
            <span className="text-xl leading-none whitespace-nowrap">
              GAMING STORE
            </span>
            <span className="flex text-lg leading-none whitespace-nowrap">
              Low High Budget
            </span>
          </span>
        </div>
        <Column1 />
      </div>
      {/* column2 */}
      <div className="flex flex-col w-full md:flex-row justify-evenly">
        <Column2 />
        <Column3 />
      </div>
    </div>
  );
}

export default Foot;
