import React from "react";
import Networks from "./networks";
import Foot from "./foot";
import Developers from "./developers";

function Footer() {
  return (
    <div className="bg-black">
      <Networks />
      <Foot />
      <Developers />
    </div>
  );
}

export default Footer;
