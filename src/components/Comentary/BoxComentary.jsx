import React from "react";

const BoxComentary = ({ item }) => {
  return (
    <div className="flex-1 h-[600px] md:h-[250px] m-2 shadow-lg rounded-md overflow-hidden relative">
      <h3>{item.nick}</h3>
      <p>{item.comentary}</p>
    </div>
  );
};

export default BoxComentary;
