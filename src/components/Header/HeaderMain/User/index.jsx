import React from "react";
// import Account from "./account";
// import Cart from "./cart";
import Preset from "./preset";
import imgUser from "../../../../img/fi-rr-user.svg";
import imgCart from "../../../../img/fi-rr-shopping-cart.svg";
import Contador from "./contador";
import * as styles from "./styles";

const User = () => {
  return (
    <div className={styles.user}>
      {/* reemplazados por props. */}
      {/* <Account/> */}
      {/* <Cart/> */}
      {/* PREGUNTAR: Por qué los elementos no usan el tamaño que se les ordena? */}
      <Preset img={imgUser} txt="Mi Cuenta" />
      <Preset img={imgCart} txt="Mi Carrito" />
      <Contador />
    </div>
  );
};

export default User;
