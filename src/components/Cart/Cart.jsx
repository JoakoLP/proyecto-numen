import React, { useContext, useReducer } from "react";
import { CartContext } from "../../contexts/CartProvider";
import { TYPES } from "./actions";
import { initialState, cartReducer } from "./cartReducer";
import CartItem from "./CartItem";
import * as styles from "./styles";

// CON useContext
const Cart = () => {
  const [state, dispatch, actions] = useContext(CartContext);
  const { products, cart, total } = state;
  console.log(total);

  if (cart.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <p className={styles.empCarTxt}>El carrito está vacio.</p>
      </div>
    );
  } else {
    return (
      <>
        {/* <h2 className={styles.cartTitle}>Su pedido:</h2> */}
        <div className={styles.cart}>
          {/* {console.log(cart)} */}
          {cart.map((item) => (
            <CartItem
              key={item.id}
              data={item}
              deleteFromCart={actions.deleteFromCart}
            />
          ))}
          {/* <span>{cart.map((item) => (total = total + item.price))}</span> */}
        </div>
        <p className={styles.total}>TOTAL: ${total}</p>
      </>
    );
  }
};

export default Cart;
