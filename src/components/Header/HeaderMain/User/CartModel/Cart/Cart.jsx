import React, { useReducer } from "react";
import { TYPES } from "./actions";
import { initialState, cartReducer } from "./CartReducer";
// import * as styles from "./styles";

const Cart = () => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  return (
    <div>
      <h2>Productos</h2>
    </div>
  );
};

export default Cart;
