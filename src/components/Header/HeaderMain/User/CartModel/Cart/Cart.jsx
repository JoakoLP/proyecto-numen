import React, { useReducer } from "react";
import { TYPES } from "./actions";
import { initialState, cartReducer } from "./cartReducer";
// import * as styles from "./styles";

const Cart = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const { products, cart } = state;

  const updateState = async () => {};

  return (
    <div>
      <h2 style={{ color: "white" }}>Productos</h2>
      <div>{/* {cart.map((product) => ())} */}</div>
      {/* <button onClick={dispatch()}></button> */}
    </div>
  );
};

export default Cart;
