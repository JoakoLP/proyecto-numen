import React from "react";
import Combo from "./combo";
import DescriptionCombo from "./descriptionCombo";

function ComboSec() {
  return (
    <div className="w-[900px] h-[500px] flex items-center content-center self-center columns-2 mx-72 justify-center">
      <Combo />
      <DescriptionCombo />
    </div>
  );
}

export default ComboSec;
