import { createContext, useEffect, useReducer } from "react";
import { initialState } from "../components/Cart/cartReducer";
import cartReducer from "../components/Cart/cartReducer";
import { TYPES } from "../components/Cart/actions";
import axios from "axios";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // const updateState = async () => {
  //   const productsURL = "https://localhost:300/products";
  //   const cartURL = "https://localhost:300/cart";
  //   const totalURL = "https://localhost:300/total";
  //   const countURL = "https://localhost:300/count";
  //   const resProducts = await axios.get(productsURL);
  //   const resCart = await axios.get(cartURL);
  //   const resTotal = await axios.get(totalURL);
  //   const resCount = await axios.get(countURL);
  //   const newProduct = await resProducts.data;
  //   const newCartItem = await resCart.data;
  //   const newTotal = await resTotal.data;
  //   const newCount = await resCount.data;

  //   dispatch({
  //     type: TYPES.READ_STATE,
  //     payload: [newProduct, newCartItem, newTotal, newCount],
  //   });
  // };
  // useEffect(() => {
  //   updateState();
  // }, []);

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
