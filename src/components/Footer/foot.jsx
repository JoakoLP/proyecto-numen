import React from "react";
import Column1 from "./column1";
import Column2 from "./column2";
import Column3 from "./column3";

function Foot() {
  return (
    <div className="flex p-5 justify-evenly columns-4">
      <div className="text-5xl font-bold text-fuchsia-icon">LOGO</div>
      {/* column1 */}
      <div>
        <Column1 />
      </div>
      {/* column2 */}
      <div>
        <Column2 />
      </div>
      {/* column3 */}
      <div>
        <Column3 />
      </div>
    </div>
  );
}

export default Foot;
