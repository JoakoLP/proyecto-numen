import React from "react";
import { TitleFoot, UlFoot } from "./style";

function Column1 () {
    return(
        <div>
            <div className="pb-7">
                <h3 className={TitleFoot}>NOSOTROS</h3>
                <ul className={UlFoot}>
                    <li>¿Cómo comprar?</li>
                    <li>Preguntas Frecuentes</li>
                    <li>Envíos</li>
                </ul>
            </div>
            <div className="pb-7">
                <h3 className={TitleFoot}>SOPORTE</h3>
                <ul className={UlFoot}>
                    <li>Condiciones de Uso</li>
                    <li>Políticas de Seguridad</li>
                    <li>Garantía</li>
                    <li>Botón de Arrepentimiento</li>
                </ul>
            </div>
        </div>
    )
}

export default Column1;