import React from "react";
import { TitleFoot , UlFoot} from "./style";

import MP from "./imgProvisorio/mp.png"
import Visa from "./imgProvisorio/visa.png"
import MasterCard from "./imgProvisorio/mastercard.png"
import AmercanExpress from "./imgProvisorio/americanexp.png"

function Column2 () {
    return (
        <div>
            <div className="pb-7">
                <h3 className={TitleFoot}>PROMOS & FINANCIACIÓN</h3>
                <ul className={UlFoot}>
                    <li>Ahora 12</li>
                    <li>Cyber Week</li>
                    <li>Black Friday</li>
                    <li>Sorteos</li>
                </ul>
            </div>
            <div className="pb-7">
                <h3 className={TitleFoot}>FORMAS DE PAGO</h3>
                <div className="flex justify-between p-5 columns-4">
                    <img className="h-20 m-2" src={Visa} alt="" />
                    <img className="h-20 m-2" src={MasterCard} alt="" />
                    <img className="h-20 m-2" src={AmercanExpress} alt="" />
                    <img className="h-20 m-2" src={MP} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Column2;