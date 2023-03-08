import { createContext, useEffect, useReducer } from "react";
import { initialState } from "../components/Cart/cartReducer";
import cartReducer from "../components/Cart/cartReducer";
import { TYPES } from "../components/Cart/actions";
import { toast } from "react-toastify";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  let storagedCart = localStorage.getItem("cart");
  let arrayCart = JSON.parse(storagedCart);

  let storagedTotal = localStorage.getItem("total");
  let arrayTotal = JSON.parse(storagedTotal);

  let storagedCount = localStorage.getItem("count");
  let arrayCount = JSON.parse(storagedCount);

  let cartState;
  if (arrayCart != null && arrayCart.length > 0) {
    cartState = {
      ...initialState,
      cart: [...arrayCart],
      total: arrayTotal,
      count: arrayCount,
    };
  } else {
    cartState = initialState;
  }

  const [state, dispatch] = useReducer(cartReducer, cartState);

  useEffect(() => {
    let stringCart = JSON.stringify(state.cart);
    let stringCount = JSON.stringify(state.count);
    let stringTotal = JSON.stringify(state.total);
    localStorage.setItem("cart", stringCart);
    localStorage.setItem("total", stringTotal);
    localStorage.setItem("count", stringCount);
  }, [state]);

  const actions = {
    addToCart: (id, name) => {
      const msgTxt = (
        <div className="text-[rgb(196,36,255,0.8)]">
          <b className="text-white">{name}</b> agregado al carrito!
        </div>
      );
      toast.success(msgTxt, {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        draggablePercent: 30,
        progress: undefined,
        theme: "dark",
      });
      console.log(`Producto de id "${id}" agregado al carrito.`);
      dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    },
    addToCartModal: (id) => {
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
