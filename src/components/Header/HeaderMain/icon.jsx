import React from "react";
import imgIcon from "../../../img/icons8-circuit-96.png";
import * as styles from "./styles";

const Icon = () => {
  return (
    <div className={styles.iconCont}>
      <img src={imgIcon} alt="" className={styles.icon} />
    </div>
  );
};

export default Icon;
