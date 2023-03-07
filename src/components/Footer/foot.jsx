import React from "react";
import Column1 from "./column1";
import Column2 from "./column2";
import Column3 from "./column3";

function Foot() {
  return (
    <div className="flex flex-col flex-wrap p-2 sm:p-5 sm:flex-row lg:flex-nowrap sm:justify-center justify-evenly columns-4">
      {/* column1 */}
      <div className="flex flex-col w-full md:items-center md:flex-row justify-evenly">
        <div className="mb-5 text-5xl font-bold text-fuchsia-icon">LOGO</div>
        <Column1 />
      </div>
      {/* column2 */}
      <div className="flex flex-col w-full md:flex-row justify-evenly">
        <Column2 />
        <Column3 />
      </div>
      {/* column3 */}
    </div>
  );
}

export default Foot;
