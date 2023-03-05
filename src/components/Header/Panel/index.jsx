import React from "react";
import * as styles from "./styles";

const Panel = () => {
  return (
    <div className={styles.panelCont}>
      <div className={styles.panel}>
        <div className={styles.pcCont}>
          <span href="#" className={styles.pc}>
            <span className={styles.pcTxt}>ARMA TU PC</span>
          </span>
          <span className={styles.pcBg}></span>
        </div>
      </div>
    </div>
  );
};

export default Panel;
