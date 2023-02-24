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
      <div className="w-auto h-[200px] sm:h-[250px] p-2 flex items-center justify-center mx-1 mt-1 bg-white rounded-md">
        <img
          src={data.img}
          alt={data.name}
          className="object-contain w-full h-full truncate rounded-t-lg "
        />
      </div>

      <div className="flex flex-col h-[45%] justify-between px-2 my-4 text-center">
        <p className="font-bold h-[45%] text-ellipsis text-white overflow-hidden hover:overflow-visible">
          {data.name}
        </p>
        <div className="flex flex-col">
          <span className="pt-1 font-bold text-white rounded-full ">
            ${data.price}
          </span>
          <button
            onClick={() => {
              actions.addToCart(data.id);
            }}
            className="bg-[#8a4af3] self-center hover:bg-purple-900  text-white font-bold text-sm py-2 px-4 rounded-full duration-300 hover:shadow-inner hover:shadow-neutral-800 w-min whitespace-nowrap"
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
