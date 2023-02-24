import React from "react";

function WriteComentary(nComentario) {
  return (
    <div className="bg-grey-200 w-600 h-120 flex justify-center items-center flex-col bg-no-repeat bg-cover">
      let texto ={""}; texto ={" "}
      <input
        id="nuevoComentario"
        type="text"
        placeholder="Nuevo Comentario..."
      />
      console.log(texto);
      <div className="pt-2 pb-2">
        <button
          className="pt-1 pr-1 pl-1 pb-1 rounded-3xl bg-blue-200"
          onClick=""
        >
          Comentar
        </button>
      </div>
    </div>
  );
}

export default WriteComentary;
