import { useState } from "react";
import { TYPES } from "./actions";
import { productList } from "./productList";
const initialState = {
  products: [...productList],
  cart: [],
  total: 0,
  count: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case TYPES.READ_STATE: {
      //actualiza el estado del carrito, para usar con json-server
      return {
        ...state,
        products: action.payload[0],
        cart: action.payload[1],
        // total: action.payload[2],
        // count: action.payload[3],
      };
    }
    case TYPES.ADD_TO_CART: {
      //agregar a carrito
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );
      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
            // total: newTotal,
            total: parseFloat(state.total) + parseFloat(newItem.price),
            count: parseFloat(state.count) + 1,
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
            // total: newTotal,
            total: parseFloat(state.total) + parseFloat(newItem.price),
            count: parseFloat(state.count) + 1,
          };

      // return { ...state, cart: [...state.cart, newItem] };
    }
    case TYPES.REMOVE_ITEM: {
      //eliminar 1 item del carrito
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
            total: parseFloat(state.total) - parseFloat(itemToDelete.price),
            count: parseFloat(state.count) - 1,
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
            total: parseFloat(state.total) - parseFloat(itemToDelete.price),
            count: parseFloat(state.count) - 1,
          };
    }
    case TYPES.REMOVE_ALL_ITEMS: {
      //eliminar todos los items de 1 MISMO tipo
      let itemToDelete = state.cart.find((item) => item.id === action.payload);
      let itemToDeletePrice = itemToDelete.price * itemToDelete.quantity;

      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
        total: parseFloat(state.total) - itemToDeletePrice,
        count: parseFloat(state.count) - parseFloat(itemToDelete.quantity),
      };
    }
    case TYPES.CLEAR_CART: {
      //eliminar todos los items / limpiar carrito
      return initialState;
    }
    default:
      return state;
  }
};

export { initialState };
export default cartReducer;
