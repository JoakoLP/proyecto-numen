import React, { useState } from "react";
import ModalContainer from "./ModalContainer";
import imgCart from "../../../../../img/fi-rr-shopping-cart.svg";
import * as styles from "../styles";
import Cart from "../../../../Cart/Cart";
import Counter from "./Counter";
const CartModal = () => {
  const [modalStatus, setModalStatus] = useState(false);

  return (
    <>
      <div className={styles.cart} onClick={() => setModalStatus(!modalStatus)}>
        <img src={imgCart} alt="" className={styles.imgUser} />
        <span className={styles.userText}>Mi Carrito</span>
        <Counter />
      </div>

      <ModalContainer status={modalStatus} setStatus={setModalStatus}>
        <Cart />
      </ModalContainer>
    </>
  );
};

export default CartModal;
