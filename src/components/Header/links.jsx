import React from "react";
import shipImg from "../../img/enviosups.svg"
import docImg from "../../img/fi-rr-document-signed.svg"
import formImg from "../../img/fi-rr-form.svg"
import helpImg from "../../img/fi-rr-interrogation.svg"
import * as styles from "./styles"

const Links = () => {
    return(
        <div className={styles.linksCont}>
            <a href="#" className={styles.link}><img src={shipImg} className={styles.linkImg} alt="" />Seguir mi Pedido UPS</a>
            <a href="#" className={styles.link}><img src={shipImg} className={styles.linkImg} alt="" />Seguir mi Pedido OCA</a>
            <a href="#" className={styles.link}><img src={docImg} className={styles.linkImg} alt="" />Subir Comprobantes</a>
            <a href="#" className={styles.link}><img src={formImg} className={styles.linkImg} alt="" />RMA - Garantia</a>
            <a href="#" className={styles.link}><img src={helpImg} className={styles.linkImg} alt="" />Ayuda</a>
        </div>
    )
}

export default Links