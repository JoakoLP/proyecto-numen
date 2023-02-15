import React, { useReducer } from "react";
import { TYPES } from "./actions";
import { initialState, cartReducer } from "./cartReducer";
// import * as styles from "./styles";

const Cart = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <div>
      <h2 style={{ color: "white" }}>Productos</h2>
    </div>
  );
};

export default Cart;
