import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartProvider";
import CartItem from "./CartItem";
import * as styles from "./styles";

const clearCart = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    class="bi bi-trash3"
    viewBox="0 0 16 16"
  >
    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
  </svg>
);

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
              addToCart={actions.addToCart}
              deleteFromCart={actions.deleteFromCart}
              deleteAllItems={actions.deleteAllItems}
            />
          ))}
        </div>
        <div className={styles.totalBar}>
          <button
            onClick={() => {
              actions.clearCart();
            }}
            className={styles.clearCart}
            title="Vaciar carrito"
          >
            <span className={styles.clearCartBtn}>{clearCart}</span>
          </button>

          <p className={styles.total}>TOTAL: ${total}</p>
        </div>
      </>
    );
  }
};

export default Cart;
