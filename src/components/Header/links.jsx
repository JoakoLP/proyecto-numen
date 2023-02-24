import React from "react";
import shipImg from "../../img/enviosups.svg";
import docImg from "../../img/fi-rr-document-signed.svg";
import formImg from "../../img/fi-rr-form.svg";
import helpImg from "../../img/fi-rr-interrogation.svg";
import * as styles from "./styles";

const Links = () => {
  return (
    <div className={styles.linksCont}>
      <span href="#" className={styles.link}>
        <img src={shipImg} className={styles.linkImg} alt="" />
        Seguir mi Pedido UPS
      </span>
      <span href="#" className={styles.link}>
        <img src={shipImg} className={styles.linkImg} alt="" />
        Seguir mi Pedido OCA
      </span>
      <span href="#" className={styles.link}>
        <img src={docImg} className={styles.linkImg} alt="" />
        Subir Comprobantes
      </span>
      <span href="#" className={styles.link}>
        <img src={formImg} className={styles.linkImg} alt="" />
        RMA - Garantia
      </span>
      <span href="#" className={styles.link}>
        <img src={helpImg} className={styles.linkImg} alt="" />
        Ayuda
      </span>
    </div>
  );
};

export default Links;
