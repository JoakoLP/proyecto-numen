import React, { useReducer } from "react";
import { TYPES } from "./actions";
import { initialState, cartReducer } from "./cartReducer";

// import * as styles from "./styles";

const Cart = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const { products, cart } = state;

  const updateState = async () => {};

  // const addToCart=()={};

  // const removeItemFromCart=()={};

  // const removeAllItemsFromCart=()={};

  // const clearCart=()={};

  return (
    <div>
      <h2 style={{ color: "white" }}>Su pedido:</h2>
      <div>
        {/* {products.map((product) => (
          <Product key={product.id} data={product} />
        ))} */}
      </div>
      {/* <button onClick={dispatch()}></button> */}
    </div>
  );
};

export default Cart;
