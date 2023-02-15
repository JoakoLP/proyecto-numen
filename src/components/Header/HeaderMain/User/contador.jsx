import React from "react";
import * as styles from "./styles";
// Por ahora tiene poco contenido, pero más adelante tendrá un contador de los items en el carrito.
const Contador = () => {
  return (
    <div className={styles.counter}>
      <p className={styles.counterNumber}>0</p>
    </div>
  );
};

export default Contador;
