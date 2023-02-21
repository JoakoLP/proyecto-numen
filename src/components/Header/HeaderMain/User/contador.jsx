import React, { useContext } from "react";
import { CartContext } from "../../../../contexts/CartProvider";
import * as styles from "./styles";

// Por ahora tiene poco contenido, pero más adelante tendrá un contador de los items en el carrito.
const Contador = () => {
  const [state, dispatch, actions] = useContext(CartContext);
  const { products, cart, total, count } = state;
  return (
    <div className={styles.counter}>
      <p className={styles.counterNumber}>{count}</p>
    </div>
  );
};

export default Contador;
