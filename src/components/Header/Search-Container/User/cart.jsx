import React from "react";
import imgCart from "../../../../img/fi-rr-shopping-cart.svg"
import * as styles from "./styles"

const Cart = () =>{
    return(
        <div className={styles.cart}>
            <img src={imgCart} alt="" className={styles.imgUser}/>
            <span className={styles.userText}>Mi Carrito</span>
        </div>
    )
}

export default Cart