import React from "react";
import imgIcon from "../../../img/icons8-circuit-96.png";
import * as styles from "./styles";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className={styles.iconTitleCont}>
      <Link className={styles.icon} to={"/"}>
        <img src={imgIcon} alt="" className={styles.icon} />
      </Link>
      <span className={styles.title}>
        <span className={styles.titleTxt}>GAMING STORE</span>
        <span className={styles.subtitleTxt}>Low High Budget</span>
      </span>
    </div>
  );
};

export default Logo;
