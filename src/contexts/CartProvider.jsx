import { createContext, useReducer } from "react";
import { initialState } from "../components/Cart/cartReducer";
import cartReducer from "../components/Cart/cartReducer";
import { TYPES } from "../components/Cart/actions";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // const [cart, setCart] = useState([]);

  const [state, dispatch] = useReducer(cartReducer, initialState);

  // const { productos, cart } = state;

  const actions = {
    addToCart: (id) => {
      console.log(`Producto de id "${id}" agregado al carrito.`);
      dispatch({ type: TYPES.ADD_TO_CART, payload: id });
      // console.log(`Carrito:`);
      // console.log(state.cart);
    },
    deleteFromCart: (id) => {
      console.log(`Producto de id "${id}" eliminado del carrito.`);
      dispatch({ type: TYPES.REMOVE_ITEM, payload: id });
    },
  };
  // console.log(children);
  // console.log(CartContext);

  return (
    <CartContext.Provider value={[state, dispatch, actions]}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
