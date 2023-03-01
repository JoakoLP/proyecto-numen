import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartProvider";

function DescriptionCombo() {
  const [state, dispatch, actions] = useContext(CartContext);
  return (
    <div className="m-10 h-min whitespace-normal sm:w-[640px] md:w-[768px] self-center flex items-center justify-center flex-col text-white sm:whitespace-nowrap">
      <h2 className="my-2 text-3xl font-bold text-center sm:my-5">
        Combo AGILIZÁ TU PC
      </h2>
      <ul className="text-lg tracking-wide list-disc ">
        <li>Procesador AMD Ryzen 5 5600g 4.4ghz - AM4</li>
        <li>Motherboard MSI X470 GAMING PLUS MAX AM4</li>
        <li>Memoria RAM 16GB 2x8 3200Mhz Corsair Vengance Rgb Pro</li>
        <li>Disco Sólido SSD 256GB Samsung NVMe</li>
        <li>Disco Rígido 1Tb WD Purple</li>
      </ul>
      <p className="my-2 text-xl font-bold text-center sm:my-5">$212830</p>
      <button
        onClick={() => {
          actions.addToCart(15);
        }}
        className="text-white rounded-full whitespace-nowrap bg-[#8a4af3] duration-300 active:scale-125 active:duration-100 hover:bg-purple-900 hover:shadow-inner hover:shadow-neutral-800 font-bold sm:text-xs py-2 px-4"
      >
        Agregar al carrito
      </button>
    </div>
  );
}
export default DescriptionCombo;