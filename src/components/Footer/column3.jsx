import React from "react";
import { TitleFoot , UlFoot} from "./style";

function Column3 () {
    return (
        <div>
            <div className="pb-7">
                <h3 className={TitleFoot}>Calle Falsa 123, CABA.</h3>
                <ul className={UlFoot}>
                    <li>Lunes a Viernes: 10:00hs - 18:00hs</li>
                    <li>Sábados: 10:00hs - 14:00hs</li>
                    <li>Domingos y Feriados: Cerrado</li>
                    <li>0800 111 2222</li>
                </ul>
            </div>
            <div className="pb-7">
                <h3 className={TitleFoot}>VENTAS</h3>
                <ul className={UlFoot}>
                    <li>ventas@proyecto.com.ar</li>
                    <li>atencionalcliente@proyecto.com.ar</li>
                </ul>
            </div>
        </div>
    )
}

export default Column3;