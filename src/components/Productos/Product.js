import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartProvider";

const Product = (props) => {
  const { data } = props;

  // useContext;
  const [state, dispatch, actions] = useContext(CartContext);

  return (
    <div
      key={data.id}
      className="flex flex-col justify-between p-2 duration-300 border border-purple-700 rounded-lg shadow-lg hover:shadow-[rgb(196,36,255,0.1)] hover:scale-105"
    >
      <div className="mx-3 mt-3 bg-white rounded-md">
        <img
          src={data.img}
          alt={data.name}
          className="w-full h-[200px] object-contain rounded-t-lg truncate "
        />
      </div>

      <div className="flex flex-col h-[45%] justify-end px-2 py-4 space-y-4 text-center">
        <p className="font-bold h-[35%] text-ellipsis text-white overflow-hidden hover:overflow-visible">
          {data.name}
        </p>
        <span className="pt-2 font-bold text-white rounded-full ">
          ${data.price}
        </span>
        <button
          onClick={() => {
            actions.addToCart(data.id);
          }}
          className="bg-[#8a4af3] self-center hover:bg-purple-900  text-white font-bold sm:text-xs py-2 px-4 rounded-full duration-300 hover:shadow-inner hover:shadow-neutral-800 w-min whitespace-nowrap"
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default Product;
