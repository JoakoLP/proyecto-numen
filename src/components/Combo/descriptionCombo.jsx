import React from "react";

function DescriptionCombo() {
  return (
    <div className="m-10 h-96 w-[350px] self-center">
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
      <button className="content-center p-1 mx-32 my-2 text-center text-white rounded-full px-7 bg-fuchsia-icon">
        Agregar al carrito
      </button>
    </div>
  );
}
export default DescriptionCombo;
