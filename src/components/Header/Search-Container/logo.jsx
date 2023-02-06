// para usar en caso de tener icono + texto
// sin usar por ahora, faltan modificaciones
import React from "react";
import * as styles from "./styles";

const Logo = () =>{
    return (
        <div>
            <div className={styles.titleTxt}>
                <span>Maximus</span>
                <span className={styles.subtitleTxt}>Gaming Hardware</span>
            </div>
        </div>
    )
}

export default Logo;