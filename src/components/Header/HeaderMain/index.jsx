import React from "react";
import imgIcon from "../../../img/icons8-circuit-96.png";
import Search from "./search";
import User from "./User";
import * as styles from "./styles";

const HeaderMain = () => {
  return (
    <div className={styles.headerMain}>
      <div className={styles.formContainer}>
        <div className={styles.iconCont}>
          <img src={imgIcon} alt="" className={styles.icon} />
        </div>
        <Search />
        <User />
      </div>
    </div>
  );
};

export default HeaderMain;
