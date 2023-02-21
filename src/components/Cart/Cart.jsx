import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartProvider";
import CartItem from "./CartItem";
import * as styles from "./styles";

// CON useContext
const Cart = () => {
  const [state, dispatch, actions] = useContext(CartContext);
  const { products, cart, total } = state;

  if (cart.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <p className={styles.empCarTxt}>El carrito está vacio.</p>
      </div>
    );
  } else {
    return (
      <>
        <div className={styles.cart}>
          {/* {console.log(cart)} */}
          {cart.map((item) => (
            <CartItem
              key={item.id}
              data={item}
              deleteFromCart={actions.deleteFromCart}
            />
          ))}
        </div>
        <p className={styles.total}>TOTAL: ${total}</p>
      </>
    );
  }
};

export default Cart;
