import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartProvider";

const Product = (props) => {
  const { data } = props;

  // useContext;
  const [state, dispatch, actions] = useContext(CartContext);
  const { productos, cart } = state;

  return (
    <div
      key={data.id}
      className="duration-300 border rounded-lg shadow-lg hover:scale-105"
    >
      <img
        src={data.image}
        alt={data.name}
        className="w-full h-[200px] object-contain rounded-t-lg"
      />

      <div className="flex flex-col justify-between px-2 py-4 space-y-4 text-center">
        <p className="font-bold">{data.name}</p>
        <p>
          <span className="p-1 font-bold text-black rounded-full ">
            {data.price}
          </span>
        </p>
        <button
          onClick={() => {
            actions.addToCart(data.id);
          }}
          className="bg-[#8a4af3] hover:bg-purple-900  text-white font-bold sm:text-xs py-2 px-4 rounded-full"
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default Product;
