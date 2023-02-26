import React from "react";
import { useState } from "react";
import { boton, contenedor } from "./style";
const Comentary = () => {
  // const data = [{ text: "hola" }, { text: "hi" }, { text: "holi" }];
  const [search, setSearch] = useState([]);

  return (
    <div className="max-h-100 flex flex-row-reverse rounded-lg ">
      <button>
        <p>
          <code className={boton}>&lt;</code>
        </p>
      </button>

      <form
        className={contenedor}
        onSubmit={(ev) => {
          ev.preventDefault();
          setSearch([...search, ev.target.search.value]);
        }}
      >
        <textarea
          rows="60"
          cols="40"
          className=" h-40 w-90 mb-1 px-2 hover:bg-purple-200 rounded-lg capitalize border-2 bg-white border-black shadow-black shadow-sm"
          type="text"
          name="search"
          required
          placeholder="Escribe un comentario..."
          autoFocus
          size="42"
          autoComplete="off"
        ></textarea>
        <button
          type="submit"
          className="text-white rounded-full whitespace-nowrap bg-[#8a4af3] hover:bg-purple-900 font-bold sm:text-xs py-2 px-4 duration-300 hover:shadow-inner hover:shadow-neutral-800"
        >
          Comentar
        </button>
        <div className="max-h-80 overflow-x-auto">
          <ul className=" flex flex-col flex-wrap space-y-1  ">
            {search
              .slice(0)
              .reverse()
              .map((coment, index) => (
                <li
                  key={index}
                  className=" flex break-all w-80 items-center capitalize rounded-lg border-2 bg-[#f0f2f5] hover:bg-purple-200 border-black shadow-black shadow-sm"
                >
                  {coment}
                </li>
              ))}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default Comentary;
