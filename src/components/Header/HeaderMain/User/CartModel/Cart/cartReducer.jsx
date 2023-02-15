import { TYPES } from "./actions";
import React from "react";

export const initialState = {
  products: [],
  cart: [],
};

export function cartReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      //agregar a carrito
      return;
    }
    case TYPES.REMOVE_ITEM: {
      //eliminar 1 item del carrito
      return;
    }
    case TYPES.REMOVE_ALL_ITEMS: {
      //eliminar todos los items de 1 MISMO tipo
      return;
    }
    case TYPES.CLEAR_CART: {
      //eliminar todos los items / limpiar carrito
      return;
    }
  }
}
