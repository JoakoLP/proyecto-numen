import React from "react";
import Combo from "./combo";
import DescriptionCombo from "./descriptionCombo";

function ComboSec() {
  return (
    <div className="flex mt-1 my-4 flex-col items-center content-center self-center justify-center xl:flex-row w-max-900px h-min-[200px] sm:h-min-500px w-min-[200px] sm:w-min-[500px] columns-2 mx-12 sm:mx-30 xl:mx-72">
      <Combo />
      <DescriptionCombo />
    </div>
  );
}

export default ComboSec;
