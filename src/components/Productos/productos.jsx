import React, { useContext, useState } from "react";
import Product from "./Product";
import { CartContext } from "../../contexts/CartProvider";
import { motion } from "framer-motion";

const Productos = () => {
  // useContext
  const [state, dispatch, actions] = useContext(CartContext);
  const data = state.products;



  // console.log(data);
  const [products, setProducts] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");

  //   Filter
  const filterType = (category) => {
    setProducts(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };



  //Search list of objects
  const handleSearch = (event) => {
    const query = event.target.value
    setSearchQuery(query)

    const searchList = data.filter((item) => {
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })

    setProducts(searchList)
  };



  const styleBtn =
    "m-1 mx-2 px-4 border-[#8a4af3] text-neutral-200 bg-purple-700 active:scale-75 active:duration-100 hover:bg-purple-900 hover:text-white rounded-full duration-300 hover:shadow-inner hover:shadow-neutral-800 hover:scale-105 p-2";

  return (
    <div className="max-w-[1640px] m-auto px-4 py-4">
      <h1 className="m-auto text-4xl font-bold text-center border-b-2 border-purple-700 w-min text-neutral-200">
        Componentes
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col justify-between pt-4 lg:flex-row">
        {/* Fliter Type */}
        <div>
          <div className="pb-2 ">
            <p className="font-bold text-white pb-2">Busqueda</p>
            <input
              className=" flex pt-2 overflow-scroll categBtns flex-nowrap justfiy-between h-min whitespace-nowrap focus:bg-white focus:border-indigo-600"
              type="text"
              name="search"
              placeholder="Buscar"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>

          <p className="font-bold text-white">Filtro por Categoria</p>

          <div className="flex pt-2 overflow-scroll categBtns flex-nowrap justfiy-between h-min whitespace-nowrap">

            <button onClick={() => setProducts(data)} className={styleBtn}>
              Todo
            </button>
            <button onClick={() => filterType("CPU")} className={styleBtn}>
              Microprocesador
            </button>
            <button onClick={() => filterType("RAM")} className={styleBtn}>
              RAM
            </button>
            <button onClick={() => filterType("SSD")} className={styleBtn}>
              Disco Sólido
            </button>
            <button onClick={() => filterType("HDD")} className={styleBtn}>
              Disco Duro
            </button>
            <button
              onClick={() => filterType("Motherboards")}
              className={styleBtn}
            >
              Motherboard
            </button>
            <button onClick={() => filterType("GPU")} className={styleBtn}>
              Grafica
            </button>
            <button
              onClick={() => filterType("Notebooks")}
              className={styleBtn}
            >
              Notebook
            </button>
            <button onClick={() => filterType("Desktop")} className={styleBtn}>
              PC de Escritorio
            </button>
          </div>
        </div>
      </div>

      {/* display productos */}
      <motion.div className="grid gap-6 pt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {products.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </motion.div>
    </div>
  );
};

export default Productos;
