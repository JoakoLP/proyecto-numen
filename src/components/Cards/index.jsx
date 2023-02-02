import React from "react";
import { items } from "./constants";
import * as styles from "./styles";

const Cards = () => {
  return (
    <div className={styles.CONTAINER}>
      {items.map((item) => (
        <p className={styles.CARD}>{item.texto}</p>
      ))}
    </div>
  );
};

export default Cards;
