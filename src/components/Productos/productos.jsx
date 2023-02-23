import React, { useContext, useState } from "react";
import Product from "./Product";
import { CartContext } from "../../contexts/CartProvider";

const Productos = () => {
  // useContext
  const [state, dispatch, actions] = useContext(CartContext);
  const data = state.products;

  // console.log(data);
  const [products, setProducts] = useState(data);

  //   Filter
  const filterType = (category) => {
    setProducts(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-4">
      <h1 className="pb-2 m-auto text-4xl font-bold text-center border-b-2 border-purple-700 w-min text-neutral-200">
        Componentes
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col justify-between lg:flex-row">
        {/* Fliter Type */}
        <div>
          <p className="font-bold text-white">Filtro por Categoria</p>
          <div className="flex flex-wrap pt-2 justfiy-between">
            <button
              onClick={() => setProducts(data)}
              className="m-1 mx-2 px-4 border-[#8a4af3] text-neutral-200 bg-purple-700 hover:bg-purple-900 hover:text-white rounded-full duration-300 hover:shadow-inner hover:shadow-neutral-800 hover:scale-105 p-2"
            >
              All
            </button>
            <button
              onClick={() => filterType("CPU")}
              className="m-1 mx-2 px-4 border-[#8a4af3] text-neutral-200 bg-purple-700 hover:bg-purple-900 hover:text-white rounded-full duration-300 hover:shadow-inner hover:shadow-neutral-800 hover:scale-105 p-2 "
            >
              Microprocesador
            </button>
            <button
              onClick={() => filterType("RAM")}
              className="m-1 mx-2 px-4 border-[#8a4af3] text-neutral-200 bg-purple-700 hover:bg-purple-900 hover:text-white rounded-full duration-300 hover:shadow-inner hover:shadow-neutral-800 hover:scale-105 p-2 "
            >
              RAM
            </button>
            <button
              onClick={() => filterType("Motherboards")}
              className="m-1 mx-2 px-4 border-[#8a4af3] text-neutral-200 bg-purple-700 hover:bg-purple-900 hover:text-white rounded-full duration-300 hover:shadow-inner hover:shadow-neutral-800 hover:scale-105 p-2 "
            >
              Motherboard
            </button>
            <button
              onClick={() => filterType("GPU")}
              className="m-1 mx-2 px-4 border-[#8a4af3] text-neutral-200 bg-purple-700 hover:bg-purple-900 hover:text-white rounded-full duration-300 hover:shadow-inner hover:shadow-neutral-800 hover:scale-105 p-2 "
            >
              Grafica
            </button>
            <button
              onClick={() => filterType("Notebooks")}
              className="m-1 mx-2 px-4 border-[#8a4af3] text-neutral-200 bg-purple-700 hover:bg-purple-900 hover:text-white rounded-full duration-300 hover:shadow-inner hover:shadow-neutral-800 hover:scale-105 p-2 "
            >
              Notebooks
            </button>
            <button
              onClick={() => filterType("Desktop")}
              className="m-1 mx-2 px-4 border-[#8a4af3] text-neutral-200 bg-purple-700 hover:bg-purple-900 hover:text-white rounded-full duration-300 hover:shadow-inner hover:shadow-neutral-800 hover:scale-105 p-2 "
            >
              PC de Escritorio
            </button>
          </div>
        </div>
      </div>

      {/* display productos */}
      <div className="grid grid-cols-2 gap-6 pt-4 lg:grid-cols-4">
        {products.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Productos;
