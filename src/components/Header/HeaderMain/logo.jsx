// para usar en caso de tener icono + texto
// sin usar por ahora, faltan modificaciones
import React from "react";
import imgIcon from "../../../img/icons8-circuit-96.png";
import * as styles from "./styles";

const Logo = () => {
  return (
    <div className={styles.iconTitleCont}>
      <img src={imgIcon} alt="" className={styles.icon} />
      <span className={styles.title}>
        <span className={styles.titleTxt}>GAMING STORE</span>
        <span className={styles.subtitleTxt}>Low High Budget</span>
      </span>
    </div>
  );
};

export default Logo;
