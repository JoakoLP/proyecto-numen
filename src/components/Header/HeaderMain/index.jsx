import React from "react";
import imgIcon from "../../../img/icons8-circuit-96.png";
import Search from "./search";
import User from "./User";
import * as styles from "./styles";
import Logo from "./logo";

const HeaderMain = () => {
  return (
    <div className={styles.headerMain}>
      <div className={styles.formContainer}>
        <Logo />
        {/* <div className={styles.iconCont}>
          <img src={imgIcon} alt="" className={styles.icon} />
        </div> */}
        <Search />
        <User />
      </div>
    </div>
  );
};

export default HeaderMain;
