import React from "react";
import imgIcon from "../../../img/icons8-circuit-96.png";
import Search from "./search";
import User from "./User";
import * as styles from "./styles";
import Logo from "./logo";
import { Link } from "react-router-dom";
import helpImg from "../../../img/fi-rr-interrogation.svg";
import devImg from "../../../img/code-slash.svg";

const HeaderMain = () => {
  return (
    <div className={styles.headerMain}>
      <div className={styles.formContainer}>
        <Link
          to="/about-us/"
          className={styles.link}
          title="Desarrolladores de la página"
        >
          <img src={devImg} className={styles.linkImg} alt="" />
          Desarrolladores
        </Link>
        <Logo />
        <Search />
        <User />
      </div>
    </div>
  );
};

export default HeaderMain;
