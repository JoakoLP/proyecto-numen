import React from "react";

function DescriptionCombo() {
  return (
    <div className="m-10 h-96 whitespace-normal sm:w-[640px] md:w-[768px] self-center flex items-center justify-center flex-col text-white sm:whitespace-nowrap">
      <h2 className="my-5 text-3xl font-bold text-center">
        Combo AGILIZÁ TU PC
      </h2>
      <ul className="text-lg tracking-wide list-disc ">
        <li>
          Microprocesador Pc Amd Ryzen 5 4600g 8mb 3.7ghz 6 Nucleos 12 Hilos
        </li>
        <li>Placa de video Amd Afox Radeon RX 500 Series RX 580 8GB</li>
        <li>Motherboard Asus Prime A320m-k Am4 Ddr4 Usb 3.0 Hdmi A320</li>
        <li>Memoria RAM Fury Beast Kingston</li>
      </ul>
      <p className="my-5 text-xl font-bold text-center">$$$$</p>
      <button className="text-white rounded-full whitespace-nowrap bg-[#8a4af3] hover:bg-purple-900 font-bold sm:text-xs py-2 px-4 duration-300 hover:shadow-inner hover:shadow-neutral-800">
        Agregar al carrito
      </button>
    </div>
  );
}
export default DescriptionCombo;
