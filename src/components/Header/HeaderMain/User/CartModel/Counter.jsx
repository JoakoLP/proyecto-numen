import React, { useContext } from "react";
import { CartContext } from "../../../../../contexts/CartProvider";

import * as styles from "../styles";

const Counter = () => {
  const [state, dispatch, actions] = useContext(CartContext);
  const { products, cart, total, count } = state;
  return (
    <div className={styles.counter}>
      <p
        title={`${count} productos en el carrito`}
        className={styles.counterNumber}
      >
        {count}
      </p>
    </div>
  );
};

export default Counter;
