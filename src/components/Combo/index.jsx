import React from "react";
import Combo from "./combo";
import DescriptionCombo from "./descriptionCombo";

function ComboSec() {
  return (
    <div className="flex flex-col items-center content-center self-center justify-center md:flex-row w-max-900px h-min-500px columns-2 mx-72">
      <Combo />
      <DescriptionCombo />
    </div>
  );
}

export default ComboSec;
