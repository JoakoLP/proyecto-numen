import { createContext, useEffect, useReducer } from "react";
import { initialState } from "../components/Cart/cartReducer";
import cartReducer from "../components/Cart/cartReducer";
import { TYPES } from "../components/Cart/actions";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const actions = {
    addToCart: (id) => {
      console.log(`Producto de id "${id}" agregado al carrito.`);
      dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    },
    deleteFromCart: (id) => {
      console.log(`Producto de id "${id}" eliminado del carrito.`);
      dispatch({ type: TYPES.REMOVE_ITEM, payload: id });
    },
    deleteAllItems: (id) => {
      console.log(
        `Todos los productos de id "${id}" fueron eliminados del carrito.`
      );
      dispatch({ type: TYPES.REMOVE_ALL_ITEMS, payload: id });
    },
    clearCart: (id) => {
      console.log(`Carrito vaciado.`);
      dispatch({ type: TYPES.CLEAR_CART, payload: id });
    },
  };

  return (
    <CartContext.Provider value={[state, dispatch, actions]}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
