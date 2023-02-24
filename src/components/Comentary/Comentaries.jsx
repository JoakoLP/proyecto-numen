import React from "react";
import BoxComentary from "./BoxComentary";
import { DataComentary } from "./DataComentary";
import WriteComentary from "./WriteComentary";

function Comentaries() {
  return (
    <div className="flex flex-col w-80 bg-blue-500 justify-between items-center p-5 mobile:flex-col">
      <WriteComentary />
      {DataComentary.map((box, index) => (
        <div className="flex bg-blue-300 w-80 h-30 justify-between">
          <BoxComentary item={box} key={index} />{" "}
        </div>
      ))}
    </div>
  );
}

export default Comentaries;
