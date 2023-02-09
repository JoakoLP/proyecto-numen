import React from "react";
import * as styles from "./styles";

const Preset = (props) => {
  return (
    <a className={styles.account} href="#">
      <img src={props.img} alt="" className={styles.imgUser} />
      <span className={styles.userText}>{props.txt}</span>
    </a>
  );
};

export default Preset;
