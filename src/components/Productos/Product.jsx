import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartProvider";
import { motion } from "framer-motion";

const Product = (props) => {
  const { data } = props;

  // useContext;
  const [state, dispatch, actions] = useContext(CartContext);

  return (
    <motion.div
      animate={{ opacity: 4 }}
      initial={{ opacity: 0 }}
      key={data.id}
      className="flex sm:flex-col h-min sm:h-[500px] justify-between p-2 duration-300 border border-purple-700 rounded-lg shadow-lg hover:shadow-[rgb(196,36,255,0.25)] hover:scale-105"
    >
      <div className="w-[130px] shrink-0 sm:w-auto h-[130px] sm:h-[250px] p-2 flex items-center justify-center sm:mx-1 bg-white rounded-md">
        <img
          src={data.img}
          alt={data.name}
          className="object-contain w-full h-full truncate rounded-t-lg "
        />
      </div>

      <div className="flex flex-col min-h-max w-full sm:h-[45%] justify-between px-2 my-2 sm:my-4 text-center">
        <p className="text-xs sm:text-sm md:text-base text-left sm:text-center h-[64px] sm:h-[80px] md:h-[96px] text-ellipsis text-white overflow-hidden hover:overflow-visible">
          {data.name}
        </p>
        <div className="flex flex-col self-end sm:w-full sm:self-auto w-min">
          <span className="py-1 font-bold text-center text-white rounded-full ">
            ${data.price}
          </span>
          <button
            onClick={() => {
              actions.addToCart(data.id, data.name);
            }}
            className="bg-[#8a4af3] self-center  text-white font-bold text-sm py-1 sm:py-2 px-2 sm:px-4 rounded-full duration-300 active:scale-125 active:duration-100 hover:bg-purple-900 hover:shadow-inner hover:shadow-neutral-800 w-min whitespace-nowrap"
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Product;
