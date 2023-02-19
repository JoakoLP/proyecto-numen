import React, { useState } from "react";
import { data } from "./productoData";

const Productos = () => {
  //   console.log(data);
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
      <h1 className="text-black font-bold text-4xl text-center">Componentes</h1>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Fliter Type */}
        <div>
          <p className="font-bold text-white">Filtro por Categoria</p>
          <div className="flex justfiy-between flex-wrap">
            <button
              onClick={() => setProducts(data)}
              className="m-1 border-[#8a4af3] text-black hover:bg-purple-900 hover:text-white rounded-full p-2"
            >
              All
            </button>
            <button
              onClick={() => filterType("microprocesador")}
              className="m-1 border-[#8a4af3] text-black hover:bg-purple-900 hover:text-white rounded-full p-2 "
            >
              Microprocesador
            </button>
            <button
              onClick={() => filterType("ram")}
              className="m-1 border-[#8a4af3] text-black hover:bg-purple-900 hover:text-white rounded-full p-2 "
            >
              RAM
            </button>
            <button
              onClick={() => filterType("motherboard")}
              className="m-1 border-[#8a4af3] text-black hover:bg-purple-900 hover:text-white rounded-full p-2 "
            >
              Motherboard
            </button>
            <button
              onClick={() => filterType("grafica")}
              className="m-1 border-[#8a4af3] text-black hover:bg-purple-900 hover:text-white rounded-full p-2 "
            >
              Grafica
            </button>
          </div>
        </div>
      </div>

      {/* display productos */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {products.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-contain rounded-t-lg"
            />

            <div className="flex flex-col justify-between px-2 py-4 text-center space-y-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className=" text-black text-black font-bold p-1 rounded-full">
                  {item.price}
                </span>
              </p>
              <button class="bg-[#8a4af3] hover:bg-purple-900  text-white font-bold sm:text-xs py-2 px-4 rounded-full">
                Agregar al Carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
