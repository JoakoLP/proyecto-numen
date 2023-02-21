import { TYPES } from "./actions";

const initialState = {
  products: [
    {
      id: 1,
      name: "Ryzen 5 5600G",
      category: "microprocesador",
      image: "https://m.media-amazon.com/images/I/51f2hkWjTlL._AC_SL1200_.jpg",
      price: "29000",
    },
    {
      id: 2,
      name: "Intel i5 12100F",
      category: "microprocesador",
      image:
        "https://www.qloud.ar/SITES/IMG/m-y-m-computacion-06-2020/0000000000005032037237741.jpg",
      price: "28500",
    },
    {
      id: 3,
      name: "RTX 4090",
      category: "grafica",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToaVE-4MAWm5v13accbCDowPsUIGoBqyif_w&usqp=CAU",
      price: "500000",
    },
    {
      id: 4,
      name: "Ryzen 7",
      category: "microprocesador",
      image: "https://c1.neweggimages.com/ProductImage/19-113-104-V11.jpg",
      price: "45000",
    },
    {
      id: 5,
      name: "Patriot Viper ddr4",
      category: "ram",
      image:
        "https://s3-sa-east-1.amazonaws.com/saasargentina/BdBSBBthjCJxMWm8AFcK/imagen",
      price: "999",
    },
    {
      id: 6,
      name: "Kingston Fury ddr4",
      category: "ram",
      image:
        "https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-kit2-1-sm.jpg",
      price: "9999",
    },
    {
      id: 7,
      name: "Vengeance Pro",
      category: "ram",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_759344-MLA32170318615_092019-W.jpg",
      price: "9999",
    },
    {
      id: 8,
      name: "Asus Prime AII",
      category: "motherboard",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_853378-MLA51199432518_082022-O.jpg",
      price: "21542",
    },
    {
      id: 9,
      name: "Asus Rog Strix z-590",
      category: "motherboard",
      image:
        "hhttp://d3ugyf2ht6aenh.cloudfront.net/stores/002/278/419/products/rog-strix-z590-e1-fd069369f78a11f3dd16583509998454-640-0.jpg",
      price: "34621",
    },
    {
      id: 10,
      name: "MSI MPG Z690",
      category: "motherboard",
      image:
        "https://front.dev.malditohard.com.ar/img/migration/MOTHER-MSI-MPG-Z690-CARBON-WIFI-DDR5-1700-12VA.webp",
      price: "23462",
    },
  ],
  cart: [],
  total: 0,
  count: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case TYPES.READ_STATE: {
      //actualiza el estado del carrito
      break;
      // return {
      //   ...state,
      //   products: action.payload[0],
      //   cart: action.payload[1],
      // };
    }
    case TYPES.ADD_TO_CART: {
      //agregar a carrito
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );
      let itemInCart = state.cart.find((item) => item.id === newItem.id);
      // console.log({ ...state, cart: [...state.cart, newItem] });
      // console.log(state);

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
      break;
      // return;
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
