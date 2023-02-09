import React from "react";
// import Account from "./account";
// import Cart from "./cart";
import imgUser from "../../../../img/fi-rr-user.svg";
import imgCart from "../../../../img/fi-rr-shopping-cart.svg";
import Contador from "./contador";
import * as styles from "./styles";

const Preset = (props) => {
  return (
    <a className={styles.account} href="#">
      <img src={props.img} alt="" className={styles.imgUser} />
      <span className={styles.userText}>{props.txt}</span>
    </a>
  );
};

const User = () => {
  return (
    <div className={styles.user}>
      {/* reemplazados por props. Los dejo(por ahora) por las dudas */}
      {/* <Account/> */}
      {/* <Cart/> */}
      <Preset img={imgUser} txt="Mi Cuenta" />
      <Preset img={imgCart} txt="Mi Carrito" />
      <Contador />
    </div>
  );
};

export default User;
