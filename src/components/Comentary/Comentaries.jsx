import React from "react";
import BoxComentary from "./BoxComentary";
import { DataComentary } from "./DataComentary";

function Comentaries() {
  return (
    <div className="flex w-[100%] justify-between items-center p-5 mobile:flex-col">
      {DataComentary.map((box, index) => (
        <BoxComentary item={box} key={index} />
      ))}
    </div>
  );
}

export default Comentaries;
