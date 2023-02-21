import React from "react";
import CartModal from "./CartModel/CartModal";
import imgUser from "../../../../img/fi-rr-user.svg";
import * as styles from "./styles";

const Preset = (props) => {
  return (
    <div className={styles.account}>
      <img src={props.img} alt="" className={styles.imgUser} />
      <span className={styles.userText}>{props.txt}</span>
    </div>
  );
};

const User = () => {
  return (
    <div className={styles.user}>
      <Preset img={imgUser} txt="Mi Cuenta" />
      <CartModal />
    </div>
  );
};

export default User;
