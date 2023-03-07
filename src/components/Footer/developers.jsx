import React from "react";
import { Link } from "react-router-dom";
import { Dev, DevCont } from "./style";

const Developers = () => {
  return (
    <div className="flex flex-col items-center justify-center py-5">
      <Link to="about-us">
        <h3 className="text-2xl font-bold text-center text-fuchsia-icon">
          EQUIPO DE DESARROLLO
        </h3>
        <div className={DevCont}>
          <span className={Dev}>Joaquin Takara</span>
          <span className={Dev}>Florencia Lopez</span>
          <span className={Dev}>Angel Ruiz Diaz</span>
          <span className={Dev}>Noé Navarrete</span>
          <span className={Dev}>Nahir Soto</span>
        </div>
      </Link>
    </div>
  );
};

export default Developers;
